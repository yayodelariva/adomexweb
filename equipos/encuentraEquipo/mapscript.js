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
const alcaldiaMenu = document.querySelector("#alcaldiaMenu");
const alcaldiasMenuContainer = document.querySelector(
  ".alcaldiasMenuContainer"
);
const alcaldiasFormTop = document.querySelector(".alcaldiasFormTop");
const alcaldiasForm = document.querySelector(".alcaldiasForm");
const ubicacionInfoExtra2ID = document.querySelector("#ubicacionInfoExtra2");
const ubicacionInfoExtra3ID = document.querySelector("#ubicacionInfoExtra3");
const ubicacionYLogoContainerID = document.querySelector(
  "#ubicacionYLogoContainer"
);
const alcaldiasMenuContainerID = document.querySelector(
  "#alcaldiasMenuContainer"
);

let alcaldiaDescripcion = document.querySelector(".alcaldiaDescripcion");
let descripcionTitulo = document.querySelector(".alcaldiaTitulo");
let ubicacionTitulo = document.querySelector(".ubicacionTitulo");
let descripcionInfo = document.querySelector(".ubicacionInfo");
let descripcionInfo2 = document.querySelector(".ubicacionInfoExtra");
let descripcionInfo3 = document.querySelector(".ubicacionInfoExtra2");
let descripcionInfo4 = document.querySelector(".ubicacionInfoExtra3");
let horariosTitulo = document.querySelector(".horariosTitulo");
let horariosInfo = document.querySelector(".horariosInfo");
let costosTitulo = document.querySelector(".costosTitulo");
let costosInfo = document.querySelector(".costosInfo");
let coachTitulo = document.querySelector(".coachTitulo");
let coachInfo = document.querySelector(".coachInfo");
let coachInfo2 = document.querySelector(".coachInfoExtra");
let costosWrapper = document.querySelector(".costosWrapper");
let coachWrapper = document.querySelector(".coachWrapper");
let contactoWrapper = document.querySelector(".contactoWrapper");
let locationIcon = document.querySelector(".locationIcon");
let facebookIcon = document.querySelector(".facebookIcon");
let instagramIcon = document.querySelector(".instagramIcon");
let locationIconInfo = document.querySelector(".locationIconInfo");
let locationIconInfo2 = document.querySelector(".locationIconInfo2");
let locationIcon1 = document.querySelector(".locationLogo1");
let locationIcon2 = document.querySelector(".locationLogo2");
let whatsappIconInfo = document.querySelector(".whatsappIconInfo");
let whatsappIconInfo2 = document.querySelector(".whatsappIconInfo2");
let whatsappIcon = document.querySelector(".whatsappIcon");
let whatsappIcon2 = document.querySelector(".whatsappLogo2");

const alvaroObregonContent = document.querySelector("#alvaroObregonContent");
const azcapotzalcoContent = document.querySelector("#azcapotzalcoContent");
const benitoJuarezContent = document.querySelector("#benitoJuarezContent");
const coyoacanContent = document.querySelector("#coyoacanContent");
const cuajimalpaContent = document.querySelector("#cuajimalpaContent");
const cuauhtemocContent = document.querySelector("#cuauhtemocContent");
const gustavoAMaderoContent = document.querySelector("#gustavoAMaderoContent");
const iztacalcoContent = document.querySelector("#iztacalcoContent");
const iztapalapaContent = document.querySelector("#iztapalapaContent");
const magdalenaContrerasContent = document.querySelector(
  "#magdalenaContrerasContent"
);
const miguelHidalgoContent = document.querySelector("#miguelHidalgoContent");
const milpaAltaContent = document.querySelector("#milpaAltaContent");
const tlahuacContent = document.querySelector("#tlahuacContent");
const tlalpanContent = document.querySelector("#tlalpanContent");
const venustianoCarranzaContent = document.querySelector(
  "#venustianoCarranzaContent"
);
const xochimilcoContent = document.querySelector("#xochimilcoContent");

