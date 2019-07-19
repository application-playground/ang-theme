import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
declare var swal: any;

@Component({
  selector: 'app-sweetalert',
  templateUrl: './sweetalert.component.html',
  styleUrls: ['./sweetalert.component.scss']
})
export class SweetalertComponent implements OnInit, AfterViewInit {
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery('.demo1').click(function () {
      swal({
        title: "Welcome in Alerts",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      });
    });

    jQuery('.demo2').click(function () {
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        type: "success"
      });
    });

    jQuery('.demo3').click(function () {
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      }, function () {
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
      });
    });

    jQuery('.demo4').click(function () {
      swal({
        title: "Are you sure?",
        text: "Your will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel plx!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
        function (isConfirm) {
          if (isConfirm) {
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
          } else {
            swal("Cancelled", "Your imaginary file is safe :)", "error");
          }
        });
    });

  }

}
