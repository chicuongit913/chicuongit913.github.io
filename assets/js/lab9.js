$( document ).ready(function() {
    let formValidate = $("#add-new-product-form .validate, #add-new-product-form, #login-form .validate");

    formValidate.on('invalid', function () {
        $(this).addClass('is-invalid')
    });
    formValidate.on('change', function () {
        $(this).removeClass('is-invalid')
    });

    Date.prototype.toDateInputValue = (function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });

    $('#date-supplied').val(new Date().toDateInputValue());

    $('#add-new-product-form').on("submit", function (e) {
        e.preventDefault();
        let productNumber = $('#product-number').val();
        let name = $('#name').val()
        let unitPrice = $('#unit-price').val();
        let quantityStock = $('#quantity-stock').val();
        let supplier = $('#supplier').val();
        let dateSupplied = $('#date-supplied').val();

        if(productNumber && name && unitPrice && quantityStock && supplier && dateSupplied) {
            let row = $('<tr>')
                .append($('<td>', {'text':productNumber}))
                .append($('<td>', {'text':name}))
                .append($('<td>', {'text':unitPrice}))
                .append($('<td>', {'text':quantityStock}))
                .append($('<td>', {'text':supplier}))
                .append($('<td>', {'text':dateSupplied}))
                .append($('<td>').append($('<button>', {"class":"btn btn-sm btn-outline-danger", "text":"Delete"}).on("click", function () {
                    $(this).parents('tr').remove();
                })));
            $('#tbl-list-product tbody').prepend(row);
        }

        return false;
    });

    $('#login-form').on("submit", function (e) {
        e.preventDefault();
        let email = $('#email').val();
        let password = $('#password').val();
        let websiteUrl = $('#website-url').val();
        let checkMeOut = $('#check-me-out').is(":checked");
        if(email && password && websiteUrl) {
            console.log("Email: " + email);
            console.log("Password: " + password);
            console.log("Website url: " + websiteUrl);
            console.log("Check me out: " + checkMeOut);
        } else {
            console.log("Please fill all the require input!");
        }

        return false;
    });
});