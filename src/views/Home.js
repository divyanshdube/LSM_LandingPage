import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";
import CoursesSection from "../Component/Divyansh/upcomingCourses.js";
import SecondPage from "./SecondPage";
import Introductory from "../Component/Divyansh/introductory.js";
import HeroSection from "../Component/Divyansh/HeroSection.js";
import EventSection from "../Component/Divyansh/EventSection.js";
import KeynoteSpeaker from "../Component/Gaurav/KeynoteSpeaker/KeynoteSpeaker.jsx"
import CarouselCaptions from "../Component/Gaurav/carousel/carousel.jsx";
import KnowledgeBase from "../Component/Gaurav/LifeChangingProcess/index.jsx";
import Pricing from "../Component/Gaurav/Pricing/index.jsx";
import Blogs from "../Component/Aishwarya/Blogs/index.jsx"
import LastSection from "../Component/Aishwarya/index.jsx";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Introductory />
      <EventSection />
      <CoursesSection />
      <KnowledgeBase/>
      <CarouselCaptions/>
      <Pricing/>
      <KeynoteSpeaker/>
      {/* <BlogCard /> */}
      <Blogs/>
      <LastSection/>
    </>

  );
};

export default Home;
