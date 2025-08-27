import { Card } from "@/components/ui/card";

const FeaturedVideo = () => {
  const featuredVideo = {
    id: "qkrfKML79Y0",
    title: "AI Landscape Journey",
    description: "A breathtaking journey through AI-generated landscapes using Google Veo3, showcasing the evolution of digital environments."
  };

  const openYouTubeVideo = () => {
    window.open(`https://www.youtube.com/watch?v=${featuredVideo.id}`, '_blank');
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary-glow bg-clip-text text-transparent">
            Featured Video
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the latest in AI-generated video content
          </p>
        </div>

        <Card className="group overflow-hidden bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer" onClick={openYouTubeVideo}>
          <div className="relative aspect-video overflow-hidden">
            <div className="relative w-full h-full">
              <img
                src={`https://img.youtube.com/vi/${featuredVideo.id}/maxresdefault.jpg`}
                alt={featuredVideo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-full p-6">
                  <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary-glow transition-colors duration-300">
              {featuredVideo.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {featuredVideo.description}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedVideo;