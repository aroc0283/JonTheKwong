const links = {
  resume: "https://drive.google.com/file/d/1flM1zfMZK-unIDX7w3FOoRvPoTqaqZUU/view?usp=sharing",
  strategicPlan: "https://drive.google.com/file/d/1P5vL87CPGZZmomxN2_JOBHcuSMJxe4_K/view?usp=sharing",
  impactReport: "https://drive.google.com/file/d/1AbDnJfIhOIjfWFa3y5-TtQpFYasWK4_M/view?usp=sharing",
  mediaAdvisory: "https://drive.google.com/file/d/15n7DQfjiRARHN3McSIFRa-KDMfhcyl0j/view?usp=sharing",
  housingBook: "https://drive.google.com/file/d/19yniocGhSd0rlLTGAeJfHi5LpDGHp4Cr/view?usp=sharing",
  prPortfolio: "https://drive.google.com/file/d/1JxpF3xlnpPYvtAI04aHWpsgI7UaefqxR/view?usp=sharing",
  csiReport: "https://drive.google.com/file/d/1yo3EQckmdu8pJBW61pT7Kp-NIJmJxNKO/view?usp=sharing",
  herbertReport: "https://drive.google.com/file/d/1C42RufPwYB6QGYNFgjepPS0Nh2dwFqvx/view?usp=sharing",
  creativeStrategy: "https://drive.google.com/file/d/1BNWO9dFhP3ruMldDnGDO8mg4THZA-SJF/view?usp=sharing",
  pamphlet: "https://drive.google.com/file/d/1Jxo2Gssr1jzeEwLyuBfjoRJ6if1qqanS/view?usp=sharing",
  summit: "https://www.uvu.edu/herbertinstitute/events/2025-events/utah-data-governance-summit.html",
  manOnStreet: "https://www.instagram.com/reel/DKhqB9oRoK0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  hometownHeroes: "https://www.instagram.com/reel/DLFt7jFxlqX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  copdVideo: "https://drive.google.com/file/d/16Ay-zRO7Mt0PLrYGeC0ApnkDGVioXfQu/view?usp=sharing",
  instagram: "https://www.instagram.com/momentswithjon"
};

