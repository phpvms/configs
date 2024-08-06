import GetDefaultFlaps from './_default_flaps.js'

export default class PMDG_777_MSFS {
  meta = {
    name: 'PMDG 777',
    priority: 5,
    sim: 'msfs',
  }

  features = {
    beaconLights: {
      switch_114_a: 'int',
    },
    landingLights: {
      switch_22_a: 'int',
      switch_23_a: 'int',
      switch_24_a: 'int',
    },
    logoLights: {
      switch_116_a: 'int',
    },
    navigationLights: {
      switch_115_a: 'int',
    },
    strobeLights: {
      switch_122_a: 'int',
    },
    taxiLights: {
      switch_121_a: 'int',
    },
    wingLights: {
      switch_117_a: 'int',
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
    this.features.flaps = GetDefaultFlaps('', 'b777', '')
    return ['pmdg', '777'].every((w) => title.includes(w.toLowerCase()))
  }

  beaconLights(value) {
    return value === 100
  }

  landingLights(s1, s2, s3) {
    return s1 === 100 && s2 === 100 && s3 === 100
  }

  logoLights(value) {
    return value === 100
  }

  navigationLights(value) {
    return value === 100
  }

  strobeLights(value) {
    return value === 100
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
