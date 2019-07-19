import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
declare var WinMove: any;
@Component({
  selector: 'app-draggable-panels',
  templateUrl: './draggable-panels.component.html',
  styleUrls: ['./draggable-panels.component.scss']
})
export class DraggablePanelsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jQuery(document).ready(function(){
      
     WinMove();
 });
  }

}
