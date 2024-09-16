import useGetSubClassStudentFile from '@/hooks/class/useGetSubClassStudentFile';

interface ExamContentProps {
  pdfUrl: string | null;
  pdfFileId: number | null;
}

function ExamContent({ pdfUrl, pdfFileId }: ExamContentProps) {
  const { data: hwp } = useGetSubClassStudentFile({
    assignmentAnswerFileId: pdfFileId,
  });

  return (
    <div className={'w-full'}>
      <div className={'w-full flex-col-center sm:flex-row-center gap-30'}>
        <a
          href={pdfUrl ?? ''}
          target={'_blank'}
          className={
            'p-10 text-20 border-2 border-primary-300 rounded-lg hover:bg-primary-300 hover:text-white transition ease-in-out delay-50'
          }
          rel='noreferrer'
        >
          pdf 새 탭에서 열기
        </a>
        <a
          href={hwp?.filePresignedUrl}
          className={
            'p-10 text-20 border-2 border-primary-300 rounded-lg hover:bg-primary-300 hover:text-white transition ease-in-out delay-50'
          }
        >
          과제 제출용 hwp 다운로드
        </a>
      </div>
      <iframe
        src={pdfUrl ?? ''}
        title={'exam-pdf'}
        className={'w-full h-[600px] md:h-[1000px] p-40 md:p-80'}
      ></iframe>
    </div>
  );
}

export default ExamContent;
