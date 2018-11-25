/*
These functions primarily deal with the send and retreiving of data with the Firebase database.
In addition, some "listener" functions wait for the submission of information from HTML forms, then store that 
information before sending it to the database or crafting queries based on user-submitted information.
*/


// Firebase configuration information. Required for connecting the the accompying database.
var config = {
    apiKey: "AIzaSyCWFOrxyEeatbcn0Msh4z3J84sGepN6h7M",
    authDomain: "student-tracking-9e878.firebaseapp.com",
    databaseURL: "https://student-tracking-9e878.firebaseio.com",
    projectId: "student-tracking-9e878",
    storageBucket: "student-tracking-9e878.appspot.com",
    messagingSenderId: "811705690503"
    };
firebase.initializeApp(config);
database = firebase.database();

// Listen for form submission from submit.html.
var rootRef = firebase.database().ref().child('students');

$('#saveForm').click(function(){
    // Verify that all required fields in the form have been filled.
    var required = $('input,textarea,select').filter('[required]:visible');
    var allRequired = true;
    required.each(function(){
        if($(this).val() == ''){
            allRequired = false;
        }
    });

    if(!allRequired){
        formFillError();
    }
    else{
        // Variables to hold submission data from radio buttons and drop-down menus.
        var raceSelected = $('#userRace').val();
        var genderSelected = $('#gender').val();
        var schoolSelected = $('#school').val();
        var concentrationSelected = $('#majorMinor').val();
        var afterGradSelected = $('#afterGrad').val();
        var timeToCompleteSelected = $('#timeToComplete').val();
        var programSelected = $('input:radio[name="program"]:checked').val();

        // Push student data into the database.
        rootRef.push().set({
            firstName:$('#userfName').val(),
            lastName:$('#userlName').val(),
            hometown:$('#userHome').val(),
            gradDate:$('#gradDate').val(),
            elaborate:$('#elaborate').val(),
            school: schoolSelected,
            concentration: concentrationSelected,
            race: raceSelected,
            gender: genderSelected,
            program: programSelected,
            timeToComplete: timeToCompleteSelected,
            afterGrad: afterGradSelected
        });
        confirmationAlert();
    }
})

// Display pop-up alert confirming successful submission of student information to the database.
function confirmationAlert(){
    alert("Your form has been successfully submitted.");
}

// Disply pop-up alert display error due to form not being complete.
function formFillError(){
    alert("Please fill in all required fields before submitting.");
}

// Listen for the desired query option and only display that field. Hide all others.
$(function() {
    $('#queryselector').change(function(){
        $('.querychoice').hide();
        $('#' + $(this).val()).show();
        $('.queryTable').show();
    });
});

// Reload the page, beginning at the top.
function newQueryPage(){
    window.location.reload();
    $(document).scrollTop(0);
}


/*
The following methods explicitely listen for various query options depending on what the user selects in query.html.
Depending on how the user would like to query the database, the appropriate function is called when the corresponding
button is clicked, sending a section of information that can be compared with data inside the database.
*/

