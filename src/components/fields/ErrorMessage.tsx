import React from "react";

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-8">
    <h1 className="text-2xl font-bold text-red-500">Error</h1>
    <p className="text-lg text-gray-700 mt-4">{message}</p>
  </div>
);

export default ErrorMessage;
