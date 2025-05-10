import CreatePost from "@/components/CreatePost";

export default async function Home(){
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        <CreatePost/>
      </div>
      <div className="hidden lg:block lg:col-span-4 sticky top-20">Who to Follow</div>      
    </div>
  )
}

