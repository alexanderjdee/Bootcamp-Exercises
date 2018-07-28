newEmployee = {
    name: "",
    role: "",
    startDate: "",
    monthlyRate: 0,
    totalBill: 0
 }

 var config = {
    apiKey: "AIzaSyAwD-bR78Ri9ENsovjIf_7q53FGZjmuC30",
    authDomain: "employee-timesheet-c8b1c.firebaseapp.com",
    databaseURL: "https://employee-timesheet-c8b1c.firebaseio.com",
    projectId: "employee-timesheet-c8b1c",
    storageBucket: "employee-timesheet-c8b1c.appspot.com",
    messagingSenderId: "380950562642"
  };
  
  firebase.initializeApp(config);

  var database = firebase.database();
 
 $("#submit").on("click", function(event){

    event.preventDefault();
    
    if($("#employee-name").val().trim() == ""){

        console.log("sdfasfsdafdf");
        alert("A name must be entered");
        return false;

    
    }else{
        newEmployee.name = $("#employee-name").val().trim();
        
    }

        newEmployee.role = $("#employee-role").val().trim();

    if(moment($("#employee-startdate").val().trim()) > moment(new Date())){

        alert("invalid date");
        return false;
    

    }else{
        newEmployee.startDate = $("#employee-startdate").val().trim();
    }
        
    newEmployee.monthlyRate = $("#employee-monthly-rate").val().trim();

    console.log(newEmployee.name);
    console.log(newEmployee.role);
    console.log(newEmployee.startDate);
    console.log(newEmployee.monthlyRate);

    

    database.ref().push({
        name: newEmployee.name,
        role: newEmployee.role,
        startDate: newEmployee.startDate,
        monthlyRate: newEmployee.monthlyRate,
    });



 });

 database.ref().on("child_added", function(snapshot){
    
    var row = $("<tr>");
 
    var data1 = $("<td>");
    $(data1).html(snapshot.val().name);
    row.append(data1);
 
    var data2 = $("<td>");
    $(data2).html(snapshot.val().role);
    row.append(data2);
 
    var data3 = $("<td>");
    $(data3).html(snapshot.val().startDate);
    row.append(data3);

    var data4 = $("<td>");

    var now = moment(new Date());
    var end = moment(snapshot.val().startDate);
    var duration = moment.duration(now.diff(end));
    var months = duration.asMonths();

    console.log(months);
    $(data4).html(Math.floor(months));
    row.append(data4);
 
    var data5 = $("<td>");
    $(data5).html(snapshot.val().monthlyRate);
    row.append(data5);

    var data6 = $("<td>");
    var total = Math.floor(months) * snapshot.val().monthlyRate;

    $(data6).html("$" + total);
    row.append(data6);

 
    $("table").append(row);
 },function(errorObject){
    console.log("The read failed: " + errorObject.code);
 });
