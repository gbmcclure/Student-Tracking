var config = {
    apiKey: "AIzaSyCWFOrxyEeatbcn0Msh4z3J84sGepN6h7M",
    authDomain: "student-tracking-9e878.firebaseapp.com",
    databaseURL: "https://student-tracking-9e878.firebaseio.com",
    projectId: "student-tracking-9e878",
    storageBucket: "student-tracking-9e878.appspot.com",
    messagingSenderId: "811705690503"
    };
firebase.initializeApp(config);

// Get counter values.
var genderData=[];
var raceData=[];
var programData=[];
var completionData=[];
var gradYearData=[];
var schoolData=[];
var studyData=[];
var afterGradData=[];

function getDataGender(){
    var ref = firebase.database().ref().child('counters');
    return ref.once('value').then((snapshot) => {
        genderData.push(snapshot.val()['Male']);
        genderData.push(snapshot.val()['Female']);
        genderData.push(snapshot.val()['Nonbinary']);
        genderData.push(snapshot.val()['Other']);
        genderData.push(snapshot.val()["Didn't Say"]);
        return genderData;
    });
}

function getDataRace(){
    var ref = firebase.database().ref().child('counters');
    return ref.once('value').then((snapshot) => {
        raceData.push(snapshot.val()['American Indian or Alaska Native']);
        raceData.push(snapshot.val()['Asian']);
        raceData.push(snapshot.val()['Black or African American']);
        raceData.push(snapshot.val()['Hispanic or Latino']);
        raceData.push(snapshot.val()['Native Hawaiian or Other Pacific Islander']);
        raceData.push(snapshot.val()['White']);
        return raceData;
    })
}

function getDataProgram(){
    var ref = firebase.database().ref().child('counters');
    return ref.once('value').then((snapshot) => {
        programData.push(snapshot.val()['Undergraduate']);
        programData.push(snapshot.val()['Graduate']);
        return programData;
    })
}

function getDataCompletion(){
    var ref = firebase.database().ref().child('counters');
    return ref.once('value').then((snapshot) => {
        completionData.push(snapshot.val()['2 years']);
        completionData.push(snapshot.val()['3 years']);
        completionData.push(snapshot.val()['4 years']);
        completionData.push(snapshot.val()['5 years']);
        completionData.push(snapshot.val()['6 years']);
        completionData.push(snapshot.val()['More than 6 years']);
        return completionData;
    })
}

function getDataGradYear(){
    var ref = firebase.database().ref().child('counters');
    return ref.once('value').then((snapshot) => {
        gradYearData.push(snapshot.val()['2007']);
        gradYearData.push(snapshot.val()['2008']);
        gradYearData.push(snapshot.val()['2009']);
        gradYearData.push(snapshot.val()['2010']);
        gradYearData.push(snapshot.val()['2011']);
        gradYearData.push(snapshot.val()['2012']);
        gradYearData.push(snapshot.val()['2013']);
        gradYearData.push(snapshot.val()['2014']);
        gradYearData.push(snapshot.val()['2015']);
        gradYearData.push(snapshot.val()['2016']);
        gradYearData.push(snapshot.val()['2017']);
        gradYearData.push(snapshot.val()['2018']);
        return gradYearData;
    })
}

function getDataSchool(){
    var ref = firebase.database().ref().child('counters');
    return ref.once('value').then((snapshot) => {
        schoolData.push(snapshot.val()['College of Liberal Arts']);
        schoolData.push(snapshot.val()['Graduate School']);
        schoolData.push(snapshot.val()['Meek School of Journalism & New Media']);
        schoolData.push(snapshot.val()['Patterson School of Accountancy']);
        schoolData.push(snapshot.val()['School of Applied Science']);
        schoolData.push(snapshot.val()['School of Business Administration']);
        schoolData.push(snapshot.val()['School of Education']);
        schoolData.push(snapshot.val()['School of Engineering']);
        schoolData.push(snapshot.val()['School of Law']);
        schoolData.push(snapshot.val()['School of Pharmacy']);
        return schoolData;
    })
}

function getDataStudy(){
    var ref = firebase.database().ref().child('counters');
    return ref.once('value').then((snapshot) => {
        studyData.push(snapshot.val()['As a major concentration']);
        studyData.push(snapshot.val()['As a minor concentration']);
        return studyData;
    })
}

