// Hide subscription channel entries in the sidebar guide
function hideSubscriptionEntries() {
  const sections = document.querySelectorAll('#sections > ytd-guide-section-renderer');
  for (const section of sections) {
    const title = section.querySelector('#guide-section-title');
    if (title && title.textContent.trim() === 'Subscriptions') {
      section.style.display = 'none';
    }
  }
}

const observer = new MutationObserver(hideSubscriptionEntries);
observer.observe(document.documentElement, { childList: true, subtree: true });
