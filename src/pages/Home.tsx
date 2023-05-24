import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import landingImg from "../images/landing.jpg";
import Landing from "../components/Landing";

function Home() {
  return (
    <section>
      <Landing />
      {/* <div className="relative">
        <div>
          <img
            className="w-[100%] "
            style={{ height: "calc(100vh - 64px)" }}
            src={landingImg}
            alt="home"
          />
          <span className="absolute bg-[rgb(0,0,0)] min-h-full min-w-full z-10 top-0 bg-opacity-40"></span>
        </div>
        <div className="absolute text-white z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-80%]">
          <p className="text-center text-4xl tracking-widest">
            NEW STYLES ADDED
          </p>
        </div>
        <div className="z-20 text-white absolute bottom-16 flex gap-14 left-[50%] translate-x-[-50%] ">
          <Link className="hover:text-[#EEE]" to={`/store/men's clothing`}>
            SHOP MES'S
          </Link>
          <Link className="hover:text-[#EEE]" to={`/store/women's clothing`}>
            SHOP WOMEN'S
          </Link>
          <Link className="hover:text-[#EEE]" to={"/store/electronics"}>
            SHOP ELECTRONICS
          </Link>
          <Link className="hover:text-[#EEE]" to={"/store/jewelery"}>
            SHOP JEWELLERY
          </Link>
        </div>
      </div> */}
    </section>
  );
}

export default Home;