function getDataAfterGrad(){
    var ref = firebase.database().ref().child('counters');
    return ref.once('value').then((snapshot) => {
        afterGradData.push(snapshot.val()['Masters']);
        afterGradData.push(snapshot.val()['PhD']);
        afterGradData.push(snapshot.val()['An academic position']);
        afterGradData.push(snapshot.val()['Second degree in a different field']);
        afterGradData.push(snapshot.val()['Medical or Pharmacy']);
        afterGradData.push(snapshot.val()['Law school']);
        afterGradData.push(snapshot.val()['MBA']);
        afterGradData.push(snapshot.val()['Work']);
        afterGradData.push(snapshot.val()['Other job']);
        return afterGradData;
    })
}

// Graphs displaying total number of students by post-grad plans.
getDataAfterGrad().then((data) => {
    var ctx = document.getElementById("myChart15").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Masters", "PhD", "An academic position", "Second degree in a difference field", "Medical or Pharmacy", "Law school", "MBA", "Work", "Other"],
        datasets: [{
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(156, 137, 184, 0.2)',
                'rgba(240, 166, 202, 0.2)',
                'rgba(239, 195, 230, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(156, 137, 184, 1)',
                'rgba(240, 166, 202, 1)',
                'rgba(239, 195, 230, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'How many students study English? (By Major and Minor)'
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

var ctx2 = document.getElementById("myChart16").getContext('2d');
var secondChart = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ["Masters", "PhD", "An academic position", "Second degree in a difference field", "Medical or Pharmacy", "Law school", "MBA", "Work", "Other"],
    datasets: [{
      backgroundColor: [
        "#9C89B8",
        "#F0A6CA",
        "#4B8E78",
        "#F4E285",
        "#C64747",
        "#F4A259",
        "#0094C6",
        "#001242",
        "#FE6951",
      ],
      data: data
    }]
  },
  options: {
    title: {
        display: true,
        text: 'How many students study English? (By School)'
    },
    responsive: true,
    maintainAspectRatio: false
  }
});
})

// Graphs displaying the total number of students by study.
getDataStudy().then((data) => {
var ctx = document.getElementById("myChart12").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Major", "Minor"],
        datasets: [{
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'How many students study English? (By Major and Minor)'
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

var ctx2 = document.getElementById("myChart14").getContext('2d');
var secondChart = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ["Major", "Minor"],
    datasets: [{
      backgroundColor: [
        "#9C89B8",
        "#F0A6CA",
      ],
      data: data
    }]
  },
  options: {
    title: {
        display: true,
        text: 'How many students study English? (By School)'
    },
    responsive: true,
    maintainAspectRatio: false
  }
});
})

// Graphs displaying the total number of students by school.
getDataSchool().then((data) => {
    var ctx = document.getElementById("myChart11").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["College of Liberal Arts", "Graduate School", "Meek School of Journalism", "School of Accountancy", "School of Applied Science", "School of Business Administration", "School of Education", "School of Engineering", "School of Law", "School of Pharmacy"],
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(156, 137, 184, 0.2)',
                    'rgba(240, 166, 202, 0.2)',
                    'rgba(239, 195, 230, 0.2)',
                    'rgba(240, 230, 239, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(156, 137, 184, 1)',
                    'rgba(240, 166, 202, 1)',
                    'rgba(239, 195, 230, 1)',
                    'rgba(240, 230, 239, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: 'How Many Students Study English? (By School)'
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

    var ctx2 = document.getElementById("myChart13").getContext('2d');
    var secondChart = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ["College of Liberal Arts", "Graduate School", "Meek School of Journalism", "School of Accountancy", "School of Applied Science", "School of Business Administration", "School of Education", "School of Engineering", "School of Law", "School of Pharmacy"],
        datasets: [{
          backgroundColor: [
            "#9C89B8",
            "#F0A6CA",
            "#4B8E78",
            "#F4E285",
            "#C64747",
            "#F4A259",
            "#0094C6",
            "#001242",
            "#FE6951",
            "#D8E4D4",
          ],
          data: data
        }]
      },
      options: {
        title: {
            display: true,
            text: 'How many students study English? (By School)'
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
})
// Graphs displaying the total number of students by graduation year.
getDataGradYear().then((data) => {
    var ctx = document.getElementById("myChart5").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(156, 137, 184, 0.2)',
                    'rgba(240, 166, 202, 0.2)',
                    'rgba(239, 195, 230, 0.2)',
                    'rgba(240, 230, 239, 0.2)',
                    'rgba(184, 190, 221, 0.2)',
                    'rgba(65, 234, 212, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(156, 137, 184, 1)',
                    'rgba(240, 166, 202, 1)',
                    'rgba(239, 195, 230, 1)',
                    'rgba(240, 230, 239, 1)',
                    'rgba(184, 190, 221, 1)',
                    'rgba(65, 234, 212, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Total Students by Graduation Year'
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

var ctx2 = document.getElementById("myChart10").getContext('2d');
var secondChart = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
    datasets: [{
      backgroundColor: [
        "#9C89B8",
        "#F0A6CA",
        "#4B8E78",
        "#F4E285",
        "#C64747",
        "#F4A259",
        "#0094C6",
        "#001242",
        "#FE6951",
        "#D8E4D4",
        "#CBB0F4",
        "#F8CDCB"
      ],
      data: data
    }]
  },
  options: {
    title: {
        display: true,
        text: 'Total Number of Students (by Completion Time)'
    },
    responsive: true,
    maintainAspectRatio: false
  }
});
})

