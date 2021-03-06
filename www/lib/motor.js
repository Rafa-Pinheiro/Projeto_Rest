window.onload = function(){
  const buscar = document.querySelector("#bid");
  const del = document.querySelector("#deletar");
  const cad = document.querySelector("#cadastrar");
  const alt = document.querySelector("#alterar");
  const delcad = document.querySelector("#deletarcad");
  const id = document.querySelector("#id");
  const curso = document.querySelector("#curso");
  const nome = document.querySelector("#nome");

//Botão Cadastrar
  cadastrar.addEventListener("click", function(){ 
    let formdata = new FormData();
    formdata.append("nome",`${nome.value}`);
    formdata.append("curso",`${curso.value}`);
    fetch('https://www.jussimarleal.com.br/exemplo_api/pessoa',{
      body:formdata,
      method: 'post',
      mode: 'cors',
      cache: 'default'
    })
      .then(
        limpar(),
        alert("Cadastro efetuado com sucesso!")
      );
  });

//Botão Limpar Campos
  del.addEventListener("click", function(){
    limpar();
  });

//Função Limpar Campos
  function limpar(){
    curso.value = '';
    nome.value = '';
    id.value = '';
  }
}

