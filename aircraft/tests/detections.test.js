/**
 * These tests use tap; install it locally using npm install, or
 * globally with `npm install -g tap`
 */
import t from 'tap'
import { createMocks } from '../../mocks.js'

import DefaultFsuipc from '../_default_fsuipc.js'
import GetDefaultFlaps from '../_default_flaps.js'
import AerosoftA333Airbus from '../AerosoftA333.js'

t.before(createMocks)

/**
 * Check that the expressions for the different default flaps
 * based on ICAO work properly
 */
t.test('Default Flaps', (t) => {
  let flaps = ''
  flaps = GetDefaultFlaps('Boeing 747', 'b748')
  t.equal(flaps[6], '30')

  flaps = GetDefaultFlaps('Airbus A3280', 'A389')
  t.equal(flaps[3], 'CONF 3')

  flaps = GetDefaultFlaps('Boeing 737 Max8', 'B38M')
  t.equal(flaps[8], '40')

  t.end()
})

/**
 *
 */
t.test('IntMask tests', (t) => {
  const c = new DefaultFsuipc()
  t.ok(c.match('anything'))
  t.ok(c.landingLights(70))
  t.end()
})

t.test('Aerosoft A333', (t) => {
  const c = new AerosoftA333Airbus()
  t.ok(c.match('aerosoft a333'))
  t.notOk(c.match('default a333'))
  t.notOk(c.match('a333'))
  t.end()
})
