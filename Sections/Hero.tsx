import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative min-h-screen   flex items-center justify-center overflow-hidden">
      {/* Background of the page */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Background image of web-page"
          fill
          className="object-cover h-full w-full opacity-40 "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full  opacity-60 "
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
