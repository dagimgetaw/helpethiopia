import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-bg font-text text-center px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 sm:p-8 md:p-12 shadow-md border border-darkblue/2">
        <h2 className="text-base sm:text-xl md:text-xl font-semibold text-darkblue mb-8">
          Volunteer with Us - Share your time and skills to directly impact
          lives and strengthen our community.
        </h2>

        <div className="inline-block">
          <Link to="/register">
            <button className="px-8 py-3 leading-6 md:leading-loose text-center text-xs sm:text-sm md:text-base font-semibold bg-gold text-darkblue rounded-lg cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl">
              Become a Volunteers
            </button>
          </Link>
        </div>

        <p className="mt-8 text-gray-700 leading-6 md:leading-loose text-center text-xs sm:text-sm md:text-base">
          Your support helps us continue our mission of transforming healthcare
          in Ethiopia.
        </p>
      </div>
    </div>
  );
};

export default Register;
