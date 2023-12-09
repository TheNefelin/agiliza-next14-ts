
const dt_profesionales = [
  {
    key: 1,
    nombre: "Pamela Hernández", 
    carrera: "Ingeniera Industrial",
    universidad: "Universidad de Santiago",
    descripcion: "Con experiencia liderando equipos de trabajo. Implementando mejoras de procesos",
    img_url: "/pamela.webp",
  },
  {
    key: 2,
    nombre: "Susana Muñoz", 
    carrera: "Ingeniera Informática",
    universidad: "P. Universidad Católica de Valparaíso",
    descripcion: "Con experiencia liderando equipos de trabajo. Priorizando y mejorando procesos",
    img_url: "/susana.webp",
  },
];

const dt_services = [
  {
    key: 1,
    nombre: "Documentación", 
    descripcion: [
      "Es importante para una empresa conocer sus procesos, identificar sus tareas, entender sus objetivos y de esta forma se pueden identificar patrones de ineficiencia que necesitan ser mejorados.",
      "Ayuda a la capacitación de nuevas contrataciones, apoyado con procedimientos e instructivos, permiten mantener informados a quienes sean responsable de cada actividad.",
      "Podemos levantar los documentos asociados a tus procesos y entregarte las herramientas para mantenerlos actualizados.",
    ],
  },
  {
    key: 2,
    nombre: "Servicio 2", 
    descripcion: [
      "Aloy, la intrépida cazadora de la tribu Nora en Horizon, emprende un viaje hacia el norte en busca de respuestas sobre su pasado en un mundo lleno de máquinas y misterios."
    ],
  },
  {
    key: 3,
    nombre: "Servicio 3", 
    descripcion: [
      "En su travesía, se encuentra con un grupo de cazadores Carja en apuros y, al salvarlos, descubre la existencia de un artefacto antiguo que promete revelar conocimientos sobre los antiguos.",
      "Junto a los cazadores, se aventura en una instalación tecnológica oculta, donde descubre la verdad sobre su origen: Aloy es un proyecto diseñado para preservar la vida y el conocimiento en un mundo amenazado."
    ],
  },
  {
    key: 4,
    nombre: "Servicio 4", 
    descripcion: [
      "Armada con esta revelación, Aloy regresa a la superficie decidida a utilizar sus habilidades para proteger a su tribu y enfrentar los desafíos de un mundo postapocalíptico. Su valentía y determinación la convierten en una leyenda en Horizon."
    ],
  },
];

const dt_links = [
  {
    key: 1,
    label: "Inicio",
    url: "/#id_inicio",
  },
  {
    key: 2,
    label: "Quienes Somos",
    url: "/#id_quienes_somos",
  },
  {
    key: 3,
    label: "Servicios",
    url: "/#id_servicios",
  },
  {
    key: 4,
    label: "Contáctanos",
    url: "/#id_contactanos",
  },
  {
    key: 5,
    label: "Novedades",
    url: "/news",
  },
]

const dt_news = [
  {
    key: 1,
    img_url: "/news_01.webp",
    alt: "Just in Time",
    title: "Just in Time (JIT)",
    description: "Justo a Tiempo, es una herramienta lean que busca generar productos solo cuando sea necesario, de acuerdo a la demanda. Transformando de un sistema push un sistema pull y evitando de esta forma, la administración de los inventarios. Este se basa en 3 pilares fundamentales...",
    detail: [
      {
        key: 1,
        title: "Atacar los problemas fundamentales",
        descripcion: "Para esto podemos usar dos herramientas que ayudan a detectar problemas (Diagrama de Causa Efecto) y priorízalos (Diagrama de Pareto). Detectar el problema, no ocultarlo y saber que problema atacar primero es fundamental al momento de comenzar a mejorar.",
      },
      {
        key: 2,
        title: "Eliminar despilfarros (desperdicios)",
        descripcion: "A medida que los procesos envejecen se van sumando acciones que no ayudan en su agilidad. Estas tareas se conocen como desperdicios, algunos de ellos son: Sobreproducción, Tiempo de Espera, Transporte, Inventario, Proceso inadecuado (reprocesamiento), Movimientos innecesarios, Defectos en Productos.",
      },
      {
        key: 3,
        title: "Buscar la simplicidad",
        descripcion: "Mientras más simple sean los procesos, más fácil es mantenerlo y encontrar posibles oportunidades de mejora. Siempre un camino más directo es mejor para el evitar desperdicios.",
      },
    ]
  },
  {
    key: 2,
    img_url: "/news_02.webp",
    alt: "Poka Yoke",
    title: "Poka Yoke",
    description: "Es un sistema de calidad, que permite detectar el error a simple vista y evitar que se materialice. Uno de los ejemplos más clásicos es...",
    detail: [
      {
        key: 1,
        title: "Estado",
        descripcion: "Sin Informacion.",
      },
    ]
  },
  {
    key: 3,
    img_url: "/news_03.webp",
    alt: "Mejora de procesos",
    title: "¿Qué es la mejora de procesos?",
    description: "Un proceso es un conjunto de tareas que juntas logran un objetivo. Con el paso del tiempo los procesos pueden comenzar a fallar y se...",
    detail: [
      {
        key: 1,
        title: "Estado",
        descripcion: "Sin Informacion.",
      },
    ]
  },
]

module.exports = {
  dt_services,
  dt_profesionales,
  dt_links,
  dt_news,
};
