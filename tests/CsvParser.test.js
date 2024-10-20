const CsvParser = require('../src/CsvParser');

describe('CsvParser', () => {
  it('should convert valid CSV to JSON', () => {
    const csv = 'car,price\nbmw,300000\nlada,200000';
    const parser = new CsvParser(csv);

    expect(parser.toJson()).toBe('[{"car":"bmw","price":"300000"},{"car":"lada","price":"200000"}]');
  });
});
