console.log('forms and js');

//reading form data
document.getElementById('submit').addEventListener('click', function(){
    var name = document.getElementById('name').value;
    console.log(name);

    var address = document.getElementById('address').value;
    console.log(address);

    document.getElementsByTagName('div')[1].innerHTML = '</br>' +name + '</br>' + address;
});


//Performance Assessment
var names=[];
var projectA =[];
var projectB =[];
var projectC =[];
var averagePerformance = [];

var bestScore = 0;

var n = parseInt(prompt('Enter the number of employees'));

document.getElementById('saveData').addEventListener('click', function(){
console.log(names.length);
     if (names.length < n){

    var ename = document.getElementById('ename').value;
    console.log(ename);

    var projA = parseInt(document.getElementById('projectA').value);
    console.log(projA);
    var projB = parseInt(document.getElementById('projectB').value);
    console.log(projB);
    var projC = parseInt(document.getElementById('projectC').value);
    console.log(projC);

    var average = ((projA + projB + projC)/3).toFixed(2);
    console.log(average);

    document.getElementById('formsData').innerHTML += '</br>' +ename + '</br>' + projA + '</br>' + projB + '</br>' + projC  + '</br>' + average + '<br>';

    document.getElementById('average').value = average;

    names.push(ename);
    projectA.push(projA);
    projectB.push(projB);
    projectC.push(projC);
    averagePerformance.push(average);
    console.log(names, projectA, projectB, projectC, averagePerformance);
  } else {
    alert('Sorry,cannot store more employees\' details');
  }

  for (i=0; i<names.length; i++){
    if (bestScore < parseInt(averagePerformance[i])){
      bestScore = averagePerformance[i];
      var listIndex = i;
      console.log(bestScore);
      document.getElementById('bestData').innerHTML = "<br>The best score is: " + names[i] + " at " + bestScore + "%";
    }
  }

});


document.getElementById('anotherData').addEventListener('click',function(){
  document.getElementById('ename').value = " ";
  document.getElementById('projectA').value = " ";
  document.getElementById('projectB').value = " ";
  document.getElementById('projectC').value = " ";
  document.getElementById('average').value = " ";
});
