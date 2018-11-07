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

var rootRef = firebase.database().ref().child('students');

// Bar graph displaying the total number of students by ethnicity.
var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Other Pacific Islander", "White"],
                    datasets: [{
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Total Number of Students (by Ethnicity)'
                    },
                    legend:{
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });

// Pie/doughnut graph displaying total students by gender identity.
var ctx2 = document.getElementById("secondChart").getContext('2d');

            var secondChart = new Chart(ctx2, {
              type: 'doughnut',
              data: {
                labels: ["Male", "Female", "Non-Binary", "Other", "Unspecified"],
                datasets: [{
                  backgroundColor: [
                    "#9C89B8",
                    "#F0A6CA",
                    "#EFC3E6",
                    "#F0E6EF",
                    "#B8BEDD",
                  ],
                  data: [21, 15, 6, 1, 2]
                }]
              },
              options: {
                title: {
                    display: true,
                    text: 'Total Number of Students (by Gender)'
                },
                responsive: true,
                maintainAspectRatio: false
              }
            });
