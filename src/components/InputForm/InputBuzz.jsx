import { BiImageAdd } from "react-icons/bi";
import { BsListUl } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdOutlineGifBox } from "react-icons/md";
import { TbCalendarPlus } from "react-icons/tb";

const InputBuzz = () => {
  return (
    <>
      <div className="p-4 text-base border rounded-2xl border-light/20">
        <div className="flex items-start space-x-4">
          <img
            src="https://avatars.githubusercontent.com/u/99670438?v=4"
            alt="Ari Sandika"
            width="500"
            height="500"
            className="w-8 h-8 rounded-full md:w-10 md:h-10"
          />
          <form className="flex flex-col w-full space-y-4">
            <textarea
              rows={parseInt("3")}
              className="shadow-sm bg-transparent border border-none outline-none text-light text-sm w-full p-2.5"
              placeholder="What's on your mind?"
              required
            ></textarea>
            <div className="flex flex-col items-end gap-4 justify-center w-full pl-2.5">
              <div className="flex items-center justify-start w-full space-x-4 text-lg text-primary">
                <a href="#">
                  <BiImageAdd />
                </a>
                <a href="#">
                  <MdOutlineGifBox />
                </a>
                <a href="#">
                  <BsListUl />
                </a>
                <a href="#">
                  <HiOutlineEmojiHappy />
                </a>
                <a href="#">
                  <TbCalendarPlus />
                </a>
              </div>
              <button className="w-24 py-2 text-sm font-semibold transition rounded-full bg-primary hover:bg-opacity-90 text-dark disabled:opacity-60">
                Buzz
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputBuzz;