const projects = [
  {
    number: "01",
    title: "Civic Engagement Campaign",
    kicker: "Your Voice. Your Vote.",
    image: "https://static.wixstatic.com/media/142a3b_edd35849cacc43669912a22b01a1dc11~mv2.jpg/v1/fill/w_648,h_864,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/voting-2.jpg",
    heroImage: "https://static.wixstatic.com/media/142a3b_c167a00a87c54c1aa1b086129561a294~mv2.jpg/v1/crop/x_0,y_666,w_8192,h_1551/fill/w_3108,h_606,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20241120_HIPP_Campus%20Cup_JED_0178.jpg",
    summary: "Led Utah Valley University's 2024 civic engagement campaign to increase election-resource awareness and participation across the UVU community.",
    tags: ["Campaign Strategy", "Civic Engagement", "Event Outreach"],
    results: ["20 events in 10 weeks", "2,514 students registered", "7.33% of the student body", "First UVU Campus Cup win", "24,860 unique individuals reached", "Campus ballot drop box support"],
    actions: [
      ["Strategic Plan", links.strategicPlan],
      ["Impact Report", links.impactReport],
      ["Social Media", links.instagram]
    ]
  },
  {
    number: "02",
    title: "Affordable Housing PR Campaign",
    kicker: "Heber Valley policy communications",
    image: "https://static.wixstatic.com/media/142a3b_07a4f0a2c08049df896da4ef8fece9ac~mv2.png/v1/fill/w_648,h_864,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-07-10%20190314.png",
    heroImage: "https://static.wixstatic.com/media/142a3b_622cf27d31884805981db1489b9b6320~mv2.png/v1/fill/w_1080,h_1080,al_c,q_90,enc_avif,quality_auto/heber-pic-2.png",
    summary: "Helped develop a UVU public relations campaign addressing affordable single-family housing needs in the Heber Valley.",
    tags: ["Public Relations", "Policy", "Campaign Book"],
    results: ["Targeted Heber City Council", "Focused on essential-worker housing", "Balanced affordability with small-town living", "Protected wildlife and water resources"],
    actions: [["Campaign Book", links.housingBook]]
  },
  {
    number: "03",
    title: "Utah Data Governance Summit",
    kicker: "Privacy. Transparency. Use.",
    image: "https://static.wixstatic.com/media/142a3b_ab01aa5d4dfa474285df68ac077a576f~mv2.jpg/v1/fill/w_648,h_864,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DGS_Primary%20Logo.jpg",
    heroImage: "https://static.wixstatic.com/media/142a3b_94b2bb96f69345e2aaca1bdb010dccec~mv2.jpg/v1/fill/w_692,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/142a3b_94b2bb96f69345e2aaca1bdb010dccec~mv2.jpg",
    summary: "Supported the statewide summit hosted by the Herbert Institute for Public Policy and Utah's Office of Data Privacy.",
    tags: ["Event Communications", "Website", "Media Kit"],
    results: ["600-person event", "Communications liaison for 30+ speakers and sponsors", "Built and maintained event website pages", "Managed social strategy and breakout rooms", "Coordinated photo and video studio", "Assisted program design"],
    actions: [["Summit Website", links.summit]]
  },
  {
    number: "04",
    title: "Social Media",
    kicker: "Herbert Institute content hub",
    image: "https://static.wixstatic.com/media/142a3b_b35075b72dba43c2bfefdeea76e6d4a2~mv2.jpg/v1/fill/w_648,h_864,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/socials.jpg",
    heroImage: "https://static.wixstatic.com/media/142a3b_b5d46b8ddb054139ad810fcc4ac6b0ad~mv2.jpg/v1/fit/w_1392,h_928,q_90,enc_avif,quality_auto/142a3b_b5d46b8ddb054139ad810fcc4ac6b0ad~mv2.jpg",
    summary: "Developed, executed, and edited social content with emphasis on civic education, policy interviews, event recaps, and community-facing video.",
    tags: ["Social Strategy", "Reels", "Content Editing"],
    results: ["98% Instagram follower growth", "60% increase in post engagements", "Civic deadline and voter-guide content", "Event recap content", "Interview-style policy reels", "Promotional conference video"],
    actions: [
      ["Man on the Street", links.manOnStreet],
      ["Hometown Heroes", links.hometownHeroes],
      ["COPD Video", links.copdVideo]
    ],
    id: "case-social-media"
  },
  {
    number: "05",
    title: "Engaging in Utah State Politics",
    kicker: "Educational pamphlet",
    image: "https://static.wixstatic.com/media/142a3b_e092fdb48cd44526bee6f7d07f257c1b~mv2.png/v1/fill/w_298,h_644,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/142a3b_e092fdb48cd44526bee6f7d07f257c1b~mv2.png",
    heroImage: "https://static.wixstatic.com/media/142a3b_46cd6885f6404dd2936fb229a404cff9~mv2.png/v1/fill/w_298,h_644,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/142a3b_46cd6885f6404dd2936fb229a404cff9~mv2.png",
    summary: "Created an educational pamphlet to help community members engage with the Utah Legislature during the annual legislative session.",
    tags: ["Public Education", "Print", "Legislature"],
    results: ["Explains state-legislature engagement", "Designed for community access", "Supports annual legislative-session participation", "Direct pamphlet access included"],
    actions: [["Pamphlet", links.pamphlet]]
  },
  {
    number: "06",
    title: "Like a Warm Hug",
    cardTitle: "Advertising Creative Strategy",
    kicker: "Advertising creative strategy",
    image: "https://static.wixstatic.com/media/142a3b_844acf2ea3094d0aa9542cf99b28730e~mv2.png/v1/fill/w_648,h_864,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-07-10%20185452.png",
    heroImage: "https://static.wixstatic.com/media/142a3b_844acf2ea3094d0aa9542cf99b28730e~mv2.png/v1/fill/w_648,h_864,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-07-10%20185452.png",
    summary: "A Campbell's Company advertising creative strategy with background research, SWOT analysis, objectives, strategies, and tactics.",
    tags: ["Advertising", "Creative Strategy", "Research"],
    results: ["Historical company background", "SWOT analysis", "Campaign objectives", "Strategy and tactics proposal"],
    actions: [["Full Proposal", links.creativeStrategy]]
  }
];

const writingGroups = [
  {
    title: "01 // Civic Engagement Campaign",
    docs: [
      ["Communication Plan", links.strategicPlan],
      ["Post-campaign Report", links.impactReport],
      ["Media Advisory", links.mediaAdvisory]
    ]
  },
  {
    title: "02 // Affordable Housing Campaign",
    docs: [["Campaign Workbook", links.housingBook]]
  },
  {
    title: "03 // COMM 3530 PR Writing Materials",
    docs: [["Complete Portfolio", links.prPortfolio]]
  },
  {
    title: "04 // Annual Reports",
    docs: [
      ["CSI Inaugural Impact Report: Alumni Spotlights", links.csiReport],
      ["Herbert Institute Annual Report", links.herbertReport]
    ]
  },
  {
    title: "05 // Advertising Creative Strategy",
    docs: [["Like a Warm Hug Full Proposal", links.creativeStrategy]]
  }
];

