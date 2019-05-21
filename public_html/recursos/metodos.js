
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

    for (var i = 0; i < fin + 1; i++) {
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

    myLineChart = campo4.attachChart({
        view: "spline",
        value:"#sales#",
        item: {
            borderColor: "#fbfbfb;",
            color: "#000000"
        },
        line: {
            color: "#ff9900",
            width: 2
        },
        xAxis: {
            template: "'#x#"
        },
        offset: 0,
        yAxis: {
            start: 0,
            end: valorFin,
            step:10,
            template: function (value) {
                return value % 1 ? "" : value
            }
        }
    });

    for (var i = 0; i < fin + 1; i++) {
        //suma +=  parseInt(values[i]);
        tablaTrapezoidalGrid.forEachCell(i, function (cellObj, ind) {
            var cn = tablaTrapezoidalGrid.getColumnId(ind);// Nombre de la columna
            values[cn] = cellObj.getValue();
        });
        myLineChart.add({
            x: values.x,
            sales:values.y
        });
        //console.log(values);
        if (values.x > inicio && values.i < fin) {
            suma += parseFloat(values.y);
        } else if (values.x == inicio) {
            valorInicio = parseFloat(values.y);
        } else {
            valorFin = parseFloat(values.y);
        }

    }

    dataview = campo3.attachDataView({
        type: {
            //template: loadTemplate('recursos/tamplate/trapezoidal.html'),
            template: "Límite inferior: a=#limitea#<br/><br/>\n\
                      Límite superior: b=#limiteb#<br/><br/>\n\
                      Número de subintervalos: n=#intervalos#<br/><br/>\n\
                      La longitud de un subintervalo: h=#h#<br/><br/>\n\
                      <spam>Resultado final: </spam>#resultado#",
            width: 500
        }
    });
    var resultado = h * ((valorInicio / 2) + suma + (valorFin / 2));

    dataview.add({
        limitea: inicio,
        limiteb: obj.b,
        intervalos: fin,
        h: h,
        resultado: resultado
    });

    console.log(valorInicio);
    console.log(valorFin);
    console.log(suma);
    //console.log(resultado);*/
}

