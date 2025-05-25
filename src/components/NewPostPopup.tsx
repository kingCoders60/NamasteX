"use client";

import { useState, useEffect } from "react";
import { getPosts } from "@/actions/post.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhoToFollow from "@/components/WhoToFollow";
import NewPostPopup from "@/components/NewPostPopup";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const newPosts = await getPosts();
      setPosts(newPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        <NewPostPopup posts={posts} setPosts={setPosts} /> {/* ✅ Now works correctly */}
        <CreatePost />
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhoToFollow />
      </div>
    </div>
  );
}
