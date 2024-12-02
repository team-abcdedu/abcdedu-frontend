import { renderHook } from '@testing-library/react';

import { ApiError } from '@/libs/errors';

// mocking useBoundStore - user.role
const setUser = (role: string | undefined) => {
  vi.doMock('@/stores', () => ({
    default: () => ({ role }),
  }));
};

// mocking useSubClassFile hook
const mockUseSubClassFile = ({
  fileData = { filePresignedUrl: '', assignmentAnswerFileId: 0 },
  isLoading = false,
  isError = false,
  error = null,
}: {
  fileData?: { filePresignedUrl: string; assignmentAnswerFileId: number };
  isLoading?: boolean;
  isError?: boolean;
  error?: Error | ApiError | null;
}) => {
  vi.doMock('@/hooks/class/useSubClassFile', () => ({
    default: () => ({ fileData, isLoading, isError, error }),
  }));
};

const mockPdfFileData = {
  filePresignedUrl: 'mock/mockFile.pdf?abcde',
  assignmentAnswerFileId: 1,
};

const mockHwpFileData = {
  filePresignedUrl: 'mock/mockFile.hwp?abcde',
  assignmentAnswerFileId: 1,
};

// mocking user.role and useSubClassFile
const setUserAndFile = (
  role: string | undefined,
  isPdfFile: boolean,
  status: 'ready' | 'loading' | 'error' | 'apiError' | 'noFile',
) => {
  setUser(role);
  if (status === 'ready') {
    mockUseSubClassFile({
      fileData: isPdfFile ? mockPdfFileData : mockHwpFileData,
    });
  }
  if (status === 'loading') {
    mockUseSubClassFile({ isLoading: true });
  }
  if (status === 'error') {
    mockUseSubClassFile({ isError: true, error: new Error() });
  }
  if (status === 'apiError') {
    mockUseSubClassFile({
      isError: true,
      error: new ApiError('Api Error', 400),
    });
  }
  if (status === 'noFile') {
    mockUseSubClassFile({});
  }
};

// dynamic import useSubClassFileHandler
const importAndRenderHook = async (fileType: string) => {
  const { default: useSubClassFileHandler } = await import(
    './useSubClassFileHandler'
  );

  const { result } = renderHook(() =>
    useSubClassFileHandler({
      fileInfo: {
        assignmentFileId: 1,
        assignmentType: fileType,
      },
    }),
  );
  return result.current;
};

