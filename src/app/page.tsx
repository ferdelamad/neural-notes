import { Card } from "@/components/ui/card"
import { NeuralBackground } from "@/components/neural-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Neural network background animation */}
      <NeuralBackground />

      {/* Yellow gradient overlay */}
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(255,215,0,0.1),rgba(0,0,0,0))]" 
        aria-hidden="true"
      />
      
      <div className="flex min-h-screen flex-col items-center justify-center py-10">
        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
          {/* Hero section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Neural Notes
              <span className="block bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
                AI Within Reach
              </span>
            </h1>
            
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl pb-6"> 
              A thoughtfully crafted weekly newsletter for AI Enthusiasts.
            </p>

            {/* Newsletter card */}
            <Card className="mx-auto max-w-md border border-yellow-500/20 bg-black/50 p-8 backdrop-blur-sm animate-glow">
              <div className="space-y-4">
                <h2 className="text-lg font-medium">
                  Subscribe to the newsletter
                </h2>
                <p className="text-sm text-muted-foreground">
                  Join the top AI visionaries for a weekly update.
                </p>
                {/* Placeholder for Beehiiv embed */}
                <div className="rounded-md border border-dashed border-yellow-500/50 bg-muted/50">
                  <iframe 
                    src="https://embeds.beehiiv.com/d3dd406e-8e69-4e37-9a99-7f45a475eaab?slim=true" 
                    data-test-id="beehiiv-embed" 
                    height="52"
                    frameBorder="0" 
                    scrolling="no"
                    style={{margin: "0", borderRadius: "0px !important;", backgroundColor: "transparent", width: "100%"}}>
                  </iframe>
                </div>
              </div>
            </Card>
          </div>

          {/* Features section */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Card 
                key={i} 
                className="border-yellow-500/10 bg-black/30 p-6 backdrop-blur-sm hover:border-yellow-500/30 transition-colors"
              >
                <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

const features = [
  {
    title: "AI Tooling",
    description: "Discover a trending tool or workflow that’s disrupting the AI space.",
  },
  {
    title: "Learning resources",
    description: "Learn about improving your workflows, develop ML/AI models, and build with AI.",
  },
  {
    title: "Highlights",
    description: "Stay in the loop with the most relevant AI news and trends of the week.",
  },
] 