import { ReactNode } from 'react';
import { FieldValues, Path, RegisterOptions } from 'react-hook-form';

/**
 * prop에 `children`  반드시 포함하도록 강제하는 역할을 합니다.
 *
 * @example StrictPropsWithChildren<ButtonProps>
 * */
export type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};

/**
 * form에 적용할 rule 타입으로 사용합니다.
 *
 * @example FieldRules<IRegisterFormInput>
 * */
export type FieldRules<T extends FieldValues> = {
  [K in Path<T>]: RegisterOptions<T, K>;
};

/**
 * 페이징 처리된 목록 응답 타입
 * @example PaginatedResponse<Post>
 */
export type PaginatedResponse<T> = {
  content: T[];
  currentPage: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
};
