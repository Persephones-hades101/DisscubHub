import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react"
import HeaderAuth from "@/components/header-auth";


export default function Header() {

  return (
    <Navbar className="shadow-lg mb-6 bg-slate-500 rounded-large mt-5">
      <NavbarBrand>
        <Link href={"/"} className="font-bold text-white text-3xl">Discuss</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="search post" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {
          <HeaderAuth />
        }
      </NavbarContent>
    </Navbar>
  )

}