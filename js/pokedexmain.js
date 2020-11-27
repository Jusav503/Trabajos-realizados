var mydata = JSON.parse(pokemon);

console.log(mydata);


galleryPokedex= function(list){
    var div1 = '<div class="content">'
    
    for (var i=0; i < list.length; i++){
        div1+='<div class="gallery '+recorrerJ(list[i].type)+'  ">'
        
            div1+= '<h4>' + list[i].name.english + '<br>' + list[i].name.japanese + '<br>' + list[i].name.chinese + '<br>' + list[i].name.french +'</h4>';
            div1+= '<div class="type"><p><br>'+'Type: '+ list[i].type + '</p><br><br><br><br><br></div>';
            div1+= '<div class="type2">'+'Base: '+ list[i].base.HP +'<br>'+'Attack: '+ list[i].base.Attack+'<br>'+'Defense: '+ list[i].base.Defense + '<br>' + 'Speed: '+list[i].base.Speed + '<br>'+'Sp. Attack: '+list[i].base['Sp. Attack'] + '</div>';
        div1+='</div>'
    }
    return div1+='</div>';
}
recorrerJ=function(list){
    var tipo = '';

    for(var j=0; j < list.length; j++){
        tipo+=list[j] + ' ';
    }
    return tipo;
}
document.getElementById('main').innerHTML = galleryPokedex(mydata);

/*JQuery*/

$('.filtroPoison').change(function(event){
    if(this.checked){
        $('.Poison').fadeOut('slow');   
    }
    else{
        $('.Poison').fadeIn('slow');
    }
});    

$('.filtroFire').change(function(event){
    if(this.checked){
        $('.Fire').fadeOut('slow');   
    }
    else{
        $('.Fire').fadeIn('slow');
    }
}); 

$('.closeAll').change(function(event){
    if(this.checked){
        $('.closeAll').prop('checked',true).trigger('change');
    }
    else{
        $('.closeAll').prop('checked',false).trigger('change');

    }
});

  