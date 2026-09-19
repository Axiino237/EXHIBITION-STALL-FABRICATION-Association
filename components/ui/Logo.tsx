import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = "h-11 w-auto", showTagline = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Hexagonal Gold Emblem Badge */}
      <div className="relative shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(245,158,11,0.35)]"
        >
          <defs>
            <linearGradient id="goldGradBadge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="20%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="85%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>

            <linearGradient id="shieldDarkBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B1220" />
            </linearGradient>
          </defs>

          {/* Hexagon Shield */}
          <polygon
            points="50,4 92,26 92,74 50,96 8,74 8,26"
            fill="url(#shieldDarkBg)"
            stroke="url(#goldGradBadge)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Architectural Expo Stall Pavilion Structure */}
          {/* Base platform */}
          <line x1="24" y1="72" x2="76" y2="72" stroke="url(#goldGradBadge)" strokeWidth="3" strokeLinecap="round" />
          
          {/* Main vertical structural pillars */}
          <line x1="30" y1="72" x2="30" y2="34" stroke="url(#goldGradBadge)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="70" y1="72" x2="70" y2="34" stroke="url(#goldGradBadge)" strokeWidth="2.5" strokeLinecap="round" />

          {/* Cross Truss Bracing (Stall Engineering) */}
          <line x1="30" y1="42" x2="70" y2="64" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.85" />
          <line x1="30" y1="64" x2="70" y2="42" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.85" />

          {/* Cantilever Canopy / Modern Arch Roof */}
          <polygon points="20,34 50,18 80,34 70,39 50,26 30,39" fill="url(#goldGradBadge)" />

          {/* Center 3D Exhibition Cube */}
          <polygon points="50,38 64,46 50,54 36,46" fill="#FFFFFF" />
          <polygon points="36,46 50,54 50,68 36,60" fill="#94A3B8" />
          <polygon points="64,46 50,54 50,68 64,60" fill="url(#goldGradBadge)" />

          {/* Crest Star */}
          <circle cx="50" cy="12" r="3.5" fill="#FEF08A" />
        </svg>
      </div>

      {/* Association Typography */}
      <div className="flex flex-col justify-center">
        {/* Line 1: TNSFA TAMIL NADU */}
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-xl sm:text-2xl font-black tracking-wider text-white">
            TNSFA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
          <span className="px-1.5 py-0.5 rounded bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-[#0B1220] text-[9px] sm:text-[10px] font-black tracking-wider uppercase">
            TAMIL NADU
          </span>
        </div>

        {/* Line 2: Full Association Name */}
        <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 uppercase leading-tight mt-0.5">
          TAMIL NADU STALL FABRICATION ASSOCIATION
        </span>

        {/* Line 3: Sangam Tagline (Optional) */}
        {showTagline && (
          <span className="text-[8px] sm:text-[9px] font-medium tracking-widest text-slate-400 uppercase leading-tight mt-0.5">
            State Sangam &bull; Stall Design &bull; Fabrication &bull; Expo Services
          </span>
        )}
      </div>
    </div>
  );
}
