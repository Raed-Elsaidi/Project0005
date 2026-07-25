import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white dark:bg-[#050816] transition-colors duration-300"
    >
      <HeroBackground />

      <div className="container mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="grid w-full items-center gap-20 lg:grid-cols-2">
          <HeroContent />

          <div className="flex justify-center lg:justify-end">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;