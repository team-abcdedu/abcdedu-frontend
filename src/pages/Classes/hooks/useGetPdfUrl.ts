import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

function useGetPdfUrl({ examFileUrl }: { examFileUrl: string | undefined }) {
  const [pdfUrl, setPdfUrl] = useState<string | undefined>(undefined);

  const convertURLtoPdfFile = async (url: string) => {
    const response = await axios.get(url, {
      responseType: 'blob',
      withCredentials: true,
    });
    const blob = response.data;
    return new File([blob], 'exam-pdf', { type: 'application/pdf' });
  };

  const getPdfUrl = useCallback(async () => {
    try {
      if (!examFileUrl) {
        return;
      }
      const file = await convertURLtoPdfFile(examFileUrl);
      const fileUrl = URL.createObjectURL(file);
      setPdfUrl(fileUrl);
    } catch (error) {
      alert('시험 파일을 불러오는데 실패했습니다.');
      console.log('파일 변환 실패 : ', error);
    }
  }, [examFileUrl]);

  useEffect(() => {
    if (examFileUrl) {
      getPdfUrl();
    }
  }, [examFileUrl, getPdfUrl]);

  return { pdfUrl };
}

export default useGetPdfUrl;
