import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-i18support',
  templateUrl: './i18support.component.html',
  styleUrls: ['./i18support.component.scss']
})
export class I18supportComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery.i18n.init({
      resGetPath: 'locales/__lng__.json',
      load: 'unspecific',
      fallbackLng: false,
      lng: 'en'
    }, function (t) {
      jQuery('.i18container').i18n();
      jQuery('#side-menu').i18n();
      jQuery('.navbar-top-links').i18n();
    });

    jQuery('.set_en').on('click', function () {
      jQuery.i18n.setLng('en', function () {
        jQuery('.i18container').i18n();
        jQuery('#side-menu').i18n();
        jQuery('.navbar-top-links').i18n();

        jQuery('.set_en').addClass('active');
        jQuery('.set_es').removeClass('active');
      });
    });

    jQuery('.set_es').on('click', function () {
      jQuery.i18n.setLng('es', function () {
        jQuery('.i18container').i18n();
        jQuery('#side-menu').i18n();
        jQuery('.navbar-top-links').i18n();

        jQuery('.set_es').addClass('active');
        jQuery('.set_en').removeClass('active');
      });
    })


  }

}
