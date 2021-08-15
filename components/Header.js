import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut } from "next-auth/client";
import { useSession } from "next-auth/client";

function Header() {
  const session = useSession();
  console.log(session);

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-7 shadow-md ">
      {/* Header Left */}
      <div className="flex items-center">
        <Image
          src="http://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            className="hidden md:inline-flex ml-2 items-center bg-transparent 
            outline-none placeholder-gray-500
            flex-shrink"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Header Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Header Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile Picture */}
        <Image
          onClick={signOut}
          src={session[0].user.image}
          className="rounded-full cursor-pointer"
          width="40"
          height="40"
          layout="fixed"
        />

        <p className="whitespace-nowrap font-semibold pr-3">
          {session[0].user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
