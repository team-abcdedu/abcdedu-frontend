import useGetSubClassFileList from '@/hooks/class/useGetSubClassFileList';
import GeneralFileItem from '@/pages/Admin/Class/components/GeneralFileItem';

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
      <div className={'row-start-5 col-span-5 flex flex-col pt-5 gap-5'}>
        {data.map(file => (
          <GeneralFileItem
            key={file.assignmentFileId}
            subLectureId={subLectureId}
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
