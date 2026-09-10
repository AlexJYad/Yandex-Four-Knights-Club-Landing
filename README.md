# ♞ The Four Knights Club
### Landing page for the "International Vasyuki Chess Tournament"

*Yandex.Practicum test assignment — pixel-perfect responsive layout built from a Figma design*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![No Frameworks](https://img.shields.io/badge/Frameworks-none-2ea44f?style=for-the-badge)](#)

[**🔗 Live demo**](https://alexjyad.github.io/Yandex-Four-Knights-Club-Landing/)

---

## 📖 About

A stylized promo landing page inspired by chapter XXXIV of Ilf and Petrov's novel *The Twelve Chairs* — the Vasyuki chess tournament, the "Fruitful Opening Idea" lecture, and a simultaneous exhibition match on 160 boards.

The goal was to reproduce a **Figma design 1-to-1 with a fully responsive layout**, using only **plain HTML, CSS and JavaScript** — no build tools, preprocessors, or UI libraries.

> All characters, events, and quotes are fictional and belong to the original authors — this site was built strictly for educational purposes.

---

## ✨ Features

| | Implemented |
|---|---|
| 🖥️ | Fully responsive layout: desktop → tablet → mobile (breakpoints at 1366 / 1300 / 1130 / 1000 / 750 px) |
| 🎠 | Two custom-built JS carousels (tournament participants, Vasyuki's transformation stages) — swipe navigation, pagination dots, disabled button states |
| 📰 | CSS-only marquee ticker powered by `@keyframes` |
| 📊 | Tournament details table built with CSS Grid (`grid-template-areas`) |
| 🎨 | Pixel-accurate match with the Figma source: typography, spacing, colors, hover states |
| 🖼️ | Separate graphic assets and layout for desktop vs. mobile versions |

---

## 🛠️ Tech stack

- **HTML5** — semantic single-page markup
- **CSS3** — Grid & Flexbox, custom properties, native CSS Nesting, `@keyframes` animations
- **Vanilla JavaScript** — plain DOM API, zero dependencies
- **Google Fonts** — Golos Text, Merriweather, Manrope

---

## 📂 Repository structure

```
Yandex-Four-Knights-Club-Landing/
├── img/            # graphics and icons
├── index.html      # page markup
├── style.css       # styles
├── script.js       # carousel logic
└── README.md
```

---

## 🚀 Running locally

```bash
git clone https://github.com/AlexJYad/Yandex-Four-Knights-Club-Landing.git
cd Yandex-Four-Knights-Club-Landing
# just open index.html in a browser —
# no build step or dependencies required
```

---

## ✅ Checklist

### Done

- [x] Layout matching the Figma design (pixel-perfect)
- [x] Responsive mobile version
  - [x] main
  - [x] "Lecture" section
  - [x] "Exhibition match" section
  - [x] "Transformation stages" section
  - [x] footer
- [x] Sizing grid tuned for every breakpoint
- [x] Graphics and images (main visual, collage, airplane, portraits)
- [x] `a:hover` / `button:hover` states
- [x] "Tournament participants" carousel (swipe, pagination, counter)
- [x] "Transformation stages" carousel (mobile version)
- [x] Marquee ticker (header + footer)

### Roadmap / technical debt

- [ ] Convert remaining `px` values to relative units (`rem`/`%`) so responsive text scaling works consistently
- [ ] Recalculate carousel slide width on `resize` (currently `slideWidth` is only computed once, on page load)
- [ ] Refactor both carousels into a single reusable function/class
- [ ] Remove the hardcoded slide count (`currentSlide === 4`) — derive it dynamically from array length
- [ ] Clean up CSS: remove duplicated `.grid` blocks, consolidate repeated hover styles
- [ ] Add `alt` text for content images (some are currently empty)
- [ ] Replace the repeated placeholder cards in "Tournament participants" with unique content
- [ ] Add the spinning-disc animation in the "Transformation stages" section
- [ ] Fix the page `<title>` (currently the placeholder `Document`)

---

## 👤 Author

**Aleksandr Iakovlev (AlexJYad)**
[GitHub](https://github.com/AlexJYad) · Gijón, Asturias, Spain

