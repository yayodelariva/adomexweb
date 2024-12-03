const navbarContainer = document.querySelector(".navbarcontainer");
const adomexLogo = document.querySelector(".adomexLogo");
const logoADOMEX = document.createElement("img");
const mobileSobre = document.querySelector(".mobileSobre");
const mobileQuienes = document.querySelector(".mobileQuienes");
const mobileCapacitaciones = document.querySelector(".mobileCapacitaciones");
const mobileQueEsElDodgeball = document.querySelector(
  ".mobileQueEsElDodgeball"
);
const mobileElDodgeballEnMexico = document.querySelector(
  ".mobileElDodgeballEnMexico"
);
const mobileEquipos = document.querySelector(".mobileEquipos");
const mobileEncuentraEquipo = document.querySelector(".mobileEncuentraEquipo");
const mobileEquiposAfiliados = document.querySelector(
  ".mobileEquiposAfiliados"
);
const mobileLigas = document.querySelector(".mobileLigas");
const mobileLigaMexicana = document.querySelector(".mobileLigaMexicana");
const mobileLigasRecreativas = document.querySelector(
  ".mobileLigasRecreativas"
);
const mobileAbreTuPropiaLiga = document.querySelector(
  ".mobileAbreTuPropiaLiga"
);
const mobileEventos = document.querySelector(".mobileEventos");
const mobileFotos = document.querySelector(".mobileFotos");
const mobileTienda = document.querySelector(".mobileTienda");

const desktopSobre = document.querySelector(".desktopSobre");
const desktopQuienes = document.querySelector(".desktopQuienes");
const desktopCapacitaciones = document.querySelector(".desktopCapacitaciones");
const desktopQueEsElDodgeball = document.querySelector(
  ".desktopQueEsElDodgeball"
);
const desktopElDodgeballEnMexico = document.querySelector(
  ".desktopElDodgeballEnMexico"
);
const desktopEquipos = document.querySelector(".desktopEquipos");
const desktopEncuentraEquipo = document.querySelector(
  ".desktopEncuentraEquipo"
);
const desktopEquiposAfiliados = document.querySelector(
  ".desktopEquiposAfiliados"
);
const desktopLigas = document.querySelector(".desktopLigas");
const desktopLigaMexicana = document.querySelector(".desktopLigaMexicana");
const desktopLigasRecreativas = document.querySelector(
  ".desktopLigasRecreativas"
);
const desktopAbreTuPropiaLiga = document.querySelector(
  ".desktopAbreTuPropiaLiga"
);
const desktopEventos = document.querySelector(".desktopEventos");
const desktopFotos = document.querySelector(".desktopFotos");
const desktopTienda = document.querySelector(".desktopTienda");

mobileSobre.innerText = "SOBRE LA ADOMEX";
mobileQuienes.innerText = "Quienes somos";
mobileCapacitaciones.innerText = "Capacitaciones";
mobileQueEsElDodgeball.innerText = "Que es el Dodgeball";
mobileElDodgeballEnMexico.innerText = "El Dodgeball en México";

mobileEquipos.innerText = "EQUIPOS";
mobileEncuentraEquipo.innerText = "Encuentra tu equipo";
mobileEquiposAfiliados.innerText = "Equipos afiliados";

mobileLigas.innerText = "LIGAS";
mobileLigaMexicana.innerText = "Liga Mexicana de Dodgeball";
mobileLigasRecreativas.innerText = "Ligas recreativas";

mobileAbreTuPropiaLiga.innerText = "Abre tu propia liga";
mobileEventos.innerText = "EVENTOS";
mobileFotos.innerText = "FOTOS";
mobileTienda.innerText = "Tienda";

desktopSobre.innerText = "SOBRE LA ADOMEX";
desktopQuienes.innerText = "Quienes somos";
desktopCapacitaciones.innerText = "Capacitaciones";
desktopQueEsElDodgeball.innerText = "Que es el Dodgeball";
desktopElDodgeballEnMexico.innerText = "El Dodgeball en México";

