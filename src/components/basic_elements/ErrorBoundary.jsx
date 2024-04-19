import { useState } from "react";
const ErrorBoundary = ({ children }) => {
  const [error]= useState(null);
  if (error) {
    return <p>Something went wrong: 
      {error.message}</p>;
  }
  return children;
};
export default ErrorBoundary;

