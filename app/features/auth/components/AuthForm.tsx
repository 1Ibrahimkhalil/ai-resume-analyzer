import type { AuthFormProps } from "../types";


export function AuthForm({
  isLoading,
  isAuthenticated,
  onSignIn,
  onSignOut,
}: AuthFormProps) {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center text-center">
            <h1>Welcome</h1>
            <h2>Log In to Continue Your Job Journey</h2>
          </div>

          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse" disabled>
                <p>Signing you in...</p>
              </button>
            ) : isAuthenticated ? (
              <button className="auth-button" onClick={onSignOut}>
                <p>Log Out</p>
              </button>
            ) : (
              <button className="auth-button" onClick={onSignIn}>
                <p>Log in</p>
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}