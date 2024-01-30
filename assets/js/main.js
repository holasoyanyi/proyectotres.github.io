let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
  let boxes = [...document.querySelectorAll(
    '.box-container-1 .box-1'
  )];
  for (var i = currentItem1; i < currentItem1 + 4; i++) {
    boxes[i].style.display = 'inline-block';
  }
  currentItem1 += 4;
  if (currentItem1 >= boxes.length) {
    loadMoreBtn1.style.display = 'none';
  }
}

//ONCLICK, este nos ayudará al presionar el botón cargar más

//Con esta función indicamos que en nuestro flex container, por así decirlo, se vaya aumentando 4 imagenes más. Cuando incremente hará que se desaparezca también el botón de load more, que sería "cargar más". Eso es lo que hace esta función.

let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
  let boxes = [...document.querySelectorAll(
    '.box-container-2 .box-2'
  )];
  for (var i = currentItem2; i < currentItem2 + 4; i++) {
    boxes[i].style.display = 'inline-block';
  }
  currentItem2 += 4;
  if (currentItem2 >= boxes.length) {
    loadMoreBtn2.style.display = 'none';
  }
}

//Solo copiamos el código de la función anterior y le cambiamos el nombre de la variable y el botón.

let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
  let boxes = [...document.querySelectorAll(
    '.box-container-3 .box-3'
  )];
  for (var i = currentItem3; i < currentItem3 + 4; i++) {
    boxes[i].style.display = 'inline-block';
  }
  currentItem3 += 4;
  if (currentItem3 >= boxes.length) {
    loadMoreBtn3.style.display = 'none';
  }
}

//Volvemos a hacer lo mismo, pero con el otro flex container. En esta parte es repetitiva para los botones en las imagenes default.

//Esto se relaciona con el html en el box-1 a las imagenes que cargamos, en nuestro caso ponemos +4 porque es la cantidad adicional que queremos agregar. Para cambiar y agregarle más tendriamos que volver a modificar el box del html y poner más imagenes.

//El boton al estar modificado con 4, si hay 16 imagenes, al presionar el botón irán apareciendo de 4 en 4 hasta que el botón desaparezca.
