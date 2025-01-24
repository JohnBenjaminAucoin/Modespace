import path from 'path'
import '../CSS/styles.css'
import VanillaTilt from 'vanilla-tilt';
path.join(process.cwd(), 'public/_sites')

import React, {useContext, useState, useEffect} from "react";
import { SelectedTagsContext } from "../pages";

export default function Site({site}) {
  const {selectedTags} = useContext(SelectedTagsContext);  
  
  //will return true if the selected tags array is not empty, and if the site has a tag in the selected tags array
  function TagNotSelected(selectedTs, siteTs) {
    return   selectedTs.length != 0 &&(!selectedTs.some(item => siteTs.includes(item)));
  }

 
  useEffect(()=>{
    const siteCardElements = document.querySelectorAll(".siteCardWrapper")
    VanillaTilt.init(siteCardElements, {
      reverse: true,
      glare: true,
      "max-glare": 0.5,
      scale: 1.05,
      transition: true
    });

    
  })


  function displayNone(bool){
    if (bool){
      return "none"
    }else{
      return "flex"
    }
  }

    return (
      
            <a href={`${site.url}`} target="_blank" rel="noopener noreferrer" style={{ /*backgroundImage:`url("Modespace/public/assets/proicons_photo.svg")` */}}>
            <div className='siteCardWrapper' style={{
          display: displayNone(TagNotSelected(selectedTags, site.tags)),
          backgroundImage: `
          url("${site.coverImage}")`,
          

        }}>
        <div className="siteCard" >
            
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
            </div>
            </a>
    );
  }