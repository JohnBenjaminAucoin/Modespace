import {
  Autocomplete,
  AutocompleteItem,
  Button
} from "@nextui-org/react";

import * as React from "react";

import ActiveTag from "./ActiveTag";
export default function FilterControl({ tags }) {

  const [selectedTags, setTags] = React.useState([]);
  
  function removeSelectedTag( tag ){
    const newArray = [];
    selectedTags.forEach(t => {
      
      if (t != tag){ newArray.push(t)}
      
    });

    setTags(newArray);
  }

  function test( tag ){
    console.log(tag);
  }
  return (
    <div>
      <Autocomplete className="max-w-xs" label="Select a category..." onSelectionChange={
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