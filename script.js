/* const guitarras = {
    "strato": {
        nome: "Stratocaster",
        preco: "R$ 3.000,00",
        descricao: "A guitarra mais versátil do mundo.",
        imagem: "img/strato.jpg"
    },

    "tele": {
        nome: "Telecaster",
        preco: "R$ 4.500,00",
        descricao: "O som estalado preferido do blues.",
        imagem: "img/tele.jpg"
    },

    "sg": {
        nome: "SG",
        preco: "R$ 5.000,00",
        descricao: "Famosa nas mãos de Angus Young (AC/DC). Uma guitarra leve, com médios potentes e aquele visual 'chifrudo' icônico que respira Rock n' Roll clássico e solos cortantes.",
        imagem: "img/sg.jpg"
    },

    "warlock": {
        nome: "B.C. Rich Warlock",
        preco: "R$ 5.500,00",
        descricao: "O pesadelo dos vizinhos! Com um design agressivo e pontiagudo, é a escolha definitiva para quem toca Metal extremo. Possui captadores de alto ganho para distorções pesadas.",
        imagem: "img/warlock.jpg"
    },

    "flyingv": {
        nome: "Flying V Heritage",
        preco: "R$ 4.500,00",
        descricao: "Lançada originalmente em 1958, a Flying V é um ícone de estilo. Seu formato oferece um acesso incrível às casas mais agudas do braço, sendo perfeita para solos épicos e performances de palco.",
        imagem: "img/flyingv.jpg"
    },
    
    "ibanez": {
        nome: "Ibanez RG Series",
        preco: "R$ 3.500,00",
        descricao: "A máquina de velocidade. Conhecida pelos braços 'Wizard' super finos e confortáveis, é a favorita dos guitarristas técnicos que amam fritar no braço com precisão e clareza.",
        imagem: "img/ibanez.jpg"
    },
    
};

// Pegar o id com o nome da guitarra
const urlParams = new URLSearchParams(window.location.search);
const produtoId = urlParams.get('id');

// Procura guitarra específica
const dados = guitarras[produtoId];

// Se encontrar, preenche o HTML
if (dados) {
    // Procura os elementos por meio dos ids e troca o conteúdo
    document.getElementById('titulo').innerText = dados.nome;
    document.getElementById('preco').innerText = dados.preco;
    document.getElementById('descricao').innerText = dados.descricao;
    document.getElementById('imagem-produto').src = dados.imagem;
    document.getElementById('imagem-produto').alt = dados.nome;
} else {
    // Caso id for inexistente
    console.error("Produto não encontrado!");
}

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animação básica das barrinhas do menu (opcional)
    mobileMenu.classList.toggle('is-active');
});

// Fechar o menu ao clicar em qualquer link (bom para mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
}); */


async function jsonblix() {
    const destino = document.getElementById('destino');

    try{
        const response = await fetch('dados.json');

        if (!Response.ok) throw new Error('Falha ao carregar dados');

        const niggers = await response.json();

        // Limpa o container e renderiza de forma segura
        destino.innerHTML = '';

        // Supondo que 'niggers' agora seja uma lista (array)
        niggers.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `<img src="img/${item.imagem}" alt="imagem de ${item.nome}">
                    <h1></h1>
                    <p></p>
                    <a href="${item.endereco}">
                            <button type="button">Saiba mais</button>
                    </a> 
            `;

            // Atribuição segura de texto para evitar XSS
            card.querySelector('h1').textContent = item.nome;
            card.querySelector('p').textContent = item.descricao;

            destino.appendChild(card);
        });
    } catch (error) {
        console.error('Erro na requisição:', error);
        destino.innerHTML = `<p>Desculpe, não foi possível carregar as informações no momento.</p>`
    }
}