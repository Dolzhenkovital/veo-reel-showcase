import { Card } from "@/components/ui/card";

interface VideoCardProps {
  videoId: string;
  title: string;
  description: string;
}

const VideoCard = ({ videoId, title, description }: VideoCardProps) => {
  const openYouTubeVideo = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <Card 
      className="group overflow-hidden bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer" 
      onClick={openYouTubeVideo}
    >
      <div className="relative aspect-video overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary-glow transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default VideoCard;