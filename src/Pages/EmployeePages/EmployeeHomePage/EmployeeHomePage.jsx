import PendingRequestSectionForEmployee from '../PendingRequestSectionForEmployee/PendingRequestSectionForEmployee'
import MyMountlyRequest from './MyMontlyRequest/MyMountlyRequest';
const EmployeeHomePage = () => {
    return (
        <section>
            <PendingRequestSectionForEmployee/>
            <MyMountlyRequest/>
        </section>
    );
};

export default EmployeeHomePage;