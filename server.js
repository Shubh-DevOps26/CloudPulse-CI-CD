
const http = require("http");

const port = process.env.PORT || 3000;
const version = process.env.APP_VERSION || "v1";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>CloudPulse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #101827;
            color: white;
            text-align: center;
            padding: 80px 20px;
          }
          .card {
            max-width: 600px;
            margin: auto;
            padding: 35px;
            border-radius: 16px;
            background: #1e293b;
          }
          h1 { color: #60a5fa; }
          .status { color: #4ade80; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>CloudPulse Dashboard</h1>
          <h2 class="status">Application is Running!</h2>
          <p>Deployed using a DevOps CI/CD pipeline.</p>
          <p>Version: ${version}</p>
          <p>GitHub + Jenkins + Docker + Kubernetes</p>
        </div>
      </body>
    </html>
  `);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`CloudPulse running on port ${port}`);
});
