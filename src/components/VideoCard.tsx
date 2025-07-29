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
    <Card className="group overflow-hidden bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer" onClick={openYouTubeVideo}>
      <div className="relative aspect-video overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-full p-4">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
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