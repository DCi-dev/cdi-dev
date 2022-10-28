export function showHoverAnimation(e) {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
}

export function removeHoverAnimation(e) {
  e.target.style.background = null;
  e.target.style.borderImage = null;
}

// group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 bg-gray-50 p-4 hover:bg-white dark:border-neutral-700 dark:bg-darkPrimary hover:dark:bg-darkSecondary sm:justify-start md:origin-top
