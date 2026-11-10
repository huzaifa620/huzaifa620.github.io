---
layout: page
permalink: /projects/
title: Projects
nav: true
nav_order: 3
---

<h2>2026: 5 apps built, 4 live in the stores</h2>
<p>Five live store releases, three more submissions in review, and one app in development. These are client and employer products, so
the code is private; the links go to the live apps.</p>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/wash42.png" style="width: 300px; height: 300px;" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>Wash42 &middot; Car-Wash Booking &amp; Membership</h3>
      <span class="timeline">2026 &middot; The Monk Co.</span>
    </div>
    <p>
      <b>Live on the App Store and Google Play, plus a live Progressive Web App.</b> I built the iOS and Android apps (<b>React Native, Expo</b>), the
      admin panel and the PWA (<b>React, TypeScript, Vite, Redux Toolkit, Workbox</b>; Lighthouse PWA 100 and accessibility 100), and wrote most of the
      <b>FastAPI</b> backend: bookings, <b>ValorPay</b> payments with idempotency and signed webhooks, recurring membership billing, and Microsoft Entra
      External ID sign-in, with backend test coverage held at 90% by CI.
    </p>
    <a href="https://apps.apple.com/us/app/wash42/id6803226300" target="_blank" rel="noopener noreferrer"><button>App Store</button></a>
    <a href="https://play.google.com/store/apps/details?id=com.wash42.app" target="_blank" rel="noopener noreferrer" style="margin-left: 1rem;"><button>Google Play</button></a>
    <a href="https://brave-smoke-0e0c01010.6.azurestaticapps.net" target="_blank" rel="noopener noreferrer" style="margin-left: 1rem;"><button>Web App</button></a>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/headquarters.png" style="width: 300px; height: 300px;" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>HeadQuarters CRM &middot; Field-Service CRM</h3>
      <span class="timeline">2026 &middot; The Monk Co.</span>
    </div>
    <p>
      <b>Live on the App Store; Google Play in review.</b> Sole engineer on the <b>React Native/Expo</b> app, the <b>Next.js</b> website and the
      <b>FastAPI/PostgreSQL</b> backend. Offline-first sync with retry-safe photo uploads, <b>Stripe</b> subscriptions, FCM/APNs push, real-time team chat,
      phone and tablet layouts, and <b>AWS</b> infrastructure as code (CDK, EC2, S3, SES) with GitHub Actions deploys and Playwright and Maestro end-to-end tests.
    </p>
    <a href="https://apps.apple.com/app/id6819401164" target="_blank" rel="noopener noreferrer"><button>App Store</button></a>
    <a href="https://www.headquarterscrm.com" target="_blank" rel="noopener noreferrer" style="margin-left: 1rem;"><button>Website</button></a>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/dugan.png" style="width: 300px; height: auto;" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>Dugan Psychiatry &middot; Mental-Health Platform</h3>
      <span class="timeline">2026 &middot; The Monk Co.</span>
    </div>
    <p>
      <b>Live on Google Play; App Store in review.</b> A <b>React Native (Expo)</b> app for patients and psychiatrists, backed by <b>NestJS and
      PostgreSQL</b>: mood tracking, therapeutic mini-games and a resources library. I built core features: <b>Clerk</b> sign-in across app and API,
      role-based onboarding, real-time chat with incoming-call handling, <b>WebRTC</b> video visits and <b>Stripe</b> payments. I also shipped the first Google Play release.
    </p>
    <a href="https://play.google.com/store/apps/details?id=com.duganpsychiatry.app" target="_blank" rel="noopener noreferrer"><button>Google Play</button></a>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/hani.png" style="width: 300px; height: 300px;" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>Hani by Rehani &middot; AI Property Concierge</h3>
      <span class="timeline">2026 &middot; Rehani Soko</span>
    </div>
    <p>
      <b>Live on the App Store; Google Play in review.</b> Sole author of the <b>Expo/React Native</b> app and the <b>Django</b> service behind it. Hani
      searches listings across portals and merges duplicates by photo hash. It negotiates rent with agents over WhatsApp inside the seeker's budget, with
      <b>Claude</b> reading replies under strict validation and a rules fallback, and it searches by photo with Claude vision. Hani V2 added multi-term negotiation
      and an agent mode, backed by 350+ backend and 400+ mobile tests.
    </p>
    <a href="https://apps.apple.com/app/id6830137760" target="_blank" rel="noopener noreferrer"><button>App Store</button></a>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/propertkt.png" style="width: 300px; height: 300px;" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>ProperTkt &middot; Maintenance Tickets for Landlords</h3>
      <span class="timeline">Oct 2026 – Present &middot; Freelance</span>
    </div>
    <p>
      <b>In development; Android preview available.</b> Sole engineer on the <b>FastAPI/PostgreSQL/Celery</b> API, the <b>React</b> web dashboard
      and admin console, and the <b>Expo</b> mobile app, all generated from one OpenAPI contract. The API and website are deployed on <b>AWS</b>
      (CDK, EC2, CloudFront, nightly backups) with automated staging-to-production deploys.
    </p>
    <a href="https://www.propertkt.com" target="_blank" rel="noopener noreferrer"><button>Website</button></a>
    <a href="https://expo.dev/artifacts/eas/EPoAdILqSzFw5Ch_cRjoZX5AWWK71vReFQS7CMUJGNo.apk" target="_blank" rel="noopener noreferrer" style="margin-left: 1rem;"><button>Android APK (preview)</button></a>
  </div>
