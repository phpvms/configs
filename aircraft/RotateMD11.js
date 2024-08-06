import GetDefaultFlaps from './_default_flaps.js'

export default class RotateMD11 {
  meta = {
    name: 'Rotate MD-11',
    priority: 2,
    sim: 'xplane',
  }

  features = {
    beaconLights: {
      'Rotate/aircraft/controls/beacon_lts': 'int',
    },
    landingLights: {
      'Rotate/aircraft/controls/ldg_l_lts': 'int',
      'Rotate/aircraft/controls/ldg_r_lts': 'int',
    },
    logolights: {
      'Rotate/aircraft/controls/logo_lts': 'int',
    },
    navigationLights: {
      'Rotate/aircraft/controls/nav_lts': 'int',
    },
    strobeLights: {
      'Rotate/aircraft/controls/strobe_lts': 'int',
    },
    taxiLights: {
      'Rotate/aircraft/controls/nose_lts': 'int',
    },
    wingLights: {
      'Rotate/aircraft/controls/wing_l_lts': 'int',
      'Rotate/aircraft/controls/wing_r_lts': 'int',
    },
    flaps: {},
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
    this.features.flaps = GetDefaultFlaps('', 'md11', '')
    return ['rotate', 'md-11'].every((w) => title.includes(w.toLowerCase()))
  }

  beaconLights(value) {
    return value === 1
  }

  landingLights(v1, v2) {
    return v1 === 2 && v2 === 2
  }

  logoLights(value) {
    return value === 1
  }

  navigationLights(value) {
    return value === 1
  }

  strobeLights(value) {
    return value === 1
  }

  taxiLights(value) {
    return value === 1 || value === 2
  }

  wingLights(v1, v2) {
    return v1 === 2 && v2 === 2
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
