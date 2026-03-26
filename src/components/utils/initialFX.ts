import gsap from "gsap";

function splitTextToChars(selector: string | string[]): HTMLSpanElement[] {
  const selectors = Array.isArray(selector) ? selector : [selector];
  const allChars: HTMLSpanElement[] = [];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      const text = el.textContent || "";
      el.textContent = "";
      const lineWrapper = document.createElement("div");
      lineWrapper.className = "split-line";
      lineWrapper.style.overflow = "hidden";
      lineWrapper.style.display = "block";
      text.split("").forEach(char => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        lineWrapper.appendChild(span);
        allChars.push(span);
      });
      el.appendChild(lineWrapper);
    });
  });
  return allChars;
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingChars = splitTextToChars(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"]
  );
  gsap.fromTo(
    landingChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const landingChars2 = splitTextToChars(".landing-h2-info");
  gsap.fromTo(
    landingChars2,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const landingChars3 = splitTextToChars(".landing-h2-info-1");
  const landingChars4 = splitTextToChars(".landing-h2-1");
  const landingChars5 = splitTextToChars(".landing-h2-2");

  loopText(landingChars2, landingChars3);
  loopText(landingChars4, landingChars5);
}

function loopText(text1Chars: HTMLSpanElement[], text2Chars: HTMLSpanElement[]) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    text2Chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      text1Chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      text1Chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      text2Chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
