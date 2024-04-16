import { BsPencilSquare } from "react-icons/bs";

const SidebarBuzzButton = () => {
  return (
    <>
      <button className="flex items-center justify-center w-10 h-10 text-sm font-semibold transition rounded-full md:h-auto md:w-full md:gap-2 md:py-2 bg-primary hover:bg-opacity-80 text-dark">
        <div className="text-lg">
          <BsPencilSquare />
        </div>
        <span className="hidden md:flex">Buzz</span>
      </button>
    </>
  );
};

export default SidebarBuzzButton;
