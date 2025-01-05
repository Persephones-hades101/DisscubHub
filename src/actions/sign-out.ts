'use server';
import * as auth from '@/auth';


export async function signOut() {
  console.log("Hello this is from signout server action");
  return await auth.signOut();
}
