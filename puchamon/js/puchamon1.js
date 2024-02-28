let ataquejugador
let ataquepuchamonaleatorio
let vidasjugador = 3
let vidasenemigas = 3
let puchamonjugador


////////////////////////////////////////////////////////////////////////////////

function iniciarJuego() {

let seleccionar_putazo = document.getElementById('seleccionar-putazo')
seleccionar_putazo.style.display = "none"

let esconderreinicio = document.getElementById('boton-reiniciar')
  esconderreinicio.style.display = "none"

  let botonPuchamon = document.getElementById('boton-Puchamon')

  botonPuchamon.addEventListener("click", seleccionarPuchamon)

  let botonfuego = document.getElementById('boton-fuego')

    botonfuego.addEventListener("click", ataquefuego)

  let botonagua = document.getElementById('boton-agua')

    botonagua.addEventListener("click", ataqueagua)

  let botontierra = document.getElementById('boton-planta')

    botontierra.addEventListener("click", ataqueplanta)

    let botonmutante = document.getElementById('boton-mutante')

    botonmutante.addEventListener("click", ataquemutante)

    let botonacido = document.getElementById('boton-acido')

    botonacido.addEventListener("click", ataqueacido)

    let botonrayo = document.getElementById('boton-rayo')

    botonrayo.addEventListener("click", ataquerayo)

    let ocultarpadding = document.getElementById('mensajes')
    ocultarpadding.style.display = "none"

    let ocultarborde = document.getElementById('scroll')
    ocultarborde.style.display = "none"

    let botonreinicio = document.getElementById('boton-reiniciar')
        botonreinicio.addEventListener("click", reiniciarjuego)

}
/////////esta funcion se encarga de reconocer el puchamon seleccionado /////////
function seleccionarPuchamon() {

let spanpuchamonjugador = document.getElementById('puchamon-jugador')

  if (document.getElementById("fogofast").checked) {

    let bicho = document.getElementById('section-general')

      mensajedeseleccion("seleccioniste a una bicho de lava con un derrame cerebral")

          spanpuchamonjugador.innerHTML = "fogofast"

              bicho.style.display = "none"

     activarbotones() //los botones se descativan al no seleccionar un puchamon, esto se encarga de reactivarlos//
}
else if (document.getElementById("splashkat").checked){

    let bicho = document.getElementById('section-general')

        mensajedeseleccion("tu seleccionaste a un minino de agua metrosexual")

          spanpuchamonjugador.innerHTML = "splashkat"

            bicho.style.display = "none"

    activarbotones() //los botones se descativan al no seleccionar un puchamon, esto se encarga de reactivarlos//
}
else if (document.getElementById("trigor").checked) {

    let bicho = document.getElementById('section-general')

        mensajedeseleccion("tu seleccionaste a una chingadera con patas y brazos que claramente usa anabolizantes")

            spanpuchamonjugador.innerHTML = "trigor"

              bicho.style.display = "none"

    activarbotones() //los botones se descativan al no seleccionar un puchamon, esto se encarga de reactivarlos//
}
else if (document.getElementById("katrish").checked) {

    let bicho = document.getElementById('section-general')

        mensajedeseleccion("tu seleccionaste a... QUE ABOMINACION ES ESTA?")

            spanpuchamonjugador.innerHTML = "katrish"

              bicho.style.display = "none"

    activarbotones() //los botones se descativan al no seleccionar un puchamon, esto se encarga de reactivarlos//
}
else if (document.getElementById("trifast").checked) {

    let bicho = document.getElementById('section-general')

        mensajedeseleccion("tu seleccionaste... algo que deberia ser eliminado con... ¿agua?")

            spanpuchamonjugador.innerHTML = "trifast"

              bicho.style.display = "none"

    activarbotones() //los botones se descativan al no seleccionar un puchamon, esto se encarga de reactivarlos//
}
else if (document.getElementById("pitochu").checked) {

    let bicho = document.getElementById('section-general')

        mensajedeseleccion("tu seleccionaste a una rata con pilas")

            spanpuchamonjugador.innerHTML = "pitochu"

              bicho.style.display = "none"

    activarbotones() //los botones se descativan al no seleccionar un puchamon, esto se encarga de reactivarlos//
}

else{

mensajedeseleccion("Tal vez no lo parezca pero si das click en cualquiera lo seleccionaras")

desacctivarbotones()//los botones se descativan al no seleccionar un puchamon//
    }
puchamonseleccionado()
      }

      function puchamonseleccionado(){

        if(document.getElementById("fogofast").checked){

          puchamonjugador = "fogofast"

            let seleccionar_putazo = document.getElementById('seleccionar-putazo')

              seleccionar_putazo.style.display = "block"

        }else if (document.getElementById("splashkat").checked) {

          puchamonjugador = "splashkat"

              let seleccionar_putazo = document.getElementById('seleccionar-putazo')

                seleccionar_putazo.style.display = "block"

        }else if (document.getElementById("trigor").checked) {

            puchamonjugador = "trigor"

              let seleccionar_putazo = document.getElementById('seleccionar-putazo')

                seleccionar_putazo.style.display = "block"

        }else if (document.getElementById("katrish").checked) {

            puchamonjugador = "katrish"

              let seleccionar_putazo = document.getElementById('seleccionar-putazo')

                seleccionar_putazo.style.display = "block"

        }else if (document.getElementById("trifast").checked) {

              puchamonjugador = "trifast"

                let seleccionar_putazo = document.getElementById('seleccionar-putazo')

                  seleccionar_putazo.style.display = "block"

        }else if (document.getElementById("pitochu").checked) {

              puchamonjugador = "pitochu"

                let seleccionar_putazo = document.getElementById('seleccionar-putazo')

                  seleccionar_putazo.style.display = "block"
        }
    seleccionarpuchamonenemigo() //la funcion aleatorio ayuda a ramdomizar al enemigo//

}
//el enemigo aleatorio es seleccionado al instante que el jugador selecciona su puchamon//
function seleccionarpuchamonenemigo(){
  let ataqueramdon = aleatorio(1,6)
  let seleccionarpuchamonenemigo = document.getElementById('puchamon-enemigo')
  if (ataqueramdon == 1) {
    seleccionarpuchamonenemigo.innerHTML = "fogofast"
      //fogofast
  }
  else if (ataqueramdon == 2) {
    seleccionarpuchamonenemigo.innerHTML = "splashkat"
      //splashkat
  }else if (ataqueramdon == 3) {
    seleccionarpuchamonenemigo.innerHTML = "trigor"
      //trigor
  }else if (ataqueramdon == 4) {
    seleccionarpuchamonenemigo.innerHTML = "katrish"
    //katrish
  }else if (ataqueramdon == 5) {
    seleccionarpuchamonenemigo.innerHTML = "trifast"
    //trifast
  }else if (ataqueramdon == 6) {
    seleccionarpuchamonenemigo.innerHTML = "pitochu"
  }
}

