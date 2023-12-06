import React, { ErrorInfo } from "react";

interface ErrorBoundaryProps {
  fallback?: (
    error: Error | null,
    errorInfo: ErrorInfo | null
  ) => React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    const { fallback, children } = this.props;
    const { hasError, error, errorInfo } = this.state;

    if (hasError) {
      return fallback && fallback(error, errorInfo);
    }
    return children;
  }
}

export default ErrorBoundary;
