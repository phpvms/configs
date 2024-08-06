import GetDefaultFlaps from './_default_flaps.js'

export default class PMDG_747_FSUIPC {
  meta = {
    name: 'PMDG 747',
    priority: 2,
    sim: 'fsuipc',
  }

  features = {
    beaconLights: {
      '0x650A': 'int',
    },
    landingLights: {
      '0x6506': 'int',
    },
    logoLights: false,
    navigationLights: {
      '0x650B': 'int',
    },
    strobeLights: {
      '0x6511': 'int',
    },
    taxiLights: {
      '0x6510': 'int',
    },
    wingLights: false,
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
    this.features.flaps = GetDefaultFlaps('', 'b747', '')
    return ['pmdg', '747'].every((w) => title.includes(w.toLowerCase()))
  }

  beaconLights(value) {
    return value === 0 || value === 2
  }

  landingLights(value) {
    return value === 1
  }

  navigationLights(value) {
    return value === 0 || value === 2
  }

  strobeLights(value) {
    return value === 1
  }

  taxiLights(value) {
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
