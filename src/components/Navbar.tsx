import Link from "next/link";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";
import { Network } from "lucide-react";

async function Navbar() {
  const user = await currentUser();
  if (user) await syncUser();
  
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-5">
            {/* Brand Name */}
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              NamasteX
            </Link>

            {/* Bold Network Icon */}
            <Network className="w-7 h-7 font-extrabold text-green-500 animate-pulse" />

            {/* Animated Line */}
            <div className="h-[2px] bg-green-500 w-0 transition-all duration-500 ease-in-out group-hover:w-24" />
          </div>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
