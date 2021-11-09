import {environment} from '../../../environments/environment';

export const DATABASE_KEY = Object.freeze({
  loginToken: 'EMEDILIFE_TOKEN_' + environment.VERSION,
  loggInSession: 'EMEDILIFE_SESSION_' + environment.VERSION,
  loginTokenAdmin: 'EMEDILIFE_ADMIN_TOKEN_' + environment.VERSION,
  loggInSessionAdmin: 'EMEDILIFE_ADMIN_SESSION_' + environment.VERSION,
  encryptAdminLogin: 'EMEDILIFE_USER_0_' + environment.VERSION,
  encryptUserLogin: 'EMEDILIFE_USER_1_' + environment.VERSION,
  loginAdminRole: 'EMEDILIFE_ADMIN_ROLE_' + environment.VERSION,
  cartsProduct: 'EMEDILIFE_USER_CART_' + environment.VERSION,
  productFormData: 'EMEDILIFE_PRODUCT_FORM_' + environment.VERSION,
  userCart: 'EMEDILIFE_USER_CART_' + environment.VERSION,
  recommendedProduct: 'EMEDILIFE_RECOMMENDED_PRODUCT_' + environment.VERSION,
  userCoupon: 'EMEDILIFE_USER_COUPON_' + environment.VERSION,
  userCookieTerm: 'EMEDILIFE_COOKIE_TERM' + environment.VERSION,
});
