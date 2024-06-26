import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const RightSidebar = () => {
  return (
    <section className="flex-col items-center justify-start hidden min-h-screen px-3 md:flex">
      <form className="sticky top-0 w-full py-4 bg-dark">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <BiSearch />
          </div>
          <input
            type="search"
            className="block w-full py-2 pl-10 pr-3 text-xs rounded-full bg-secondaryDark text-light focus:ring-primary focus:border-primary"
            placeholder="Search"
          />
        </div>
      </form>
      <div className="w-full space-y-4">
        <div className="w-full bg-secondaryDark rounded-2xl">
          <div className="p-5">
            <h5 className="text-base font-bold leading-none text-light">
              What&apos;s happening
            </h5>
          </div>
          <ul>
            <li className="px-5 py-3 hover:bg-dark/20">
              <div className="flex items-start">
                <div className="flex-1 pr-4">
                  <p className="text-sm font-medium text-light">
                    Explore Saintech&apos;s cutting-edge scientific innovations!
                  </p>
                  <p className="text-sm text-gray-500">@arisandika</p>
                </div>
                <div className="inline-flex items-center text-base">
                  <BsThreeDots />
                </div>
              </div>
            </li>
            <li className="px-5 py-3 hover:bg-dark/20">
              <div className="flex items-start">
                <div className="flex-1 pr-4">
                  <p className="text-sm font-medium text-light">
                    Dive into AI-powered shopping with Saintech&apos;s smart
                    features!
                  </p>
                  <p className="text-sm text-gray-500">@arisandika</p>
                </div>
                <div className="inline-flex items-center text-base">
                  <BsThreeDots />
                </div>
              </div>
            </li>
            <li className="px-5 py-3 hover:bg-dark/20">
              <div className="flex items-start">
                <div className="flex-1 pr-4">
                  <p className="text-sm font-medium text-light">
                    Discover the future of computing with advanced AI
                    technology!
                  </p>
                  <p className="text-sm text-gray-500">@arisandika</p>
                </div>
                <div className="inline-flex items-center text-base">
                  <BsThreeDots />
                </div>
              </div>
            </li>
            <li className="px-5 py-3 hover:bg-dark/20 rounded-b-2xl">
              <div className="flex justify-center text-xs text-blue-600">
                Show more
              </div>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center w-full rounded-2xl bg-secondaryDark">
          <div className="w-full p-5">
            <div className="flex items-center justify-between mb-2">
              <img
                src="https://avatars.githubusercontent.com/u/99670438?v=4"
                alt="Ari Sandika"
                width="500"
                height="500"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <a
                  href="https://github.com/arisandika"
                  className="text-dark bg-primary hover:bg-opacity/90 font-medium rounded-full text-xs px-3 py-1.5"
                >
                  Follow
                </a>
              </div>
            </div>
            <p className="my-1 text-sm font-normal">Ari Sandika</p>
            <p className="text-xs text-gray-600">@arisandika</p>
            <a
              href="https://github.com/arisandika"
              className="text-xs text-blue-600 hover:underline"
            >
              github.com/arisandika
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center w-full rounded-2xl bg-secondaryDark">
          <div className="w-full p-5">
            <div className="flex items-center justify-between mb-2">
              <img
                src="https://pbs.twimg.com/profile_images/1600092339736743936/2XwcJit9_400x400.jpg"
                alt="Ari Sandika"
                width="500"
                height="500"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <a
                  href="https://github.com/arisandika"
                  className="text-dark bg-primary hover:bg-opacity/90 font-medium rounded-full text-xs px-3 py-1.5"
                >
                  Follow
                </a>
              </div>
            </div>
            <p className="my-1 text-sm font-normal">Extra Time Indonesia</p>
            <p className="text-xs text-gray-600">@idextratime</p>
            <a
              href="https://github.com/arisandika"
              className="text-xs text-blue-600 hover:underline"
            >
              Akun Penyabar Akun Bijaksana 🤙 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
