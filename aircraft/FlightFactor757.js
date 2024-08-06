import GetDefaultFlaps from './_default_flaps.js'

export default class FlightFactor757 {
  meta = {
    name: 'FlightFactor 757',
    priority: 2,
    sim: 'xplane',
  }

  features = {
    beaconLights: {
      'sim/cockpit2/switches/beacon_on': 'int',
    },
    landingLights: {
      'sim/cockpit2/switches/landing_lights_switch': 'float_array',
    },
    logoLights: {
      'sim/cockpit2/switches/generic_lights_switch': 'float_array',
    },
    navigationLights: {
      'sim/cockpit2/switches/navigation_lights_on': 'int',
    },
    strobeLights: {
      'sim/cockpit2/switches/strobe_lights_on': 'int',
    },
    taxiLights: {
      'sim/cockpit2/switches/landing_lights_switch': 'float_array',
    },
    wingLights: {
      'sim/cockpit2/switches/generic_lights_switch': 'float_array',
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
    this.features.flaps = GetDefaultFlaps('', 'B757', '')
    return ['boeing', '757'].every((w) => title.includes(w.toLowerCase()))
  }

  beaconLights(value) {
    return null
  }

  landingLights(value) {
    return value[0] === 1 && value[1] === 1
  }

  logoLights(value) {
    return value[3] === 1
  }

  navigationLights(value) {
    return null
  }

  strobeLights(value) {
    return null
  }

  taxiLights(value) {
    return value[2] === 1
  }

  wingLights(value) {
    return value[0] === 1
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
