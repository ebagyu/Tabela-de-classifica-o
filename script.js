var tracer = {
  icone: "https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png",
  campeao: "Tracer",
  abates: 0,
  assistencia: 0,
  mortes: 0,
  pontos: 0
};
var ashe = {
  icone: "https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/icon-portrait.png",
  campeao: "Ashe",
  abates: 0,
  assistencia: 0,
  mortes: 0,
  pontos: 0
};
var hanzo = {
  icone: "https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png",
  campeao: "Hanzo",
  abates: 0,
  assistencia: 0,
  mortes: 0,
  pontos: 0
};

tracer.pontos = calculaPontos(tracer);
ashe.pontos = calculaPontos(ashe);
hanzo.pontos = calculaPontos(hanzo);

function calculaPontos(jogador) {
  var pontos = jogador.abates * 3 + jogador.assistencia;
  return pontos;
}

var jogadores = [tracer, ashe, hanzo];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td><img src='" + jogadores[i].icone + "'/></td>";
    elemento += "<td>" + jogadores[i].campeao + "</td>";
    elemento += "<td>" + jogadores[i].abates + "</td>";
    elemento += "<td>" + jogadores[i].assistencia + "</td>";
    elemento += "<td>" + jogadores[i].mortes + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button class='myButton1'onClick='adicionarAbate(" +
      i +
      ")'>Abate</button></td>";
    elemento +=
      "<td><button  class='myButton1' onClick='adicionarAssist(" +
      i +
      ")'>Assistência</button></td>";
    elemento +=
      "<td><button class='myButton1' onClick='adicionarMorte(" +
      i +
      ")'>Morte</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarAbate(i) {
  var jogador = jogadores[i];
  jogador.abates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarAssist(i) {
  var jogador = jogadores[i];
  jogador.assistencia++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarMorte(i) {
  var jogador = jogadores[i];
  jogador.mortes++;
  exibeJogadoresNaTela(jogadores);
}

function limpar() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].abates = 0;
    jogadores[i].assistencia = 0;
    jogadores[i].mortes = 0;
    jogadores[i].pontos = 0;
  }
  exibeJogadoresNaTela(jogadores);
}

function abrir() {
  document.getElementById("popup").style.display = "block";
}

function fechar() {
  document.getElementById("popup").style.display = "none";
}

function inserirNovoJogador() {
  var nome = document.getElementById("novo");
  var icone = document.getElementById("novoIcone");
  jogadores.push({
    icone: icone.value,
    campeao: nome.value,
    abates: 0,
    assistencia: 0,
    mortes: 0,
    pontos: 0
  });
  icone.value = "";
  nome.value = "";
  exibeJogadoresNaTela(jogadores);

  document.getElementById("novo").value = "";
  document.getElementById("novoIcone").value = "";
  document.getElementById("popup").style.display = "none";
}