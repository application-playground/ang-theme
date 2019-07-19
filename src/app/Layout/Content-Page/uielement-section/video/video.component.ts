import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
      jQuery('body').hasClass('fullscreen-video') ? jQuery('body').removeClass('fullscreen-video') : jQuery('body').addClass('fullscreen-video')
    });

  }

}
