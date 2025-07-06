
// NOTE: This is an auto-generated file from VibeBuilder.
// Any changes made here will be overwritten on the next 'Generate Files' run.
import React from 'react';

const Features = () => {
  return (
    <>
      <style>{`
    .features-section {
        padding: 4rem 2rem;
        background-color: #ffffff;
        text-align: center;
    }
    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 2rem auto 0;
    }
    .feature-card {
        background-color: #f0f4f8;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    .feature-card h3 {
        font-size: 1.5rem;
        color: #1e3a8a;
        margin-bottom: 1rem;
    }
`}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div class="features-section">
    <h2>Features</h2>
    <div class="features-grid">
        <div class="feature-card"><h3>Visual Builder</h3><p>Intuitively design your site structure.</p></div>
        <div class="feature-card"><h3>AI Content</h3><p>Generate section code with a single prompt.</p></div>
        <div class="feature-card"><h3>Live Preview</h3><p>See your changes instantly in the canvas.</p></div>
    </div>
</div>` }} />
    </>
  );
};

export default Features;
