
import RelationshipArchive from "./AboutUs";
import Banner from "./Banner";

const HomePageContainer = () => {
  
  return (
    <div className="w-full">
      <div className="w-full">
        <Banner />
      </div>
      <div className=" mx-auto">
        <RelationshipArchive />
        {/* <HowItWork />
        <WhyChooseUs />
        <FaqSection /> */}
      </div>
    </div>
  );
};

export default HomePageContainer;
