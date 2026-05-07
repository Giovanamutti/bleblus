const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animação barrinhas do menu
    mobileMenu.classList.toggle('is-active');
});

// Fechar o menu ao clicar em qualquer link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


async function carregarProdutos() {
    const destino = document.getElementById('destino');
    if (!destino) return; // Só executa se estiver na index.html

    try {
        const response = await fetch('dados.json');
        
        if (!response.ok) {
            throw new Error('Falha ao carregar dados');
        }
        
        const guitarras = await response.json();

        // Limpar conteúdo estático
        destino.innerHTML = '';

        guitarras.forEach(item => {
            // Criar elemento link que envolve o card
            const link = document.createElement('a');
            link.href = `produto.html?id=${item.id}`;
            link.className = 'linkp';

            // Estrutura card 
            link.innerHTML = `
                <div class="card">
                    <img src="${item.imagem}" alt="${item.nome}" class="cardimg">
                    <h1 class="cardh1">${item.nome}</h1>
                    <p class="produtopreco">${item.preco}</p>
                    <p class="cardp">${item.descricao}</p>
                </div>
            `;

            destino.appendChild(link);
        });

    } catch (error) {
        console.error('Erro:', error);
        destino.innerHTML = `<p>Erro ao carregar os instrumentos.</p>`;
    }
}

// Inicia função qdo carrega a página
document.addEventListener('DOMContentLoaded', carregarProdutosDoJson);