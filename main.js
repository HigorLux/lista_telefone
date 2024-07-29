document.getElementById('phoneBookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    // Validação: Nome não pode estar vazio e telefone deve ter 11 dígitos numéricos
    if (name === '' || !/^\d{11}$/.test(phone)) {
        alert('Por favor, insira um nome válido e um telefone com 11 dígitos.');
        return;
    }

    // Formatar o telefone
    const formattedPhone = `(${phone.slice(0, 2)}) ${phone.slice(2)}`;

    // Adicionar o contato na lista
    const phoneBookList = document.getElementById('phoneBookList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${name}</span> <span>${formattedPhone}</span>`;
    phoneBookList.appendChild(listItem);

    // Limpar os campos de entrada
    nameInput.value = '';
    phoneInput.value = '';
});