///////////////////////////ataques del jugador bien geis////////////////////////
function ataquefuego(){
    ataquejugador = "Lavarrame Cerebral"
ataqueenemigo()
}
function ataqueagua(){
    ataquejugador = "Metrosquirter"
    ataqueenemigo()
}
function ataqueplanta(){
    ataquejugador = "Golpe Anabolico"
    ataqueenemigo()
}
function ataquemutante(){
    ataquejugador = "Aliento Pozolero"
    ataqueenemigo()
}
function ataqueacido(){
    ataquejugador = "Mordida De Cianuro"
    ataqueenemigo()
}
function ataquerayo() {
  ataquejugador = "pilas consoladoras"
    ataqueenemigo()
}
//Ataques enemigos aleatorios //
function ataqueenemigo(){
  wearamdon = aleatorio(1,6)
if (wearamdon == 1) {
  ataquepuchamonaleatorio = "Lavarrame Cerebral"
    //fogofast
}
else if (wearamdon == 2) {
  ataquepuchamonaleatorio = "Metrosquirter"
    //splashkat
}else if (wearamdon == 3) {
  ataquepuchamonaleatorio = "Golpe Anabolico"
    //trigor
}else if (wearamdon == 4) {
  ataquepuchamonaleatorio = "Aliento Pozolero"
  //katrish
}else if (wearamdon == 5) {
  ataquepuchamonaleatorio = "Mordida De Cianuro"
  //trifast
}else if (wearamdon == 6) {
  ataquepuchamonaleatorio = "pilas consoladoras"
}
combate()
}
//me costo mucho "balancear" esto porque es la primera vez que hago esto//
function combate(){
let spanvidasenemigas = document.getElementById('vidasenemigas')
let spanvidasjugador = document.getElementById('vidasjugador')

if (ataquepuchamonaleatorio == ataquejugador) {
  crearmensaje("empataron")
}
else if (ataquejugador == "Lavarrame Cerebral" && ataquepuchamonaleatorio == "Golpe Anabolico") {
  crearmensaje("pos tan tonto no eras")
  vidasenemigas--
   spanvidasenemigas.innerHTML = vidasenemigas
}
else if (ataquejugador == "Metrosquirter" && ataquepuchamonaleatorio == "Lavarrame Cerebral") {
  crearmensaje("pos tan tonto no eras")
  vidasenemigas--
    spanvidasenemigas.innerHTML = vidasenemigas
}
else if (ataquejugador == "Golpe Anabolico" && ataquepuchamonaleatorio == "Metrosquirter") {
  crearmensaje("pos tan tonto no eras")
  vidasenemigas--
   spanvidasenemigas.innerHTML = vidasenemigas
}
else if (ataquejugador == "Aliento Pozolero" && ataquepuchamonaleatorio == "Mordida De Cianuro") {
  crearmensaje("pos tan tonto no eras")
  vidasenemigas--
   spanvidasenemigas.innerHTML = vidasenemigas
}
else if (ataquejugador == "Mordida De Cianuro" && ataquepuchamonaleatorio == "pilas consoladoras") {
  crearmensaje("pos tan tonto no eras")
  vidasenemigas--
   spanvidasenemigas.innerHTML = vidasenemigas
}else if (ataquejugador == "pilas consoladoras" && ataquepuchamonaleatorio == "Aliento Pozolero") {
  crearmensaje("pos tan tonto no eras")
  vidasenemigas--
   spanvidasenemigas.innerHTML = vidasenemigas
}
else if (ataquejugador == "pilas consoladoras" && ataquepuchamonaleatorio == "Metrosquirter") {
  crearmensaje("pos tan tonto no eras")
  vidasenemigas--
   spanvidasenemigas.innerHTML = vidasenemigas
}else if (ataquejugador == "Metrosquirter" && ataquepuchamonaleatorio == "pilas consoladoras") {
  crearmensaje("pos tan tonto no eras")
  vidasenemigas--
   spanvidasenemigas.innerHTML = vidasenemigas
}else if (ataquejugador == "Mordida De Cianuro" && ataquepuchamonaleatorio == "Golpe Anabolico") {
  crearmensaje("pos tan tonto no eras")
  vidasenemigas--
   spanvidasenemigas.innerHTML = vidasenemigas
}else if (ataquejugador == "Lavarrame Cerebral" && ataquepuchamonaleatorio == "Mordida De Cianuro") {
  crearmensaje("pos tan tonto no eras")
  vidasenemigas--
   spanvidasenemigas.innerHTML = vidasenemigas
}else if (ataquejugador == "Golpe Anabolico" && ataquepuchamonaleatorio == "Aliento Pozolero") {
  crearmensaje("pos tan tonto no eras")
  vidasenemigas--
   spanvidasenemigas.innerHTML = vidasenemigas
}else if (ataquejugador == "Lavarrame Cerebral" && ataquepuchamonaleatorio == "pilas consoladoras") {
  crearmensaje("pos tan tonto no eras")
  vidasenemigas--
   spanvidasenemigas.innerHTML = vidasenemigas
}
else {
  let posiblidad = aleatorio
  aleatorio(1,2)
  if (posiblidad == 2) {
    crearmensaje("pos tan tonto no eras")
    vidasenemigas--
     spanvidasenemigas.innerHTML = vidasenemigas
 }else{
   crearmensaje("Eres TONTISIMO")
    vidasjugador--
    spanvidasjugador.innerHTML = vidasjugador

  }
}
  revisiondehp()
  }
