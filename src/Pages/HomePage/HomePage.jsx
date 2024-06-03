import About from "../../Component/About/About";
import Banner from "../../Component/Banner/Banner";
import Packages from "../../Component/Packages/Packages";
import useEmployee from "../../Hooks/useEmployee";
import useHrManager from "../../Hooks/useHrManager";
import ContactHr from "../ConteactHrPage/ContactHr";
import EmployeeHomePage from "../EmployeePages/EmployeeHomePage/EmployeeHomePage";
import HomePageForHr from "../HomePageForHr/HomePageForHr";

const HomePage = () => {
    const [isHr] = useHrManager()
    const [isEmployee] = useEmployee()
    return (
        <main>
            <Banner/>
            {isEmployee && <EmployeeHomePage/>}
            {isHr && <HomePageForHr/>}
            <About/>
            {!isEmployee && !isHr ? <ContactHr/> : ''}
            <Packages/>
        </main>
    );
};

export default HomePage;