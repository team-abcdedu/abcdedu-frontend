import useGetSubClassStudentFile from '@/hooks/class/useGetSubClassStudentFile';

interface ExamContentProps {
  pdfUrl: string | undefined;
  pdfFileId: number | null;
}

function ExamContent({ pdfUrl, pdfFileId }: ExamContentProps) {
  const { data: hwp } = useGetSubClassStudentFile({
    assignmentAnswerFileId: pdfFileId,
    enabled: !!pdfFileId,
  });

  return (
    <div className={'w-full pb-100'}>
      <div className={'w-full flex-col-center sm:flex-row-center gap-30'}>
        <a
          href={pdfUrl}
          target={'_blank'}
          rel={'noreferrer noopener'}
          className={
            'p-10 text-20 border-2 border-primary-300 rounded-lg hover:bg-primary-300 hover:text-white transition ease-in-out delay-50'
          }
        >
          메뉴얼 pdf 다운로드
        </a>
        <a
          href={hwp?.filePresignedUrl}
          target={'_blank'}
          rel={'noreferrer noopener'}
          className={
            'p-10 text-20 border-2 border-primary-300 rounded-lg hover:bg-primary-300 hover:text-white transition ease-in-out delay-50'
          }
        >
          제출용 hwp 다운로드
        </a>
      </div>
    </div>
  );
}

export default ExamContent;
