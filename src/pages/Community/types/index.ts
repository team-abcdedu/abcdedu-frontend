export interface PostData {
  id: number;
  title: string;
  author: string;
  timestamp: string;
  content: string;
  // onclose: boolean;
  views: number;
  comments: number;
  likes: number;
}

export interface PostTableProps {
  onSelectPost: (post: PostData) => void;
}

export interface PostDetailsProps {
  post: PostData | null;
  onClose: () => void;
}

export interface WritePostModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export interface WritePostFormData {
  title: string;
  content: string;
  file?: File;
  isSecret: boolean;
  allowComments: boolean;
}
