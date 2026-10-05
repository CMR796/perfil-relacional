// services/compatibilityEngine.js

const STYLE_NAMES = {

  tierra: "Analítico",

  fuego: "Directivo",

  agua: "Relacional",

  aire: "Facilitador"
};

/**
 * Matriz de compatibilidad.
 *
 * Escala:
 * 0 - 100
 */

const COMPATIBILITY_MATRIX = {

  tierra: {

    tierra: 90,

    fuego: 70,

    aire: 76,

    agua: 85

  },

  fuego: {

    tierra: 70,

    fuego: 82,

    aire: 92,

    agua: 65

  },

  aire: {

    tierra: 76,

    fuego: 92,

    aire: 88,

    agua: 84

  },

  agua: {

    tierra: 85,

    fuego: 65,

    aire: 84,

    agua: 94

  }

};

/**
 * Estilo principal
 */
export function getPrimaryStyle(
  profile
) {

  return profile
    .dominantStyles[0];

}

/**
 * Compatibilidad principal
 */
export function calculateCompatibility(
  profileA,
  profileB
) {

  const styleA =
    getPrimaryStyle(
      profileA
    );

  const styleB =
    getPrimaryStyle(
      profileB
    );

  return COMPATIBILITY_MATRIX
    [styleA]
    [styleB];

}

/**
 * Nivel descriptivo
 */
export function getCompatibilityLevel(
  score
) {

  if (score >= 90) {

    return "EXCEPCIONAL";
  }

  if (score >= 80) {

    return "MUY ALTA";
  }

  if (score >= 70) {

    return "ALTA";
  }

  if (score >= 60) {

    return "MEDIA";
  }

  return "DESAFIANTE";
}

/**
 * Fortalezas relación
 */
export function getStrengths(
  styleA,
  styleB
) {

  const key =
    [styleA, styleB]
      .sort()
      .join("-");

  const map = {

    "agua-agua": [

      "Gran empatía",

      "Relaciones duraderas",

      "Alto nivel de confianza"

    ],

    "aire-fuego": [

      "Innovación",

      "Rapidez de ejecución",

      "Capacidad emprendedora"

    ],

    "agua-tierra": [

      "Equilibrio entre personas y análisis",

      "Confianza",

      "Estabilidad"

    ],

    "aire-tierra": [

      "Creatividad con estructura",

      "Innovación equilibrada",

      "Complementariedad"

    ]

  };

  return map[key] || [

    "Aprendizaje mutuo",

    "Complementariedad",

    "Diversidad de perspectivas"

  ];
}

/**
 * Riesgos
 */
export function getRisks(
  styleA,
  styleB
) {

  const key =
    [styleA, styleB]
      .sort()
      .join("-");

  const map = {

    "agua-fuego": [

      "Velocidades distintas",

      "Sensación de presión",

      "Choques comunicativos"

    ],

    "aire-tierra": [

      "Diferencia de prioridades",

      "Conflicto entre creatividad y estructura",

      "Ritmos distintos"

    ],

    "fuego-tierra": [

      "Impaciencia",

      "Exceso de análisis",

      "Choque de enfoques"

    ]

  };

  return map[key] || [

    "Malentendidos ocasionales",

    "Diferencias de percepción",

    "Necesidad de adaptación"

  ];
}

/**
 * Recomendaciones
 */
export function getRecommendations(
  styleA,
  styleB
) {

  const recommendations = {

    fuego: {

      agua: [

        "Escucha más antes de decidir",

        "Cuida el impacto emocional de los mensajes"

      ],

      tierra: [

        "Permite más tiempo para el análisis"

      ]

    },

    tierra: {

      fuego: [

        "Presenta conclusiones de forma más ejecutiva",

        "Evita entrar demasiado en detalle"

      ]

    },

    agua: {

      fuego: [

        "Expresa desacuerdos con claridad",

        "No acumules frustraciones"

      ]

    },

    aire: {

      tierra: [

        "Concreta más los compromisos",

        "Prioriza antes de lanzar nuevas ideas"

      ]

    }

  };

  return recommendations?.[styleA]?.[styleB] || [

    "Practicar escucha activa",

    "Comunicar expectativas",

    "Buscar objetivos comunes"

  ];
}

/**
 * Texto resumen
 */
export function generateSummary(
  score,
  styleA,
  styleB
) {

  return `La combinación entre un perfil ${STYLE_NAMES[styleA]} y un perfil ${STYLE_NAMES[styleB]} presenta una compatibilidad ${getCompatibilityLevel(score).toLowerCase()}.`;
}

/**
 * Informe completo
 */
export function createCompatibilityReport(
  profileA,
  profileB
) {

  const styleA =
    getPrimaryStyle(
      profileA
    );

  const styleB =
    getPrimaryStyle(
      profileB
    );

  const score =
    calculateCompatibility(
      profileA,
      profileB
    );

  return {

    score,

    level:
      getCompatibilityLevel(
        score
      ),

    styleA:
      STYLE_NAMES[
        styleA
      ],

    styleB:
      STYLE_NAMES[
        styleB
      ],

    summary:
      generateSummary(
        score,
        styleA,
        styleB
      ),

    strengths:
      getStrengths(
        styleA,
        styleB
      ),

    risks:
      getRisks(
        styleA,
        styleB
      ),

    recommendationsA:
      getRecommendations(
        styleA,
        styleB
      ),

    recommendationsB:
      getRecommendations(
        styleB,
        styleA
      )

  };
}
