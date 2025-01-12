
import {getSites } from '../lib/sites'
import Site from '../_components/Site';

export default function index( { sites }) {
  return (
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