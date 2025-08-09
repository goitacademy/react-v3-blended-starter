'use client';

type ErrorProps = {
  error: Error;
};

const Error = ({ error }: ErrorProps) => {
  return <div>Error {error.message}</div>;
};

export default Error;
