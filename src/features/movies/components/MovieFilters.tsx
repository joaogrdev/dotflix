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
    <div className="flex flex-wrap items-center justify-between mb-6 gap-2">
      <h2 className="text-2xl tablet:text-4xl font-bold whitespace-nowrap font-title">
        {filterSelected.label}
      </h2>
      <div className="flex items-center gap-2">
        {availableFilters.map((filter: Filter) => {
          if (filter.query !== filterSelected.query)
            return (
              <Button
                key={filter.query}
                className={cn(
                  "rounded-sm tablet:rounded-md bg-input text-sm font-light text-primary hover:bg-primary/25 hover:scale-102 transition-all duration-300 h-6 tablet:h-8"
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
