$(document).ready(function(){
    // Attach an event listener to the input fields with IDs "p2", "p1", "e1", and "n1"
    $("#p2, #p1, #e1, #n1").on('input', function() {
        // Get the values of the input fields
        var cp = $("#p2").val();
        var mrp = $("#n1").val();
        var loc = $("#e1").val();
        var mfg = $("#p1").val();

        // Update elements with the obtained values
        document.getElementById("p-mrp").innerHTML = `MRP RS. ${mrp}/-`;
        document.getElementById("loc").innerHTML = `Loct No. ${loc}`;
        document.getElementById("mfg").innerHTML = `Mfg.Date ${mfg}`;

        // Generate barcode using JsBarcode library
        JsBarcode("#barcode", cp, {  
            lineColor: "black",
            width: 6,
            height: 100,
            displayValue: true
        });
    });
});

function printDiv() {
    window.print();
  }
