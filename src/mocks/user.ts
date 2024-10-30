import { http, HttpResponse } from 'msw';

function generateId() {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
}

const idGenerator = generateId();

function generateMockUser() {
  const id = idGenerator().toString();
  const idxFromId = Number(id) % 3;

  return {
    memberId: id,
    role: ['BASIC', 'STUDENT', 'ADMIN'][idxFromId],
    name: `학생${id.toString()}`,
    email: 'test@email.com',
    school: `${['a', 'b', 'c'][idxFromId]} 중학교`,
    studentId: id,
    createdAt: new Date().toISOString().toString(),
  };
}

const mockDataSize = 45;

const mockData = Array(mockDataSize)
  .fill(null)
  .map(() => generateMockUser());

export const mockUserResponse = http.get(
  `http://localhost:3000/api/v1/admin/members`,
  ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page');
    const name = url.searchParams.get('name');
    const school = url.searchParams.get('school');
    const studentId = url.searchParams.get('studentId');
    const role = url.searchParams.get('role');

    let data = null;

    if (name) {
      data = mockData.filter(v => v.name.includes(name));
    } else if (school) {
      data = mockData.filter(v => v.school.includes(school));
    } else if (studentId) {
      data = mockData.filter(v => v.studentId.includes(studentId));
    } else if (role) {
      data = mockData.filter(v => v.role === role);
    }

    if (!data) data = mockData;

    const size = data.length;
    const currentPage = Number(page);
    const totalPages = size / 10 + 1;

    if (currentPage > totalPages)
      return HttpResponse.json({ message: 'Page not found' }, { status: 404 });

    const isLastPage = currentPage === totalPages;
    const content = isLastPage
      ? data.slice(10 * (currentPage - 1))
      : data.slice(10 * (currentPage - 1), 10 * currentPage);

    return HttpResponse.json({
      resultCode: 'SUCCESS',
      result: {
        content,
        currentPage,
        pageSize: 10,
        totalElements: size,
        totalPages,
        last: isLastPage,
      },
    });
  },
);
