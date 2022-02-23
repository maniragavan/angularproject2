import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../property/property-list/IProperty.Interface';
import { Observable } from 'rxjs/internal/Observable';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }

  getAllProperties(isRent:number) : Observable<IProperty[]> {
    return this.http.get("data/properties.json").pipe(
     map(data => {
       const propertiesArray: Array<IProperty> = [];
       for(const id in data)
       {
        if(data.hasOwnProperty(id) && (data as any)[id].isRent===isRent)
          propertiesArray.push((data as any)[id]);
       }
       return propertiesArray;
     })
    );
  }

}
