import { renderHook } from '@testing-library/react';
import { expect } from 'vitest';

import { ClassData } from '@/types/class';

function generateId() {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
}

const idGenerator = generateId();

const generateSubClassData = (title: string) => {
  return {
    title: `subClass title ${title}`,
    orderNumber: idGenerator(),
    description: `subClass description ${title}`,
    subClassId: idGenerator(),
  };
};

const generateClassData = (title: string, subClassLength: number) => {
  return {
    title: `title ${title}`,
    subTitle: `subTitle ${title}`,
    description: `description ${title}`,
    subClasses: Array.from({ length: subClassLength }, (_, i) =>
      generateSubClassData((i + 1).toString()),
    ),
  };
};

const generateClassDataList = (length: number) => {
  return Array.from({ length }, (_, i) =>
    generateClassData(String.fromCharCode(65 + i), i + 1),
  );
};

const mockClassDataList = generateClassDataList(4);

const findMockClass = (classTitle: string) => {
  return mockClassDataList.find(c => c.title === classTitle);
};

const findMockSubClass = (classTitle: string, subClassOrderNumber: number) => {
  const mockClass = findMockClass(classTitle);
  return mockClass?.subClasses?.find(
    s => s.orderNumber === subClassOrderNumber,
  );
};

// mocking useParams
const mockUseParams = (classId?: string, subClassId?: string) => {
  vi.doMock('react-router-dom', () => ({
    useParams: () => ({ classId, subClassId }),
  }));
};

// mocking useParams and render hook
const setParamsAndRenderHook = async ({
  classId,
  subClassId,
  classDataList,
}: {
  classId?: string;
  subClassId?: string;
  classDataList: ClassData[];
}) => {
  mockUseParams(classId, subClassId);

  // useParams 동적 모킹 반영하기 위해 해당 훅 리로드
  const { default: useClassDataByParams } = await import(
    './useClassDataByParams'
  );
  const { result } = renderHook(() => useClassDataByParams({ classDataList }));
  return result.current;
};

describe('useClassDataByParams 훅 테스트', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });

  test('classDataList 존재, classes/a 클래스 A 경로', async () => {
    const result = await setParamsAndRenderHook({
      classId: 'a',
      classDataList: mockClassDataList,
    });

    expect(result.currentPageClassData).toBe(findMockClass('a'));
    expect(result.currentPageSubClassData).toBeUndefined();
    expect(result.isSubClassPage).toBeFalsy();
  });

  test('classdDataList 존재, classes/x 존재하지 않는 클래스 경로', async () => {
    const result = await setParamsAndRenderHook({
      classId: 'a',
      classDataList: [],
    });

    expect(result.currentPageSubClassData).toBeUndefined();
    expect(result.currentPageSubClassData).toBeUndefined();
    expect(result.isSubClassPage).toBeFalsy();
  });

  test('classdDataList 존재, classes/a/1 서브클래스 A-1 경로', async () => {
    const result = await setParamsAndRenderHook({
      classId: 'a',
      subClassId: '1',
      classDataList: [],
    });

    expect(result.currentPageSubClassData).toBe(findMockClass('a'));
    expect(result.currentPageSubClassData).toBe(findMockSubClass('a', 1));
    expect(result.isSubClassPage).toBeTruthy();
  });

  test('classdDataList 존재, classes/a/4 서브클래스 A-4 존재하지 않는 서브클래스 경로', async () => {
    const result = await setParamsAndRenderHook({
      classId: 'a',
      subClassId: '4',
      classDataList: [],
    });

    expect(result.currentPageSubClassData).toBe(findMockClass('a'));
    expect(result.currentPageSubClassData).toBeUndefined();
    expect(result.isSubClassPage).toBeTruthy();
  });

  test('classdDataList 빈 값, classes/a 클래스 경로', async () => {
    const result = await setParamsAndRenderHook({
      classId: 'a',
      classDataList: [],
    });

    expect(result.currentPageSubClassData).toBeUndefined();
    expect(result.currentPageSubClassData).toBeUndefined();
    expect(result.isSubClassPage).toBeFalsy();
  });

  test('classdDataList 빈 값, classes/a/1 서브클래스 경로', async () => {
    const result = await setParamsAndRenderHook({
      classId: 'a',
      subClassId: '1',
      classDataList: [],
    });

    expect(result.currentPageSubClassData).toBeUndefined();
    expect(result.currentPageSubClassData).toBeUndefined();
    expect(result.isSubClassPage).toBeTruthy();
  });
});
