import bg from '../../assets/about.jpg'
const JoinAsHR = () => {
    return (
        <section className="min-h-[calc(100vh-330px)] py-32">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
<div style={{
          background: `linear-gradient(90deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} className="hidden bg-cover lg:block lg:w-1/2" >
</div>

<div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
    <div className="flex justify-center mx-auto">
    <h1 className="text-2xl font-semibold">Asset<span className="text-violet-500">Flow</span></h1>
    </div>

    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
        Welcome back!
    </p>
    <div className="mt-4">
        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="name">Full Name</label>
        <input id="name" name="name" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
    </div>
    <div className="mt-4">
        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="company">Company Name</label>
        <input id="company" name="company_name" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
    </div>
    <div className="mt-4">
        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="logo">Company Logo</label>
        <input id="logo" name="company_logo" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="file" />
    </div>
    <div className="mt-4">
        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
        <input id="LoggingEmailAddress" name="email" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
    </div>

    <div className="mt-4">
        <div className="flex justify-between">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
            <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
        </div>

        <input id="loggingPassword" name="password" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
    </div>

    <div className="mt-6">
        <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign Up
        </button>
    </div>
</div>
</div>
    </section>
    );
};

export default JoinAsHR;