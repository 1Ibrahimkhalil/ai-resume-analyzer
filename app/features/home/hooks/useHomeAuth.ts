import { useEffect } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export function useHomeAuth() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth?next=/");
    }
  }, [auth.isAuthenticated, navigate]);
}
