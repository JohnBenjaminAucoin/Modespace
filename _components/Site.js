import path from 'path'
import '../CSS/styles.css'
import VanillaTilt from 'vanilla-tilt';
path.join(process.cwd(), 'public/_sites')

import React, { useContext, useState, useEffect } from "react";
import { SelectedTagsContext } from "../pages";

export default function Site({ site }) {
  const { selectedTags } = useContext(SelectedTagsContext);

  //will return true if the selected tags array is not empty, and if the site has a tag in the selected tags array
  function TagNotSelected(selectedTs, siteTs) {
    return selectedTs.length != 0 && (!selectedTs.some(item => siteTs.includes(item)));
  }
  const profession = site.tags[0];
  const tags = site.tags.slice(1).sort()

  useEffect(() => {
    const siteCardElements = document.querySelectorAll(".siteCardWrapper")
    function isMobile() {
      const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return regex.test(navigator.userAgent);
    }
    
    if (isMobile()) {
      console.log("Mobile device detected");
    } else {
      VanillaTilt.init(siteCardElements, {
      reverse: false,
      glare: true,
      "max-glare": 0.5,
      scale: 1.05,
      transition: true
    });
    }
    
  })


  function displayNone(bool) {
    if (bool) {
      return "none"
    } else {
      return "flex"
    }
  }

  return (

    <a href={`${site.url}`} target="_blank" rel="noopener noreferrer" style={{ /*backgroundImage:`url("Modespace/public/assets/proicons_photo.svg")` */ }}>
      <div className='siteCardWrapper' style={{
        display: displayNone(TagNotSelected(selectedTags, site.tags)),
        backgroundImage: `
          url("${site.coverImage}")`,
      }}>
        <div className="siteCard" >

          <div className='siteContentContainer'>
            <h3 className='siteTitle'>{site.title}</h3>
            <div className='siteContentSpacer'>
              <span className='siteTags'>{profession}</span>
              

              <span className='siteTagsContainer'>
                {
                  tags.slice(0,-1).map(
                    (tag) => (<span className='siteTags' key={tag}>{tag},</span>))
                }
                <span className='siteTags'>{tags[tags.length -1]}</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </a>
  );
}