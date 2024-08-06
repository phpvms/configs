import GetDefaultFlaps from './_default_flaps.js'

/**
 * The default configmap
 */
export default class DefaultFsuipc {
  /**
   * Data about this config map
   *
   */
  meta = {
    /**
     * Name of the rule
     */
    name: 'fsuipc default',

    /**
     * Enabled or not
     */
    enabled: true,

    /**
     * The priority of this mapping, with 1 being the lowest
     * and 10 being the highest
     */
    priority: 1,

    /**
     * Sim name - xplane, msfs, or fsuipc
     */
    sim: 'fsuipc',
  }

  /**
   * Individual mappings go here.
   *
   * FSUIPC is an offset
   * X-Plane is a dataref
   * MSFS is an LVar
   *
   * Set to "false" for the feature being disabled/not detected
   * Don't add an entry, or set it to null, to use the default
   */
  features = {
    beaconLights: { '0x0D0C': 'int' },
    landingLights: { '0x0D0C': 'int' },
    logoLights: { '0x0D0C': 'int' },
    navigationLights: { '0x0D0C': 'int' },
    strobeLights: { '0x0D0C': 'int' },
    taxiLights: { '0x0D0C': 'int' },
    wingLights: { '0x0D0C': 'int' },
    flaps: {},
  }

  /**
   * See if the title, icao or config_path match with what the simulator
   * is saying. All of the values are passed in already lower-cased.
   * Return true or false
   *
   * The ICAO and config_path may not be available in some sims.
   *
   * @param {string} title The title of the aircraft
   * @param {string=} icao The ICAO of the aircraft. Might not be available
   * @param {string=} config_path Path to the aircraft config. Might not be there
   * @return {boolean}
   */
  match(title, icao, config_path) {
    this.features.flaps = GetDefaultFlaps(title, icao, config_path)
    return true
  }

  /**
   * Parse the value that's returned by the sim. Return null if disabled
   * @param value
   * @return {boolean|null}
   */
  beaconLights(value) {
    return (2 & value) === 2
  }

  /**
   * Parse the value that's returned by the sim. Return null if disabled
   * @param value
   * @return {boolean|null}
   */
  landingLights(value) {
    return (4 & value) === 4
  }

  /**
   * Parse the value that's returned by the sim. Return null if disabled
   * @param value
   * @return {boolean|null}
   */
  logoLights(value) {
    return null
  }

  /**
   * Parse the value that's returned by the sim. Return null if disabled
   * @param value
   * @return {boolean|null}
   */
  navigationLights(value) {
    return (1 & value) === 1
  }

  /**
   * Parse the value that's returned by the sim. Return null if disabled
   * @param value
   * @return {boolean|null}
   */
  strobeLights(value) {
    return (16 & value) === 16
  }

  /**
   * Parse the value that's returned by the sim. Return null if disabled
   * @param value
   * @return {boolean|null}
   */
  taxiLights(value) {
    return (8 & value) === 8
  }

  /**
   * Parse the value that's returned by the sim. Return null if disabled
   * @param value
   * @return {boolean|null}
   */
  wingLights(value) {
    return null
  }

  /**
   * Get the right text for the flaps. For the default, the flaps
   * meta is set when the match method is called
   * @param {int} value
   * @returns {string}
   */
  flaps(value) {
    return this.features.flaps[value] || value
  }
}
