
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_sites");

export function getSiteSlugs() {
  return fs.readdirSync(postsDirectory);
}


export default function index() {
  const { data, content } = matter(fileContents);

    return (
      <div>
    <div>
      <h1>MODESPACE</h1>
      <p>A collection of well designed websites to draw inspiration from.</p>
    </div>
    <div id='filters'>

    </div>
    <div id='results'>
      {getSiteSlugs()}
    </div>
    </div>
    );
  }