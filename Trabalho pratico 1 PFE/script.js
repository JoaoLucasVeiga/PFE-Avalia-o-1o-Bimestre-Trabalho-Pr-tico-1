/* GameVault - Script Simplificado */

// Dados dos Jogos
const games = [
    { id: 1, title: 'Elden Ring', category: 'Ação', price: 299.90, rating: 9.5, description: 'Jogo de ação e fantasia épico', imageFile: 'elden-ring.png', bgPos: 'center 30%' },
    { id: 2, title: 'Baldur\'s Gate 3', category: 'RPG', price: 349.90, rating: 9.7, description: 'RPG épico com escolhas que importam', imageFile: 'baldurs-gate-3.png', bgPos: 'center 20%' },
    { id: 3, title: 'Cyberpunk 2077', category: 'Ação', price: 199.90, rating: 8.2, description: 'Jogo de ação em mundo aberto futurista', imageFile: 'cyberpunk-2077.png', bgPos: 'center 40%' },
    { id: 4, title: 'The Witcher 3', category: 'RPG', price: 149.90, rating: 9.3, description: 'RPG de fantasia com história épica', imageFile: 'witcher-3.png', bgPos: 'center 30%' },
    { id: 5, title: 'Devil May Cry 5', category: 'Ação', price: 179.90, rating: 8.9, description: 'Jogo de ação com combate intenso', imageFile: 'dmc5.png', bgPos: 'center 20%' },
    { id: 6, title: 'Hollow Knight', category: 'Aventura', price: 79.90, rating: 8.6, description: 'Aventura 2D desafiadora', imageFile: 'hollow-knight.png', bgPos: 'center' },
    { id: 7, title: 'Dark Souls 3', category: 'Ação', price: 129.90, rating: 9.1, description: 'RPG de ação desafiador', imageFile: 'dark-souls-3.png', bgPos: 'center 10%' },
    { id: 8, title: 'Starfield', category: 'RPG', price: 249.90, rating: 8.4, description: 'RPG de ficção científica em espaço aberto', imageFile: 'starfield.png', bgPos: 'center 35%' },
    { id: 9, title: 'Final Fantasy VII Remake', category: 'RPG', price: 199.90, rating: 8.8, description: 'Remake do clássico Final Fantasy VII', imageFile: 'ff7-remake.png', bgPos: 'center 25%' },
    { id: 10, title: 'Street Fighter 6', category: 'Luta', price: 199.90, rating: 8.7, description: 'Jogo de luta clássico', imageFile: 'street-fighter-6.png', bgPos: 'center 15%' },
    { id: 11, title: 'Stardew Valley', category: 'Casual', price: 49.90, rating: 9.2, description: 'Simulador de fazenda relaxante', imageFile: 'stardew-valley.png', bgPos: 'center' },
    { id: 12, title: 'Hades', category: 'Aventura', price: 99.90, rating: 9.4, description: 'Roguelike com arte e música incríveis', imageFile: 'hades.png', bgPos: 'center 20%' }
];

// Estado Global
let cart = [];
let favorites = [];
let filteredGames = [...games];
let currentPage = 'home'; // 'home' ou 'favorites'

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    loadFavorites();
    renderGames();
    setupEventListeners();
});

// Setup de Event Listeners
function setupEventListeners() {
    // Navegação
    document.getElementById('homeBtn').addEventListener('click', showHome);
    document.getElementById('favoritesBtn').addEventListener('click', showFavorites);
    
    // Busca
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Filtro de Categoria
    document.getElementById('categoryFilter').addEventListener('change', handleFilter);
    
    // Carrinho
    document.getElementById('cartBtn').addEventListener('click', openCartModal);
    document.getElementById('closeCartBtn').addEventListener('click', closeCartModal);
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
    

    
    // Formulário de Contato
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
}

// NAVEGAÇÃO
function showHome() {
    currentPage = 'home';
    document.getElementById('favoritesSection').style.display = 'none';
    document.querySelector('.catalog').style.display = 'block';
    document.querySelector('.filters').style.display = 'block';
    document.querySelector('.contact').style.display = 'block';
    filteredGames = [...games];
    renderGames();
}

function showFavorites() {
    currentPage = 'favorites';
    document.querySelector('.catalog').style.display = 'none';
    document.querySelector('.filters').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';
    document.getElementById('favoritesSection').style.display = 'block';
    
    if (favorites.length === 0) {
        document.getElementById('emptyFavorites').style.display = 'block';
        document.getElementById('favoritesGrid').innerHTML = '';
    } else {
        document.getElementById('emptyFavorites').style.display = 'none';
        renderFavorites();
    }
}

// 1. BUSCA EM TEMPO REAL
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm)
    );
    renderGames();
}

// 2. FILTRO POR CATEGORIA
function handleFilter(e) {
    const category = e.target.value;
    filteredGames = category ? games.filter(g => g.category === category) : [...games];
    renderGames();
}

// 3. RENDERIZAÇÃO DO DOM (Manipulação de Elementos)
function renderGames() {
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = '';
    
    filteredGames.forEach(game => {
        const card = createGameCard(game);
        grid.appendChild(card);
    });
}

