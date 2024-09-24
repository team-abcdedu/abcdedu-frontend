import { useCallback, useEffect, useRef } from 'react';

import useGetSubClassStudentFile from '@/hooks/class/useGetSubClassStudentFile';
import useHeaderStore from '@/stores/headerStore';

interface ExamContentProps {
  examFileUrl: string | undefined;
  studentFileId: number | undefined;
}

function ExamContent({ examFileUrl, studentFileId }: ExamContentProps) {
  const buttonStyle =
    'p-5 md:p-10 text-18 md:text-20 border-2 border-primary-300 rounded-lg hover:bg-primary-300 hover:text-white transition ease-in-out delay-50';

  const { data: examStudentFile } = useGetSubClassStudentFile({
    assignmentAnswerFileId: studentFileId,
    enabled: !!studentFileId,
  });

  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const { headerRef } = useHeaderStore();
  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          headerRef?.classList.add('hidden');
        } else {
          headerRef?.classList.remove('hidden');
        }
      });
    },
    [headerRef],
  );

  useEffect(() => {
    if (iframeRef.current && headerRef) {
      const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
      });
      observer.observe(iframeRef.current);
    }
  }, [handleIntersect, headerRef]);

  return (
    <div className={'w-full pb-50 flex-col-center gap-30'}>
      <div className={'w-full flex-col-center sm:flex-row-center gap-30'}>
        <a href={examFileUrl} download className={buttonStyle}>
          시험 파일 다운로드
        </a>
        {examStudentFile && (
          <a
            href={examStudentFile.filePresignedUrl}
            download
            className={buttonStyle}
          >
            제출용 파일 다운로드
          </a>
        )}
      </div>
      <div
        className={'min-w-[300px] w-[85%] h-[500px] sm:h-[700px] md:h-[900px]'}
      >
        <iframe
          ref={iframeRef}
          src={examFileUrl}
          title={'exam'}
          className={'w-full h-full'}
        />
      </div>
    </div>
  );
}

export default ExamContent;
