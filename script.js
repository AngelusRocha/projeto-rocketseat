function toggleMode() {
  //document é o objeto que representa a página. Ele é o ponto de partida para acessar qualquer elemento da página.
  //document.documentElement é o elemento raiz da página, ou seja, a tag <html>.
  const html = document.documentElement
  //document.body é o elemento que representa a tag <body> da página.
  //document.html.classList é uma coleção de todas as classes do elemento html.
  //html.classList.contains('light') verifica se a classe light está presente no html.
  /*
  if(html.classList.contains('light')){
    html.classList.remove('light')
  }else{
    html.classList.add('light')
  }
  */
  //O método toggle() do objeto classList, adiciona a classe se ela não estiver presente e remove se ela estiver presente.
  html.classList.toggle("light")

  //document.querySelector() é um método que retorna o primeiro elemento que corresponde a um ou mais seletores CSS.
  const img = document.querySelector("#profile img") //Seleciona a imagem do perfil.

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png") //Altera o atributo src da imagem para a versão light.
  } else {
    img.setAttribute("src", "./assets/avatar.png") //Altera o atributo src da imagem para a versão dark.
  }
}
