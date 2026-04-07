# GameVault - Loja Digital de Jogos

## Descrição

GameVault é uma loja digital de jogos desenvolvida com **JavaScript puro**, **HTML5 semântico** e **CSS3 responsivo**. O projeto implementa um catálogo funcional de 12 jogos populares com sistema de busca, filtros, carrinho de compras e formulário de contato validado.

## Funcionalidades Implementadas

### 1. **Sistema de Busca em Tempo Real**
- Busca dinâmica por nome e descrição do jogo
- Atualização instantânea dos resultados conforme o usuário digita
- Implementado com `addEventListener` e `filter()`

### 2. **Manipulação do DOM**
- Renderização dinâmica de cards de jogos usando `createElement()` e `innerHTML`
- Atualização em tempo real da interface
- Criação de elementos HTML via JavaScript

### 3. **Filtro por Categoria**
- Seleção de categorias (Ação, RPG, Aventura, Casual)
- Filtragem dinâmica dos jogos exibidos
- Combinação com busca para resultados mais precisos

### 4. **Carrinho de Compras**
- Adicionar/remover itens do carrinho
- Cálculo automático de subtotal, desconto (10%) e total
- Persistência de dados com `localStorage`
- Modal interativo para visualizar o carrinho
- Checkout visual com resumo de compra

### 5. **Validação de Formulário**
- Validação em tempo real do formulário de contato
- Validação de nome (mínimo 3 caracteres)
- Validação de email com regex
- Validação de mensagem (mínimo 10 caracteres)
- Exibição de mensagens de erro específicas

### Bônus: **Sistema de Favoritos**
- Marcar/desmarcar jogos como favoritos
- Persistência com `localStorage`

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica com tags apropriadas
- **CSS3**: Design responsivo com Media Queries (6 breakpoints)
- **JavaScript Puro**: Sem frameworks ou bibliotecas externas
- **localStorage**: Persistência de dados no navegador

## Estrutura de Arquivos

```
trabalho-pratico-1-PFE/
├── index.html      # Estrutura HTML 
├── style.css       # Estilos CSS 
├── script.js       # Lógica JavaScript 
├── hero.png        # Imagem hero
└── README.md       # Este arquivo
- elden-ring.png
- baldurs-gate-3.png
- cyberpunk-2077.png
- witcher-3.png
- dmc5.png
- hollow-knight.png
- dark-souls-3.png
- starfield.png
- ff7-remake.png
- street-fighter-6.png
- stardew-valley.png
- hades.png
```

## Como Usar

### Instalação

1. Baixe os 17 arquivos (index.html, style.css, script.js, hero.png.etc)
2. Coloque-os na mesma pasta
3. Abra `index.html` no navegador ou com Live Server do VSCode

### Adicionando Capas dos Jogos

Para que as imagens dos jogos apareçam, coloque os arquivos PNG na mesma pasta com os seguintes nomes:

- elden-ring.png
- baldurs-gate-3.png
- cyberpunk-2077.png
- witcher-3.png
- dmc5.png
- hollow-knight.png
- dark-souls-3.png
- starfield.png
- ff7-remake.png
- street-fighter-6.png
- stardew-valley.png
- hades.png

## Requisitos Atendidos

### HTML ✅
- Estrutura semântica com `<header>`, `<main>`, `<section>`, `<footer>`
- Formulário com `<form>`, `<input>`, `<textarea>`, `<select>`, `<button>`
- Indentação com 4 espaços
- Comentários explicativos
- Alt text em todas as imagens
- Atributos ARIA para acessibilidade

### CSS ✅
- Estilização completa (cores, fontes, layouts, espaçamento)
- Seletores eficientes (classes, IDs, pseudo-classes)
- 6 Media Queries para responsividade (320px, 375px, 480px, 768px, 1024px, 1200px+)
- Flexbox e Grid para layouts
- Variáveis CSS para cores
- Transições suaves

### JavaScript ✅
- 5 funcionalidades interativas (busca, filtro, DOM, carrinho, validação)
- Variáveis descritivas e funções bem definidas
- Tratamento de erros
- localStorage para persistência
- Código livre de bugs

### Responsividade ✅
- Adaptável para mobile (320px+), tablet (768px+) e desktop (1200px+)
- Tipografia escalável
- Layouts flexíveis

### Acessibilidade ✅
- Alt text em todas as imagens
- Contraste adequado (branco sobre roxo)
- Navegação por teclado
- Estrutura semântica
- Atributos ARIA (role, aria-label, aria-live)

### Performance ✅
- Código otimizado e eficiente
- Sem requisições externas desnecessárias
- Cache com localStorage

## Estatísticas

| Métrica | Valor |
|---------|-------|
| Linhas HTML | 200+ |
| Linhas CSS | 600+ |
| Linhas JavaScript | 400+ |
| Funcionalidades | 5 |
| Jogos no Catálogo | 12 |
| Breakpoints CSS | 6 |

## Autor

Desenvolvido como projeto acadêmico de Programação Front-End.

## Licença

MIT License - Livre para uso educacional e comercial.
