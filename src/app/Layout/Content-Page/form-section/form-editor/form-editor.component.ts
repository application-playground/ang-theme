import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss']
})
export class FormEditorComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery(document).ready(function () {
      jQuery('.summernote').summernote();
    });
    
    var edit = function () {
      jQuery('.click2edit').summernote({ focus: true });
    };
    
    var save = function () {
      var aHTML = jQuery('.click2edit').code(); //save HTML If you need(aHTML: array).
      jQuery('.click2edit').destroy();
    };

  }

}
