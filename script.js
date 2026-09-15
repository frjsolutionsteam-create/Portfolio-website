document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile menu toggle ---------- */
  const menuToggle = document.getElementById("menuToggle");
  const topbarMenu = document.getElementById("topbarMenu");
  if (menuToggle && topbarMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = topbarMenu.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
    topbarMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        topbarMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Active nav highlight on scroll ---------- */
  const navLinks = document.querySelectorAll('.sidebar nav a[href^="#"]');
  const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle("is-active", link.getAttribute("href") === id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }

  /* ---------- Portfolio gallery ---------- */
  const grid = document.getElementById("workGrid");
  const filtersEl = document.getElementById("workFilters");
  const works = typeof WORKS !== "undefined" ? WORKS : [];

  if (grid && filtersEl) {
    const categories = ["All", ...Array.from(new Set(works.map(w => w.category)))];
    let activeCategory = "All";

    function renderFilters() {
      filtersEl.innerHTML = "";
      categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "filter-btn" + (cat === activeCategory ? " is-active" : "");
        btn.type = "button";
        btn.textContent = cat;
        btn.addEventListener("click", () => {
          activeCategory = cat;
          renderFilters();
          renderGrid();
        });
        filtersEl.appendChild(btn);
      });
    }

    function renderGrid() {
      grid.innerHTML = "";

      if (!works.length) {
        const empty = document.createElement("p");
        empty.className = "work-empty";
        empty.textContent = "No work added yet — add pieces in data/works.js.";
        grid.appendChild(empty);
        return;
      }

      const visible = works.filter(w => activeCategory === "All" || w.category === activeCategory);

      visible.forEach(work => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "work-card";
        card.setAttribute("aria-label", "Open " + work.title);

        card.innerHTML = `
          <div class="work-thumb">
            <img src="${work.image}" alt="${work.title}" loading="lazy" />
          </div>
          <div class="work-meta">
            <span class="work-title">${work.title}</span>
            <span class="work-cat">${work.category}</span>
          </div>
        `;

        card.addEventListener("click", () => openLightbox(work));
        grid.appendChild(card);
      });
    }

    renderFilters();
    renderGrid();
  }

  /* ---------- Lightbox ---------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxTag = document.getElementById("lightboxTag");
  const lightboxDesc = document.getElementById("lightboxDesc");
  const lightboxLink = document.getElementById("lightboxLink");
  const lightboxClose = document.getElementById("lightboxClose");
  let lastFocused = null;

  function openLightbox(work) {
    lastFocused = document.activeElement;
    lightboxImg.src = work.image;
    lightboxImg.alt = work.title;
    lightboxTitle.textContent = work.title;
    lightboxTag.textContent = work.category + (work.year ? " · " + work.year : "");
    lightboxDesc.textContent = work.description || "";

    if (work.link) {
      lightboxLink.href = work.link;
      lightboxLink.style.display = "inline-flex";
    } else {
      lightboxLink.style.display = "none";
    }

    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  if (lightbox && lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
    });
  }
});
