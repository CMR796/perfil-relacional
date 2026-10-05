// services/scoringEngine.js

import { QUESTIONS }
from "../data/questions.js";

import {
  scoreProfile
}
from "./scoring.js";

import {
  generateProfile
}
from "./profileGenerator.js";

import {
  getStyleName,
  getStyleColor,
  getStyleIcon
}
from "../data/styles.js";

export class ScoringEngine {

  evaluate(
    userData,
    answers
  ) {

    const scoringResult =
      scoreProfile(
        answers,
        QUESTIONS
      );

    const profileInfo =
      generateProfile(
        scoringResult
      );

    const dominantStyle =
      scoringResult
        .dominantStyles[0];

    return {

      generatedAt:
        new Date()
        .toISOString(),

      user: {

        name:
          userData.name || "",

        email:
          userData.email || ""

      },

      profile: {

        profileType:
          scoringResult.profileType,

        dominantStyles:
          scoringResult.dominantStyles,

        weakestStyle:
          scoringResult.weakestStyle,

        intensity:
          scoringResult.intensity,

        coordinates:
          scoringResult.coordinates,

        ranking:
          scoringResult.ranking,

        percentages:
          scoringResult.percentages,

        rawScores:
          scoringResult.rawScores,

        dominantStyleName:
          getStyleName(
            dominantStyle
          ),

        dominantStyleColor:
          getStyleColor(
            dominantStyle
          ),

        dominantStyleIcon:
          getStyleIcon(
            dominantStyle
          )

      },

      summary:
        profileInfo.summary,

      strengths:
        profileInfo.strengths,

      risks:
        profileInfo.risks

    };

  }

}

/**
 * Evaluación rápida
 */
export function evaluateProfile(
  userData,
  answers
) {

  const engine =
    new ScoringEngine();

  return engine.evaluate(
    userData,
    answers
  );

}
     
