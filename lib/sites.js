import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const sitesDir = path.join(process.cwd(), 'public/_sites')
const siteFileSlugs = fs.readdirSync(sitesDir).map((fileName) => fileName.replace(/\.md$/, ''))

// Get slug and frontmatter from sites
export function getSites() {
    //create an object to store all the sites and return them
    const sites = siteFileSlugs.map((slug) => {
           
        const{ data, content } = matter(fs.readFileSync(path.join(sitesDir, `${slug}.md`)))
        return {slug,...data,};    
    })

    //for each site file, get the data and add it to the object

    return sites
  
}


export function getTags(){
    //returns a list of all possible tags
}

