import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
declare var Clipboard: any;
@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jQuery(document).ready(function (){

      new Clipboard('.btn');

  });
  }

}
