const { expect } = require('chai');
const wrap = require('./wrap');

describe('Wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('Returns the same string when the max num is 0', () => {
    expect(wrap('This is the second spec.', 0)).to.equal('This is the second spec.');
  });

  it('Returns the same string when the length of the string is the same or greater than the second parameter', () => {
    expect(wrap('This is the third spec.', 100)).to.equal('This is the third spec.');
  });

  it('Returns empty string if empty string was provided', () => {
    expect(wrap('Lorem ipsum dolor sit eu amet, elit na magna semamet nulla vel purus ac ligula.', 20)).to.equal(`Lorem ipsum dolor si\nt eu amet, elit na m\nagna semamet nulla v\nel purus ac ligula.`);
  });
});
