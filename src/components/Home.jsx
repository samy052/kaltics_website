import ServicePage from "./service/ServicePage"
import Hero2 from "./Hero2"
import Career from "./career/Career"
import Service from "./Service"
import Innovation from "./Innovation"
import Testimonals from "./Testimonals"
import Contact from "./Contact"
import FooterNav from "./FooterNav"

function Home() {
  return (
    <div className=' text-neutral-200 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
      {/* <Navbar/> */}
      {/* <Hero/> */}
      <Hero2/>
      {/* <TeamSection/> */}
      
      {/* <Career/> */}
      <Service/>
      <Innovation/>
      <Testimonals/>
      <Contact/>
      <FooterNav/>
    </div>
  )
}

export default Home