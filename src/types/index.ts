import { ReactNode } from 'react';

/**
 * prop에 `children`  반드시 포함하도록 강제하는 역할을 합니다.
 *
 * @example StrictPropsWithChildren<ButtonProps>
 * */
export type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};
