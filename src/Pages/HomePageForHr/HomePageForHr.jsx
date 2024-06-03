import LimitedStock from "./LimitesStock/LimitedStock";
import PedingReqHr from "./PendingReq/PedingReqHr";
import TopRqquestItems from "./TopMostRequestitems/TopRqquestItems";
const HomePageForHr = () => {
    return (
        <section>
            <PedingReqHr/>
            <TopRqquestItems/>
            <LimitedStock/>
        </section>
    );
};

export default HomePageForHr;