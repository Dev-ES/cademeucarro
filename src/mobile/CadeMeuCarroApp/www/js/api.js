var api = {
    buscar : function () {
        var placa = document.getElementById("placa").value;
        if (placa === '') return 

        var el =  document.getElementById('result-set');
        el.innerHTML = "";
        el.appendChild(printer.aguarde());

        http.get("/plates/search", {
            params: {
                plate: placa
            }
        }).then(function(response) {
            
            el.innerHTML = "";
            
            printer.addRow(el, response.data.model, 'Modelo');
            printer.addRow(el, response.data.year, 'Ano');
            printer.addRow(el, response.data.color, 'Cor');
            printer.addRow(el, response.data.plate, 'Placa');
            printer.addRow(el, response.data.city, 'Cidade');
            printer.addRow(el, response.data.state, 'Estado');
            
            if (response.data.isStolen) {
                printer.addRow(el, 'Roubado em' + response.data.stolenOn ? response.data.stolenOn : ' Sem informa&ccedil;&atilde;es... ', 'Situa&ccedil;&atilde;o');
            } else {
                printer.addRow(el, response.data.status);
            }
        })
    }
}