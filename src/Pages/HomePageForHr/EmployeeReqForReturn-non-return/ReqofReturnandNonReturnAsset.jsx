import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PaiChart from "./PaiChart";


const ReqofReturnandNonReturnAsset = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data} = useQuery({
        queryKey:['return-nonreturnAsset',user?.email],
        queryFn:async()=>{
            const {data} = await axiosSecure.get(`/returnable-nonreturnable/${user?.email}`)
            return data
        }
    })
    return (
        <section className="min-h-[calc(100vh-330px)]">
            <div>
                <h1 className="text-5xl text-center mb-5 font-bold">Return Asset & Non Return Asset <br /> Request By Employe</h1>
            </div>
            <div>
                <PaiChart data={data}/>
            </div>
        </section>
    );
};

export default ReqofReturnandNonReturnAsset;