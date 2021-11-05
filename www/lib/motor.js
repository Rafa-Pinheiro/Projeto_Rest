window.onload = function(){
  const buscar = document.querySelector("#bid");
  const cad = document.querySelector("#cadastrar");
  const alt = document.querySelector("#alterar");
  const del = document.querySelector("#deletar");
  const id = document.querySelector("#id");
  const curso = document.querySelector("#curso");
  const nome = document.querySelector("#nome");

  cadastrar.addEventListener("click", function(){
    let formdata = new FormData();
    formdata.append("nome",`${nome.value}`);
    formdata.append("curso", `${curso.value}`);

    fetch('https://jussimarleal.com.br/exemplo_api/pessoa',{
      body:formdata,
      method: 'post',
      mode: 'cors',
      cache: 'default'
    })
      .then(altert("Cadastro efetuado com sucesso!"));
  });
}

