
import { getSites, getTags } from '../lib/sites'
import Site from '../_components/Site';
import FilterControl from '../_components/FilterControl';
import React, {createContext, useState} from "react";


export const SelectedTagsContext = createContext(null);

function compareSites(a, b){
  if (a.title < b.title) {
    return -1;
  } else if (a.title > b.title) {
    return 1;
  }
  // a must be equal to b
  return 0;
}


export default function Index({ sites, tags }) {
  const [selectedTags, setTags] = useState([]);

  function containsSelectedTag(selectedTs, siteTs) {
    return !selectedTs.some(item => siteTs.includes(item));
  }

  return (

    
    <div className="pageContainer gradient">
      <div className="headingContainer">
        <h1 className='title'>MODESPACE</h1>
        <p className='subtitle'>A collection of well designed websites to draw inspiration from.</p>
      </div>
      <SelectedTagsContext.Provider value={{ selectedTags, setTags}}>
      <div id='filters'>
        <FilterControl tags={tags} />
      </div>
      <div className='sitesContainer'>
        {sites.sort(compareSites).map((site) => (
          <Site key={site.title} site={site}/>
        ))}
      </div>
      </SelectedTagsContext.Provider>
    </div>
  );
}



export async function getStaticProps() {
  const sites = getSites();
  const tags = getTags(sites);
  return {
    props: {
      sites,
      tags,
    },
  }
}