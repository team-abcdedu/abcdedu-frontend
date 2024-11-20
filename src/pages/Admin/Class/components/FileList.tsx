import useSubClassFileInfoList from '@/hooks/class/useSubClassFileInfoList';
import FileItem from '@/pages/Admin/Class/components/FileItem';

interface FileListProps {
  subLectureId: number;
}

function FileList({ subLectureId }: FileListProps) {
  const { subClassFileInfoList, isLoading, isError } = useSubClassFileInfoList({
    subLectureId,
  });

  if (isError || isLoading) {
    return (
      <span className={'col-start-5 text-13'}>
        {isError ? 'Error' : 'Loading...'}
      </span>
    );
  }

  if (subClassFileInfoList && subClassFileInfoList.length > 0) {
    return (
      <div className={'row-start-5 col-span-5 flex flex-col pt-5 gap-5'}>
        {['이론', '자료', '시험', '시험지'].map(type => {
          const findFileInfo = subClassFileInfoList.find(
            fileInfo => fileInfo.assignmentType === type,
          );
          return findFileInfo ? (
            <FileItem
              key={findFileInfo.assignmentFileId}
              subLectureId={subLectureId}
              fileInfo={findFileInfo}
            />
          ) : null;
        })}
      </div>
    );
  }

  return <span className={'col-start-5 text-13'}>None</span>;
}

export default FileList;
