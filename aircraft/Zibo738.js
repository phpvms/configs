import GetDefaultFlaps from './_default_flaps.js'

export default class Zibo738 {
  meta = {
    name: 'Zibo 738',
    priority: 2,
    sim: 'xplane',
  }

  features = {
    logoLights: {
      'laminar/B738/toggle_switch/logo_light': 'int',
    },
    taxiLights: {
      'laminar/B738/toggle_switch/taxi_light_brightness_pos': 'int',
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
    this.features.flaps = GetDefaultFlaps('', 'b738', '')

    const match = ['boeing', '737-800x'].every((w) =>
      title.includes(w.toLowerCase()),
    )
    console.log('match', match)

    return match
  }

  logoLights(value) {
    return value === 1
  }

  taxiLights(value) {
    return value === 2
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
