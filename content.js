// Block scrolling in fullscreen mode to prevent recommendation UI
function isFullscreen() {
  return !!(document.fullscreenElement || document.webkitFullscreenElement);
}

// Block wheel/scroll events in fullscreen
document.addEventListener('wheel', function(e) {
  if (isFullscreen()) {
    e.preventDefault();
    e.stopPropagation();
  }
}, { passive: false, capture: true });

document.addEventListener('scroll', function(e) {
  if (isFullscreen()) {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo(0, 0);
  }
}, { passive: false, capture: true });

// Block touch-based scrolling in fullscreen
document.addEventListener('touchmove', function(e) {
  if (isFullscreen()) {
    e.preventDefault();
    e.stopPropagation();
  }
}, { passive: false, capture: true });

// Reset scroll position when entering fullscreen
document.addEventListener('fullscreenchange', function() {
  if (isFullscreen()) {
    window.scrollTo(0, 0);
  }
});