// let logoWrapper = document.querySelector(".logoWrapper");
// let adomexLogo = document.createElement("img");
// adomexLogo.src = "../../images/adomex-cuadrado.png";
let currentAlcaldia = "";
const paths = document.querySelectorAll("path");
const hoverText = document.getElementById("alcaldiaHoverText");

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
        currentAlcaldia = "Alvaro Obregón";
        handleEmptyAlcaldia();

        break;
      case "azcapotzalco":
        console.log("Azcapotzalco");
        descripcionTitulo.textContent = "Azcapotzalco";
        // descripcionInfo.textContent = "descripcion";
        // horariosInfo.textContent = "";
        // costosInfo.textContent = "";
        // coachInfo.textContent = "";
        currentAlcaldia = "Azcapotzalco";
        handleEmptyAlcaldia();
        break;
      case "benitoJuarez":
        console.log("Benito Juarez");
        coachWrapper.style.display = "block";
        costosWrapper.style.display = "block";
        descripcionTitulo.textContent = "Benito Juarez";
        descripcionInfo.textContent = "Gimnasio Eduardo Gorraez";
        descripcionInfo2.textContent =
          "Gral. Anaya, Benito Juárez, 03340 Ciudad de México, CDMX";
        descripcionInfo3.textContent = "";
        descripcionInfo4.textContent = "";
        locationIcon1.style.display = "block";
        locationIcon2.style.display = "none";
        locationIconInfo.setAttribute(
          "href",
          "https://maps.app.goo.gl/BYMmb5JcQtckgd3A8"
        );
        horariosInfo.textContent =
          "Lunes y miércoles de 21:00 a 23:00 - Femenil\n\nMartes y jueves de 21:00 a 23:00 - Varonil\n\nViernes de 21:00 a 23:00 - Mixto\n\nSábados de 08:00 a 10:00 Infantil/Cloth Mixto/Foam Varonil, Femenil y Mixto";
        costosInfo.textContent =
          "$300 mensuales\n*incluye acceso a entrenamientos de ambos formatos (foam y cloth), así como a los entrenamientos mixtos y al gimnasio";
        coachInfo.style.display = "none";
        coachInfo2.textContent = "Luis de la Riva: Foam Varonil";
        whatsappIcon2.style.display = "block";
        whatsappIconInfo.style.display = "none";
        whatsappIconInfo2.setAttribute(
          "href",
          "https://wa.me/525514329482?text=¡Hola!%20Me%20gustaría%20más%20información%20sobre%20los%20entrenamientos%20en%20la%20alcaldía%20Benito%20Juárez"
        );
        showCoachWrapper();
        showContactoWrapper();
        hideContactoWrapper();
        break;
      case "coyoacan":
        console.log("Coyoacan");
        descripcionTitulo.textContent = "Coyoacan";
        // descripcionInfo.textContent = "descripcion";
        // horariosInfo.textContent = "";
        // costosInfo.textContent = "";
        // coachInfo.textContent = "";
        currentAlcaldia = "Coyoacán";
        handleEmptyAlcaldia();
        break;
      case "cuajimalpaDeMorelos":
        console.log("Cuajimalpa");
        descripcionTitulo.textContent = "Cuajimalpa de Morelos";
        // descripcionInfo.textContent = "descripcion";
        // horariosInfo.textContent = "";
        // costosInfo.textContent = "";
        // coachInfo.textContent = "";
        currentAlcaldia = "Cuajimalpa";
        handleEmptyAlcaldia();
        break;
      case "cuauhtemoc":
        console.log("Cuauhtemoc");
        descripcionTitulo.textContent = "Cuauhtemoc";
        // descripcionInfo.textContent = "descripcion";
        // horariosInfo.textContent = "";
        // costosInfo.textContent = "";
        // coachInfo.textContent = "";
        currentAlcaldia = "Cuauhtémoc";
        handleEmptyAlcaldia();
        break;
      case "gustavoAMadero":
        console.log("Gustavo A. Madero");
        descripcionTitulo.textContent = "Gustavo A. Madero";
        currentAlcaldia = "Gustavo A. Madero";
        // descripcionInfo.textContent = "descripcion";
        // horariosInfo.textContent = "";
        // costosInfo.textContent = "";
        // coachInfo.textContent = "";
        handleEmptyAlcaldia();
        break;
      case "iztacalco":
        console.log("Iztacalco");
        descripcionTitulo.textContent = "Iztacalco";
        // descripcionInfo.textContent = "descripcion";
        // horariosInfo.textContent = "";
        // costosInfo.textContent = "";
        // coachInfo.textContent = "";
        currentAlcaldia = "Iztacalco";
        handleEmptyAlcaldia();
        break;
      case "iztapalapa":
        console.log("Iztapalapa");
        showCostosWrapper();
        showCoachWrapper();
        hideContactoWrapper();
        descripcionTitulo.textContent = "Iztapalapa";
        descripcionInfo.textContent = "Utopía Ixtapalcalli";
        descripcionInfo2.textContent =
          "Ayuntamiento 133, San Pedro Iztapalapa, CDMX";
        descripcionInfo3.textContent = "";
        descripcionInfo4.textContent = "";
        locationIcon1.style.display = "block";
        locationIcon2.style.display = "none";
        locationIconInfo.setAttribute(
          "href",
          "https://maps.app.goo.gl/YM4X1zYgsXxyM1cA9"
        );
        horariosInfo.textContent =
          "Miércoles y Viernes de 15:30 a 17:30 - Foam mixto todas las edades\n\nSábados de 09:00 a 11:30 - Foam mixto todas las edades";
        costosInfo.textContent = "GRATIS";
        coachInfo.textContent = "Carlos “Pato” de la Riva: 5534449982";
        coachInfo2.textContent = "";
        whatsappIcon2.style.display = "none";
        whatsappIconInfo.setAttribute(
          "href",
          "https://wa.me/525534449982?text=¡Hola!%20Me%20gustaría%20más%20información%20sobre%20los%20entrenamientos%20en%20la%20alcaldía%20Iztapalapa"
        );
        break;
      case "magdalenaContreras":
        console.log("La Magdalena Contreras");
        descripcionTitulo.textContent = "La Magdalena Contreras";
        // descripcionInfo.textContent = "descripcion";
        // horariosInfo.textContent = "";
        // costosInfo.textContent = "";
        // coachInfo.textContent = "";
        currentAlcaldia = "Magdalena Contreras";
        handleEmptyAlcaldia();
        break;
      case "miguelHidalgo":
        console.log("Miguel Hidalgo");
        descripcionTitulo.textContent = "Miguel Hidalgo";
        // descripcionInfo.textContent = "descripcion";
        // horariosInfo.textContent = "";
        // costosInfo.textContent = "";
        // coachInfo.textContent = "";
        currentAlcaldia = "Miguel Hidalgo";
        handleEmptyAlcaldia();
        break;
      case "milpaAlta":
        console.log("Milpa Alta");
        descripcionTitulo.textContent = "Milpa ALta";
        // descripcionInfo.textContent = "descripcion";
        // horariosInfo.textContent = "";
        // costosInfo.textContent = "";
        // coachInfo.textContent = "";
        currentAlcaldia = "Milpa Alta";
        handleEmptyAlcaldia();
        break;
      case "tlahuac":
        console.log("Tlahuac");
        descripcionTitulo.textContent = "Tlahuac";
        // descripcionInfo.textContent = "descripcion";
        // horariosInfo.textContent = "";
        // costosInfo.textContent = "";
        // coachInfo.textContent = "";
        currentAlcaldia = "Tlahuac";
        handleEmptyAlcaldia();
        break;
      case "tlalpan":
        console.log("Tlalpan");
        showCostosWrapper();
        showCoachWrapper();
        hideContactoWrapper();
        descripcionTitulo.textContent = "Tlalpan";
        descripcionInfo.textContent = "Gimnasio Juan Fabila Villa Olímpica";
        descripcionInfo2.textContent =
          "Av. de los Insurgentes Sur s/n, Parques del Pedregal, Tlalpan, 14010 Ciudad de México, CDMX";
        let hr = document.createElement("hr");
        hr.className = "hrSeparator";
        descripcionInfo2.appendChild(hr);
        descripcionInfo3.textContent = "Deportivo La Joya";
        descripcionInfo4.textContent =
          "Av. de los Insurgentes Sur s/n, Parques del Pedregal, Tlalpan, 14010 Ciudad de México, CDMX";
        locationIcon1.style.display = "block";
        locationIcon2.style.display = "block";
        locationIconInfo.setAttribute(
          "href",
          "https://maps.app.goo.gl/Mcz5rYfaJRkc56L36"
        );
        locationIconInfo2.setAttribute(
          "href",
          "https://maps.app.goo.gl/C8Kn5KDFC7gCd2MAA"
        );
        horariosInfo.textContent =
          "Lunes y Miércoles de 19:00 a 22:00 - Cloth Mixto - Gimnasio Juan Fabila Villa Olímpica\n\nMartes y Jueves de 09:00 a 10:30 - Infantil - Deportivo La Joya";
        costosInfo.textContent =
          "Cloth Mixto: $300 Mensual\n\nInfantil: GRATIS";
        coachInfo.textContent = "Carlos “Pato” de la Riva";
        coachInfo2.textContent = "";
        whatsappIcon2.style.display = "none";
        whatsappIconInfo.setAttribute(
          "href",
          "https://wa.me/525534449982?text=¡Hola!%20Me%20gustaría%20más%20información%20sobre%20los%20entrenamientos%20en%20la%20alcaldía%20Tlalpan"
        );
        break;
      case "venustianoCarranza":
        console.log("Venustiano Carranza");
        descripcionTitulo.textContent = "Venustiano Carranza";
        // descripcionInfo.textContent = "descripcion";
        // horariosInfo.textContent = "";
        // costosInfo.textContent = "";
        // coachInfo.textContent = "";
        currentAlcaldia = "Venustiano Carranza";
        handleEmptyAlcaldia();
        break;
      case "xochimilco":
        console.log("Xochimilco");
        descripcionTitulo.textContent = "Xochimilco";
        // descripcionInfo.textContent = "descripcion";
        // horariosInfo.textContent = "";
        // costosInfo.textContent = "";
        // coachInfo.textContent = "";
        currentAlcaldia = "Xochimilco";
        handleEmptyAlcaldia();
        break;
      default:
        // prints whenever the map is clicked close to the border
        console.log("Benito Juarez");
        descripcionTitulo.textContent = "";
        ubicacionTitulo.textContent =
          "Aquí podrás encontrar en dónde entrenar, solo da click en tu alcaldía y recibirás toda la información necesaria.";
        descripcionInfo.textContent = "";
        horariosTitulo.textContent =
          "¿No encuentras equipo en tu alcaldía? ¡Abre tu propio equipo! Comunícate con nosotros.";
        horariosInfo.textContent = "";
        costosTitulo.textContent = "";
        costosInfo.textContent = "";
        coachTitulo.textContent = "";
        coachInfo.textContent = "";
        descripcionInfo3.textContent = "";
        descripcionInfo4.textContent = "";

        locationIcon1.style.display = "none";
        locationIcon2.style.display = "none";
        hideCoachWrapper();
        hideCostosWrapper();
        showContactoWrapper();
        break;
    }
  }
  e.stopPropagation();
}

