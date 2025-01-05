import TopicCreateForm from "@/components/topics/topic-create-form";
export default function Home() {



  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3 bg-slate-500">
        <h1 className="font-bold text-4xl">Top posts</h1>
      </div>
      <div className="">
        <TopicCreateForm />
      </div>
    </div>
  );
}
