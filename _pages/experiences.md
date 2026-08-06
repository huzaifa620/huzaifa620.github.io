---
layout: page
permalink: /experiences/
title: Experiences
nav: true
nav_order: 2
---

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/rehani.jpg" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <a href="https://www.rehanisoko.com/">
        <h3>Rehani Soko LLC</h3>
      </a>
      <span class="timeline">Apr 2023 – Present</span>
    </div>
    <p>Position: <strong>Software Developer</strong> (Full-Time since Nov 2024; Contract Apr 2023 – Oct 2024)</p>
    <p>Location: <strong>Remote (Washington D.C., United States)</strong></p>
    <p><b>Key Contributions:</b></p>
    <ul>
      <li>Build and run the <b>LLM side of the platform</b>. Requests route across <b>Anthropic and OpenAI model tiers</b> depending on what the task actually needs, and I count tokens with <b>tiktoken</b> so I know what each feature costs to run.</li>
      <li>Built a <b>content pipeline that checks its own work</b>. A critic model scores every generated draft, rejects the weak ones, and sends them back to be regenerated before anything publishes. That took manual review out of the loop entirely.</li>
      <li>Shipped the <b>WhatsApp and web assistants</b>. They keep a long-term profile of each user's preferences, pulled out of past conversations and merged over time, and handle voice through <b>Whisper and TTS</b>.</li>
      <li>Built <b>semantic matching on embeddings</b>, and an underwriting service where the model has to return structured output that passes schema validation before anything downstream will touch it.</li>
      <li>Wrote the scrapers and cleaning pipeline behind all of it, roughly <b>50,000 listings a month</b>. Reliability improved about 35% after the consistency checks went in.</li>
      <li>Also lead feature work on the <b>Vue.js and Django</b> platform, and built the <b>React/Vite admin panel</b> the content team uses.</li>
    </ul>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/agentarc_logo.jpg" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <a href="https://agentarc.ai/">
        <h3>Agent Arc</h3>
      </a>
      <span class="timeline">Jan 2025 – Jul 2025</span>
    </div>
    <p>Position: <strong>Frontend Lead Developer</strong></p>
    <p>Location: <strong>Remote (Singapore)</strong></p>
    <p><b>Key Contributions:</b></p>
    <ul>
      <li>Led frontend development of <a href="https://stage.agentarc.ai/">Agent Arc</a>, a <b>non-custodial AI trading terminal</b> on Solana; integrated <b>AI/ML trading APIs</b> into the execution flow.</li>
      <li>Implemented secure <b>Privy login & token authentication</b>, reducing onboarding friction for 100+ users.</li>
      <li>Integrated staking smart contracts for <b>on-chain fee handling</b> via ABI contracts.</li>
      <li>Project won 🏆 <b>3rd Prize in the AI Track ($15,000)</b> at the Solana Breakout Hackathon, selected from <b>8,300+ global submissions</b>.</li>
    </ul>
  </div>
</div>

<div class="project0">
  <div class="image-container0">
    {% include figure.liquid loading="eager" path="assets/img/lovum.png" %}
  </div>
  <div class="project-details0">
    <div class="heading">
      <a href="http://lovumgroup.com/" target="_blank" rel="noopener noreferrer">
        <h3>Lovum Group</h3>
      </a>
      <span class="timeline">Jan 2024 – Dec 2025</span>
    </div>
    <p>Position: <strong>Software Engineer (Part-Time, Contract)</strong></p>
    <p>Location: <strong>Remote (United States)</strong></p>
    <p><b>Key Contributions:</b></p>
    <ul>
      <li>Worked on two of their products, <a href="https://eduessential.com/" target="_blank"><strong>EduEssential</strong></a> and <a href="https://beta.waridibody.com/" target="_blank"><strong>Waridi</strong></a>, a learning platform and a healthcare one.</li>
      <li>Built the <b>Next.js</b> frontends and the <b>Python APIs</b> behind them, and worked on getting both to scale.</li>
      <li>Wired up the backend integrations behind their <b>AI-driven personalisation</b> features.</li>
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
      <a href="https://www.profecialinks.com/">
        <h3>Profecia Links</h3>
      </a>
      <span class="timeline">May 2022 – Aug 2022</span>
    </div>
    <p>Position: <strong>Software Engineer Grade A1</strong></p>
    <p>Location: <strong>Remote (Abu Dhabi, United Arab Emirates)</strong></p>
    <p><b>Key Contributions:</b></p>
    <ul>
      <li>Automated client <b>data-extraction workflows</b> with Import.io, which cut out a lot of manual collection.</li>
    </ul>
    <p><b>Experience Letter:</b> <a href="https://drive.google.com/file/d/1IZBQOztEgZVa7fb_5NYIrBr7p4Pd-7eb/view?usp=sharing" target="_blank">View Document</a></p>
  </div>
</div>
