import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery("#form").validate({
      rules: {
          password: {
              required: true,
              minlength: 3
          },
          url: {
              required: true,
              url: true
          },
          number: {
              required: true,
              number: true
          },
          min: {
              required: true,
              minlength: 6
          },
          max: {
              required: true,
              maxlength: 4
          }
      }
  });

  }

}
