import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-card to-background" data-section="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary-glow bg-clip-text text-transparent">
              About My Work
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm passionate about exploring the intersection of artificial intelligence and creative storytelling. 
              Leveraging advanced AI tools, I produce compelling video content that expands the possibilities of digital media.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Each project is a thoughtfully designed exploration of digital storytelling, blending innovative prompting 
              techniques with artistic vision. This approach enables me to independently create high-quality digital content 
              quickly and cost-effectively—achieving results that would typically require extensive resources and specialized 
              teams through traditional production methods.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://www.linkedin.com/in/vitaliydolzhenko/', '_blank')}
            >
              Connect on LinkedIn
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary-glow">Creative Process</h3>
              <p className="text-muted-foreground">
                I approach each project with meticulous planning, crafting detailed prompts that guide 
                the AI to produce exactly the visual narrative I envision.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary-glow">Technical Expertise</h3>
              <p className="text-muted-foreground">
                Deep understanding of Google Veo3's capabilities allows me to push the platform's limits 
                and achieve results that showcase the true potential of AI video generation.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary-glow">Future Vision</h3>
              <p className="text-muted-foreground">
                I believe AI video generation represents the future of content creation, and I'm excited 
                to be at the forefront of this revolutionary technology.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;