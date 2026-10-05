// services/scoringEngine.js

export default class ScoringEngine {

  static calculate(responses) {

    const dimensions = {
      directivo: [],
      analitico: [],
      relacional: [],
      facilitador: []
    };

    Object.entries(responses).forEach(([key, value]) => {

      const score = Number(value);

      if (key.startsWith("directivo_")) {
        dimensions.directivo.push(score);
      }

      if (key.startsWith("analitico_")) {
        dimensions.analitico.push(score);
      }

      if (key.startsWith("relacional_")) {
        dimensions.relacional.push(score);
      }

      if (key.startsWith("facilitador_")) {
        dimensions.facilitador.push(score);
      }

    });

    const directivo =
      this.sum(dimensions.directivo);

    const analitico =
      this.sum(dimensions.analitico);

    const relacional =
      this.sum(dimensions.relacional);

    const facilitador =
      this.sum(dimensions.facilitador);

    const total =
      directivo +
      analitico +
      relacional +
      facilitador;

    const percentages = {

      directivo:
        this.toPercentage(
          directivo,
          total
        ),

      analitico:
        this.toPercentage(
          analitico,
          total
        ),

      relacional:
        this.toPercentage(
          relacional,
          total
        ),

      facilitador:
        this.toPercentage(
          facilitador,
          total
        )

    };

    const ranking =
      Object.entries(
        percentages
      ).sort(
        (a, b) => b[1] - a[1]
      );

    const primaryStyle =
      this.getStyleName(
        ranking[0][0]
      );

    const secondaryStyle =
      this.getStyleName(
        ranking[1][0]
      );

    return {

      rawScores: {
        directivo,
        analitico,
        relacional,
        facilitador
      },

      scores: percentages,

      primaryStyle,

      secondaryStyle,

      blend:
        `${primaryStyle}-${secondaryStyle}`,

      profileCode:
        this.generateProfileCode(
          primaryStyle,
          secondaryStyle
        ),

      completedAt:
        new Date().toISOString()

    };
  }

  static validateResponses(
    responses
  ) {

    const totalQuestions = 40;

    const answered =
      Object.keys(responses)
        .length;

    return {

      valid:
        answered === totalQuestions,

      answered,

      remaining:
        totalQuestions - answered

    };
  }

  static rankStyles(
    scores
  ) {

    return Object.entries(scores)
      .sort(
        (a, b) => b[1] - a[1]
      )
      .map(item => ({
        style:
          this.getStyleName(
            item[0]
          ),
        score:
          item[1]
      }));
  }

  static generateProfileCode(
    primary,
    secondary
  ) {

    const codeMap = {
      Directivo: "D",
      Analítico: "A",
      Relacional: "R",
      Facilitador: "F"
    };

    return (
      codeMap[primary] +
      codeMap[secondary]
    );
  }

  static getStyleName(
    style
  ) {

    const names = {

      directivo:
        "Directivo",

      analitico:
        "Analítico",

      relacional:
        "Relacional",

      facilitador:
        "Facilitador"

    };

    return names[style];
  }

  static sum(values) {

    return values.reduce(
      (total, current) =>
        total + current,
     