// HOVER FUNCTIONALITY (takes id of alcaldias and formats it to capitalize first letter and display proper spaces between words to later display it as toolkit text when hovering)
paths.forEach((path) => {
  path.addEventListener("mouseenter", (e) => {
    const name = e.target.id
      .replace(/([A-Z])/g, " $1") // Add space before each uppercase letter
      .trim() // Remove any leading/trailing spaces
      .split(" ") // Split the string into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Example: 'gustavoAMadero' to 'gustavo A Madero'
    hoverText.textContent = name;
    hoverText.style.display = "block";
  });

  path.addEventListener("mousemove", (e) => {
    hoverText.style.left = `${e.pageX + 10}px`; // Position the text near the cursor
    hoverText.style.top = `${e.pageY + 10}px`;
  });

  path.addEventListener("mouseleave", () => {
    hoverText.style.display = "none";
  });
});

function clearContents() {
  descripcionTitulo.textContent = "";
  descripcionInfo.textContent = "";
  descripcionInfo2.textContent = "";
  ubicacionTitulo.textContent = "Ubicación";
  horariosTitulo.textContent = "Horarios";
  costosTitulo.textContent = "Costo";
  coachTitulo.textContent = "Coach";
}

function handleEmptyAlcaldia() {
  descripcionTitulo.textContent = currentAlcaldia;
  ubicacionTitulo.textContent =
    "Lo sentimos, por el momento ésta alcaldía no cuenta con un equipo. Si perteneces a esta alcaldía y te gustaría abrir tu propio equipo, ¡Comunícate con nosotros!";
  descripcionInfo.textContent = "";
  descripcionInfo3.textContent = "";
  descripcionInfo4.textContent = "";
  horariosTitulo.textContent =
    "O si prefieres entrenar con un equipo existente, puedes dar click a las alcaldías de color verde";
  coachTitulo.textContent = "";
  costosTitulo.textContent = "";
  horariosInfo.textContent = "";
  costosInfo.textContent = "";
  coachInfo.textContent = "";
  coachInfo2.textContent = "";
  locationIcon1.style.display = "none";
  locationIcon2.style.display = "none";
  hideCoachWrapper();
  hideCostosWrapper();
  showContactoWrapper();
}

