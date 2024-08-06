export default class FenixA320 {
  meta = {
    name: 'Fenix A320',
    priority: 4,
    sim: 'msfs',
    author: 'B.Fatih KOZ <https://github.com/FatihKoz>',
  }

  features = {
    landingLights: {
      S_OH_EXT_LT_LANDING_L: 'int',
      S_OH_EXT_LT_LANDING_R: 'int',
    },
    beaconLights: {
      S_OH_EXT_LT_BEACON: 'int',
    },
    navigationLights: {
      S_OH_EXT_LT_NAV_LOGO: 'int',
    },
    strobeLights: {
      S_OH_EXT_LT_STROBE: 'int',
    },
    taxiLights: {
      S_OH_EXT_LT_NOSE: 'int',
    },
    flaps: {
      0: 'UP',
      1: 'CONF 1',
      2: 'CONF 1+F',
      3: 'CONF 2',
      4: 'CONF 3',
      5: 'FULL',
    },
  }

  match(title, icao, config_path) {
    return (
      ['Fenix', 'A320'].every((w) => title.includes(w.toLowerCase())) ||
      ['FenixA320'].every((w) => title.includes(w.toLowerCase()))
    )
  }

  beaconLights(value) {
    return value === 1
  }

  landingLights(left, right) {
    return left === 2 && right === 2
  }

  navigationLights(value) {
    return value === 1 || value === 2
  }

  strobeLights(value) {
    if (value === 1) {
      return null
    }

    return value === 2
  }

  taxiLights(value) {
    return value === 1 || value === 2
  }

  flaps(value) {
    return this.features.flaps[value] || value
  }
}
