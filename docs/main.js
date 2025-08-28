import "./style.css";
import Alpine from "alpinejs";
import HumanReplay from "../dist/index.js";

// Make HumanReplay available globally for Alpine
window.HumanReplay = HumanReplay;

// Start Alpine
window.Alpine = Alpine;
Alpine.start();

// Initialize the demo animation
document.addEventListener("DOMContentLoaded", () => {
  const humanIsTheNewBlack = document.getElementById("human-is-the-new-black");

  const humanIsTheNewBlackValues = [
    { op: "a", v: "H", t: 0 },
    { op: "a", v: "u", t: 354 },
    { op: "a", v: "m", t: 464 },
    { op: "a", v: "a", t: 594 },
    { op: "a", v: "n", t: 711 },
    { op: "a", v: " ", t: 808 },
    { op: "a", v: "i", t: 1176 },
    { op: "a", v: "s", t: 1466 },
    { op: "d", t: 1942 },
    { op: "a", v: "s", t: 2323 },
    { op: "a", v: " ", t: 2548 },
    { op: "a", v: "t", t: 2905 },
    { op: "a", v: "h", t: 2977 },
    { op: "a", v: "e", t: 3069 },
    { op: "a", v: " ", t: 3172 },
    { op: "a", v: "n", t: 3459 },
    { op: "a", v: "e", t: 3556 },
    { op: "a", v: "w", t: 3672 },
    { op: "a", v: " ", t: 3772 },
    { op: "a", v: "B", t: 4078 },
    { op: "d", t: 4772 },
    { op: "a", v: "b", t: 5001 },
    { op: "a", v: "l", t: 5079 },
    { op: "a", v: "a", t: 5165 },
    { op: "a", v: "c", t: 5267 },
    { op: "a", v: "k", t: 5422 },
    { op: "a", v: ".", t: 5504 },
  ];

  HumanReplay.replayFromData(humanIsTheNewBlack, humanIsTheNewBlackValues);
});

