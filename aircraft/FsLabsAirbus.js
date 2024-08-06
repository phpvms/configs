export default class FsLabsAirbus {
  meta = {
    name: 'FsLabs Airbus',
    priority: 2,
    sim: 'fsuipc',
  }

  features = {
    beaconLights: false,
    landingLights: false,
    logoLights: false,
    navigationLights: false,
    strobeLights: false,
    taxiLights: false,
    wingLights: false,
    flaps: {
      0: 'UP',
      1: 'CONF 1',
      2: 'CONF CHG',
      3: 'CONF CHG',
      4: 'CONF CHG',
      5: 'CONF CHG',
      6: 'CONF 1+F',
      7: 'CONF 2',
      8: 'CONF 3',
      9: 'FULL',
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
    return ['fslabs'].every((w) => title.includes(w.toLowerCase()))
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
