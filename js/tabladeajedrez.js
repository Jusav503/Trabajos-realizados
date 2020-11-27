var createChessTable = function(rows, cols){
    var table = '<table>';
    var bn = false;

    for (var i=0; i < rows; i++){
    
        console.log(i);
        table+='<tr>';
            if(i%2==0)bn = true;
            else bn = false;
            
            for (var j=0; j < cols; j++){

            if (!bn) classBn = 'black';
            else classBn = 'white';
            table+= '<td class='+classBn+'>';
            table+= i +'-'+j;
            table+= '</td>';
            bn = !bn;
            
        }
        table+='</tr>';
        
    }
    table+='</table>';  //table = table + '</table>'
    return table;
}

var ct = createChessTable(7,7);

document.getElementById('container').innerHTML = ct;