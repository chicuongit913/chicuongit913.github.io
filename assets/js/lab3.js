$( document ).ready(function() {
    let formValidate = $("#add-new-product-form .validate, #add-new-product-form");

    formValidate.on('invalid', function () {
        $(this).addClass('is-invalid')
    });
    formValidate.on('change', function () {
        $(this).removeClass('is-invalid')
    });

    Date.prototype.toDateInputValue = (function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        console.log(local.toJSON().slice(0,10));
        return local.toJSON().slice(0,10);
    });

    $('#date-supplied').val(new Date().toDateInputValue());
});