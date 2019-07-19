import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-tabs-panels',
  templateUrl: './tabs-panels.component.html',
  styleUrls: ['./tabs-panels.component.scss']
})
export class TabsPanelsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery(document).ready(function () {

      // Add slimscroll to element
      jQuery('.scroll_content').slimscroll({
          height: '200px'
      })

  });

  }

}
