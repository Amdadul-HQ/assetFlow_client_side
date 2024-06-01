import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosCommon from "./useAxiosCommon";
import axios from "axios";

const useHrManager = () => {
    const {user} = useAuth()
    // const axiosSecure = useAxiosSecure()
    const axiosCommon = useAxiosCommon()
    const {data:isHr,isPending} = useQuery({
        queryKey:['isHr',user?.email],
        queryFn:async()=> {
            // const res = await axios.get('http://localhost:5000/hrmanager/rimon@gmail.com')
            const {data} = await axiosCommon.get(`/hrmanager/${user?.email}`)
            return data?.hrRole
        }
    })
    return [isHr,isPending]
};

export default useHrManager;