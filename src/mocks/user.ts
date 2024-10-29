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

  return {
    memberId: id,
    role: 'BASIC',
    name: `학생${id.toString()}`,
    email: 'test@email.com',
    school: 'abcdedu 중학교',
    studentId: id,
    createdAt: new Date().toISOString().toString(),
  };
}

const mockPageOneContent = Array(10)
  .fill(null)
  .map(() => generateMockUser());
const mockPageTwoContent = Array(3)
  .fill(null)
  .map(() => generateMockUser());

export const mockUserResponse = http.get(
  `http://localhost:3000/api/v1/admin/members`,
  ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page');

    if (page === '1') {
      return HttpResponse.json(
        {
          resultCode: 'SUCCESS',
          result: {
            content: mockPageOneContent,
            currentPage: 1,
            pageSize: 10,
            totalElements: 13,
            totalPages: 2,
            last: false,
          },
        },
        { status: 200 },
      );
    }

    if (page === '2') {
      return HttpResponse.json(
        {
          resultCode: 'SUCCESS',
          result: {
            content: mockPageTwoContent,
            currentPage: 1,
            pageSize: 10,
            totalElements: 13,
            totalPages: 2,
            last: false,
          },
        },
        { status: 200 },
      );
    }

    return HttpResponse.json({ message: 'Page not found' }, { status: 404 });
  },
);
