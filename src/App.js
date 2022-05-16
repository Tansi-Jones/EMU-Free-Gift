import Logo from "./img/loveworld.png";
import Blobber from "./img/blobber.svg";
import "./App.css";

function App() {
  return (
    <main className="w-[85%] mx-auto z-[-1]">
      {/* <div className="absolute w-[45rem] h-[35rem]">
        <img
          src={Blobber}
          alt={Blobber}
          className=" z-[-1] top-0 left-0 w-full h-full transform -translate-x-[12rem] -translate-y-[10rem]"
        />
      </div> */}
      <section className="flex items-center space-x-2 my-5 z-50">
        <img src={Logo} alt={Logo} className="h-8 w-8 object-cover" />
        <p className="text-white font-normal uppercase text-sm tracking-wider">
          Believers loveworld EMU Chapter
        </p>
      </section>

      <section className="space-y-5 my-28">
        <h1 className="text-4xl font-semibold">Spring Feast</h1>
        <p className="text-white text-lg w-9/12">
          Register and recieve a free gift from us.
        </p>
      </section>
    </main>
  );
}

export default App;
