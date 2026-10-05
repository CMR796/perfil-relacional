// services/profileEngine.js
 
import ScoringEngine from "./scoringEngine.js";
 
class ProfileEngine {
 
constructor() {
this.version = "1.0.0";
}
 
/**
* Genera un perfil completo
*/
generateProfile(userData, responses) {
 
const scoringResult =
ScoringEngine.calculate(responses);
 
const profile = {
 
id: this.createId(),
 
...userData,
 
...scoringResult,
 
summary: this.generateSummary(
scoringResult.primaryStyle,
scoringResult.secondaryStyle
),
 
strengths: this.getStrengths(
scoringResult.primaryStyle
),
 
risks: this.getRisks(
scoringResult.primaryStyle
),
 
recommendations:
this.getRecommendations(
scoringResult.primaryStyle
),
 
communication:
this.getCommunicationGuide(
scoringResult.primaryStyle
)
};
 
return profile;
}
 
/**
* Guardar perfil
*/
saveProfile(profile) {
 
const profiles =
this.getStoredProfiles();
 
profiles.push(profile);
 
localStorage.setItem(
"conecta360Profiles",
JSON.stringify(profiles)
);
 
localStorage.setItem(
"conecta360Profile",
JSON.stringify(profile)
);
 
return profile;
}
 
/**
* Obtener todos los perfiles
*/
getStoredProfiles() {
 
const data =
localStorage.getItem(
"conecta360Profiles"
);
 
return data
? JSON.parse(data)
: [];
}
 
/**
* Obtener último perfil
*/
getLastProfile() {
 
const profile =
localStorage.getItem(
"conecta360Profile"
);
 
return profile
? JSON.parse(profile)
: null;
}
 
/**
* Obtener perfil por índice
*/
getProfile(index) {
 
const profiles =
this.getStoredProfiles();
 
return profiles[index] || null;
}
 
/**
* Eliminar perfil
*/
deleteProfile(index) {
 
const profiles =
this.getStoredProfiles();
 
profiles.splice(index, 1);
 
localStorage.setItem(
"conecta360Profiles",
JSON.stringify(profiles)
);
}
 
/**
* Eliminar todos
*/
clearProfiles() {
 
localStorage.removeItem(
"conecta360Profiles"
);
 
localStorage.removeItem(
"conecta360Profile"
);
}
 
/**
* Exportar perfil
*/
exportProfile(profile) {
 
return JSON.stringify(
profile,
null,
2
);
}
 
/**
* Importar perfil
*/
importProfile(json) {
 
return JSON.parse(json);
}
 
/**
* Generar ID
*/
createId() {
 
return (
"C360-" +
Date.now() +
"-" +
Math.floor(
Math.random() * 1000
)
);
}
 
/**
* Resumen ejecutivo
*/
generateSummary(
primary,
secondary
) {
 
return `
Tu estilo predominante es ${primary}
con influencia secundaria ${secondary}.
 
Este perfil combina rasgos que afectan
a la forma de comunicarte, colaborar,
tomar decisiones y gestionar relaciones.
 
Comprender tus preferencias permite
adaptar mejor tu comunicación y mejorar
la calidad de tus interacciones.
`;
}
 
/**
* Fortalezas
*/
getStrengths(style) {
 
const strengths = {
 
Directivo: [
"Capacidad de liderazgo",
"Orientación a resultados",
"Iniciativa",
"Determinación",
"Resolución de problemas"
],
 
Analítico: [
"Pensamiento crítico",
"Precisión",
"Planificación",
"Rigor",
"Calidad"
],
 
Relacional: [
"Empatía",
"Escucha activa",
"Trabajo en equipo",
"Motivación",
"Comunicación"
],
 
Facilitador: [
"Paciencia",
"Colaboración",
"Apoyo a otros",
"Estabilidad",
"Fiabilidad"
]
};
 
return strengths[style] || [];
}
 
/**
* Riesgos
*/
getRisks(style) {
 
const risks = {
 
Directivo: [
"Impaciencia",
"Exceso de control",
"Escucha limitada"
],
 
Analítico: [
"Perfeccionismo",
"Sobreanálisis",
"Retrasar decisiones"
],
 
Relacional: [
"Buscar aprobación",
"Evitar conflictos",
"Exceso de implicación"
],
 
Facilitador: [
"Poca asertividad",
"Resistencia al cambio",
"Evitar confrontaciones"
]
};
 
return risks[style] || [];
}
 
/**
* Recomendaciones
*/
getRecommendations(style) {
 
const recommendations = {
 
Directivo: [
"Escucha activamente antes de decidir.",
"Dedica tiempo a entender otros puntos de vista.",
"Evita imponer soluciones demasiado rápido."
],
 
Analítico: [
"Busca equilibrio entre análisis y acción.",
"Acepta cierto nivel de incertidumbre.",
"Evita el perfeccionismo excesivo."
],
 
Relacional: [
"Establece límites claros.",
"Mantén conversaciones difíciles cuando sea necesario.",
"Combina empatía con objetividad."
],
 
Facilitador: [
"Practica la asertividad.",
"Expresa tu opinión con claridad.",
"No evites conflictos constructivos."
]
};
 
return recommendations[style] || [];
}
 
/**
* Comunicación
*/
getCommunicationGuide(style) {
 
const guides = {
 
Directivo:
"Las personas directivas valoran mensajes claros, breves y orientados a resultados.",
 
Analítico:
"Las personas analíticas prefieren datos, precisión y razonamiento estructurado.",
 
Relacional:
"Las personas relacionales valoran la cercanía, la participación y la empatía.",
 
Facilitador:
"Las personas facilitadoras prefieren entornos colaborativos y respetuosos."
};
 
return guides[style] || "";
}
 
}
 
const profileEngine =
new ProfileEngine();
 
export {
ProfileEngine,
profileEngine
};
 
export default profileEngine;
``
