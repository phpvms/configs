import GetDefaultFlaps from './_default_flaps.js'

export default class PMDG_737_FSUIPC {
  meta = {
    name: 'PMDG 737',
    priority: 2,
    sim: 'fsuipc',
  }

  features = {
    beaconLights: {
      '0x6501': 'int',
    },
    landingLights: {
      '0x64F6': 'int',
    },
    logoLights: false,
    navigationLights: {
      '0x6500': 'int',
    },
    strobeLights: {
      '0x6500': 'int',
    },
    taxiLights: {
      '0x64FA': 'int',
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
    this.features.flaps = GetDefaultFlaps('', 'b737', '')
    return ['pmdg', '737'].every((w) => title.includes(w.toLowerCase()))
  }

  beaconLights(value) {
    return value === 1
  }

  landingLights(value) {
    return value === 1
  }

  navigationLights(value) {
    return value === 0 || value === 2
  }

  strobeLights(value) {
    return value === 2
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
