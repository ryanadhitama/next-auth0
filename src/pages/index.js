import { useUser } from "@auth0/nextjs-auth0/client";

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="flex gap-4 flex-col items-center">
          <div className="text-3xl">Welcome {user.name}!</div>
          <div>
            <a
              className="bg-blue-600 px-6 py-2 inline-block"
              href="/api/auth/logout"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <a className="bg-blue-600 px-6 py-2 inline-block" href="/api/auth/login">
        Login
      </a>
    </div>
  );
}
