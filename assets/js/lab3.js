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
        return local.toJSON().slice(0,10);
    });

    $('#date-supplied').val(new Date().toDateInputValue());

    // LAB 5 - Add Product form
    if(document.getElementById('add-product-button')) {
        document.getElementById('add-product-button').onclick = function(e){
            let productNumber = document.getElementById('product-number').value;
            let name = document.getElementById('name').value;
            let unitPrice = document.getElementById('unit-price').value;
            let quantityStock = document.getElementById('quantity-stock').value;
            let supplier = document.getElementById('supplier').value;
            let dateSupplied = document.getElementById('date-supplied').value;

            alert("Product Number: " + productNumber
                + "\n" +
                "Product Name: " + name
                + "\n" +
                "Unit Price: " + unitPrice
                + "\n" +
                "Quantity Stock: " + quantityStock
                + "\n" +
                "Supplier: " + supplier
                + "\n" +
                "Date Supplied: " + dateSupplied
            );
        };
    }
});

// LAB 5 set defer and we can put javascript out of document ready - LOGIN FORM
if(document.getElementById('submit-button')) {
    document.getElementById('submit-button').onclick = function(e){
        console.log("Email: " + document.getElementById('email').value);
        console.log("Password: " + document.getElementById('password').value);
        console.log("Website url: " + document.getElementById('website-url').value);
        console.log("Check me out: " + document.getElementById('check-me-out').checked);
    };
}





