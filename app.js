const http = require("http");
const fs = require("fs");
const path = require("path");

// Create the server
const server = http.createServer((req, res) => {
    // Determine the file to serve based on the requested URL
    let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

    // Check if the requested file exists
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                // File not found: Serve a 404 page
                fs.readFile(path.join(__dirname, "404.html"), (error404, errorContent) => {
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.end(errorContent || "404 Page Not Found", "utf-8");
                });
            } else {
                // Other server errors
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Server Error");
            }
        } else {
            // Successfully serve the requested file
            const extname = path.extname(filePath);
            let contentType = "text/html";

            // Set the correct content type for different file types
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
});

// Start the server
server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
