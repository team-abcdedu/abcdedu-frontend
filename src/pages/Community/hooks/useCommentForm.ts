import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Comment } from '@/types/community';
import { convertURLtoFile } from '@/utils/convertURLtoFile';
import { getFileExtension } from '@/utils/getFileExtension';
import { getFileName } from '@/utils/getFileName';

import useCommentMutation from './useCommentMutation';

interface ICommentFormInput {
  content: string;
}

interface UseCommmentFormProps {
  postId: number;
  comment?: Comment;
  toggleEditMode?: () => void;
}

const MAX_FILE_SIZE = 100 * 1024 * 1024;

export default function useCommentForm({
  postId,
  comment,
  toggleEditMode,
}: UseCommmentFormProps) {
  const { createComment, updateComment } = useCommentMutation({
    postId,
  });

  const { register, setValue, watch, handleSubmit, reset } =
    useForm<ICommentFormInput>({
      defaultValues: {
        content: comment?.content ?? '',
      },
    });

  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');

  const content = watch('content', comment?.content);

  const isButtonDisabled =
    !content.trim() || createComment.isPending || updateComment.isPending;

  // 수정 후 다시 edit mode 전환 시, updated 된 데이터 fetch
  useEffect(() => {
    if (comment) {
      setValue('content', comment.content);
      setFileName(comment.fileUrl ? getFileName(comment.fileUrl) : '');
    }
  }, [comment, setValue]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFile = e.target.files?.[0];
    if (!inputFile) return;

    if (inputFile.size > MAX_FILE_SIZE) {
      alert('첨부파일은 100MB를 초과할 수 없습니다.');
      e.target.value = '';
      return;
    }
    setFile(inputFile);
    setFileName(inputFile.name);
  };

  // 댓글 생성 중 첨부 파일 삭제
  // (댓글 수정 시에는 첨부된 파일 삭제 불가, 파일 삭제하려면 댓글 삭제)
  const handleDeleteFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFile(null);
    setFileName('');
  };

  const handleClose = () => {
    if (toggleEditMode) toggleEditMode();
    reset();
    setFileName('');
  };

  const getCurrentFile = async () => {
    if (file) return file;
    if (comment?.fileUrl) {
      const ext = getFileExtension(getFileName(comment.fileUrl));
      return convertURLtoFile(comment.fileUrl, `comment-file.${ext}`, {
        headers: { 'Cache-Control': 'no-cache' },
      });
    }
    return null;
  };

  const submitForm: SubmitHandler<ICommentFormInput> = async data => {
    const formData = new FormData();
    formData.append('content', data.content);

    const currentFile = await getCurrentFile();
    if (currentFile) formData.append('file', currentFile);

    // 댓글 수정
    if (comment) {
      const commentUpdateData = {
        commentId: Number(comment.commentId),
        form: formData,
      };
      updateComment.mutate(commentUpdateData, {
        onSuccess: () => {
          if (toggleEditMode) toggleEditMode();
          reset();
          setFileName('');
        },
      });
      return;
    }

    // 댓글 생성
    createComment.mutate(formData, {
      onSuccess: () => {
        reset();
        setFileName('');
      },
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(submitForm)();
  };

  return {
    isButtonDisabled,
    register,
    handleFileChange,
    handleDeleteFile,
    handleClose,
    fileName,
    onSubmit,
  };
}
