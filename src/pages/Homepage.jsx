import Header from "../components/Navbar/Header";
import InputBuzz from "../components/InputForm/InputBuzz";
import PostBuzz from "../components/Post/PostBuzz";

const Homepage = () => {
  return (
    <>
      <main className="flex flex-col w-full min-h-screen space-y-4">
        <Header />
        <div className="w-full space-y-4 md:px-4">
          <InputBuzz />
          <div className="w-full space-y-4">
            <PostBuzz />
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
