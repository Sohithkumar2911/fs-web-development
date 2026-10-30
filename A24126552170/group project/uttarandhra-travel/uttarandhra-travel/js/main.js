/**
 * Uttarandhra Odyssey - Main Application JavaScript
 * Orchestrates navigation, attraction filtering, modal lightbox, wishlist, dark mode & booking
 */

(function () {
  'use strict';

  // --- STATE MANAGEMENT ---
  const state = {
    selectedCity: 'all',
    selectedCategory: 'all',
    searchQuery: '',
    wishlist: JSON.parse(localStorage.getItem('uttarandhra_wishlist') || '[]'),
    activeTheme: localStorage.getItem('uttarandhra_theme') || 'light'
  };

  // --- DOM READY INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initWishlistBadge();
    initAttractionExplorer();
    initModal();
    initBookingModal();
    initHeaderScroll();
    initWishlistDrawer();
  });

  // --- THEME TOGGLING ---
  function initTheme() {
    document.documentElement.setAttribute('data-theme', state.activeTheme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      updateThemeIcon(themeBtn);
      themeBtn.addEventListener('click', () => {
        state.activeTheme = state.activeTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', state.activeTheme);
        localStorage.setItem('uttarandhra_theme', state.activeTheme);
        updateThemeIcon(themeBtn);
        showToast(`Switched to ${state.activeTheme} mode`, 'info');
      });
    }
  }

  function updateThemeIcon(btn) {
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = state.activeTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }

  // --- HEADER & MOBILE NAV ---
  function initNavigation() {
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('is-open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times');
        }
      });

      // Close mobile menu on link click
      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('is-open');
          const icon = mobileToggle.querySelector('i');
          if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
          }
        });
      });
    }
  }

  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- ATTRACTION EXPLORER & FILTERING ---
  function initAttractionExplorer() {
    const grid = document.getElementById('attractions-grid');
    if (!grid || !window.TRAVEL_DATA) return;

    // Check if on a specific city page (data-city attribute on body or container)
    const pageCity = document.body.dataset.pageCity;
    if (pageCity) {
      state.selectedCity = pageCity;
    }

    renderAttractions();

    // City Filter Pills
    const cityButtons = document.querySelectorAll('[data-filter-city]');
    cityButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        cityButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedCity = btn.dataset.filterCity;
        renderAttractions();
      });
    });

    // Category Filter Pills
    const categoryButtons = document.querySelectorAll('[data-filter-category]');
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedCategory = btn.dataset.filterCategory;
        renderAttractions();
      });
    });

    // Search Input
    const searchInput = document.getElementById('explorer-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        renderAttractions();
      });
    }

    // Sort Dropdown
    const sortSelect = document.getElementById('explorer-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        renderAttractions();
      });
    }
  }

  function renderAttractions() {
    const grid = document.getElementById('attractions-grid');
    if (!grid || !window.TRAVEL_DATA) return;

    let items = window.TRAVEL_DATA.attractions.slice();

    // Filter by City
    if (state.selectedCity && state.selectedCity !== 'all') {
      items = items.filter(item => item.city === state.selectedCity);
    }

    // Filter by Category
    if (state.selectedCategory && state.selectedCategory !== 'all') {
      items = items.filter(item => item.category === state.selectedCategory);
    }

    // Filter by Search Query
    if (state.searchQuery) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(state.searchQuery) ||
        item.shortDesc.toLowerCase().includes(state.searchQuery) ||
        item.cityName.toLowerCase().includes(state.searchQuery) ||
        (item.highlights && item.highlights.some(h => h.toLowerCase().includes(state.searchQuery)))
      );
    }

    // Sort items
    const sortSelect = document.getElementById('explorer-sort-select');
    if (sortSelect) {
      const val = sortSelect.value;
      if (val === 'rating-desc') {
        items.sort((a, b) => b.rating - a.rating);
      } else if (val === 'reviews-desc') {
        items.sort((a, b) => b.reviewsCount - a.reviewsCount);
      } else if (val === 'name-asc') {
        items.sort((a, b) => a.name.localeCompare(b.name));
      }
    }

    // Render Cards
    if (items.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-compass"></i>
          <h3>No Attractions Found</h3>
          <p>Try adjusting your search keywords or switching filters to explore more landmarks.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = items.map(attraction => {
      const isWishlisted = state.wishlist.includes(attraction.id);
      return `
        <article class="attraction-card" data-id="${attraction.id}">
          <div class="attraction-card-img-wrap">
            <img 
              src="${attraction.image}" 
              alt="${attraction.name}" 
              class="attraction-card-img" 
              loading="lazy"
              onerror="this.onerror=null;this.src='${attraction.fallbackImage}';"
            >
            <span class="badge-city-tag">${attraction.cityName}</span>
            <button 
              class="btn-wishlist-toggle ${isWishlisted ? 'is-active' : ''}" 
              data-wishlist-id="${attraction.id}" 
              aria-label="Add to Wishlist"
              title="Save to favorites"
            >
              <i class="${isWishlisted ? 'fas fa-heart' : 'far fa-heart'}"></i>
            </button>
          </div>
          <div class="attraction-card-content">
            <span class="attraction-category">${attraction.categoryName}</span>
            <h3 class="attraction-title">${attraction.name}</h3>
            <div class="rating-badge">
              <i class="fas fa-star"></i>
              <span>${attraction.rating}</span>
              <span style="color:var(--text-muted);font-weight:400;font-size:0.75rem;">(${attraction.reviewsCount.toLocaleString()} reviews)</span>
            </div>
            <p class="attraction-desc">${attraction.shortDesc}</p>
            <div class="attraction-card-footer">
              <span style="font-size:0.8rem;color:var(--text-muted);">
                <i class="far fa-clock"></i> ${attraction.timings.split('(')[0].trim().substring(0, 22)}...
              </span>
              <button class="btn-details" data-open-modal="${attraction.id}">
                Explore Guide <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach card event listeners
    attachCardListeners(grid);
  }

  function attachCardListeners(container) {
    // Wishlist Buttons
    container.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.wishlistId;
        toggleWishlist(id, btn);
      });
    });

    // Detail Modal Buttons
    container.querySelectorAll('[data-open-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.openModal;
        openAttractionModal(id);
      });
    });
  }

  // --- WISHLIST FUNCTIONALITY ---
  function toggleWishlist(id, btn) {
    const idx = state.wishlist.indexOf(id);
    let added = false;
    if (idx === -1) {
      state.wishlist.push(id);
      added = true;
    } else {
      state.wishlist.splice(idx, 1);
      added = false;
    }

    localStorage.setItem('uttarandhra_wishlist', JSON.stringify(state.wishlist));
    initWishlistBadge();

    if (btn) {
      btn.classList.toggle('is-active', added);
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = added ? 'fas fa-heart' : 'far fa-heart';
      }
    }

    const item = window.TRAVEL_DATA ? window.TRAVEL_DATA.attractions.find(a => a.id === id) : null;
    const name = item ? item.name : 'Attraction';

    if (added) {
      showToast(`Added "${name}" to your wishlist!`, 'success');
    } else {
      showToast(`Removed "${name}" from your wishlist`, 'info');
    }

    renderWishlistDrawer();
  }

  function initWishlistBadge() {
    const badges = document.querySelectorAll('.wishlist-count');
    badges.forEach(b => {
      b.textContent = state.wishlist.length;
      b.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
    });
  }

  function initWishlistDrawer() {
    const openBtn = document.getElementById('wishlist-open-btn');
    const closeBtn = document.getElementById('wishlist-close-btn');
    const drawer = document.getElementById('wishlist-drawer');

    if (openBtn && drawer) {
      openBtn.addEventListener('click', () => {
        renderWishlistDrawer();
        drawer.classList.add('is-open');
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => {
        drawer.classList.remove('is-open');
      });
    }
  }

  function renderWishlistDrawer() {
    const list = document.getElementById('wishlist-items-container');
    if (!list || !window.TRAVEL_DATA) return;

    if (state.wishlist.length === 0) {
      list.innerHTML = `
        <div style="text-align:center;padding:3rem 1rem;color:var(--text-muted);">
          <i class="far fa-heart" style="font-size:2.5rem;margin-bottom:0.75rem;display:block;"></i>
          <p>Your travel wishlist is currently empty.</p>
          <span style="font-size:0.8rem;">Tap the heart icon on any attraction to save it for your journey!</span>
        </div>
      `;
      return;
    }

    const items = window.TRAVEL_DATA.attractions.filter(a => state.wishlist.includes(a.id));
    list.innerHTML = items.map(item => `
      <div class="wishlist-item">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="wishlist-thumb" 
          onerror="this.onerror=null;this.src='${item.fallbackImage}';"
        >
        <div class="wishlist-info">
          <h4 class="wishlist-item-title">${item.name}</h4>
          <p class="wishlist-item-city"><i class="fas fa-map-marker-alt"></i> ${item.cityName}</p>
          <button class="btn-details" style="font-size:0.78rem;padding:0;margin-top:0.3rem;" onclick="window.openAttractionModal('${item.id}')">
            View Details
          </button>
        </div>
        <button class="wishlist-remove-btn" title="Remove" onclick="window.toggleWishlist('${item.id}')">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `).join('');
  }

  // --- ATTRACTION MODAL LIGHTBOX ---
  function initModal() {
    const overlay = document.getElementById('attraction-modal-overlay');
    const closeBtn = document.getElementById('modal-close-btn');

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          closeAttractionModal();
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeAttractionModal);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAttractionModal();
        closeBookingModal();
      }
    });
  }

  function openAttractionModal(id) {
    if (!window.TRAVEL_DATA) return;
    const attraction = window.TRAVEL_DATA.attractions.find(a => a.id === id);
    if (!attraction) return;

    const overlay = document.getElementById('attraction-modal-overlay');
    const heroImg = document.getElementById('modal-hero-img');
    const cityTag = document.getElementById('modal-city-tag');
    const categoryTag = document.getElementById('modal-category-tag');
    const title = document.getElementById('modal-title');
    const rating = document.getElementById('modal-rating');
    const fullDesc = document.getElementById('modal-full-desc');
    const timings = document.getElementById('modal-timings');
    const fee = document.getElementById('modal-entry-fee');
    const location = document.getElementById('modal-location');
    const highlightsList = document.getElementById('modal-highlights');
    const tipsBox = document.getElementById('modal-tips');
    const mapBtn = document.getElementById('modal-map-link');

    if (heroImg) {
      heroImg.src = attraction.image;
      heroImg.onerror = function () {
        this.onerror = null;
        this.src = attraction.fallbackImage;
      };
    }
    if (cityTag) cityTag.textContent = attraction.cityName;
    if (categoryTag) categoryTag.textContent = attraction.categoryName;
    if (title) title.textContent = attraction.name;
    if (rating) rating.innerHTML = `<i class="fas fa-star" style="color:#f59e0b;"></i> ${attraction.rating} (${attraction.reviewsCount.toLocaleString()} traveler reviews)`;
    if (fullDesc) fullDesc.textContent = attraction.fullDesc;
    if (timings) timings.textContent = attraction.timings;
    if (fee) fee.textContent = attraction.entryFee;
    if (location) location.textContent = attraction.location;

    if (highlightsList) {
      highlightsList.innerHTML = attraction.highlights.map(h => `<li>${h}</li>`).join('');
    }

    if (tipsBox) {
      tipsBox.innerHTML = `<strong><i class="fas fa-lightbulb"></i> Local Travel Tip:</strong> ${attraction.tips}`;
    }

    if (mapBtn) {
      mapBtn.href = attraction.mapUrl;
    }

    if (overlay) {
      overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAttractionModal() {
    const overlay = document.getElementById('attraction-modal-overlay');
    if (overlay) {
      overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  // --- BOOKING / INQUIRY MODAL ---
  function initBookingModal() {
    const overlay = document.getElementById('booking-modal-overlay');
    const closeBtn = document.getElementById('booking-close-btn');
    const triggers = document.querySelectorAll('[data-trigger-booking]');
    const form = document.getElementById('booking-inquiry-form');
    const citySelect = document.getElementById('booking-city-select');
    const guestsInput = document.getElementById('booking-guests-input');
    const daysInput = document.getElementById('booking-days-input');
    const priceDisplay = document.getElementById('booking-est-price');

    triggers.forEach(t => {
      t.addEventListener('click', (e) => {
        e.preventDefault();
        if (overlay) {
          overlay.classList.add('is-active');
          document.body.style.overflow = 'hidden';
          calculatePrice();
        }
      });
    });

    if (closeBtn && overlay) {
      closeBtn.addEventListener('click', closeBookingModal);
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeBookingModal();
      });
    }

    function calculatePrice() {
      if (!priceDisplay) return;
      const guests = parseInt(guestsInput ? guestsInput.value : 2, 10) || 1;
      const days = parseInt(daysInput ? daysInput.value : 3, 10) || 1;
      // Approx base rate ₹2,200 per guest per day
      const total = guests * days * 2200;
      priceDisplay.textContent = `₹${total.toLocaleString('en-IN')}`;
    }

    if (guestsInput) guestsInput.addEventListener('input', calculatePrice);
    if (daysInput) daysInput.addEventListener('input', calculatePrice);
    if (citySelect) citySelect.addEventListener('change', calculatePrice);

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('booking-name-input').value;
        const email = document.getElementById('booking-email-input').value;
        const phone = document.getElementById('booking-phone-input').value;

        if (!name || !email || !phone) {
          showToast('Please fill in all contact details.', 'info');
          return;
        }

        // Generate confirmation pass
        const confirmationSection = document.getElementById('booking-confirmation-details');
        if (confirmationSection) {
          confirmationSection.innerHTML = `
            <div style="background:var(--color-primary-light);padding:1.5rem;border-radius:var(--radius-md);margin-top:1rem;text-align:center;">
              <i class="fas fa-check-circle" style="font-size:2.5rem;color:var(--color-emerald);margin-bottom:0.75rem;display:block;"></i>
              <h3 style="margin-bottom:0.5rem;color:var(--text-primary);">Booking Inquiry Received!</h3>
              <p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:1rem;">
                Thank you <strong>${name}</strong>! Your customized coastal itinerary reference is <strong>#ODYSSEY-${Math.floor(100000 + Math.random() * 900000)}</strong>.
              </p>
              <p style="font-size:0.82rem;color:var(--text-muted);">
                A dedicated Uttarandhra travel specialist will contact you on <strong>${phone}</strong> and <strong>${email}</strong> with your personalized pass and driver details.
              </p>
            </div>
          `;
          form.style.display = 'none';
        }

        showToast('Inquiry submitted successfully!', 'success');
      });
    }
  }

  function closeBookingModal() {
    const overlay = document.getElementById('booking-modal-overlay');
    if (overlay) {
      overlay.classList.remove('is-active');
      document.body.style.overflow = '';
      // Reset form if submitted
      const form = document.getElementById('booking-inquiry-form');
      const confirmationSection = document.getElementById('booking-confirmation-details');
      if (form && confirmationSection) {
        form.reset();
        form.style.display = 'block';
        confirmationSection.innerHTML = '';
      }
    }
  }

  // --- TOAST ALERTS ---
  function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const iconClass = type === 'success' ? 'fa-check-circle' : 'fa-info-circle';
    toast.innerHTML = `
      <i class="fas ${iconClass}" style="color:${type === 'success' ? 'var(--color-emerald)' : 'var(--color-primary)'}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Export globally for HTML inline access
  window.openAttractionModal = openAttractionModal;
  window.toggleWishlist = toggleWishlist;
  window.showToast = showToast;

})();
