import About from "../../Component/About/About";
import Banner from "../../Component/Banner/Banner";
import Packages from "../../Component/Packages/Packages";
import PendingRequestSectionForEmployee from "../EmployeePages/PendingRequestSectionForEmployee/PendingRequestSectionForEmployee";

const HomePage = () => {
    return (
        <main>
            <Banner/>
            <PendingRequestSectionForEmployee/>
            <About/>
            <Packages/>
        </main>
    );
};

export default HomePage;