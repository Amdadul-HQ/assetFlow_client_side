
const PaymentSection = () => {
    
    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-bold">Pricing Plan</h1>
                <p className="text-xl max-w-[800px] mt-3 mx-auto">AssetFlow caters to businesses of all sizes, offering flexible subscription plans to fit your specific requirements.</p>
            </div>
            <div className="bg-white dark:bg-gray-900">

        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full p-8 space-y-8 text-center border group hover:bg-blue-600 border-gray-200 rounded-lg dark:border-gray-700">
                <p className="font-medium text-gray-500 uppercase group-hover:text-white dark:text-gray-300">Basic</p>

                <h2 className="text-4xl font-semibold text-gray-800 group-hover:text-white uppercase dark:text-gray-100">
                    $5
                </h2>

                <p className="font-medium text-gray-500 group-hover:text-white dark:text-gray-300">Maximum 5 employees</p>

                <button className="w-full px-4 py-2 group-hover:bg-white group-hover:text-blue-500 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Start Now
                </button>
            </div>
            <div className="w-full p-8 space-y-8 text-center border group hover:bg-blue-600 border-gray-200 rounded-lg dark:border-gray-700">
                <p className="font-medium text-gray-500 uppercase group-hover:text-white dark:text-gray-300">PREMIUM</p>

                <h2 className="text-4xl font-semibold text-gray-800 group-hover:text-white uppercase dark:text-gray-100">
                    $8
                </h2>

                <p className="font-medium text-gray-500 group-hover:text-white dark:text-gray-300">Maximum 10 employees</p>

                <button className="w-full px-4 py-2 group-hover:bg-white group-hover:text-blue-500 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Start Now
                </button>
            </div>
            <div className="w-full p-8 space-y-8 text-center border group hover:bg-blue-600 border-gray-200 rounded-lg dark:border-gray-700">
                <p className="font-medium text-gray-500 uppercase group-hover:text-white dark:text-gray-300">ENTERPRISE</p>

                <h2 className="text-4xl font-semibold text-gray-800 group-hover:text-white uppercase dark:text-gray-100">
                    $15
                </h2>

                <p className="font-medium text-gray-500 group-hover:text-white dark:text-gray-300">Maximum 20 employees</p>

                <button className="w-full px-4 py-2 group-hover:bg-white group-hover:text-blue-500 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Start Now
                </button>
            </div>
        </div>
</div>
        </div>
    );
};

export default PaymentSection;