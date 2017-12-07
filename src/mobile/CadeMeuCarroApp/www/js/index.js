function onBackKeyDown(evt) {

}

var application = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('load', this.onLoad, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onLoad: function() {

    },

    onDeviceReady: function() {
        document.addEventListener("backbutton", onBackKeyDown, false);
    }
};

var api = {
    buscar : function () {
        //TODO: Criar um aguarde.....
        
        var placa = document.getElementById("placa").value;
        var putData = function (el, dataValue, labelValue) {
            var row = document.createElement('div')
            row.classList.add('row');

            var label = document.createElement('label');
            label.classList.add('form-label');
            label.innerText = labelValue;
            
            if (labelValue) {
                var colSM = document.createElement('div');
                colSM.classList.add('col-xs-3');
                colSM.appendChild(label);
                
                var data = document.createElement('label');
                data.classList.add('label-form');
                data.innerText = dataValue;
            
                var colLG = document.createElement('div');
                colLG.classList.add('col-xs-8');
                colLG.appendChild(data);
    
                row.appendChild(colSM);
                row.appendChild(colLG);
            } else {
                var data = document.createElement('label');
                data.innerText = dataValue;
                
                var singleCol = document.createElement('div');
                singleCol.classList.add('col-xs-12');
                singleCol.appendChild(data);
                
                row.appendChild(singleCol);
            }

            el.appendChild(row);
        }

        axios.get("http://api.cademeucarro.org/plates/search?plate="+placa).then(function(response) {
            var el =  document.getElementById('result-set');
            
            el.innerHTML = "";
            
            putData(el, response.data.model, 'Modelo');
            putData(el, response.data.year, 'Ano');
            putData(el, response.data.color, 'Cor');
            putData(el, response.data.plate, 'Placa');
            putData(el, response.data.city, 'Cidade');
            putData(el, response.data.state, 'Estado');
            
            if (response.data.isStolen) {
                putData(el, 'Roubado em' + response.data.stolenOn ? response.data.stolenOn : ' Sem informa&ccedil;&atilde;es... ', 'Situa&ccedil;&atilde;o');
            } else {
                putData(el, response.data.status);
            }
        })
    }
}