import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductBrand } from 'src/app/interfaces/product-brand';
import { BrandService } from 'src/app/services/brand.service';
import { ReloadService } from 'src/app/services/reload.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  brands: ProductBrand[] = [];

  constructor(
    private dialog: MatDialog,
    private brandService: BrandService,
    private uiService: UiService,
    private reloadService: ReloadService,
  ) { }

  ngOnInit(): void {
    this.reloadService.refreshBrands$
      .subscribe(() => {
        this.getAllBrands();
      });
    this.getAllBrands();
  }
  private getAllBrands() {
    this.brandService.getAllBrands()
      .subscribe(res => {
        this.brands = res.data;
      }, error => {
        console.log(error);
      });
  }
  openConfirmDialog(id:string){

  }

}
