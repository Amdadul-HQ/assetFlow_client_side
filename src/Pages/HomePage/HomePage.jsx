import About from "../../Component/About/About";
import Banner from "../../Component/Banner/Banner";
import Packages from "../../Component/Packages/Packages";
// import PendingRequestSectionForEmployee from "../EmployeePages/PendingRequestSectionForEmployee/PendingRequestSectionForEmployee";
import HomePageForHr from "../HomePageForHr/HomePageForHr";

const HomePage = () => {
    return (
        <main>
            <Banner/>
            {/* <PendingRequestSectionForEmployee/> */}
            <HomePageForHr/>
            <About/>
            <Packages/>
        </main>
    );
};

export default HomePage;