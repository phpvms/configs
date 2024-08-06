export default class AerosoftA333Airbus {
  meta = {
    name: 'aerosoft a333',
    priority: 2,
    sim: 'fsuipc',
  }

  features = {
    beaconLights: false,
    landingLights: false,
    navigationLights: false,
    strobeLights: false,
    taxiLights: false,
    flaps: {
      0: 'UP',
      1: 'CONF 1',
      2: 'CONF 1+F',
      3: 'CONF 2',
      4: 'CONF 3',
      5: 'FULL',
    },
  }

  /**
   *
   * @param {string} title The title of the aircraft, lowercased
   * @param {string=} icao The ICAO of the aircraft. Might not be available
   * @param {string=} config_path Path to the aircraft config. Might not be there
   * @return {boolean}
   */
  match(title, icao, config_path) {
    // Should match aerosfot + a333/a3
    return ['aerosoft', 'a3'].every((w) => title.includes(w.toLowerCase()))
  }

  beaconLights(value) {
    return null
  }

  landingLights(value) {
    return null
  }

  navigationLights(value) {
    return null
  }

  strobeLights(value) {
    return null
  }

  taxiLights(value) {
    return null
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
