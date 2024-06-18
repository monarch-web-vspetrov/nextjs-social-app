import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href={"/"} className="flex-center items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="Logo"
          width={23}
          height={23}
        ></Image>
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Monarch <span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p className="h3-bold">Global Search</p>
      <div className="flex-between gap-5">
        Theme
        {/* <SignedIn> */}
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
            },
            variables: {
              colorPrimary: "#ff7000",
            },
          }}
          afterSignOutUrl="/"
        />
        {/* </SignedIn> */}
      </div>
    </nav>
  );
}

export default Navbar;
