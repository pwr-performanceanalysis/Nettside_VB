
// NOTE: This is an auto-generated file from VibeBuilder.
import React from 'react';

const Hero = () => {
  return (
    <>
      <style>{`
body {
  background-color: #222;
  color: #fff;
}

a {
  color: #87CEEB;
}

a:hover {
  color: #ADD8E6;
}

.container {
  background-color: #333;
  border: 1px solid #555;
}

.header {
  background-color: #444;
}

.footer {
  background-color: #444;
}

button {
  background-color: #555;
  color: #fff;
  border: none;
}

button:hover {
  background-color: #777;
}
`}</style>
      <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html>
<head>
  <title>Dark Mode Example</title>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome</h1>
    </div>
    <p>This is a dark mode example.</p>
    <a href="#">Link</a>
    <button>Click me</button>
    <div class="footer">
      <p>&copy; 2024</p>
    </div>
  </div>
</body>
</html>` }} />
    </>
  );
};

export default Hero;
