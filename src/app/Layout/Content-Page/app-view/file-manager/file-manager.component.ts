import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit, AfterViewInit {
  animationHover: () => {};
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery('.file-box').each(function() {
      //jQuery(this.animationHover(this, 'pulse'));
  });

  }

}
