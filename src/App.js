import React from "react";
import Logo from "./img/loveworld.png";
import Blobber from "./img/blobber.svg";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const Select = React.forwardRef(({ onChange, name, label }, ref) => (
    <>
      <label className="text-base text-[#B5BBF4]">{label}</label>
      <select
        name={name}
        ref={ref}
        onChange={onChange}
        className="w-full bg-transparent border-b outline-none border-[#5058B0] text-[#5058B0] text-lg font-normal p-1"
      >
        <option value=""></option>
        <option value="eng">English</option>
        <option value="fre">French</option>
        <option value="rus">Rusian</option>
        <option value="arab">Arabic</option>
        <option value="far">Farci</option>
        <option value="ur">Urdu</option>
      </select>
    </>
  ));

  return (
    <main className="w-[85%] mx-auto z-[-1] pb-10">
      {/* <div className="absolute w-[45rem] h-[35rem]">
        <img
          src={Blobber}
          alt={Blobber}
          className=" z-[-1] top-0 left-0 w-full h-full transform -translate-x-[12rem] -translate-y-[10rem]"
        />
      </div> */}
      <section className="flex items-center space-x-2 my-10 z-50">
        <img src={Logo} alt={Logo} className="h-8 w-8 object-cover" />
        <p className="text-white font-normal uppercase text-sm tracking-wider">
          Believers loveworld EMU Chapter
        </p>
      </section>

      <section className="space-y-5 my-20">
        <h1 className="text-4xl font-semibold">Spring Feast</h1>
        <p className="text-white text-lg w-9/12">
          Register and recieve a free gift from us.
        </p>
      </section>

      <section>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-1">
            <p className="text-base text-[#B5BBF4]">Your name</p>
            <input
              {...register("name", { required: true })}
              className="w-full bg-transparent border-b outline-none border-b-[#5058B0] text-[#5058B0] text-lg font-normal p-1"
            />
            {errors.name && <span>Your name is required</span>}
          </div>
          <div className="space-y-1">
            <label className="text-base text-[#B5BBF4]">Your email</label>
            <input
              {...register("email", { required: true })}
              className="w-full bg-transparent border-b outline-none border-[#5058B0] text-[#5058B0] text-lg font-normal p-1"
            />
            {errors.email && <span>Your email is required</span>}
          </div>
          <div>
            <Select label="Select your language" {...register("language")} />
            {errors.langauge && <span>Please select a language</span>}
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="bg-[#5058B0] text-white font-medium rounded w-full text-center py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;
