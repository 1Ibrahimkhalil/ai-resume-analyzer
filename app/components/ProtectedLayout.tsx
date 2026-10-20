
import { Navigate, Outlet, useLocation } from "react-router";
import { usePuterStore } from "~/lib/puter";
import Loading from "./Loading";

export default function ProtectedLayout() {
  const { auth, isLoading } = usePuterStore();
  const location = useLocation();

  if (isLoading) {
    return <Loading/>;
  }

  if (!auth.isAuthenticated) {
    const next = location.pathname + location.search;

    return (
      <Navigate
        to={`/auth?next=${encodeURIComponent(next)}`}
        replace
      />
    );
  }

  return <Outlet />;
}
