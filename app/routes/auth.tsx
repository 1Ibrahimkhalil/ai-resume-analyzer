import { usePuterStore } from "~/lib/puter";
import { useAuthRedirect } from "../../features/auth/hooks/useAuthRedirect";
import { AuthForm } from "../../features/auth/components/AuthForm";

export const meta = () => [
  { title: "ResuAI | Auth" },
  { name: "describtion", content: "Log into your account" },
];

const auth = () => {
  const { isLoading, auth } = usePuterStore();
  useAuthRedirect(auth.isAuthenticated);

  return (
    <AuthForm
      isLoading={isLoading}
      isAuthenticated={auth.isAuthenticated}
      onSignIn={auth.signIn}
      onSignOut={auth.signOut}
    />
  );
};

export default auth;
