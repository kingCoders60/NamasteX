/*import {
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
*/
// src/app/profile/[username]/page.tsx

/*import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";

// 1. Keep the correct PageProps definition
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

// 2. Rename the function to 'Page'
// This often helps the Next.js type generation process correctly align the types.
async function Page({ params }: PageProps) {
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

// 3. Export the renamed function
export default Page;*/
// src/app/profile/[username]/page.tsx

import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";

// 1. Define the Params type separately
type ProfileParams = {
  username: string;
};

// 2. Define PageProps as a type alias (optional, but clean)
// We are REMOVING the original 'type PageProps = { ... }' definition
// to let the component definition handle the type inference more clearly.

// The component function should be:
async function Page({ params }: { params: ProfileParams }) { // <--- Apply the type directly here
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

// 3. Update the metadata function to use the simpler params type
export async function generateMetadata({ params }: { params: ProfileParams }) {
  const user = await getProfileByUsername(params.username).catch(() => null);
  if (!user) return;

  return {
    title: user.name ?? user.username,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

// 4. Export the component (already done, but confirming name is 'Page')
export default Page;