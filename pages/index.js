
import {getSites } from '../lib/sites'
import Site from '../_components/Site';
import FilterList from '../_components/FilterList';

import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

export function getTags(sites){
  
  
  // Step 1: Flatten all the "tag" arrays
  const allTags = sites.flatMap(site => site.tag);
  
  // Step 2: Get unique tags using a Set
  const uniqueTags = [...new Set(allTags)];
  
  console.log(uniqueTags);


};



export default function index( { sites }) {
  return (
    <NextUIProvider>
    <div>
      <div>
        <h1>MODESPACE</h1>
        <p>A collection of well designed websites to draw inspiration from.</p>
      </div>
      <div id='filters'>

      </div>
      <div id='results'>
        {sites.map((site) => (
          <Site key={site.title} site={site}/>
          
        ))}
      </div>
    </div>
    </NextUIProvider>
  );
}



export async function getStaticProps() {
  const sites = getSites();
  return {
    props: {
      sites,
    },
  }
}