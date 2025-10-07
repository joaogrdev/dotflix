import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
const SearchBar = () => {
  return (
    <InputGroup
      className={cn(
        "w-full tablet:max-w-[600px] min-w-[200px] mx-auto order-3 tablet:order-2 col-span-full tablet:col-span-1 h-10"
      )}
    >
      <InputGroupInput
        placeholder="O que você quer assistir hoje?"
        className={cn("indent-2")}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          variant={"default"}
          className={cn(
            "bg-contrast w-10 h-full hover:bg-primary/90 hover:scale-110 transition-all duration-300"
          )}
        >
          <SearchIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default SearchBar;
