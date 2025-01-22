import { useForm } from 'react-hook-form';

import { HomeworkQuestion } from '@/types/homework';

export type QuestionCreation = Omit<HomeworkQuestion, 'orderNumber'>;

export interface ICreateHomeworkFormValues {
  title: string;
  description: string;
  additionalDescription: string;
  questions: QuestionCreation[];
}

function useCreateHomeworkForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ICreateHomeworkFormValues>({
    defaultValues: {
      title: '',
      description: '',
      additionalDescription: '',
      questions: [
        {
          content: '',
          isAnswerRequired: false,
          additionalContent: '',
        },
      ],
    },
    mode: 'onSubmit',
  });

  const watchAllFields = watch();

  return {
    control,
    register,
    handleSubmit,
    errors,
    getPreviewHomework() {
      return {
        homeworkId: 0,
        title: watchAllFields.title,
        description: watchAllFields.description,
        additionalDescription: watchAllFields.additionalDescription,
        questionGetResponses: watchAllFields.questions.map((q, index) => {
          return {
            orderNumber: `${index + 1}`,
            content: q.content,
            additionalContent: q.additionalContent,
            isAnswerRequired: q.isAnswerRequired,
          };
        }),
      };
    },
  };
}

export default useCreateHomeworkForm;
