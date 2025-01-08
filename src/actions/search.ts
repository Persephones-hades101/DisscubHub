'use server'

import { redirect } from "next/navigation";

export async function search(formData: FormData) {
  const term = formData.get('term') as string;

  if (!term) {
    return redirect('/');
  }

  return redirect(`/search?term=${term}`);
}