////////esta funcion revisa la vida del jugador y el enemigo y define el ganador/////////
function revisiondehp() {
  if (vidasjugador == 0) {
    crearmensajefinal(" ha sido conectado exitosamente al wifi de dios")//perder//
  }else if(vidasenemigas == 0) {
    crearmensajefinal(", no mames era vencerlo no jugar a la matanza de texas!!!!")//ganar//
  }
}
////////////esta funcion es la que muestra un dialogo especifico para cada Puchamon//////////////
function mensajedeseleccion(seleccion){
      let ocultarborde = document.getElementById('scroll')

            ocultarborde.style.display = "block"

      let ocultarpadding = document.getElementById('mensajes')

            ocultarpadding.style.display = "block"

      let sectionmensajes = document.getElementById('mensajes')

      let parrafo = document.createElement("p")

            parrafo.innerHTML = seleccion

              sectionmensajes.appendChild(parrafo)
}
//////////////////mensajes de combate que aparecen en "la caja de historial"////////////////////////////
function crearmensaje(resultado){

  let ocultarpadding = document.getElementById('mensajes')

        ocultarpadding.style.display = "block"

  let sectionmensajes = document.getElementById('mensajes')

  let parrafo = document.createElement("p")

  parrafo.innerHTML = "tu puchamon uso " + ataquejugador + ", el puchamon del enemigo ataco con " + ataquepuchamonaleatorio + " -" + resultado

  sectionmensajes.appendChild(parrafo)
}
////////////////////////////////////////////////////////////////////////////////
function crearmensajefinal(resultadofinal){
  let esconderreinicio = document.getElementById('boton-reiniciar')
  let ocultarborde = document.getElementById('scroll')
  let ocultarpadding = document.getElementById('mensajes')
  let sectionmensajes = document.getElementById('mensajes')
  let parrafo = document.createElement("p")

      ocultarborde.style.display = "block"
      ocultarpadding.style.display = "block"

      parrafo.innerHTML = puchamonjugador + resultadofinal

          sectionmensajes.appendChild(parrafo)

    esconderreinicio.style.display = "block"

  desacctivarbotones()
  //se que se puede acortar pero aun no tengo claro como hacerlo//
}
function desacctivarbotones(){
  let botonfuego = document.getElementById('boton-fuego')

      botonfuego.disabled = true

  let botonagua = document.getElementById('boton-agua')

      botonagua.disabled = true

  let botontierra = document.getElementById('boton-planta')

      botontierra.disabled = true

    let botonmutante = document.getElementById('boton-mutante')

      botonmutante.disabled = true

    let botonacido = document.getElementById('boton-acido')

      botonacido.disabled = true

    let botonrayo = document.getElementById('boton-rayo')

     botonrayo.disabled = true
     let esconderlogo = document.getElementById('juegologo')
}
//se que se puede acortar pero aun no tengo claro como hacerlo// x2
function activarbotones(){
  let botonfuego = document.getElementById('boton-fuego')

      botonfuego.disabled = false

  let botonagua = document.getElementById('boton-agua')

      botonagua.disabled = false

  let botontierra = document.getElementById('boton-planta')

      botontierra.disabled = false

    let botonmutante = document.getElementById('boton-mutante')

      botonmutante.disabled = false

    let botonacido = document.getElementById('boton-acido')

      botonacido.disabled = false

    let botonrayo = document.getElementById('boton-rayo')

     botonrayo.disabled = false
     let esconderlogo = document.getElementById('juegologo')
}
//////////////////////////Reinicio//////////////////////////////////
function reiniciarjuego(){
  location.reload()
}
//////////////////////Ramdomizador///////////////////////////////////////
function aleatorio(min, max) {
return Math.floor( Math.random() * (max - min+1) + min)
}
////////////////////////////////////////////////////////////////////////////////
window.addEventListener("load", iniciarJuego)
