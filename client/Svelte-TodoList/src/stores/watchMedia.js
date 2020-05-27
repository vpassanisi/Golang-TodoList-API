import watchMedia from "svelte-media";

const mediaqueries = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  landscape: "(orientation: landscape) and (max-height: 499px)",
  dark: "(prefers-color-scheme: dark)",
  noanimations: "(prefers-reduced-motion: reduce)"
};

export const media = watchMedia(mediaqueries);
