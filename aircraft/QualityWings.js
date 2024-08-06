import GetDefaultFlaps from './_default_flaps.js'

export default class QualityWings {
  meta = {
    name: 'QualityWings',
    priority: 2,
    sim: 'msfs',
  }

  features = {
    beaconLights: false,
    landingLights: false,
    navigationLights: false,
    strobeLights: false,
    taxiLights: false,
    flaps: {},
  }

  /**
   *
   * @param {string} title The title of the aircraft, lowercased
   * @param {string=} icao The ICAO of the aircraft. Might not be available
   * @param {string=} config_path Path to the aircraft config. Might not be there
   * @return {boolean}
   */
  match(title, icao, config_path) {
    this.features.flaps = GetDefaultFlaps('', 'b787', '')
    return (
      title.includes('qualitywings') ||
      (title.includes('quality') && title.includes('wings'))
    )
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
