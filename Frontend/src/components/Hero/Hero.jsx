import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <video
          className="hero-video"
          src="/videos/Slider.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <img
          src="/images/best-seller.jpg"
          alt="Best Seller"
          className="hero-banner"
        />
      </div>
    </div>
  );
};

export default Hero;