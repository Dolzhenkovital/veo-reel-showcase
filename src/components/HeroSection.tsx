import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToVideos = () => {
    const videoSection = document.querySelector('[data-section="videos"]');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('[data-section="about"]');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary-glow to-accent bg-clip-text text-transparent">
            AI Video Creator
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Exploring the future of storytelling with{" "}
            <span className="text-primary-glow font-semibold">Google Veo3</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={scrollToVideos}>
            Watch My Videos
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4" onClick={scrollToAbout}>
            Learn More
          </Button>
        </div>

        <div className="mt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/40 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-primary-glow/20 rounded-full blur-md animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;