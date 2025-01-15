
import {getSites, getTags } from '../lib/sites'
import Site from '../_components/Site';
import FilterControl from '../_components/FilterControl';
import * as React from "react";





export default function index( { sites, tags }) {         
  
  return (
    <div className="gradient">
      <div>
        <h1>MODESPACE</h1>
        <p>A collection of well designed websites to draw inspiration from.</p>
      </div>
      <div id='filters'>
      <FilterControl tags= {tags}/>

      </div>
      <div id='results'>
        {sites.map((site) => (
          <Site key={site.title} site={site}/>
          
        ))}
      </div>
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