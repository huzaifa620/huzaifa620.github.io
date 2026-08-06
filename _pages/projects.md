---
layout: page
permalink: /projects/
title: Projects
nav: true
nav_order: 3
---

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/wash42.png" style="width: 300px; height: 300px;" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>Wash42 &middot; Car-Wash Booking &amp; Subscription App</h3>
      <span class="timeline">Jan 2026 - Jun 2026</span>
    </div>
    <p>
      A <b>cross-platform (iOS &amp; Android)</b> mobile app for car-wash booking and subscriptions, built with <b>React Native</b> and <b>Expo</b>.
      Features a configurable wash-menu catalog, a provider-agnostic <b>payments layer (ValorPay)</b>, <b>push notifications</b>, and offline-tolerant data via
      <b>TanStack Query</b> persistence, backed by a <b>FastAPI</b> service. Released to the App Store and Play Store
      through an <b>EAS Build/Submit</b> pipeline.
    </p>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/dugan.png" style="width: 300px; height: auto;" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <h3>Dugan Psychiatry &middot; Mental-Health Platform (Mobile)</h3>
      <span class="timeline">Jan 2026 - Jun 2026</span>
    </div>
    <p>
      A <b>React Native (Expo)</b> mental-health app for patients and psychiatrists, featuring mood tracking with charts, 11+ therapeutic mini-games, and a
      curated resources library. Implements <b>real-time chat (Socket.IO)</b>, <b>WebRTC video consultations</b>, <b>Stripe</b> appointment payments,
      role-based access, and <b>Expo push notifications</b>, powered by a <b>NestJS + PostgreSQL</b> backend with <b>Clerk</b> auth.
    </p>
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
      A <b>Retrieval‑Augmented Generation</b> assistant for Formula 1 that scrapes sources, chunks documents, embeds them into a vector store, and
      orchestrates answers via a streaming LLM layer. Stack: <b>Next.js 15</b>, <b>Vercel AI SDK</b>, <b>Puppeteer</b>, <b>LangChain</b>, <b>Astra DB</b> (vector search),
      with tool‑use for fast, cited race insights and rules explainers.
    </p>
    <a href="https://rag-f1gpt-chatbot-nextjs-production.up.railway.app/" target="_blank" rel="noopener noreferrer"><button>Live Demo</button></a>
    <a href="https://github.com/huzaifa620/rag-f1gpt-chatbot-nextjs" target="_blank" rel="noopener noreferrer"><button>View Repository</button></a>
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
    <a href="https://llm-semantic-book-recommender-production.up.railway.app/" target="_blank" rel="noopener noreferrer"><button>Live Demo</button></a>
    <a href="https://github.com/huzaifa620/llm-semantic-book-recommender" target="_blank" rel="noopener noreferrer"><button>View Repository</button></a>
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
    <a href="https://ai-weather-app-nextjs-stepzen-production.up.railway.app/" target="_blank" rel="noopener noreferrer"><button>Live Demo</button></a>
    <a href="https://github.com/huzaifa620/ai-weather-app-nextjs-stepzen" target="_blank" rel="noopener noreferrer"><button>View Repository</button></a>
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
    <a href="https://docs.google.com/presentation/d/1angaKsRuR_vHHrlyIwOUKt6ev2wqfSnjwKETaQpPNFc/" target="_blank" rel="noopener noreferrer"><button>Presentation</button></a>
    <a href="https://drive.google.com/drive/folders/1U4Bl81hgEc-5N_hCVpneEVkcrgtJiXAt" target="_blank" rel="noopener noreferrer"><button>Project Media</button></a>
    <a href="https://huzaifa620.github.io/assets/pdf/Research_Paper_FYP.pdf" target="_blank" rel="noopener noreferrer"><button>Research Paper</button></a>
  </div>
</div>
