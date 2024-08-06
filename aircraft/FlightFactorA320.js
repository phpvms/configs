export default class FlightFactorA320 {
  meta = {
    name: 'FlightFactor A320',
    priority: 4,
    sim: 'xplane',
    author: 'B.Fatih KOZ <https://github.com/FatihKoz>',
  }

  features = {
    beaconLights: {
      'model/controls/light_beacon': 'int',
    },
    landingLights: {
      'model/controls/light_land1': 'float',
      'model/controls/light_land2': 'float',
    },
    navigationLights: {
      'model/controls/light_logo': 'float',
    },
    strobeLights: {
      'model/controls/light_strobe': 'float',
    },
    taxiLights: {
      'model/controls/light_nose': 'float',
    },
    wingLights: {
      'model/controls/light_wing': 'int',
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
    return ['flightfactor', 'a320'].every((w) =>
      title.includes(w.toLowerCase()),
    )
  }

  beaconLights(value) {
    return value === 1
  }

  landingLights(left, right) {
    // Dataref returns 0.5 or 1 when enabled, 0.5 is landing lights extended but off
    return Math.floor(left * 10) === 10 && Math.floor(right * 10) === 10
  }

  navigationLights(value) {
    // Dataref returns 0.5 or 1 when enabled
    return value > 0
  }

  strobeLights(value) {
    if (value > 0 && value < 1) {
      // Ignore if switch is set to AUTO, dataref returns 0.5
      return null
    }

    return value === 1
  }

  taxiLights(value) {
    // Dataref returns 0.5 or 1 when enabled
    return value > 0
  }

  wingLights(value) {
    return value === 1
  }

  flaps(value) {
    return this.features.flaps[value] || value
  }
}
