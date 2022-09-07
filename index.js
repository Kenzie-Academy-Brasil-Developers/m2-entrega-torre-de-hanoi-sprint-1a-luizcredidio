const principal = document.getElementById("principal");

function iniciarGame() {
  const caixaUm = document.createElement("div");
  caixaUm.classList.add("box");

  const torreUm = document.createElement("div");
  torreUm.classList.add("torre");
  torreUm.id = "t1";

  const h2torreUm = document.createElement("h2");
  h2torreUm.id = "torre1";
  h2torreUm.innerText = "TOWER 1";

  const peçaUm = document.createElement("div");
  peçaUm.id = "p1";
  const peçaDois = document.createElement("div");
  peçaDois.id = "p2";

  const peçaTres = document.createElement("div");
  peçaTres.id = "p3";

  torreUm.appendChild(peçaUm);
  torreUm.appendChild(peçaDois);
  torreUm.appendChild(peçaTres);

  caixaUm.appendChild(h2torreUm);
  caixaUm.appendChild(torreUm);
  principal.appendChild(caixaUm);

  const caixaDois = document.createElement("div");
  caixaDois.classList.add("box");

  const torreDois = document.createElement("div");
  torreDois.classList.add("torre");
  torreDois.id = "t2";

  const h2torreDois = document.createElement("h2");
  h2torreDois.id = "torre2";
  h2torreDois.innerText = "TOWER 2";

  caixaDois.appendChild(h2torreDois);
  caixaDois.appendChild(torreDois);
  principal.appendChild(caixaDois);

  const caixaTres = document.createElement("div");

  const torreTres = document.createElement("div");
  torreTres.classList.add("torre");
  torreTres.id = "t3";

  const h2torreTres = document.createElement("h2");
  h2torreTres.id = "torre3";
  h2torreTres.innerText = "TOWER 3";

  caixaTres.appendChild(h2torreTres);
  caixaTres.appendChild(torreTres);
  principal.appendChild(caixaTres);

  addEvntLst();
}

iniciarGame();

let hidenDisc = null;
let hidenDiscWidth = 0;
let counter = 0;
let torreDois = document.querySelector("#t2");
let torreTres = document.querySelector("#t3");
console.log(torreDois, torreTres);

function click(clickedTower) {
  if (hidenDisc == null) {
    hidenDisc = clickedTower.lastElementChild;
    hidenDiscWidth = clickedTower.lastElementChild.offsetWidth;
    clickedTower.removeChild(clickedTower.lastElementChild);
    counter += 0.5;
    console.log(counter);
    verifyWin();
  } else if (clickedTower.children.length == 0) {
    clickedTower.appendChild(hidenDisc);
    hidenDisc = null;
    counter += 0.5;
    console.log(counter);
    verifyWin();
  } else if (clickedTower.lastElementChild.offsetWidth > hidenDiscWidth) {
    clickedTower.appendChild(hidenDisc);
    hidenDisc = null;
    counter += 0.5;
    console.log(counter);
    verifyWin();
  } else {
    console.log("Disc must be smaller");
  }
}

function restart() {
  principal.innerHTML = "";
  torreDois.innerHTML = "";
  torreTres.innerHTML = "";
  iniciarGame();
  hidenDisc = null;
  hidenDiscWidth = 0;
  counter = 0; 
}

function spanWin() {
  let spanBox = document.createElement("div");
  spanBox.classList.add("popUpDiv");

  let h2Span = document.createElement("h2");
  h2Span.classList.add("h2span");
  h2Span.innerText = "Win!";

  let numberOfMovesResult = document.createElement("span");
  numberOfMovesResult.classList.add("resultCount");
  numberOfMovesResult.innerText = `You made ${counter} moves`;

  let restartBtn = document.createElement("button");
  restartBtn.classList.add("restartBtn");
  restartBtn.innerText = `Restart`;
  restartBtn.addEventListener("click", () => {
    restart();
  });

  spanBox.append(h2Span, numberOfMovesResult, restartBtn);
  principal.appendChild(spanBox);
}

function verifyWin() {
  if (torreDois.children.length == 3 || torreTres.children.length == 3) {
    console.log("Congratulations, you win!");
    spanWin();
  }
}

function addEvntLst() {
  const torres = document.querySelectorAll(".torre");
  torres.forEach((torre) => {
    torre.addEventListener("click", (event) => {
      click(event.currentTarget);
    });
  });
}
