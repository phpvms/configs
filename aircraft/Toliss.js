export default class Toliss {
  meta = {
    name: 'ToLiss Airbus',
    sim: 'xplane',
    priority: 4,
    author: 'B.Fatih KOZ <https://github.com/FatihKoz>',
  }

  features = {
    landingLights: {
      'AirbusFBW/OHPLightSwitches': 'int_array',
    },
    beaconLights: {
      'AirbusFBW/OHPLightSwitches': 'int_array',
    },
    navigationLights: {
      'AirbusFBW/OHPLightSwitches': 'int_array',
    },
    strobeLights: {
      'AirbusFBW/OHPLightSwitches': 'int_array',
    },
    taxiLights: {
      'AirbusFBW/OHPLightSwitches': 'int_array',
    },
    flaps: {
      0: 'UP',
      1: 'CONF 1',
      2: 'CONF 2',
      3: 'CONF 3',
      4: 'FULL',
    },
  }

  match(title, icao, config_path) {
    return ['high', 'fidelity', 'system'].every((w) =>
      title.includes(w.toLowerCase()),
    )
  }

  beaconLights(value) {
    return value[0] === 1
  }

  landingLights(value) {
    return value[4] === 2 && value[5] === 2
  }

  navigationLights(value) {
    return value[2] === 1 || value[2] === 2
  }

  strobeLights(value) {
    if (value[7] === 1) {
      // Ignore if the switch is on AUTO position
      return null
    }

    return value[7] === 2
  }

  taxiLights(value) {
    return value[3] === 1 || value[3] === 2
  }

  flaps(value) {
    return this.features.flaps[value] || value
  }
}
