var printer = {
    aguarde: function () {
        var panel = document.createElement('div');
        panel.classList.add('alert');
        panel.classList.add('alert-lg');
        panel.classList.add('alert-warning');
        
        var span = document.createElement('span');
        span.classList.add('fa');
        span.classList.add('fa-refresh');
        span.classList.add('fa-spin');
        
        var label = document.createElement('label');
        label.innerText = 'Aguarde...';
        
        panel.appendChild(span);
        panel.appendChild(label);

        return panel;
    },

    addRow: function (el, dataValue, labelValue) {
        var row = document.createElement('div')
        row.classList.add('row');

        var label = document.createElement('label');
        label.classList.add('label-bombada');
        label.innerText = labelValue;
        
        if (labelValue) {
            var colSM = document.createElement('div');
            colSM.classList.add('col-xs-3');
            colSM.appendChild(label);
            
            var data = document.createElement('label');
            data.classList.add('label-bombada');
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
            singleCol.classList.add('label-bombada');
            singleCol.classList.add('col-xs-12');
            singleCol.appendChild(data);
            
            row.appendChild(singleCol);
        }

        el.appendChild(row);
    }      
}