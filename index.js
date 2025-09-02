import fs from "fs/promises";
import fsn from "fs";
import path from "path";

let basepath = ""; //base path
let files = await fs.readdir(basepath);
console.log(path);

for (const file of files) {
  //  let ext = file.split(".")[file.split(".").length - 1];

  let extension = file.split(".").pop();

  if (
    extension &&
    !["js", "html", "css", "json"].includes(extension) &&
    file.split(".").length > 1
  ) {
    //Checks is there any directory/ folder available with ext name
    if (fsn.existsSync(path.join(basepath, extension))) {
      //Move the file inside the directory or folder
      await fs.rename(
        path.join(basepath, file),
        path.join(basepath, extension, file)
      );
    } else {
      await fs.mkdir(extension);
      fs.rename(
        path.join(basepath, file),
        path.join(basepath, extension, file)
      );
    }
  }
}
