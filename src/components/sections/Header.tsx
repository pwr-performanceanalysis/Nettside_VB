
// NOTE: This is an auto-generated file from VibeBuilder.
import React from 'react';

const Header = () => {
  return (
    <>
      <style>{`.frosted-glass-container {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.frosted-glass-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  filter: blur(10px);
  z-index: -1;
}

.frosted-glass-content {
  padding: 20px;
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 1;
}

body {
  background: url('https://images.unsplash.com/photo-1483729558042-f63372d571bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: sans-serif;
}
`}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div class="frosted-glass-container">
  <div class="frosted-glass-content">
    <h2>Frosted Glass Effect</h2>
    <p>This is a modern example of the frosted glass effect using CSS.</p>
  </div>
</div>` }} />
    </>
  );
};

export default Header;
