import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export function useAuthRedirect(isAuthenticated: boolean) {
  const location = useLocation();
  const navigate = useNavigate();

  const next = location.search.split("next=")[1];

  useEffect(() => {
    if (isAuthenticated && next) {
      navigate(next);
    }
  }, [isAuthenticated, next, navigate]);
}