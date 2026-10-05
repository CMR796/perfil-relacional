// ui/styleMap.js

export default class StyleMap {

  static styles = {

    fuego: {
      id: "fuego",
      name: "Fuego",
      icon: "🔥",
      color: "#ef4444",

      description:
        "Acción, liderazgo, iniciativa y orientación a resultados.",

      strengths: [
        "Decisión",
        "Valentía",
        "Impulso",
        "Liderazgo",
        "Rapidez"
      ],

      risks: [
        "Impaciencia",
        "Dominancia",
        "Impulsividad"
      ]
    },

    tierra: {
      id: "tierra",
      name: "Tierra",
      icon: "🌍",
      color: "#16a34a",

      description:
        "Análisis, organización, precisión y metodología.",

      strengths: [
        "Rigor",
        "Planificación",
        "Calidad",
        "Precisión",
        "Fiabilidad"
      ],

      risks: [
        "Perfeccionismo",
        "Sobreanálisis",
        "Lentitud en decidir"
      ]
    },

    agua: {
      id: "agua",
      name: "Agua",
      icon: "💧",
      color: "#2563eb",

      description:
        "Empatía, escucha, cooperación y comprensión emocional.",

      strengths: [
        "Empatía",
        "Escucha activa",
        "Apoyo",
        "Cooperación",
        "Confianza"
      ],

      risks: [
        "Evitar conflictos",
        "Dependencia de aprobación",
        "Exceso de sensibilidad"
      ]
    },

    aire: {
      id: "aire",
      name: "Aire",
      icon: "🌬",
      color: "#f59e0b",

      description:
        "Creatividad, comunicación, innovación y adaptabilidad.",

      strengths: [
        "Creatividad",
        "Persuasión",
        "Flexibilidad",
        "Entusiasmo",
        "Visión"
      ],

      risks: [
        "Dispersión",
        "Falta de seguimiento",
        "Improvisación excesiva"
      ]
    }

  };

  static get(style) {
    return this.styles[style];
  }

  static getAll() {
    return Object.values(
      this.styles
    );
  }

  static getColor(style) {
    return this.styles[style]?.color
      || "#64748b";
  }

  static getName(style) {
    return this.styles[style]?.name
      || style;
  }

  static getIcon(style) {
    return this.styles[style]?.icon
      || "⭕";
  }

  static getDescription(style) {
    return this.styles[style]
      ?.description || "";
  }

  static getStrengths(style) {
    return this.styles[style]
      ?.strengths || [];
  }

  static getRisks(style) {
    return this.styles[style]
      ?.risks || [];
  }

  static getStyleLabel(style) {

    const styleData =
      this.get(style);

    if (!styleData) {
      return style;
    }

    return `${styleData.icon} ${styleData.name}`;
  }

  static getStylePair(
    primary,
    secondary
  ) {

    return {
      primary:
        this.get(primary),

      secondary:
        this.get(secondary),

      title:
        `${this.getStyleLabel(primary)} + ${this.getStyleLabel(secondary)}`
    };
  }
}
