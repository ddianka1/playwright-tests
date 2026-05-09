 import { test, expect } from '../fixtures/loggedInApp';

test('Verify logged in user can checkout product', async ({ loggedInApp }) => {
  await loggedInApp.homePage.open();

  const productName = await loggedInApp.homePage.getFirstProductName();
  const productPrice = await loggedInApp.homePage.getFirstProductPrice();

  await loggedInApp.homePage.openFirstProduct();

  await loggedInApp.productPage.addToCart();

  await expect(loggedInApp.productPage.alertMessage)
    .toHaveText('Product added to shopping cart.');

  await loggedInApp.homePage.openCart();

  await expect(loggedInApp.cartPage.productTitles)
    .toHaveText(productName!.trim());

  await loggedInApp.cartPage.proceedToCheckout();

  await expect(loggedInApp.checkoutPage.proceedToCheckoutButton)
  .toBeVisible();

  await loggedInApp.checkoutPage.proceedToBillingAddress();


  await loggedInApp.billingAddressPage.fillRequiredFields();
  await loggedInApp.billingAddressPage.proceedToPayment();

  await loggedInApp.paymentPage.selectPaymentMethod('Credit Card');

  // payment
  await loggedInApp.paymentPage.fillCardDetails(
  '1111-1111-1111-1111',
  '05/2030',
  '111',
  'Test User'
);

  await loggedInApp.paymentPage.confirmPayment();

// success message
  await expect(loggedInApp.paymentPage.successMessage)
  .toBeVisible();

});


