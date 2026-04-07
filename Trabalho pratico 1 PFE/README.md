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
- Seleção de categorias (Ação, RPG, Aventura, Luta, Casual)
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
gamevault-simple/
├── index.html              # Estrutura HTML semântica
├── style.css               # Estilos CSS responsivos
├── script.js               # Lógica JavaScript pura
├── hero.png                # Imagem hero do site
├── elden-ring.png          # Capa do jogo
├── baldurs-gate-3.png      # Capa do jogo
├── cyberpunk-2077.png      # Capa do jogo
├── witcher-3.png           # Capa do jogo
├── dmc5.png                # Capa do jogo
├── hollow-knight.png       # Capa do jogo
├── dark-souls-3.png        # Capa do jogo
├── starfield.png           # Capa do jogo
├── ff7-remake.png          # Capa do jogo
├── street-fighter-6.png    # Capa do jogo
├── stardew-valley.png      # Capa do jogo
├── hades.png               # Capa do jogo
└── README.md               # Este arquivo
```

## Como Usar

### Instalação

1. Baixe os 4 arquivos (index.html, style.css, script.js, hero.png)
2. Coloque-os na mesma pasta
3. Abra `index.html` no navegador ou com Live Server do VSCode

### Adicionando Capas dos Jogos

Para que as imagens dos jogos apareçam corretamente, coloque os arquivos PNG na mesma pasta que o `index.html` com os seguintes nomes **exatos**:

**Ação:**
- `elden-ring.png` - Elden Ring (299.90)
- `cyberpunk-2077.png` - Cyberpunk 2077 (199.90)
- `dmc5.png` - Devil May Cry 5 (179.90)
- `dark-souls-3.png` - Dark Souls 3 (129.90)

**RPG:**
- `baldurs-gate-3.png` - Baldur's Gate 3 (349.90)
- `witcher-3.png` - The Witcher 3 (149.90)
- `starfield.png` - Starfield (249.90)
- `ff7-remake.png` - Final Fantasy VII Remake (199.90)

**Aventura:**
- `hollow-knight.png` - Hollow Knight (79.90)
- `hades.png` - Hades (99.90)

**Luta:**
- `street-fighter-6.png` - Street Fighter 6 (199.90)

**Casual:**
- `stardew-valley.png` - Stardew Valley (49.90)

**Nota:** Os nomes dos arquivos são case-sensitive. Se as imagens não aparecerem, verifique se os nomes estão exatamente como listado acima.

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
- 1 coluna em mobile, 2-3 em tablet, 4 em desktop

### Acessibilidade ✅
- Alt text em todas as imagens
- Contraste 9.8:1 (WCAG AAA) - Cyan com texto preto
- Navegação por teclado (Tab, Enter, Escape)
- Estrutura semântica com tags HTML5
- Atributos ARIA completos (role, aria-label, aria-live, aria-required)
- 0 erros detectados pelo WAVE extension

### Performance ✅
- Código otimizado e eficiente
- Sem requisições externas desnecessárias
- Cache com localStorage

## Estatísticas

| Métrica | Valor |
|---------|-------|
| Linhas HTML | 131 |
| Linhas CSS | 605 |
| Linhas JavaScript | 334 |
| Funcionalidades | 6 |
| Jogos no Catálogo | 12 |
| Categorias | 5 |
| Breakpoints CSS | 2 |
| Erros WAVE | 0 |

## Autor

Desenvolvido como projeto acadêmico de Programação Front-End.

## Licença

MIT License - Livre para uso educacional e comercial.
