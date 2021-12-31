import { useLocation } from "react-router";

const NotFound = () => {
  const location = useLocation();
  return (
    <div>
      <div
        dir="ltr"
        className="bg-slate-300 text-slate-800 text-center rounded p-2"
      >
        <h1 className="text-2xl mb-2">404: Page not found.</h1>
        Requested path: <code>{location.pathname}</code>
      </div>
    </div>
  );
};

export default NotFound;
