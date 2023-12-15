import { createServer } from "http";
import { readFile } from "fs";
import { join } from "path";

const server = createServer((req, res) => {
  if (req.url === "/") {
    readFile(
      join(__dirname, "views", "index.html"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "content-Type": "text/html" });
        res.end(data);
      }
    );
  }

  if (req.url === "/contact") {
    readFile(
      join(__dirname, "views", "contact.html"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "content-Type": "text/html" });
        res.end(data);
      }
    );
  }


});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`server running on ${PORT}`));
