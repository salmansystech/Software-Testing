class Formatter {
  formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
  }
}

module.exports = Formatter;
