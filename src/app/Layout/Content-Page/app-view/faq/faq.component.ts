import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery('#loading-example-btn').click(function () {
      var btn = jQuery(this);
      this.simpleLoad(btn, true)

      // Ajax example
      //                $.ajax().always(function () {
      //                    simpleLoad($(this), false)
      //                });

      this.simpleLoad(btn, false)
    });

  }

  simpleLoad(btn, state) {
    if (state) {
      btn.children().addClass('fa-spin');
      btn.contents().last().replaceWith(" Loading");
    } else {
      setTimeout(function () {
        btn.children().removeClass('fa-spin');
        btn.contents().last().replaceWith(" Refresh");
      }, 2000);
    }
  }

}
