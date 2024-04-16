import { BiHome, BiLogOut, BiUser, BiSearch } from "react-icons/bi";
// import { RxRocket  BsThreeDots } from "react-icons/rx";
import { BsBell, BsEnvelope, BsBookmark } from "react-icons/bs";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarBuzzButton from "./SidebarBuzzButton";
import SidebarProfile from "./SidebarProfile";

const LeftSidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BiHome,
    },
    {
      label: "Explore",
      href: "explore",
      icon: BiSearch,
    },
    {
      label: "Notifications",
      href: "notifications",
      icon: BsBell,
    },
    {
      label: "Messages",
      href: "messages",
      icon: BsEnvelope,
    },
    {
      label: "Bookmarks",
      href: "bookmarks",
      icon: BsBookmark,
    },
    {
      label: "Profile",
      href: "profile",
      icon: BiUser,
    },
  ];

  return (
    <section className="md:w-[360px] w-[60px]">
      <div className="sticky top-0 flex flex-col items-center h-screen px-3 py-4">
        <SidebarLogo />
        <div className="flex flex-col items-stretch w-full h-full my-4 space-y-2">
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
          <SidebarBuzzButton />
        </div>
        <SidebarProfile />
      </div>
    </section>
  );
};

export default LeftSidebar;
