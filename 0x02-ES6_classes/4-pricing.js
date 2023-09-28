import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    const currencyInfo = this._currency.displayFullCurrency();
    return `${this._amount} ${currencyInfo}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

