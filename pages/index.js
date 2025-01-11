
import {getSites } from '../lib/sites'

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
          
          <div key={site.title}>
            <a href={`${site.url}`}>{site.title}</a>
          </div>
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