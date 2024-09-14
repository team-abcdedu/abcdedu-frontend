import useGetSubClassFileList from '@/hooks/class/useGetSubClassFileList';
import FileItem from '@/pages/Admin/Class/components/FileItem';

interface FileListProps {
  subLectureId: number;
}

function FileList({ subLectureId }: FileListProps) {
  const { data, isLoading, isError } = useGetSubClassFileList({ subLectureId });

  if (isError || isLoading) {
    return (
      <span className={'col-start-5 text-13'}>
        {isError ? 'Error' : 'Loading...'}
      </span>
    );
  }

  if (data && data.length > 0) {
    return (
      <div
        className={
          'row-start-5 col-start-2 col-span-4 grid grid-cols-4 pt-5 gap-3'
        }
      >
        {data.map(file => (
          <FileItem
            key={file.assignmentFileId}
            assignmentType={file.assignmentType}
            assignmentFileId={file.assignmentFileId}
          />
        ))}
      </div>
    );
  }

  return <span className={'col-start-5 text-13'}>None</span>;
}

export default FileList;
