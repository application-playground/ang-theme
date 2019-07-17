import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
declare var toastr: any;


@Component({
  selector: 'app-toastr-notifications',
  templateUrl: './toastr-notifications.component.html',
  styleUrls: ['./toastr-notifications.component.scss']
})
export class ToastrNotificationsComponent implements OnInit, AfterViewInit {
  $toastlast: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    jQuery(function () {
      var i = -1;
      var toastCount = 0;
      
      var getMessage = function () {
        var msg = 'Hi, welcome to Inspinia. This is example of Toastr notification box.';
        return msg;
      };

      jQuery('#showsimple').click(function () {
        // Display a success toast, with a title
        toastr.success('Without any options', 'Simple notification!')
      });
      jQuery('#showtoast').click(function () {
        var shortCutFunction = jQuery("#toastTypeGroup input:radio:checked").val();
        var msg = jQuery('#message').val();
        var title = jQuery('#title').val() || '';
        var $showDuration = jQuery('#showDuration');
        var $hideDuration = jQuery('#hideDuration');
        var $timeOut = jQuery('#timeOut');
        var $extendedTimeOut = jQuery('#extendedTimeOut');
        var $showEasing = jQuery('#showEasing');
        var $hideEasing = jQuery('#hideEasing');
        var $showMethod = jQuery('#showMethod');
        var $hideMethod = jQuery('#hideMethod');
        var toastIndex = toastCount++;
        toastr.options = {
          closeButton: jQuery('#closeButton').prop('checked'),
          debug: jQuery('#debugInfo').prop('checked'),
          progressBar: jQuery('#progressBar').prop('checked'),
          preventDuplicates: jQuery('#preventDuplicates').prop('checked'),
          positionClass: jQuery('#positionGroup input:radio:checked').val() || 'toast-top-right',
          onclick: null
        };
        if (jQuery('#addBehaviorOnToastClick').prop('checked')) {
          toastr.options.onclick = function () {
            alert('You can perform some custom action after a toast goes away');
          };
        }
        if ($showDuration.val().length) {
          toastr.options.showDuration = $showDuration.val();
        }
        if ($hideDuration.val().length) {
          toastr.options.hideDuration = $hideDuration.val();
        }
        if ($timeOut.val().length) {
          toastr.options.timeOut = $timeOut.val();
        }
        if ($extendedTimeOut.val().length) {
          toastr.options.extendedTimeOut = $extendedTimeOut.val();
        }
        if ($showEasing.val().length) {
          toastr.options.showEasing = $showEasing.val();
        }
        if ($hideEasing.val().length) {
          toastr.options.hideEasing = $hideEasing.val();
        }
        if ($showMethod.val().length) {
          toastr.options.showMethod = $showMethod.val();
        }
        if ($hideMethod.val().length) {
          toastr.options.hideMethod = $hideMethod.val();
        }
        if (!msg) {
          msg = getMessage();
        }
        jQuery("#toastrOptions").text("Command: toastr["
          + shortCutFunction
          + "](\""
          + msg
          + (title ? "\", \"" + title : '')
          + "\")\n\ntoastr.options = "
          + JSON.stringify(toastr.options, null, 2)
        );
        var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
        this.$toastlast = $toast;
        if ($toast.find('#okBtn').length) {
          $toast.delegate('#okBtn', 'click', function () {
            alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
            $toast.remove();
          });
        }
        if ($toast.find('#surpriseBtn').length) {
          $toast.delegate('#surpriseBtn', 'click', function () {
            alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
          });
        }
      });
      
      jQuery('#clearlasttoast').click(function () {
        toastr.clear(this.getLastToast());
      });
      jQuery('#cleartoasts').click(function () {
        toastr.clear();
      });

    });
  }

  getLastToast() {
    return this.$toastlast;
  }
}