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

// Listen for form submission and queries.
var rootRef = firebase.database().ref().child('students');
var ref = database.ref('students');
ref.on('value', gotData, errData);

$('#saveForm').click(function(){
    console.log("in the funciton");

    var raceSelected = $('#userRace').val();
    var genderSelected = $('#gender').val();
    var afterGradSelected = $('#afterGrad').val();
    var timeToCompleteSelected = $('#timeToComplete').val();
    var programSelected = $('input:radio[name="program"]:checked').val();

        rootRef.push().set({

            firstName:$('#userfName').val(),
            lastName:$('#userlName').val(),
            hometown:$('#userHome').val(),
            gradDate:$('#gradDate').val(),
            elaborate:$('#elaborate').val(),
            race: raceSelected,
            gender: genderSelected,
            program: programSelected,
            timeToComplete: timeToCompleteSelected,
            afterGrad: afterGradSelected
        });
    confirmationAlert();
})

function confirmationAlert(){
    alert("Your form has been successfully submitted.");
}

function gotData(data){
    var students = data.val();
    var keys = Object.keys(students);
    console.log(keys);
    for (var i = 0; i < keys.length; i++){
        var k = keys[i];
        var firstName = students[k].firstName;
        var lastName = students[k].lastName;
        console.log(firstName, lastName);
    }
}

function errData(err){
    console.log('Error!');
    console.log(err);
}

$(function() {
    $('#queryselector').change(function(){
        $('.querychoice').hide();
        $('#' + $(this).val()).show();
    });
});

$('#queryfirstName').click(function(){
    var firstNameSelected = $('#userfName').val();
    var ref = firebase.database().ref("students");
    ref.orderByChild("firstName").equalTo(firstNameSelected).on("child_added", function(snapshot) {
    console.log(snapshot.val());

    var fname_val = snapshot.val().firstName;
    var lname_val = snapshot.val().lastName;
    var hometown_val = snapshot.val().hometown;
    var ethnicity_val = snapshot.val().race;
    var gender_val = snapshot.val().gender;
    var program_val = snapshot.val().program;
    var gradYear_val = snapshot.val().gradDate;
    var timeToComplete_val = snapshot.val().timeToComplete;
    var afterGrad_val = snapshot.val().afterGrad;
    var explain_val = snapshot.val().elaborate;
    $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    
    });
})

$('#querylastName').click(function(){
    var lastNameSelected = $('#userlName').val();
    var ref = firebase.database().ref("students");
    ref.orderByChild('lastName').equalTo(lastNameSelected).on("child_added", function(snapshot){
        console.log(snapshot.val());

        var fname_val = snapshot.val().firstName;
        var lname_val = snapshot.val().lastName;
        var hometown_val = snapshot.val().hometown;
        var ethnicity_val = snapshot.val().race;
        var gender_val = snapshot.val().gender;
        var program_val = snapshot.val().program;
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

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
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

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
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

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
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

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
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

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
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

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
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})

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
        var gradYear_val = snapshot.val().gradDate;
        var timeToComplete_val = snapshot.val().timeToComplete;
        var afterGrad_val = snapshot.val().afterGrad;
        var explain_val = snapshot.val().elaborate;
        $("#table_body").append("<tr><td>" + fname_val + "</td><td>" + lname_val + "</td><td>" + hometown_val + "</td><td>" + ethnicity_val + "</td><td>" + gender_val + "</td><td>" + program_val + "</td><td>" + gradYear_val + "</td><td>" + timeToComplete_val + "</td><td>" + afterGrad_val + "</td><td>" + explain_val + "</td></tr>");
    })
})
