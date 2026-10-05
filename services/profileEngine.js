// services/profileEngine.js

import {
  evaluateProfile
}
from "./scoringEngine.js";

/**
 * Motor principal de perfiles
 */

export class ProfileE*gine {

  constructor() {

    thi*.version = "1.0.0";
  }

  /**
   * Genera un perfil completo
   */
 *generateProfile(
    userData,
   *answers
  ) {

    return*evaluateProfile(
      userData,
 *    answers
    );
  }

  /**
   **Guarda perfil
   */
  saveProfile(*    profile
  ) {

    const*profiles*=
      this.getStoredProfiles();
*    profiles.push(
      profile
 *  );

    localStorage.setItem(
  *   "*rofiles",
      JSON.stringify(
  *     profiles
      )
    );

    *eturn profile;
  }

  /**
   * Obt*ene todos los perfiles
   */
  get*toredProfiles() {

    const data *
      localStorage.getItem(
     *  "profiles"
      );

    if (!da*a) {
      return [];
    }

    r*turn JSON.parse(
      data
    );*  }

  /**
   * Obtiene un perfil
*  */
  getProfile(
    index
  ) {*
    const profiles =
      this.g*tStoredProfiles();

    return pro*iles[index];
  }

  /**
   * Elimi*a perfil
   */
* deleteProfile(
    index
  ) {

 *  const profiles =
      this.getS*oredProfiles();

    profiles.spli*e(
      index,
      1
    );

  * localStorage.setItem(
      "prof*les",
      JSON.stringify(
      * profiles
      )
    );
  }

  /**
   * Borra todos
   */
  clear*rofiles() {

*   localStorage.removeItem(
      *profiles"
    );
  }

  /**
   * E*portar perfil
   */
  exportProfil*(
    profile
  ) {

    return JS*N.stringify(
      profile,
      *ull,
      2
    );
  }

  /**
   * Importar perfil
   */
  importPro*ile(
    json
  ) {

    return JS*N.parse(
      json
    );
  }

  ***
   * Crear ID sencillo
   */
  *reateId() {

    return (

      "*R-" +

*     Date.now() +

      "-" +

  *   Math.floor(
        Math.random*) * 1000
      )

    );
  }

}

/**
 * Instancia global
 */

export *onst*profileEngine =
* new ProfileEngine();

export defa*lt profileEngine;
