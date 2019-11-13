function createTable (headerNames, data, tableDatas)  {
    $("#dynamicTable").empty();
    let table = $('<table>');
    let header = "<tr>";
    headerNames.map(headerName => {
        header += "<th>" + headerName + "</th>";
    });
    header += "</tr>";
    table.append(header);
    for (let i =0; i<data.length;i++){
        let row ="<tr>";
        for (let j=0; j<tableDatas.length;j++){
            row+= "<td>" + data[i][tableDatas[j]] + "</td>";
        }
        row += "</tr>";
        table.append(row);
    };
    $("#dynamicTable").append(table);
};
function isNumber (num){
    return !isNaN(num);
};

function nullorEmpty(src){
    return src == null || src ==="";
}

function reset() {
    $("#name").val("");
    $("#color").val("");
    $("#consumption").val("1l/100km");
    $("#manufacturer").val("");
    $("#available").val("");
    $("#year").val("");
    $("#horsepower").val("");
};
function reset2(){
    $("#name").val("");
    $("#country").val("");
    $("#founded").val("");
};
function myHelpFunction() {
    var x = document.getElementById("list2");
    return x;
};
var c=2;
function toggleFunction(){
    myHelpFunction();
    var a = document.getElementById("main-content");
    var y = document.getElementById("header");

    if(myHelpFunction().style.display === "none"){
        myHelpFunction().style.display = "block";
        myHelpFunction().style.marginBottom = 'calc(-100vh + 32px)';
        a.style.paddingLeft = "205px";
        y.style.marginLeft = "205px";
    } else {
        myHelpFunction().style.display = "none";
        a.style.paddingLeft = "0px";
        y.style.marginLeft = "0px";
    }
    c++;
    console.log(c);
};
function myFunction(zs) {
    var y = document.getElementById("header");
    var a = document.getElementById("main-content");
    if(zs.matches && (c%2)!=0){
        myHelpFunction().style.display = "block";
        if(y.style.marginLeft== "0px") {
            y.style.marginLeft = "205px";
        }
        if(a.style.paddingLeft= "0px"){
            a.style.paddingLeft = "205px";
        }
    }else{
        myHelpFunction().style.display = "none";
        y.style.marginLeft = "0px";
        }
    if(zs.matches && (c%2)==0){
        a.style.paddingLeft = "0px";
    }else {
        if(a.style.paddingLeft = "0px" && (c%2)==0){
            a.style.paddingLeft = "205px";
        }
    }
}
var zs = window.matchMedia("(max-width: 800px)");
myFunction(zs);

function cookie(x) {
    $.get("manufacturers", function (req, res) {
        if (res === "success" && req != null) {
            var z = document.getElementById(x);
            var option = document.getElementById("option");
            if (z.length !=0) {
            $('#x').empty();
            }
                for (var m of req) {
                    var y = m.name;
                    option = document.createElement("option");
                    option.text = y;
                    z.add(option);
                }
        }
    });
}

function datePicker() {
    $("#founded").datepicker();
    $("#founded").datepicker("option", "dateFormat", "mm-dd-yy");
};

function convertDate(src){
    var x = src.split("-");
    var year = x[2];
    var month = x[0];
    var day = x[1];

        switch (month) {
        case '01':
            month = "January";
            break;
        case '02':
            month = "February";
            break;
        case '03':
            month = "March";
            break;
        case '04':
            month = "April";
            break;
        case '05':
            month = "May";
            break;
        case '06':
            month = "June";
            break;
        case '07':
            month = "July";
            break;
        case '08':
            month = "August";
            break;
        case '09':
            month = "September";
            break;
        case '10':
            month = "October";
            break;
        case '11':
            month = "November";
            break;
        case '12':
            month = "December";
            break;
        default:
            break;
        }
        return month +" " +  day + ", " + year;
    }
