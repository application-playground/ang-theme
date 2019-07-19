import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-truncate',
  templateUrl: './truncate.component.html',
  styleUrls: ['./truncate.component.scss']
})
export class TruncateComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery(".truncate").dotdotdot({
      watch: 'window'
    });

    jQuery(".truncate1").dotdotdot({
      watch: 'window',
      ellipsis: ' ///...'
    });

    jQuery(".truncate2").dotdotdot({
      watch: 'window',
      wrap: 'letter'
    });


  }

}
