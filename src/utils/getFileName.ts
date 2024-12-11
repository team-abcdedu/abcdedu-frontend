export const getFileName = (url: string) => {
  const path = url.split('?')[0];
  const fileName = path.split('/').pop();

  if (!fileName) throw new Error('파일 이름을 가져올 수 없습니다.');
  return fileName;
};
