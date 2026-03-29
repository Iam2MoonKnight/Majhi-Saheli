/* ============================================================
   MAZI SAHELI — main.js
   Scroll animations, counters, FAQ, gallery, lightbox, forms
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     NAVBAR SCROLL EFFECT
  ---------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });

  /* ----------------------------------------------------------
     MOBILE HAMBURGER
  ---------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      mobileMenu.classList.contains('open')
        ? (spans[0].style.transform = 'rotate(45deg) translate(5px,5px)', spans[1].style.opacity = '0', spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)')
        : (spans[0].style.transform = '', spans[1].style.opacity = '', spans[2].style.transform = '');
    });
  }

  /* ----------------------------------------------------------
     REVEAL ON SCROLL (Intersection Observer)
  ---------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObs.observe(el));

  /* ----------------------------------------------------------
     ANIMATED COUNTERS
  ---------------------------------------------------------- */
  const counters = document.querySelectorAll('.stat-num[data-target], .bs-num[data-target]');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));

  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(ease * target);
      el.textContent = value >= 1000 ? (value >= 10000 ? value.toLocaleString('en-IN') : value.toLocaleString('en-IN')) : value;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target >= 1000 ? target.toLocaleString('en-IN') : target;
    };
    requestAnimationFrame(update);
  }

  // Special: 21K+
  const bigNums = document.querySelectorAll('.stat-num[data-target="21000"], .bs-num[data-target="21000"]');
  bigNums.forEach(el => {
    const orig = animateCounter;
    // replace with 21K+
    const obs2 = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const duration = 1800;
          const start = performance.now();
          const update = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const val = Math.floor(ease * 21000);
            el.textContent = val >= 1000 ? Math.floor(val/1000) + 'K+' : val;
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = '21K+';
          };
          requestAnimationFrame(update);
          obs2.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    obs2.observe(el);
  });

  /* ----------------------------------------------------------
     AMOUNT PILL SELECTION (Home CTA)
  ---------------------------------------------------------- */
  document.querySelectorAll('.amount-pills').forEach(wrap => {
    wrap.querySelectorAll('.pill').forEach(pill => {
      pill.addEventListener('click', () => {
        wrap.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      });
    });
  });

  /* ----------------------------------------------------------
     DONATE PAGE – Amount Buttons
  ---------------------------------------------------------- */
  const amountBtns = document.querySelectorAll('.amount-btn');
  const donateBtnText = document.getElementById('donateBtnText');
  const customAmt = document.getElementById('customAmt');

  function updateDonateBtn(amount) {
    if (donateBtnText) {
      donateBtnText.textContent = `Generate ₹${parseInt(amount).toLocaleString('en-IN')} Now →`;
    }
  }

  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amountBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (customAmt) customAmt.value = '';
      updateDonateBtn(btn.dataset.amount);
    });
  });

  if (customAmt) {
    customAmt.addEventListener('input', () => {
      if (customAmt.value) {
        amountBtns.forEach(b => b.classList.remove('active'));
        updateDonateBtn(customAmt.value);
      }
    });
  }

  // Frequency toggle
  document.querySelectorAll('.freq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.freq-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Dedicate donation toggle
  const dedicateToggle = document.getElementById('dedicateToggle');
  const dedicateWrap = document.getElementById('dedicateWrap');
  if (dedicateToggle && dedicateWrap) {
    dedicateToggle.addEventListener('change', () => {
      dedicateWrap.style.display = dedicateToggle.checked ? 'block' : 'none';
    });
  }

  // Donate submit
  const donateBtn = document.getElementById('donateBtn');
  if (donateBtn) {
    donateBtn.addEventListener('click', () => {
      donateBtn.textContent = 'Processing…';
      donateBtn.style.opacity = '0.7';
      setTimeout(() => {
        donateBtn.textContent = '✓ Thank you! Redirecting to payment…';
        donateBtn.style.background = 'var(--teal)';
        setTimeout(() => {
          if (donateBtnText) donateBtnText.textContent = 'Generate ₹1,000 Now →';
          donateBtn.style.opacity = '1';
          donateBtn.style.background = '';
        }, 3000);
      }, 1500);
    });
  }

  /* ----------------------------------------------------------
     CONTACT FORM
  ---------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sending…';
      btn.style.opacity = '0.7';
      setTimeout(() => {
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
      }, 1500);
    });
  }

  // Role pills
  document.querySelectorAll('.role-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      pill.classList.toggle('active');
    });
  });

  /* ----------------------------------------------------------
     FAQ ACCORDION
  ---------------------------------------------------------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    }
  });

  /* ----------------------------------------------------------
     GALLERY FILTER
  ---------------------------------------------------------- */
  const filterPills = document.querySelectorAll('.filter-pill');
  const galleryItems = document.querySelectorAll('.gal-item');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      galleryItems.forEach(item => {
        const cat = item.dataset.cat;
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden');
          item.classList.add('show');
        } else {
          item.classList.add('hidden');
          item.classList.remove('show');
        }
      });
    });
  });

  /* ----------------------------------------------------------
     GALLERY LIGHTBOX
  ---------------------------------------------------------- */
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');
  let currentIdx = 0;
  let visibleItems = [];

  if (lightbox) {
    galleryItems.forEach((item, idx) => {
      item.addEventListener('click', () => {
        visibleItems = [...galleryItems].filter(i => !i.classList.contains('hidden'));
        currentIdx = visibleItems.indexOf(item);
        openLightbox(currentIdx);
      });
    });

    function openLightbox(idx) {
      const item = visibleItems[idx];
      if (!item) return;
      const img = item.querySelector('img');
      const label = item.querySelector('.gal-label');
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCaption.textContent = label ? label.textContent.trim() : '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    lbPrev.addEventListener('click', () => { currentIdx = (currentIdx - 1 + visibleItems.length) % visibleItems.length; openLightbox(currentIdx); });
    lbNext.addEventListener('click', () => { currentIdx = (currentIdx + 1) % visibleItems.length; openLightbox(currentIdx); });
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lbPrev.click();
      if (e.key === 'ArrowRight') lbNext.click();
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /* ----------------------------------------------------------
     PROGRESS BAR ANIMATION (Budget bars)
  ---------------------------------------------------------- */
  const bbFills = document.querySelectorAll('.bb-fill, .il-fill');
  const bbObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = getComputedStyle(e.target).getPropertyValue('--w') || e.target.style.width;
        bbObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bbFills.forEach(el => {
    const w = el.style.width;
    el.style.width = '0';
    setTimeout(() => bbObs.observe(el), 200);
    el.dataset.width = w;
  });
  // second pass to actually animate
  const bbObs2 = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transition = 'width 1.2s cubic-bezier(.22,1,.36,1)';
        e.target.style.width = e.target.dataset.width;
        bbObs2.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bbFills.forEach(el => bbObs2.observe(el));

  /* ----------------------------------------------------------
     SMOOTH PAGE LOAD — stagger hero elements
  ---------------------------------------------------------- */
  const heroReveal = document.querySelectorAll('.hero .reveal, .page-hero .reveal');
  heroReveal.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 140);
  });

  /* ----------------------------------------------------------
     PARALLAX on hero shapes (lightweight)
  ---------------------------------------------------------- */
  const shapes = document.querySelectorAll('.shape');
  if (shapes.length) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      shapes.forEach((s, i) => {
        const factor = (i + 1) * 0.4;
        s.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    }, { passive: true });
  }

  /* ----------------------------------------------------------
     CURSOR GLOW (desktop only)
  ---------------------------------------------------------- */
  if (window.innerWidth > 1024) {
    const glow = document.createElement('div');
    glow.style.cssText = 'position:fixed;pointer-events:none;z-index:9999;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(232,131,74,0.06),transparent 70%);transform:translate(-50%,-50%);transition:opacity .3s';
    document.body.appendChild(glow);
    window.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }, { passive: true });
  }

  /* ----------------------------------------------------------
     MAP DOTS interactive
  ---------------------------------------------------------- */
  document.querySelectorAll('.map-dot').forEach(dot => {
    dot.addEventListener('mouseenter', () => {
      dot.querySelector('.dot-label').style.opacity = '1';
      dot.querySelector('.dot-label').style.transform = 'translateX(-50%) translateY(-4px)';
    });
    dot.addEventListener('mouseleave', () => {
      dot.querySelector('.dot-label').style.opacity = '0';
      dot.querySelector('.dot-label').style.transform = 'translateX(-50%) translateY(0)';
    });
  });

  /* ----------------------------------------------------------
     ACTIVE NAV LINK based on URL
  ---------------------------------------------------------- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) link.classList.add('active');
    else link.classList.remove('active');
  });

});
