$( document ).ready(function() {

    $.get("../layout/header.html", function (data) {
        $('body').prepend(data);
    });

    $.get("../layout/footer.html", function (data) {
        $('body').append(data);
    });
});
