export interface WritePostModalProps {
  isVisible: boolean;
  onClose: () => void;
  boardId: number;
}

export interface WritePostFormData {
  data: {
    boardId: number; // 게시판 구분
    title: string; // 제목
    content?: string; // 내용
    secret: boolean; // 비밀
    commentAllow: boolean; // 코멘트 얼라우
  };
  file: File | null;
}
