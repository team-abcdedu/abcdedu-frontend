export const getFileExtension = (fileName: string | undefined) => {
  return fileName?.split('.').pop();
};
