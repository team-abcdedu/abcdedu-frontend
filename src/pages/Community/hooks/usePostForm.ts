import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import communityApi from '@/services/community';
import { Post } from '@/types/community';

import { boardMetaData, Category } from '../constants/communityInfo';

import usePostMutation from './usePostMutation';

interface IPostFormInput {
  title: string;
  content: string;
  secret: boolean;
  commentAllow: boolean;
}

interface usePostFormProps {
  post?: Post;
  onSuccess: () => void;
}

const MAX_FILE_SIZE = 100 * 1024 * 1024;

export default function usePostForm({ post, onSuccess }: usePostFormProps) {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPostFormInput>({
    defaultValues: {
      title: post?.title ?? '',
      content: post?.content ?? '',
      secret: post?.secret ?? false,
      commentAllow: post?.commentAllow ?? false,
    },
  });

  const { category, postId } = useParams();
  const boardId = boardMetaData[category as Category].id;
  const { createPost, updatePost } = usePostMutation({
    category: category ?? '',
    postId: Number(postId),
  });

  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState(post?.fileUrl ?? null);
  const [isFileInputVisible, setIsFileInputVisible] = useState(!fileUrl);

  const isSubmitButtonDisabled = createPost.isPending || updatePost.isPending;

  // 수정 후 다시 모달을 열였을 때 updated 된 데이터 fetch
  useEffect(() => {
    if (post) {
      setValue('title', post.title);
      setValue('content', post.content);
      setValue('secret', post.secret);
      setValue('commentAllow', post.commentAllow);
      setFileUrl(post.fileUrl ?? null);
    }
  }, [post, setValue]);

  useEffect(() => {
    setIsFileInputVisible(!fileUrl);
  }, [fileUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFile = e.target.files?.[0];
    if (!inputFile) return;

    if (inputFile.size > MAX_FILE_SIZE) {
      alert('첨부파일은 20MB를 초과할 수 없습니다.');
      e.target.value = '';
      return;
    }
    setFile(inputFile);
  };

  const handleDeleteFileUrl = () => {
    setFile(null);
    setFileUrl(null);
  };

  const handleClose = () => {
    onSuccess();
    setIsFileInputVisible(!fileUrl);
    reset();
  };

  const submitForm: SubmitHandler<IPostFormInput> = async data => {
    const formData = new FormData();
    formData.append('boardId', boardId.toString());
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('secret', data.secret.toString());
    formData.append('commentAllow', data.commentAllow.toString());

    formData.append('file', file ?? '');

    // 게시글 수정
    if (post && postId) {
      // 파일을 삭제하는 경우
      if (post?.fileUrl && !fileUrl) {
        try {
          await communityApi.deletePostFile(Number(postId));
        } catch (error) {
          alert('파일을 삭제할 수 없습니다.');
          console.log(error);
        }
      }
      const postUpdateData = { id: Number(postId), form: formData };
      updatePost.mutate(postUpdateData, {
        onSuccess: () => {
          onSuccess();
          reset();
        },
      });
      return;
    }

    // 게시글 생성
    createPost.mutate(formData, {
      onSuccess: () => {
        onSuccess();
      },
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(submitForm)();
  };

  return {
    isSubmitButtonDisabled,
    register,
    errors,
    reset,
    handleFileChange,
    handleClose,
    fileUrl,
    isFileInputVisible,
    handleDeleteFileUrl,
    onSubmit,
  };
}
