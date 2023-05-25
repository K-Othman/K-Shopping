import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import landingImg from "../images/landing.jpg";
import Landing from "../components/Landing";
import FeaturedItems from "../components/FeaturedItems";

function Home() {
  return (
    <section>
      <Landing />
      <FeaturedItems />
    </section>
  );
}

export default Home;
