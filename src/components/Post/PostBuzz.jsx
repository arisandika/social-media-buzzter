import { BsThreeDots } from "react-icons/bs";
import Img1 from "../../images/mockup.png";

const PostBuzz = () => {
  return (
    <>
      <div className="p-4 border rounded-2xl border-light/20">
        <div className="flex items-start space-x-4">
          <img
            src="https://avatars.githubusercontent.com/u/99670438?v=4"
            alt="Ari Sandika"
            width="500"
            height="500"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col text-sm">
            <div className="flex items-start justify-between w-full text-light/50">
              <div className="flex flex-col items-start">
                <div className="text-light">Ari Sandika</div>
                <div className="flex items-center space-x-2">
                  <div className="truncate ... font-montreal-thin">
                    @ari.sandika
                  </div>
                  <div className="w-[2.5px] h-[2.5px] rounded-full bg-light/50" />
                  <div className="font-montreal-thin">6h</div>
                </div>
              </div>
              <div>
                <BsThreeDots />
              </div>
            </div>
            <div className="w-full h-full my-1 font-normal">
              Hello everyone 🖐🏻 Exciting news! Allow me to introduce you to
              Saintech, our innovative new e-commerce project set to
              revolutionize your online shopping experience. 🛒✨
            </div>
            <div className="w-full h-auto mt-3 rounded-2xl bg-light/50">
              <img
                src={Img1}
                alt="Ari Sandika"
                width="500"
                height="500"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-2xl border-light/20">
        <div className="flex items-start space-x-4">
          <img
            src="https://pbs.twimg.com/profile_images/1600092339736743936/2XwcJit9_400x400.jpg"
            alt="Ari Sandika"
            width="500"
            height="500"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col text-sm">
            <div className="flex items-start justify-between w-full text-light/50">
              <div className="flex flex-col items-start">
                <div className="text-light">Extra Time Indonesia</div>
                <div className="flex items-center space-x-2">
                  <div className="truncate ... font-montreal-thin">
                    @idextratime
                  </div>
                  <div className="w-[2.5px] h-[2.5px] rounded-full bg-light/50" />
                  <div className="font-montreal-thin">6h</div>
                </div>
              </div>
              <div>
                <BsThreeDots />
              </div>
            </div>
            <div className="w-full h-full my-1 font-normal">
              Hello everyone 🖐🏻 Exciting news! Allow me to introduce you to
              Saintech, our innovative new e-commerce project set to
              revolutionize your online shopping experience. 🛒✨
            </div>
            <div className="w-full h-auto mt-3 rounded-2xl bg-light/50">
              <img
                src={Img1}
                alt="Ari Sandika"
                width="500"
                height="500"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBuzz;
