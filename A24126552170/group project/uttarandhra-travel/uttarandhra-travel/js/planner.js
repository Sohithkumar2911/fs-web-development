/**
 * Uttarandhra Odyssey - Interactive Itinerary Planner
 * Dynamic trip generator, budget calculator, and customized itinerary export
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initPlanner();
  });

  function initPlanner() {
    const plannerForm = document.getElementById('itinerary-generator-form');
    if (!plannerForm) return;

    // Load any saved plan or generate default 3-day circuit
    generateCustomItinerary();

    plannerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      generateCustomItinerary();
    });

    // Real-time update on input change
    const inputs = plannerForm.querySelectorAll('input, select');
    inputs.forEach(input => {
      input.addEventListener('change', generateCustomItinerary);
    });

    // Print button
    const printBtn = document.getElementById('print-itinerary-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  function generateCustomItinerary() {
    const timelineContainer = document.getElementById('generated-timeline');
    const budgetDisplay = document.getElementById('estimated-total-budget');
    const budgetBreakdown = document.getElementById('budget-breakdown-details');
    if (!timelineContainer) return;

    // Read form inputs
    const duration = parseInt(document.getElementById('plan-days-select').value, 10) || 3;
    const style = document.getElementById('plan-style-select').value || 'all-round';
    const budgetTier = document.getElementById('plan-budget-tier').value || 'moderate';
    const travelers = parseInt(document.getElementById('plan-travelers-count').value, 10) || 2;

    const selectedCities = [];
    if (document.getElementById('check-vizag')?.checked) selectedCities.push('visakhapatnam');
    if (document.getElementById('check-vizianagaram')?.checked) selectedCities.push('vizianagaram');
    if (document.getElementById('check-srikakulam')?.checked) selectedCities.push('srikakulam');

    // Fallback if none selected
    if (selectedCities.length === 0) {
      selectedCities.push('visakhapatnam', 'vizianagaram', 'srikakulam');
    }

    // Filter available attractions
    let pool = window.TRAVEL_DATA ? window.TRAVEL_DATA.attractions.filter(a => selectedCities.includes(a.city)) : [];

    // Filter by style preference if applicable
    if (style === 'spiritual') {
      const spiritualPool = pool.filter(a => a.category === 'spiritual');
      if (spiritualPool.length >= duration) pool = spiritualPool;
    } else if (style === 'nature-beach') {
      const naturePool = pool.filter(a => a.category === 'beaches' || a.category === 'nature');
      if (naturePool.length >= duration) pool = naturePool;
    } else if (style === 'heritage') {
      const heritagePool = pool.filter(a => a.category === 'heritage');
      if (heritagePool.length >= duration) pool = heritagePool;
    }

    // Cost multipliers
    let dailyRate = 3200; // Moderate
    if (budgetTier === 'budget') dailyRate = 1600;
    if (budgetTier === 'luxury') dailyRate = 7200;

    const totalEstimate = dailyRate * duration * travelers;
    if (budgetDisplay) {
      budgetDisplay.textContent = `₹${totalEstimate.toLocaleString('en-IN')}`;
    }

    if (budgetBreakdown) {
      const lodging = Math.round(totalEstimate * 0.45);
      const transport = Math.round(totalEstimate * 0.25);
      const dining = Math.round(totalEstimate * 0.20);
      const tickets = Math.round(totalEstimate * 0.10);

      budgetBreakdown.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:0.75rem;font-size:0.85rem;margin-top:0.75rem;">
          <div style="background:var(--bg-main);padding:0.6rem;border-radius:var(--radius-sm);">
            <div style="color:var(--text-muted);font-size:0.72rem;">Stay & Hotels</div>
            <strong style="color:var(--text-primary);">₹${lodging.toLocaleString('en-IN')}</strong>
          </div>
          <div style="background:var(--bg-main);padding:0.6rem;border-radius:var(--radius-sm);">
            <div style="color:var(--text-muted);font-size:0.72rem;">Cabs & Trains</div>
            <strong style="color:var(--text-primary);">₹${transport.toLocaleString('en-IN')}</strong>
          </div>
          <div style="background:var(--bg-main);padding:0.6rem;border-radius:var(--radius-sm);">
            <div style="color:var(--text-muted);font-size:0.72rem;">Coastal Feasts</div>
            <strong style="color:var(--text-primary);">₹${dining.toLocaleString('en-IN')}</strong>
          </div>
          <div style="background:var(--bg-main);padding:0.6rem;border-radius:var(--radius-sm);">
            <div style="color:var(--text-muted);font-size:0.72rem;">Entries & Boating</div>
            <strong style="color:var(--text-primary);">₹${tickets.toLocaleString('en-IN')}</strong>
          </div>
        </div>
      `;
    }

    // Build day-by-day itinerary
    let daysHtml = '';

    for (let day = 1; day <= duration; day++) {
      // Determine focus city for this day
      const cityIdx = (day - 1) % selectedCities.length;
      const currentCityKey = selectedCities[cityIdx];
      const cityObj = window.TRAVEL_DATA?.cities[currentCityKey] || { name: 'Uttarandhra Coast' };

      // Pick 2-3 attractions for this day
      const cityAttractions = pool.filter(a => a.city === currentCityKey);
      const morningSpot = cityAttractions[(day * 2) % (cityAttractions.length || 1)] || pool[0];
      const afternoonSpot = cityAttractions[(day * 2 + 1) % (cityAttractions.length || 1)] || pool[1] || pool[0];

      // Custom day plans
      let morningAction = `Explore ${morningSpot ? morningSpot.name : 'scenic heritage and spiritual grounds'}. Take morning photography while temperatures are crisp.`;
      let afternoonAction = `Visit ${afternoonSpot ? afternoonSpot.name : 'local cultural bazaar'}. Relish regional cuisine for lunch.`;
      let eveningAction = `Unwind along the seaside or panoramic lookout point. Sample evening street snacks like hot Muri Mixture or fresh coconut water.`;

      if (currentCityKey === 'visakhapatnam') {
        if (day === 1) {
          morningAction = `Arrive in Vizag, visit Rushikonda Blue Flag Beach for refreshing morning coastal walk.`;
          afternoonAction = `Tour INS Kursura Submarine Museum and adjacent TU-142 Aircraft Museum on Beach Road.`;
          eveningAction = `Cable car ropeway up to Kailasagiri for sunset over the Bay of Bengal, followed by RK Beach night stroll.`;
        } else if (day >= 2 && selectedCities.includes('visakhapatnam')) {
          morningAction = `Early morning visit to Varaha Lakshmi Narasimha Temple at Simhachalam Hill.`;
          afternoonAction = `Drive up the mountain pass to explore the ancient subterranean formations at Borra Caves.`;
          eveningAction = `Sip fresh organic Araku valley coffee and try traditional roasted Bongu Chicken.`;
        }
      } else if (currentCityKey === 'vizianagaram') {
        morningAction = `Drive to Vizianagaram Fort; explore Moti Mahal and the royal Gajapati armory and history gallery.`;
        afternoonAction = `Walk down old town bazaar to taste warm Bobbili Bellam Jilebi; visit Bobbili Veena craftsmen colony.`;
        eveningAction = `Experience Ramanarayanam Spiritual Park bow corridor and the spectacular laser musical fountain show.`;
      } else if (currentCityKey === 'srikakulam') {
        morningAction = `Auspicious early morning darshan at the 7th-century Arasavalli Sun Temple to witness sunlight on the sanctum.`;
        afternoonAction = `Visit the world-unique Sri Kurmanatha Swamy Temple at Srikurmam and the sacred tortoise conservatory.`;
        eveningAction = `Golden hour at Kalingapatnam Beach and historic lighthouse where River Vamsadhara joins the sea.`;
      }

      daysHtml += `
        <div class="timeline-day-card">
          <div class="timeline-day-header">
            <div>
              <span class="day-badge">Day 0${day}</span>
              <h3 class="day-location" style="display:inline-block;margin-left:0.75rem;">${cityObj.name} Exploration</h3>
            </div>
            <span style="font-size:0.82rem;color:var(--text-muted);font-weight:600;">
              <i class="fas fa-route"></i> Curated Circuit
            </span>
          </div>

          <div class="day-slot">
            <div class="day-slot-tag"><i class="fas fa-sun" style="color:#f59e0b;"></i> Morning</div>
            <div class="day-slot-content">${morningAction}</div>
          </div>

          <div class="day-slot">
            <div class="day-slot-tag"><i class="fas fa-cloud-sun" style="color:#0284c7;"></i> Afternoon</div>
            <div class="day-slot-content">${afternoonAction}</div>
          </div>

          <div class="day-slot">
            <div class="day-slot-tag"><i class="fas fa-moon" style="color:#8b5cf6;"></i> Evening</div>
            <div class="day-slot-content">${eveningAction}</div>
          </div>
        </div>
      `;
    }

    timelineContainer.innerHTML = daysHtml;
  }

  window.generateCustomItinerary = generateCustomItinerary;
})();
