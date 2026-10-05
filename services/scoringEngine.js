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

/**
 * Motor principal del test.
 */
export class ScoringEngin* {

  evaluate(
    userData,
    *nswers
  ) {

    const scoringRes*lt =
      scoreProfile(
        a*swers,
        QUESTIONS
      );
*    const profileInfo =
      gene*ateProfile(
        scoringResult
*     );

    return {

      gener*tedAt:
        new Date().toISOStr*ng(),

      user: {

        name*
          userData.name || "",

 *      email:
          userData.em*il || ""

      },

      profile:*{

        profileType:
          *coringResult.profileType,

       *dominantStyles:
          scoringR*sult.dominantStyles,

        weak*stStyle:
          scoringResult.w*akestStyle,

        intensity:
  *       scoringResult.intensity,

 *      coordinates:
          scori*gResult.coordinates,

        rank*ng:
          scoringResult.rankin*,

        percentages:
          *coringResult.percentages,

       *rawScores:
          scoringResult*rawScores

      },

      summary*
        profileInfo.summary,

   *  strengths:
        profileInfo.s*rengths,

      risks:
        pro*ileInfo.risks

    };

  }

}

/*** * Helper rápido
 */
export functi*n evaluateProfile(
  userData,
  a*swers
) {

  const engine =
    ne* ScoringEngine();

  return engine*evaluate(
    userData,
    answer*
  );

}
     
