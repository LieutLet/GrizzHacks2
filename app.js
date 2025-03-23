const http = require("http");
const fs = require("fs");
const path = require("path");

// Create the server
const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/button-click") {
        // Handle button click POST request
        let body = "";

        // Gather request data
        req.on("data", chunk => {
            body += chunk.toString();
        });

        // Process the complete data
        req.on("end", () => {
            const data = JSON.parse(body);
            console.log("Button clicked with data:", data);

            // Send a JSON response
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Button click received successfully!" }));
        });
    } else {
        // Serve static files
        let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

        // Check if the file exists
        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code === "ENOENT") {
                    // File not found: serve 404.html
                    fs.readFile(path.join(__dirname, "404.html"), (error404, errorContent) => {
                        res.writeHead(404, { "Content-Type": "text/html" });
                        res.end(errorContent || "404 Page Not Found", "utf-8");
                    });
                } else {
                    // Other errors
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Server Error");
                }
            } else {
                // Set correct content type
                const extname = path.extname(filePath);
                let contentType = "text/html";

                switch (extname) {
                    case ".js":
                        contentType = "text/javascript";
                        break;
                    case ".css":
                        contentType = "text/css";
                        break;
                    case ".json":
                        contentType = "application/json";
                        break;
                    case ".png":
                        contentType = "image/png";
                        break;
                    case ".jpg":
                        contentType = "image/jpeg";
                        break;
                }

                res.writeHead(200, { "Content-Type": contentType });
                res.end(content, "utf-8");
            }
        });
    }
});

// Start the server
server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
