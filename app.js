const generate = document.querySelector('.generate');
const clear = document.querySelector('.clear');
const checkBox = document.querySelectorAll("[data-container]")
const yeet = document.querySelector('.pooh')
const forms = document.querySelector('.drives');
const absent = document.querySelector('.absent');
const data = document.querySelector('.data');
const tera = document.querySelector('.lingering');
const container = document.querySelector('.display');
const pooh = document.getElementById('pooh');
const drives = document.getElementById('drives');
const zexion = document.getElementById('zexion');
const vexen = document.getElementById('vexen');
const larxene = document.getElementById('larxene');
const lexaeus = document.getElementById('lexaeus');
const marluxia = document.getElementById('marluxia');
const xemnas = document.getElementById('xemnas');
const xigbar = document.getElementById('xigbar');
const xaldin = document.getElementById('xaldin');
const saix = document.getElementById('saix');
const axel = document.getElementById('axel');
const demyx = document.getElementById('demyx');
const luxord = document.getElementById('luxord');
const roxas = document.getElementById('roxas');
const lingering = document.getElementById('lingering');
const active = document.querySelectorAll('.active')
let list = []
let targets = []

generate.addEventListener('click', () => {
  reset(targets)
  compile(list)
  shuffle(list)
  choose(targets)
  console.log(targets)
  console.log(list)
})

clear.addEventListener('click', () => {
  location.reload()
})

function compile(list) {
  if (yeet.checked) {
    list.push('pooh')
  }
  if (forms.checked) {
    list.push('drives')
  }
  if (absent.checked) {
    list.push("zexion", "vexen", "larxene", "lexaeus", "marluxia")
  }
  if (data.checked) {
    list.push("xemnas", "xigbar", "xaldin", "saix", "axel", "demyx", "luxord", "roxas");
  }
  if (tera.checked) {
    list.push("lingering")
  }
  
  return list;
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  //while there are remaining elements to shuffle
  while (currentIndex != 0) {

    //pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    //and swap it with the current element
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  for (let i = 0; i < 7; i++) {
    targets[i] = list.shift()
  }
  return targets
}

function choose(targets) {
  for (let i = 0; i < 7; i++) {
    switch(targets[i]) {
      case "pooh":
        pooh.classList.add('active');
        break;
      case "drives":
        drives.classList.add('active');
        break;
      case "zexion":
        zexion.classList.add('active');
        break;
      case "vexen":
        vexen.classList.add('active');
        break;
      case "larxene":
        larxene.classList.add('active');
        break;
      case "lexaeus":
        lexaeus.classList.add('active');
        break;
      case "marluxia":
        marluxia.classList.add('active');
        break;
      case "xemnas":
        xemnas.classList.add('active');
        break;
      case "xigbar":
        xigbar.classList.add('active');
        break;
      case "xaldin":
        xaldin.classList.add('active');
        break;
      case "saix":
        saix.classList.add('active');
        break;
      case "axel":
        axel.classList.add('active');
        break;
      case "demyx":
        demyx.classList.add('active');
        break;
      case "luxord":
        luxord.classList.add('active');
        break;
      case "roxas":
        roxas.classList.add('active');
        break;
      case "lingering":
        lingering.classList.add('active');
        break;
    }
  }
}

function reset(targets) {
  if (targets == []) return
  for (let i = 0; i < targets.length; i++) {
    switch(targets[i]) {
      case "pooh":
        pooh.classList.remove('active');
        break;
      case "drives":
        drives.classList.remove('active');
        break;
      case "zexion":
        zexion.classList.remove('active');
        break;
      case "vexen":
        vexen.classList.remove('active');
        break;
      case "larxene":
        larxene.classList.remove('active');
        break;
      case "lexaeus":
        lexaeus.classList.remove('active');
        break;
      case "marluxia":
        marluxia.classList.remove('active');
        break;
      case "xemnas":
        xemnas.classList.remove('active');
        break;
      case "xigbar":
        xigbar.classList.remove('active');
        break;
      case "xaldin":
        xaldin.classList.remove('active');
        break;
      case "saix":
        saix.classList.remove('active');
        break;
      case "axel":
        axel.classList.remove('active');
        break;
      case "demyx":
        demyx.classList.remove('active');
        break;
      case "luxord":
        luxord.classList.remove('active');
        break;
      case "roxas":
        roxas.classList.remove('active');
        break;
      case "lingering":
        lingering.classList.remove('active');
        break;
    }
  }
  list = []
  targets = []
}

