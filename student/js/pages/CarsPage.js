function createCarsTable(){
    $.get("cars", function (req, res) {
        if(res === "success" & req!=null)
            createTable(["Name","Consumption","Color","Manufacturer","Available","Year","Horsepower"], req,
                ["name", "consumption", "color","manufacturer", "available", "year","horsepower"]);
    });
}
/*function addCar(){
    addFunction(["name", "consumption", "color", "manufacturer", "available", "year", "horsepower"]);
    if(y==-1) {
        $.post("addCar", newArray).done(function () {
            createCarsTable();
        })
            .fail(function () {
                alert("Manufacturer already exists");
            });
        y = 0;
    }else{
        y=0;
        return;
    }
}*/
function addCar() {
    /*var a = document.getElementById("name").value;
    var b = document.getElementById("consumption").value;
    var c = document.getElementById("color").value;
    var d = document.getElementById("manufacturer").value;
    var e = document.getElementById("available").value;
    var f = document.getElementById("year").value;
    var g = document.getElementById("horsepower").value;
    */
    var a = $("#name").val();
    var b = $("#consumption").val();
    var c = $("#color").val();
    var d = $("#manufacturer").val();
    var e = $("#available").val();
    var f = $("#year").val();
    var g = $("#horsepower").val();

    var array = {};
    if(!isNumber(b) || nullorEmpty(b)) {
        alert("Wrong consumption input");
        return;
    }
    if(!isNumber(e) || nullorEmpty(e)) {
        alert("Wrong available input");
        return;
    }
    if(!isNumber(f) || nullorEmpty(f)) {
        alert("Wrong year input");
        return;
    }
    if(!isNumber(g) || nullorEmpty(g)) {
        alert("Wrong horsepower input");
        return;
    }
    if(nullorEmpty(a)){
        alert("Wrong name input");
        return;
    }
    if(nullorEmpty(c)){
        alert("Wrong color input");
        return;
    }
    if(nullorEmpty(d)) {
        alert("Wrong manufacturer input");
        return;
    }
        b += "l/100km";
    array = {"name" :a,"consumption":b,"color":c,"manufacturer":d,"available":e,"year":f,"horsepower":g};
    $.post("addCar", array).done(function() {
        createCarsTable();
    })
        .fail(function() {
            alert("Car already exists");
        });
}