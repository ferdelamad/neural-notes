'use client'

export function NeuralBackground() {
  return (
    <div 
      className="absolute inset-0 -z-10"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full opacity-[0.15]"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <g className="neurons" filter="url(#glow)">
          {/* Central nodes */}
          <circle cx="600" cy="400" r="4" className="animate-pulse-slow" />
          <circle cx="500" cy="300" r="3" className="animate-pulse-slow [animation-delay:200ms]" />
          <circle cx="700" cy="300" r="3" className="animate-pulse-slow [animation-delay:400ms]" />
          <circle cx="700" cy="500" r="3" className="animate-pulse-slow [animation-delay:600ms]" />
          <circle cx="500" cy="500" r="3" className="animate-pulse-slow [animation-delay:800ms]" />
          <circle cx="400" cy="400" r="3" className="animate-pulse-slow [animation-delay:1000ms]" />
          <circle cx="800" cy="400" r="3" className="animate-pulse-slow [animation-delay:1200ms]" />
          
          {/* Additional central nodes */}
          <circle cx="550" cy="350" r="2" className="animate-pulse-slow [animation-delay:1400ms]" />
          <circle cx="650" cy="450" r="2" className="animate-pulse-slow [animation-delay:1600ms]" />
          <circle cx="450" cy="450" r="2" className="animate-pulse-slow [animation-delay:1800ms]" />
          
          {/* Left extended nodes */}
          <circle cx="300" cy="350" r="2" className="animate-pulse-slow [animation-delay:2000ms]" />
          <circle cx="250" cy="450" r="2" className="animate-pulse-slow [animation-delay:2200ms]" />
          
          {/* Right extended nodes */}
          <circle cx="900" cy="350" r="2" className="animate-pulse-slow [animation-delay:2400ms]" />
          <circle cx="950" cy="450" r="2" className="animate-pulse-slow [animation-delay:2600ms]" />
          
          {/* Central connections */}
          <path d="M600 400 L500 300" className="animate-draw-line" />
          <path d="M600 400 L700 300" className="animate-draw-line [animation-delay:200ms]" />
          <path d="M600 400 L700 500" className="animate-draw-line [animation-delay:400ms]" />
          <path d="M600 400 L500 500" className="animate-draw-line [animation-delay:600ms]" />
          <path d="M600 400 L400 400" className="animate-draw-line [animation-delay:800ms]" />
          <path d="M600 400 L800 400" className="animate-draw-line [animation-delay:1000ms]" />
          
          {/* Additional central connections */}
          <path d="M500 300 L400 400" className="animate-draw-line [animation-delay:1200ms]" />
          <path d="M700 300 L800 400" className="animate-draw-line [animation-delay:1400ms]" />
          <path d="M500 500 L400 400" className="animate-draw-line [animation-delay:1600ms]" />
          <path d="M700 500 L800 400" className="animate-draw-line [animation-delay:1800ms]" />
          
          {/* Extended connections */}
          <path d="M400 400 L300 350" className="animate-draw-line [animation-delay:2000ms]" />
          <path d="M400 400 L250 450" className="animate-draw-line [animation-delay:2200ms]" />
          <path d="M800 400 L900 350" className="animate-draw-line [animation-delay:2400ms]" />
          <path d="M800 400 L950 450" className="animate-draw-line [animation-delay:2600ms]" />
        </g>
      </svg>
    </div>
  )
} 