// ui/styleMap.js

import {
  getStyleName,
  getStyleColor,
  getStyleIcon
}
from "../data/styles.js";

/**
 * Obtiene datos independientemente
 * de si recibe:
 *
 * result.profile
 * o
 * profile
 */
function normalizeProfile(data) {

  if (data.profile) {
    return data.profile;
  }

  return data;
}

/**
 * Render principal
 */
export function renderStyleMap(
  containerId,
  data
) {

  const profile =
    normalizeProfile(data);

  const container =
    document.getElementById(
      containerId
    );

  if (!container) return;

  if (!profile) return;

  const percentages =
    profile.percentages || {};

  const dominantStyle =
    profile.dominantStyles?.[0]
      || "tierra";

  container.innerHTML = `

    <div class="style-map">

      ${buildCard(
        "tierra",
        percentages.tierra || 0
      )}

      ${buildCard(
        "agua",
        percentages.agua || 0
      )}

      ${buildCard(
        "fuego",
        percentages.fuego || 0
      )}

      ${buildCard(
        "aire",
        percentages.aire || 0
      )}

    </div>

    <div
      style="
        margin-top:25px;
        padding:25px;
        border-radius:16px;
        text-align:center;
        border:3px solid ${getStyleColor(dominantStyle)};
      ">

      <h2>
        Perfil predominante
      </h2>

      <h1
        style="
          color:${getStyleColor(dominantStyle)};
        ">

        ${getStyleIcon(dominantStyle)}
        ${getStyleName(dominantStyle)}

      </h1>

    </div>

  `;
}

/**
 * Tarjeta estilo
 */
function buildCard(
  style,
  percentage
) {

  return `

    <div
      class="quadrant-card"
      style="
        border-left:5px solid ${getStyleColor(style)};
      ">

      <h3>

        ${getStyleIcon(style)}
        ${getStyleName(style)}

      </h3>

      <p>

        ${percentage}%

      </p>

    </div>

  `;
}

/**
 * Devuelve estilo predominante
 */
export function getDominantStyle(
  data
) {

  const profile =
    normalizeProfile(data);

  return (
    profile.dominantStyles?.[0]
    || "tierra"
  );

}

/**
 * Texto descriptivo
 */
export function getStyleMapDescription(
  data
) {

  const style =
    getDominantStyle(data);

  const descriptions = {

    fuego:
      "Predominio de liderazgo, iniciativa y orientación a resultados.",

    tierra:
      "Predominio de análisis, planificación y rigor.",

    agua:
      "Predominio de empatía, colaboración y relaciones de confianza.",

    aire:
      "Predominio de creatividad, innovación y comunicación."

  };

  return descriptions[style];

}
