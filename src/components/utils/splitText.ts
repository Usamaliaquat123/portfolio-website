import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  splitWords?: HTMLSpanElement[];
  splitChars?: HTMLSpanElement[];
}

gsap.registerPlugin(ScrollTrigger);

function splitToWords(el: HTMLElement): HTMLSpanElement[] {
  const text = el.textContent || "";
  el.textContent = "";
  const words: HTMLSpanElement[] = [];
  text.split(/\s+/).forEach((word, i, arr) => {
    const lineWrapper = document.createElement("div");
    lineWrapper.className = "split-line";
    lineWrapper.style.overflow = "hidden";
    lineWrapper.style.display = "inline";
    const span = document.createElement("span");
    span.textContent = word;
    span.style.display = "inline-block";
    lineWrapper.appendChild(span);
    el.appendChild(lineWrapper);
    words.push(span);
    if (i < arr.length - 1) {
      el.appendChild(document.createTextNode(" "));
    }
  });
  return words;
}

function splitToChars(el: HTMLElement): HTMLSpanElement[] {
  const text = el.textContent || "";
  el.textContent = "";
  const chars: HTMLSpanElement[] = [];
  const lineWrapper = document.createElement("div");
  lineWrapper.className = "split-line";
  lineWrapper.style.overflow = "hidden";
  lineWrapper.style.display = "block";
  text.split("").forEach(char => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    lineWrapper.appendChild(span);
    chars.push(span);
  });
  el.appendChild(lineWrapper);
  return chars;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
    }

    const words = splitToWords(para);
    para.splitWords = words;

    para.anim = gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
    }
    const chars = splitToChars(title);
    title.splitChars = chars;
    title.anim = gsap.fromTo(
      chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
