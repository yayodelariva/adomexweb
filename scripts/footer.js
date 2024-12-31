const quienesSomosFooter = document.querySelector(".quienesSomosFooter");
const capacitacionesFooter = document.querySelector(".capacitacionesFooter");
const queEsElDodgeballFooter = document.querySelector(
  ".queEsElDodgeballFooter"
);
const elDodgeballEnMexicoFooter = document.querySelector(
  ".elDodgeballEnMexicoFooter"
);
const encuentraEquipoFooter = document.querySelector(".encuentraEquipoFooter");
const equiposAfiliadosFooter = document.querySelector(
  ".equiposAfiliadosFooter"
);
const ligaMexicanaDeDodgeballFooter = document.querySelector(
  ".ligaMexicanaDeDodgeballFooter"
);
const ligasRecreativasFooter = document.querySelector(
  ".ligasRecreativasFooter"
);
const abreTuPropiaLigaFooter = document.querySelector(
  ".abreTuPropiaLigaFooter"
);
const eventosFooter = document.querySelector(".eventosFooter");
const fotosFooter = document.querySelector(".fotosFooter");
const avisoPrivacidad = document.querySelector(".avisoPrivacidad");
const creditContainer = document.querySelector(".creditContainer");
const facebookIconFooter = document.querySelector(".facebookIconFooter");
const instagramIconFooter = document.querySelector(".instagramIconFooter");
const whatsappIconFooter = document.querySelector(".whatsappIconFooter");

const logoHunzaContainer = document.querySelector(".logoHunza");
const logoBJContainer = document.querySelector(".logoBJ");
const logoIztapalapaContainer = document.querySelector(".logoIztapalapa");
const logoUtopiaContainer = document.querySelector(".logoUtopia");
const logoTlalpanContainer = document.querySelector(".logoTlalpan");
const logoLhasaContainer = document.querySelector(".logoLhasa");

const logoHunza = document.createElement("img");
const logoBJ = document.createElement("img");
const logoIztapalapa = document.createElement("img");
const logoUtopia = document.createElement("img");
const logoTlalpan = document.createElement("img");
const logoLhasa = document.createElement("img");

//NAVBAR PATHING

