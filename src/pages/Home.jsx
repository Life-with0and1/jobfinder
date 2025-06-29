import DemandSkills from "../components/DemandSkills";
import Footer from "../components/Fotter";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonials";
import WorkFlow from "../components/WorkFlow";

function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <DemandSkills />
      <WorkFlow />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
