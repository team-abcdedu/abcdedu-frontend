import { useParams } from 'react-router-dom';

import { useSubClassIdMap } from '@/components/ClassLayout';

import SubClassContent from '../../components/SubClassContent';

function SubClass() {
  const { classId, subClassId } = useParams();

  const subClassIdMap = useSubClassIdMap();

  return (
    <>
      <SubClassContent
        subClassId={
          subClassIdMap[`${classId?.toUpperCase()}-${subClassId}`] ?? ''
        }
      />
    </>
  );
}

export default SubClass;
