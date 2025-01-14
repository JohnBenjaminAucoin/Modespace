import {
  Autocomplete,
  AutocompleteItem
  } from "@nextui-org/react";

export default function TagDropdown({tags})
{

return(
<Autocomplete className="max-w-xs" label="Select a category...">
        {tags.map((tag) => (
          <AutocompleteItem key={tag}>{tag}</AutocompleteItem>
        ))}
      </Autocomplete>
      
    )
      }