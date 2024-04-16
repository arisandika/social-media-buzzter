import { AiOutlineFire } from "react-icons/ai";
import { LuUsers2 } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 flex flex-col w-full px-4 py-4 text-base bg-secondaryDark backdrop-blur-sm rounded-b-2xl">
        <div className="font-semibold">Home</div>
        <div className="grid grid-cols-2 gap-1 p-1 mt-4 rounded-lg bg-dark">
          <div className="flex items-center justify-center w-full gap-2 py-2 text-xs rounded-md cursor-pointer bg-secondary">
            <div className="text-lg">
              <AiOutlineFire />
            </div>
            <div>For you</div>
          </div>
          <div className="flex items-center justify-center w-full gap-2 py-2 text-xs rounded-md cursor-pointer hover:bg-secondary">
            <div className="text-lg">
              <LuUsers2 />
            </div>
            <div>Following</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
