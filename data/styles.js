// data/styles.js

export const STYLES = {

  fuego: {

    code: "fuego",

    name: "Directivo",

    icon: "🎯",

    color: "#E63946",

    shortDescription:
      "Orientado a resultados.",

    description:
      "Las personas Directivas destacan por su capacidad de decisión, liderazgo, iniciativa y orientación a objetivos.",

    strengths: [

      "Liderazgo",

      "Determinación",

      "Velocidad de acción",

      "Orientación a resultados",

      "Capacidad ejecutiva",

      "Iniciativa"

    ],

    risks: [

      "Impaciencia",

      "Escucha insuficiente",

      "Exceso de presión",

      "Impulsividad"

    ]

  },

  tierra: {

    code: "tierra",

    name: "Analítico",

    icon: "📊",

    color: "#8B7355",

    shortDescription:
      "Orientado al análisis.",

    description:
      "Las personas Analíticas destacan por la reflexión, la planificación, el rigor y la calidad.",

    strengths: [

      "Pensamiento estructurado",

      "Planificación",

      "Atención al detalle",

      "Análisis profundo",

      "Precisión",

      "Fiabilidad"

    ],

    risks: [

      "Perfeccionismo",

      "Exceso de análisis",

      "Rigidez",

      "Lentitud en algunas decisiones"

    ]

  },

  agua: {

    code: "agua",

    name: "Relacional",

    icon: "🤝",

    color: "#2A9D8F",

    shortDescription:
      "Orientado a las personas.",

    description:
      "Las personas Relacionales destacan por la empatía, la cooperación y la creación de relaciones de confianza.",

    strengths: [

      "Empatía",

      "Escucha activa",

      "Colaboración",

      "Paciencia",

      "Lealtad",

      "Capacidad de mediación"

    ],

    risks: [

      "Evitar conflictos",

      "Dificultad para decir no",

      "Exceso de adaptación",

      "Indecisión"

    ]

  },

  aire: {

    code: "aire",

    name: "Facilitador",

    icon: "💡",

    color: "#0096C7",

    shortDescription:
      "Orientado a ideas y comunicación.",

    description:
      "Las personas Facilitadoras destacan por su creatividad, innovación y capacidad para comunicar e inspirar.",

    strengths: [

      "Creatividad",

      "Comunicación",

      "Innovación",

      "Adaptabilidad",

      "Flexibilidad",

      "Entusiasmo"

    ],

    risks: [

      "Dispersión",

      "Pérdida de foco",

      "Falta de seguimiento",

      "Cambios constantes"

    ]

  }

};

/**
 * Devuelve nombre legible
 */
export function getStyleName(style) {

  return (
    STYLES[style]?.name ||
    style
  );

}

/**
 * Devuelve icono
 */
export function getStyleIcon(style) {

  return (
    STYLES[style]?.icon ||
    "•"
  );

}

/**
 * Devuelve color
 */
export function getStyleColor(style) {

  return (
    STYLES[style]?.color ||
    "#64748B"
  );

}

/**
 * Devuelve descripción
 */
export function getStyleDescription(
  style
) {

  return (
    STYLES[style]?.description ||
    ""
  );

}

/**
 * Devuelve objeto completo
 */
export function getStyle(style) {

  return STYLES[style];

}
