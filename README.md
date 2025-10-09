# 🎬 Dotflix

**Dotflix** é um projeto de front-end criado para o teste técnico da DOT Digital Group. O objetivo foi desenvolver um projeto para listagem e compra de filmes, que transforme a experiência de navegação e compra em algo rápido, intuitivo e moderno. O sistema permite buscar filmes por título, filtrar por categorias, assistir trailers, adicionar ao carrinho e aos favoritos, além de simular a finalização da compra.

🔗 [Ver projeto online](https://dotflix-xi.vercel.app/)

---

## ✨ Funcionalidades

- 🎥 **Busca e filtros inteligentes:** pesquise filmes por título e filtre por categorias como “Mais Populares”, “Em Cartaz”, etc.
- 🛒 **Carrinho persistente:** adicione filmes ao carrinho, com quantidade, preço simulado e persistência no localStorage.
- 🖤 **Favoritos persistente:** marque filmes como favoritos e tenha acesso localmente.
- ▶️ **Assistir trailers:** clique no botão para abrir o trailer de um filme sem sair da página.
- 📱 **Interface responsiva:** totalmente adaptável a desktop, tablet e mobile.
- 🔄 **Scroll infinito:** ao chegar no final da lista, mais filmes são carregados automaticamente.
- 💾 **Persistência do carrinho:** os itens permanecem ao atualizar a página.
- ⚡ **Feedback imediato:** mensagens de sucesso e erro ao adicionar itens ao carrinho.
- 🖤 **Favoritar filmes:** marcar filmes como favoritos localmente.

---

## ⚙️ Tecnologias e práticas aplicadas

- **React + TypeScript** - Componentização, tipagem estática e segurança no desenvolvimento.
- **TailwindCSS + Shadcn/UI** - Estilo moderno, consistente e produtivo.
- **React Query + Axios** - Gerenciamento de cache e requisições assíncronas.
- **React Hook Form + Zod** - Formulários tipados com validação robusta.
- **Zustand** - Persistência de carrinho e favoritos.
- **Intersection Observer API** - Scroll infinito para carregar mais filmes automaticamente.
- **Vite** - Bundler moderno e rápido.
- **Git Flow** - Organização de branches (main, dev e features).
- **Mobile First & Responsividade** - Layout adaptável a todos os dispositivos.
- **API TMDB** - Informações de filmes atualizadas em tempo real.

---

## 📸 Preview

![Dotflix Preview](https://i.postimg.cc/XJ0w7VyB/print-dotflix.png)

---

## 🚀 Como rodar o projeto localmente

1. Clone o repositório:  
git clone https://github.com/joaogrdev/dotflix.git

2. Entre na pasta:  
cd dotflix

3. Instale as dependências:  
npm install

4. Crie um arquivo .env na raiz do projeto e adicione a url base da API do TMDB:  
VITE_API_BASE_URL="https://api.themoviedb.org/3"

5. Coloque também dentro do arquivo .env a sua chave do TMDB:  
VITE_TMDB_API_KEY=YOUR_API_KEY_HERE  
🔗 [Documentação TMDB](https://developer.themoviedb.org/docs/getting-started)

6. Rode o servidor de desenvolvimento:  
npm run dev

---

## 📌 Possíveis melhorias

- Integrar um backend real para compras.
- Implementar autenticação de usuários.
- Adicionar suporte a múltiplos idiomas.
- Implementar testes unitários e end-to-end.

---

## 🧑‍💻 Autor

Feito por [João Gabriel Ribeiro](https://www.linkedin.com/in/joaogrs/)
