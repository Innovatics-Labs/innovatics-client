import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  try {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), "json");
    //Read the json data file bootcamps.json
    const fileContents = await fs.readFile(
      jsonDirectory + "/bootcamps.json",
      "utf8"
    );

    //Return the content of the bootcamps file in json format
    return res.status(200).json(JSON.parse(fileContents));
    // return JSON.parse(json);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
