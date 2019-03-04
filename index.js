function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  var lista = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for (var i = 0; i < lista.length; i ++) {
    lista[i].innerHTML = parseInt(lista[i].innerHTML) + n;
  }
}

function deepestChild() {
  var deep = document.getElementById("grand-node").querySelector("div");
}


