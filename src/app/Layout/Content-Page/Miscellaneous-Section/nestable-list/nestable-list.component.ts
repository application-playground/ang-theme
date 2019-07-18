import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-nestable-list',
  templateUrl: './nestable-list.component.html',
  styleUrls: ['./nestable-list.component.scss']
})
export class NestableListComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery(document).ready(function(){

      var updateOutput = function (e) {
          var list = e.length ? e : jQuery(e.target),
                  output = list.data('output');
          // if (window.JSON) {
          //     output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
          // } else {
          //     output.val('JSON browser support required for this demo.');
          // }
      };
      // activate Nestable for list 1
      jQuery('#nestable').nestable({
          group: 1
      }).on('change', updateOutput);

      // activate Nestable for list 2
      jQuery('#nestable2').nestable({
          group: 1
      }).on('change', updateOutput);

      // output initial serialised data
      updateOutput(jQuery('#nestable').data('output', jQuery('#nestable-output')));
      updateOutput(jQuery('#nestable2').data('output', jQuery('#nestable2-output')));

      jQuery('#nestable-menu').on('click', function (e) {
          var target = jQuery(e.target),
                  action = target.data('action');
          if (action === 'expand-all') {
              jQuery('.dd').nestable('expandAll');
          }
          if (action === 'collapse-all') {
              jQuery('.dd').nestable('collapseAll');
          }
      });
  });

  }

}
