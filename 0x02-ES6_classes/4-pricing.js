import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  displayFullPrice() {
    const currencyInfo = this.currency.displayFullCurrency();
    return `${this.amount} ${currencyInfo}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

