class CsvParser {
  constructor(csvString) {
    this.csvString = csvString;
    this.isValidCsv = false;
  }

  validate() {
    const rows = this.csvString.trim().split('\n');
    const numColumns = rows[0].split(',').length;

    for (const row of rows) {
      const columns = row.split(',');

      if (columns.length !== numColumns) {
        throw new Error('Invalid CSV format: inconsistent number of columns');
      }
    }

    this.isValidCsv = true;
  }

  toObject() {
    if (!this.isValidCsv) this.validate();

    const [headers, ...rows] = this.csvString.trim().split('\n').map(row => row.split(','));

    return rows.map(row => {
      return headers.reduce((acc, header, index) => {
        acc[header] = row[index];
        return acc;
      }, {});
    });
  }

  toJson() {
    return JSON.stringify(this.toObject());
  }
}

module.exports = CsvParser;
