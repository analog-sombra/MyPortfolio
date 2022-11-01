"use strict";

window.addEventListener("resize", () => {
    location.reload();
});

setTimeout(() => {
  gsap.to(".loading", {
    opacity: 0,
    onComplete: () => {
      gsap.to("#load", {
        opacity: 0,
        y: -400,
        onComplete: () => {
          document.querySelector("#load").classList.add("hidden");
        },
      });


        homeInit();
    
    },
  });
}, 3000);

setTimeout(() => {
  window.scrollTo(0, 0);
}, 500);

let mybutton = document.getElementById("top-scroll");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var transfromString;
(function () {
  var doc = document.documentElement;
  var w = window;
  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;
  var header = document.getElementById("navbar");
  var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      direction = 2;
    } else if (curScroll < prevScroll) {
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 52) {
      header.classList.add("hide");
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove("hide");
      prevDirection = direction;
    }
  };
  window.addEventListener("scroll", checkScroll);
})();

const mm = document.getElementById("mm");
const mmbtn = document.getElementById("mmbtn");
const cmmbtn = document.getElementById("cmmbtn");

mmbtn.addEventListener("click", () => {
  mm.classList.toggle("hidden");
  mm.classList.toggle("grid");
  gsap.fromTo(mm, { opacity: 0, x: 200 }, { opacity: 1, x: 0 });
});
cmmbtn.addEventListener("click", () => {
  gsap.fromTo(
    mm,
    { opacity: 1, x: 0 },
    {
      opacity: 0,
      x: 200,
      onComplete: () => {
        mm.classList.toggle("hidden");
        mm.classList.toggle("grid");
      },
    }
  );
});

const themm = document.getElementById("themm");
const thembtn = document.getElementById("thembtn");
const cthem = document.getElementById("cthem");

thembtn.addEventListener("click", () => {
  themm.classList.toggle("hidden");
  themm.classList.toggle("grid");
  gsap.fromTo(themm, { opacity: 0, x: 200 }, { opacity: 1, x: 0 });
});

cthem.addEventListener("click", () => {
  gsap.fromTo(
    themm,
    { opacity: 1, x: 0 },
    {
      opacity: 0,
      x: 200,
      onComplete: () => {
        themm.classList.toggle("hidden");
        themm.classList.toggle("grid");
      },
    }
  );
});

const auto1 = document.getElementById("auto1");
const light1 = document.getElementById("light1");
const dark1 = document.getElementById("dark1");

const auto2 = document.getElementById("auto2");
const light2 = document.getElementById("light2");
const dark2 = document.getElementById("dark2");

auto1.addEventListener("click", () => {
  setAuto();
});
dark1.addEventListener("click", () => {
  setDark();
});
light1.addEventListener("click", () => {
  setLight();
});

auto2.addEventListener("click", () => {
  setAuto();
});
dark2.addEventListener("click", () => {
  setDark();
});
light2.addEventListener("click", () => {
  setLight();
});

const setAuto = () => {
  auto1.classList.add("bg-white");
  auto1.classList.add("dark:bg-[#32344D]");
  dark1.classList.remove("bg-white");
  dark1.classList.remove("dark:bg-[#32344D]");
  light1.classList.remove("bg-white");
  light1.classList.remove("dark:bg-[#32344D]");
  auto2.classList.add("bg-white");
  auto2.classList.add("dark:bg-[#32344D]");
  dark2.classList.remove("bg-white");
  dark2.classList.remove("dark:bg-[#32344D]");
  light2.classList.remove("bg-white");
  light2.classList.remove("dark:bg-[#32344D]");
  document.cookie = "theme=auto";
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

const setLight = () => {
  auto1.classList.remove("bg-white");
  auto1.classList.remove("dark:bg-[#32344D]");
  dark1.classList.remove("bg-white");
  dark1.classList.remove("dark:bg-[#32344D]");
  light1.classList.add("bg-white");
  light1.classList.add("dark:bg-[#32344D]");
  auto2.classList.remove("bg-white");
  auto2.classList.remove("dark:bg-[#32344D]");
  dark2.classList.remove("bg-white");
  dark2.classList.remove("dark:bg-[#32344D]");
  light2.classList.add("bg-white");
  light2.classList.add("dark:bg-[#32344D]");
  document.cookie = "theme=light";
  document.body.classList.remove("dark");
};

const setDark = () => {
  auto1.classList.remove("bg-white");
  auto1.classList.remove("dark:bg-[#32344D]");
  dark1.classList.add("bg-white");
  dark1.classList.add("dark:bg-[#32344D]");
  light1.classList.remove("bg-white");
  light1.classList.remove("dark:bg-[#32344D]");
  auto2.classList.remove("bg-white");
  auto2.classList.remove("dark:bg-[#32344D]");
  dark2.classList.add("bg-white");
  dark2.classList.add("dark:bg-[#32344D]");
  light2.classList.remove("bg-white");
  light2.classList.remove("dark:bg-[#32344D]");
  document.cookie = "theme=dark";
  document.body.classList.add("dark");
};

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({
        from,
        to,
        start,
        end,
      });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }

        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = [
  "Full stack Web developer",
  "Full stack App developer",
  "I am a Youtuber",
  "I am a Game developer",
  "I am a Video editor",
];
const el = document.querySelector("#introheadtext");