// If user queries with Last Name, listen for submission.
var firstTime = true;
$('#querylastName').click(function(){
    var lastNameSelected = $('#userlName').val();
    var ref = firebase.database().ref("students");

    ref.orderByChild('lastName').equalTo(lastNameSelected).on("child_added", function(snapshot){
        console.log(snapshot.val());

        // Variables to hold retrieved data from the database.
        var fname_val = snapshot.val().firstName;
        var lname_val = snapshot.val().lastName;
        var hometown_val = snapshot.val().hometown;
        var ethnicity_val = snapshot.val().race;
        var gender_val = snapshot.val().gender;
        var program_val = snapshot.val().program;
        var school_val = snapshot.val().school;
        var concentration_val = snapshot.val().concentration;
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;

        // Append read data into the table.
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + school_val + "</td><td>" + concentration_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

// If user queries with Hometown, listen for submission.
$('#queryHometown').click(function(){
    var hometownSelected = $('#userHometown').val();
    var ref = firebase.database().ref("students");
    ref.orderByChild('hometown').equalTo(hometownSelected).on("child_added", function(snapshot){
        console.log(snapshot.val());

        var fname_val = snapshot.val().firstName;
        var lname_val = snapshot.val().lastName;
        var hometown_val = snapshot.val().hometown;
        var ethnicity_val = snapshot.val().race;
        var gender_val = snapshot.val().gender;
        var program_val = snapshot.val().program;
        var school_val = snapshot.val().school;
        var concentration_val = snapshot.val().concentration;
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + school_val + "</td><td>" + concentration_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

// If user queries with Ethnicity, listen for submission.
$('#queryRace').click(function(){
    var raceSelected = $('#userRace').val();
    var ref = firebase.database().ref("students");
    ref.orderByChild('race').equalTo(raceSelected).on("child_added", function(snapshot){
        console.log(snapshot.val());

        var fname_val = snapshot.val().firstName;
        var lname_val = snapshot.val().lastName;
        var hometown_val = snapshot.val().hometown;
        var ethnicity_val = snapshot.val().race;
        var gender_val = snapshot.val().gender;
        var program_val = snapshot.val().program;
        var school_val = snapshot.val().school;
        var concentration_val = snapshot.val().concentration;
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + school_val + "</td><td>" + concentration_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

// If user queries with Gender, listen for submission.
$('#queryGender').click(function(){
    var genderSelected = $('#gender').val();
    var ref = firebase.database().ref("students");
    ref.orderByChild('gender').equalTo(genderSelected).on("child_added", function(snapshot){
        console.log(snapshot.val());

        var fname_val = snapshot.val().firstName;
        var lname_val = snapshot.val().lastName;
        var hometown_val = snapshot.val().hometown;
        var ethnicity_val = snapshot.val().race;
        var gender_val = snapshot.val().gender;
        var program_val = snapshot.val().program;
        var school_val = snapshot.val().school;
        var concentration_val = snapshot.val().concentration;
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + school_val + "</td><td>" + concentration_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

// If user queries with Program, listen for submission.
$('#queryProgram').click(function(){
    var programSelected = $('input:radio[name="program"]:checked').val();
    var ref = firebase.database().ref("students");
    ref.orderByChild('program').equalTo(programSelected).on("child_added", function(snapshot){
        console.log(snapshot.val());

        var fname_val = snapshot.val().firstName;
        var lname_val = snapshot.val().lastName;
        var hometown_val = snapshot.val().hometown;
        var ethnicity_val = snapshot.val().race;
        var gender_val = snapshot.val().gender;
        var program_val = snapshot.val().program;
        var school_val = snapshot.val().school;
        var concentration_val = snapshot.val().concentration;
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + school_val + "</td><td>" + concentration_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

// If user queries with School, listen for submission.
$('#querySchool').click(function(){
    var genderSelected = $('#school').val();
    var ref = firebase.database().ref("students");
    ref.orderByChild('school').equalTo(genderSelected).on("child_added", function(snapshot){
        console.log(snapshot.val());

        var fname_val = snapshot.val().firstName;
        var lname_val = snapshot.val().lastName;
        var hometown_val = snapshot.val().hometown;
        var ethnicity_val = snapshot.val().race;
        var gender_val = snapshot.val().gender;
        var program_val = snapshot.val().program;
        var school_val = snapshot.val().school;
        var concentration_val = snapshot.val().concentration;
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + school_val + "</td><td>" + concentration_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

// If user queries with School, listen for submission.
$('#queryConcentration').click(function(){
    var genderSelected = $('#majorMinor').val();
    var ref = firebase.database().ref("students");
    ref.orderByChild('concentration').equalTo(genderSelected).on("child_added", function(snapshot){
        console.log(snapshot.val());

        var fname_val = snapshot.val().firstName;
        var lname_val = snapshot.val().lastName;
        var hometown_val = snapshot.val().hometown;
        var ethnicity_val = snapshot.val().race;
        var gender_val = snapshot.val().gender;
        var program_val = snapshot.val().program;
        var school_val = snapshot.val().school;
        var concentration_val = snapshot.val().concentration;
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + school_val + "</td><td>" + concentration_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

// If user queries with the Graduation Year, listen for submission.
$('#queryGradYear').click(function(){
    var gradYearSelected = $('#gradDate').val();
    var ref = firebase.database().ref("students");
    ref.orderByChild('gradDate').equalTo(gradYearSelected).on("child_added", function(snapshot){
        console.log(snapshot.val());

        var fname_val = snapshot.val().firstName;
        var lname_val = snapshot.val().lastName;
        var hometown_val = snapshot.val().hometown;
        var ethnicity_val = snapshot.val().race;
        var gender_val = snapshot.val().gender;
        var program_val = snapshot.val().program;
        var school_val = snapshot.val().school;
        var concentration_val = snapshot.val().concentration;
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + school_val + "</td><td>" + concentration_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

// If user queries with Time to Complete, listen for submission.
$('#queryTimeComplete').click(function(){
    var timeToCompleteSelected = $('#timeToComplete').val();
    var ref = firebase.database().ref("students");
    ref.orderByChild('timeToComplete').equalTo(timeToCompleteSelected).on("child_added", function(snapshot){
        console.log(snapshot.val());

        var fname_val = snapshot.val().firstName;
        var lname_val = snapshot.val().lastName;
        var hometown_val = snapshot.val().hometown;
        var ethnicity_val = snapshot.val().race;
        var gender_val = snapshot.val().gender;
        var program_val = snapshot.val().program;
        var school_val = snapshot.val().school;
        var concentration_val = snapshot.val().concentration;
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + school_val + "</td><td>" + concentration_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

// If user queries with PostGrad, listen for submission.
$('#queryPostGrad').click(function(){
    var afterGradSelected = $('#afterGrad').val();
    var ref = firebase.database().ref("students");
    ref.orderByChild('afterGrad').equalTo(afterGradSelected).on("child_added", function(snapshot){
        console.log(snapshot.val());

        var fname_val = snapshot.val().firstName;
        var lname_val = snapshot.val().lastName;
        var hometown_val = snapshot.val().hometown;
        var ethnicity_val = snapshot.val().race;
        var gender_val = snapshot.val().gender;
        var program_val = snapshot.val().program;
        var school_val = snapshot.val().school;
        var concentration_val = snapshot.val().concentration;
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + school_val + "</td><td>" + concentration_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})
