function cookies() {
    document.cookie = "name="+$('#name').val();
    console.log(document.cookie);
    $.get("manufacturer", (document.cookie), function(req,res) {
        if(res === "success" && req!=null)
            createTable(["Name","Consumption","Color","Manufacturer","Available","Year","Horsepower"], req,
                ["name", "consumption", "color","manufacturer", "available", "year","horsepower"]);
    });
}