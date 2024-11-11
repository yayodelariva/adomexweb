let logoLobosPath;
let logoAguilasPath;

const logoLobosContainer = document.querySelector("#lobos");
const logoAguilasContainer = document.querySelector("#aguilas");

if (window.location.pathname.includes("/equiposAfiliados/")) {
  logoLobosPath = "../../images/equiposlogos/logo-lobos.png";
  // logoAguilasPath = ../../images/equiposlogos/
} else {
  logoLobosPath = "../images/equiposlogos/logo-lobos.png";
  // logoAguilasPath = "../images/equiposlogos/"
}

logoLobosContainer.src = logoLobosPath;
// logoAguilasContainer.src = logoAguilasPath;
