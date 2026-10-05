// ui/styleMap.js

import {
  getStyleName,
  getStyleColor,
  getStyleIcon
}
from "../data/styles.js";

/**
 * Mapa profesional de estilos
 */

export function renderStyleMap(
  containerId,
  profile
) {

  const container =
    document.getElementById(
      containerId
    );

  if (!container) return;

  const percentages =
    profile.percentages;

  const dominantStyle =
    profile.dominantStyles[0];

  container.innerHTML = `

    <div class="style-map">

      <div class="quadrant top-left">

        <div
          class="quadrant-card"
          style="
            border-left:5px solid ${getStyleColor("tierra")}
          ">

          <h3>
            ${getStyleIcon("tierra")}
            Analítico
          </h3>

          <p>
            ${percentages.tierra}%
          </p>

        </div>

      </div>

      <div class="quadrant top-right">

        <div
          class="quadrant-card"
          style="
            border-left:5px solid ${getStyleColor("agua")}
          ">

          <h3>
            ${getStyleIcon("agua")}
            Relacional
          </h3>

          <p>
            ${percentages.agua}%
          </p>

        </div>

      </div>

      <div class="quadrant bottom-left">

        <div
          class="quadrant-card"
          style="
            border-left:5px solid ${getStyleColor("fuego")}
          ">

          <h3>
            ${getStyleIcon("fuego")}
            Directivo
          </h3>

          <p>
            ${percentages.fuego}%
          </p>

        </div>

      </div>

      <div class="quadrant bottom-right">

        <div
          class="quadrant-card"
          style="
            border-left:5px solid ${getStyleColor("aire")}
          ">

          <h3>
            ${getStyleIcon("aire")}
            Facilitador
          </h3>

          <p>
            ${percentages.aire}%
          </p>

        </div>

      </div>

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
 * Obtiene estilo principal
 */
export function getDominantStyle(
  profile
) {

  return profile
    .dominantStyles[0];

}

/**
 * Texto explicativo
 */
export function getStyleMapDescription(
  profile
) {

  const style =
    getDominantStyle(
      profile
    );

  const descriptions = {

    fuego:
      "Predominio de liderazgo, iniciativa y orientación a resultados.",

    tierra:
      "Predominio de análisis, rigor y planificación.",

    agua:
      "Predominio de empatía, escucha y relaciones de confianza.",

    aire:
      "Predominio de creatividad, innovación y comunicación."

  };

  return descriptions[
    style
  ];

}
``
