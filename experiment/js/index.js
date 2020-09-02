function CalculateArea() {
    var radius = document.form1.txtRadius.value;
    var x = document.getElementById("unit").value;
    alert("The area of the circle is " + (radius * radius * Math.PI) + x);
}
function CalculateCircumference() {
    var radius = document.form1.txtRadius.value;
    var x = document.getElementById("unit").value;
    window.alert("The circumference of the circle is " + (2 * radius * Math.PI) + x);
    
}

