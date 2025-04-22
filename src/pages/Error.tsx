import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom"

const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorText: string;

  if(isRouteErrorResponse(error)){
    errorStatus = error.status;
    errorText = error.statusText;
  } else {
    errorStatus = 404;
    errorText = "Page not found";
  }

  return (
    <div className="flex flex-col justify-center h-screen text-center">
        <h1>Error {errorStatus}</h1>
        <p>{errorText}</p>
        <Link to="/" replace={true} className="underline text-blue-500">Go back to Home</Link>
    </div>
  )
}

export default Error