import { X } from '@phosphor-icons/react';

import Modal from '@/components/Modal';
import useGetSubClassStudentFile from '@/hooks/class/useGetSubClassStudentFile';
import FileActionButtons from '@/pages/Admin/Class/components/FileActionButtons';
import useGeneralFileUpdate from '@/pages/Admin/Class/hooks/useGeneralFileUpdate';
import useStudentFileUpdate from '@/pages/Admin/Class/hooks/useStudentFileUpdate';

interface FileItemModalProps {
  assignmentType: string;
  assignmentFileId: number;
  assignmentFileUrl: string | undefined;
  isVisible: boolean;
  onClose: () => void;
}

function FileItemModal({
  assignmentType,
  assignmentFileId,
  assignmentFileUrl,
  isVisible,
  onClose,
}: FileItemModalProps) {
  const { data: studentFile } = useGetSubClassStudentFile({
    assignmentAnswerFileId: assignmentFileId,
    enabled: assignmentType === '시험',
  });

  const { mutation: generalFileMutation } = useGeneralFileUpdate({
    assignmentFileId,
  });

  const { mutation: studentFileMutation } = useStudentFileUpdate({
    assignmentAnswerFileId: assignmentFileId,
  });

  const updateFile = (type: 'general' | 'student') => {
    return (file: File | null) => {
      if (!file) return;

      if (type === 'general') {
        generalFileMutation.mutate({
          assignmentFileId,
          file,
        });
      }
      if (type === 'student') {
        studentFileMutation.mutate({
          assignmentAnswerFileId: assignmentFileId,
          file,
        });
      }
    };
  };

  return (
    <Modal size={'sm'} isVisible={isVisible} onClose={onClose}>
      <div className={'w-full h-full flex-col-center gap-10 p-10 pb-30'}>
        <button type='button' className='block ml-auto' onClick={onClose}>
          <X size={24} />
        </button>

        <div className={'text-18'}>
          {assignmentType} [ {assignmentFileId} ]
        </div>

        <FileActionButtons
          fileType={assignmentType}
          fileUrl={assignmentFileUrl}
          updateHandler={updateFile('general')}
        />
        {studentFile && (
          <FileActionButtons
            fileType={'제출용'}
            fileUrl={studentFile?.filePresignedUrl}
            updateHandler={updateFile('student')}
          />
        )}
      </div>
    </Modal>
  );
}

export default FileItemModal;
