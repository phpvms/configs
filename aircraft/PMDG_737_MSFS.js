import GetDefaultFlaps from './_default_flaps.js'

export default class PMDG_737_MSFS {
  meta = {
    name: 'PMDG 737',
    priority: 5,
    sim: 'msfs',
  }

  features = {
    beaconLights: {
      switch_124_73X: 'int',
    },
    landingLights: {
      switch_113_73X: 'int',
      switch_114_73X: 'int',
    },
    logoLights: {
      switch_122_73X: 'int',
    },
    navigationLights: {
      switch_123_73X: 'int',
    },
    strobeLights: {
      switch_123_73X: 'int',
    },
    taxiLights: {
      switch_117_73X: 'int',
    },
    wingLights: {
      switch_125_73X: 'int',
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
    this.features.flaps = GetDefaultFlaps('', 'b737', '')
    return ['pmdg', '737'].every((w) => title.includes(w.toLowerCase()))
  }

  beaconLights(value) {
    return value === 100
  }

  landingLights(v1, v2) {
    return v1 === 100 && v2 === 100
  }

  logoLights(value) {
    return value === 100
  }

  navigationLights(value) {
    return value === 0 || value === 100
  }

  strobeLights(value) {
    return value === 0
  }

  taxiLights(value) {
    return value === 100
  }

  wingLights(value) {
    return value === 100
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
