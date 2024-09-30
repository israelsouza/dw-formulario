const Inputnum = document.getElementById('tele'); //seleciona o elemento pelo id
Inputnum.addEventListener('input', (entrada) => {
    const numerotelefone = entrada.target.value;//pega o valor do pattern de numeros e só formata quando chegar a esse valor entrada é a entrada do usuario objeto do evento
    const numeroformatado = numerotelefone.replace(/\D+/g, '').replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');//formatação do telefone
    entrada.target.value = numeroformatado; //numero já formatado, entrada recebe essa string e é mostrada para o usuário 
  });   