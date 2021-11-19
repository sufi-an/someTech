import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  private refreshCourse = new Subject<void>();
  private refreshService = new Subject<void>();
  private refreshAdmin = new Subject<void>();
  private refreshContactUs = new Subject<void>();
  private refreshInternApplication = new Subject<void>();
  private refreshCourseApplication = new Subject<void>();
  private refreshCart = new Subject<void>();
  private refreshLocal = new Subject<void>();
  private refreshRoles = new Subject<void>();
  private refreshGallery = new Subject<void>();
  private refreshAddress = new Subject<void>();
  private refreshCarousel = new Subject<void>();
  private refreshAttributes = new Subject<void>();
  private refreshBrands = new Subject<void>();
  private refreshTags = new Subject<void>();
  private refreshCategories = new Subject<void>();
  private refreshSubCategories = new Subject<void>();
  private refreshCoupons = new Subject<void>();
  private refreshStoreInfo = new Subject<void>();
  private refreshImageFolder = new Subject<void>();
  private refreshDealOnPlay = new Subject<void>();
  private refreshDealOfTheDay = new Subject<void>();
  private refreshFeaturedProduct = new Subject<void>();
  private refreshFeaturedCategory = new Subject<void>();
  private refreshCategoryMenu = new Subject<void>();
  private refreshUser = new Subject<void>();
  private refreshReviewControl = new Subject<void>();
  private refreshProduct = new Subject<void>();
  private refreshBanner = new Subject<void>();
  private refreshLocalCart = new Subject<void>();
  private refreshProductParentCategory = new Subject<void>();
  private refreshVendor = new Subject<void>();
  private refreshTopBrands = new Subject<void>();
  private refreshVendors = new Subject<void>();
  private refreshWishlist = new Subject<void>();

  get refreshWishlist$() {
    return this.refreshWishlist;
  }

  needRefreshWishlist$() {
    this.refreshWishlist.next();
  }

  /**
   * VENDOR
   */
 
  get refreshVendors$() {
    return this.refreshVendors;
  }

  needRefreshVendors$() {
    this.refreshVendors.next();
  }

  /**
   * BANNER
   */
  get refreshTopBrands$() {
    return this.refreshTopBrands;
  }

  needRefreshTopBrands$() {
    this.refreshTopBrands.next();
  }

  /**
   * BANNER
   */
  get refreshVendor$() {
    return this.refreshVendor;
  }

  needRefreshVendor$() {
    this.refreshVendor.next();
  }

  /**
   * BANNER
   */
  get refreshLocalCart$() {
    return this.refreshLocalCart;
  }

  needRefreshLocalCart$() {
    this.refreshLocalCart.next();
  }
  /**
   * PRODUCT PARENT CATEGORY
   */
  get refreshProductParentCategory$() {
    return this.refreshProductParentCategory;
  }

  needRefreshProductParentCategory$() {
    this.refreshProductParentCategory.next();
  }

  /**
   * BANNER
   */
  get refreshBanner$() {
    return this.refreshBanner;
  }

  needRefreshBanner$() {
    this.refreshBanner.next();
  }
  /**
   * USER
   */
  get refreshProduct$() {
    return this.refreshProduct;
  }

  needRefreshProduct$() {
    this.refreshProduct.next();
  }

  /**
   * ReviewControl
   */
  get refreshReviewControl$() {
    return this.refreshReviewControl;
  }

  needRefreshReviewControl$() {
    this.refreshReviewControl.next();
  }

  /**
   * USER
   */
  get refreshUser$() {
    return this.refreshUser;
  }

  needRefreshUser$() {
    this.refreshUser.next();
  }


  /**
   * DealONPLay
   */
  get refreshCategoryMenu$() {
    return this.refreshCategoryMenu;
  }

  needRefreshCategoryMenu$() {
    this.refreshCategoryMenu.next();
  }


  /**
   * DealONPLay
   */
  get refreshDealOnPlay$() {
    return this.refreshDealOnPlay;
  }

  needRefreshDealOnPlay$() {
    this.refreshDealOnPlay.next();
  }
  /**
   * FeaturedProduct
   */
  get refreshFeaturedProduct$() {
    return this.refreshFeaturedProduct;
  }

  needRefreshFeaturedProduct$() {
    this.refreshFeaturedProduct.next();
  }
  /**
   * FeaturedCategory
   */
  get refreshFeaturedCategory$() {
    return this.refreshFeaturedCategory;
  }

  needRefreshFeaturedCategory$() {
    this.refreshFeaturedCategory.next();
  }
  /**
   * DealsOfTheDay
   */
  get refreshDealOfTheDay$() {
    return this.refreshDealOfTheDay;
  }

  needRefreshDealOfTheDay$() {
    this.refreshDealOfTheDay.next();
  }


  /**
   * Carousel
   */
  get refreshImageFolder$() {
    return this.refreshImageFolder;
  }

  needRefreshImageFolder$() {
    this.refreshImageFolder.next();
  }


  /**
   * Carousel
   */
  get refreshAttributes$() {
    return this.refreshAttributes;
  }

  needRefreshAttributes$() {
    this.refreshAttributes.next();
  }
  /**
   * refreshBrand
   */
  get refreshBrands$() {
    return this.refreshBrands;
  }

  needRefreshBrands$() {
    this.refreshBrands.next();
  }

  /**
   * refreshTag
   */
  get refreshTags$() {
    return this.refreshTags;
  }

  needRefreshTags$() {
    this.refreshTags.next();
  }
  /**
   * refreshCategory
   */
  get refreshCategories$() {
    return this.refreshCategories;
  }

  needRefreshCategories$() {
    this.refreshCategories.next();
  }

  /**
   * refreshSubCategory
   */
  get refreshSubCategories$() {
    return this.refreshSubCategories;
  }

  needRefreshSubCategories$() {
    this.refreshSubCategories.next();
  }
  /**
   * refreshCoupon
   */
  get refreshCoupons$() {
    return this.refreshCoupons;
  }

  needRefreshCoupons$() {
    this.refreshCoupons.next();
  }
  /**
   * refreshStoreInfo
   */
  get refreshStoreInfos$() {
    return this.refreshStoreInfo;
  }

  needRefreshStoreInfos$() {
    this.refreshStoreInfo.next();
  }

  /**
   * Carousel
   */
  get refreshCarousel$() {
    return this.refreshCarousel;
  }

  needRefreshCarousel$() {
    this.refreshCarousel.next();
  }


  /**
   * refreshAddress
   */

  get refreshAddress$() {
    return this.refreshAddress;
  }

  needRefreshAddress$() {
    this.refreshAddress.next();
  }


  /**
   * refreshGallery
   */

  get refreshGallery$() {
    return this.refreshGallery;
  }

  needRefreshGallery$() {
    this.refreshGallery.next();
  }


  /**
   * LOCAL DB
   */
  get refreshRoles$() {
    return this.refreshRoles;
  }

  needRefreshRoles$() {
    this.refreshRoles.next();
  }

  /**
   * LOCAL DB
   */
  get refreshLocal$() {
    return this.refreshLocal;
  }

  needRefreshLocal$() {
    this.refreshLocal.next();
  }


  /**
   * refreshCourse
   */

  get refreshCourse$() {
    return this.refreshCourse;
  }

  needRefreshCourse$() {
    this.refreshCourse.next();
  }

  /**
   * refreshCourse
   */

  get refreshService$() {
    return this.refreshService;
  }

  needRefreshService$() {
    this.refreshService.next();
  }


  /**
   * refreshCourse
   */

  get refreshAdmin$() {
    return this.refreshAdmin;
  }

  needRefreshAdmin$() {
    this.refreshAdmin.next();
  }

  /**
   * refreshCourse
   */

  get refreshContactUs$() {
    return this.refreshContactUs;
  }

  needRefreshContactUs$() {
    this.refreshContactUs.next();
  }

  /**
   * refreshCourse
   */

  get refreshInternApplication$() {
    return this.refreshInternApplication;
  }

  needRefreshInternApplication$() {
    this.refreshInternApplication.next();
  }

  /**
   * refreshCourse
   */

  get refreshCourseApplication$() {
    return this.refreshCourseApplication;
  }

  needRefreshCourseApplication$() {
    this.refreshCourseApplication.next();
  }

  /**
   * CART
   */
  get refreshCart$() {
    return this.refreshCart;
  }

  needRefreshCart$() {
    this.refreshCart.next();
  }

}
