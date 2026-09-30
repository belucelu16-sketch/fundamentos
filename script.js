// 1. Selecionando os elementos que precisamos do HTML
const productForm = document.getElementById('batata-form');
const nameInput = document.getElementById('product-name');
const priceInput = document.getElementById('product-price');
const qtyInput = document.getElementById('product-qty');
const productList = document.getElementById('product-list');

// 2. Ouvindo o momento que o usuário envia o formulário (clica no botão)
productForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Pegando os valores dos inputs
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value).toFixed(2);
    const qty = parseInt(qtyInput.value);

    // 3. Criando o item da lista (li)
    const li = document.createElement('li');
    li.classList.add('product-item');

    // Criando o texto do produto
    const infoSpan = document.createElement('span');
    infoSpan.classList.add('product-info');
    infoSpan.textContent = `${name} - R$ ${price.replace('.', ',')} (${qty} un.)`;
    li.appendChild(infoSpan);

    // 4. Container para os botões do item
    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');

    // PARTE 2: Criando o Botão Remover dinamicamente
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.classList.add('btn-remove');
    removeBtn.type = 'button';

    // Evento de clique para remover o item específico
    removeBtn.addEventListener('click', function() {
        li.remove(); // Remove o elemento 'li' inteiro da tela
    });

    // Colocando o botão dentro do grupo e o grupo dentro da lista
    btnGroup.appendChild(removeBtn);
    li.appendChild(btnGroup);
    productList.appendChild(li);

    // Limpa os campos do formulário para o próximo cadastro
    productForm.reset();
});
