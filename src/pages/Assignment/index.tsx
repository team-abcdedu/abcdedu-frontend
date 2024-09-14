import AssignmentForm from '@/pages/Assignment/components/AssignmentForm';
import { assignmentInfoMap } from '@/pages/Assignment/constants';

function Assignment() {
  const assingmentInfo = assignmentInfoMap.default;
  const { title, topic, description } = assingmentInfo;

  return (
    <>
      <div
        className={
          'w-full min-h-[600px] px-30 flex-col-center gap-40 text-center break-keep'
        }
      >
        <h1 className={'w-full'}>
          <div className={'text-25 text-neutral-400'}>과제</div>
          <div className={'text-30 md:text-50 font-bold text-primary-300'}>
            {title}
          </div>
        </h1>
        <h2 className={`w-full text-18 md:text-22 font-semibold`}>[{topic}]</h2>
        <p className={`w-full text-16 md:text-20 whitespace-pre-wrap`}>
          {description}
        </p>
      </div>
      <AssignmentForm assignmentInfo={assingmentInfo} readOnly={false} />
    </>
  );
}

export default Assignment;
