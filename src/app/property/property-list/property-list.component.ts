import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HousingService } from 'src/app/services/Housing.service';
import { IProperty } from './IProperty.Interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty>=[];
  isRent:number =1;
  constructor(private route: ActivatedRoute, private housingService:HousingService) {

  }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString())
      this.isRent=2;
    this.housingService.getAllProperties(this.isRent).subscribe(res => this.properties = res,
      error => console.log(error));
  }

}
