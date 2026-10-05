// ui/styleMap.js

const COLORS = {

  tierra: "#8B7355",
  fuego: "#E63946",
  aire: "#0096C7",
  agua: "#2A9D8F"

};

/**
 * Renderiza mapa de estilos
 */
export function renderStyleMap(
* containerId,
  profile
) {

  con*t container =
    document.getElem*ntById(
      containerId
    );

* if (!container) {
    return;
  }*
  const percentages =
    profile*percentages;

  const dominant =
 *  profile.dominantStyles[0];

  co*tainer.innerHTML = `

    <div sty*e="
      display:grid;
      grid*template-columns:1fr 1fr;
      ga*:20px;
      margin-top:20px;
    *>

      <div style="
        back*round:rgba(139,115,85,0.15);
     *  padding:20px;
        border-rad*us:12px;
      ">
        <h3>🌍 T*erra</h3>
        <strong>${percen*ages.tierra}%</strong>
        <p>*nalítico</p>
      </div>

      <*iv style="
        background:rgba*42,157,143,0.15);
        padding:*0px;
        border-radius:12px;
 *    ">
        <h3>💧 Agua</h3>
  *     <strong>${percentages.agua}%<*strong>
        <p>Armonizador</p>*      </div>

      <div style="
 *      background:rgba(230,57,70,0.*5);
        padding:20px;
        *order-radius:12px;
      ">
      * <h3>🔥 Fuego</h3>
        <strong*${percentages.fuego}%</strong>
   *    <p>Impulsor</p>
      </div>

*     <div style="
        backgrou*d:rgba(0,150,199,0.15);
        pa*ding:20px;
        border-radius:1*px;
      ">
        <h3>🌪 Aire</*3>
        <strong>${percentages.a*re}%</strong>
        <p>Inspirado*</p>
      </div>

    </div>

   *<div style="
      margin-top:25px*
      text-align:center;
      pa*ding:20px;
      border-radius:12px;
      border:2px solid ${COLORS[dominant]};
    ">

      <h3>
        Estilo predominante
      </h3>

      <p style="
        font-size:24px;
        font-weight:bold;
        color:${COLORS[dominant]};
      ">

        ${dominant.toUpperCase()}

      </p>

    </div>

  `;
}

/**
 * Calcula cuadrante principal
 */
export function getQuadrant(
  profile
) {

  const percentages =
    profile.percentages;

  const dominant =
    Object.entries(
      percentages
    )
    .sort(
      (a,b) => b[1]-a[1]
    )[0][0];

  return dominant;
}

/**
 * Devuelve texto explicativo
 */
export function getMapDescription(
  profile
) {

  const quadrant =
    getQuadrant(profile);

  const descriptions = {

    tierra:
      "Predominio del análisis, la planificación y la precisión.",

    fuego:
      "Predominio de la acción, el liderazgo y la orientación al resultado.",

    aire:
      "Predominio de la creatividad, la innovación y la comunicación.",

    agua:
      "Predominio de la empatía, la cooperación y la escucha."
  };

  return descriptions[
    quadrant
  ];
}
