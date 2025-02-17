
import { getSites, getTags} from '../lib/sites';
import { motion } from 'framer-motion';
import Site from '../_components/Site';
import FilterControl from '../_components/FilterControl';
import React, { createContext, useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter
} from "@nextui-org/react";

export const SelectedTagsContext = createContext(null);

function compareSites(a, b) {
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

  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >

      <div className="pageContainer">

        <div className="headingContainer">
          <h1 className='title'>MODESPACE</h1>
          <p className='subtitle'>A collection of strong websites for design inspiration.</p>
        </div>
        <SelectedTagsContext.Provider value={{ selectedTags, setTags }}>
          
          <div className='sitesContainer'
>
            {sites.sort(compareSites).map((site) => (
              <Site key={site.title} site={site} />
            ))}
          </div>
          <div id='filters'>
            <FilterControl tags={tags} />
          </div>
        </SelectedTagsContext.Provider>
      </div>
      
    </motion.div>

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