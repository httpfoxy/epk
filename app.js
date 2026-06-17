const bookElement = document.getElementById("book");

const pageFlip = new St.PageFlip(bookElement, {
  width: 500,
  height: 700,
  size: "fixed",
  minWidth: 315,
  maxWidth: 1000,
  minHeight: 420,
  maxHeight: 1350,
  maxShadowOpacity: 0.5,
  showCover: true,
  startPage: 0,
  mobileScrollSupport: false,
  usePortrait: true,
  startPage: 0,
  autoSize: true
});

pageFlip.loadFromHTML(
  document.querySelectorAll(".page")
);

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    pageFlip.flipNext();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    pageFlip.flipPrev();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    pageFlip.flipNext();
  }

  if (e.key === "ArrowLeft") {
    pageFlip.flipPrev();
  }
});

pageFlip.on("flip", (e) => {
  console.log("Current page:", e.data);
});
document.addEventListener("mousemove", (e) => {
  const hearts = document.querySelectorAll(".pixel");

  hearts.forEach((heart, i) => {
    const speed = (i % 5 + 1) * 0.15;

    const x = (window.innerWidth / 2 - e.clientX) * speed;
    const y = (window.innerHeight / 2 - e.clientY) * speed;

    heart.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
  });
});
const symbols = ["✦", "✧", "💙", "💗"];

if (!window.trailCount) window.trailCount = 0;

document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  if (window.trailCount >= 20) return;

  const el = document.createElement("div");
  el.className = "trail-dot";
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  el.style.left = e.clientX + "px";
  el.style.top = e.clientY + "px";

  document.body.appendChild(el);
  window.trailCount++;

  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "scale(0.5)";
  }, 50);

  setTimeout(() => {
    if (el && el.parentNode) el.remove();
    window.trailCount--;
  }, 800);
});
const audio = document.getElementById("page5-audio");
const btn = document.getElementById("audioBtn");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    btn.textContent = "❚❚";
  } else {
    audio.pause();
    btn.textContent = "▶";
  }
  isPlaying = !isPlaying;
});
