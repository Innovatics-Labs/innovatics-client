export function useScroller({ x, y, isSmooth = false }) {
  if (!window) return;
  return function scroller() {
    window.scrollTo({
      top: y,
      left: x,
      behavior: isSmooth ? "smooth" : "auto",
    });
  };
}
