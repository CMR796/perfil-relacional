// services/profileEngine.js
 
const PROFILE_TEXTS = {
 
tierra: {
 
title: "Analítico",
 
summary:
"Las personas analíticas destacan por su capacidad de análisis, organización, rigor y toma de decisiones fundamentadas.",
 
strengths: [
 
"Pensamiento estructurado",
"Capacidad analítica",
"Planificación",
"Atención al detalle",
"Fiabilidad",
"Calidad"
 
],
 
risks: [
 
"Exceso de análisis",
"Perfeccionismo",
"Rigidez",
"Lentitud en algunas decisiones"
 
]
 
},
 
fuego: {
 
title: "Directivo",
 
summary:
"Las personas directivas destacan por su orientación a resultados, liderazgo, rapidez de decisión y capacidad de acción.",
 
strengths: [
 
"Liderazgo",
"Determinación",
"Rapidez",
"Iniciativa",
"Orientación a objetivos",
"Capacidad de ejecución"
 
],
 
risks: [
 
"Impaciencia",
"Exceso de presión",
"Escucha insuficiente",
"Impulsividad"
 
]
 
},
 
aire: {
 
title: "Facilitador",
 
summary:
"Las personas facilitadoras destacan por su creatividad, innovación, comunicación y generación de nuevas ideas.",
 
strengths: [
 
"Creatividad",
"Comunicación",
"Flexibilidad",
"Innovación",
"Entusiasmo",
"Adaptabilidad"
 
],
 
risks: [
 
"Dispersión",
"Pérdida de foco",
"Exceso de optimismo",
"Falta de seguimiento"
 
]
 
},
 
agua: {
 
title: "Relacional",
 
summary:
"Las personas relacionales destacan por la empatía, la escucha, la cooperación y la construcción de relaciones de confianza.",
 
strengths: [
 
"Empatía",
"Escucha activa",
"Colaboración",
"Paciencia",
"Lealtad",
"Confianza"
 
],
 
risks: [
 
"Evitar conflictos",
"Exceso de adaptación",
"Dificultad para decir no",
"Indecisión"
 
]
 
}
 
};
 
/**
* Traducción estilos
*/
export function getStyleName(style) {
 
return PROFILE_TEXTS[style]?.title || style;
 
}
 
/**
* Resumen ejecutivo
*/
export function generateSummary(profile) {
 
const style =
profile.dominantStyles[0];
 
return {
 
title:
`${PROFILE_TEXTS[style].title}`,
 
summary:
PROFILE_TEXTS[style].summary
 
};
 
}
 
/**
* Fortalezas
*/
export function generateStrengths(profile) {
 
const style =
profile.dominantStyles[0];
 
return PROFILE_TEXTS[
style
].strengths;
 
}
 
/**
* Riesgos
*/
export function generateRisks(profile) {
 
const style =
profile.dominantStyles[0];
 
return PROFILE_TEXTS[
style
].risks;
 
}
 
/**
* Perfil completo
*/
export function generateProfile(profile) {
 
return {
 
summary:
generateSummary(profile),
 
strengths:
generateStrengths(profile),
 
risks:
generateRisks(profile)
 
};
 
}
