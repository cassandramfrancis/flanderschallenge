import { setLoginReducer } from './setLogin';

/** Really really simple test of a reducer */
describe('setLogin', () => {
  test('works with happy path', () => {
    const result = setLoginReducer({loggedIn: false}, {type: 'set_loggedIn', data: true});
    expect(result).toMatchObject({loggedIn: true});
  });

  test(`doesn't return on error`, () => {
    const result = setLoginReducer({loggedIn: false}, {type: 'set_lo' as any, data: true});
    expect(result).toBeUndefined();
  });
});