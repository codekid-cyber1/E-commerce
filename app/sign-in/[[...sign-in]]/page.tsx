import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex flex-col mt-16 items-center justify-center min-h-[50vh] text-center px-4">
      <SignIn />
    </div>
  );
}
