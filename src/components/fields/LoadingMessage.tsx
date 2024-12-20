import React from "react";

const LoadingMessage = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-8 ">
    <h1 className="text-2xl font-bold">{message}</h1>
  </div>
);

export default LoadingMessage;
