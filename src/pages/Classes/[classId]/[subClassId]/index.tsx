import { useParams } from 'react-router-dom';

import SubClassContent from '../../components/SubClassContent';

function SubClass() {
  const { subClassId } = useParams();

  return (
    <>
      <SubClassContent subClassId={subClassId ?? ''} />
    </>
  );
}

export default SubClass;
