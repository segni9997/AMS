import React from "react";
import { Navbars } from "./Navbars";
import banner1 from "../assets/img/main-banner .jpg";

export const Home = () => {
  return (
    <Navbars>
      <div className="w-screen">
        <img src={banner1} className=" w-screen bg-center bg-cover" />
      </div>
    </Navbars>
  );
};
