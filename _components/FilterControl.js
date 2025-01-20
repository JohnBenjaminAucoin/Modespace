import {
  Autocomplete,
  AutocompleteItem,
  Button
} from "@nextui-org/react";

import React, {useContext, useState} from "react";
import { SelectedTagsContext } from "../pages";
import Xicon from "./Xicon";

export default function FilterControl({ tags }) {

  const {selectedTags ,setTags} = useContext(SelectedTagsContext);  
  function removeSelectedTag( tag ){
    const newArray = [];
    selectedTags.forEach(t => {
      
      if (t != tag){ newArray.push(t)}
      
    });

    setTags(newArray);
  }

 
  return (
    <div className="filterControlsContainer">
      <Autocomplete className="max-w-xs filterSearch" 
      classNames={{
       
        
      }}
      inputProps={{
        classNames: {
          

        }
      }
      }

      label="Select a category..." onSelectionChange={
        (id) => {
          if (id != null) {
            setTags([...new Set([...selectedTags, id])])
          }
        }
      }>
        {tags.map((tag) => (
          <AutocompleteItem key={tag}>{tag}</AutocompleteItem>
        ))}
      </Autocomplete>

      <div className="filteredTagsContainer">
        {selectedTags.map((tag) => (
          <Button className="tagButton" key={tag} endContent={<Xicon />} onPress={() => removeSelectedTag(tag)}> {tag} </Button>
        ))}
      </div>
    </div>
  )
}