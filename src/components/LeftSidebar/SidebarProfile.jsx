import { BsThreeDots } from "react-icons/bs";

const SidebarProfile = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full md:p-2 text-sm transition rounded-full md:justify-between text-light bg-light/10 hover:bg-opacity-90">
        <div className="flex items-center space-x-2">
          <img
            src="https://avatars.githubusercontent.com/u/99670438?v=4"
            alt="Ari Sandika"
            width="500"
            height="500"
            className="w-8 h-8 rounded-full"
          />
          <div className="hidden text-xs text-left text-light/50 md:block">
            <div className="text-light">Ari Sandika</div>
            <div className="font-montreal-thin">@ari.sandika</div>
          </div>
        </div>
        <button className="hidden px-2 text-lg cursor-pointer md:block">
          <BsThreeDots />
        </button>
      </div>
    </>
  );
};

export default SidebarProfile;
