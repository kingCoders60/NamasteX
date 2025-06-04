import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";

type PageProps = {
  params: {
      username: string;
  };
};

export async function generateMetadata({ params }: PageProps) {
  const user = await getProfileByUsername(params.username).catch(() => null);
  if (!user) return;

  return {
      title: user.name ?? user.username,
      description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

async function ProfilePageServer({ params }: PageProps) {
  const { username } = params;
  const user = await getProfileByUsername(username).catch(() => null);
  if (!user) return notFound();

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
      getUserPosts(user.id).catch(() => []),
      getUserLikedPosts(user.id).catch(() => []),
      isFollowing(user.id).catch(() => false),
  ]);

  return (
      <ProfilePageClient
          user={user}
          posts={posts}
          likedPosts={likedPosts}
          isFollowing={isCurrentUserFollowing}
      />
  );
}

export default ProfilePageServer;
