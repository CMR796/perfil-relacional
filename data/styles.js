// data/styles.js

export const STYLES = {

  tierra: {

    code: "tierra",

    name: "Analítico",

    icon: "📊",

    color: "#8B7355",

    description:
      "Orientado al análisis, la planificación, la calidad y la precisión."
  },

  fuego: {

    code: "fuego",

    name: "Directivo",

    icon: "🎯",

    color: "#E63946",

    description:
      "Orientado a los resultados, el liderazgo y la toma de decisiones."
  },

  aire: {

    code: "aire",

    name: "Facilitador",

    icon: "💡",

    color: "#0096C7",

    description:
      "Orientado a la creatividad, la innovación y la comunicación."
  },

  agua: {

    code: "agua",

    name: "Relacional",

    icon: "🤝",

    color: "#2A9D8F",

    description:
      "Orientado a las personas, la empatía y la colaboración."
  }

};

/**
 * Devuelve nombre legible
 */
export function getStyleName(style) {

  return STYLES[style]?.name || style;
}

/**
 * Devuelve color
 */
export function getStyleColor(style) {

  return STYLES[style]?.color || "#64748B";
}