const albums = {
  color: [
    "https://static.wixstatic.com/media/142a3b_f7deaef43edb435c8113973e19bd808f~mv2.webp/v1/fill/w_840,h_1119,q_90,enc_avif,quality_auto/142a3b_f7deaef43edb435c8113973e19bd808f~mv2.webp",
    "https://static.wixstatic.com/media/142a3b_3deee9fe66ac413fbbc6d703409d8085~mv2.webp/v1/fill/w_840,h_1119,q_90,enc_avif,quality_auto/142a3b_3deee9fe66ac413fbbc6d703409d8085~mv2.webp",
    "https://static.wixstatic.com/media/142a3b_22d7f7b07d264607967a0fbb0390d6d5~mv2.webp/v1/fill/w_840,h_1119,q_90,enc_avif,quality_auto/142a3b_22d7f7b07d264607967a0fbb0390d6d5~mv2.webp",
    "https://static.wixstatic.com/media/142a3b_71f03ee8d1ed4cc1aa92dd05649dd490~mv2.webp/v1/fill/w_840,h_1119,q_90,enc_avif,quality_auto/142a3b_71f03ee8d1ed4cc1aa92dd05649dd490~mv2.webp"
  ],
  cinematic: [
    "https://static.wixstatic.com/media/142a3b_8b5d3f17bf8e46c0b3e32454cbd1283d~mv2.jpg/v1/fill/w_897,h_1194,q_90,enc_avif,quality_auto/142a3b_8b5d3f17bf8e46c0b3e32454cbd1283d~mv2.jpg",
    "https://static.wixstatic.com/media/142a3b_af1f842b32e34ed99a1025d01e079b0e~mv2.jpg/v1/fill/w_897,h_1194,q_90,enc_avif,quality_auto/142a3b_af1f842b32e34ed99a1025d01e079b0e~mv2.jpg",
    "https://static.wixstatic.com/media/142a3b_2f2a981c52aa46888b7e58de175aa712~mv2.jpg/v1/fill/w_897,h_1194,q_90,enc_avif,quality_auto/142a3b_2f2a981c52aa46888b7e58de175aa712~mv2.jpg",
    "https://static.wixstatic.com/media/142a3b_1e35240c93024207a6636938c12a465e~mv2.jpg/v1/fill/w_897,h_1194,q_90,enc_avif,quality_auto/142a3b_1e35240c93024207a6636938c12a465e~mv2.jpg"
  ]
};

function icon(name) {
  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function externalAttrs(href) {
  return href.startsWith("#") ? "" : ' target="_blank" rel="noreferrer"';
}

function renderProjects() {
  const grid = document.querySelector("#projectGrid");

  grid.innerHTML = projects.map((project, index) => `
    <article class="project-card">
      <img src="${project.image}" alt="${project.title}">
      <div class="project-card-body">
        <h3>${project.cardTitle || project.title}</h3>
        <button class="project-link" type="button" data-project-index="${index}">
          View Project
          ${icon("arrow-right")}
        </button>
      </div>
    </article>
  `).join("");
}

function renderWriting() {
  const list = document.querySelector("#writingList");
  const docs = writingGroups.flatMap((group) => group.docs);
  list.innerHTML = docs.map(([label, href]) => `
    <a class="doc-item" href="${href}" target="_blank" rel="noreferrer">
      <span>${label}</span>
      ${icon("arrow-right")}
    </a>
  `).join("");
}

function openProjectDialog(index) {
  const project = projects[index];
  const dialog = document.querySelector("#projectDialog");
  const content = document.querySelector("#projectDialogContent");
  content.innerHTML = `
    <article class="dialog-hero">
      <img src="${project.heroImage}" alt="${project.title}">
      <div class="dialog-copy">
        <p class="eyebrow">${project.number} / ${project.kicker}</p>
        <h2 id="dialogTitle">${project.title}</h2>
        <p>${project.summary}</p>
        <ul class="result-list">
          ${project.results.map((result) => `<li>${result}</li>`).join("")}
        </ul>
        <div class="case-actions">
          ${project.actions.map(([label, href]) => `
            <a class="button" href="${href}"${externalAttrs(href)}>
              ${icon(href.startsWith("#") ? "arrow-down" : "external-link")}
              ${label}
            </a>
          `).join("")}
        </div>
      </div>
    </article>
  `;
  dialog.showModal();
  document.body.classList.add("dialog-open");
  refreshIcons();
}

function renderAlbum(albumName = "color") {
  const grid = document.querySelector("#photoGrid");
  grid.innerHTML = albums[albumName].map((src, index) => `
    <img src="${src}" alt="${albumName === "color" ? "In Full Color" : "Life Cinematic"} photograph ${index + 1}">
  `).join("");
}

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
}

function setupProjectDialog() {
  const dialog = document.querySelector("#projectDialog");
  document.querySelector("#projectGrid").addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-project-index]");
    if (!trigger) return;
    openProjectDialog(Number(trigger.dataset.projectIndex));
  });
  document.querySelector("[data-close-dialog]").addEventListener("click", () => {
    dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
  });
}

function setupGalleryDialog() {
  const dialog = document.querySelector("#galleryDialog");
  document.querySelector("[data-open-gallery]").addEventListener("click", () => {
    renderAlbum("color");
    dialog.showModal();
    document.body.classList.add("dialog-open");
    refreshIcons();
  });
  document.querySelector("[data-close-gallery]").addEventListener("click", () => {
    dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
  });
}

function setupAlbums() {
  const tabs = document.querySelectorAll(".album-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      renderAlbum(tab.dataset.album);
      refreshIcons();
    });
  });
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

renderProjects();
renderWriting();
renderAlbum();
setupNavigation();
setupProjectDialog();
setupGalleryDialog();
setupAlbums();
refreshIcons();
