import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;



@Component({
  selector: 'app-toastr-notifications',
  templateUrl: './toastr-notifications.component.html',
  styleUrls: ['./toastr-notifications.component.scss']
})
export class ToastrNotificationsComponent implements OnInit, AfterViewInit {
  $toastlast: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}