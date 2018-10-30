var config = {
    apiKey: "AIzaSyCWFOrxyEeatbcn0Msh4z3J84sGepN6h7M",
    authDomain: "student-tracking-9e878.firebaseapp.com",
    databaseURL: "https://student-tracking-9e878.firebaseio.com",
    projectId: "student-tracking-9e878",
    storageBucket: "student-tracking-9e878.appspot.com",
    messagingSenderId: "811705690503"
    };
firebase.initializeApp(config);
console.log("outside the function");

// Listen for form submission.
var rootRef = firebase.database().ref().child('students');

$('#saveForm').click(function(){
    console.log("in the funciton");

    var raceSelected = $('#userRace').val();
    var genderSelected = $('#gender').val();
    var programSelected = $('input:radio[name="program"]:checked').val();

        rootRef.push().set({

            firstName:$('#userfName').val(),
            lastName:$('#userlName').val(),
            hometown:$('#userHome').val(),
            race: raceSelected,
            gender: genderSelected,
            program: programSelected
        });
})