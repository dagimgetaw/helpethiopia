import { Link } from "react-router-dom";
import { success_storie } from "../constant/index";

const SuccessStories = () => {
  return (
    <div className="pt-12 pb-2 sm:py-12 px-6 md:px-12 lg:px-24 bg-bg font-text">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue mb-4">
            Success Stories
          </h2>
          <p className="text-darkgray text-xs sm:text-sm md:text-base max-w-5xl mx-auto leading-6 md:leading-loose">
            Real people. Real stories. Impact made possible by your generosity.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-16">
          {success_storie.map((story, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={story.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`md:flex ${!isEven ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/3">
                    <div className="h-110 w-full">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover object-top rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="p-8 md:w-2/3">
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
                        {story.name}
                      </h3>
                      <div className="text-xs sm:text-sm text-darkgray mt-1 flex items-center gap-4">
                        <span>{story.age} years</span>
                        <span>📍 {story.location}</span>
                      </div>
                    </div>

                    <span className="inline-block px-3 py-1 mb-4 text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
                      {story.condition}
                    </span>

                    <p
                      className="text-darkgray leading-relaxed text-xs sm:text-base grow"
                      dangerouslySetInnerHTML={{ __html: story.story }}
                    ></p>

                    <div>
                      <Link
                        to={story.link}
                        className="inline-block text-xs md:text-sm font-bold text-blue-700"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
