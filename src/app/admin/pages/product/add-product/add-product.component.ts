import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { UiService } from 'src/app/services/ui.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

   
  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;


  dataForm?: FormGroup;
  private sub: Subscription;

  autoSlug = true;
  isLoading = false;

  // Store Data from param
  id?: string;
  product: Product;

  // Image Holder
  placeholder = '/assets/images/avatar/image-upload.jpg';
  pickedImage?: string;


  // Destroy Session
  needSessionDestroy = true;


  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private uiService: UiService,
    private productService: ProductService,
    private utilsService: UtilsService,
    private storageService: StorageService,
    public router: Router,
    //private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.initFormGroup()
    this.pickedImage = this.placeholder;

    // Image From state
    if (!this.id) {
      if (this.storageService.getStoredInput('BRAND_INPUT')) {
        this.dataForm.patchValue(this.storageService.getStoredInput('BRAND_INPUT'));
      }

      if (history.state.images) {
        this.needSessionDestroy = true;
        this.pickedImage = history.state.images[0].url;
        this.dataForm.patchValue(
          {image: this.pickedImage}
        );
      }

    }

    this.autoGenerateSlug();

    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      if (this.id) {
        this.getProductByProductID();
      }
    });


  }


  /**
   * SET FORM DATA
   */
  private setFormData() {
    this.dataForm.patchValue(this.product);

    if (this.storageService.getStoredInput('BRAND_INPUT')) {
      this.dataForm.patchValue(this.storageService.getStoredInput('BRAND_INPUT'));
    }

    if (history.state.images) {
      this.needSessionDestroy = true;
      this.pickedImage = history.state.images[0].url;
      this.dataForm.patchValue(
        {image: this.pickedImage}
      );
    } else {
      this.pickedImage = this.product.images[0] ? this.product.images[0] : this.placeholder;
    }
  }


  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }
    if (this.product) {
      const finalData = {...this.dataForm.value, ...{_id: this.product._id}};
      this.editBrandData(finalData);
    } else {
      this.addProduct(this.dataForm.value);
    }
  }

  autoGenerateSlug() {
    if (this.autoSlug === true) {
      this.sub = this.dataForm.get('productName').valueChanges
        .pipe(
        ).subscribe(d => {
          const res = d?.trim().replace(/[^A-Z0-9]+/ig, '-').toLowerCase();
          this.dataForm.patchValue({
            productSlug: res
          });
        });
    } else {
      if (this.sub === null || this.sub === undefined) {
        return;
      }
      this.sub.unsubscribe();
    }
  }

  /**
   * ON HOLD INPUT DATA
   */

  onHoldInputData() {
    this.needSessionDestroy = false;
    this.storageService.storeInputData(this.dataForm?.value, 'BRAND_INPUT');
  }


  /**
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */

  private addProduct(data: Product) {
    console.log(data)
   // this.spinner.show();
    this.productService.addSingleProduct(data)
      .subscribe(res => {
        console.log(res)
        this.uiService.success(res.message);
        this.templateForm.resetForm();
        //this.storageService.removeSessionData('BRAND_INPUT');
        this.pickedImage = this.placeholder;
       // this.spinner.hide();
      }, error => {
        console.log(error);
      });
  }

  private getProductByProductID() {
   // this.spinner.show();
    this.productService.getSingleProductById(this.id)
      .subscribe(res => {
        this.product = res.data;
        if (this.product) {
          this.setFormData();
        }
        //this.spinner.hide();
      }, error => {
        console.log(error);
      });
  }

  private editBrandData(data: Product) {
    //this.spinner.show();
    this.productService.editProductById(data._id)
      .subscribe(res => {
        this.uiService.success(res.message);
        //this.storageService.removeSessionData('BRAND_INPUT');
       // this.spinner.hide();
      }, error => {
        console.log(error);
        //this.spinner.hide();
      });
  }
  //
  private initFormGroup() {

    this.dataForm = this.fb.group({
      productName: [null, Validators.required],
      productSlug: [null, Validators.required],
      images: [null],
      price: [null, Validators.required],
      discountType: [null],
      discountAmount: [null],
      stockVisibility: [null],
      productVisibility: [null],
      quantity: [null],
      category: [null],
      // categorySlug: [null],
      subCategory: [null],
      // subCategorySlug: [null],
      brand: [null],
      // brandSlug: [null],
      tags: [null],
      shortDescription: [null],
      warrantyServices: [null],
      returnPolicy: [null],
      description: [null],
      filterData: [null],
      variations: [null]
    });

   /*  this.filterDataArray = this.dataForm.get('filterData') as FormArray;
    this.variationsArray = this.dataForm.get('variations') as FormArray;
 */
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.needSessionDestroy) {
      this.storageService.removeSessionData('BRAND_INPUT');
    }
  }

}
