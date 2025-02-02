import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="h-lvh flex flex-col justify-center items-center bg-slate-100 space-y-3">
      <h1 className="text-2xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="font-bold">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
