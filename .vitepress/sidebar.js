import fs from "fs";
import path from "path";

function getTitle(filePath, fallback) {
  const content = fs.readFileSync(filePath, "utf-8");

  const match = content.match(/^#\s+(.+)/m);

  return match ? match[1].trim() : fallback;
}

function scan(dir, base = "") {
  const items = [];

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      items.push({
        text: file,
        items: scan(fullPath, base + "/" + file),
      });
    } else if (file.endsWith(".md") && file !== "index.md") {
      const name = file.replace(".md", "");

      items.push({
        text: getTitle(fullPath, name),
        link: base + "/" + name,
      });
    }
  }

  return items;
}

export const sidebar = [
  {
    text: "Lambdark API",
    items: scan("./lambdark", "/lambdark"),
  },
];