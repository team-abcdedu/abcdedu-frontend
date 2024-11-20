import { convertURLtoFile } from '@/utils/convertURLtoFile';

export const convertS3ToPdfUrl = async (s3Url: string): Promise<string> => {
  const file = await convertURLtoFile(s3Url, 'pdf', {
    type: 'application/pdf',
  });
  return URL.createObjectURL(file);
};
