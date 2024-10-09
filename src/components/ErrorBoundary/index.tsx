import * as Sentry from '@sentry/react';
import {
  cloneElement,
  Component,
  ErrorInfo,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react';

import { ApiError } from '@/libs/errors';

import { AccessErrorProps } from './AccessError';
import DefaultFallback from './DefaultFallback';

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  accessErrorFallback?: ReactElement<AccessErrorProps>;
  onReset?: () => void;
  onError?(error: Error, info: ErrorInfo): void;
}

interface ErrorBoundaryState {
  error: Error | null;
  hasError: boolean;
}

const initialState: ErrorBoundaryState = {
  error: null,
  hasError: false,
};

export default class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { error, hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError?.(error, errorInfo);
    console.log(error.message, errorInfo.componentStack);
    // JS 및 렌더링 과정에서 발생한 오류에 대해 sentry 로깅
    Sentry.withScope(scope => {
      scope.setExtra('componentStack', errorInfo);
      Sentry.captureException(error);
    });
  }

  onResetErrorBoundary = (onReset: () => void) => {
    onReset();
    this.reset();
  };

  reset() {
    this.setState(initialState);
  }

  render() {
    const { error, hasError } = this.state;
    const { fallback, accessErrorFallback, children, onReset } = this.props;

    if (hasError) {
      if (fallback) return fallback;

      // 접근 제한 Fallback
      if (error instanceof ApiError && [401, 403, 404].includes(error.status)) {
        if (isValidElement(accessErrorFallback))
          return cloneElement(accessErrorFallback, { error });
      }

      return (
        <DefaultFallback
          onReset={onReset && (() => this.onResetErrorBoundary(onReset))}
        />
      );
    }

    return children;
  }
}
