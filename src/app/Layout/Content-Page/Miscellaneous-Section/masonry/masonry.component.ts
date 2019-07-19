import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.scss']
})
export class MasonryComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery(window).load(function() {

      jQuery('.grid').masonry({
          // options
          itemSelector: '.grid-item',
          columnWidth: 300,
          gutter: 25
      });

  });

  }

}
