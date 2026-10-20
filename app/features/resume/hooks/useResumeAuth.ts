
import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { UseResumeAuthParams } from "../types";



export function useResumeAuth({
  id,
  isLoading,
  isAuthenticated,
}: UseResumeAuthParams) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate(`/auth?next=/resume/${id}`);
    }
  }, [isLoading]);
}
