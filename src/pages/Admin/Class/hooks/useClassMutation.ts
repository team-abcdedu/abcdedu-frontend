import { useMutation } from '@tanstack/react-query';

import AdminClassApi from '@/services/admin/class';

function useClassMutation() {
  const classMutation = useMutation({
    mutationFn: (classData: {
      title: string;
      type: string;
      description: string;
    }) => AdminClassApi.createClass(classData),
  });

  const subClassMutation = useMutation({
    mutationFn: (subClassData: {
      classId: number;
      title: string;
      description: string;
      orderNumber: number;
    }) => AdminClassApi.createSubClass(subClassData),
  });

  return { classMutation, subClassMutation };
}

export default useClassMutation;
