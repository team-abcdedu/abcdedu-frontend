interface FileItemDetailsProps {
  type: string;
  url: string;
}

function FileItemDetails({ type, url }: FileItemDetailsProps) {
  return (
    <>
      <div className={'flex items-center'}>
        <span>{type}</span>
      </div>
      <a href={url} download className={'text-14 text-primary-300'}>
        다운로드
      </a>
    </>
  );
}

export default FileItemDetails;
