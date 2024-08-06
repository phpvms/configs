import GetDefaultFlaps from './_default_flaps.js'

/**
 * The default configmap
 */
export default class DefaultXPlane {
  meta = {
    /**
     * Name of the rule
     */
    name: 'xplane default',

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
    sim: 'xplane',
  }

  /**
   * Individual mappings go here.
   *
   * FSUIPC is an offset
   * X-Plane is a dataref
   * MSFS is an LVar
   *
   * Set to null to ignore the feature
   */
  features = {
    beaconLights: { 'sim/cockpit2/switches/beacon_on': 'bool' },
    landingLights: { 'sim/cockpit2/switches/landing_lights_on': 'bool' },
    logoLights: { 'sim/cockpit2/switches/logo_lights_on': 'bool' },
    navigationLights: { 'sim/cockpit2/switches/navigation_lights_on': 'bool' },
    strobeLights: { 'sim/cockpit2/switches/strobe_lights_on': 'bool' },
    taxiLights: { 'sim/cockpit2/switches/taxi_light_on': 'bool' },
    wingLights: { 'sim/cockpit2/switches/wing_lights_on': 'bool' },
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
   * Parse the value that's returned by the sim
   * @param value
   * @return {boolean|null}
   */
  beaconLights(value) {
    return value === true
  }

  /**
   * Parse the value that's returned by the sim
   * @param value
   * @return {boolean|null}
   */
  landingLights(value) {
    return value === true
  }

  /**
   * Parse the value that's returned by the sim
   * @param value
   * @return {boolean|null}
   */
  navigationLights(value) {
    return value === true
  }

  /**
   * Parse the value that's returned by the sim
   * @param value
   * @return {boolean|null}
   */
  strobeLights(value) {
    return value === true
  }

  /**
   * Parse the value that's returned by the sim
   * @param value
   * @return {boolean|null}
   */
  taxiLights(value) {
    return value === true
  }

  /**
   * Parse the value that's returned by the sim
   * @param value
   * @return {boolean|null}
   */
  wingLights(value) {
    return value === true
  }

  /**
   * Parse the value that's returned by the sim
   * @param value
   * @return {boolean|null}
   */
  logoLights(value) {
    return value === true
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
