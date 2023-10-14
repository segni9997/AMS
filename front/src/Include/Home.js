import React from "react";
import { Navbars } from "./Navbars";
import banner1 from "../assets/img/main-banner .jpg";
import back2 from "../assets/img/kjbg (1) 1.jpg";
import whoweare from "../assets/img/businessman-2606506_1920.jpg";
import "../assets/css/style.css";

export const Home = () => {
  return (
    <Navbars className="">
      <div className="">
        <div className="w-full h-960 realtive ">
          <div class="absolute top-[400px] left-70 px-4 py-3 ">
            <span className="text-white ">
              <h1 class="text-[#45C4E9] font-bold text-9xl ">
                {" "}
                Apex Consultancy
              </h1>{" "}
            </span>
          </div>
          <img src={banner1} className=" w-screen bg-center bg-cover h-5/6" />
        </div>
      </div>
      <div className="w-full h-960 bg-white  relative">
        {" "}
        <div className="absolute top-[200px] left-96 bg-slate-200 rounded-2xl">
          <div>
            <p className="w-[1300px] h-[600px] flex flex-1 mr-10">
              <img
                src={whoweare}
                className="w-[600px] h-[500px] rounded-2xl mt-12 ml-5"
              />{" "}
              <div className="ml-10 mt-0">
                <h1 className="text-8xl font-semibold mb-10 text-cyan-400">
                  Who We Are ?
                </h1>
                <p className="text-2xl mt-0">
                  Apex Consultancy is a program that assists high school
                  graduates in their college applications. We provide guidelines
                  and necessary details to ensure that students have a smooth
                  and successful application process. Our services include
                  helping students with their personal statements, identifying
                  suitable colleges, and providing guidance on standardized
                  tests such as the SAT and ACT. Additionally, we offer advice
                  on scholarships and financial aid to help students achieve
                  their academic goals. At Apex Consultancy, we strive to
                  empower students by providing them with the tools and
                  resources they need to succeed in their college applications
                </p>
                {/* <button className="outline outline-2 outline-none  outline-offset-2 ... w-48 mt-3 ml-60 bg-cyan-400 font-bold text-white text-2xl rounded-2xl h-10">
                  More...
                </button> */}
              </div>
            </p>
          </div>
        </div>
        <img src={back2} className=" w-screen bg-center bg-cover h-fit" />
        <div className="relative bg-slate-900 w-full h-[980px] ">
          <div className=" absolute w-12 h-2 top-24 bg-sky-500"></div>
        </div>
      </div>
    </Navbars>
  );
};
