"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

export function Header() {
  const session = useSession();
  return (
    <div>
      {session.data ? (
        <Button onClick={() => signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={() => signIn("google")}>Sign In</Button>
      )}
      <ModeToggle />
    </div>
  );
}
