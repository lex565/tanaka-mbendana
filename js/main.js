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
  const abstractEl = document.getElementById('research-abstract-text');
  if (abstractEl) abstractEl.textContent = RESEARCH.abstract.replace(/\s+/g, ' ').trim();

  const dataChips = document.getElementById('data-chips');
  if (dataChips) {
    dataChips.innerHTML = RESEARCH.keyData.map(d => `<div class="data-chip">${d}</div>`).join('');
  }

  const findingsEl = document.getElementById('findings-list');
  if (findingsEl) {
    findingsEl.innerHTML = RESEARCH.keyFindings.map((f, i) => `
      <div class="finding-item">
        <span class="finding-num">${String(i + 1).padStart(2, '0')}</span>
        <span>${f}</span>
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
    toolsEl.innerHTML = PROFILE.tools.map(t => `
      <div class="tool-card">
        <div class="tool-name" style="color:${t.color}">${t.name}</div>
        <div class="tool-role">${t.role}</div>
      </div>
    `).join('');
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
