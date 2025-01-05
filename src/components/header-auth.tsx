'use client';
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import SignOutButton from "@/components/signout-button";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {

  const { data: session, status } = useSession();
  let authContent: React.ReactNode;

  if (status === "loading") {
    authContent = null;
  }
  else if (session?.user) {

    authContent = <div>
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent className="p-4">
          <SignOutButton />
        </PopoverContent>
      </Popover>
    </div>

  } else {

    authContent = <>
      <NavbarItem>
        <form action={actions.signIn}>
          <Button type="submit" variant="flat" className="w-10 text-white font-bold">Sign In</Button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form action={actions.signIn}>
          <Button type="submit" variant="bordered" className="w-10 text-white font-bold">Sign Up</Button>
        </form>
      </NavbarItem>
    </>
  }

  return authContent
}