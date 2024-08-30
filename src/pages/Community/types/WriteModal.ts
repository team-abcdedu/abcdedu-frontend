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
