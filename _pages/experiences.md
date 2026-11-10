---
layout: page
permalink: /experiences/
title: Experiences
nav: true
nav_order: 2
---

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/monkco.png" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <a href="https://www.themonkco.com/" target="_blank" rel="noopener noreferrer">
        <h3>The Monk Co.</h3>
      </a>
      <span class="timeline">Jan 2026 – Present</span>
    </div>
    <p>Position: <strong>Software Engineer</strong> (Full-Time)</p>
    <p>Location: <strong>Hybrid (Karachi, Pakistan)</strong></p>
    <p><b>Key Contributions:</b></p>
    <ul>
      <li><b>HeadQuarters CRM</b> (live on the App Store): sole engineer on all three codebases: a <b>React Native/Expo</b> app, a <b>Next.js</b> website and a <b>FastAPI/PostgreSQL</b> backend with a Redis worker. Built offline-first sync so jobs and photos captured without signal upload later in retry-safe steps, never lost or duplicated. Also built <b>Stripe</b> subscription billing, email verification, FCM/APNs push and real-time team chat.</li>
      <li>Provisioned HeadQuarters' <b>AWS</b> environment as code (CDK: EC2, S3 backups, ECR, SES with DKIM) with GitHub Actions deploys, Sentry monitoring, and API, <b>Playwright</b> and <b>Maestro</b> end-to-end tests.</li>
      <li><b>Wash42</b> (live on the App Store and Google Play): built the iOS and Android apps and the admin panel, and wrote most of the <b>FastAPI</b> backend: bookings, <b>ValorPay</b> payments with idempotency and signed webhooks, recurring membership billing with prorated upgrades, and Microsoft Entra External ID sign-in. Raised backend test coverage to <b>90%</b> and made CI enforce it.</li>
      <li>Built the Wash42 <b>Progressive Web App</b> (React, TypeScript, Vite, Redux Toolkit, Workbox) matching the native app across 37 screens, with an offline outbox and Web Push. Lighthouse: PWA 100, accessibility 100. Deployed on Azure Static Web Apps.</li>
      <li><b>Dugan Psychiatry</b> (live on Google Play; iOS in review): built core features of the patient and psychiatrist app (<b>React Native, NestJS</b>): Clerk sign-in across app and API, role-based onboarding, real-time chat with incoming-call handling and <b>WebRTC</b> video visits, and Stripe appointment payments. Shipped the first Google Play release.</li>
      <li>Owned releases across the three apps: <b>EAS Build/Submit</b> pipelines, over-the-air updates, signing, store listings and review submissions.</li>
    </ul>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/rehani.jpg" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <a href="https://www.rehanisoko.com/">
        <h3>Rehani Soko LLC</h3>
      </a>
      <span class="timeline">Apr 2023 – Oct 2026</span>
    </div>
    <p>Position: <strong>Software Developer</strong> (Full-Time Nov 2024 – Oct 2026; Contract Apr 2023 – Oct 2024)</p>
    <p>Location: <strong>Remote (Washington D.C., United States)</strong></p>
    <p><b>Key Contributions:</b></p>
    <ul>
      <li><b>Hani</b> (live on the App Store; Google Play in review): built the Hani iOS/Android app (<b>Expo, React Native</b>) and the <b>Django</b> service behind it, as sole author of both. It covers phone/WhatsApp OTP, Apple, Google and Facebook sign-in, biometrics, search, saved homes, viewings and offers.</li>
      <li><b>Hani's AI:</b> it searches Rehani and partner-portal listings, merges cross-portal duplicates by photo hash, ranks matches and re-hunts daily with price-drop alerts. It negotiates rent with agents over WhatsApp inside the seeker's budget. <b>Claude</b> reads agents' replies, and every answer is validated (a quoted price must appear in the message) with a rules fallback. Photo search runs on Claude vision, with EXIF stripped and nothing stored.</li>
      <li>Shipped <b>Hani V2</b> to production: multi-term negotiation and an agent mode behind feature switches, backed by 350+ backend and 400+ mobile tests. Fixed production security holes found in my audit, including anonymous account takeover and unauthenticated listing deletion.</li>
      <li><b>Tangaza</b> (Rehani's diaspora ad platform): main backend contributor to listing boosts. A paid boost becomes <b>Meta Click-to-WhatsApp</b> and <b>Google Search</b> campaigns, with LLM-written ad copy, automated Instagram and Messenger replies, and leads routed to Hani. Rebuilt the QR/flyer landing page into a property-first Listing Mode with built-in Hani chat.</li>
      <li>Built the automated quality gate for <b>AI-generated virtual-tour videos</b>: ffmpeg extracts frames, a model scores each clip against its source photo, failing clips regenerate, and unresolved scenes open tickets in the admin panel.</li>
      <li>Ran the platform's <b>LLM layer</b>: routing across <b>Anthropic and OpenAI</b> model tiers with per-request token-cost tracking, WhatsApp and web assistants with long-term user memory and <b>Whisper/TTS</b> voice, embeddings matching and schema-validated underwriting.</li>
      <li>Built the scraping and cleaning pipeline for roughly <b>50,000 listings a month</b> (about 35% more reliable after consistency checks). Led feature work on the <b>Vue/Nuxt and Django</b> platform, including the Hani app landing page.</li>
    </ul>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/lovum.png" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>Lovum Group</h3>
      <span class="timeline">Jan 2024 – Dec 2025</span>
    </div>
    <p>Position: <strong>Software Engineer (Part-Time, Contract)</strong></p>
    <p>Location: <strong>Remote (United States)</strong></p>
    <p><b>Key Contributions:</b></p>
    <ul>
      <li>Worked on two of their products, <strong>EduEssential</strong> and <strong>Waridi</strong>, a learning platform and a healthcare one.</li>
      <li>Built the <b>Next.js</b> frontends and the <b>Python APIs</b> behind them, and worked on getting both to scale.</li>
      <li>Wired up the backend integrations behind their <b>AI-driven personalisation</b> features.</li>
    </ul>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/agentarc_logo.jpg" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <a href="https://arena.colosseum.org/projects/explore/agent-arc" target="_blank" rel="noopener noreferrer">
        <h3>Agent Arc</h3>
      </a>
      <span class="timeline">Jan 2025 – Jul 2025</span>
    </div>
    <p>Position: <strong>Frontend Lead Developer</strong></p>
    <p>Location: <strong>Remote (Singapore)</strong></p>
    <p><b>Key Contributions:</b></p>
    <ul>
      <li>Led the frontend for <a href="https://arena.colosseum.org/projects/explore/agent-arc" target="_blank" rel="noopener noreferrer">Agent Arc</a>, a <b>non-custodial AI trading terminal</b> on Solana, and wired the <b>AI/ML trading APIs</b> into the execution flow.</li>
      <li>Built the <b>Privy login and token auth</b> flow, which got the first 100+ users through signup without a seed phrase.</li>
      <li>Integrated the staking contracts so fees are handled <b>on-chain</b>, talking to them through their ABIs.</li>
      <li>Project won 🏆 <b>3rd Prize in the AI Track ($15,000)</b> at the Solana Breakout Hackathon, selected from <b>8,300+ global submissions</b>.</li>
    </ul>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/algorithm.png" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <a href="https://algorithmenergy.com/">
        <h3>Algorithm Consulting (Pvt) Ltd</h3>
      </a>
      <span class="timeline">May 2024 – Oct 2024</span>
    </div>
    <p>Position: <strong>Junior Developer</strong></p>
    <p>Location: <strong>Karachi, Pakistan</strong></p>
    <p><b>Key Contributions:</b></p>
    <ul>
      <li>Worked on an <b>ASP.NET enterprise platform</b>, mostly new modules and the production bug queue.</li>
      <li>Spent a lot of it pairing with senior engineers on query performance and release stability.</li>
    </ul>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/crosswing.jpg" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <a href="https://crosswing.com/">
        <h3>CrossWing Inc.</h3>
      </a>
      <span class="timeline">Mar 2023 – Nov 2023</span>
    </div>
    <p>Position: <strong>Full Stack Developer</strong></p>
    <p>Location: <strong>Remote (Ontario, Canada)</strong></p>
    <p><b>Key Contributions:</b></p>
    <ul>
      <li>Built and maintained the <b>React.js</b> web apps that sat on top of their robotics products.</li>
      <li>Collaborated with the AI/ML engineers and product managers on features connecting the hardware to the web side.</li>
    </ul>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/myaskai.jpg" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <a href="https://myaskai.com/">
        <h3>My AskAI</h3>
      </a>
      <span class="timeline">Dec 2022 – Jan 2023</span>
    </div>
    <p>Position: <strong>Backend Developer</strong></p>
    <p><b>Key Contributions:</b></p>
    <ul>
      <li>Built an <b>OpenAI model-trainer API validator</b> in Node.js, so bad data got caught before it reached the training pipeline.</li>
    </ul>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/profecia.png" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>Profecia Links</h3>
      <span class="timeline">May 2022 – Aug 2022</span>
    </div>
    <p>Position: <strong>Software Engineer Grade A1</strong></p>
    <p>Location: <strong>Remote (Abu Dhabi, United Arab Emirates)</strong></p>
    <p><b>Key Contributions:</b></p>
    <ul>
      <li>Automated client <b>data-extraction workflows</b> with Import.io, which cut out a lot of manual collection.</li>
    </ul>
  </div>
</div>
