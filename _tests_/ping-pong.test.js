import { pingPong } from './../src/ping-Pong.js';


describe('Ping Pong', () => {
  let reuseablePing;
  beforeEach(() => {
    reuseablePing = pingPong(5);
  });

  test('should correctly ping the pings and pong the pongs', () => {
    expect(reuseablePing[0]).toEqual(1);
    expect(reuseablePing[2]).toEqual("ping");
    expect(reuseablePing[4]).toEqual("pong");
  })
})