describe('useSubClassFileHandler 훅 테스트', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });

  // 관리자 테스트
  describe('관리자 테스트', () => {
    test('1. 관리자 / 이론 / pdf / 파일 준비됨', async () => {
      setUserAndFile('관리자', true, 'ready');
      const result = await importAndRenderHook('이론');

      expect(result.canAccessTheoryFile).toBeTruthy();
      expect(result.handleClick()).toStrictEqual({
        status: 'success',
        message: '파일이 열렸습니다.',
        isNewWindowOpen: true,
        fileUrl: mockPdfFileData.filePresignedUrl,
      });
    });

    test('2. 관리자 / 이론 / hwp / 파일 준비됨', async () => {
      setUserAndFile('관리자', false, 'ready');
      const result = await importAndRenderHook('이론');

      expect(result.canAccessTheoryFile).toBeTruthy();
      expect(result.handleClick()).toStrictEqual({
        status: 'success',
        message: '파일이 열렸습니다.',
        isNewWindowOpen: false,
        fileUrl: mockHwpFileData.filePresignedUrl,
      });
    });

    test('3. 관리자 / 시험 / pdf / 파일 준비됨', async () => {
      setUserAndFile('관리자', true, 'ready');
      const result = await importAndRenderHook('시험');

      expect(result.canAccessTheoryFile).toBeTruthy();
      expect(result.handleClick()).toStrictEqual({
        status: 'success',
        message: '파일이 열렸습니다.',
        isNewWindowOpen: true,
        fileUrl: mockPdfFileData.filePresignedUrl,
      });
    });

    test('4. 관리자 / 시험지 / hwp / 파일 준비됨', async () => {
      setUserAndFile('관리자', false, 'ready');
      const result = await importAndRenderHook('시험지');

      expect(result.canAccessTheoryFile).toBeTruthy();
      expect(result.handleClick()).toStrictEqual({
        status: 'success',
        message: '파일이 열렸습니다.',
        isNewWindowOpen: false,
        fileUrl: mockHwpFileData.filePresignedUrl,
      });
    });

    test('5. 관리자 / 이론 / hwp / 파일 로딩중', async () => {
      setUserAndFile('관리자', false, 'loading');
      const result = await importAndRenderHook('이론');

      expect(result.canAccessTheoryFile).toBeTruthy();
      expect(result.handleClick()).toStrictEqual({
        status: 'loading',
        message: `이론 파일을 로딩 중입니다. 잠시 후 다시 시도해주세요`,
      });
    });

    test('6. 관리자 / 시험 / pdf / 파일 에러 not ApiError', async () => {
      setUserAndFile('관리자', true, 'error');
      const result = await importAndRenderHook('시험');

      expect(result.canAccessTheoryFile).toBeTruthy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: `시험 파일을 불러오는 중 문제가 생겼습니다.`,
      });
    });

    test('7. 관리자 / 시험지 / pdf / 파일 에러 ApiError', async () => {
      setUserAndFile('관리자', true, 'apiError');
      const result = await importAndRenderHook('시험지');

      expect(result.canAccessTheoryFile).toBeTruthy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: 'Api Error',
      });
    });

    test('8. 관리자 / 이론 / pdf / 파일 없음', async () => {
      setUserAndFile('관리자', true, 'noFile');
      const result = await importAndRenderHook('이론');

      expect(result.canAccessTheoryFile).toBeTruthy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: `이론 파일이 없습니다.`,
      });
    });
  });

  // 학생 테스트
  describe('학생 테스트', () => {
    test('1. 학생 / 시험 / pdf / 파일 준비됨', async () => {
      setUserAndFile('학생', true, 'ready');
      const result = await importAndRenderHook('시험');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'success',
        message: '파일이 열렸습니다.',
        isNewWindowOpen: true,
        fileUrl: mockPdfFileData.filePresignedUrl,
      });
    });

    test('2. 학생 / 시험 / hwp / 파일 준비됨', async () => {
      setUserAndFile('학생', false, 'ready');
      const result = await importAndRenderHook('시험');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'success',
        message: '파일이 열렸습니다.',
        isNewWindowOpen: false,
        fileUrl: mockHwpFileData.filePresignedUrl,
      });
    });

    test('3. 학생 / 자료 / pdf / 파일 준비됨', async () => {
      setUserAndFile('학생', true, 'ready');
      const result = await importAndRenderHook('자료');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'success',
        message: '파일이 열렸습니다.',
        isNewWindowOpen: false,
        fileUrl: mockPdfFileData.filePresignedUrl,
      });
    });

    test('4. 학생 / 자료 / hwp / 파일 준비됨', async () => {
      setUserAndFile('학생', false, 'ready');
      const result = await importAndRenderHook('자료');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'success',
        message: '파일이 열렸습니다.',
        isNewWindowOpen: false,
        fileUrl: mockHwpFileData.filePresignedUrl,
      });
    });

    test('5. 학생 / 시험지 / pdf / 파일 준비됨', async () => {
      setUserAndFile('학생', true, 'ready');
      const result = await importAndRenderHook('시험지');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'success',
        message: '파일이 열렸습니다.',
        isNewWindowOpen: false,
        fileUrl: mockPdfFileData.filePresignedUrl,
      });
    });

    test('6. 학생 / 시험지 / pdf / 파일 준비됨', async () => {
      setUserAndFile('학생', true, 'ready');
      const result = await importAndRenderHook('시험지');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'success',
        message: '파일이 열렸습니다.',
        isNewWindowOpen: false,
        fileUrl: mockPdfFileData.filePresignedUrl,
      });
    });

    test('7. 학생 / 이론 / pdf / 파일 준비됨', async () => {
      setUserAndFile('학생', true, 'ready');
      const result = await importAndRenderHook('이론');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '관리자만 이용 가능합니다.',
      });
    });

    test('8. 학생 / 시험 / pdf / 파일 로딩중', async () => {
      setUserAndFile('학생', true, 'loading');
      const result = await importAndRenderHook('시험');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'loading',
        message: `시험 파일을 로딩 중입니다. 잠시 후 다시 시도해주세요`,
      });
    });

    test('8. 학생 / 자료 / pdf / 파일 에러 not ApiError', async () => {
      setUserAndFile('학생', true, 'error');
      const result = await importAndRenderHook('자료');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: `자료 파일을 불러오는 중 문제가 생겼습니다.`,
      });
    });

    test('9. 학생 / 시험지 / hwp / 파일 에러 ApiError', async () => {
      setUserAndFile('학생', false, 'apiError');
      const result = await importAndRenderHook('시험지');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: `Api Error`,
      });
    });

    test('10. 학생 / 시험지 / hwp / 파일 없음', async () => {
      setUserAndFile('학생', false, 'noFile');
      const result = await importAndRenderHook('시험지');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: `시험지 파일이 없습니다.`,
      });
    });
  });

  // 새싹 테스트
  describe('새싹 테스트', () => {
    test('1. 새싹 / 시험 / hwp / 파일 준비됨', async () => {
      setUserAndFile('새싹', false, 'ready');
      const result = await importAndRenderHook('시험');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('2. 새싹 / 이론 / pdf / 파일 준비됨', async () => {
      setUserAndFile('새싹', true, 'ready');
      const result = await importAndRenderHook('이론');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('3. 새싹 / 자료 / pdf / 파일 준비됨', async () => {
      setUserAndFile('새싹', true, 'ready');
      const result = await importAndRenderHook('자료');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('4. 새싹 / 시험지 / hwp / 파일 준비됨', async () => {
      setUserAndFile('새싹', false, 'ready');
      const result = await importAndRenderHook('시험지');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('5. 새싹 / 자료 / hwp / 파일 로딩중', async () => {
      setUserAndFile('새싹', false, 'loading');
      const result = await importAndRenderHook('자료');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('6. 새싹 / 자료 / hwp / 파일 에러 not ApiError', async () => {
      setUserAndFile('새싹', false, 'error');
      const result = await importAndRenderHook('자료');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('7. 새싹 / 자료 / hwp / 파일 에러 ApiError', async () => {
      setUserAndFile('새싹', false, 'apiError');
      const result = await importAndRenderHook('자료');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('8. 새싹 / 자료 / hwp / 파일 없음', async () => {
      setUserAndFile('새싹', false, 'noFile');
      const result = await importAndRenderHook('자료');

      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });
  });

  // 로그인 하지 않은 유저 테스트
  describe('로그인하지 않은 유저 테스트', () => {
    test('1. no role / 이론 / pdf / 파일 준비됨', async () => {
      setUserAndFile('', true, 'ready');
      const result = await importAndRenderHook('이론');
      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('2. no role / 자료 / pdf / 파일 준비됨', async () => {
      setUserAndFile('', true, 'ready');
      const result = await importAndRenderHook('자료');
      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('3. no role / 시험 / pdf / 파일 준비됨', async () => {
      setUserAndFile('', true, 'ready');
      const result = await importAndRenderHook('시험');
      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('4. no role / 시험지 / hwp / 파일 준비됨', async () => {
      setUserAndFile(undefined, false, 'ready');
      const result = await importAndRenderHook('시험지');
      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('5. no role / 시험지 / hwp / 파일 로딩중', async () => {
      setUserAndFile(undefined, false, 'loading');
      const result = await importAndRenderHook('시험지');
      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('6. no role / 시험지 / hwp / 파일 에러 not ApiError', async () => {
      setUserAndFile(undefined, false, 'error');
      const result = await importAndRenderHook('시험지');
      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('7. no role / 시험지 / hwp / 파일 에러 ApiError', async () => {
      setUserAndFile(undefined, false, 'apiError');
      const result = await importAndRenderHook('시험지');
      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });

    test('8. no role / 시험지 / hwp / 파일 없음', async () => {
      setUserAndFile(undefined, false, 'noFile');
      const result = await importAndRenderHook('시험지');
      expect(result.canAccessTheoryFile).toBeFalsy();
      expect(result.handleClick()).toStrictEqual({
        status: 'error',
        message: '학생 이상만 이용 가능합니다.',
      });
    });
  });
});