const fx = new TextScramble(el);
let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 2000);
  });
  counter = (counter + 1) % phrases.length;
};

window.onload = () => {
  next();
  let theme = document.cookie;

  if (theme == "" || theme == undefined || theme.length == 0) {
    document.cookie = "theme=auto";
  } else {
    const cookies = document.cookie;
    const colorTheme = cookies
      .split(";")
      .find((c) => c.startsWith("theme"))
      .split("=")[1];
    if (colorTheme == "auto") {
      setAuto();
    } else if (colorTheme == "light") {
      setLight();
    } else if (colorTheme == "dark") {
      setDark();
    }
  }

  // console.table(theme);
};

function removeCookies() {
  var res = document.cookie;
  var multiple = res.split(";");
  for (var i = 0; i < multiple.length; i++) {
    var key = multiple[i].split("=");
    document.cookie = key[0] + " =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
  }
}

// 0 = Home
// 1 = About
// 2 = project
// 3 = Tools
// 4 = contact
const menu = [0, 1, 2, 3, 4];
const currentIndex = 0;

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");

const home1 = document.getElementById("home1");
const about1 = document.getElementById("about1");
const works1 = document.getElementById("works1");
const tools1 = document.getElementById("tools1");
const contact1 = document.getElementById("contact1");

const home2 = document.getElementById("home2");
const about2 = document.getElementById("about2");
const works2 = document.getElementById("works2");
const tools2 = document.getElementById("tools2");
const contact2 = document.getElementById("contact2");

const slider = document.getElementById("slider");
const sliderText = document.getElementById("slidertext");

home2.addEventListener("click", () => {
  setTimeout(() => {
    gsap.fromTo(
      mm,
      { opacity: 1, x: 0 },
      {
        opacity: 0,
        x: 200,
        onComplete: () => {
          mm.classList.toggle("hidden");
          mm.classList.toggle("grid");
        },
      }
    );
  }, 400);
  setTimeout(() => {
    if (page1.classList.contains("hidden")) {
      page1.classList.remove("hidden");
    }
    if (!page2.classList.contains("hidden")) {
      page2.classList.add("hidden");
    }
    if (!page3.classList.contains("hidden")) {
      page3.classList.add("hidden");
    }
    if (!page4.classList.contains("hidden")) {
      page4.classList.add("hidden");
    }
    if (!page5.classList.contains("hidden")) {
      page5.classList.add("hidden");
    }
  }, 600);
  setTimeout(() => {
    homeInit();
  }, 1000);
  sliderSlide("Home");
});

about2.addEventListener("click", () => {
  setTimeout(() => {
    gsap.fromTo(
      mm,
      { opacity: 1, x: 0 },
      {
        opacity: 0,
        x: 200,
        onComplete: () => {
          mm.classList.toggle("hidden");
          mm.classList.toggle("grid");
        },
      }
    );
  }, 400);
  setTimeout(() => {
    if (!page1.classList.contains("hidden")) {
      page1.classList.add("hidden");
    }
    if (page2.classList.contains("hidden")) {
      page2.classList.remove("hidden");
    }
    if (!page3.classList.contains("hidden")) {
      page3.classList.add("hidden");
    }
    if (!page4.classList.contains("hidden")) {
      page4.classList.add("hidden");
    }
    if (!page5.classList.contains("hidden")) {
      page5.classList.add("hidden");
    }
  }, 600);

  setTimeout(() => {
    aboutInit();
  }, 1000);

  sliderSlide("About");
});

