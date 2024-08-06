import GetDefaultFlaps from './_default_flaps.js'

export default class RotateMD80 {
  meta = {
    name: 'Rotate MD-80',
    priority: 2,
    sim: 'xplane',
  }

  features = {
    beaconLights: {
      'Rotate/md80/lights/anticollision_light_switch': 'int',
    },
    landingLights: {
      'Rotate/md80/lights/wing_ldg_light_switch_r': 'int',
      'Rotate/md80/lights/wing_ldg_light_switch_l': 'int',
    },
    logolights: {
      'Rotate/md80/lights/logo_light_switch': 'int',
    },
    navigationLights: {
      'Rotate/md80/lights/pos_strobe_light_switch': 'int',
    },
    strobeLights: {
      'Rotate/md80/lights/pos_strobe_light_switch': 'int',
    },
    taxiLights: {
      'Rotate/md80/lights/nose_light_switch': 'int',
    },
    wingLights: {
      'Rotate/md80/lights/wing_light_switch': 'int',
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
    this.features.flaps = GetDefaultFlaps('', 'md80', '')
    return ['rotate', 'md-80'].every((w) => title.includes(w.toLowerCase()))
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
    return value === 1 || value === 2
  }

  strobeLights(value) {
    return value === 2
  }

  taxiLights(value) {
    return value === 1 || value === 2
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
