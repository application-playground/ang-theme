import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-timeline-second',
  templateUrl: './timeline-second.component.html',
  styleUrls: ['./timeline-second.component.scss']
})
export class TimelineSecondComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    // Local script for demo purpose only
    jQuery('#lightVersion').click(function (event) {
      event.preventDefault()
      jQuery('#ibox-content').removeClass('ibox-content');
      jQuery('#vertical-timeline').removeClass('dark-timeline');
      jQuery('#vertical-timeline').addClass('light-timeline');
    });

    jQuery('#darkVersion').click(function (event) {
      event.preventDefault()
      jQuery('#ibox-content').addClass('ibox-content');
      jQuery('#vertical-timeline').removeClass('light-timeline');
      jQuery('#vertical-timeline').addClass('dark-timeline');
    });

    jQuery('#leftVersion').click(function (event) {
      event.preventDefault()
      jQuery('#vertical-timeline').toggleClass('center-orientation');
    });

  }

}
