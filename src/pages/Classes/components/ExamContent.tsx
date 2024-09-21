import useGetSubClassStudentFile from '@/hooks/class/useGetSubClassStudentFile';
import { getFileName } from '@/utils/getFileName';

interface ExamContentProps {
  examFileUrl: string | undefined;
  studentFileId: number | undefined;
}

function ExamContent({ examFileUrl, studentFileId }: ExamContentProps) {
  const { data: examStudentFile } = useGetSubClassStudentFile({
    assignmentAnswerFileId: studentFileId,
    enabled: !!studentFileId,
  });

  return (
    <div className={'w-full pb-100'}>
      <div className={'w-full flex-col-center sm:flex-row-center gap-30'}>
        <a
          href={examFileUrl}
          download={`${getFileName(examFileUrl ?? '')}_시험`}
          className={
            'p-10 text-20 border-2 border-primary-300 rounded-lg hover:bg-primary-300 hover:text-white transition ease-in-out delay-50'
          }
        >
          시험 파일 다운로드
        </a>
        {examStudentFile && (
          <a
            href={examStudentFile.filePresignedUrl}
            download={`${getFileName(examStudentFile.filePresignedUrl)}_학생용`}
            className={
              'p-10 text-20 border-2 border-primary-300 rounded-lg hover:bg-primary-300 hover:text-white transition ease-in-out delay-50'
            }
          >
            제출용 파일 다운로드
          </a>
        )}
      </div>
    </div>
  );
}

export default ExamContent;
