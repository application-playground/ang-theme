
import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, AfterViewInit {
  
  constructor() {
    
   }

  ngOnInit() {
  }

  ngAfterViewInit() {

//     jQuery(document).ready(function(){

//       dropZone.options.myAwesomeDropzone = {

//           autoProcessQueue: false,
//           uploadMultiple: true,
//           parallelUploads: 100,
//           maxFiles: 100,

//           // Dropzone settings
//           init: function() {
//               var myDropzone = this;

//               this.element.querySelector("button[type=submit]").addEventListener("click", function(e) {
//                   e.preventDefault();
//                   e.stopPropagation();
//                   myDropzone.processQueue();
//               });
//               this.on("sendingmultiple", function() {
//               });
//               this.on("successmultiple", function(files, response) {
//               });
//               this.on("errormultiple", function(files, response) {
//               });
//           }

//       }

//  });


  }

}
