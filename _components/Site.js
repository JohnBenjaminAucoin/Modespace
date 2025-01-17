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
      return "flex"
    }
  }

    return (
      
            <a  href={`${site.url}`}>

            <div className="siteCard" style= {{
              backgroundImage: `url('${site.coverImage}')`, 
              display: displayNone(TagNotSelected(selectedTags, site.tags)),
            }}>
              <div className='siteContentContainer'>
                <h3 className='siteTitle'>{site.title}</h3>
                <div className='siteContentSpacer'>
                  <span className='siteTags'>{site.tags[0]}</span>
                  <span className='siteTagsContainer'>
                    {
                      site.tags.slice(1).map(
                      (tag) => ( <span className='siteTags' key={tag}>{tag}</span>))
                    }
                  </span>
                </div>
              </div>

            </div>
            
            </a>
    );
  }