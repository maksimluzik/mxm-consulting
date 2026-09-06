/**
 * blueprint.js - MXM Consulting Interactive Cloud & Systems Architecture Engine
 * High-performance vanilla JS with zero external dependencies.
 */
document.addEventListener('DOMContentLoaded', () => {
  /* =============================================================
     1. Multi-Cloud Architecture Blueprint & Inspector Engine (AWS & GCP)
     ============================================================= */
  const nodeData = {
    'edge-network': {
      id: 'edge-network',
      step: '01 / NETWORK & INGRESS',
      name: 'Global Ingress & Multi-Cloud Load Balancing',
      sla: '< 8MS EDGE TERMINATION // ANYCAST BGP',
      invariant: 'Zero single-point-of-failure ingress. Anycast DNS geo-routing with HTTP/3 QUIC edge termination, Cloud Armor / WAF DDoS mitigation, and cross-cloud health-check failover.',
      tools: ['AWS Route 53', 'AWS CloudFront', 'GCP Cloud Load Balancing', 'Cloud Armor', 'Envoy Gateway'],
      circuitBreaker: 'Automated DNS health-check failover routing traffic between primary AWS (eu-west-1) and secondary GCP (europe-north1) within 15 seconds.',
      log: '[00:00.008] Anycast Edge: Ingress request received (HTTP/3, TLS 1.3, POP: HEL1)\n[00:00.012] Cloud Armor: WAF inspection 0 threat signals; routed to multi-cloud origin pool'
    },
    'firebase-platform': {
      id: 'firebase-platform',
      step: '02 / FULL-STACK PLATFORM',
      name: 'Web & Mobile App Firebase Architecture',
      sla: '< 35MS P99 SYNC // OFFLINE-FIRST',
      invariant: 'Unified cross-platform identity, offline-first client replication, atomic batch document writes, and automated Firebase Security Rules auditing with zero authorization bypasses.',
      tools: ['Firebase Auth', 'Cloud Firestore', 'Cloud Functions for Firebase', 'Firebase Storage', 'App Check'],
      circuitBreaker: 'Client-side optimistic document state buffer with exponential backoff resynchronization on degraded mobile connectivity.',
      log: '[00:00.024] Firebase Auth: Verified session claims & App Check token attestation\n[00:00.028] Firestore: Atomic snapshot transaction executed (collection: tenants/live)'
    },
    'event-compute': {
      id: 'event-compute',
      step: '03 / EVENT MESH & COMPUTE',
      name: 'Distributed Event Mesh & Container Scale',
      sla: '150K+ EPS // SUB-10MS BROKER LATENCY',
      invariant: 'Strict partition ordering and at-least-once message delivery via Debezium CDC and schema registries; automated predictive autoscaling on EKS and Cloud Run.',
      tools: ['AWS MSK (Kafka)', 'GCP Pub/Sub', 'AWS ECS/EKS', 'GCP Cloud Run / GKE', 'Debezium CDC'],
      circuitBreaker: 'Dead-letter exchange (DLQ) with automated S3/GCS archival storage and self-healing replay consumers.',
      log: '[00:00.042] GCP Pub/Sub: Event published to topic "orders.ingest" (ack received)\n[00:00.048] Cloud Run / EKS: Microservice worker picked up task payload'
    },
    'vector-search': {
      id: 'vector-search',
      step: '04 / SEMANTIC KNOWLEDGE',
      name: 'Managed Vector Search & Hybrid Retrieval',
      sla: 'P99 < 22MS // RECALL@10 > 95%',
      invariant: 'High-recall Approximate Nearest Neighbor (ANN) index serving semantic search and generative AI pipelines with hybrid BM25 lexical reranking and tenant isolation.',
      tools: ['GCP Vertex AI Vector Search', 'pgvector on Cloud SQL / RDS', 'AWS OpenSearch', 'Qdrant', 'Cohere Rerank'],
      circuitBreaker: 'Automatic fallback to cached lexical OpenSearch cluster if vector similarity endpoint latency breaches 40ms threshold.',
      log: '[00:00.064] Vertex AI Vector Search: Query embedding matched (k=10 nearest neighbors)\n[00:00.071] Cross-encoder reranker applied (reciprocal rank fusion top_score: 0.961)'
    },
    'data-lakehouse': {
      id: 'data-lakehouse',
      step: '05 / PERSISTENT STORAGE',
      name: 'Enterprise Data Lakehouse & Cloud Storage',
      sla: '99.999% ACID DURABILITY // PB-SCALE OLAP',
      invariant: 'ACID transactional guarantees on relational workloads paired with zero-copy petabyte-scale analytics in BigQuery and multi-region object storage tiering.',
      tools: ['AWS Aurora PostgreSQL', 'GCP BigQuery', 'AWS S3 / GCP Cloud Storage', 'Cloud Bigtable', 'Terraform'],
      circuitBreaker: 'Automated read-replica promotion within 30 seconds of primary database failover; continuous point-in-time recovery (PITR).',
      log: '[00:00.088] Aurora Postgres: Multi-AZ transactional write committed (latency: 14ms)\n[00:00.092] BigQuery streaming buffer: Analytical row ingested for real-time aggregation'
    },
    'observability-governance': {
      id: 'observability-governance',
      step: '06 / GOVERNANCE & TELEMETRY',
      name: 'Observability, FinOps & Cloud Governance',
      sla: '100% W3C TRACE SAMPLING // ZERO SILOS',
      invariant: 'Unified telemetry spanning AWS and GCP with OpenTelemetry distributed trace context, real-time cost-anomaly alarms, and policy-as-code security compliance.',
      tools: ['AWS CloudWatch', 'GCP Cloud Monitoring', 'OpenTelemetry', 'Grafana / Datadog', 'Terraform IaC'],
      circuitBreaker: 'Automated FinOps circuit breakers that trigger compute throttling alarms before cloud overspend exceeds allocated thresholds.',
      log: '[00:00.104] OpenTelemetry: Distributed trace span emitted across AWS & GCP boundaries\n[00:00.108] FinOps budget monitor: Spend velocity verified within nominal thresholds'
    }
  };

  const nodeCards = document.querySelectorAll('.blueprint-node-card');
  const inspectorEyebrow = document.getElementById('inspectorEyebrow');
  const inspectorTitle = document.getElementById('inspectorTitle');
  const inspectorSla = document.getElementById('inspectorSla');
  const inspectorInvariant = document.getElementById('inspectorInvariant');
  const inspectorTools = document.getElementById('inspectorTools');
  const inspectorBreaker = document.getElementById('inspectorBreaker');
  const inspectorTerminal = document.getElementById('inspectorTerminal');
  const simulateBtn = document.getElementById('simulateBtn');

  function updateInspector(nodeKey) {
    const data = nodeData[nodeKey];
    if (!data) return;

    // Update active class on cards
    nodeCards.forEach(card => {
      card.classList.toggle('active', card.dataset.node === nodeKey);
      card.setAttribute('aria-pressed', card.dataset.node === nodeKey ? 'true' : 'false');
    });

    if (inspectorEyebrow) inspectorEyebrow.textContent = data.step;
    if (inspectorTitle) inspectorTitle.textContent = data.name;
    if (inspectorSla) inspectorSla.textContent = data.sla;
    if (inspectorInvariant) inspectorInvariant.textContent = data.invariant;
    if (inspectorBreaker) inspectorBreaker.textContent = data.circuitBreaker;

    if (inspectorTools) {
      inspectorTools.innerHTML = data.tools.map(t => `<span class="tech-tag highlight">${t}</span>`).join('');
    }

    if (inspectorTerminal) {
      inspectorTerminal.innerHTML = `
        <div class="terminal-line-cyan">[ACTIVE NODE: ${data.name.toUpperCase()}]</div>
        <div>${data.log.replace(/\n/g, '<br>')}</div>
        <div class="terminal-line-success">[CIRCUIT BREAKER: ARMED]</div>
      `;
    }
  }

  nodeCards.forEach(card => {
    card.addEventListener('click', () => {
      updateInspector(card.dataset.node);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        updateInspector(card.dataset.node);
      }
    });
  });

  // Pipeline simulation animation across cloud topology
  if (simulateBtn) {
    const nodeOrder = ['edge-network', 'firebase-platform', 'event-compute', 'vector-search', 'data-lakehouse', 'observability-governance'];
    simulateBtn.addEventListener('click', () => {
      if (simulateBtn.classList.contains('simulating')) return;

      simulateBtn.classList.add('simulating');
      simulateBtn.innerHTML = `
        <svg class="icon-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
        Simulating Multi-Cloud Flow...
      `;

      if (inspectorTerminal) {
        inspectorTerminal.innerHTML = `<div class="terminal-line-cyan">[MULTI-CLOUD EXECUTION INITIATED: PACKET #MC-88219]</div>`;
      }

      let step = 0;
      const interval = setInterval(() => {
        if (step < nodeOrder.length) {
          const currentKey = nodeOrder[step];
          const currData = nodeData[currentKey];
          
          nodeCards.forEach(c => c.classList.remove('sim-active'));
          const activeCard = document.querySelector(`.blueprint-node-card[data-node="${currentKey}"]`);
          if (activeCard) activeCard.classList.add('sim-active');
          
          updateInspector(currentKey);

          if (inspectorTerminal) {
            const line = document.createElement('div');
            line.className = 'terminal-line-success';
            line.textContent = `[NODE ${step + 1}/6 OK] ${currData.name} -> verified`;
            inspectorTerminal.appendChild(line);
            inspectorTerminal.scrollTop = inspectorTerminal.scrollHeight;
          }

          step++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            nodeCards.forEach(c => c.classList.remove('sim-active'));
            simulateBtn.classList.remove('simulating');
            simulateBtn.innerHTML = `
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Simulate Pipeline Request
            `;
            if (inspectorTerminal) {
              const doneLine = document.createElement('div');
              doneLine.className = 'terminal-line-cyan';
              doneLine.textContent = `[MULTI-CLOUD TRANSACTION COMPLETE: 108MS // ZERO DEVIATION // 100% NOMINAL]`;
              inspectorTerminal.appendChild(doneLine);
              inspectorTerminal.scrollTop = inspectorTerminal.scrollHeight;
            }
          }, 600);
        }
      }, 700);
    });
  }

  /* =============================================================
     2. Dual-Funnel Conversion Engine
     ============================================================= */
  const funnelTabs = document.querySelectorAll('.funnel-tab');
  const funnelTitle = document.getElementById('funnelTitle');
  const funnelDesc = document.getElementById('funnelDesc');
  const funnelDeliverables = document.getElementById('funnelDeliverables');
  const funnelSlaBadge = document.getElementById('funnelSlaBadge');
  const formObjectiveSelect = document.getElementById('formObjective');

  const funnelConfigs = {
    audit: {
      title: 'CTO Architecture Review & Systems Audit',
      desc: 'An intensive architectural diagnostic for engineering leaders facing platform bottlenecks, rising cloud costs, or scaling challenges.',
      sla: 'DIRECT ADVISORY // 100% PRINCIPAL ARCHITECT ENGAGEMENT',
      objective: 'CTO Architecture Review & Systems Audit',
      deliverables: [
        'Complete distributed codebase & cloud infrastructure stress test (AWS & GCP)',
        'P99 latency budget analysis & performance bottleneck triage',
        'Cloud spend & compute architecture right-sizing roadmap',
        '12-month engineering velocity & modernization blueprint'
      ]
    },
    diligence: {
      title: 'Technical Due Diligence & M&A Advisory',
      desc: 'Rigorous, evidence-based architectural audits for institutional investors (VC/PE) and executive acquirers seeking uncompromising risk mitigation.',
      sla: 'DELIVERABLE: 5-10 BUSINESS DAYS // CONFIDENTIAL PGP CLEARANCE',
      objective: 'Technical Due Diligence (M&A / Buy-Side)',
      deliverables: [
        'Architecture velocity, scalability limits & technical debt quantification',
        'Cloud infrastructure reliability, failure modes & SLA risk assessment',
        'Cybersecurity posture, regulatory compliance & data governance review',
        'Post-acquisition technical remediation valuation & roadmap'
      ]
    },
    inquiry: {
      title: 'General Technical Inquiry & Custom Advisory',
      desc: 'Have a specific architectural challenge, exploring collaboration, or seeking bespoke technical advisory? Reach out directly to discuss your engineering needs.',
      sla: 'RESPONSE: WITHIN 24 HOURS // DIRECT ARCHITECT CONSULTATION',
      objective: 'General Technical Inquiry / Consultation',
      deliverables: [
        'Direct consultation with Staff Architect Maksim Luzik',
        'Initial architectural sounding board & technical feasibility triage',
        'Tailored engagement scope aligned with your roadmap & team structure',
        'Flexible advisory options (fractional architecture, sprint, or retained)'
      ]
    }
  };

  funnelTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      funnelTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const mode = tab.dataset.funnel;
      const config = funnelConfigs[mode];
      if (!config) return;

      if (funnelTitle) funnelTitle.textContent = config.title;
      if (funnelDesc) funnelDesc.textContent = config.desc;
      if (funnelSlaBadge) funnelSlaBadge.textContent = config.sla;

      if (funnelDeliverables) {
        funnelDeliverables.innerHTML = config.deliverables.map(d => `
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>${d}</span>
          </li>
        `).join('');
      }

      if (formObjectiveSelect) {
        for (let i = 0; i < formObjectiveSelect.options.length; i++) {
          const opt = formObjectiveSelect.options[i].text;
          if (mode === 'audit' && opt.includes('CTO')) {
            formObjectiveSelect.selectedIndex = i;
            break;
          } else if (mode === 'diligence' && opt.includes('Due Diligence')) {
            formObjectiveSelect.selectedIndex = i;
            break;
          } else if (mode === 'inquiry' && opt.includes('General')) {
            formObjectiveSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

  if (formObjectiveSelect) {
    formObjectiveSelect.addEventListener('change', () => {
      const val = formObjectiveSelect.value;
      let targetFunnel = 'audit';
      if (val.includes('Due Diligence')) targetFunnel = 'diligence';
      else if (val.includes('General')) targetFunnel = 'inquiry';

      const tabToClick = document.querySelector(`.funnel-tab[data-funnel="${targetFunnel}"]`);
      if (tabToClick && !tabToClick.classList.contains('active')) {
        tabToClick.click();
      }
    });
  }

  /* =============================================================
     3. Smooth Anchor Scroll & Navigation Tracking
     ============================================================= */
  const navLinks = document.querySelectorAll('.engineered-nav .nav-item');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes('#' + currentId) && currentId !== '') {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  /* =============================================================
     4. Mobile Navigation Drawer
     ============================================================= */
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      primaryNav.classList.toggle('open', !isOpen);
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    // Close when nav item clicked
    primaryNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* =============================================================
     5. Theme Switcher (OS Default + Manual Toggle)
     ============================================================= */
  const themeToggleBtn = document.getElementById('themeToggle');

  function getSystemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme, save) {
    document.documentElement.setAttribute('data-theme', theme);
    if (save) {
      localStorage.setItem('mxm-theme', theme);
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || getSystemTheme();
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme, true);
    });
  }

  // Listen for OS theme changes if user hasn't set an explicit preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('mxm-theme')) {
        applyTheme(e.matches ? 'dark' : 'light', false);
      }
    });
  }
});
