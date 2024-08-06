import GetDefaultFlaps from './_default_flaps.js'

/**
 * The default configmap
 */
export default class DefaultMsFs {
  meta = {
    /**
     * Name of the rule
     */
    name: 'msfs default',

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
    sim: 'msfs',
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
    beaconLights: { LIGHTING_BEACON_1: 'bool' },
    landingLights: { LIGHTING_LANDING_1: 'bool' },
    navigationLights: { LIGHTING_NAV_1: 'bool' },
    strobeLights: { LIGHTING_STROBE_1: 'bool' },
    taxiLights: { LIGHTING_TAXI_1: 'bool' },
    wingLights: { LIGHTING_RECOGNITION_1: 'bool' },
    logoLights: { LIGHTING_BEACON_1: 'bool' },
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

  beaconLights(value) {
    return value === true
  }

  landingLights(value) {
    return value === true
  }

  navigationLights(value) {
    return value === true
  }

  strobeLights(value) {
    return value === true
  }

  taxiLights(value) {
    return value === true
  }

  wingLights(value) {
    return value === true
  }

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
