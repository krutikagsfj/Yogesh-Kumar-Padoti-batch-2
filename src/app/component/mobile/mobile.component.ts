import { Component, OnInit } from '@angular/core';
import {MobileserviceService} from '../../services/mobileservice.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
mobileForm :FormGroup;
  mobileData;
  ind;
  constructor(private mobileService : MobileserviceService ) { }

  ngOnInit(){
    this.mobileService.getJSON().subscribe(data => {
      this.mobileData=data;
         //console.log(data);
     });
}


  delete(row)
  {
    let ind=this.mobileData.indexOf(row);
    this.mobileData.splice(ind,1);
    
  }

}
