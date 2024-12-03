import { UserProfile } from "@clerk/nextjs";

export default function Settings() {
  return (
    <div className="mx-auto -mt-24 flex w-full max-w-screen-2xl justify-center pb-10">
      <UserProfile />
    </div>
  );
}
