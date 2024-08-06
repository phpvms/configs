export default class IniBuildsA3N {
  meta = {
    name: 'IniBuilds A300',
    priority: 2,
    sim: 'xplane',
  }

  features = {
    beaconLights: {
      'A300/switches/animations_current': 'float_array',
    },
    landingLights: {
      'A300/switches/animations_current': 'float_array',
    },
    logoLights: false,
    navigationLights: {
      'A300/switches/animations_current': 'float_array',
    },
    strobeLights: {
      'A300/switches/animations_current': 'float_array',
    },
    taxiLights: {
      'A300/switches/animations_current': 'float_array',
    },
    wingLights: {
      'A300/switches/animations_current': 'float_array',
    },
    flaps: {
      0: 'UP',
      1: '15/0',
      2: '15/15',
      3: '15/20',
      4: '30/40',
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
    return (
      ['airbus', 'a300'].every((w) => title.includes(w.toLowerCase())) ||
      ['airbus', 'a310'].every((w) => title.includes(w.toLowerCase()))
    )
  }

  beaconLights(value) {
    return value[4] === 1
  }

  landingLights(inbd_l, inbd_r, outb_l, outb_r) {
    return value[7] === 1 && value[8] === 1
  }

  navigationLights(value) {
    return value[1] === 1 || value[1] === 2
  }

  strobeLights(value) {
    return value[3] === 1
  }

  taxiLights(value) {
    return value[0] === 1 || value[0] === 2
  }

  wingLights(value) {
    return value[2] === 1
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
