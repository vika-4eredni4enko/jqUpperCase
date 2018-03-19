$('button').on('click', function () {
    $('input[type=text]').val(function(i, val) {
          return val.toUpperCase();
    });
 });