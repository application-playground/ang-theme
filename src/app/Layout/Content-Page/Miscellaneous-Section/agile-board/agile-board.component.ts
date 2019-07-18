import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-agile-board',
  templateUrl: './agile-board.component.html',
  styleUrls: ['./agile-board.component.scss']
})
export class AgileBoardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

     jQuery("#todo, #inprogress, #completed").sortable({
          connectWith: ".connectList",
          update: function( event, ui ) {

              var todo = jQuery( "#todo" ).sortable( "toArray" );
              var inprogress = jQuery( "#inprogress" ).sortable( "toArray" );
              var completed = jQuery( "#completed" ).sortable( "toArray" );
              //jQuery('.output').html("ToDo: " + window.JSON.stringify(todo) + "<br/>" + "In Progress: " + window.JSON.stringify(inprogress) + "<br/>" + "Completed: " + window.JSON.stringify(completed));
          }
      }).disableSelection();

  }

}
