import GetDefaultFlaps from './_default_flaps.js'

export default class FlyJSim732 {
  meta = {
    name: 'FlyJSim 732',
    priority: 2,
    sim: 'xplane',
  }

  features = {
    beaconLights: {
      'FJS/732/lights/AntiColLightSwitch': 'int',
    },
    landingLights: {
      'FJS/732/lights/InBoundLLightSwitch1': 'int',
      'FJS/732/lights/InBoundLLightSwitch2': 'int',
      'FJS/732/lights/OutBoundLLightSwitch1': 'int',
      'FJS/732/lights/OutBoundLLightSwitch2': 'int',
    },
    logoLights: {
      'FJS/732/lights/LogoLightSwitch': 'int',
    },
    navigationLights: {
      'FJS/732/lights/PositionLightSwitch': 'int',
    },
    strobeLights: {
      'FJS/732/lights/StrobeLightSwitch': 'int',
    },
    taxiLights: {
      'FJS/732/lights/TaxiLightSwitch': 'int',
    },
    wingLights: {
      'FJS/732/lights/WingLightSwitch': 'int',
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
    this.features.flaps = GetDefaultFlaps('', 'B732', '')
    return ['fjs', '722'].every((w) => title.includes(w.toLowerCase()))
  }

  beaconLights(value) {
    return value === true
  }

  landingLights(inbd_l, inbd_r, outb_l, outb_r) {
    return inbd_l === 1 && inbd_r === 1 && outb_l === 2 && outb_r === 2
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
