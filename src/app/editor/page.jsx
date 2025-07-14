"use client";

import BgDotGrid from "@/components/bgDotGrid";
import Navbar from "@/components/navbar";
import OrbColors from "@/components/orbColors";
import { Github } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function EditorPage() {
  const { data: session, status } = useSession();

  return (
    <>
      {status === "loading" ? (
        <p className="text-white p-6">Loading...</p>
      ) : (
        <>
          <BgDotGrid />

          <Navbar />
          <main className="relative flex flex-col items-center justify-center min-h-screen">
            <OrbColors />
            {!session ? (
              <div className="w-[90vw] sm:w-auto flex flex-col gap-4 items-center justify-center border border-cyan-400 p-4 rounded">
                <h2 className="text-cyan-400 text-2xl">Editor Sign In</h2>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p className="text-center text-sm text-gray-400">
                    Sign in via github to access editor panel
                  </p>
                  <div
                    className="flex gap-2 items-center bg-cyan-600 p-2 rounded cursor-pointer"
                    onClick={() => signIn("github")}
                  >
                    <Image
                      src="/icons/socials/github.svg"
                      alt="Github Icon"
                      height={25}
                      width={25}
                    />
                    <p>Sign In</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {session.user.role !== "admin" ? (
                  <div className="flex flex-col gap-4 items-center justify-center">
                    <h2 className="text-red-500 text-2xl">
                      !! Unauthorized Access !!
                    </h2>
                    <Image
                      src={"/sus_editor.jpg"}
                      alt="Sus Editor"
                      width={250}
                      height={250}
                    />
                    <p className="text-gray-400 mt-4">
                      Who are you and why are you gae?
                    </p>
                    <button
                      onClick={() => signOut()}
                      className="bg-red-600 p-2"
                    >
                      Get Out
                    </button>
                  </div>
                ) : (
                  <div className="p-6 text-white">
                    <h1 className="text-2xl font-bold">Editor Panel (Admin)</h1>
                    <p>Welcome, {session.user.email}</p>
                    <button
                      onClick={() => signOut()}
                      className="bg-red-600 p-2 mt-4"
                    >
                      Sign out
                    </button>
                    {/* Editor UI here */}
                  </div>
                )}
              </>
            )}
          </main>
        </>
      )}
    </>
  );
}
