import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Dispatch, FormEventHandler, SetStateAction } from 'react';

import AdminHomeworkApi from '@/services/admin/homework';
import {
  CreateHomeworkData,
  CreateQuestion,
  QuestionType,
} from '@/types/homework';

interface UseSubmitHomeworkFormProps {
  setModalState: Dispatch<SetStateAction<'success' | 'error'>>;
}

function useSubmitHomeworkForm({ setModalState }: UseSubmitHomeworkFormProps) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: CreateHomeworkData) =>
      AdminHomeworkApi.createHomework(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['homework-list'] });
      setModalState('success');
    },
    onError: () => {
      setModalState('error');
    },
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const refinedData: CreateHomeworkData = {
      title: '',
      subTitle: '',
      description: '',
      additionalDescription: '',
      questions: [],
    };

    refinedData.title = formData.get('title') as string;
    refinedData.subTitle = formData.get('subTitle') as string;
    refinedData.description = formData.get('description') as string;
    refinedData.additionalDescription = formData.get(
      'additionalDescription',
    ) as string;

    // 마지막 항목에서 questionLength 추출(항목 예시: 0-type, 0-options-1)
    const questionLength = Number(
      Array.from(formData.keys()).slice(-1)[0].split('-')[0],
    );

    // Question 객체 배열 생성
    const questions: CreateQuestion[] = Array.from({
      length: questionLength + 1,
    }).map((_, idx) => {
      return {
        type: 'SUBJECTIVE',
        score: 10,
        index: idx + 1,
        title: '',
        description: '',
      };
    });

    // Question 객체 배열에 값 할당
    formData.forEach((value, key) => {
      const keyParts = key.split('-');
      const questionObj = questions[Number(keyParts[0])];

      if (keyParts[1] === 'type') {
        questionObj.type = value as QuestionType;
      }
      if (keyParts[1] === 'title') {
        questionObj[`${keyParts[1]}`] = value as string;
      }
      if (keyParts[1] === 'description') {
        questionObj.description = value as string;
      }
      if (keyParts[1] === 'options') {
        const optionObj = {
          content: value as string,
          index: Number(keyParts[2]),
          isAnswer: true,
        };
        if (!questionObj.options) {
          questionObj.options = [optionObj];
        } else {
          questionObj.options.push(optionObj);
        }
      }
    });
    refinedData.questions = questions;

    mutate(refinedData);
  };

  return {
    onSubmit,
    isPending,
  };
}

export default useSubmitHomeworkForm;
