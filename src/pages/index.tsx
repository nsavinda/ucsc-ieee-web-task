import React from "react";
import Navbar from "../sections/Navbar"
import Hero from "../sections/Hero"
import Timeline from "../sections/Timeline";
import Introduction from "../sections/Introduction";
import Prizes from "../sections/Prizes";
import Faq from "../sections/Faq";
import Footer from "../sections/Footer";


function Home () {
  return ( <>
<Navbar />
<Hero />
<Introduction />
<Timeline />
<Prizes />
<Faq />
<Footer />
</>
  );
}

export default Home;