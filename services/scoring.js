// services/scoring.js

/**
 * Calcula las puntuaciones por estilo
 */
export function calculateRawScores(
  answers,
  questions
) {

  const scores = {

    tierra: 0,
    fuego: 0,
    aire: 0,
    agua: 0

  };

  questions.forEach(question => {

    const value =
      Number(
        answers[question.id] || 0
      );

    scores[
      question.style
    ] += value;

  });

  return scores;
}

/**
 * Convierte puntuaciones a porcentajes
 */
export function calculatePercentages(
  rawScores
) {

  const total =
    rawScores.tierra +
    rawScores.fuego +
    rawScores.aire +
    rawScores.agua;

  if (total === 0) {

    return {

      tierra: 0,
      fuego: 0,
      aire: 0,
      agua: 0

    };
  }

  return {

    tierra:
      round(
        rawScores.tierra
        / total
        * 100
      ),

    fuego:
      round(
        rawScores.fuego
        / total
        * 100
      ),

    aire:
      round(
        rawScores.aire
        / total
        * 100
      ),

    agua:
      round(
        rawScores.agua
        / total
        * 100
      )
  };
}

/**
 * Ordena estilos de mayor a menor
 */
export function getRanking(
  percentages
) {

  return Object.entries(
    percentages
  )

  .sort(
    (a,b) => b[1] - a[1]
  )

  .map(item => ({

    style: item[0],

    percentage: item[1]

  }));
}

/**
 * Perfil puro / dual / múltiple
 */
export function determineProfileType(
  percentages
) {

  const ranking =
    getRanking(
      percentages
    );

  const first =
    ranking[0].percentage;

  const second =
    ranking[1].percentage;

  const third =
    ranking[2].percentage;

  if (
    (first - second) >= 10
  ) {

    return "PURO";
  }

  if (
    Math.abs(
      first - second
    ) <= 5

    &&

    (
      second - third
    ) >= 5
  ) {

    return "DUAL";
  }

  return "MULTIPLE";
}

/**
 * Estilos dominantes
 */
export function getDominantStyles(
  percentages
) {

  const ranking =
    getRanking(
      percentages
    );

  const profileType =
    determineProfileType(
      percentages
    );

  if (
    profileType === "PURO"
  ) {

    return [

      ranking[0].style

    ];
  }

  if (
    profileType === "DUAL"
  ) {

    return [

      ranking[0].style,
      ranking[1].style

    ];
  }

  return [

    ranking[0].style,
    ranking[1].style,
    ranking[2].style

  ];
}

/**
 * Coordenadas mapa relacional
 */
export function calculateMapCoordinates(
  percentages
) {

  const x =

      percentages.aire +
      percentages.agua

    -

      percentages.tierra -
      percentages.fuego;

  const y =

      percentages.tierra +
      percentages.agua

    -

      percentages.aire -
      percentages.fuego;

  return {

    x:
      round(
        x / 100
      ),

    y:
      round(
        y / 100
      )

  };
}

/**
 * Intensidad estilo dominante
 */
export function calculateIntensity(
  percentages
) {

  const max =
    Math.max(

      percentages.tierra,

      percentages.fuego,

      percentages.aire,

      percentages.agua
    );

  if (max >= 40) {

    return "MUY ALTA";
  }

  if (max >= 33) {

    return "ALTA";
  }

  if (max >= 27) {

    return "MEDIA";
  }

  return "EQUILIBRADA";
}

/**
 * Estilo menos utilizado
 */
export function getWeakestStyle(
  percentages
) {

  const ranking =
    getRanking(
      percentages
    );

  return ranking[
    ranking.length - 1
  ].style;
}

/**
 * Función principal
 */
export function scoreProfile(
  answers,
  questions
) {

  const rawScores =
    calculateRawScores(
      answers,
      questions
    );

  const percentages =
    calculatePercentages(
      rawScores
    );

  return {

    rawScores,

    percentages,

    ranking:
      getRanking(
        percentages
      ),

    profileType:
      determineProfileType(
        percentages
      ),

    dominantStyles:
      getDominantStyles(
        percentages
      ),

    coordinates:
      calculateMapCoordinates(
        percentages
      ),

    intensity:
      calculateIntensity(
        percentages
      ),

    weakestStyle:
      getWeakestStyle(
        percentages
      )
  };
}

/**
 * Utilidad redondeo
 */
function round(
  value
) {

  return Math.round(
    value * 100
  ) / 100;
}