</div>

<h2>AI &amp; other projects</h2>

<div class="project0">
  <div class="project-details0">
    <div class="heading">
      <h3>self-healing-rag &middot; Eval-Gated RAG Service</h3>
      <span class="timeline">Aug 2026</span>
    </div>
    <p>
      A RAG service that critiques its own answers, retries, and abstains rather than guessing (<b>Python, FastAPI, LangGraph</b>). A 60-question golden set
      graded by a cross-provider LLM judge runs on every push, and <b>GitHub Actions</b> blocks any merge that regresses: 4.4% hallucination, 0% false
      answers, 100% citation accuracy, about $0.0005 per query.
    </p>
    <a href="https://github.com/huzaifa620/self-healing-rag" target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/f1gpt.jpg" style="width: 300px; height: 300px;" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>F1GPT &middot; Formula One RAG Assistant</h3>
      <span class="timeline">Aug 2025</span>
    </div>
    <p>
      A <b>Retrieval‑Augmented Generation</b> chatbot for Formula 1. It scrapes F1 sources with <b>Puppeteer</b>, splits them into overlapping chunks with
      <b>LangChain</b>, and stores the embeddings in <b>Astra DB</b> vector search. Each question retrieves the closest matches, which are added to the prompt
      before the answer streams back through the <b>Vercel AI SDK</b>. Built with <b>Next.js 15</b>.
    </p>
    <a href="https://github.com/huzaifa620/rag-f1gpt-chatbot-nextjs" target="_blank" rel="noopener noreferrer"><button>View Repository</button></a>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/weatherapp.jpg" style="width: 300px; height: 300px;" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>AI Weather App</h3>
      <span class="timeline">Jul 2025</span>
    </div>
    <p>
      Weather dashboard that fetches forecasts from Open‑Meteo and generates <b>LLM‑written daily summaries</b> from raw meteorological signals.
      Built with <b>Next.js 13 (App Router)</b>, typed APIs, and <b>@tremor/react</b> charts, focusing on converting time‑series data into
      natural‑language insights.
    </p>
    <a href="https://github.com/huzaifa620/ai-weather-app-nextjs-stepzen" target="_blank" rel="noopener noreferrer"><button>View Repository</button></a>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/bookrecommender.jpg" style="width: 300px; height: 300px;" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>LLM Semantic Book Recommender</h3>
      <span class="timeline">Jun 2025</span>
    </div>
    <p>
      <b>Embeddings‑driven</b> recommendation engine that indexes titles into a vector database and uses <b>LLM re‑ranking</b> for context‑aware,
      beyond‑keyword suggestions. Highlights hybrid retrieval (dense + metadata filters) and prompt‑based justification of recommendations.
    </p>
    <a href="https://github.com/huzaifa620/llm-semantic-book-recommender" target="_blank" rel="noopener noreferrer"><button>View Repository</button></a>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/smart_scan.jpg" style="width: 300px; height: 300px;" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>SmartScan Billing Assistant</h3>
      <span class="timeline">May 2024 - Jul 2024</span>
    </div>
    <p>
      A computer vision‑based project designed to automate the process of calculating the total bill by detecting products and adding their prices using a camera, similar to a cashier. Uses the <b>YOLOv8 model</b> for <b>object detection and tracking</b>. This is the MVP of the main project implemented for a supermarket where I deployed the SmartScan billing system on more than <b>1200 products</b>.
    </p>
    <a href="https://github.com/hamzaalikhan822/SmartScan-Billing-Assistant" target="_blank" rel="noopener noreferrer"><button>View Repository</button></a>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/fyp.jpg" style="width: 300px; height: 300px;" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>Optimal Robotic Arm Gripper (FYP)</h3>
      <span class="timeline">Aug 2022 - Aug 2023</span>
    </div>
    <p>
      Autonomous warehouse-grasping system using dual monocular cameras for <b>6D pose estimation</b> and AI‑guided grasp planning. Combined
      <b>computer vision</b>, <b>robot kinematics/inverse kinematics</b>, and ML‑based strategies to reliably pick and place objects from arbitrary locations.
      Published as <b>arXiv:2411.13205</b>.
    </p>
    <a href="https://www.youtube.com/shorts/nJrsF2eAPDo" target="_blank" rel="noopener noreferrer"><button>Live Demo</button></a>
    <a href="https://drive.google.com/drive/folders/1U4Bl81hgEc-5N_hCVpneEVkcrgtJiXAt" target="_blank" rel="noopener noreferrer"><button>Project Media</button></a>
    <a href="https://huzaifa620.github.io/assets/pdf/Research_Paper_FYP.pdf" target="_blank" rel="noopener noreferrer"><button>Research Paper</button></a>
  </div>
</div>