works2.addEventListener("click", () => {
  setTimeout(() => {
    gsap.fromTo(
      mm,
      { opacity: 1, x: 0 },
      {
        opacity: 0,
        x: 200,
        onComplete: () => {
          mm.classList.toggle("hidden");
          mm.classList.toggle("grid");
        },
      }
    );
  }, 400);
  setTimeout(() => {
    if (!page1.classList.contains("hidden")) {
      page1.classList.add("hidden");
    }
    if (!page2.classList.contains("hidden")) {
      page2.classList.add("hidden");
    }
    if (page3.classList.contains("hidden")) {
      page3.classList.remove("hidden");
    }
    if (!page4.classList.contains("hidden")) {
      page4.classList.add("hidden");
    }
    if (!page5.classList.contains("hidden")) {
      page5.classList.add("hidden");
    }
  }, 600);
  setTimeout(() => {
    worksInit();
  }, 1000);
  sliderSlide("Works");
});

tools2.addEventListener("click", () => {
  setTimeout(() => {
    gsap.fromTo(
      mm,
      { opacity: 1, x: 0 },
      {
        opacity: 0,
        x: 200,
        onComplete: () => {
          mm.classList.toggle("hidden");
          mm.classList.toggle("grid");
        },
      }
    );
  }, 400);
  setTimeout(() => {
    if (!page1.classList.contains("hidden")) {
      page1.classList.add("hidden");
    }
    if (!page2.classList.contains("hidden")) {
      page2.classList.add("hidden");
    }
    if (!page3.classList.contains("hidden")) {
      page3.classList.add("hidden");
    }
    if (page4.classList.contains("hidden")) {
      page4.classList.remove("hidden");
    }
    if (!page5.classList.contains("hidden")) {
      page5.classList.add("hidden");
    }
  }, 600);
  setTimeout(() => {
    toolsInit();
  }, 1000);
  sliderSlide("Tools");
});

contact2.addEventListener("click", () => {
  setTimeout(() => {
    gsap.fromTo(
      mm,
      { opacity: 1, x: 0 },
      {
        opacity: 0,
        x: 200,
        onComplete: () => {
          mm.classList.toggle("hidden");
          mm.classList.toggle("grid");
        },
      }
    );
  }, 400);

  setTimeout(() => {
    if (!page1.classList.contains("hidden")) {
      page1.classList.add("hidden");
    }
    if (!page2.classList.contains("hidden")) {
      page2.classList.add("hidden");
    }
    if (!page3.classList.contains("hidden")) {
      page3.classList.add("hidden");
    }
    if (!page4.classList.contains("hidden")) {
      page4.classList.add("hidden");
    }
    if (page5.classList.contains("hidden")) {
      page5.classList.remove("hidden");
    }
  }, 600);
  setTimeout(() => {
    contactInit();
  }, 1000);
  sliderSlide("Contact");
});

home1.addEventListener("click", () => {
  setTimeout(() => {
    if (page1.classList.contains("hidden")) {
      page1.classList.remove("hidden");
    }
    if (!page2.classList.contains("hidden")) {
      page2.classList.add("hidden");
    }
    if (!page3.classList.contains("hidden")) {
      page3.classList.add("hidden");
    }
    if (!page4.classList.contains("hidden")) {
      page4.classList.add("hidden");
    }
    if (!page5.classList.contains("hidden")) {
      page5.classList.add("hidden");
    }
  }, 600);
  setTimeout(() => {
    homeInit();
  }, 1000);
  sliderSlide("Home");
});

about1.addEventListener("click", () => {
  setTimeout(() => {
    if (!page1.classList.contains("hidden")) {
      page1.classList.add("hidden");
    }
    if (page2.classList.contains("hidden")) {
      page2.classList.remove("hidden");
    }
    if (!page3.classList.contains("hidden")) {
      page3.classList.add("hidden");
    }
    if (!page4.classList.contains("hidden")) {
      page4.classList.add("hidden");
    }
    if (!page5.classList.contains("hidden")) {
      page5.classList.add("hidden");
    }
  }, 600);

  setTimeout(() => {
    aboutInit();
  }, 1000);

  sliderSlide("About");
});

