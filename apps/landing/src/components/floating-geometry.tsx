import { memo } from 'react';

export const FloatingGeometry = memo(() => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      <div className="absolute left-[-20%] top-[-18%] z-0 h-[60vw] w-[60vw] rounded-full bg-primary/7 blur-[40px]" />
      <div className="absolute bottom-[-10%] left-[28%] h-[30vw] w-[30vw] rounded-full bg-primary/5 blur-[56px]" />
      <div className="absolute right-[-12%] top-[55%] h-[40vw] w-[40vw] rounded-full bg-[oklch(0.58_0.20_285_/_0.06)] blur-[100px]" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1.5px, transparent 1.5px),
            linear-gradient(to bottom, currentColor 1.5px, transparent 1.5px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="floating-shape absolute left-[5%] top-[8%] text-[oklch(0.72_0.18_194)]">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path
            d="M17 17C17 14.5 15 13 13 13C10 13 8 15.5 8 18C8 22 11 25 15 25C20.5 25 24 21 24 16C24 9.5 19 5 13 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="floating-shape floating-delay-2 absolute left-[12%] top-[15%] text-[oklch(0.76_0.16_200)]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <div className="floating-shape floating-delay-3 absolute right-[8%] top-[6%] text-[oklch(0.68_0.20_285)]">
        <svg width="30" height="30" viewBox="0 0 28 28" fill="none">
          <rect
            x="14"
            y="2"
            width="16"
            height="16"
            rx="2"
            transform="rotate(45 14 2)"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="currentColor"
            fillOpacity="0.10"
          />
        </svg>
      </div>

      <div className="floating-shape absolute left-[8%] top-[40%] text-[oklch(0.66_0.16_255)]">
        <svg width="48" height="19" viewBox="0 0 44 18" fill="none">
          <polyline
            points="2,14 11,4 20,14 29,4 38,14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="floating-shape floating-delay-2 absolute left-[18%] top-[45%] text-[oklch(0.68_0.17_194)]">
        <svg width="30" height="30" viewBox="0 0 34 34" fill="none">
          <path
            d="M17 17C17 14.5 15 13 13 13C10 13 8 15.5 8 18C8 22 11 25 15 25C20.5 25 24 21 24 16C24 9.5 19 5 13 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="floating-shape floating-delay-3 absolute right-[10%] top-[45%] text-[oklch(0.66_0.18_310)]">
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 3" />
          <circle cx="16" cy="16" r="5" fill="currentColor" opacity="0.18" />
        </svg>
      </div>
    </div>
  );
});
