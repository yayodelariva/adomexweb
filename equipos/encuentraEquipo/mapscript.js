const iztapalapa = document.querySelector(".iztapalapa");
const azcapotzalco = document.querySelector(".azcapotzalco");
const gustavoAMadero = document.querySelector(".gustavoAMadero");
const miguelHidalgo = document.querySelector(".miguelHidalgo");
const cuauhtemoc = document.querySelector(".cuauhtemoc");
const venustianoCarranza = document.querySelector(".venustianoCarranza");
const iztcalco = document.querySelector(".iztacalco");
const benitoJuarez = document.querySelector(".benitoJuarez");
const alvaroObregon = document.querySelector(".alvaroObregon");
const cuajimalpaDeMorelos = document.querySelector(".cuajimalpaDeMorelos");
const coyoacan = document.querySelector(".coyoacan");
const tlahuac = document.querySelector(".tlahuac");
const xochimilco = document.querySelector(".xochimilco");
const magdalenaContreras = document.querySelector(".magdalenaContreras");
const tlalpan = document.querySelector(".tlalpan");
const milpaAlta = document.querySelector("#path3249");
const alcaldias = document.querySelectorAll("path");
const mapaAlcaldia = document.querySelector(".mapaAlcaldia");
let alcaldiaDescripcion = document.querySelector(".alcaldiaDescripcion");
let descripcionTitulo = document.querySelector(".descripcionTitulo");
let descripcionInfo = document.querySelector(".descripcionInfo");

// theParent.style.display = "none";
// tlalpan.style.display = "none";

mapaAlcaldia.addEventListener("click", handleAlcaldias, false);

function handleAlcaldias(e) {
  clearContents();
  if (e.target !== e.currentTarget) {
    let clickedItem = e.target.id;
    switch (clickedItem) {
      case "alvaroObregon":
        console.log("Alvaro Obregon");
        descripcionTitulo.textContent = "Alvaro Obregon";
        descripcionInfo.textContent = "descripcion";
        break;
      case "azcapotzalco":
        console.log("Azcapotzalco");
        descripcionTitulo.textContent = "Azcapotzalco";
        descripcionInfo.textContent = "descripcion";
        break;
      case "benitoJuarez":
        console.log("Benito Juarez");
        descripcionTitulo.textContent = "Benito Juarez";
        descripcionInfo.textContent = "descripcion";
        break;
      case "coyoacan":
        console.log("Coyoacan");
        descripcionTitulo.textContent = "Coyoacan";
        descripcionInfo.textContent = "descripcion";
        break;
      case "cuajimalpaDeMorelos":
        console.log("Cuajimalpa");
        descripcionTitulo.textContent = "Cuajimalpa de Morelos";
        descripcionInfo.textContent = "descripcion";
        break;
      case "cuauhtemoc":
        console.log("Cuauhtemoc");
        descripcionTitulo.textContent = "Cuauhtemoc";
        descripcionInfo.textContent = "descripcion";
        break;
      case "gustavoAMadero":
        console.log("Gustavo A. Madero");
        descripcionTitulo.textContent = "Gustavo A. Madero";
        descripcionInfo.textContent = "descripcion";
        break;
      case "iztacalco":
        console.log("Iztacalco");
        descripcionTitulo.textContent = "Iztacalco";
        descripcionInfo.textContent = "descripcion";
        break;
      case "iztapalapa":
        console.log("Iztapalapa");
        descripcionTitulo.textContent = "Iztapalapa";
        descripcionInfo.textContent = "descripcion";
        break;
      case "magdalenaContreras":
        console.log("La Magdalena Contreras");
        descripcionTitulo.textContent = "La Magdalena Contreras";
        descripcionInfo.textContent = "descripcion";
        break;
      case "miguelHidalgo":
        console.log("Miguel Hidalgo");
        descripcionTitulo.textContent = "Miguel Hidalgo";
        descripcionInfo.textContent = "descripcion";
        break;
      case "milpaAlta":
        console.log("Milpa Alta");
        descripcionTitulo.textContent = "Milpa ALta";
        descripcionInfo.textContent = "descripcion";
        break;
      case "tlahuac":
        console.log("Tlahuac");
        descripcionTitulo.textContent = "Tlahuac";
        descripcionInfo.textContent = "descripcion";
        break;
      case "tlalpan":
        console.log("Tlalpan");
        descripcionTitulo.textContent = "Tlalpan";
        descripcionInfo.textContent = "descripcion";
        break;
      case "venustianoCarranza":
        console.log("Venustiano Carranza");
        descripcionTitulo.textContent = "Venustiano Carranza";
        descripcionInfo.textContent = "descripcion";
        break;
      case "xochimilco":
        console.log("Xochimilco");
        descripcionTitulo.textContent = "Xochimilco";
        descripcionInfo.textContent = "descripcion";
        break;
      default:
        console.log("Benito Juarez");
        descripcionTitulo.textContent = "Benito Juarez";
        descripcionInfo.textContent = "descripcion";
        break;
    }
  }
  e.stopPropagation();
}

function clearContents() {
  descripcionTitulo.textContent = "";
  descripcionInfo.textContent = "";
}

descripcionTitulo.textContent = "A";
descripcionInfo.textContent = "B";
