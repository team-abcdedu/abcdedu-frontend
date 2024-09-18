import Modal from '@/components/Modal';

interface FileItemModalProps {
  fileUrl: string | undefined;
  isVisible: boolean;
  onClose: () => void;
}

function FileItemModal({ fileUrl, isVisible, onClose }: FileItemModalProps) {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className={'w-full h-full'}>
        <a
          href={fileUrl}
          target={'_blank'}
          download
          className={'text-primary-300'}
          rel='noreferrer'
        >
          다운로드
        </a>
      </div>
    </Modal>
  );
}

export default FileItemModal;
