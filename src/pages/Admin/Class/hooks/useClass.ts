import { useMutation, useQuery } from '@tanstack/react-query';

import AdminClassApi from '@/services/admin/class';

import { ClassTableData } from '../../types';

function useClass() {
  const { data, isLoading, isError } = useQuery<ClassTableData[]>({
    queryKey: ['admin-class'],
    queryFn: () => AdminClassApi.getClasses(),
  });

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

  return { data, isLoading, isError, classMutation, subClassMutation };
}

export default useClass;
