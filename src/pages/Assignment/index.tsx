import AssignmentForm from '@/pages/Assignment/components/AssignmentForm';
import { assignmentInfoMap } from '@/pages/Assignment/constants';

function Assignment() {
  const assingmentInfo = assignmentInfoMap.default;

  return (
    <div>
      <AssignmentForm assignmentInfo={assingmentInfo} readOnly={false} />
    </div>
  );
}

export default Assignment;
