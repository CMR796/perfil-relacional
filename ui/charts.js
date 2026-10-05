// ui/charts.js

const COLORS = {

  tierra: "#8B7355",
  fuego: "#E63946",
  aire: "#0096C7",
  agua: "#2A9D8F"

};

/**
 * Genera HTML simple para mostrar porcentajes
 */
export function renderPercentages(
  containerId,
  percentages
) {

  const container =
    document.getElementById(
      containerId
    );

  if (!container) {
    return;
  }

  container.innerHTML = "";

  const styles = [

    {
      key: "tierra",
      label: "🌍 Tierra"
    },

    {
      key: "fuego",
      label: "🔥 Fuego"
    },

    {
      key: "aire",
      label: "🌪 Aire"
    },

    {
      key: "agua",
      label: "💧 Agua"
    }

  ];

  styles.forEach(style => {

    const percentage =
      percentages[style.key];

    const row =
      document.createElement("div");

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

          ${style.label}

        </span>

        <strong>

          ${percentage}%

        </strong>

      </div>

      <div
        style="
          background:#E5E7EB;
          border-radius:999px;
          height:14px;
          overflow:hidden;
        ">

        <div
          style="
            height:100%;
            width:${percentage}%;
            background:${COLORS[style.key]};
            border-radius:999px;
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

  const styles = Object.entries(
    percentages
  );

  styles.sort(
    (a,b) => b[1] - a[1]
  );

  return styles[0][0];
}

/**
 * Color de estilo
 */
export function getStyleColor(
  style
) {

  return COLORS[style];
}

/**
 * Color dominante
 */
export function getDominantColor(
  percentages
) {

  const style =
    getDominantStyle(
      percentages
    );

  return COLORS[style];
}
