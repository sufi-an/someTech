import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _homeService:HomeService) { }
  
  p: number = 1;
  collection: any ;  
  ngOnInit(): void {
    this._homeService.getAllData()
    .subscribe(res=>{
      console.log(res)
      this.collection=res;
    })
  }

}
