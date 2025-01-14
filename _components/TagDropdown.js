import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem
  } from "@nextui-org/react";

export default TagDropdown({tags}){

return(<Autocomplete className="max-w-xs" label="Select a category...">
        {tags.map((tag) => (
          <AutocompleteItem key={tag}>{tag}</AutocompleteItem>
        ))}
      </Autocomplete>)}