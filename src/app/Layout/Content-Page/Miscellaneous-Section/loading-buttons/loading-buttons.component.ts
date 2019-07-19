import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
declare var Ladda: any;
//

@Component({
  selector: 'app-loading-buttons',
  templateUrl: './loading-buttons.component.html',
  styleUrls: ['./loading-buttons.component.scss']
})
export class LoadingButtonsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery(document).ready(function (){

      // Bind normal buttons
      jQuery( '.ladda-button' ).ladda( 'bind', { timeout: 2000 } );

      // Bind progress buttons and simulate loading progress
      Ladda.bind( '.progress-demo .ladda-button',{
          callback: function( instance ){
              var progress = 0;
              var interval = setInterval( function(){
                  progress = Math.min( progress + Math.random() * 0.1, 1 );
                  instance.setProgress( progress );

                  if( progress === 1 ){
                      instance.stop();
                      clearInterval( interval );
                  }
              }, 200 );
          }
      });


      var l = jQuery( '.ladda-button-demo' ).ladda();

      l.click(function(){
          // Start loading
          l.ladda( 'start' );

          // Timeout example
          // Do something in backend and then stop ladda
          setTimeout(function(){
              l.ladda('stop');
          },12000)


      });

  });

  }

}
