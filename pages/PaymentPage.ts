import { Page, Locator } from '@playwright/test';

export class PaymentPage {
  page: Page;
  paymentMethod: Locator;
  cardNumber: Locator;
  expirationDate: Locator;
  cvv: Locator;
  cardHolderName: Locator;
  confirmButton: Locator;
  successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.paymentMethod = this.page.getByTestId('payment-method');
    this.cardNumber = this.page.getByTestId('credit_card_number');
    this.expirationDate = this.page.getByTestId('expiration_date');
    this.cvv = this.page.getByTestId('cvv');
    this.cardHolderName = this.page.getByTestId('card_holder_name');
    this.confirmButton = this.page.getByTestId('finish');
    this.successMessage = this.page.getByText('Payment was successful');
  }
   async selectPaymentMethod(method: string) {
    await this.paymentMethod.selectOption(method);
}

   async fillCardDetails(
    cardNumber: string,
    expirationDate: string,
    cvv: string,
    cardHolderName: string
  ) {
    await this.cardNumber.fill(cardNumber);
    await this.expirationDate.fill(expirationDate);
    await this.cvv.fill(cvv);
    await this.cardHolderName.fill(cardHolderName);
  }

  async confirmPayment(): Promise<void> {
    await this.confirmButton.click();
  }
}
