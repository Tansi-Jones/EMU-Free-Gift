import React, { useState } from "react";
import Logo from "./img/loveworld.png";
// import Blobber from "./img/blobber.svg";
import { useForm } from "react-hook-form";
import "./App.css";
import { Success } from "./components/Success";
import { ImSpinner2 } from "react-icons/im";
import { Fail } from "./components/Fail";
import axios from "axios";
import fileDownload from "js-file-download";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      axios({
        url: "https://spring-feast-server.herokuapp.com/api/user/submit",
        method: "POST",
        responseType: "blob",
        data: data,
      }).then((res) => {
        fileDownload(res.data, `Rhapsody of Realities - ${data.language}.pdf`);
      });

      setIsLoading(false);
      setSuccess(true);
    } catch (error) {
      setIsLoading(true);
      setFail(true);
      // console.log(data);
      setIsLoading(false);
    }
  };

  const Select = React.forwardRef(({ onChange, name, label }, ref) => (
    <>
      <Success call={success} />
      <Fail call={fail} />
      <label className="text-base text-secondary">{label}</label>
      <select
        name={name}
        ref={ref}
        onChange={onChange}
        className="w-full bg-transparent border-b outline-none border-primary text-secondary text-lg font-normal p-1"
      >
        <option value=""></option>
        <option value="arab">Arabic</option>
        <option value="eng">English</option>
        <option value="far">Farci</option>
        <option value="fre">French</option>
      </select>
    </>
  ));

  return (
    <>
      <h1
        className="text-white text-3xl font-semibold text-center
      py-52 hidden lg:block"
      >
        This site is only visible on mobile and tablet devices
      </h1>

      <main className="w-[85%] mx-auto z-[-1] pb-10 lg:hidden">
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
              <p className="text-base text-secondary">Your name</p>
              <input
                {...register("name", { required: true })}
                className="w-full bg-transparent border-b outline-none border-b-primary text-primary text-lg font-normal p-1"
              />
              {errors.name && (
                <span className="text-red-400 font-light text-sm">
                  Your name is required
                </span>
              )}
            </div>
            <div className="space-y-1">
              <label className="text-base text-secondary">Your email</label>
              <input
                {...register("email", { required: true })}
                className="w-full bg-transparent border-b outline-none border-primary text-primary text-lg font-normal p-1"
              />
              {errors.email && (
                <span className="text-red-400 font-light text-sm">
                  Your email is required
                </span>
              )}
            </div>
            <div>
              <Select label="Select your language" {...register("language")} />
              {errors.language && (
                <span className="text-red-400 font-light text-sm">
                  Please select a language
                </span>
              )}
            </div>

            <div className="pt-8">
              <button
                type="submit"
                className="bg-primary text-white font-medium rounded w-full text-center py-2 flex items-center justify-center space-x-3"
                // onClick={downloadGift}
              >
                <span>Submit</span>
                {isLoading && <ImSpinner2 className="animate-spin" />}
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
