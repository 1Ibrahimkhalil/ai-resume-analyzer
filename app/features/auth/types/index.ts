export type AuthFormProps = {
  isLoading: boolean;
  isAuthenticated: boolean;
  onSignIn: () => void;
  onSignOut: () => void;
};