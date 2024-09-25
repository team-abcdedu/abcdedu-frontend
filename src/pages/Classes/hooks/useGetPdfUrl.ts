import { useCallback, useEffect, useState } from 'react';

import { convertURLtoFile } from '@/utils/convertURLtoFile';

function useGetPdfUrl({
  s3Url,
  enabled = true,
}: {
  s3Url: string | undefined;
  enabled?: boolean;
}) {
  const [pdfUrl, setPdfUrl] = useState<string | undefined>(undefined);

  const getPdfUrl = useCallback(async () => {
    try {
      if (!s3Url || !enabled) {
        return;
      }
      const file = await convertURLtoFile(s3Url, 'pdf', {
        type: 'application/pdf',
      });
      const fileUrl = URL.createObjectURL(file);
      setPdfUrl(fileUrl);
    } catch (error) {
      alert('시험 파일을 불러오는데 실패했습니다.');
      console.log('파일 변환 실패 : ', error);
    }
  }, [s3Url]);

  useEffect(() => {
    if (s3Url) {
      getPdfUrl();
    }
  }, [s3Url, getPdfUrl]);

  return { pdfUrl };
}

export default useGetPdfUrl;
