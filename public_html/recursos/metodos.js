
function trapezoidal() {
    
    var obj = form.getFormData();

    var h = (obj.b - obj.a) / obj.intervalos;

    var tablaTrapezoidalGrid = campo2.attachGrid();

    tablaTrapezoidalGrid.setHeader("Intervalo,X,"+obj.funcion);
    tablaTrapezoidalGrid.setColumnIds("i,x,y");
    tablaTrapezoidalGrid.setColTypes("ro,ro,ro");
    tablaTrapezoidalGrid.init();
       
    var inicio = parseInt(obj.a, 10); 
    var fin = parseInt(obj.intervalos, 10); 
    var xs = inicio;
    
    for (var i = inicio; i < fin+2; i++) {
        var  x = Math.round(xs*100)/100; 
        var data = [i,x,eval(obj.funcion)];
        tablaTrapezoidalGrid.addRow(i,data );
        xs+=h;     
    }  
    var values =tablaTrapezoidalGrid.collectValues(2);    
    var suma = 0; 
    
    for(var i = 0; i < fin; i++ ){
       suma +=  parseInt(values[i]);
    }   
    console.log(values);
}


