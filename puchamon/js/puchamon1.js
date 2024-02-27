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
////////////UN DOLOR DE HUEVOS/////////////



////////////////////////////////////////////////////////////////////////////////
function seleccionarPuchamon() {
////////////////////////EXTRA////////////////////////////////////////////////
let spanpuchamonjugador = document.getElementById('puchamon-jugador')

  if (document.getElementById("fogofast").checked) {
    mensajedeseleccion("seleccioniste a una bicho de lava con un derrame cerebral")
   spanpuchamonjugador.innerHTML = "fogofast"
   let bicho = document.getElementById('seleccionar-bicho')
     bicho.style.display = "none"
     activarbotones()

}
else if (document.getElementById("splashkat").checked){
  mensajedeseleccion("tu seleccionaste a un minino de agua metrosexual")
  spanpuchamonjugador.innerHTML = "splashkat"
  let bicho = document.getElementById('seleccionar-bicho')
    bicho.style.display = "none"
    activarbotones()
}
else if (document.getElementById("trigor").checked) {
  mensajedeseleccion("tu seleccionaste a una chingadera con patas y brazos que claramente usa anabolizantes")
  spanpuchamonjugador.innerHTML = "trigor"
  let bicho = document.getElementById('seleccionar-bicho')
    bicho.style.display = "none"
    activarbotones()
}
else if (document.getElementById("katrish").checked) {
  mensajedeseleccion("tu seleccionaste a... QUE ABOMINACION ES ESTA?")
  spanpuchamonjugador.innerHTML = "katrish"
  let bicho = document.getElementById('seleccionar-bicho')
    bicho.style.display = "none"
    activarbotones()
}
else if (document.getElementById("trifast").checked) {
  mensajedeseleccion("tu seleccionaste... algo que deberia ser eliminado con... ¿agua?")
  spanpuchamonjugador.innerHTML = "trifast"
  let bicho = document.getElementById('seleccionar-bicho')
    bicho.style.display = "none"
    activarbotones()
}
else if (document.getElementById("pitochu").checked) {
  mensajedeseleccion("tu seleccionaste a una rata con pilas")
  spanpuchamonjugador.innerHTML = "pitochu"
  let bicho = document.getElementById('seleccionar-bicho')
    bicho.style.display = "none"
    activarbotones()
}

else{
  alert("Tal vez no lo parezca pero si das click en cualquiera lo seleccionaras")
    mensajedeseleccion("Tal vez no lo parezca pero si das click en cualquiera lo seleccionaras")
desacctivarbotones()
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
////////////////////////////////////////////////////////////////////////////////
    seleccionarpuchamonenemigo()
////////////////////////////////////////////////////////////////////////////////
}
function cambiarColorParrafos() {

   var parrafos = document.querySelectorAll(".tarjetadepuchamon1");
   var parrafos2 = document.querySelectorAll(".tarjetadepuchamon2");
   var parrafos3 = document.querySelectorAll(".tarjetadepuchamon3");
   var parrafos4 = document.querySelectorAll(".tarjetadepuchamon4");
   var parrafos5 = document.querySelectorAll(".tarjetadepuchamon5");
   var parrafos6 = document.querySelectorAll(".tarjetadepuchamon6");

   if (document.getElementById("fogofast").checked) {
     parrafos.forEach(function(a) {
        a.style.borderColor = "rgba(255, 255, 255, 100)";
     });
     parrafos2.forEach(function(b) {
        b.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos3.forEach(function(c) {
        c.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos4.forEach(function(d) {
        d.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos5.forEach(function(e) {
        e.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos6.forEach(function(f) {
        f.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
   }
   else if(document.getElementById("splashkat").checked){
     parrafos2.forEach(function(b) {
        b.style.borderColor = "rgba(255, 255, 255, 100)";
     });
     parrafos.forEach(function(a) {
        a.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos3.forEach(function(c) {
        c.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos4.forEach(function(d) {
        d.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos5.forEach(function(e) {
        e.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos6.forEach(function(f) {
        f.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
   }
   else if(document.getElementById("trigor").checked){
     parrafos3.forEach(function(c) {
        c.style.borderColor = "rgba(255, 255, 255, 100)";
     });
     parrafos.forEach(function(a) {
        a.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos2.forEach(function(b) {
        b.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos4.forEach(function(d) {
        d.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos5.forEach(function(e) {
        e.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos6.forEach(function(f) {
        f.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
   }else if(document.getElementById("katrish").checked){
     parrafos4.forEach(function(d) {
        d.style.borderColor = "rgba(255, 255, 255, 100)";
     });
     parrafos.forEach(function(a) {
        a.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos2.forEach(function(b) {
        b.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos3.forEach(function(c) {
        c.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos5.forEach(function(e) {
        e.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos6.forEach(function(f) {
        f.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
   }else if(document.getElementById("trifast").checked){
     parrafos5.forEach(function(e) {
        e.style.borderColor = "rgba(255, 255, 255, 100)";
     });
     parrafos.forEach(function(a) {
        a.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos2.forEach(function(b) {
        b.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos3.forEach(function(c) {
        c.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos4.forEach(function(d) {
        d.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos6.forEach(function(f) {
        f.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
   }else if(document.getElementById("pitochu").checked){
     parrafos6.forEach(function(f) {
        f.style.borderColor = "rgba(255, 255, 255, 100)";
     });
     parrafos.forEach(function(a) {
        a.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos2.forEach(function(b) {
        b.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos3.forEach(function(c) {
        c.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos4.forEach(function(d) {
        d.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
     parrafos5.forEach(function(e) {
        e.style.borderColor = "red"; // Cambia el color de texto a rojo
     });
   }

   }
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
//////////////////////////ataques enemigos bien ramdon//////////////////////////
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
//////////////////////revisar vidas////////////////////////////////////////////////
function revisiondehp() {
  if (vidasjugador == 0) {
    crearmensajefinal(" ha sido conectado exitosamente al wifi de dios")
  }else if(vidasenemigas == 0) {
    crearmensajefinal(", no mames era vencerlo no jugar a la matanza de texas!!!!")
  }
}
////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////
function crearmensaje(resultado){
  let ocultarborde = document.getElementById('scroll')
  ocultarborde.style.display = "block"
  let ocultarpadding = document.getElementById('mensajes')
  ocultarpadding.style.display = "block"
  let sectionmensajes = document.getElementById('mensajes')
  let parrafo = document.createElement("p")
  parrafo.innerHTML = "tu puchamon uso " + ataquejugador + ", el puchamon del enemigo ataco con " + ataquepuchamonaleatorio + " -" + resultado
  sectionmensajes.appendChild(parrafo)
}
////////////////////////////////////////////////////////////////////////////////
function crearmensajefinal(resultadofinal){
  let ocultarborde = document.getElementById('scroll')
  ocultarborde.style.display = "block"
  let ocultarpadding = document.getElementById('mensajes')
  ocultarpadding.style.display = "block"
  let sectionmensajes = document.getElementById('mensajes')
  let parrafo = document.createElement("p")
  parrafo.innerHTML = puchamonjugador + resultadofinal
  sectionmensajes.appendChild(parrafo)
  let esconderreinicio = document.getElementById('boton-reiniciar')
    esconderreinicio.style.display = "block"
///////////////////esto continua lo de arriba///////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////
function reiniciarjuego(){
  location.reload()
}
////////////////////////////////////////////////////////////////////////////////
function aleatorio(min, max) {
return Math.floor( Math.random() * (max - min+1) + min)
}
////////////////////////////////////////////////////////////////////////////////
window.addEventListener("load", iniciarJuego)
