import path from 'path'
import '../CSS/styles.css'

path.join(process.cwd(), 'public/_sites')

import React, {useContext, useState} from "react";
import { SelectedTagsContext } from "../pages";

export default function Site({site}) {
  const {selectedTags} = useContext(SelectedTagsContext);  
  
  //will return true if the selected tags array is not empty, and if the site has a tag in the selected tags array
  function TagNotSelected(selectedTs, siteTs) {
    return   selectedTs.length != 0 &&(!selectedTs.some(item => siteTs.includes(item)));
  }


  function displayNone(bool){
    if (bool){
      return "none"
    }else{
      return ""
    }
  }

    return (
      
            <a  href={`${site.url}`}>

            <div style= {{
              backgroundImage: `url('${site.coverImage}')`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: displayNone(TagNotSelected(selectedTags, site.tags)),
            }}>
              <div>
                <h3>{site.title}</h3>
                <div>
                  <span>{site.tags[0]}</span>
                  <span>
                    {
                      site.tags.slice(1).map(
                      (tag) => ( <span key={tag}>{tag}</span>))
                    }
                  </span>
                </div>
              </div>

            </div>
            
            </a>
    );
  }