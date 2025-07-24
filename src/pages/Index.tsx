import HeroSection from "@/components/HeroSection";
import VideoGallery from "@/components/VideoGallery";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VideoGallery />
      <AboutSection />
    </div>
  );
};

export default Index;
