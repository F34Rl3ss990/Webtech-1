function createManufacturerTable(){
$.get("manufacturers", function (req, res) {
    if(res === "success" && req!=null)
        createTable(["Name","Country","Founded"], req,  ["name", "country", "founded"]);
    });
}


/*function addManufacturer() {
    addFunction(["name", "country", "founded"], ["founded"], ["name", "country"]);
    if (y == -1) {
        $.post("addManufacturers", newArray).done(function () {
            createManufacturerTable();
        })
            .fail(function () {
                alert("Manufacturer already exists");
            });
    y=0;
    }else{
        y=0;
        return;
    }
}
*/

function addManufacturer() {
    /*var a = document.getElementById("name").value;
    var b = document.getElementById("country").value;
    var c = document.getElementById("founded").value;
    */
    var a = $("#name").val();
    var b = $("#country").val();
    var c = $("#founded").val();

    var array = {};
    if(nullorEmpty(a)) {
        alert("Wrong name input");
        return;
    }
    if(nullorEmpty(b)) {
        alert("Wrong country input");
        return;
    }
    if(nullorEmpty(c)) {
        alert("Wrong founded input");
        return;
    }
   c = convertDate(c);
    array = {"name" : a,"country": b,"founded": c};
    $.post("addManufacturers", array).done(function() {
        createManufacturerTable();
    })
        .fail(function() {
            alert("Manufacturer already exists");
        });
}
