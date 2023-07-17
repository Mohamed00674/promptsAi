"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
function Nav(): any {
    const isUserloggedIn: boolean = true;
    const [providers, setProviders] = useState(null);
    useEffect(() => {
        const setProviders = async (response : Response): Promise<void> => {
          const res  = await getProviders();
          setProviders(response);
        };
    },[] )

  const signOut = (): void => {};
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="this is the logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptpia</p>
      </Link>
      <div className="sm:flex hidden">
        {isUserloggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="create-prompt" className="black_btn">
              Create Post
            </Link>
            <button onClick={signOut} className="outline_btn">
              Sign out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                alt="profile"
                className="rounded-full"
              ></Image>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default Nav;
