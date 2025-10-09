import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const availableFilters = [
  {
    query: "popular",
    label: "Mais Populares",
  },
  {
    query: "top_rated",
    label: "Melhores Avaliados",
  },
  {
    query: "now_playing",
    label: "Em Cartaz",
  },
];

interface Filter {
  query: string;
  label: string;
}
const MovieFilters = ({
  handleSelectFilter,
  filterSelected,
}: {
  handleSelectFilter: (filter: Filter) => void;
  filterSelected: Filter;
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl tablet:text-2xl font-bold">
        {filterSelected.label}
      </h2>
      <div className="flex items-center gap-2">
        {availableFilters.map((filter: Filter) => {
          if (filter.query !== filterSelected.query)
            return (
              <Button
                key={filter.query}
                className={cn(
                  "rounded-md bg-input text-sm font-thin text-primary hover:bg-primary/25 hover:scale-102 transition-all duration-300 h-8"
                )}
                onClick={() => handleSelectFilter(filter)}
              >
                {filter.label}
              </Button>
            );
        })}
      </div>
    </div>
  );
};

export default MovieFilters;
