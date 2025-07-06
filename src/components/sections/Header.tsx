
// NOTE: This is an auto-generated file from VibeBuilder.
import React from 'react';

const Header = () => {
  return (
    <>
      <style>{`
 :root {
  --color-brand-black: #0A0A0A;
  --color-brand-accent: rgb(47, 124, 83);
  --color-brand-white: #FFFFFF;
  --color-grey-darkest: #111111;
  --color-grey-dark: #1C1C1C;
  --color-grey-medium: #555555;
  --color-grey-light: #A0A0A0;
  --font-primary: 'Inter', sans-serif;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
 }

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 html {
  scroll-behavior: smooth;
 }

 body {
  font-family: var(--font-primary);
  background-color: var(--color-brand-black);
  color: var(--color-grey-light);
  line-height: 1.7;
  font-weight: var(--font-weight-light);
  display: flex;
  flex-direction: column;
 }

 body.mobile-nav-open {
  overflow: hidden;
 }

 .container {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
 }

 a {
  color: var(--color-brand-accent);
  text-decoration: none;
 }

 h1,
 h2,
 h3,
 h4 {
  font-weight: var(--font-weight-bold);
  color: var(--color-brand-white);
  margin: 0;
 }

 h2.section-title {
  font-size: clamp(2rem, 5vw, 2.8rem);
  text-align: center;
  margin-bottom: 1.5em;
  font-weight: var(--font-weight-bold);
 }

 .section-title-subtext {
  text-align: center;
  max-width: 65ch;
  margin: -1.5em auto 3em auto;
 }

 p {
  margin-bottom: 1.5em;
 }

 /* --- START: NAVIGATION STYLES --- */
 header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 10px 5vw;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
 }

 header.scrolled {
  background-color: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
 }

 header .header-inner-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
 }

 .logo-area {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
 }

 .header-logo-img {
  height: 55px;
  width: auto;
  display: block;
 }

 .main-nav {
  margin-left: auto;
  margin-right: auto;
 }

 .main-nav-list {
  display: flex;
  align-items: center;
  list-style: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  padding: 5px;
  background-color: rgba(13, 13, 13, 0.3);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
 }

 .main-nav-item {
  position: relative;
 }

 .main-nav-link {
  display: block;
  color: var(--color-grey-light);
  text-decoration: none;
  padding: 8px 22px;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  white-space: nowrap;
 }

 .main-nav-link:hover {
  color: var(--color-brand-white);
 }

 .main-nav-link.active-link {
  color: var(--color-brand-white);
  font-weight: var(--font-weight-normal);
 }

 .main-nav-link.cta-button {
  background-color: var(--color-brand-accent);
  color: var(--color-brand-white);
  border-radius: 50px;
  padding: 8px 25px;
  margin-left: 10px;
  transition: background-color 0.3s ease;
 }

 .main-nav-link.cta-button:hover {
  background-color: rgb(60, 150, 100);
  text-decoration: none;
  color: var(--color-brand-white);
 }

 .dropdown-menu {
  position: absolute;
  left: 50%;
  top: calc(100% + 10px);
  background-color: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
  min-width: 180px;
  z-index: 1010;
  padding: 8px 0;
  visibility: hidden;
  opacity: 0;
  transform: translateX(-50%) translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
 }

 .main-nav-item:hover .dropdown-menu {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
 }

 .dropdown-menu a {
  color: var(--color-brand-white);
  padding: 10px 20px;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 0.95rem;
  font-weight: var(--font-weight-light);
  transition: background-color 0.2s ease;
 }

 .dropdown-menu a:hover {
  background-color: rgba(47, 124, 83, 0.5);
  text-decoration: none;
 }

 .main-nav-link .fa-chevron-down {
  font-size: 0.7em;
  margin-left: 6px;
  transition: transform 0.3s ease;
 }

 .main-nav-item:hover .main-nav-link .fa-chevron-down {
  transform: rotate(180deg);
 }

 .mobile-nav-toggle {
  display: none;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1002;
 }

 .mobile-nav-toggle .fa-bars,
 .mobile-nav-toggle .fa-times {
  color: var(--color-brand-white);
  font-size: 1.5rem;
 }

 .mobile-nav-toggle .fa-times {
  display: none;
 }

 .mobile-nav-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 80%;
  max-width: 300px;
  height: 100%;
  background-color: rgba(13, 13, 13, 0.8);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  z-index: 1001;
  transition: left 0.3s ease-in-out;
  padding: 80px 30px 30px;
  display: flex;
  flex-direction: column;
 }

 .mobile-nav-menu a {
  color: var(--color-grey-light);
  font-size: 1.2rem;
  padding: 15px 0;
  text-decoration: none;
 }

 .mobile-nav-menu .mobile-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 15px 0;
 }

 body.mobile-nav-open .mobile-nav-menu {
  left: 0;
 }

 body.mobile-nav-open .mobile-nav-toggle .fa-bars {
  display: none;
 }

 body.mobile-nav-open .mobile-nav-toggle .fa-times {
  display: block;
 }

 /* --- END: NAVIGATION STYLES --- */

 /* Hero Section */
 .scrollable-content {
  position: relative;
  z-index: 1;
  flex-grow: 1;
 }

 .hero-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-left: 5vw;
  padding-right: 5vw;
  position: relative;
  overflow: hidden;
  justify-content: flex-end;
  padding-bottom: 15vh;
 }

 .hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.7);
  z-index: 1;
 }

 .hero-text-group {
  max-width: 800px;
  position: relative;
  z-index: 2;
 }

 .hero-headline {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: var(--font-weight-bold);
  line-height: 1.1;
  margin-bottom: 25px;
 }

 .hero-subheadline {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  font-weight: var(--font-weight-light);
  color: var(--color-grey-light);
  max-width: 65ch;
 }

 #hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
 }

 /* Other Sections */
 .content-section {
  padding: 120px 20px;
 }

 .divider {
  width: 80px;
  height: 3px;
  background-color: var(--color-brand-accent);
  margin: 0 auto 40px auto;
  border-radius: 2px;
 }

 .blurred-section {
  background-color: rgba(13, 13, 13, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
 }

 .dark-bg-section {
  background-color: var(--color-brand-black);
  border-top: 1px solid var(--color-grey-darkest);
  border-bottom: 1px solid var(--color-grey-darkest);
 }

 .feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
 }

 .feature-item h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
 }

 .feature-icon {
  color: var(--color-brand-accent);
  font-size: 1.5rem;
 }

 /* --- TEAM CAROUSEL STYLES --- */
 .team-carousel-container {
  position: relative;
  padding: 0 50px;
 }

 .swiper-slide {
  text-align: center;
 }

 .team-member-card {
  display: flex;
  flex-direction: column;
  align-items: center;
 }

 .team-photo-link {
  display: block;
  position: relative;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 25px;
  border: 4px solid var(--color-grey-dark);
 }

 .team-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  transition: transform 0.3s ease, filter 0.3s ease;
 }

 .photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(47, 124, 83, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
 }

 .photo-overlay .fa-envelope {
  color: var(--color-brand-white);
  font-size: 4rem;
 }

 .team-photo-link:hover .photo-overlay {
  opacity: 1;
 }

 .team-photo-link:hover .team-photo {
  transform: scale(1.05);
  filter: brightness(0.6);
 }

 .team-member-card h3 {
  font-size: 1.6rem;
  margin-bottom: 5px;
 }

 .team-member-card .title {
  color: var(--color-brand-accent);
  font-weight: var(--font-weight-medium);
  font-size: 1rem;
 }

 .swiper-button-next,
 .swiper-button-prev {
  width: 50px;
  height: 50px;
  background-color: rgba(10, 10, 10, 0.5);
  border-radius: 50%;
  transition: background-color 0.2s ease;
 }

 .swiper-button-next:hover,
 .swiper-button-prev:hover {
  background-color: var(--color-brand-accent);
 }

 .swiper-button-next:after,
 .swiper-button-prev:after {
  font-size: 1.2rem;
  color: var(--color-brand-white);
  font-weight: 900;
 }

 .swiper-button-prev {
  left: 0;
 }

 .swiper-button-next {
  right: 0;
 }

 /* --- MARKET SEGMENT CARD STYLES --- */
 .category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
 }

 .category-card {
  border-radius: 12px;
  padding: 20px;
  min-height: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  transition: transform 0.3s ease-out;
 }

 .category-card:hover {
  text-decoration: none;
 }

 .card-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
  filter: grayscale(100%) blur(8px);
  transition: filter 0.4s ease;
 }

 .category-card:hover .card-background {
  filter: grayscale(100%) blur(0px);
 }

 #gym-card .card-background {
  background-image: url('https://storage.googleapis.com/intro_alphatek/gym.jpg');
 }

 #clinics-card .card-background {
  background-image: url('https://storage.googleapis.com/intro_alphatek/clinics.jpg');
 }

 #sport-card .card-background {
  background-image: url('https://storage.googleapis.com/intro_alphatek/sport.jpg');
 }

 .card-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
 }

 .card-content-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 }

 .category-card h3,
 .category-card p {
  color: var(--color-brand-white);
  transition: color 0.3s ease;
 }

 .category-card h3 {
  margin-bottom: 8px;
  font-size: 1.6rem;
  font-weight: var(--font-weight-light);
 }

 .category-card p {
  font-size: 0.85rem;
  line-height: 1.4;
  font-weight: var(--font-weight-light);
  margin-bottom: 0;
 }

 .header-cta-button {
  background-image: linear-gradient(45deg, var(--color-brand-accent), #218c54);
  color: var(--color-brand-white);
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: none;
 }

 .header-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
 }

 footer {
  background-color: var(--color-brand-black);
  color: var(--color-grey-medium);
  text-align: center;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
 }

 @media (max-width: 992px) {
  .main-nav {
  display: none;
  }
  .mobile-nav-toggle {
  display: block;
  }
  .logo-area {
  position: static;
  transform: none;
  }
  .header-inner-container {
  justify-content: center;
  }
 }

 @media (max-width: 768px) {
  .header-inner-container {
  justify-content: space-between;
  }
 }
  `}</style>
      <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Alphatek - Pioneering Human Performance</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" xintegrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- Swiper.js CSS for the carousel -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
  
 </head>
 <body>
  <header id="main-header">
  <div class="header-inner-container">
   <div class="logo-area">
    <a href="../index.html" class="logo">
     <img src="https://storage.googleapis.com/intro_alphatek/logo.png" alt="Alphatek Logo" class="header-logo-img">
    </a>
   </div>
   <nav class="main-nav">
    <ul class="main-nav-list">
     <li class="main-nav-item"><a href="../segments/sports.html" class="main-nav-link">For Teams</a></li>
     <li class="main-nav-item"><a href="../segments/gym.html" class="main-nav-link">For Gyms</a></li>
     <li class="main-nav-item"><a href="../segments/physio.html" class="main-nav-link">For Clinicians</a></li>
     <li class="main-nav-item">
      <a href="#" class="main-nav-link">Resources <i class="fas fa-chevron-down"></i></a>
      <div class="dropdown-menu">
       <a href="../Rescources/Alphatek Research Library.html">Alphatek Research Library</a>
       <a href="#">Alphatek Academy</a>
       <a href="../Blog/blog recovery.html">Blogpost</a>
       <a href="#">Case Studies</a>
      </div>
     </li>
     <li class="main-nav-item">
      <a href="#" class="main-nav-link">Company <i class="fas fa-chevron-down"></i></a>
      <div class="dropdown-menu">
       <a href="../About us/about_us.html">About Us</a>
      </div>
     </li>
     <li class="main-nav-item"><a href="#contact" class="main-nav-link cta-button">Contact Us</a></li>
    </ul>
   </nav>
   <button class="mobile-nav-toggle" aria-label="Toggle navigation">
    <i class="fas fa-bars"></i>
    <i class="fas fa-times"></i>
   </button>
  </div>
  </header>
  <nav class="mobile-nav-menu">
  <a href="../segments/sports.html">For Teams</a>
  <a href="../segments/gym.html">For Gyms</a>
  <a href="../segments/physio.html">For Clinicians</a>
  <div class="mobile-divider"></div>
  <a href="../Rescources/Alphatek Research Library.html">Alphatek Research Library</a>
  <a href="#">Alphatek Academy</a>
  <a href="../Blog/blog recovery.html">Blogpost</a>
  <a href="#">Case Studies</a>
  <div class="mobile-divider"></div>
  <a href="../About us/about_us.html">About Us</a>
  <div class="mobile-divider"></div>
  <a href="#contact">Contact Us</a>
  </nav>
  <main class="scrollable-content">
  <section class="hero-section">
   <video autoplay loop muted playsinline id="hero-video">
    <!-- --- UPDATED VIDEO SOURCE --- -->
    <source src="https://storage.googleapis.com/files_webpage/Experience%20realtime%20feedback%204_3%20%E2%80%93%20Laget%20med%20Clipchamp.mp4" type="video/mp4">
    Your browser does not support the video tag.
   </video>
   <div class="hero-text-group">
    <h1 class="hero-headline">Strength deserves better data.</h1>
    <p class="hero-subheadline">We close the gap between effort and insight, delivering real-time feedback and precision metrics to strength, rehab, and performance training.</p>
   </div>
  </section>
  <section class="content-section dark-bg-section">
   <div class="container">
    <div class="divider"></div>
    <h2 class="section-title">Rooted in Research. Ready for Reality.</h2>
    <div class="feature-grid" style="max-width: 1000px; margin: auto;">
     <div class="feature-item">
      <h3><i class="fas fa-flask feature-icon"></i>Grounded in Science</h3>
      <p>Our platform is built on established biomechanical principles, developed in collaboration with the Norwegian School of Sport Sciences.</p>
     </div>
     <div class="feature-item">
      <h3><i class="fas fa-bullseye feature-icon"></i>Actionable Insight</h3>
      <p>We transform complex data into clear, actionable feedback that guides every rep and informs long-term programming.</p>
     </div>
     <div class="feature-item">
      <h3><i class="fas fa-magic-wand-sparkles feature-icon"></i>Intuitive Experience</h3>
      <p>From instant onboarding to automatic progress tracking, the entire user experience is designed to be powerful, yet seamless.</p>
     </div>
    </div>
   </div>
  </section>
  <section class="content-section blurred-section">
   <div class="container">
    <div class="divider"></div>
    <h2 class="section-title">Meet the Innovators</h2>
    <p class="section-title-subtext">Our strength is our multidisciplinary team, combining expertise from sports science, engineering, and business to push the boundaries of performance technology.</p>
    <div class="team-carousel-container">
     <div class="swiper">
      <div class="swiper-wrapper">
       <!-- Ola Næss Kaldestad -->
       <div class="swiper-slide">
        <div class="team-member-card">
         <a href="mailto:ola.kaldestad@alphatek.com" class="team-photo-link">
          <img src="https://storage.googleapis.com/files_webpage/Team%20member%20pictures/ONK.jpg" alt="Photo of Ola Næss Kaldestad" class="team-photo">
          <div class="photo-overlay"><i class="fas fa-envelope"></i></div>
         </a>
         <h3>Ola Næss Kaldestad</h3>
         <span class="title">CEO & System Architect</span>
        </div>
       </div>
       <!-- Erik Vassøy Olsen -->
       <div class="swiper-slide">
        <div class="team-member-card">
         <a href="mailto:erik.olsen@alphatek.com" class="team-photo-link">
          <img src="https://storage.googleapis.com/files_webpage/Team%20member%20pictures/EVO.jpg" alt="Photo of Erik Vassøy Olsen" class="team-photo">
          <div class="photo-overlay"><i class="fas fa-envelope"></i></div>
         </a>
         <h3>Erik Vassøy Olsen</h3>
         <span class="title">CFO & Mechanical Design</span>
        </div>
       </div>
       <!-- Aleksander Ferkingstad -->
       <div class="swiper-slide">
        <div class="team-member-card">
         <a href="mailto:aleksander.ferkingstad@alphatek.com" class="team-photo-link">
          <img src="https://storage.googleapis.com/files_webpage/Team%20member%20pictures/AKF.jpg" alt="Photo of Aleksander Ferkingstad" class="team-photo">
          <div class="photo-overlay"><i class="fas fa-envelope"></i></div>
         </a>
         <h3>Aleksander Ferkingstad</h3>
         <span class="title">Algorithm Development</span>
        </div>
       </div>
       <!-- Olav Risa -->
       <div class="swiper-slide">
        <div class="team-member-card">
         <a href="mailto:olav.risa@alphatek.com" class="team-photo-link">
          <img src="https://storage.googleapis.com/files_webpage/Team%20member%20pictures/OR.jpg" alt="Photo of Olav Risa" class="team-photo">
          <div class="photo-overlay"><i class="fas fa-envelope"></i></div>
         </a>
         <h3>Olav Risa</h3>
         <span class="title">Operations Manager</span>
        </div>
       </div>
       <!-- Åsmund Tveitevoll -->
       <div class="swiper-slide">
        <div class="team-member-card">
         <a href="mailto:asmund.tveitevoll@alphatek.com" class="team-photo-link">
          <img src="https://storage.googleapis.com/files_webpage/Team%20member%20pictures/%C3%85T.jpg" alt="Photo of Åsmund Tveitevoll" class="team-photo">
          <div class="photo-overlay"><i class="fas fa-envelope"></i></div>
         </a>
         <h3>Åsmund Tveitevoll</h3>
         <span class="title">Research Coordinator</span>
        </div>
       </div>
       <!-- Christian Stigler -->
       <div class="swiper-slide">
        <div class="team-member-card">
         <a href="mailto:christian.stigler@alphatek.com" class="team-photo-link">
          <img src="https://storage.googleapis.com/files_webpage/Team%20member%20pictures/CS.jpg" alt="Photo of Christian Stigler" class="team-photo">
          <div class="photo-overlay"><i class="fas fa-envelope"></i></div>
         </a>
         <h3>Christian Stigler</h3>
         <span class="title">Concept Development</span>
        </div>
       </div>
       <!-- Manuel Alfaro -->
       <div class="swiper-slide">
        <div class="team-member-card">
         <a href="mailto:manuel.alfaro@alphatek.com" class="team-photo-link">
          <img src="https://storage.googleapis.com/files_webpage/Team%20member%20pictures/MA.jpg" alt="Photo of Manuel Alfaro" class="team-photo">
          <div class="photo-overlay"><i class="fas fa-envelope"></i></div>
         </a>
         <h3>Manuel Alfaro</h3>
         <span class="title">Training & Onboarding</span>
        </div>
       </div>
       <!-- Marie Levin Matre -->
       <div class="swiper-slide">
        <div class="team-member-card">
         <a href="mailto:marie.matre@alphatek.com" class="team-photo-link">
          <img src="https://storage.googleapis.com/files_webpage/Team%20member%20pictures/MLM.png" alt="Photo of Marie Levin Matre" class="team-photo` }} />
    </>
  );
};

export default Header;