if (window.location.pathname.includes("/quienesSomos/")) {
  quienesSomosFooter.href = "index.html";
  capacitacionesFooter.href = "../capacitaciones/index.html";
  queEsElDodgeballFooter.href = "../queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href = "../elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "../../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href =
    "../../ligas/ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "../../ligas/ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "../../ligas/abreTuPropiaLiga/index.html";
  eventosFooter.href = "../../eventos/index.html";
  fotosFooter.href = "../../fotossitio/index.html";
  avisoPrivacidad.href = "../../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImgLong();
} else if (window.location.pathname.includes("/capacitaciones/")) {
  quienesSomosFooter.href = "../quienesSomos/index.html";
  capacitacionesFooter.href = "index.html";
  queEsElDodgeballFooter.href = "../queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href = "../elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "../../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href =
    "../../ligas/ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "../../ligas/ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "../../ligas/abreTuPropiaLiga/index.html";
  eventosFooter.href = "../../eventos/index.html";
  fotosFooter.href = "../../fotossitio/index.html";
  avisoPrivacidad.href = "../../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImgLong();
} else if (window.location.pathname.includes("/queEsElDodgeball/")) {
  quienesSomosFooter.href = "../quienesSomos/index.html";
  capacitacionesFooter.href = "../capacitaciones/index.html";
  queEsElDodgeballFooter.href = "index.html";
  elDodgeballEnMexicoFooter.href = "../elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "../../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href =
    "../../ligas/ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "../../ligas/ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "../../ligas/abreTuPropiaLiga/index.html";
  eventosFooter.href = "../../eventos/index.html";
  fotosFooter.href = "../../fotossitio/index.html";
  avisoPrivacidad.href = "../../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImgLong();
} else if (window.location.pathname.includes("/elDodgeballEnMexico/")) {
  quienesSomosFooter.href = "../quienesSomos/index.html";
  capacitacionesFooter.href = "../capacitaciones/index.html";
  queEsElDodgeballFooter.href = "../queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href = "index.html";
  encuentraEquipoFooter.href = "../../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href =
    "../../ligas/ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "../../ligas/ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "../../ligas/abreTuPropiaLiga/index.html";
  eventosFooter.href = "../../eventos/index.html";
  fotosFooter.href = "../../fotossitio/index.html";
  avisoPrivacidad.href = "../../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImgLong();
} else if (window.location.pathname.includes("/sobreAdomex/")) {
  quienesSomosFooter.href = "quienesSomos/index.html";
  capacitacionesFooter.href = "capacitaciones/index.html";
  queEsElDodgeballFooter.href = "queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href = "elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href =
    "../ligas/ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "../ligas/ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "../ligas/abreTuPropiaLiga/index.html";
  eventosFooter.href = "../eventos/index.html";
  fotosFooter.href = "../fotossitio/index.html";
  avisoPrivacidad.href = "../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImg();
} else if (window.location.pathname.includes("/encuentraEquipo/")) {
  quienesSomosFooter.href = "../../sobreAdomex/quienesSomos/index.html";
  capacitacionesFooter.href = "../../sobreAdomex/capacitaciones/index.html";
  queEsElDodgeballFooter.href = "../../sobreAdomex/queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "../../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href =
    "../../ligas/ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "../../ligas/ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "../../ligas/abreTuPropiaLiga/index.html";
  eventosFooter.href = "../../eventos/index.html";
  fotosFooter.href = "../../fotossitio/index.html";
  avisoPrivacidad.href = "../../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImgLong();
} else if (window.location.pathname.includes("/equiposAfiliados/")) {
  quienesSomosFooter.href = "../../sobreAdomex/quienesSomos/index.html";
  capacitacionesFooter.href = "../../sobreAdomex/capacitaciones/index.html";
  queEsElDodgeballFooter.href = "../../sobreAdomex/queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "../../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href =
    "../../ligas/ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "../../ligas/ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "../../ligas/abreTuPropiaLiga/index.html";
  eventosFooter.href = "../../eventos/index.html";
  fotosFooter.href = "../../fotossitio/index.html";
  avisoPrivacidad.href = "../../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImgLong();
} else if (window.location.pathname.includes("/equipos/")) {
  quienesSomosFooter.href = "../sobreAdomex/quienesSomos/index.html";
  capacitacionesFooter.href = "../sobreAdomex/capacitaciones/index.html";
  queEsElDodgeballFooter.href = "../sobreAdomex/queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href =
    "../sobreAdomex/elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href =
    "../../ligas/ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "../ligas/ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "../ligas/abreTuPropiaLiga/index.html";
  eventosFooter.href = "../eventos/index.html";
  fotosFooter.href = "../fotossitio/index.html";
  avisoPrivacidad.href = "../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImg();
} else if (window.location.pathname.includes("/ligaMexicanaDeDodgeball/")) {
  quienesSomosFooter.href = "../../sobreAdomex/quienesSomos/index.html";
  capacitacionesFooter.href = "../../sobreAdomex/capacitaciones/index.html";
  queEsElDodgeballFooter.href = "../../sobreAdomex/queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "../../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href =
    "../../ligas/ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "../../ligas/ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "../../ligas/abreTuPropiaLiga/index.html";
  eventosFooter.href = "../../eventos/index.html";
  fotosFooter.href = "../../fotossitio/index.html";
  avisoPrivacidad.href = "../../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImgLong();
} else if (window.location.pathname.includes("/abreTuPropiaLiga/")) {
  quienesSomosFooter.href = "../../sobreAdomex/quienesSomos/index.html";
  capacitacionesFooter.href = "../../sobreAdomex/capacitaciones/index.html";
  queEsElDodgeballFooter.href = "../../sobreAdomex/queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "../../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href =
    "../../ligas/ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "../../ligas/ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "../../ligas/abreTuPropiaLiga/index.html";
  eventosFooter.href = "../../eventos/index.html";
  fotosFooter.href = "../../fotossitio/index.html";
  avisoPrivacidad.href = "../../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImgLong();
} else if (window.location.pathname.includes("/ligasRecreativas/")) {
  quienesSomosFooter.href = "../../sobreAdomex/quienesSomos/index.html";
  capacitacionesFooter.href = "../../sobreAdomex/capacitaciones/index.html";
  queEsElDodgeballFooter.href = "../../sobreAdomex/queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "../../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href = "../ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "index.html";
  abreTuPropiaLigaFooter.href = "../abreTuPropiaLiga/index.html";
  eventosFooter.href = "../../eventos/index.html";
  fotosFooter.href = "../../fotossitio/index.html";
  avisoPrivacidad.href = "../../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImgLong();
} else if (window.location.pathname.includes("/ligas/")) {
  quienesSomosFooter.href = "../sobreAdomex/quienesSomos/index.html";
  capacitacionesFooter.href = "../sobreAdomex/capacitaciones/index.html";
  queEsElDodgeballFooter.href = "../sobreAdomex/queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href =
    "../sobreAdomex/elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href = "ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "abreTuPropiaLiga/index.html";
  eventosFooter.href = "../eventos/index.html";
  fotosFooter.href = "../fotossitio/index.html";
  avisoPrivacidad.href = "../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImg();
} else if (window.location.pathname.includes("/eventos/")) {
  quienesSomosFooter.href = "../sobreAdomex/quienesSomos/index.html";
  capacitacionesFooter.href = "../sobreAdomex/capacitaciones/index.html";
  queEsElDodgeballFooter.href = "../sobreAdomex/queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href =
    "../sobreAdomex/elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href =
    "../../ligas/ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "../ligas/ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "../ligas/abreTuPropiaLiga/index.html";
  eventosFooter.href = "../eventos/index.html";
  fotosFooter.href = "../fotossitio/index.html";
  avisoPrivacidad.href = "../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImg();
} else if (window.location.pathname.includes("/fotossitio/")) {
  quienesSomosFooter.href = "../sobreAdomex/quienesSomos/index.html";
  capacitacionesFooter.href = "../sobreAdomex/capacitaciones/index.html";
  queEsElDodgeballFooter.href = "../sobreAdomex/queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href =
    "../sobreAdomex/elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "../equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "../equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href =
    "../../ligas/ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "../ligas/ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "../ligas/abreTuPropiaLiga/index.html";
  eventosFooter.href = "../eventos/index.html";
  fotosFooter.href = "../fotossitio/index.html";
  avisoPrivacidad.href = "../privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  getSocialMediaLinks();
  getLogoLinks();
  getLogoImg();
} else {
  quienesSomosFooter.href = "sobreAdomex/quienesSomos/index.html";
  capacitacionesFooter.href = "sobreAdomex/capacitaciones/index.html";
  queEsElDodgeballFooter.href = "sobreAdomex/queEsElDodgeball/index.html";
  elDodgeballEnMexicoFooter.href = "sobreAdomex/elDodgeballEnMexico/index.html";
  encuentraEquipoFooter.href = "equipos/encuentraEquipo/index.html";
  equiposAfiliadosFooter.href = "equipos/equiposAfiliados/index.html";
  ligaMexicanaDeDodgeballFooter.href =
    "ligas/ligaMexicanaDeDodgeball/index.html";
  ligasRecreativasFooter.href = "ligas/ligasRecreativas/index.html";
  abreTuPropiaLigaFooter.href = "ligas/abreTuPropiaLiga/index.html";
  eventosFooter.href = "eventos/index.html";
  fotosFooter.href = "fotossitio/index.html";
  avisoPrivacidad.href = "privacy.html";
  creditContainer.href = "https://wwww.github.com/yayodelariva";
  logoHunza.src = "images/logos/logoHunza.png";
  logoBJ.src = "images/logos/logoBJ.png";
  logoIztapalapa.src = "images/logos/logoIztapalapa.jpeg";
  logoUtopia.src = "images/logos/logoUtopia.jpeg";
  logoTlalpan.src = "images/logos/logoTlalpan.png";
  logoLhasa.src = "images/logos/logoLhasa.png";

  getSocialMediaLinks();
  getLogoLinks();
}