desktopEquipos.innerText = "EQUIPOS";
desktopEncuentraEquipo.innerText = "Encuentra tu equipo";
desktopEquiposAfiliados.innerText = "Equipos afiliados";

desktopLigas.innerText = "LIGAS";
desktopLigaMexicana.innerText = "Liga Mexicana de Dodgeball";
desktopLigasRecreativas.innerText = "Ligas recreativas";

desktopAbreTuPropiaLiga.innerText = "Abre tu propia liga";
desktopEventos.innerText = "EVENTOS";
desktopFotos.innerText = "FOTOS";
desktopTienda.innerText = "TIENDA";

//NAVBAR PATHING

if (window.location.pathname.includes("/quienesSomos/")) {
  logoADOMEX.src = "../../images/adomexLogoEDIT.png";
  adomexLogo.href = "../../index.html";
  mobileSobre.href = "../../sobreAdomex/index.html";
  desktopSobre.href = "../../sobreAdomex/index.html";
  mobileQuienes.href = "index.html";
  desktopQuienes.href = "index.html";
  mobileCapacitaciones.href = "../capacitaciones/index.html";
  desktopCapacitaciones.href = "../capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "../queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href = "../queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href = "../elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href = "../elDodgeballEnMexico/index.html";
  mobileEquipos.href = "../../equipos/index.html";
  desktopEquipos.href = "../../equipos/index.html";
  mobileEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  mobileLigas.href = "../../ligas/index.html";
  desktopLigas.href = "../../ligas/index.html";
  mobileEventos.href = "../../eventos/index.html";
  desktopEventos.href = "../../eventos/index.html";
  mobileLigaMexicana.href = "../../ligas/ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "../../ligas/ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "../../ligas/ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "../../ligas/ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "../../ligas/abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "../../ligas/abreTuPropiaLiga/index.html";
  mobileFotos.href = "../../fotossitio/index.html";
  desktopFotos.href = "../../fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else if (window.location.pathname.includes("/capacitaciones/")) {
  logoADOMEX.src = "../../images/adomexLogoEDIT.png";
  adomexLogo.href = "../../index.html";
  mobileSobre.href = "../../sobreAdomex/index.html";
  desktopSobre.href = "../../sobreAdomex/index.html";
  mobileQuienes.href = "../quienesSomos/index.html";
  desktopQuienes.href = "../quienesSomos/index.html";
  mobileCapacitaciones.href = "index.html";
  desktopCapacitaciones.href = "index.html";
  mobileQueEsElDodgeball.href = "../queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href = "../queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href = "../elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href = "../elDodgeballEnMexico/index.html";
  mobileEquipos.href = "../../equipos/index.html";
  desktopEquipos.href = "../../equipos/index.html";
  mobileEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  mobileLigas.href = "../../ligas/index.html";
  desktopLigas.href = "../../ligas/index.html";
  mobileEventos.href = "../../eventos/index.html";
  desktopEventos.href = "../../eventos/index.html";
  mobileLigaMexicana.href = "../../ligas/ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "../../ligas/ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "../../ligas/ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "../../ligas/ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "../../ligas/abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "../../ligas/abreTuPropiaLiga/index.html";
  mobileFotos.href = "../../fotossitio/index.html";
  desktopFotos.href = "../../fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else if (window.location.pathname.includes("/queEsElDodgeball/")) {
  logoADOMEX.src = "../../images/adomexLogoEDIT.png";
  adomexLogo.href = "../../index.html";
  mobileSobre.href = "../../sobreAdomex/index.html";
  desktopSobre.href = "../../sobreAdomex/index.html";
  mobileQuienes.href = "../quienesSomos/index.html";
  desktopQuienes.href = "../quienesSomos/index.html";
  mobileCapacitaciones.href = "../capacitaciones/index.html";
  desktopCapacitaciones.href = "../capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "index.html";
  desktopQueEsElDodgeball.href = "index.html";
  mobileElDodgeballEnMexico.href = "../elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href = "../elDodgeballEnMexico/index.html";
  mobileEquipos.href = "../../equipos/index.html";
  desktopEquipos.href = "../../equipos/index.html";
  mobileEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  mobileLigas.href = "../../ligas/index.html";
  desktopLigas.href = "../../ligas/index.html";
  mobileEventos.href = "../../eventos/index.html";
  desktopEventos.href = "../../eventos/index.html";
  mobileLigaMexicana.href = "../../ligas/ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "../../ligas/ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "../../ligas/ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "../../ligas/ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "../../ligas/abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "../../ligas/abreTuPropiaLiga/index.html";
  mobileFotos.href = "../../fotossitio/index.html";
  desktopFotos.href = "../../fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else if (window.location.pathname.includes("/elDodgeballEnMexico/")) {
  logoADOMEX.src = "../../images/adomexLogoEDIT.png";
  adomexLogo.href = "../../index.html";
  mobileSobre.href = "../../sobreAdomex/index.html";
  desktopSobre.href = "../../sobreAdomex/index.html";
  mobileQuienes.href = "../quienesSomos/index.html";
  desktopQuienes.href = "../quienesSomos/index.html";
  mobileCapacitaciones.href = "../capacitaciones/index.html";
  desktopCapacitaciones.href = "../capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "../queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href = "../queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href = "index.html";
  desktopElDodgeballEnMexico.href = "index.html";
  mobileEquipos.href = "../../equipos/index.html";
  desktopEquipos.href = "../../equipos/index.html";
  mobileEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  mobileLigas.href = "../../ligas/index.html";
  desktopLigas.href = "../../ligas/index.html";
  mobileEventos.href = "../../eventos/index.html";
  desktopEventos.href = "../../eventos/index.html";
  mobileLigaMexicana.href = "../../ligas/ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "../../ligas/ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "../../ligas/ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "../../ligas/ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "../../ligas/abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "../../ligas/abreTuPropiaLiga/index.html";
  mobileFotos.href = "../../fotossitio/index.html";
  desktopFotos.href = "../../fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else if (window.location.pathname.includes("/sobreAdomex/")) {
  logoADOMEX.src = "../images/adomexLogoEDIT.png";
  adomexLogo.href = "../index.html";
  mobileSobre.href = "index.html";
  desktopSobre.href = "index.html";
  mobileQuienes.href = "quienesSomos/index.html";
  desktopQuienes.href = "quienesSomos/index.html";
  mobileCapacitaciones.href = "capacitaciones/index.html";
  desktopCapacitaciones.href = "capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href = "queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href = "elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href = "elDodgeballEnMexico/index.html";
  mobileEquipos.href = "../equipos/index.html";
  desktopEquipos.href = "../equipos/index.html";
  mobileEncuentraEquipo.href = "../equipos/encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "../equipos/encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "../equipos/equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "../equipos/equiposAfiliados/index.html";
  mobileLigas.href = "../ligas/index.html";
  desktopLigas.href = "../ligas/index.html";
  mobileEventos.href = "../eventos/index.html";
  desktopEventos.href = "../eventos/index.html";
  mobileLigaMexicana.href = "../ligas/ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "../ligas/ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "../ligas/ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "../ligas/ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "../ligas/abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "../ligas/abreTuPropiaLiga/index.html";
  mobileFotos.href = "../fotossitio/index.html";
  desktopFotos.href = "../fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else if (window.location.pathname.includes("/encuentraEquipo/")) {
  logoADOMEX.src = "../../images/adomexLogoEDIT.png";
  adomexLogo.href = "../../index.html";
  mobileSobre.href = "../../sobreAdomex/index.html";
  desktopSobre.href = "../../sobreAdomex/index.html";
  mobileQuienes.href = "../../sobreAdomex/quienesSomos/index.html";
  desktopQuienes.href = "../../sobreAdomex/quienesSomos/index.html";
  mobileCapacitaciones.href = "../../sobreAdomex/capacitaciones/index.html";
  desktopCapacitaciones.href = "../../sobreAdomex/capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "../../sobreAdomex/queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href =
    "../../sobreAdomex/queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  mobileEquipos.href = "../index.html";
  desktopEquipos.href = "../index.html";
  mobileEncuentraEquipo.href = "index.html";
  desktopEncuentraEquipo.href = "index.html";
  mobileEquiposAfiliados.href = "../equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "../equiposAfiliados/index.html";
  mobileLigas.href = "../../ligas/index.html";
  desktopLigas.href = "../../ligas/index.html";
  mobileEventos.href = "../../eventos/index.html";
  desktopEventos.href = "../../eventos/index.html";
  mobileLigaMexicana.href = "../../ligas/ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "../../ligas/ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "../../ligas/ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "../../ligas/ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "../../ligas/abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "../../ligas/abreTuPropiaLiga/index.html";
  mobileFotos.href = "../../fotossitio/index.html";
  desktopFotos.href = "../../fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else if (window.location.pathname.includes("/equiposAfiliados/")) {
  logoADOMEX.src = "../../images/adomexLogoEDIT.png";
  adomexLogo.href = "../../index.html";
  mobileSobre.href = "../../sobreAdomex/index.html";
  desktopSobre.href = "../../sobreAdomex/index.html";
  mobileQuienes.href = "../../sobreAdomex/quienesSomos/index.html";
  desktopQuienes.href = "../../sobreAdomex/quienesSomos/index.html";
  mobileCapacitaciones.href = "../../sobreAdomex/capacitaciones/index.html";
  desktopCapacitaciones.href = "../../sobreAdomex/capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "../../sobreAdomex/queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href =
    "../../sobreAdomex/queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  mobileEquipos.href = "../index.html";
  desktopEquipos.href = "../index.html";
  mobileEncuentraEquipo.href = "../encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "../encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "index.html";
  desktopEquiposAfiliados.href = "index.html";
  mobileLigas.href = "../../ligas/index.html";
  desktopLigas.href = "../../ligas/index.html";
  mobileEventos.href = "../../eventos/index.html";
  desktopEventos.href = "../../eventos/index.html";
  mobileLigaMexicana.href = "../../ligas/ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "../../ligas/ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "../../ligas/ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "../../ligas/ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "../../ligas/abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "../../ligas/abreTuPropiaLiga/index.html";
  mobileFotos.href = "../../fotossitio/index.html";
  desktopFotos.href = "../../fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else if (window.location.pathname.includes("/equipos/")) {
  logoADOMEX.src = "../images/adomexLogoEDIT.png";
  adomexLogo.href = "../index.html";
  mobileSobre.href = "../sobreAdomex/index.html";
  desktopSobre.href = "../sobreAdomex/index.html";
  mobileQuienes.href = "../sobreAdomex/quienesSomos/index.html";
  desktopQuienes.href = "../sobreAdomex/quienesSomos/index.html";
  mobileCapacitaciones.href = "../sobreAdomex/capacitaciones/index.html";
  desktopCapacitaciones.href = "../sobreAdomex/capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "../sobreAdomex/queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href = "../sobreAdomex/queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href =
    "../sobreAdomex/elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href =
    "../sobreAdomex/elDodgeballEnMexico/index.html";
  mobileEquipos.href = "index.html";
  desktopEquipos.href = "index.html";
  mobileEncuentraEquipo.href = "encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "equiposAfiliados/index.html";
  mobileLigas.href = "../ligas/index.html";
  desktopLigas.href = "../ligas/index.html";
  mobileEventos.href = "../eventos/index.html";
  desktopEventos.href = "../eventos/index.html";
  mobileLigaMexicana.href = "../ligas/ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "../ligas/ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "../ligas/ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "../ligas/ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "../ligas/abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "../ligas/abreTuPropiaLiga/index.html";
  mobileFotos.href = "../fotossitio/index.html";
  desktopFotos.href = "../fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else if (window.location.pathname.includes("/ligaMexicanaDeDodgeball/")) {
  logoADOMEX.src = "../../images/adomexLogoEDIT.png";
  adomexLogo.href = "../../index.html";
  mobileSobre.href = "../../sobreAdomex/index.html";
  desktopSobre.href = "../../sobreAdomex/index.html";
  mobileQuienes.href = "../../sobreAdomex/quienesSomos/index.html";
  desktopQuienes.href = "../../sobreAdomex/quienesSomos/index.html";
  mobileCapacitaciones.href = "../../sobreAdomex/capacitaciones/index.html";
  desktopCapacitaciones.href = "../../sobreAdomex/capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "../../sobreAdomex/queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href =
    "../../sobreAdomex/queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  mobileEquipos.href = "../../equipos/index.html";
  desktopEquipos.href = "../../equipos/index.html";
  mobileEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  mobileLigas.href = "../index.html";
  desktopLigas.href = "../index.html";
  mobileEventos.href = "../../eventos/index.html";
  desktopEventos.href = "../../eventos/index.html";
  mobileLigaMexicana.href = "index.html";
  desktopLigaMexicana.href = "index.html";
  mobileLigasRecreativas.href = "../ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "../ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "../abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "../abreTuPropiaLiga/index.html";
  mobileFotos.href = "../../fotossitio/index.html";
  desktopFotos.href = "../../fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else if (window.location.pathname.includes("/abreTuPropiaLiga/")) {
  logoADOMEX.src = "../../images/adomexLogoEDIT.png";
  adomexLogo.href = "../../index.html";
  mobileSobre.href = "../../sobreAdomex/index.html";
  desktopSobre.href = "../../sobreAdomex/index.html";
  mobileQuienes.href = "../../sobreAdomex/quienesSomos/index.html";
  desktopQuienes.href = "../../sobreAdomex/quienesSomos/index.html";
  mobileCapacitaciones.href = "../../sobreAdomex/capacitaciones/index.html";
  desktopCapacitaciones.href = "../../sobreAdomex/capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "../../sobreAdomex/queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href =
    "../../sobreAdomex/queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  mobileEquipos.href = "../../equipos/index.html";
  desktopEquipos.href = "../../equipos/index.html";
  mobileEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  mobileLigas.href = "../index.html";
  desktopLigas.href = "../index.html";
  mobileEventos.href = "../../eventos/index.html";
  desktopEventos.href = "../../eventos/index.html";
  mobileLigaMexicana.href = "../ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "../ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "../ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "../ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "../index.html";
  desktopAbreTuPropiaLiga.href = "index.html";
  mobileFotos.href = "../../fotossitio/index.html";
  desktopFotos.href = "../../fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else if (window.location.pathname.includes("/ligasRecreativas/")) {
  logoADOMEX.src = "../../images/adomexLogoEDIT.png";
  adomexLogo.href = "../../index.html";
  mobileSobre.href = "../../sobreAdomex/index.html";
  desktopSobre.href = "../../sobreAdomex/index.html";
  mobileQuienes.href = "../../sobreAdomex/quienesSomos/index.html";
  desktopQuienes.href = "../../sobreAdomex/quienesSomos/index.html";
  mobileCapacitaciones.href = "../../sobreAdomex/capacitaciones/index.html";
  desktopCapacitaciones.href = "../../sobreAdomex/capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "../../sobreAdomex/queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href =
    "../../sobreAdomex/queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href =
    "../../sobreAdomex/elDodgeballEnMexico/index.html";
  mobileEquipos.href = "../../equipos/index.html";
  desktopEquipos.href = "../../equipos/index.html";
  mobileEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "../../equipos/encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "../../equipos/equiposAfiliados/index.html";
  mobileLigas.href = "../index.html";
  desktopLigas.href = "../index.html";
  mobileEventos.href = "../../eventos/index.html";
  desktopEventos.href = "../../eventos/index.html";
  mobileLigaMexicana.href = "../ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "../ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "index.html";
  desktopLigasRecreativas.href = "index.html";
  mobileAbreTuPropiaLiga.href = "../abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "../abreTuPropiaLiga/index.html";
  mobileFotos.href = "../../fotossitio/index.html";
  desktopFotos.href = "../../fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else if (window.location.pathname.includes("/ligas/")) {
  logoADOMEX.src = "../images/adomexLogoEDIT.png";
  adomexLogo.href = "../index.html";
  mobileSobre.href = "../sobreAdomex/index.html";
  desktopSobre.href = "../sobreAdomex/index.html";
  mobileQuienes.href = "../sobreAdomex/quienesSomos/index.html";
  desktopQuienes.href = "../sobreAdomex/quienesSomos/index.html";
  mobileCapacitaciones.href = "../sobreAdomex/capacitaciones/index.html";
  desktopCapacitaciones.href = "../sobreAdomex/capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "../sobreAdomex/queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href = "../sobreAdomex/queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href =
    "../sobreAdomex/elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href =
    "../sobreAdomex/elDodgeballEnMexico/index.html";
  mobileEquipos.href = "../equipos/index.html";
  desktopEquipos.href = "../equipos/index.html";
  mobileEncuentraEquipo.href = "../equipos/encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "../equipos/encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "../equipos/equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "../equipos/equiposAfiliados/index.html";
  mobileLigas.href = "index.html";
  desktopLigas.href = "index.html";
  mobileEventos.href = "../eventos/index.html";
  desktopEventos.href = "../eventos/index.html";
  mobileLigaMexicana.href = "ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "abreTuPropiaLiga/index.html";
  mobileFotos.href = "../fotossitio/index.html";
  desktopFotos.href = "../fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else if (window.location.pathname.includes("/eventos/")) {
  logoADOMEX.src = "../images/adomexLogoEDIT.png";
  adomexLogo.href = "../index.html";
  mobileSobre.href = "../sobreAdomex/index.html";
  desktopSobre.href = "../sobreAdomex/index.html";
  mobileQuienes.href = "../sobreAdomex/quienesSomos/index.html";
  desktopQuienes.href = "../sobreAdomex/quienesSomos/index.html";
  mobileCapacitaciones.href = "../sobreAdomex/capacitaciones/index.html";
  desktopCapacitaciones.href = "../sobreAdomex/capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "../sobreAdomex/queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href = "../sobreAdomex/queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href =
    "../sobreAdomex/elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href =
    "../sobreAdomex/elDodgeballEnMexico/index.html";
  mobileEquipos.href = "../equipos/index.html";
  desktopEquipos.href = "../equipos/index.html";
  mobileEncuentraEquipo.href = "../equipos/encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "../equipos/encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "../equipos/equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "../equipos/equiposAfiliados/index.html";
  mobileLigas.href = "../ligas/index.html";
  desktopLigas.href = "../ligas/index.html";
  mobileEventos.href = "index.html";
  desktopEventos.href = "index.html";
  mobileLigaMexicana.href = "../ligas/ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "../ligas/ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "../ligas/ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "../ligas/ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "../ligas/abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "../ligas/abreTuPropiaLiga/index.html";
  mobileFotos.href = "../fotossitio/index.html";
  desktopFotos.href = "../fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else if (window.location.pathname.includes("/fotossitio/")) {
  logoADOMEX.src = "../images/adomexLogoEDIT.png";
  adomexLogo.href = "../index.html";
  mobileSobre.href = "../sobreAdomex/index.html";
  desktopSobre.href = "../sobreAdomex/index.html";
  mobileQuienes.href = "../sobreAdomex/quienesSomos/index.html";
  desktopQuienes.href = "../sobreAdomex/quienesSomos/index.html";
  mobileCapacitaciones.href = "../sobreAdomex/capacitaciones/index.html";
  desktopCapacitaciones.href = "../sobreAdomex/capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "../sobreAdomex/queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href = "../sobreAdomex/queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href =
    "../sobreAdomex/elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href =
    "../sobreAdomex/elDodgeballEnMexico/index.html";
  mobileEquipos.href = "../equipos/index.html";
  desktopEquipos.href = "../equipos/index.html";
  mobileEncuentraEquipo.href = "../equipos/encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "../equipos/encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "../equipos/equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "../equipos/equiposAfiliados/index.html";
  mobileLigas.href = "../ligas/index.html";
  desktopLigas.href = "../ligas/index.html";
  mobileEventos.href = "../eventos/index.html";
  desktopEventos.href = "../eventos/index.html";
  mobileLigaMexicana.href = "../ligas/ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "../ligas/ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "../ligas/ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "../ligas/ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "../ligas/abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "../ligas/abreTuPropiaLiga/index.html";
  mobileFotos.href = "index.html";
  desktopFotos.href = "index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
} else {
  logoADOMEX.src = "images/adomexLogoEDIT.png";
  adomexLogo.href = "index.html";
  mobileSobre.href = "sobreAdomex/index.html";
  desktopSobre.href = "sobreAdomex/index.html";
  mobileQuienes.href = "sobreAdomex/quienesSomos/index.html";
  desktopQuienes.href = "sobreAdomex/quienesSomos/index.html";
  mobileCapacitaciones.href = "sobreAdomex/capacitaciones/index.html";
  desktopCapacitaciones.href = "sobreAdomex/capacitaciones/index.html";
  mobileQueEsElDodgeball.href = "sobreAdomex/queEsElDodgeball/index.html";
  desktopQueEsElDodgeball.href = "sobreAdomex/queEsElDodgeball/index.html";
  mobileElDodgeballEnMexico.href = "sobreAdomex/elDodgeballEnMexico/index.html";
  desktopElDodgeballEnMexico.href =
    "sobreAdomex/elDodgeballEnMexico/index.html";
  mobileEquipos.href = "equipos/index.html";
  desktopEquipos.href = "equipos/index.html";
  mobileEncuentraEquipo.href = "equipos/encuentraEquipo/index.html";
  desktopEncuentraEquipo.href = "equipos/encuentraEquipo/index.html";
  mobileEquiposAfiliados.href = "equipos/equiposAfiliados/index.html";
  desktopEquiposAfiliados.href = "equipos/equiposAfiliados/index.html";
  mobileLigas.href = "ligas/index.html";
  desktopLigas.href = "ligas/index.html";
  mobileLigaMexicana.href = "ligas/ligaMexicanaDeDodgeball/index.html";
  desktopLigaMexicana.href = "ligas/ligaMexicanaDeDodgeball/index.html";
  mobileLigasRecreativas.href = "ligas/ligasRecreativas/index.html";
  desktopLigasRecreativas.href = "ligas/ligasRecreativas/index.html";
  mobileAbreTuPropiaLiga.href = "ligas/abreTuPropiaLiga/index.html";
  desktopAbreTuPropiaLiga.href = "ligas/abreTuPropiaLiga/index.html";
  mobileEventos.href = "eventos/index.html";
  desktopEventos.href = "eventos/index.html";
  mobileFotos.href = "fotossitio/index.html";
  desktopFotos.href = "fotossitio/index.html";
  mobileTienda.href = "https://dodgeball.shop/collections/all";
  desktopTienda.href = "https://dodgeball.shop/collections/all";
}

//DOM BUILDING
logoADOMEX.classList.add("adomexLogo");
adomexLogo.appendChild(logoADOMEX);
