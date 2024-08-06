export default class Felis742 {
  meta = {
    name: 'Felis 742',
    priority: 5,
    sim: 'xplane',
  }

  features = {
    beaconLights: false,
    landingLights: {
      'B742/ext_light/landing_inbd_L_sw': 'int',
      'B742/ext_light/landing_inbd_R_sw': 'int',
      'B742/ext_light/landing_outbd_L_sw': 'int',
      'B742/ext_light/landing_outbd_R_sw': 'int',
    },
    logoLights: {
      'B742/ext_light/logo_sw': 'int',
    },
    navigationLights: false,
    strobeLights: false,
    taxiLights: {
      'B742/ext_light/runway_turnoff_L_sw': 'int',
      'B742/ext_light/runway_turnoff_R_sw': 'int',
    },
    wingLights: {
      'B742/ext_light/wing_sw': 'int',
    },
    flaps: {
      0: 'UP',
      1: 'CONF 1',
      2: 'CONF 1+F',
      3: 'CONF 2',
      4: 'CONF 3',
      5: 'FULL',
    },
  }

  /**
   * Determine if this config map should be used for the given aircraft
   *
   * @param {string} title The title of the aircraft, lowercased
   * @param {string=} icao The ICAO of the aircraft. Might not be available
   * @param {string=} config_path Path to the aircraft config. Might not be there
   * @return {boolean}
   */
  match(title, icao, config_path) {
    return ['boeing', '747-200'].every((w) => title.includes(w.toLowerCase()))
  }

  beaconLights(value) {
    return null
  }

  landingLights(inbd_l, inbd_r, outb_l, outb_r) {
    return inbd_l === 1 && inbd_r === 1 && outb_l === 1 && outb_r === 1
  }

  logoLights(value) {
    return value === 1
  }

  navigationLights(value) {
    return null
  }

  strobeLights(value) {
    return null
  }

  taxiLights(turnoff_l, turnoff_r) {
    return turnoff_l === 1 && turnoff_r === 1
  }

  wingLights(value) {
    return value === 1
  }

  /**
   * Get the right text for the flaps
   * @param {int} value
   * @returns {string}
   */
  flaps(value) {
    return this.features.flaps[value] || value
  }
}
