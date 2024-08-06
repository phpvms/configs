import GetDefaultFlaps from './_default_flaps.js'

export default class IXEG733 {
  meta = {
    name: 'IXEG 733',
    priority: 2,
    sim: 'xplane',
  }

  features = {
    beaconLights: {
      'ixeg/733/lighting/anti_col_lt_act': 'int',
    },
    landingLights: {
      'ixeg/733/lighting/l_inboard_ll_act': 'int',
      'ixeg/733/lighting/r_inboard_ll_act': 'int',
      'ixeg/733/lighting/l_outboard_ll_act': 'int',
      'ixeg/733/lighting/r_outboard_ll_act': 'int',
    },
    logoLights: {
      'ixeg/733/lighting/logo_lt_act': 'int',
    },
    navigationLights: {
      'ixeg/733/lighting/position_lt_act': 'int',
    },
    strobeLights: {
      'ixeg/733/lighting/strobe_lt_act': 'int',
    },
    taxiLights: {
      'ixeg/733/lighting/taxi_lt_act': 'int',
    },
    wingLights: {
      'ixeg/733/lighting/wing_lt_act': 'int',
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
    this.features.flaps = GetDefaultFlaps('', 'b733', '')
    return ['boeing', '737-300', 'x-aviation'].every((w) =>
      title.includes(w.toLowerCase()),
    )
  }

  beaconLights(value) {
    return value === 1
  }

  landingLights(inbd_l, inbd_r, outb_l, outb_r) {
    return inbd_l === 1 && inbd_r === 1 && outb_l === 2 && outb_r === 3
  }

  navigationLights(value) {
    return value === 1
  }

  strobeLights(value) {
    return value === 1
  }

  taxiLights(value) {
    return value === 1
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
