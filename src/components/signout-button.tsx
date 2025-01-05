'use client';

import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  const handleSignOut = async (event: React.FormEvent) => {
    event.preventDefault();
    await signOut();
  };

  return (
    <div>
      <form onSubmit={handleSignOut} className="font-bold">
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
}