import { Component, OnInit } from '@angular/core';
import { ShowService } from '../service/show.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor() { 
    
    // console.log(this.searchArr);
  }

  ngOnInit() {
  }


}
