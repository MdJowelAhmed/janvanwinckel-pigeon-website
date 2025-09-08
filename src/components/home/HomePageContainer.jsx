import BrowseByCategory from "../exploreComponents/BrowseByCategory";
import NewClasses from "../exploreComponents/NewClasses";
import YogaQuotePage from "../exploreComponents/Qoute";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import { ComingSoon } from "./ComingSoon";
import { DailyInspiration } from "./DailyInspiration";
import FaqSection from "./FaqSection";
import HowItWork from "./HowItWork";
import { TodaysVideo } from "./TodaysVideo";
import WhyChooseUs from "./WhyChooseUs";

const HomePageContainer = () => {
  
  return (
    <div>
      <Banner />
      <AboutUs />
       <HowItWork />
      <WhyChooseUs />
      <FaqSection />

     
      {/* <YogaQuotePage />
      <TodaysVideo />
      <ComingSoon />
      <DailyInspiration />
      <BrowseByCategory />
      <NewClasses /> */}
    </div>
  );
};

export default HomePageContainer;
