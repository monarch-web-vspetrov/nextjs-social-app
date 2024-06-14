import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex-center">
      <UserButton />
      <h1 className="h1-bold">Next js Incoming</h1>
    </div>
  );
}