// THIS IS THE LANDING PAGE OF THE MAP
ubicacionTitulo.textContent =
  "Aquí podrás encontrar en dónde entrenar, solo da click en tu alcaldía y recibirás toda la información necesaria.";
horariosTitulo.textContent =
  "¿No encuentras equipo en tu alcaldía? ¡Abre tu propio equipo! Comunícate con nosotros.";
costosTitulo.textContent = "";
coachTitulo.textContent = "";
locationIcon.style.display = "none";
locationIcon1.style.display = "none";
locationIcon2.style.display = "none";
showContactoWrapper();
hideCoachWrapper();
hideCostosWrapper();

// HIDES COACHWRAPPER AND COSTOSWRAPPER
function hideCoachWrapper() {
  coachWrapper.style.display = "none";
}
function hideCostosWrapper() {
  costosWrapper.style.display = "none";
}
function hideContactoWrapper() {
  contactoWrapper.style.display = "none";
}

// SHOWS COACHWRAPPER AND COSTOSWRAPPER
function showCoachWrapper() {
  coachWrapper.style.display = "block";
}
function showCostosWrapper() {
  costosWrapper.style.display = "block";
}
function showContactoWrapper() {
  contactoWrapper.style.display = "flex";
}

function showAlcaldia() {
  this.classList.toggle("show");
}

