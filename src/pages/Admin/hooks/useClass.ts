import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { ClassTableData } from '@/pages/Admin/types';
import AdminClassApi from '@/services/admin/class';

function useClass() {
  const queryClient = useQueryClient();

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
    onSuccess: () => {
      alert('클래스가 등록되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['admin-class'] });
    },
    onError: error => {
      alert('클래스 등록에 실패했습니다.');
      if (isAxiosError(error)) {
        console.error(error.response?.data.result.message);
        return;
      }
      console.error(error);
    },
  });

  const subClassMutation = useMutation({
    mutationFn: (subClassData: {
      classId: number;
      title: string;
      description: string;
      orderNumber: number;
    }) => AdminClassApi.createSubClass(subClassData),
    onSuccess: () => {
      alert('서브 클래스가 등록되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['admin-class'] });
    },
    onError: error => {
      alert('서브 클래스 등록에 실패했습니다.');
      if (isAxiosError(error)) {
        console.error(error.response?.data.result.message);
        return;
      }
      console.error(error);
    },
  });

  return { data, isLoading, isError, classMutation, subClassMutation };
}

export default useClass;
