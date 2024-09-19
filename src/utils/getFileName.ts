export const getFileName = (url: string) => {
  const path = url.split('?')[0];
  const fileName = path.split('/').pop();
  return fileName;
};
