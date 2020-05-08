"use strict";
$(document).ready(function () {
    //validate form before submit
    validateFunction();

    //add person to list
    $("#add-patient-form").on("submit",addPatientToTable);

    //btn reset form catch event click
    $("#btn-reset").on("click", resetForm);

    $("#outPatient").on("click", function () {
        if($(this).is(":checked")) {
            $("#tbl-list-paitent").find("tbody tr").each(function () {
                let patient = $(this).data("patient");

                if(patient.getOutPatient() == 0)
                {
                    $(this).addClass("d-none");
                }
            });
        }
        else {
            $("#tbl-list-paitent").find("tbody tr").each(function () {
                $(this).removeClass("d-none");
            });
        }
    });
});

function validateFunction() {
    let formValidate = $("#add-patient-form .validate");

    if(formValidate) {
        formValidate.on("invalid", function () {
            $(this).addClass("is-invalid")
        });
        formValidate.on("change", function () {
            $(this).removeClass("is-invalid")
        });
    }
}

function addPatientToTable(e) {
    e.preventDefault();

    let row = generatePatientRow();
    let patientId = $("#patient_id").val();

    if($("#btn-add").is(":visible")) {
        if($("tr#"+patientId).length) {
            $.notify("the social security number: " + patientId + " is exists.", "error");
        } else {
            $("#tbl-list-paitent tbody").prepend(row);
            $.notify("Added " + $("#first_name").val(), "success");
            resetForm();
        }

    } else {
        if(patientId != $("#btn-update").data("id") && $("tr#"+patientId).length) {
            $.notify("the social security number: " + patientId + " is exists.", "error");
            return false;
        }

        $("tr#"+$("#btn-update").data("id")).replaceWith(row);
        $.notify("Updated " + $("#first_name").val(), "success");
        resetForm();
    }
    return false;
}

function generatePatientRow() {

    let patientId = $("#patient_id").val();
    let firstName = $("#first_name").val();
    let middleName = $("#middle_name").val();
    let lastName = $("#last_name").val();
    let dateOfBirth = $("#inputDoB").val();
    let department = $("#department").val();
    let outPatient = ($("input[name='out_patient']:checked").val() == 1) ? "yes" : "no";

    let patient = new Patient(patientId, firstName, middleName, lastName, dateOfBirth, department, $("input[name='out_patient']:checked").val());

    let row = $("<tr>", {"id": patientId})
        .append($("<td>", {"text":patientId}))
        .append($("<td>", {"text":firstName}))
        .append($("<td>", {"text":middleName}))
        .append($("<td>", {"text":lastName}))
        .append($("<td>", {"text":dateOfBirth}))
        .append($("<td>", {"text":department}))
        .append($("<td>", {"text":outPatient}))
        .append($("<td>").append($("<button>", {"class":"btn btn-sm btn-outline-danger", "text":"Delete"}).on("click", function () {
            $(this).parents("tr").remove();
        })).append($("<button>", {"class":"btn btn-sm btn-outline-primary ml-2", "text":"edit"}).on("click", editPatientData))).data("patient", patient);

    return row;
}
function editPatientData() {
    let row = $(this).parents("tr");
    let patient = row.data("patient");

    $("#patient_id").val(patient.getPatientId());
    $("#first_name").val(patient.getFirstName());
    $("#middle_name").val(patient.getMiddleName());
    $("#last_name").val(patient.getLastName());
    $("#inputDoB").val(patient.getDateOfBirth());
    $("#department").val(patient.getDepartment());

    if(patient.getOutPatient() == 1) {
        $( "#input_out_patient_yes" ).prop( "checked", true );
    } else {
        $( "#input_out_patient_no" ).prop( "checked", true );
    }

    $("#btn-add").addClass("d-none");
    $("#btn-update").removeClass("d-none");
    $("#btn-update").data("id", patient.getPatientId());
}
function resetForm() {

    $("#patient_id").val("");
    $("#first_name").val("");
    $("#middle_name").val("");
    $("#last_name").val("");
    $("#inputDoB").val("");
    $("#department").val("");
    $( "#input_out_patient_yes" ).prop( "checked", false );
    $( "#input_out_patient_no" ).prop( "checked", false );

    $('#btn-update').addClass("d-none");
    $('#btn-add').removeClass("d-none");
}

class Patient {
    constructor(patientId, firstName, middleName, lastName, dateOfBirth, department, outPatient) {
        this.patientId = patientId;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.department = department;
        this.outPatient = outPatient;
    }
    getPatientId() {
        return this.patientId;
    }
    getFirstName() {
        return this.firstName;
    }
    getMiddleName() {
        return this.middleName;
    }
    getLastName() {
        return this.lastName;
    }
    getDateOfBirth() {
        return this.dateOfBirth;
    }
    getDepartment() {
        return this.department;
    }
    getOutPatient() {
        return this.outPatient;
    }
}