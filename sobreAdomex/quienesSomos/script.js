const miembro1FotoContainer = document.querySelector(
  ".miembro1 > .miembroFoto"
);
const miembro1Nombre = document.querySelector(".miembro1 > .miembroNombre");
const miembro1Cargo = document.querySelector(".miembro1 > .miembroCargo");

const miembro2FotoContainer = document.querySelector(
  ".miembro2 > .miembroFoto"
);
const miembro2Nombre = document.querySelector(".miembro2 > .miembroNombre");
const miembro2Cargo = document.querySelector(".miembro2 > .miembroCargo");

const miembro3FotoContainer = document.querySelector(
  ".miembro3 > .miembroFoto"
);
const miembro3Nombre = document.querySelector(".miembro3 > .miembroNombre");
const miembro3Cargo = document.querySelector(".miembro3 > .miembroCargo");

const miembro4FotoContainer = document.querySelector(
  ".miembro4 > .miembroFoto"
);
const miembro4Nombre = document.querySelector(".miembro4 > .miembroNombre");
const miembro4Cargo = document.querySelector(".miembro4 > .miembroCargo");

const miembro5FotoContainer = document.querySelector(
  ".miembro5 > .miembroFoto"
);
const miembro5Nombre = document.querySelector(".miembro5 > .miembroNombre");
const miembro5Cargo = document.querySelector(".miembro5 > .miembroCargo");

const miembro6FotoContainer = document.querySelector(
  ".miembro6 > .miembroFoto"
);
const miembro6Nombre = document.querySelector(".miembro6 > .miembroNombre");
const miembro6Cargo = document.querySelector(".miembro6 > .miembroCargo");

let placeholderImg = document.createElement("img");
placeholderImg.src = "../../images/equiposlogos/placeholder.jpg";
let placeholderImgCloned = placeholderImg.cloneNode(true);
let placeholderImgCloned1 = placeholderImg.cloneNode(true);
let placeholderImgCloned2 = placeholderImg.cloneNode(true);
let placeholderImgCloned3 = placeholderImg.cloneNode(true);
let placeholderImgCloned4 = placeholderImg.cloneNode(true);

// PRESIDENTE
miembro1FotoContainer.appendChild(placeholderImg);
miembro1Nombre.innerHTML = "Luis de la Riva";
miembro1Cargo.innerHTML = "Presidente Vitalicio";

//VICEPRESIDENTE
miembro2FotoContainer.appendChild(placeholderImgCloned1);
miembro2Nombre.innerHTML = "Rogelio Morales";
miembro2Cargo.innerHTML = "Presidente";

//SECRETARIO
miembro3FotoContainer.appendChild(placeholderImgCloned2);
miembro3Nombre.innerHTML = "Carlos de la Riva";
miembro3Cargo.innerHTML = "Vicepresidente";

//TESORERO
miembro4FotoContainer.appendChild(placeholderImgCloned3);
miembro4Nombre.innerHTML = "Sabrina Huerta";
miembro4Cargo.innerHTML = "Secretaria";

//COMISARIO
miembro5FotoContainer.appendChild(placeholderImgCloned4);
miembro5Nombre.innerHTML = "Lucero Moreno";
miembro5Cargo.innerHTML = "Tesorera";

//NUEVO CONSEJO
miembro6FotoContainer.appendChild(placeholderImgCloned);
miembro6Nombre.innerHTML = "Barbara Fuentes";
miembro6Cargo.innerHTML = "Vocal";
