const fs = require("fs");
const path = require("path");

const dirPath = "./files";

fs.readdir(dirPath, (err, files) => {
    if (err) return console.error(err);

    for (const file of files) {
        const ext = path.extname(file).slice(1);
        if (!ext || ext === "js" || ext === "json") continue;

        const folderPath = path.join(dirPath, ext);
        const src = path.join(dirPath, file);
        const dest = path.join(folderPath, file);

        fs.mkdir(folderPath, { recursive: true }, err => {
            if (err) return console.error(err);

            fs.copyFile(src, dest, err => {
                if (err) console.error(err);
            });
        });
    }
});



//better solution with promises and async/await

// const fs = require("fs/promises");
// const path = require("path");

// async function organizeFiles(dirPath) {
//   const files = await fs.readdir(dirPath);

//   for (const file of files) {
//     const ext = path.extname(file).slice(1);
//     if (!ext || ext === "js" || ext === "json") continue;

//     const folderPath = path.join(dirPath, ext);
//     await fs.mkdir(folderPath, { recursive: true });

//     await fs.rename(
//       path.join(dirPath, file),
//       path.join(folderPath, file)
//     );
//   }
// }

// organizeFiles("./files").catch(console.error);