function hideAlcaldia() {
  this.classList.toggle("hide");
}

// EVERYTHING RELATED TO MOBILE ALCALDIA MENU BELOW

alcaldiaMenu.addEventListener("change", handleAlcaldiaSelection);

function handleAlcaldiaSelection() {
  clearContents();
  alcaldiasMenuContainer.prepend(alcaldiasForm);
  alcaldiasFormTop.append(alcaldiasForm);
  ubicacionInfoExtra2ID.classList.add("hide");
  ubicacionInfoExtra3ID.classList.add("hide");
  ubicacionYLogoContainerID.classList.add("hide");
  alcaldiasMenuContainerID.classList.add("hide");

  switch (alcaldiaMenu.value) {
    case "alvaroObregon":
      currentAlcaldia = "Alvaro Obregón"; ///changes descripcionTitulo textContent
      handleEmptyAlcaldia();
      break;

    case "azcapotzalco":
      currentAlcaldia = "Azcapotzalco";
      handleEmptyAlcaldia();
      break;

    case "benitoJuarez":
      coachWrapper.style.display = "block";
      costosWrapper.style.display = "block";
      descripcionTitulo.textContent = "Benito Juarez";
      descripcionInfo.textContent = "Gimnasio Eduardo Gorraez";
      descripcionInfo2.textContent =
        "Gral. Anaya, Benito Juárez, 03340 Ciudad de México, CDMX";
      descripcionInfo3.textContent = "";
      descripcionInfo4.textContent = "";
      locationIcon1.style.display = "block";
      locationIcon2.style.display = "none";
      locationIconInfo.setAttribute(
        "href",
        "https://maps.app.goo.gl/BYMmb5JcQtckgd3A8"
      );
      horariosInfo.textContent =
        "Lunes y miércoles de 21:00 a 23:00 - Femenil\n\nMartes y jueves de 21:00 a 23:00 - Varonil\n\nViernes de 21:00 a 23:00 - Mixto\n\nSábados de 08:00 a 10:00 Infantil/Cloth Mixto/Foam Varonil, Femenil y Mixto";
      costosInfo.textContent =
        "$300 mensuales\n*incluye acceso a entrenamientos de ambos formatos (foam y cloth), así como a los entrenamientos mixtos y al gimnasio";
      coachInfo.textContent = "Rogelio Morales: Foam Femenil, Foam Infantil";
      coachInfo2.textContent = "Luis de la Riva: Foam Varonil";
      whatsappIcon2.style.display = "block";
      whatsappIconInfo.setAttribute(
        "href",
        "https://wa.me/525547755866?text=¡Hola!%20Me%20gustaría%20más%20información%20sobre%20los%20entrenamientos%20en%20la%20alcaldía%20Benito%20Juárez"
      );
      whatsappIconInfo2.setAttribute(
        "href",
        "https://wa.me/525514329482?text=¡Hola!%20Me%20gustaría%20más%20información%20sobre%20los%20entrenamientos%20en%20la%20alcaldía%20Benito%20Juárez"
      );
      showCoachWrapper();
      showContactoWrapper();
      hideContactoWrapper();
      // Code for benitoJuarez
      break;

    case "coyoacan":
      currentAlcaldia = "Coyoacán";
      handleEmptyAlcaldia();
      break;

    case "cuajimalpa":
      currentAlcaldia = "Cuajimalpa";
      handleEmptyAlcaldia();
      break;

    case "cuauhtemoc":
      currentAlcaldia = "Cuauhtémoc";
      handleEmptyAlcaldia();
      break;

    case "gustavoAMadero":
      currentAlcaldia = "Gustavo A. Madero";
      handleEmptyAlcaldia();
      break;

    case "iztacalco":
      currentAlcaldia = "Iztacalco";
      handleEmptyAlcaldia();
      break;

    case "iztapalapa":
      console.log("Iztapalapa");
      showCostosWrapper();
      showCoachWrapper();
      hideContactoWrapper();
      descripcionTitulo.textContent = "Iztapalapa";
      descripcionInfo.textContent = "Utopía Ixtapalcalli";
      descripcionInfo2.textContent =
        "Ayuntamiento 133, San Pedro Iztapalapa, CDMX";
      descripcionInfo3.textContent = "";
      descripcionInfo4.textContent = "";
      locationIcon1.style.display = "block";
      locationIcon2.style.display = "none";
      locationIconInfo.setAttribute(
        "href",
        "https://maps.app.goo.gl/YM4X1zYgsXxyM1cA9"
      );
      horariosInfo.textContent =
        "Miércoles y Viernes de 15:30 a 17:30 - Foam mixto todas las edades\n\nSábados de 09:00 a 11:30 - Foam mixto todas las edades";
      costosInfo.textContent = "GRATIS";
      coachInfo.textContent = "Carlos “Pato” de la Riva: 5534449982";
      coachInfo2.textContent = "";
      whatsappIcon2.style.display = "none";
      whatsappIconInfo.setAttribute(
        "href",
        "https://wa.me/525534449982?text=¡Hola!%20Me%20gustaría%20más%20información%20sobre%20los%20entrenamientos%20en%20la%20alcaldía%20Iztapalapa"
      );
      break;

    case "magdalenaContreras":
      currentAlcaldia = "Magdalena Contreras";
      handleEmptyAlcaldia();
      break;

    case "miguelHidalgo":
      currentAlcaldia = "Miguel Hidalgo";
      handleEmptyAlcaldia();
      break;

    case "milpaAlta":
      currentAlcaldia = "Milpa Alta";
      handleEmptyAlcaldia();
      break;

    case "tlahuac":
      currentAlcaldia = "Tláhuac";
      handleEmptyAlcaldia();
      break;

    case "tlalpan":
      console.log("Tlalpan");
      showCostosWrapper();
      showCoachWrapper();
      hideContactoWrapper();
      ubicacionInfoExtra3ID.classList.remove("hide");
      descripcionTitulo.textContent = "Tlalpan";
      descripcionInfo.textContent = "Gimnasio Juan Fabila Villa Olímpica";
      descripcionInfo2.textContent =
        "Av. de los Insurgentes Sur s/n, Parques del Pedregal, Tlalpan, 14010 Ciudad de México, CDMX";
      let hr = document.createElement("hr");
      hr.className = "hrSeparator";
      descripcionInfo2.appendChild(hr);
      descripcionInfo3.textContent = "Deportivo La Joya";
      descripcionInfo4.textContent =
        "Av. de los Insurgentes Sur s/n, Parques del Pedregal, Tlalpan, 14010 Ciudad de México, CDMX";
      locationIcon1.style.display = "block";
      locationIcon2.style.display = "block";
      locationIconInfo.setAttribute(
        "href",
        "https://maps.app.goo.gl/Mcz5rYfaJRkc56L36"
      );
      locationIconInfo2.setAttribute(
        "href",
        "https://maps.app.goo.gl/C8Kn5KDFC7gCd2MAA"
      );
      horariosInfo.textContent =
        "Lunes y Miércoles de 19:00 a 22:00 - Cloth Mixto - Gimnasio Juan Fabila Villa Olímpica\n\nMartes y Jueves de 09:00 a 10:30 - Infantil - Deportivo La Joya";
      costosInfo.textContent = "Cloth Mixto: $300 Mensual\n\nInfantil: GRATIS";
      coachInfo.textContent = "Carlos “Pato” de la Riva";
      coachInfo2.textContent = "";
      whatsappIcon2.style.display = "none";
      whatsappIconInfo.setAttribute(
        "href",
        "https://wa.me/525534449982?text=¡Hola!%20Me%20gustaría%20más%20información%20sobre%20los%20entrenamientos%20en%20la%20alcaldía%20Tlalpan"
      );
      break;

    case "venustianoCarranza":
      currentAlcaldia = "Venustiano Carranza";
      handleEmptyAlcaldia();
      break;

    case "xochimilco":
      currentAlcaldia = "Xochimilco";
      handleEmptyAlcaldia();
      break;

    default:
      descripcionTitulo.textContent = "";
      ubicacionTitulo.textContent =
        "Aquí podrás encontrar en dónde entrenar, solo da click en tu alcaldía y recibirás toda la información necesaria.";
      descripcionInfo.textContent = "";
      horariosTitulo.textContent =
        "¿No encuentras equipo en tu alcaldía? ¡Abre tu propio equipo! Comunícate con nosotros.";
      horariosInfo.textContent = "";
      costosTitulo.textContent = "";
      costosInfo.textContent = "";
      coachTitulo.textContent = "";
      coachInfo.textContent = "";
      descripcionInfo3.textContent = "";
      descripcionInfo4.textContent = "";

      locationIcon1.style.display = "none";
      locationIcon2.style.display = "none";
      hideCoachWrapper();
      hideCostosWrapper();
      showContactoWrapper();
      break;
  }
}
