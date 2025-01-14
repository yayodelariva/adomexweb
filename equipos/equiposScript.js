logoLobosPath = "../images/equiposlogos/equiposEstatales/Lobos.png";
logoAguilasPath = "../images/equiposlogos/equiposEstatales/Aguilas.png";
guerrerosJaguarPath = "../images/equiposlogos/foamVaronil/GuerrerosJaguar.png";
// ahuizotlPath = "../images/equiposlogos/foamVaronil/Ahuizotl.png";
vaquitasMarinasPath = "../images/equiposlogos/foamVaronil/VaquitasMarinas.jpeg";
mugisPath = "../images/equiposlogos/foamVaronil/Mugis.png";
// troopersFoamPath = "../images/equiposlogos/foamVaronil/TroopersFoam.png";
// hokusaiPath = "../images/equiposlogos/foamVaronil/Hokusai.png";
xForcePath = "../images/equiposlogos/foamVaronil/xForce.png";
// pinUpRebelsPath = "../images/equiposlogos/foamFemenil/PinUpRebels.png";
eulerFemenilPath = "../images/equiposlogos/foamFemenil/EulerFemenil.png";
sirensPath = "../images/equiposlogos/foamFemenil/Sirens.png";
astromeliasPath = "../images/equiposlogos/foamFemenil/Astromelias.png";
huskysPath = "../images/equiposlogos/foamMixto/Huskys.png";
alebrijesPath = "../images/equiposlogos/foamMixto/Alebrijes.png";
mapachesPath = "../images/equiposlogos/foamMixto/Mapaches.png";
quetzalesPath = "../images/equiposlogos/foamMixto/Quetzales.png";
clubGaussPath = "../images/equiposlogos/foamMixto/ClubGauss.png";
// deadlockPath = "../images/equiposlogos/foamMixto/Deadlock.png";
blastersPath = "../images/equiposlogos/foamMixto/Blasters.png";
oozmaKappaPath = "../images/equiposlogos/foamMixto/OozmaKappa.png";
mandaloriansPath = "../images/equiposlogos/foamMixto/Mandalorians.png";
// mexicasPath = "../images/equiposlogos/clothMixto/Mexicas.png";
// troopersClothPath = "../images/equiposlogos/clothMixto/TroopersCloth.png";
// ticTacClocPath = "../images/equiposlogos/clothMixto/TicTacCloc.png";
// clothstarsPath = "../images/equiposlogos/clothMixto/Clothstars.png";

//ESTATALES
const logoLobosContainer = document.querySelector("#lobos");
const logoAguilasContainer = document.querySelector("#aguilas");
//FOAM VARONIL
const guerrerosJaguarContainer = document.querySelector("#guerrerosJaguar");
const ahuizotlContainer = document.querySelector("#ahuizotl");
const vaquitasMarinasContainer = document.querySelector("#vaquitasMarinas");
const mugisContainer = document.querySelector("#mugis");
const troopersFoamContainer = document.querySelector("#troopersFoam");
const hokusaiContainer = document.querySelector("#hokusai");
const xForceContainer = document.querySelector("#xForce");
//FOAM FEMENIL
const pinUpRebelsContainer = document.querySelector("#pinUpRebels");
const eulerFemenilContainer = document.querySelector("#eulerFemenil");
const sirensContainer = document.querySelector("#sirens");
const astromeliasContainer = document.querySelector("#astromelias");
//FOAM MIXTO
const huskysContainer = document.querySelector("#huskys");
const alebrijesContainer = document.querySelector("#alebrijes");
const mapachesContainer = document.querySelector("#mapaches");
const quetzalesContainer = document.querySelector("#quetzales");
const clubGaussContainer = document.querySelector("#clubGauss");
const deadlockContainer = document.querySelector("#deadlock");
const blastersContainer = document.querySelector("#blasters");
const oozmaKappaContainer = document.querySelector("#oozmaKappa");
const mandaloriansContainer = document.querySelector("#mandalorians");
//CLOTH MIXTO
const mexicasContainer = document.querySelector("#mexicas");
const troopersClothContainer = document.querySelector("#troopersCloth");
const ticTacClocContainer = document.querySelector("#ticTacCloc");
const clothstarsContainer = document.querySelector("#clothstars");
const tlaloClothContainer = document.querySelector("#tlaloCloth");

