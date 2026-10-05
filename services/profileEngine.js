// services/profileEngine.js

const PROFILE_TEXTS = {

  tierra: {

    title: "Tierra",

    subtitle: "Analítico",

    summary:
      "Las personas con predominio Tierra destacan por su capacidad analítica, organización, sentido de la calidad y toma de decisiones fundamentadas.",

    strengths: [

      "Pensamiento estructurado",
      "Análisis profundo",
      "Atención al detalle",
      "Fiabilidad",
      "Planificación",
      "Responsabilidad"

    ],

    risks: [

      "Exceso de análisis",
      "Perfeccionismo",
      "Rigidez",
      "Lentitud para decidir",

    ]

  },

  fuego: {

    title: "Fuego",

    subtitle: "Impulsor",

    summary:
      "Las personas Fuego destacan por la acción, el liderazgo y la capacidad para conseguir resultados.",

    strengths: [

      "Determinación",
      "Rapidez",
      "Valentía",
      "Liderazgo",
      "Capacidad de ejecución",
      "Orientación a objetivos"

    ],

    risks: [

      "Impaciencia",
      "Escucha limitada",
      "Presión excesiva",
      "Impulsividad"

    ]

  },

  aire: {

    title: "Aire",

    subtitle: "Inspirador",

    summary:
      "Las personas Aire destacan por la creatividad, la comunicación y la innovación.",

    strengths: [

      "Creatividad",
      "Entusiasmo",
      "Adaptabilidad",
      "Optimismo",
      "Comunicación",
      "Innovación"

    ],

    risks: [

      "Dispersión",
      "Falta de seguimiento",
      "Cambios continuos",
      "Falta de foco"

    ]

  },

  agua: {

    title: "Agua",

    subtitle: "Armonizador",

    summary:
      "Las personas Agua destacan por la empatía, la escucha y la capacidad para generar relaciones de confianza.",

    strengths: [

      "Empatía",
      "Escucha activa",
      "Cooperación",
      "Lealtad",
      "Paciencia",
      "Mediación"

    ],

    risks: [

      "Evitar conflictos",
      "Dificultad para decir no",
      "Exceso de adaptación",
      "Indecisión"

    ]

  }

};

/**
 * Devuelve información del estilo
 */
export function getStyleInfo(style) {

  return PROFILE_TEXTS[style];
}

/**
 * Genera resumen ejecutivo
 */
export function generateSummary(profile) {

  const dominantStyle =
    profile.dominantStyles[0];

  const styleInfo =
    PROFILE_TEXTS[dominantStyle];

  return {

    title:
      `${styleInfo.title} · ${styleInfo.subtitle}`,

    summary:
      styleInfo.summary
  };
}

/**
 * Genera fortalezas
 */
export function generateStrengths(profile) {

  const dominantStyle =
    profile.dominantStyles[0];

  return PROFILE_TEXTS[
    dominantStyle
  ].strengths;
}

/**
 * Genera riesgos
 */
export function generateRisks(profile) {

  const dominantStyle =
    profile.dominantStyles[0];

  return PROFILE_TEXTS[
    dominantStyle
  ].risks;
}

/**
 * Generador global
 */
export function generateProfile(profile) {

  return {

    summary:
      generateSummary(profile),

    strengths:
      generateStrengths(profile),

    risks:
      generateRisks(profile)

  };
}
