import GetDefaultFlaps from './_default_flaps.js'

export default class JarDesignA330 {
  meta = {
    name: 'JARDesign A330',
    priority: 2,
    sim: 'xplane',
  }

  features = {
    beaconLights: {
      'sim/custom/xap/extlight/beacon_sw': 'int',
    },
    landingLights: {
      'sim/custom/xap/extlight/land_sw': 'int',
    },
    navigationLights: {
      'sim/custom/xap/extlight/navlogo_sw': 'int',
    },
    strobeLights: {
      'sim/custom/xap/extlight/strobe_sw': 'int',
    },
    taxiLights: {
      'sim/custom/xap/extlight/nose_sw': 'int',
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
    this.features.flaps = GetDefaultFlaps('', 'a330', '')
    return ['jardesign', 'a330'].every((w) => title.includes(w.toLowerCase()))
  }

  beaconLights(value) {
    return value === 1
  }

  landingLights(value) {
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

  /**
   * Get the right text for the flaps
   * @param {int} value
   * @returns {string}
   */
  flaps(value) {
    return this.features.flaps[value] || value
  }
}
