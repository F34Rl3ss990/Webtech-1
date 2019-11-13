function createManufacturerTable(){
$.get("manufacturers", function (req, res) {
    if(res === "success" && req!=null)
        createTable(["Name","Country","Founded"], req,  ["name", "country", "founded"]);
    });
}

function addManufacturer() {
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
