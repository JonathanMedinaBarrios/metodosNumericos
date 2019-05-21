
function trapezoidal() {

    var obj = form.getFormData();

    var h = (obj.b - obj.a) / obj.intervalos;

    var tablaTrapezoidalGrid = campo2.attachGrid();

    tablaTrapezoidalGrid.setHeader("Intervalo,X," + obj.funcion);
    tablaTrapezoidalGrid.setColumnIds("i,x,y");
    tablaTrapezoidalGrid.setColTypes("ro,ro,ro");
    tablaTrapezoidalGrid.init();

    var inicio = parseInt(obj.a, 10);
    var fin = parseInt(obj.intervalos, 10);
    var xs = inicio;

    for (var i = inicio; i < fin + 2; i++) {
        var x = Math.round(xs * 100) / 100;
        var data = [i, x, eval(obj.funcion)];
        tablaTrapezoidalGrid.addRow(i, data);
        xs += h;
    }
    //var values =tablaTrapezoidalGrid.collectValues(2);    
    var suma = 0;
    var valorInicio;
    var valorFin;
    var values = [];
    for (var i = inicio; i < fin + 2; i++) {
        //suma +=  parseInt(values[i]);
        tablaTrapezoidalGrid.forEachCell(i, function (cellObj, ind) {
            var cn = tablaTrapezoidalGrid.getColumnId(ind);// Nombre de la columna
            values[cn] = cellObj.getValue();
        });
        if (values.i > inicio && values.i < fin + 1) {
            suma += parseFloat(values.y);
        } else if (values.i == inicio) {
            valorInicio = parseFloat(values.y);
        } else {
            valorFin = parseFloat(values.y);
        }

    }
    console.log(valorInicio);
    console.log(valorFin);
    console.log(suma);
    var resultado = h * ((valorInicio / 2) + suma + (valorFin / 2));

}


