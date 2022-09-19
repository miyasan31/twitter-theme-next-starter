import type { FC, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback: FC<ErrorFallbackProps> = ({ error, resetErrorBoundary: onReset }) => {
  return (
    <div role="alert">
      <p>エラーが発生しました。</p>
      <pre>{error.message}</pre>
      <button onClick={onReset}>Try again</button>
    </div>
  );
};

type LayoutErrorBoundaryProps = {
  children: ReactNode;
  onReset?: () => void;
};

export const LayoutErrorBoundary: FC<LayoutErrorBoundaryProps> = ({ children, onReset }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
      {children}
    </ErrorBoundary>
  );
};
