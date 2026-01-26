const SimpleHero = () => {
  return (
    <div className="bg-bg py-6 md:py-16 px-4 md:px-12 lg:px-24 font-text">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 sm:space-y-12">
            <div className="space-y-1 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkblue mb-4 sm:mb-6">
                What We
                <span className="text-gold inline sm:block"> Do</span>
              </h2>
              <p className="text-darkgray text-xs sm:text-sm md:text-base max-w-xs leading-6 md:leading-loose">
                We care for people through dedicated health volunteering.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-8">
              <p className="text-xs sm:text-sm md:text-base text-darkblue font-semibold leading-6 md:leading-loose mb-4 border-l-4 border-blue pl-4 sm:pl-6 italic">
                HELP Ethiopia fights for better healthcare in Ethiopia. Our
                Ye'Eteye Health Charity directly aids patients struggling with
                medical bills at Tikur Anbessa Hospital.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
                We go beyond finances, championing quality improvements in
                hospitals by streamlining procedures, improving patient
                transfers, and enhancing data management for better decision
                making. We also focus on optimizing hospital layouts for
                smoother patient flow and well-being.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
                But HELP Ethiopia doesn't stop there. We invest in the future by
                building leadership skills in young Ethiopians, ensuring a new
                generation equipped to tackle healthcare challenges.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-darkblue font-semibold leading-6 md:leading-loose mb-4 border-l-4 border-blue pl-4 sm:pl-6 italic">
                Ye'Etye Health Charity
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
                Every day, we witness the transformative power of compassion
                through our Eteye Charity. From covering medical expenses for
                struggling families to ensuring access to life-saving
                treatments, we’re there for our community when they need us
                most. Through our charity Program, we have been supporting many
                patients on treatment primarily in Tikur Anbessa Specialized
                hospital (TASH). These patients have passed through many
                hardships to come to hospital and most were about to quit the
                care and go to their hometown without completing their
                treatment.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
                In Eteye Health Charity, we accept request for support from
                treating doctors, nurses and patients themselves. We work
                closely with social workers and care providers in identifying
                eligible patients and reach out to them to cover their expenses
                for medications, imaging and laboratory tests.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
                We continue our support until they showed visible improvement in
                their clinical condition and get discharged. Nevertheless, due
                to our limited financial capacity and the demand is too high, we
                could not reach to more patients with treatable disease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleHero;