// DOM BUILDING

logoTlalpanContainer.appendChild(logoTlalpan);
logoBJContainer.appendChild(logoBJ);
logoUtopiaContainer.appendChild(logoUtopia);
logoHunzaContainer.appendChild(logoHunza);
logoLhasaContainer.appendChild(logoLhasa);
logoIztapalapaContainer.appendChild(logoIztapalapa);

function getSocialMediaLinks() {
  facebookIconFooter.href = "https://www.facebook.com/ADOMEXDodgeball";
  instagramIconFooter.href = "https://www.instagram.com/adomexdodgeball";
  whatsappIconFooter.href =
    "https://wa.me/525547755866?text=Hola%20ADOMEX.%20Quisiera%20más%20información%F0%9F%98%80";
}

function getLogoLinks() {
  logoHunzaContainer.href = "http://www.hunza.com.mx/";
  logoBJContainer.href = "https://alcaldiabenitojuarez.gob.mx/";
  logoIztapalapaContainer.href = "https://www.iztapalapa.cdmx.gob.mx";
  logoUtopiaContainer.href =
    "https://utopias.mx/utopia-ixtapalcalli-iztapalapa-cdmx-mexico.php";
  logoTlalpanContainer.href = "https://alcaldiatlalpan.mx/";
  logoLhasaContainer.href = "https://www.facebook.com/AguaLhasa";
}

function getLogoImgLong() {
  logoHunza.src = "../../images/logos/logoHunza.png";
  logoBJ.src = "../../images/logos/logoBJ.png";
  logoIztapalapa.src = "../../images/logos/logoIztapalapa.jpeg";
  logoUtopia.src = "../../images/logos/logoUtopia.jpeg";
  logoTlalpan.src = "../../images/logos/logoTlalpan.png";
  logoLhasa.src = "../../images/logos/logoLhasa.png";
}

function getLogoImg() {
  logoHunza.src = "../images/logos/logoHunza.png";
  logoBJ.src = "../images/logos/logoBJ.png";
  logoIztapalapa.src = "../images/logos/logoIztapalapa.jpeg";
  logoUtopia.src = "../images/logos/logoUtopia.jpeg";
  logoTlalpan.src = "../images/logos/logoTlalpan.png";
  logoLhasa.src = "../images/logos/logoLhasa.png";
}
