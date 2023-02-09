

const api1 = `{"Historia":"O Mario Bros é conhecido por sua jogabilidade divertida gráficos coloridos e inovadores e trilha sonora memorável Até hoje, o jogo é jogado e apreciado por muitos fãs de jogos em todo o mundo. Se você nunca jogou o Mario Bros é definitivamente um jogo a ser experimentado!"}`;

const api2 = `{"Historia":"A série Star Wars é uma franquia de filmes de ficção científica e aventura criada por George Lucas. Ela começou com o filme Star Wars Episode IV  A New Hope em 1977 e desde então, expandiu-se para incluir uma série de filmes, programas de televisão, jogos  quadrinhos e muito mais. A franquia é conhecida por sua mitologia rica personagens memoráveis e sua trilha sonora emblemtica. Star Wars é uma das franquias de filmes mais bem-sucedidas e influentes de todos os tempos"}`;
const api3 = `{"Historia":"Mortal Kombat é uma série de jogos de luta que foi iniciada em 1992. A série é conhecida por sua violência gráfica e seus personagens únicos, além de seu sistema de combate envolvente e jogabilidade profunda. Mortal Kombat tem sido uma das franquias de jogos de luta mais bem-sucedidas e influentes de todos os tempos, com uma legião de fãs dedicados e uma série de adaptações para filmes, programas de televisão e muito mais. Além disso, a franquia tem sido responsável por introduzir várias inovações e mecânicas revolucionárias no gênero de jogos de luta."}`;

// SONS DOS PERSONAGENS
const sound = new Audio("media/yahooMario.mp3");
const sound1 = new Audio("media/marcha.mp3");
const sound2 = new Audio("media/mortal.mp3");
const sound3 = new Audio("media/superMArio.mp3");


function mario() {
    sound3.play();
    sound.play();
    sound1.pause();
    sound2.pause();

    const a = JSON.parse(api1);
    document.getElementById("result_1").innerHTML =
      a.Historia;

      document.getElementById("imagens").src = `imagens/marioo.gif`
      document.getElementById("imagem1").src = `imagens/bowser.png`
      document.getElementById("imagem2").src = `imagens/planta.png`
    
      
  }
  function starWars() {
  
    sound1.play();
    sound.pause();
    sound2.pause();
    sound3.pause();

    const b = JSON.parse(api2);
     document.getElementById("result_1").innerHTML = b.
   Historia;
     document.getElementById("imagens").src = `imagens/dartvader.gif`
     document.getElementById("imagem1").src = `imagens/nave.png`
     document.getElementById("imagem2").src = `imagens/r3.png`
      
  }
  function mortalKombat() {
    sound1.pause();
    sound2.play();
    sound3.pause();
    const c = JSON.parse(api3);
    document.getElementById("result_1").innerHTML =
      c.Historia;

      var image = document.getElementById("imagem2");
      image.parentNode.removeChild(image);

      document.getElementById("imagens").src = `imagens/dragao.png`
     document.getElementById("imagem1").src = `imagens/subzero.png`
     
  }

