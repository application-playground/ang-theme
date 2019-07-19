import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
declare var toastr: any;


@Component({
  selector: 'app-idle-timer',
  templateUrl: './idle-timer.component.html',
  styleUrls: ['./idle-timer.component.scss']
})
export class IdleTimerComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery(document).ready(function () {

      // Set idle time
      jQuery( document ).idleTimer( 5000 );

  });

  jQuery( document ).on( "idle.idleTimer", function(event, elem, obj){
      toastr.options = {
          "positionClass": "toast-top-right",
          "timeOut": 8000
      }

      toastr.warning('You can call any function after idle timeout.','Idle time');
      jQuery('.custom-alert').fadeIn();
      jQuery('.custom-alert-active').fadeOut();

  });

  jQuery( document ).on( "active.idleTimer", function(event, elem, obj, triggerevent){
      // function you want to fire when the user becomes active again
      toastr.clear();
      jQuery('.custom-alert').fadeOut();
      toastr.success('Great that you decided to move a mouse.','You are back. ');



  });

  }

}
