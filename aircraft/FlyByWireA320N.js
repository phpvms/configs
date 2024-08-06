export default class FlyByWireA320N {
  meta = {
    name: 'FlyByWire A320N',
    priority: 2,
    sim: 'msfs',
  }

  features = {
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
   * Determine if this config map should be used for the given aircraft
   *
   * @param {string} title The title of the aircraft, lowercased
   * @param {string=} icao The ICAO of the aircraft. Might not be available
   * @param {string=} config_path Path to the aircraft config. Might not be there
   * @return {boolean}
   */
  match(title, icao, config_path) {
    return ['a320', 'neo', 'flybywire'].every((w) =>
      title.includes(w.toLowerCase()),
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
