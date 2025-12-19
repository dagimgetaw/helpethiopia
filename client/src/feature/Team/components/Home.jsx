import { team_data } from "../../../constant";
import SectionTitle from "../../../components/SectionTitle";
import TeamCard from "../../../components/TeamCard";
import Avatar from "../../../components/Avatar";
import MemberInfo from "../../../components/MemberInfo";

const Home = () => {
  const leadership = team_data.slice(0, 2);
  const managers = team_data.slice(2, 5);
  const engineers = team_data.slice(5);

  return (
    <section className="bg-bg font-text px-4 sm:px-6 lg:px-8 pt-6 pb-12 md:pt-10 md:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Meet Our Team
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-black max-w-5xl mx-auto leading-relaxed">
            HELP Ethiopia brings together passionate professionals dedicated to
            creating lasting change through innovation and collaboration.
          </p>
        </div>

        {/* Leadership */}
        <section className="mb-10 md:mb-20">
          <SectionTitle title="Executive Leadership" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <TeamCard key={index}>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Avatar
                    size="lg"
                    src={member.image}
                    alt={member.name + " Image"}
                  />
                  <MemberInfo member={member} centerOnMobile />
                </div>
              </TeamCard>
            ))}
          </div>
        </section>

        {/* Management */}
        <section className="mb-10 md:mb-20">
          <SectionTitle title="Program Management" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {managers.map((member, index) => (
              <TeamCard key={index}>
                <div className="flex flex-col items-center text-center gap-4">
                  <Avatar
                    size="md"
                    src={member.image}
                    alt={member.name + " Image"}
                  />
                  <MemberInfo member={member} />
                </div>
              </TeamCard>
            ))}
          </div>
        </section>

        {/* Technical */}
        <section className="">
          <SectionTitle title="Technical Team" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {engineers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 flex items-center gap-4"
              >
                <Avatar
                  size="sm"
                  src={member.image}
                  alt={member.name + " Image"}
                />
                <MemberInfo member={member} tecnhicalView />
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
