import { HashLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <HashLoader color="#1a2b5f" size={60} />
      <p className="text-sm md:text-lg pt-2 font-semibold text-gray-700 font-text">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Spinner;