function renderFavorites() {
    const grid = document.getElementById('favoritesGrid');
    grid.innerHTML = '';
    
    favorites.forEach(gameId => {
        const game = games.find(g => g.id === gameId);
        if (game) {
            const card = createGameCard(game);
            grid.appendChild(card);
        }
    });
}

function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    const isFavorite = favorites.includes(game.id);
    
    card.innerHTML = `
        <div class="game-image" style="background-image: url('${game.imageFile}'); background-position: ${game.bgPos};"></div>
        <div class="game-info">
            <span class="game-category">${game.category}</span>
            <h3 class="game-title">${game.title}</h3>
            <p class="game-description">${game.description}</p>
            <div class="game-footer">
                <span class="game-price">R$ ${game.price.toFixed(2)}</span>
                <span class="game-rating">⭐ ${game.rating}/10</span>
            </div>
            <div class="game-actions">
                <button class="btn-buy" onclick="addToCart(${game.id})">🛒 Comprar</button>
                <button class="btn-favorite ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${game.id})">❤️</button>
            </div>
        </div>
    `;
    return card;
}

// 4. CARRINHO DE COMPRAS
function addToCart(gameId) {
    const game = games.find(g => g.id === gameId);
    if (game) {
        cart.push(game);
        saveCart();
        updateCartCount();
        showToast(`✓ ${game.title} adicionado ao carrinho!`);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    renderCartModal();
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

function saveCart() {
    localStorage.setItem('gamevault_cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('gamevault_cart');
    cart = saved ? JSON.parse(saved) : [];
    updateCartCount();
}

function openCartModal() {
    if (cart.length === 0) {
        showToast('Seu carrinho está vazio!');
        return;
    }
    renderCartModal();
    document.getElementById('cartModal').style.display = 'flex';
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

function renderCartModal() {
    const itemsDiv = document.getElementById('cartItems');
    const summaryDiv = document.getElementById('cartSummary');
    const emptyDiv = document.getElementById('cartEmpty');
    
    if (cart.length === 0) {
        itemsDiv.innerHTML = '';
        emptyDiv.style.display = 'block';
        summaryDiv.innerHTML = '';
        return;
    }
    
    emptyDiv.style.display = 'none';
    
    // Renderizar itens
    itemsDiv.innerHTML = cart.map((game, index) => `
        <div class="cart-item">
            <div>
                <strong>${game.title}</strong><br>
                <span style="color: #fbbf24;">R$ ${game.price.toFixed(2)}</span>
            </div>
            <button onclick="removeFromCart(${index})">✕</button>
        </div>
    `).join('');
    
    // Calcular resumo
    const total = cart.reduce((sum, g) => sum + g.price, 0);
    const discount = total * 0.1;
    const finalTotal = total - discount;
    
    summaryDiv.innerHTML = `
        <p><strong>Subtotal:</strong> R$ ${total.toFixed(2)}</p>
        <p><strong>Desconto (10%):</strong> -R$ ${discount.toFixed(2)}</p>
        <p style="font-size: 1.2rem; color: #fbbf24;"><strong>Total:</strong> R$ ${finalTotal.toFixed(2)}</p>
    `;
}

function checkout() {
    if (cart.length === 0) return;
    
    const total = cart.reduce((sum, g) => sum + g.price, 0);
    const discount = total * 0.1;
    const finalTotal = total - discount;
    
    alert(`Compra Finalizada!\n\nItens: ${cart.length}\nTotal: R$ ${finalTotal.toFixed(2)}\n\nObrigado por comprar na GameVault!`);
    cart = [];
    saveCart();
    updateCartCount();
    closeCartModal();
}



// 5. VALIDAÇÃO DE FORMULÁRIO
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Validar nome
    if (name.length < 3) {
        showError('nameError', 'Nome deve ter pelo menos 3 caracteres');
        isValid = false;
    } else {
        clearError('nameError');
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('emailError', 'Email inválido');
        isValid = false;
    } else {
        clearError('emailError');
    }
    
    // Validar mensagem
    if (message.length < 10) {
        showError('messageError', 'Mensagem deve ter pelo menos 10 caracteres');
        isValid = false;
    } else {
        clearError('messageError');
    }
    
    if (isValid) {
        showToast('✓ Mensagem enviada com sucesso!');
        document.getElementById('contactForm').reset();
    }
}

function showError(elementId, message) {
    const errorEl = document.getElementById(elementId);
    errorEl.textContent = message;
    errorEl.style.display = 'block';
}

function clearError(elementId) {
    const errorEl = document.getElementById(elementId);
    errorEl.textContent = '';
    errorEl.style.display = 'none';
}

// FAVORITOS
function toggleFavorite(gameId) {
    const index = favorites.indexOf(gameId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(gameId);
    }
    
    saveFavorites();
    renderGames();
    if (currentPage === 'favorites') renderFavorites();
    showToast('❤️ Favorito atualizado!');
}

function saveFavorites() {
    localStorage.setItem('gamevault_favorites', JSON.stringify(favorites));
}

function loadFavorites() {
    const saved = localStorage.getItem('gamevault_favorites');
    favorites = saved ? JSON.parse(saved) : [];
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
