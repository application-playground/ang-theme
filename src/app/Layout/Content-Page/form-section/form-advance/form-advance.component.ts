import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-form-advance',
  templateUrl: './form-advance.component.html',
  styleUrls: ['./form-advance.component.scss']
})
export class FormAdvanceComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    let $image = jQuery(".image-crop > img");
    jQuery($image).cropper({
      aspectRatio: 1.618,
      preview: ".img-preview",
      done: function (data) {
        // Output the result data for cropping image.
      }
    });

    // let $inputImage = jQuery("#inputImage");
    // if (window.FileReader) {
    //   $inputImage.change(function () {
    //     var fileReader = new FileReader(),
    //       files = this.files,
    //       file;

    //     if (!files.length) {
    //       return;
    //     }

    //     file = files[0];

    //     if (/^image\/\w+$/.test(file.type)) {
    //       fileReader.readAsDataURL(file);
    //       fileReader.onload = function () {
    //         $inputImage.val("");
    //         $image.cropper("reset", true).cropper("replace", this.result);
    //       };
    //     } else {
    //       showMessage("Please choose an image file.");
    //     }
    //   });
    // } else {
    //   $inputImage.addClass("hide");
    // }

    jQuery("#download").click(function () {
      window.open($image.cropper("getDataURL"));
    });

    jQuery("#zoomIn").click(function () {
      $image.cropper("zoom", 0.1);
    });

    jQuery("#zoomOut").click(function () {
      $image.cropper("zoom", -0.1);
    });

    jQuery("#rotateLeft").click(function () {
      $image.cropper("rotate", 45);
    });

    jQuery("#rotateRight").click(function () {
      $image.cropper("rotate", -45);
    });

    jQuery("#setDrag").click(function () {
      $image.cropper("setDragMode", "crop");
    });

    jQuery('#data_1 .input-group.date').datepicker({
      todayBtn: "linked",
      keyboardNavigation: false,
      forceParse: false,
      calendarWeeks: true,
      autoclose: true
    });

    jQuery('#data_2 .input-group.date').datepicker({
      startView: 1,
      todayBtn: "linked",
      keyboardNavigation: false,
      forceParse: false,
      autoclose: true,
      format: "dd/mm/yyyy"
    });

    jQuery('#data_3 .input-group.date').datepicker({
      startView: 2,
      todayBtn: "linked",
      keyboardNavigation: false,
      forceParse: false,
      autoclose: true
    });

    jQuery('#data_4 .input-group.date').datepicker({
      minViewMode: 1,
      keyboardNavigation: false,
      forceParse: false,
      autoclose: true,
      todayHighlight: true
    });

    jQuery('#data_5 .input-daterange').datepicker({
      keyboardNavigation: false,
      forceParse: false,
      autoclose: true
    });

    /*---------------------------------------------*/
    // var elem = document.querySelector('.js-switch');
    // var switchery = new Switchery(elem, { color: '#1AB394' });

    // var elem_2 = document.querySelector('.js-switch_2');
    // var switchery_2 = new Switchery(elem_2, { color: '#ED5565' });

    // var elem_3 = document.querySelector('.js-switch_3');
    // var switchery_3 = new Switchery(elem_3, { color: '#1AB394' });

    jQuery('.i-checks').iCheck({
      checkboxClass: 'icheckbox_square-green',
      radioClass: 'iradio_square-green'
    });

    jQuery('.demo1').colorpicker();

    var divStyle = jQuery('.back-change')[0].style;
    jQuery('#demo_apidemo').colorpicker({
      color: divStyle.backgroundColor
    }).on('changeColor', function (ev) {
      divStyle.backgroundColor = ev.color.toHex();
    });

    jQuery('.clockpicker').clockpicker();

    jQuery('input[name="daterange"]').daterangepicker();

    // $('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

    // $('#reportrange').daterangepicker({
    //   format: 'MM/DD/YYYY',
    //   startDate: moment().subtract(29, 'days'),
    //   endDate: moment(),
    //   minDate: '01/01/2012',
    //   maxDate: '12/31/2015',
    //   dateLimit: { days: 60 },
    //   showDropdowns: true,
    //   showWeekNumbers: true,
    //   timePicker: false,
    //   timePickerIncrement: 1,
    //   timePicker12Hour: true,
    //   ranges: {
    //     'Today': [moment(), moment()],
    //     'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    //     'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    //     'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    //     'This Month': [moment().startOf('month'), moment().endOf('month')],
    //     'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    //   },
    //   opens: 'right',
    //   drops: 'down',
    //   buttonClasses: ['btn', 'btn-sm'],
    //   applyClass: 'btn-primary',
    //   cancelClass: 'btn-default',
    //   separator: ' to ',
    //   locale: {
    //     applyLabel: 'Submit',
    //     cancelLabel: 'Cancel',
    //     fromLabel: 'From',
    //     toLabel: 'To',
    //     customRangeLabel: 'Custom',
    //     daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    //     monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    //     firstDay: 1
    //   }
    // }, function (start, end, label) {
    //   console.log(start.toISOString(), end.toISOString(), label);
    //   $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    // });

    jQuery(".select2_demo_1").select2();
    jQuery(".select2_demo_2").select2();
    jQuery(".select2_demo_3").select2({
      placeholder: "Select a state",
      allowClear: true
    });


    jQuery(".touchspin1").TouchSpin({
      buttondown_class: 'btn btn-white',
      buttonup_class: 'btn btn-white'
    });

    jQuery(".touchspin2").TouchSpin({
      min: 0,
      max: 100,
      step: 0.1,
      decimals: 2,
      boostat: 5,
      maxboostedstep: 10,
      postfix: '%',
      buttondown_class: 'btn btn-white',
      buttonup_class: 'btn btn-white'
    });

    jQuery(".touchspin3").TouchSpin({
      verticalbuttons: true,
      buttondown_class: 'btn btn-white',
      buttonup_class: 'btn btn-white'
    });

    /*--------------------------*/
    var config = {
      '.chosen-select': {},
      '.chosen-select-deselect': { allow_single_deselect: true },
      '.chosen-select-no-single': { disable_search_threshold: 10 },
      '.chosen-select-no-results': { no_results_text: 'Oops, nothing found!' },
      '.chosen-select-width': { width: "95%" }
    }
    for (var selector in config) {
      jQuery(selector).chosen(config[selector]);
    }

    jQuery("#ionrange_1").ionRangeSlider({
      min: 0,
      max: 5000,
      type: 'double',
      prefix: "$",
      maxPostfix: "+",
      prettify: false,
      hasGrid: true
    });

    jQuery("#ionrange_2").ionRangeSlider({
      min: 0,
      max: 10,
      type: 'single',
      step: 0.1,
      postfix: " carats",
      prettify: false,
      hasGrid: true
    });

    jQuery("#ionrange_3").ionRangeSlider({
      min: -50,
      max: 50,
      from: 0,
      postfix: "°",
      prettify: false,
      hasGrid: true
    });

    jQuery("#ionrange_4").ionRangeSlider({
      values: [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
      ],
      type: 'single',
      hasGrid: true
    });

    jQuery("#ionrange_5").ionRangeSlider({
      min: 10000,
      max: 100000,
      step: 100,
      postfix: " km",
      from: 55000,
      hideMinMax: true,
      hideFromTo: false
    });

    jQuery(".dial").knob();

    jQuery("#basic_slider").noUiSlider({
      start: 40,
      behaviour: 'tap',
      connect: 'upper',
      range: {
        'min': 20,
        'max': 80
      }
    });

    jQuery("#range_slider").noUiSlider({
      start: [40, 60],
      behaviour: 'drag',
      connect: true,
      range: {
        'min': 20,
        'max': 80
      }
    });

    jQuery("#drag-fixed").noUiSlider({
      start: [40, 60],
      behaviour: 'drag-fixed',
      connect: true,
      range: {
        'min': 20,
        'max': 80
      }
    });

  }

}
