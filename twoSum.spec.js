const {expect} = require('chai');
const twoSum = require('./twoSum');

describe('twoSum function', () => {
  it('Returns an empty array when no two indices add up', () => {
    let test = twoSum([1, 2, 3], 6);
    expect(test.length).to.equal(0);
  });

  it('Returns an empty array when input array\'s length is 0', () => {
    let test = twoSum([], 6);
    expect(test.length).to.equal(0);
  });

  it('Returns an array of indices that add up to the target number', () => {
    let test = twoSum([1, 2, 3], 4);
    expect(test).to.deep.equal([0, 2]);
  });
})
