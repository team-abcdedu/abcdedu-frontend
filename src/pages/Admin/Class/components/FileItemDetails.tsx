import { getFileName } from '@/utils/getFileName';

interface FileItemDetailsProps {
  type: string;
  id: number;
  url: string;
}

function FileItemDetails({ type, id, url }: FileItemDetailsProps) {
  return (
    <>
      <div className={'flex items-center gap-5'}>
        <span className={'text-12 text-neutral-500'}>종류</span>
        <span>{type}</span>
      </div>
      {type === '제출용' ? (
        <></>
      ) : (
        <div className={'flex items-center gap-5'}>
          <span className={'text-12 text-neutral-500'}>파일 ID</span>
          <span>{id}</span>
        </div>
      )}

      <a
        href={url}
        download={getFileName(url)}
        className={'text-14 text-primary-300'}
      >
        다운로드
      </a>
    </>
  );
}

export default FileItemDetails;
