import { db } from "@/db";

interface ShowDescriptionProps {
  slug: string;
}

export default async function ShowDescription({ slug }: ShowDescriptionProps) {
  const description = await db.topic.findFirst(
    {
      where: {
        slug: slug,
      },
      select: {
        description: true, // Select only the description field
      },
    }
  )
  if (!description) {
    return null;
  }
  return (
    <div className="p-4 text-center">
      <p className="text-sm text-gray-600 font-bold">{description.description}</p>
    </div>
  );
}
