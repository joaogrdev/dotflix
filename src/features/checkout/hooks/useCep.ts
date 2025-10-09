import { QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

export async function fetchCep(cep: string) {
  const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

  const data = await queryClient.fetchQuery({
    queryKey: ["cep", cep],
    queryFn: async () => {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Erro ao buscar CEP.");
      }
      const json = await response.json();
      if (json.erro) {
        throw new Error("CEP não encontrado.");
      }
      return json;
    },
    staleTime: Infinity,
  });

  return data;
}
