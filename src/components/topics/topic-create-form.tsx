'use client'
import { Input, Textarea, Button, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react"
import * as actions from "@/actions";
import { useActionState } from "react";
export default function TopicCreateForm() {
  const [formState, action] = useActionState(actions.createTopic, {
    errors: {}
  })
  return (
    <Popover placement="bottom" >
      <PopoverTrigger>
        <Button color="primary">Create a New Topic</Button>
      </PopoverTrigger>
      <PopoverContent className="shadow-large font-bold">
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-96">
            <h3>Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Topic Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
            />
            <Textarea
              name="desc"
              label="Description"
              labelPlacement="outside"
              placeholder="Topic Description"
              isInvalid={!!formState.errors.desc}
              errorMessage={formState.errors.desc?.join(', ')}
            />
            {
              formState.errors._form ? <div className="border rounded border-red-400 bg-red-200 font-bold p-2">{formState.errors._form?.join(', ')}</div> : null
            }
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}