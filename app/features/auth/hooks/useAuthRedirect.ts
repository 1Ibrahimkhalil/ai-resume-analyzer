import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";

export function useAuthRedirect(isAuthenticated: boolean) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const next = searchParams.get("next");

  useEffect(() => {
    if (!isAuthenticated || location.pathname !== "/auth") {
      return;
    }
    if (isAuthenticated) {
      navigate("/");
      return;
    }

    const destination =
      next && next.startsWith("/") && !next.startsWith("//") ? next : "/";

    navigate(destination, { replace: true });
  }, [isAuthenticated, location.pathname, next, navigate]);
}
