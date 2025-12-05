import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhoToFollow from "@/components/WhoToFollow";
import { currentUser } from "@clerk/nextjs/server";

// Tell Next.js this page should always be dynamically rendered
export const dynamic = 'force-dynamic';

export default async function Home() {
  try {
    const user = await currentUser();
    const posts = await getPosts();
    const dbUserId = await getDbUserId();

    return (
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        <div className="lg:col-span-6">
          {user && <CreatePost />}

          <div className="space-y-6">
            {posts.map((post: any) => (
              <PostCard key={post.id} post={post} dbUserId={dbUserId} />
            ))}
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-4 sticky top-20">
          <WhoToFollow />
        </div>

        {/* <footer className="text-center p-4 text-gray-300">
          © {new Date().getFullYear()} Shivam's Feed. All rights reserved.
        </footer> */}
      </div>
    );
  } catch (error) {
    console.error("Home page error:", error);
    return (
      <div className="text-center text-red-500 mt-10">
        Something went wrong while loading the feed.
      </div>
    );
  }
}