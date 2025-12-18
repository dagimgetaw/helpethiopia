import bg from "../../../assets/donate.jpg";

const Home = () => {
  return (
    <section
      className="relative w-full min-h-[700px] sm:min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center font-text px-4 sm:px-6 md:px-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="text-white font-bold drop-shadow-xl leading-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
          One Action
          <br className="hidden sm:block" />
          <span className="block sm:inline">Endless Impact.</span>
        </h1>
      </div>
    </section>
  );
};

export default Home;
