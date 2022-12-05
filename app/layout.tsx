import React from "react";

const layout = ({ children }) => {
  return (
    <html>
      <head>
        <title>Next.js 13</title>
      </head>

      <body>
        <nav>Next.js 13</nav>
        {children}
      </body>
    </html>
  );
};

export default layout;
