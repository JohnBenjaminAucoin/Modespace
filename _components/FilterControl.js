import {
  Autocomplete,
  AutocompleteItem,
  Button
} from "@nextui-org/react";

import React, {useContext, useState} from "react";
import { SelectedTagsContext } from "../pages";


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
      <Autocomplete className="max-w-xs filterSearch" label="Select a category..." onSelectionChange={
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

      <div>
        {selectedTags.map((tag) => (
          <Button key={tag} onPress={() => removeSelectedTag(tag)}> {tag} </Button>
        ))}
      </div>
    </div>
  )
}