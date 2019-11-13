function createCarsTable(){
    $.get("cars", function (req, res) {
        if(res === "success" & req!=null)
            createTable(["Name","Consumption","Color","Manufacturer","Available","Year","Horsepower"], req,
                ["name", "consumption", "color","manufacturer", "available", "year","horsepower"]);
    });
}

function addCar() {
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