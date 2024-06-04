import { useState } from "react";
import PaymentModal from "../Modal/PaymentModal";


const PaymentSection = () => {
    const [info,setInfo] = useState({})
    const [isOpen, setIsOpen] = useState(false)
      const packageDetails = [
        {
            id:1,
            name:'BASIC',
            employeeNumber:5,
            price:5
        },
        {
            id:2,
            name:'PREMIUM',
            employeeNumber:10,
            price:8,
        },
        {
            id:3,
            name:'ENTERPRISE',
            employeeNumber:20,
            price:15
        },
      ]  
      const closeModal = () => {
        setIsOpen(false)
      }
    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-bold">Pricing Plan</h1>
                <p className="text-xl max-w-[800px] mt-3 mx-auto">AssetFlow caters to businesses of all sizes, offering flexible subscription plans to fit your specific requirements.</p>
            </div>
            <div className="bg-white dark:bg-gray-900">

        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {
                packageDetails && packageDetails.map( item => <div key={item.id} className="w-full p-8 space-y-8 text-center border group hover:bg-blue-600 border-gray-200 rounded-lg dark:border-gray-700">
                <p className="font-medium text-gray-500 uppercase group-hover:text-white dark:text-gray-300">{item.name}</p>

                <h2 className="text-4xl font-semibold text-gray-800 group-hover:text-white uppercase dark:text-gray-100">
                    ${item.price}
                </h2>

                <p className="font-medium text-gray-500 group-hover:text-white dark:text-gray-300">Maximum {item.employeeNumber} employees</p>

                <button onClick={() => {
                    setInfo(item)
                    setIsOpen(true)}} className="w-full px-4 py-2 group-hover:bg-white group-hover:text-blue-500 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Start Now
                </button>
                <PaymentModal
                isOpen={isOpen}
                closeModal={closeModal}
                paymentInfo={{
                  ...info,
                }}
                />
            </div> )
            }
        </div>
</div>
        </div>
    );
};

export default PaymentSection;