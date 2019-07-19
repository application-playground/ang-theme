import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var CodeMirror: any;
@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var editor_one = CodeMirror.fromTextArea(document.getElementById("code1"), {
      lineNumbers: true,
      matchBrackets: true,
      styleActiveLine: true,
      theme:"ambiance"
  });

  var editor_two = CodeMirror.fromTextArea(document.getElementById("code2"), {
      lineNumbers: true,
      matchBrackets: true,
      styleActiveLine: true
  });

  }

}
