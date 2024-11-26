import { X } from '@phosphor-icons/react';
import { v4 as uuidv4 } from 'uuid';

import Loader from '@/components/Loader';
import Modal from '@/components/Modal';
import useHomeworkReplies from '@/pages/Admin/Homework/hooks/useHomeworkReplies';

interface HomeworkRepliesViewModalProps {
  homeworkId: number | null;
  isVisible: boolean;
  onClose: () => void;
}

function HomeworkRepliesViewModal({
  homeworkId,
  isVisible,
  onClose,
}: HomeworkRepliesViewModalProps) {
  const { homeworkReplies, isError, isLoading } = useHomeworkReplies({
    homeworkId,
  });

  return (
    <Modal isVisible={isVisible} size={'lg'}>
      <Modal.Header>
        <button
          type='button'
          className='absolute top-12 right-12'
          onClick={onClose}
        >
          <X size={20} />
        </button>
      </Modal.Header>
      <Modal.Content>
        <div className={'w-[90vw] h-[80vh] overflow-y-scroll table-fixed'}>
          {isError && <div>데이터를 불러오는 데 문제가 발생했습니다.</div>}
          {isLoading && <Loader />}

          {homeworkReplies && (
            <table
              className={
                'w-full border-separate border border-spacing-x-0.5 border-spacing-y-4 border-black'
              }
            >
              <thead className={'sticky top-0'}>
                <tr className={'h-full overflow-hidden bg-slate-300'}>
                  {homeworkReplies.questionHeaders.map(question => (
                    <th
                      key={uuidv4()}
                      className={'border border-black text-center'}
                    >
                      <div
                        className={
                          'min-w-[20vw] min-h-[15vh] h-max p-10 flex-row-center break-keep'
                        }
                      >
                        {question}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {...homeworkReplies.records.map(reply => (
                  <tr key={uuidv4()} className={'h-full overflow-hidden'}>
                    {reply.map(answer => (
                      <td
                        key={uuidv4()}
                        className={
                          'border border-black text-center bg-slate-100'
                        }
                      >
                        <div
                          className={
                            'min-w-[20vw] min-h-[15vh] h-max p-5 flex-row-center break-keep'
                          }
                        >
                          {answer}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default HomeworkRepliesViewModal;
