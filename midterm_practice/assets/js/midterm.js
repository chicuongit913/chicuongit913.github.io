"use strict";
$(document).ready(function () {
    // set digital clock for header
    setInterval(showDigitalClock, 1000);

    //validate form before submit
    validateFunction();

    //add person to list
    $("#add-person-form").on("submit",addPersonToTable);

    //btn reset form catch event click
    $("#btn-reset").on("click", resetForm);
});

function showDigitalClock() {
    let digitalClock = generateDigitalClock();
    $("#navbar-date-time").html(digitalClock);
}

function generateDigitalClock() {
    let date = new Date();

    let weekday = new Intl.DateTimeFormat("en", { weekday: "long" }).format(date);

    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    let month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
    let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);

    let clock = date.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });

    return `${weekday}, ${day} ${month} ${year} - ${clock}`;
}

function validateFunction() {
    let formValidate = $("#add-person-form .validate");

    if(formValidate) {
        formValidate.on("invalid", function () {
            $(this).addClass("is-invalid")
        });
        formValidate.on("change", function () {
            $(this).removeClass("is-invalid")
        });
    }
}

function addPersonToTable(e) {
    e.preventDefault();

    let row = generatePersonRow();
    let socialSecurityNumber = $("#social_security_number").val();

    if($("#btn-add-person").is(":visible")) {
        if($("tr#"+socialSecurityNumber).length) {
            $.notify("the social security number: " + socialSecurityNumber + " is exists.", "error");
        } else {
            $("#tbl-list-person tbody").prepend(row);
            $.notify("Added " + $("#full_name").val(), "success");
            resetForm();
        }

    } else {
        if(socialSecurityNumber != $("#btn-update-person").data("id") && $("tr#"+socialSecurityNumber).length) {
            $.notify("the social security number: " + socialSecurityNumber + " is exists.", "error");
            return false;
        }

        $("tr#"+$("#btn-update-person").data("id")).replaceWith(row);
        $.notify("Updated " + $("#full_name").val(), "success");
        resetForm();

    }



    return false;
}

function generatePersonRow() {
    let fullName = $("#full_name").val();
    let citizenId = $("#citizen_id").val()
    let socialSecurityNumber = $("#social_security_number").val();
    let state = $("#state option:selected").html();
    let seniorCitizen = ($("input[name='senior_citizen']:checked").val() == 1) ? "yes" : "no";

    let person = new Person(fullName, citizenId, socialSecurityNumber, $("#state").val(), $("input[name='senior_citizen']").val());

    let row = $("<tr>", {"id": socialSecurityNumber})
        .append($("<td>", {"text":fullName}))
        .append($("<td>", {"text":citizenId}))
        .append($("<td>", {"text":socialSecurityNumber}))
        .append($("<td>", {"text":state}))
        .append($("<td>", {"text":seniorCitizen}))
        .append($("<td>").append($("<button>", {"class":"btn btn-sm btn-outline-danger", "text":"Delete"}).on("click", function () {
            $(this).parents("tr").remove();
        })).append($("<button>", {"class":"btn btn-sm btn-outline-primary ml-2", "text":"edit"}).on("click", editPersonData)))
        .data("person", person);

    return row;
}

function editPersonData() {
    let row = $(this).parents("tr");
    let person = row.data("person");

    $("#full_name").val(person.getFullName());
    $("#citizen_id").val(person.getCitizenId());
    $("#social_security_number").val(person.getSocialSecurityNumber());
    $("#state").val(person.getState());

    if(person.getSeniorCitizen() == 1) {
        $( "#senior_citizen_yes" ).prop( "checked", true );
    } else {
        $( "#senior_citizen_no" ).prop( "checked", true );
    }

    $("#btn-add-person").addClass("d-none");
    $("#btn-update-person").removeClass("d-none");
    $("#btn-update-person").data("id", person.getSocialSecurityNumber());
}

function resetForm() {
    $("#full_name").val('');
    $("#citizen_id").val('');
    $("#social_security_number").val('');
    $("#state").val('');
    $( "#senior_citizen_yes" ).prop( "checked", false );
    $( "#senior_citizen_no" ).prop( "checked", false );
    $("#btn-add-person").removeClass("d-none");
    $("#btn-update-person").addClass("d-none");
}

class Person {
    constructor(fullName, citizenId, socialSecurityNumber, state, seniorCitizen) {
        this.fullName = fullName;
        this.citizenId = citizenId;
        this.socialSecurityNumber = socialSecurityNumber;
        this.state = state;
        this.seniorCitizen = seniorCitizen;
    }
    getFullName() {
        return this.fullName;
    }
    getCitizenId() {
        return this.citizenId;
    }
    getSocialSecurityNumber () {
        return this.socialSecurityNumber;
    }
    getState () {
        return this.state;
    }
    getSeniorCitizen () {
        return this.seniorCitizen;
    }
}