import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,

} from '@nextui-org/react';
import { Suspense } from 'react';
import HeaderAuth from '@/components/header-auth';
import SearchInput from './search-input';
export default function Header() {
  return (
    <Navbar className="shadow-lg bg-slate-400 rounded-large ">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