works1.addEventListener("click", () => {
  setTimeout(() => {
    if (!page1.classList.contains("hidden")) {
      page1.classList.add("hidden");
    }
    if (!page2.classList.contains("hidden")) {
      page2.classList.add("hidden");
    }
    if (page3.classList.contains("hidden")) {
      page3.classList.remove("hidden");
    }
    if (!page4.classList.contains("hidden")) {
      page4.classList.add("hidden");
    }
    if (!page5.classList.contains("hidden")) {
      page5.classList.add("hidden");
    }
  }, 600);
  setTimeout(() => {
    worksInit();
  }, 1000);
  sliderSlide("Works");
});
tools1.addEventListener("click", () => {
  setTimeout(() => {
    if (!page1.classList.contains("hidden")) {
      page1.classList.add("hidden");
    }
    if (!page2.classList.contains("hidden")) {
      page2.classList.add("hidden");
    }
    if (!page3.classList.contains("hidden")) {
      page3.classList.add("hidden");
    }
    if (page4.classList.contains("hidden")) {
      page4.classList.remove("hidden");
    }
    if (!page5.classList.contains("hidden")) {
      page5.classList.add("hidden");
    }
  }, 600);
  setTimeout(() => {
    toolsInit();
  }, 1000);
  sliderSlide("Tools");
});

contact1.addEventListener("click", () => {
  setTimeout(() => {
    if (!page1.classList.contains("hidden")) {
      page1.classList.add("hidden");
    }
    if (!page2.classList.contains("hidden")) {
      page2.classList.add("hidden");
    }
    if (!page3.classList.contains("hidden")) {
      page3.classList.add("hidden");
    }
    if (!page4.classList.contains("hidden")) {
      page4.classList.add("hidden");
    }
    if (page5.classList.contains("hidden")) {
      page5.classList.remove("hidden");
    }
  }, 600);
  setTimeout(() => {
    contactInit();
  }, 1000);
  sliderSlide("Contact");
});

const sliderSlide = (text) => {
  sliderText.innerText = text;
  let t1 = gsap.timeline();
  t1.to(slider, { x: 0, ease: "circ.out", duration: 0.6 });
  t1.to(slider, { x: window.innerWidth, delay: 0.4 });
};

const homeInit = () => {
  gsap.from("#navbar", { opacity: 0, ease: "power4.out", duration: 2 });
  gsap.from("#hh1", { opacity: 0, y: 200, ease: "power4.out", duration: 1 });
  gsap.from("#hh2", { opacity: 0, y: 200, ease: "power4.out", duration: 1.4 });
  gsap.from("#hh3", { opacity: 0, y: 200, ease: "power4.out", duration: 1.8 });
  gsap.from("#ybtn", {
    opacity: 0,
    y: 100,
    ease: "power4.out",
    duration: 1,
    delay: 0.4,
  });
  gsap.from("#gbtn", {
    opacity: 0,
    y: 100,
    ease: "power4.out",
    duration: 2,
    delay: 0.4,
  });
  gsap.from("#lbtn", {
    opacity: 0,
    y: 100,
    ease: "power4.out",
    duration: 3,
    delay: 0.4,
  });
  gsap.from("#dbtn", {
    opacity: 0,
    y: 100,
    ease: "power4.out",
    duration: 4,
    delay: 0.4,
  });
  gsap.from("#introheadtext", {
    opacity: 0,
    y: 200,
    ease: "power4.out",
    duration: 2.8,
    delay: 1,
  });
};

const aboutInit = () => {
  gsap.from("#navbar", { opacity: 0, ease: "power4.out", duration: 2 });
  gsap.from("#ah1", { opacity: 0, y: 200, ease: "power4.out", duration: 1 });
  gsap.from("#ah2", { opacity: 0, y: 200, ease: "power4.out", duration: 1.4 });
};

const worksInit = () => {
  gsap.from("#navbar", { opacity: 0, ease: "power4.out", duration: 2 });
  gsap.from("#wh1", { opacity: 0, y: 200, ease: "power4.out", duration: 1 });
  gsap.from("#wh2", { opacity: 0, y: 200, ease: "power4.out", duration: 1.4 });
};
const toolsInit = () => {
  gsap.from("#navbar", { opacity: 0, ease: "power4.out", duration: 2 });
  gsap.from("#wh1", { opacity: 0, y: 200, ease: "power4.out", duration: 1 });
  gsap.from("#wh2", { opacity: 0, y: 200, ease: "power4.out", duration: 1.4 });
};

const contactInit = () => {
  gsap.from("#navbar", { opacity: 0, ease: "power4.out", duration: 2 });
  gsap.from("#ch1", { opacity: 0, y: 200, ease: "power4.out", duration: 1 });
  gsap.from("#ch2", { opacity: 0, y: 200, ease: "power4.out", duration: 1.4 });
};

var text = "LOADING";

for (var i in text) {
  if (text[i] === " ") {
    $(".loading").append($("<span>").html("&nbsp;"));
  } else {
    $(".loading").append($("<span>").text(text[i]));
  }
}
