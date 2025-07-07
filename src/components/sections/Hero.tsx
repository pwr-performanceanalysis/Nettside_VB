
// NOTE: This is an auto-generated file from VibeBuilder.
import React from 'react';

const Hero = () => {
  return (
    <>
      <style>{`
  .hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    text-align: center;
    background: linear-gradient(45deg, #f0f4f8, #d9e2ec);
    color: #1e3a8a;
    padding: 2rem;
    font-family: 'Inter', sans-serif;
  }
  .hero-container h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  }
  .hero-container p {
    font-size: 1.25rem;
    max-width: 600px;
    color: #3b5998;
  }
`}</style>
      <div dangerouslySetInnerHTML={{ __html: `
<div class="hero-container">
  <h1>Welcome to VibeBuilder</h1>
  <p>Your AI-powered partner for building stunning websites, one vibe at a time.</p>
</div>
          ` }} />
    </>
  );
};

export default Hero;
