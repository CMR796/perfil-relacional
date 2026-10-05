// ui/charts.js

const STYLES = {

  tierra: {

    label: "📊 Analítico",

    color: "#8B7355"

  },

  fuego: {

    label: "🎯 Directivo",

    color: "#E63946"

  },

  aire: {

    label: "💡 Facilitador",

    color: "#0096C7"

  },

  agua: {

    label: "🤝 Relacional",

    color: "#2A9D8F"

  }

};

/**
 * Muestra barras de porcentaje
 */
export function renderPercentages(
  containerId,
  percentages
) {

  const container =
    document.getElementById(
      containerId
    );

  if (!container) return;

  container.innerHTML = "";

  Object.keys(STYLES)
    .forEach(style => {

      const percentage =
        percentages[style] || 0;

      const row =
        document.createElement(
          "div"
        );

      row.style.marginBottom =
        "18px";

      row.innerHTML = `

        <div
          style="
            display:flex;
            justify-content:space-between;
            margin-bottom:6px;
          ">

          <span>

            ${STYLES[style].label}

          </span>

          <strong>

            ${percentage}%

          </strong>

        </div>

        <div
          style="
            background:#E2E8F0;
            border-radius:999px;
            overflow:hidden;
            height:14px;
          ">

          <div
            style="
              width:${percentage}%;
              height:100%;
              background:${STYLES[style].color};
              border-radius:999px;
              transition:width .6s ease;
            ">
          </div>

        </div>

      `;

      container.appendChild(
        row
      );

    });

}

/**
 * Estilo dominante
 */
export function getDominantStyle(
  percentages
) {

  const ranking =
    Object.entries(
      percentages
    )
      .sort(
        (a,b) => b[1] - a[1]
      );

  return ranking[0][0];
}

/**
 * Nombre profesional
 */
export function getStyleName(
  style
) {

  return STYLES[style]
    ?.label || style;
}

/**
 * Color estilo
 */
export function getStyleColor(
  style
) {

  return STYLES[style]
    ?.color || "#64748B";
}

/**
 * Resumen ejecutivo
 */
export function buildStyleCards(
  percentages
) {

  return Object.keys(STYLES)
    .map(style => ({

      style,

      label:
        STYLES[style].label,

      value:
        percentages[style],

      color:
        STYLES[style].color

    }));

}
