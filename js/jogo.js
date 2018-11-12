
var select = localStorage.getItem('on_load_counter');

if (select === null) {
    select = -1;
}

select ++;

localStorage.setItem("on_load_counter", select);


//Aqui são definidos os ids dos videos do youtube:
var video = ["aOqwY9JkSDk","0GCwx1841Pk","iwNEP32U3Zs","kgPX8lknsnw"];


if (select < video.length) {
	document.write('<div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + video[select] + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'); 
} else {
    document.write('<h1>O jogo terminou!</h1><br><p>Para reiniciar o jogo, clique no botão ao lado</p>'); 
}