// Graphs displaying the total number of students by completion time.
getDataCompletion().then((data) => {
    var ctx = document.getElementById("myChart3").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["2 years", "3 years", "4 years", "5 years", "6 years"],
            datasets: [{
                data: data,
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
                text: 'Total Students by Time Taken to Complete Degree'
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

    var ctx2 = document.getElementById("myChart9").getContext('2d');

    var secondChart = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ["2 years", "3 years", "4 years", "5 years", "6 years"],
        datasets: [{
          backgroundColor: [
            "#9C89B8",
            "#F0A6CA",
            "#4B8E78",
            "#F4E285",
            "#C64747"
          ],
          data: data
        }]
      },
      options: {
        title: {
            display: true,
            text: 'Total Number of Students (by Completion Time)'
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
})

// Graphs displaying the total number of students by program.
getDataProgram().then((data) => {
    var ctx = document.getElementById("myChart2").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Undergraduate", "Graduate"],
            datasets: [{
                data: data,
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
                text: 'Total Number of Students (by Program)'
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

var ctx2 = document.getElementById("myChart8").getContext('2d');

var secondChart = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ["Undergraduate","Graduate"],
    datasets: [{
      backgroundColor: [
        "#9C89B8",
        "#F0A6CA",
      ],
      data: data
    }]
  },
  options: {
    title: {
        display: true,
        text: 'Total Number of Students (by Program)'
    },
    responsive: true,
    maintainAspectRatio: false
  }
});
})

// Graphs displaying the total number of students by gender.
getDataGender().then((data) => {
var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Male", "Female", "Non-Binary", "Other", "Unspecified"],
        datasets: [{
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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
            text: 'Total Students by Gender'
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


var ctx2 = document.getElementById("myChart6").getContext('2d');

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
                  data: [14, 14, 4, 1, 1]
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
})

// Graphs displaying the total number of students by ethnicity.
getDataRace().then((data) => {
var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Other Pacific Islander", "White"],
                    datasets: [{
                        data: data,
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

            var ctx2 = document.getElementById("myChart7").getContext('2d');

            var secondChart = new Chart(ctx2, {
              type: 'doughnut',
              data: {
                labels: ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Other Pacific Islander", "White"],
                datasets: [{
                  backgroundColor: [
                    "#9C89B8",
                    "#F0A6CA",
                    "#EFC3E6",
                    "#F0E6EF",
                    "#B8BEDD",
                    '#C64747'
                  ],
                  data: data
                }]
              },
              options: {
                title: {
                    display: true,
                    text: 'Total Number of Students (by Ethnicity)'
                },
                responsive: true,
                maintainAspectRatio: false
              }
            });
})


// Listen for graph choices.
$(function() {
    $('#chartType').change(function(){
        $('.chartChoice').hide();
        $('#' + $(this).val()).show();
    });
});

$(function() {
    $('#pieType').change(function(){
        $('.pieChoice').hide();
        $('#' + $(this).val()).show();
    });
});







///////////////////
///////////////////









// // Bar graph displaying the total number of students by ethnicity.
// var ctx = document.getElementById("myChart").getContext('2d');
//             var myChart = new Chart(ctx, {
//                 type: 'bar',
//                 data: {
//                     labels: ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Other Pacific Islander", "White"],
//                     datasets: [{
//                         data: [2, 7, 5, 3, 2, 15],
//                         backgroundColor: [
//                             'rgba(255, 99, 132, 0.2)',
//                             'rgba(54, 162, 235, 0.2)',
//                             'rgba(255, 206, 86, 0.2)',
//                             'rgba(75, 192, 192, 0.2)',
//                             'rgba(153, 102, 255, 0.2)',
//                             'rgba(255, 159, 64, 0.2)'
//                         ],
//                         borderColor: [
//                             'rgba(255,99,132,1)',
//                             'rgba(54, 162, 235, 1)',
//                             'rgba(255, 206, 86, 1)',
//                             'rgba(75, 192, 192, 1)',
//                             'rgba(153, 102, 255, 1)',
//                             'rgba(255, 159, 64, 1)'
//                         ],
//                         borderWidth: 1
//                     }]
//                 },
//                 options: {
//                     title: {
//                         display: true,
//                         text: 'Total Number of Students (by Ethnicity)'
//                     },
//                     legend:{
//                         display: false
//                     },
//                     scales: {
//                         yAxes: [{
//                             ticks: {
//                                 beginAtZero:true
//                             }
//                         }]
//                     }
//                 }
//             });

// Bar graph displaying the total number of students by program.
// var ctx = document.getElementById("myChart2").getContext('2d');
//             var myChart = new Chart(ctx, {
//                 type: 'bar',
//                 data: {
//                     labels: ["Undergraduate", "Graduate"],
//                     datasets: [{
//                         data: [20, 13],
//                         backgroundColor: [
//                             'rgba(255, 99, 132, 0.2)',
//                             'rgba(54, 162, 235, 0.2)',
//                             'rgba(255, 206, 86, 0.2)',
//                             'rgba(75, 192, 192, 0.2)',
//                             'rgba(153, 102, 255, 0.2)',
//                             'rgba(255, 159, 64, 0.2)'
//                         ],
//                         borderColor: [
//                             'rgba(255,99,132,1)',
//                             'rgba(54, 162, 235, 1)',
//                             'rgba(255, 206, 86, 1)',
//                             'rgba(75, 192, 192, 1)',
//                             'rgba(153, 102, 255, 1)',
//                             'rgba(255, 159, 64, 1)'
//                         ],
//                         borderWidth: 1
//                     }]
//                 },
//                 options: {
//                     title: {
//                         display: true,
//                         text: 'Total Number of Students (by Program)'
//                     },
//                     legend:{
//                         display: false
//                     },
//                     scales: {
//                         yAxes: [{
//                             ticks: {
//                                 beginAtZero:true
//                             }
//                         }]
//                     }
//                 }
//             });

// Bar graph displaying the total number of students by time to complete degree.
// var ctx = document.getElementById("myChart3").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["2 years", "3 years", "4 years", "5 years", "6 years"],
//         datasets: [{
//             data: [9, 5, 15, 3, 1],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             text: 'Total Students by Time Taken to Complete Degree'
//         },
//         legend:{
//             display: false
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

// // Bar graph displaying the total number of students by gender.
// var ctx = document.getElementById("myChart4").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Male", "Female", "Non-Binary", "Other", "Unspecified"],
//         datasets: [{
//             data: genderData,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             text: 'Total Students by Gender'
//         },
//         legend:{
//             display: false
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

// Bar graph displaying the total number of students by graduation year.
// var ctx = document.getElementById("myChart5").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
//         datasets: [{
//             data: [1, 1, 5, 2, 4, 1, 3, 6, 6, 2, 1, 1],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(156, 137, 184, 0.2)',
//                 'rgba(240, 166, 202, 0.2)',
//                 'rgba(239, 195, 230, 0.2)',
//                 'rgba(240, 230, 239, 0.2)',
//                 'rgba(184, 190, 221, 0.2)',
//                 'rgba(65, 234, 212, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255,99,132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(156, 137, 184, 1)',
//                 'rgba(240, 166, 202, 1)',
//                 'rgba(239, 195, 230, 1)',
//                 'rgba(240, 230, 239, 1)',
//                 'rgba(184, 190, 221, 1)',
//                 'rgba(65, 234, 212, 1)',
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             text: 'Total Students by Graduation Year'
//         },
//         legend:{
//             display: false
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

// Bar graph displaying the total number of students by school.
// var ctx = document.getElementById("myChart11").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["College of Liberal Arts", "Graduate School", "Meek School of Journalism", "School of Accountancy", "School of Applied Science", "School of Business Administration", "School of Education", "School of Engineering", "School of Law", "School of Pharmacy"],
//         datasets: [{
//             data: [12, 9, 0, 1, 2, 5, 1, 2, 0, 0],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(156, 137, 184, 0.2)',
//                 'rgba(240, 166, 202, 0.2)',
//                 'rgba(239, 195, 230, 0.2)',
//                 'rgba(240, 230, 239, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255,99,132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(156, 137, 184, 1)',
//                 'rgba(240, 166, 202, 1)',
//                 'rgba(239, 195, 230, 1)',
//                 'rgba(240, 230, 239, 1)',
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             text: 'How Many Students Study English? (By School)'
//         },
//         legend:{
//             display: false
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

// Bar graph displaying the total number of students by concentration.
// var ctx = document.getElementById("myChart12").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Major", "Minor"],
//         datasets: [{
//             data: [19, 13],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255,99,132, 1)',
//                 'rgba(54, 162, 235, 1)',
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             text: 'How many students study English? (By Major and Minor)'
//         },
//         legend:{
//             display: false
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });


// // Doughnut graph displaying total students by gender identity.
// var ctx2 = document.getElementById("myChart6").getContext('2d');

//             var secondChart = new Chart(ctx2, {
//               type: 'doughnut',
//               data: {
//                 labels: ["Male", "Female", "Non-Binary", "Other", "Unspecified"],
//                 datasets: [{
//                   backgroundColor: [
//                     "#9C89B8",
//                     "#F0A6CA",
//                     "#EFC3E6",
//                     "#F0E6EF",
//                     "#B8BEDD",
//                   ],
//                   data: [14, 14, 4, 1, 1]
//                 }]
//               },
//               options: {
//                 title: {
//                     display: true,
//                     text: 'Total Number of Students (by Gender)'
//                 },
//                 responsive: true,
//                 maintainAspectRatio: false
//               }
//             });

// Doughnut graph displaying total students by ethnicity.
// var ctx2 = document.getElementById("myChart7").getContext('2d');

// var secondChart = new Chart(ctx2, {
//   type: 'doughnut',
//   data: {
//     labels: ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Other Pacific Islander", "White"],
//     datasets: [{
//       backgroundColor: [
//         "#9C89B8",
//         "#F0A6CA",
//         "#EFC3E6",
//         "#F0E6EF",
//         "#B8BEDD",
//         '#C64747'
//       ],
//       data: [2, 7, 5, 3, 2, 15]
//     }]
//   },
//   options: {
//     title: {
//         display: true,
//         text: 'Total Number of Students (by Ethnicity)'
//     },
//     responsive: true,
//     maintainAspectRatio: false
//   }
// });

// Doughnut graph displaying total students by program.
// var ctx2 = document.getElementById("myChart8").getContext('2d');

// var secondChart = new Chart(ctx2, {
//   type: 'doughnut',
//   data: {
//     labels: ["Undergraduate","Graduate"],
//     datasets: [{
//       backgroundColor: [
//         "#9C89B8",
//         "#F0A6CA",
//       ],
//       data: [20, 13]
//     }]
//   },
//   options: {
//     title: {
//         display: true,
//         text: 'Total Number of Students (by Program)'
//     },
//     responsive: true,
//     maintainAspectRatio: false
//   }
// });

// Doughnut graph displaying total students by completion time.
// var ctx2 = document.getElementById("myChart9").getContext('2d');

// var secondChart = new Chart(ctx2, {
//   type: 'doughnut',
//   data: {
//     labels: ["2 years", "3 years", "4 years", "5 years", "6 years"],
//     datasets: [{
//       backgroundColor: [
//         "#9C89B8",
//         "#F0A6CA",
//         "#4B8E78",
//         "#F4E285",
//         "#C64747"
//       ],
//       data: [9, 5, 15, 3, 1]
//     }]
//   },
//   options: {
//     title: {
//         display: true,
//         text: 'Total Number of Students (by Completion Time)'
//     },
//     responsive: true,
//     maintainAspectRatio: false
//   }
// });

// Doughnut graph displaying total students by graduation year.
// var ctx2 = document.getElementById("myChart10").getContext('2d');

// var secondChart = new Chart(ctx2, {
//   type: 'doughnut',
//   data: {
//     labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
//     datasets: [{
//       backgroundColor: [
//         "#9C89B8",
//         "#F0A6CA",
//         "#4B8E78",
//         "#F4E285",
//         "#C64747",
//         "#F4A259",
//         "#0094C6",
//         "#001242",
//         "#FE6951",
//         "#D8E4D4",
//         "#CBB0F4",
//         "#F8CDCB"
//       ],
//       data: [1, 1, 5, 2, 4, 1, 3, 6, 6, 2, 1, 1]
//     }]
//   },
//   options: {
//     title: {
//         display: true,
//         text: 'Total Number of Students (by Completion Time)'
//     },
//     responsive: true,
//     maintainAspectRatio: false
//   }
// });

// Doughnut graph displaying total students by school.
// var ctx2 = document.getElementById("myChart13").getContext('2d');

// var secondChart = new Chart(ctx2, {
//   type: 'doughnut',
//   data: {
//     labels: ["College of Liberal Arts", "Graduate School", "Meek School of Journalism", "School of Accountancy", "School of Applied Science", "School of Business Administration", "School of Education", "School of Engineering", "School of Law", "School of Pharmacy"],
//     datasets: [{
//       backgroundColor: [
//         "#9C89B8",
//         "#F0A6CA",
//         "#4B8E78",
//         "#F4E285",
//         "#C64747",
//         "#F4A259",
//         "#0094C6",
//         "#001242",
//         "#FE6951",
//         "#D8E4D4",
//       ],
//       data: [12, 9, 0, 1, 2, 5, 1, 2, 0, 0]
//     }]
//   },
//   options: {
//     title: {
//         display: true,
//         text: 'How many students study English? (By School)'
//     },
//     responsive: true,
//     maintainAspectRatio: false
//   }
// });

// // Doughnut graph displaying total students by concentration.
// var ctx2 = document.getElementById("myChart14").getContext('2d');

// var secondChart = new Chart(ctx2, {
//   type: 'doughnut',
//   data: {
//     labels: ["Major", "Minor"],
//     datasets: [{
//       backgroundColor: [
//         "#9C89B8",
//         "#F0A6CA",
//       ],
//       data: [19, 13]
//     }]
//   },
//   options: {
//     title: {
//         display: true,
//         text: 'How many students study English? (By School)'
//     },
//     responsive: true,
//     maintainAspectRatio: false
//   }
// });


/////
// Map visualization code.
/////

Plotly.d3.csv('locations.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }
var cityName = unpack(rows, 'name'),
    cityPop = unpack(rows, 'pop'),
    cityLat = unpack(rows, 'lat'),
    cityLon = unpack(rows, 'lon'),
    color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
    citySize = [],
    hoverText = [],
    scale = 0.3;

for ( var i = 0 ; i < cityPop.length; i++) {
  var currentSize = cityPop[i] / scale;
  var currentText = cityName[i] + "<br>Population: " + cityPop[i];
  citySize.push(currentSize);
  hoverText.push(currentText);
}

  var data = [{
   type: 'scattergeo',
   locationmode: 'USA-states',
   lat: cityLat,
   lon: cityLon,
   text: hoverText,
   hoverinfo: 'text',
   marker: {
     size: citySize,
     line: {
       color: 'black',
       width: 2
     },
     
   }
}];

var layout = {
    title: 'Student Distribution from within the United States',
    showlegend: false,
    geo: {
      scope: 'usa',
      projection: {
        type: 'albers usa'
      },
      showland: true,
      landcolor: 'rgb(217, 217, 217)',
      subunitwidth: 1,
      countrywidth: 1,
      subunitcolor: 'rgb(255,255,255)',
      countrycolor: 'rgb(255,255,255)'
    },
};

Plotly.plot(myDiv, data, layout, {showLink: false});
});