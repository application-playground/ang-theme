import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
  
export class BasicFormComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
    jQuery('.i-checks').iCheck({      
      checkboxClass: 'icheckbox_square-green',
      radioClass: 'iradio_square-green',
    });
  }
}