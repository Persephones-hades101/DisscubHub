'use server'
import type { Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { z } from 'zod';
import { auth } from "@/auth"
import paths from "@/paths";
import { revalidatePath } from "next/cache";
const createTopicSchema = z.object({
  name: z.string().min(3).regex(/[a-z-]/, { message: "Must be lowercase letters with dashes and no spaces" }),
  desc: z.string().min(10)
})

interface createTopicFormState {
  errors: {
    name?: string[],
    desc?: string[],
    _form?: string[],
  }
}

export async function createTopic(formState: createTopicFormState, formData: FormData): Promise<createTopicFormState> {

  await new Promise(resolve => { setTimeout(resolve, 2500) });

  const session = await auth();
  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    desc: formData.get('desc')
  })

  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be Signed in to do this !"]
      }
    }
  }

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }


  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.desc,
      }
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message]
        }
      }
    }
    else {
      return {
        errors: {
          _form: ["Something went wrong!!"]
        }
      }
    }
  }

  revalidatePath('/');
  redirect(paths.topicShow(topic.slug));
}