if (window.location.pathname.includes("/equiposAfiliados/")) {
  logoLobosPath = "../../images/equiposlogos/equiposEstatales/Lobos.png";
  logoAguilasPath = "../../images/equiposlogos/equiposEstatales/Aguilas.png";
  guerrerosJaguarPath =
    "../../images/equiposlogos/foamVaronil/GuerrerosJaguar.png";
  // ahuizotlPath = "../../images/equiposlogos/foamVaronil/Ahuizotl.png";
  vaquitasMarinasPath =
    "../../images/equiposlogos/foamVaronil/VaquitasMarinas.jpeg";
  mugisPath = "../../images/equiposlogos/foamVaronil/Mugis.png";
  // troopersFoamPath = "../../images/equiposlogos/foamVaronil/TroopersFoam.png";
  // hokusaiPath = "../../images/equiposlogos/foamVaronil/Hokusai.png";
  xForcePath = "../../images/equiposlogos/foamVaronil/xForce.png";
  // pinUpRebelsPath = "../../images/equiposlogos/foamFemenil/PinUpRebels.png";
  eulerFemenilPath = "../../images/equiposlogos/foamFemenil/EulerFemenil.png";
  sirensPath = "../../images/equiposlogos/foamFemenil/Sirens.png";
  astromeliasPath = "../../images/equiposlogos/foamFemenil/Astromelias.png";
  huskysPath = "../../images/equiposlogos/foamMixto/Huskys.png";
  alebrijesPath = "../../images/equiposlogos/foamMixto/Alebrijes.png";
  mapachesPath = "../../images/equiposlogos/foamMixto/Mapaches.png";
  quetzalesPath = "../../images/equiposlogos/foamMixto/Quetzales.png";
  clubGaussPath = "../../images/equiposlogos/foamMixto/ClubGauss.png";
  // deadlockPath = "../../images/equiposlogos/foamMixto/Deadlock.png";
  blastersPath = "../../images/equiposlogos/foamMixto/Blasters.png";
  oozmaKappaPath = "../../images/equiposlogos/foamMixto/OozmaKappa.png";
  mandaloriansPath = "../../images/equiposlogos/foamMixto/Mandalorians.png";
  // mexicasPath = "../../images/equiposlogos/clothMixto/Mexicas.png";
  // troopersClothPath = "../../images/equiposlogos/clothMixto/TroopersCloth.png";
  // ticTacClocPath = "../../images/equiposlogos/clothMixto/TicTacCloc.png";
  // clothstarsPath = "../../images/equiposlogos/clothMixto/Clothstars.png";
  // tlaloClothPath = "../../images/equiposlogos/clothMixto/Tlalocloth.png";
}

//ESTATALES
logoLobosContainer.src = logoLobosPath;
logoAguilasContainer.src = logoAguilasPath;
//FOAM VARONIL
guerrerosJaguarContainer.src = guerrerosJaguarPath;
// ahuizotlContainer.src = ahuizotlPath;
vaquitasMarinasContainer.src = vaquitasMarinasPath;
mugisContainer.src = mugisPath;
// troopersFoamContainer.src = troopersFoamPath;
// hokusaiContainer.src = hokusaiPath;
xForceContainer.src = xForcePath;
//FOAM FEMENIL
// pinUpRebelsContainer.src = pinUpRebelsPath;
eulerFemenilContainer.src = eulerFemenilPath;
sirensContainer.src = sirensPath;
astromeliasContainer.src = astromeliasPath;
//FOAM MIXTO
huskysContainer.src = huskysPath;
alebrijesContainer.src = alebrijesPath;
mapachesContainer.src = mapachesPath;
quetzalesContainer.src = quetzalesPath;
clubGaussContainer.src = clubGaussPath;
// deadlockContainer.src = deadlockPath;
blastersContainer.src = blastersPath;
oozmaKappaContainer.src = oozmaKappaPath;
mandaloriansContainer.src = mandaloriansPath;
//CLOTH MIXTO
// mexicasContainer.src = mexicasPath;
// troopersClothContainer.src = troopersClothPath;
// ticTacClocContainer.src = ticTacClocPath;
// clothstarsContainer.src = clothstarsPath;
// tlaloClothContainer.src = tlaloClothPath;
