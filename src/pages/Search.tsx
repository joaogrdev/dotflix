import { useSearchParams } from "react-router";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div>
      <h1>Resultados para: {query}</h1>
    </div>
  );
}
