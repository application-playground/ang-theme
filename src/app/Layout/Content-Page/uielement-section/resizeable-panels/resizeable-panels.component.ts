import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-resizeable-panels',
  templateUrl: './resizeable-panels.component.html',
  styleUrls: ['./resizeable-panels.component.scss']
})
export class ResizeablePanelsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery(document).ready(function () {

      jQuery(".ibox").resizable({
        helper: "ui-resizable-helper",
        grid: 20
      });

    });

  }

}
