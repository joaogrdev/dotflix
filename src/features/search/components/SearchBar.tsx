import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { Search, Trash } from "lucide-react";
import { useSearchStore } from "../store/useSearchStore";
import { useLocation } from "react-router";
const SearchBar = () => {
  const { query, setQuery } = useSearchStore();
  const { pathname } = useLocation();

  return (
    <InputGroup
      className={cn(
        "w-full tablet:max-w-[600px] min-w-[200px] mx-auto order-3 tablet:order-2 col-span-full tablet:col-span-1 h-10"
      )}
    >
      <InputGroupInput
        placeholder="O que você quer assistir hoje?"
        className={cn("indent-2")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={pathname === "/checkout"}
      />

      <InputGroupAddon>
        <Search className="text-contrast" />
      </InputGroupAddon>

      <InputGroupAddon align="inline-end">
        <InputGroupButton
          variant={"default"}
          className={cn(
            "w-8 h-full bg-input text-primary hover:bg-primary/25 hover:scale-110 transition-all duration-300"
          )}
          onClick={() => setQuery("")}
          title="Limpar pesquisa"
        >
          <Trash />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default SearchBar;
