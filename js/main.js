// ============================================================
// MAIN — portfolio entry point
// ============================================================
import { SCENES, PROFILE, RESEARCH, COURSES } from './data.js';
import { initThreeBackground } from './three-bg.js';
import { initPlayer } from './player.js';
import { initGlobe } from './globe.js';
import { initAutoPlay } from './autoplay.js';

document.addEventListener('DOMContentLoaded', () => {
  initThreeBackground('bg-canvas');
  initPlayer();
  initGlobe();
  buildResearchSection();
  buildProfileSection();
  buildSkillsSection();
  buildEducationSection();
  initScrollReveal();
  initHero();
  initAutoPlay();
});

function initHero() {
  document.getElementById('btn-skip-to-map')?.addEventListener('click', () => {
    document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// ── Research section ──
function buildResearchSection() {
  const tagsEl = document.getElementById('research-area-tags');
  if (tagsEl) {
    const areas = [
      'Satellite Remote Sensing', 'Solar Induced Fluorescence',
      'Tropical Cyclones', 'Southern Africa', 'Vegetation Ecology',
      'Spatial Scale Analysis', 'Ecological Disturbance'
    ];
    tagsEl.innerHTML = areas.map(a => `<div class="data-chip">${a}</div>`).join('');
  }

  const interestsEl = document.getElementById('research-interests');
  if (interestsEl) {
    const interests = [
      { icon: '🛰', label: 'Solar Induced Fluorescence (SIF)', desc: 'Physiological vegetation stress detection from TROPOMI/Sentinel-5P', color: '#3B82F6' },
      { icon: '🌀', label: 'Tropical Cyclone Impacts', desc: 'Vegetation response to cyclone events across Southern Africa', color: '#F59E0B' },
      { icon: '🌍', label: 'Southern African Ecoregions', desc: 'Scale-dependent ecological responses in miombo, savanna, and coastal forest', color: '#10B981' },
      { icon: '📡', label: 'Multi-scale Spatial Analysis', desc: 'How spatial aggregation choices change what satellite signals reveal', color: '#8B5CF6' },
      { icon: '🤖', label: 'AI-Assisted Research Pipelines', desc: 'Integrating LLMs and agentic tools into the scientific workflow', color: '#EC4899' },
      { icon: '🔄', label: 'Ecological Recovery Modelling', desc: 'Post-disturbance SIF recovery trajectories and predictors', color: '#06B6D4' }
    ];
    interestsEl.innerHTML = interests.map(i => `
      <div class="interest-card">
        <div class="interest-icon" style="color:${i.color}">${i.icon}</div>
        <div class="interest-label" style="color:${i.color}">${i.label}</div>
        <div class="interest-desc">${i.desc}</div>
      </div>
    `).join('');
  }
}

// ── Profile section ──
function buildProfileSection() {
  const photoArea = document.querySelector('.profile-photo-placeholder');
  if (photoArea) {
    const img = new Image();
    img.onload = () => {
      photoArea.innerHTML = '';
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
      img.alt = 'Tanaka Alex Mbendana';
      photoArea.style.padding = '0';
      photoArea.appendChild(img);
    };
    img.src = 'images/profile.jpg';
  }

  const uniEl = document.querySelector('.profile-uni');
  if (uniEl) {
    uniEl.innerHTML = `
      <img src="images/beihang-logo.png" alt="Beihang University"
           style="height:22px;object-fit:contain;vertical-align:middle;margin-right:8px;filter:drop-shadow(0 0 4px rgba(255,255,255,0.3));">
      Beihang University, Hangzhou &middot; 2025 &ndash; 2027
    `;
  }

  const toolsEl = document.getElementById('tools-grid');
  if (toolsEl) {
    const tools = [
      { name: 'QGIS',        role: 'Spatial data management, map production & geospatial analysis', color: '#589632', logo: 'images/logo-qgis.svg'      },
      { name: 'ArcGIS',      role: 'Advanced GIS analysis, geodatabase management & cartography',   color: '#0079C1', logo: null, abbr: 'ArcGIS'          },
      { name: 'R / RStudio', role: 'Statistical computing, spatial statistics & data visualisation',color: '#276DC2', logo: 'images/logo-r.png'           },
      { name: 'MATLAB',      role: 'Signal processing, numerical analysis & algorithm development',  color: '#E16737', logo: 'images/logo-matlab.png'      },
      { name: 'SPSS',        role: 'Quantitative data analysis & statistical hypothesis testing',    color: '#007BC0', logo: null, abbr: 'SPSS'            },
      { name: 'Python',      role: 'Satellite data processing pipelines & scientific computing',     color: '#3776AB', logo: 'images/logo-python.svg'      },
      { name: 'Grammarly',   role: 'Academic writing clarity, grammar & style refinement',           color: '#15C39A', logo: 'images/logo-grammarly.svg'   },
      { name: 'PaperPal',    role: 'Research writing assistance & manuscript language editing',      color: '#7C3AED', logo: null, abbr: 'PP'              }
    ];
    toolsEl.innerHTML = tools.map(t => {
      const logoHtml = t.logo
        ? `<img src="${t.logo}" alt="${t.name}" class="tool-logo-img" />`
        : `<div class="tool-logo-badge" style="background:${t.color}20;color:${t.color};border:1px solid ${t.color}40">${t.abbr}</div>`;
      return `
        <div class="tool-card">
          ${logoHtml}
          <div class="tool-name" style="color:${t.color}">${t.name}</div>
          <div class="tool-role">${t.role}</div>
        </div>
      `;
    }).join('');
  }
}

// ── Skills section ──
function buildSkillsSection() {
  const el = document.getElementById('skills-grid');
  if (!el) return;

  const categories = [
    {
      icon: '🛰',
      color: '#3B82F6',
      bg: 'rgba(59,130,246,0.12)',
      title: 'Remote Sensing',
      skills: [
        { name: 'TROPOMI / SIF Analysis', pct: 90 },
        { name: 'Satellite Image Processing', pct: 85 },
        { name: 'NDVI & Vegetation Indices', pct: 88 },
        { name: 'Sensor Calibration & Geometry', pct: 72 },
        { name: 'Google Earth Engine', pct: 70 }
      ]
    },
    {
      icon: '🐍',
      color: '#10B981',
      bg: 'rgba(16,185,129,0.12)',
      title: 'Programming & Data',
      skills: [
        { name: 'Python', pct: 88 },
        { name: 'Geospatial Libraries (GDAL, Rasterio)', pct: 82 },
        { name: 'Statistical Analysis (SciPy, Pandas)', pct: 80 },
        { name: 'Figure Generation (Matplotlib)', pct: 85 },
        { name: 'NetCDF / HDF5 Data Handling', pct: 78 }
      ]
    },
    {
      icon: '🤖',
      color: '#F59E0B',
      bg: 'rgba(245,158,11,0.12)',
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Claude Code (Agentic Dev)', pct: 88 },
        { name: 'Transfer Learning / Domain Adaptation', pct: 72 },
        { name: 'RAG & LLM Pipelines', pct: 70 },
        { name: 'Random Forest / SVM', pct: 75 },
        { name: 'ChatGPT (Research Workflow)', pct: 90 }
      ]
    },
    {
      icon: '🗺',
      color: '#8B5CF6',
      bg: 'rgba(139,92,246,0.12)',
      title: 'GIS & Spatial Analysis',
      skills: [
        { name: 'QGIS / ArcGIS', pct: 82 },
        { name: 'Spatial Aggregation & Scale Analysis', pct: 88 },
        { name: 'Ecoregion Stratification', pct: 80 },
        { name: 'Cyclone Track Analysis (IBTrACS)', pct: 78 },
        { name: 'CHIRPS Rainfall Data', pct: 75 }
      ]
    },
    {
      icon: '✍',
      color: '#EC4899',
      bg: 'rgba(236,72,153,0.12)',
      title: 'Scientific Communication',
      skills: [
        { name: 'Manuscript Writing', pct: 82 },
        { name: 'Journal Submission (Springer, Elsevier)', pct: 70 },
        { name: 'LaTeX / Word / Overleaf', pct: 78 },
        { name: 'Data Visualisation', pct: 85 },
        { name: 'Peer Review Process', pct: 72 }
      ]
    },
    {
      icon: '🔬',
      color: '#06B6D4',
      bg: 'rgba(6,182,212,0.12)',
      title: 'Research Methods',
      skills: [
        { name: 'SIF Footprint Masking', pct: 85 },
        { name: 'Phenological Cycle Analysis', pct: 80 },
        { name: 'Multi-scale Statistical Testing', pct: 78 },
        { name: 'Supervisor Feedback Iteration', pct: 90 },
        { name: 'Hypothesis Stress-Testing', pct: 82 }
      ]
    }
  ];

  el.innerHTML = categories.map(cat => `
    <div class="skill-category reveal">
      <div class="skill-cat-header">
        <div class="skill-cat-icon" style="background:${cat.bg};color:${cat.color}">${cat.icon}</div>
        <div class="skill-cat-title">${cat.title}</div>
      </div>
      <div class="skill-items">
        ${cat.skills.map(s => `
          <div class="skill-item">
            <span>${s.name}</span>
            <div class="skill-bar-wrap">
              <div class="skill-bar" style="width:${s.pct}%;background:${cat.color}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ── Education section ──
function buildEducationSection() {
  const coursesEl = document.getElementById('msc-courses');
  if (coursesEl) {
    const allCourses = [
      ...COURSES.semester1.courses,
      ...COURSES.semester2.courses
    ].filter(c => c.key || [
      'Introduction to Remote Sensing',
      'Spatial Data Science',
      'Probability & Statistics',
      'Introduction to Space Technology'
    ].includes(c.name));

    coursesEl.innerHTML = allCourses.map(c => `
      <div class="edu-course-item">
        <div class="edu-course-dot" style="background:${c.color}"></div>
        ${c.name}
      </div>
    `).join('');
  }
}

// ── Scroll reveal ──
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  const scheduleObserve = window.requestIdleCallback
    ? cb => window.requestIdleCallback(cb, { timeout: 500 })
    : cb => setTimeout(cb, 0);

  scheduleObserve(() => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  });
}
