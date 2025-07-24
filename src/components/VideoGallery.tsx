import VideoCard from "./VideoCard";

const VideoGallery = () => {
  // Sample videos - replace with your actual YouTube video IDs
  const videos = [
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "AI Landscape Journey",
      description: "A breathtaking journey through AI-generated landscapes using Google Veo3, showcasing the evolution of digital environments."
    },
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "Character Stories",
      description: "Compelling character narratives brought to life with advanced AI video generation techniques and creative storytelling."
    },
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "Abstract Visions",
      description: "Experimental abstract visuals pushing the boundaries of what's possible with AI-powered video creation."
    },
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "Future Cityscapes",
      description: "Imagining tomorrow's urban environments through the lens of cutting-edge AI video synthesis technology."
    },
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "Nature's AI Canvas",
      description: "Exploring natural phenomena recreated and reimagined using Google Veo3's powerful generation capabilities."
    },
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "Motion Experiments",
      description: "Dynamic experiments in movement and flow, demonstrating the fluid capabilities of AI video generation."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary-glow bg-clip-text text-transparent">
            My Video Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover a collection of AI-generated videos created with Google Veo3, 
            each exploring different aspects of digital creativity and storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id + index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <VideoCard
                videoId={video.id}
                title={video.title}
                description={video.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;