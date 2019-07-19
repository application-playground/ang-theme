import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
declare var Tinycon: any;
@Component({
  selector: 'app-tinycon',
  templateUrl: './tinycon.component.html',
  styleUrls: ['./tinycon.component.scss']
})
export class TinyconComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery('#iconExample1').click(function () {

      Tinycon.setBubble(1);
      Tinycon.setOptions({
        background: '#f03d25'
      });

    });

    jQuery('#iconExample2').click(function () {

      Tinycon.setBubble(1000);
      Tinycon.setOptions({
        background: '#f03d25'
      });

    });

    jQuery('#iconExample3').click(function () {

      Tinycon.setBubble('In');

      Tinycon.setOptions({
        background: '#f03d25'
      });
    });

    jQuery('#iconExample4').click(function () {

      Tinycon.setOptions({
        background: '#e0913b'
      });
      Tinycon.setBubble(8);

    });

  }

}
