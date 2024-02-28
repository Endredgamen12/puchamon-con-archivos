const PUCHAMON_AVAILABLE = [
  "fogofast",
  "splashkat",
  "trigor",
  "katrish",
  "trifast",
  "pitochu",
];

const PUCHAMON_MESSAGE_SELECTED = [
  "seleccioniste a una bicho de lava con un derrame cerebral",
  "tu seleccionaste a un minino de agua metrosexual",
  "tu seleccionaste a una chingadera con patas y brazos que claramente usa anabolizantes",
  "tu seleccionaste a... QUE ABOMINACION ES ESTA?",
  "tu seleccionaste... algo que deberia ser eliminado con... ¿agua?",
  "tu seleccionaste a una rata con pilas",
];

const ATTACKS_AVAILABLE = [
  {
    name: 'Lavarrame Cerebral',
    win_against: [
      "Golpe Anabolico",
      "Mordida De Cianuro",
      "pilas consoladoras",
    ]
  },
  {
    name: 'Metrosquirter',
    win_against: [
      "Lavarrame Cerebral",
      "pilas consoladoras",
    ]
  },
  {
    name: 'Golpe Anabolico',
    win_against: []
  },
  {
    name: 'Aliento Pozolero',
    win_against: ['Mordida De Cianuro']
  },
  {
    name: 'Mordida De Cianuro',
    win_against: [
      "pilas consoladoras",
      "Golpe Anabolico",
    ]
  },
  {
    name: 'pilas consoladoras',
    win_against: [
      "Aliento Pozolero",
      "Metrosquirter",
    ]
  },
];

const ATTACK_ENEMY_AVAILABLE = ATTACKS_AVAILABLE.map(a => a.name);

let ataquejugador;
let ataquepuchamonaleatorio;
let vidasjugador = 3;
let vidasenemigas = 3;
let puchamonjugador;

const createMessage = message => {
  $("#scroll, #mensajes").css('display', 'block');
  $("#mensajes").append(`<p>${message}<p>`);
}

const mensajedeseleccion = seleccion => createMessage(seleccion)

const crearmensaje = resultado => createMessage(`tu puchamon uso ${ataquejugador}, el puchamon del enemigo ataco con ${ataquepuchamonaleatorio} - ${resultado}`)

const disableButtons = state => $('#boton-fuego, #boton-agua, #boton-planta, #boton-mutante, #boton-acido, #boton-rayo').prop('disabled', state)
const desacctivarbotones = () => disableButtons(true)
const activarbotones = () => disableButtons(false)

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const seleccionarpuchamonenemigo = () => $("#puchamon-enemigo").html(PUCHAMON_AVAILABLE[rand(0, 5)])

const puchamonseleccionado = () => {
  $("#seleccionar-putazo").css('display', 'block');
  // resto 1 para que coindica con las keys del array de PUCHAMON_AVAILABLE
  const puchamonSelected = $("input[name='puchamon']:checked").val() - 1
  puchamonjugador = PUCHAMON_AVAILABLE[puchamonSelected]
  seleccionarpuchamonenemigo();
}

const seleccionarPuchamon = () => {
  let mensaje = '';
  let puchamonName = '';
  const puchamonSelected = $("input[name='puchamon']:checked").val()

  if (!puchamonSelected) {
    alert("Tal vez no lo parezca pero si das click en cualquiera lo seleccionaras");
    mensajedeseleccion("Tal vez no lo parezca pero si das click en cualquiera lo seleccionaras");
    desacctivarbotones();
    return puchamonseleccionado();
  }

  // resto 1 para que coindica con las keys del array de PUCHAMON_AVAILABLE
  puchamonName = PUCHAMON_AVAILABLE[puchamonSelected - 1]
  mensaje = PUCHAMON_MESSAGE_SELECTED[puchamonSelected - 1]
  
  $("#seleccionar-bicho").css('display', 'none');
  mensajedeseleccion(mensaje);
  $("#puchamon-jugador").html(puchamonName);
  activarbotones();
  return puchamonseleccionado();
}

const cambiarColorParrafos = () => {
  $(".tarjetadepuchamon1, .tarjetadepuchamon2, .tarjetadepuchamon3, .tarjetadepuchamon4, .tarjetadepuchamon5, .tarjetadepuchamon6")
    .css('borderColor', 'red')

  const puchamonSelected = $("input[name='puchamon']:checked").val()
  $(`.tarjetadepuchamon${puchamonSelected}`).css('borderColor', 'rgba(255, 255, 255, 100)')
}

const crearmensajefinal = (resultadofinal) => {
  $("#scroll, #mensajes, #boton-reiniciar").css('display', 'block');
  $("#mensajes").append(`<p>${puchamonjugador} ${resultadofinal}<p>`);
  desacctivarbotones();
}

const revisiondehp = () => {
  if (vidasjugador == 0) {
    return crearmensajefinal(" ha sido conectado exitosamente al wifi de dios");
  }
  if (vidasenemigas == 0) {
    return crearmensajefinal(", no mames era vencerlo no jugar a la matanza de texas!!!!");
  }
}

const atack = (idAttack) => {
  ataquejugador = ATTACK_ENEMY_AVAILABLE[idAttack];
  ataquepuchamonaleatorio = ATTACK_ENEMY_AVAILABLE[rand(0, ATTACK_ENEMY_AVAILABLE.length - 1)];
  if (ataquepuchamonaleatorio == ataquejugador) {
    crearmensaje("empataron");
    return revisiondehp();
  }

  const attack = ATTACKS_AVAILABLE.find(a => a.name === ataquejugador)
  if (attack.win_against.includes(ataquepuchamonaleatorio) || rand(1, 2) === 2) {
    crearmensaje("pos tan tonto no eras");
    $("#vidasenemigas").html(--vidasenemigas);
    return revisiondehp();
  }
  
  crearmensaje("Eres TONTISIMO");
  $("#vidasjugador").html(--vidasjugador);
  return revisiondehp();
}

$(function() {
  $("#seleccionar-putazo, #boton-reiniciar, #mensajes, #scroll").css('display', 'none');
  $("#boton-Puchamon").on("click", seleccionarPuchamon);
  $("#boton-fuego").on("click", () => atack(0));
  $("#boton-agua").on("click", () => atack(1));
  $("#boton-planta").on("click", () => atack(2));
  $("#boton-mutante").on("click", () => atack(3));
  $("#boton-acido").on("click", () => atack(4));
  $("#boton-rayo").on("click", () => atack(5));
  $("#boton-reiniciar").on("click", () => location.reload());
});
