var imgs = [];
var imgs_big = [];
function llenar_lista(){

    imgs = [
          'http://rise.com.es/sites/default/files/styles/galeria-300-ancho/public/_MG_8368a.jpg',
          'http://rise.com.es/sites/default/files/styles/galeria-300-ancho/public/_MG_3791.jpg',
          'http://rise.com.es/sites/default/files/styles/galeria-300-ancho/public/IMG_3120.JPG',
          'http://rise.com.es/sites/default/files/styles/galeria-300-ancho/public/_MG_0367_1.jpg',
          'http://rise.com.es/sites/default/files/styles/galeria-300-ancho/public/_MG_3170_1.jpg',
          'http://rise.com.es/sites/default/files/styles/galeria-300-ancho/public/_MG_3083.jpg',
          'http://rise.com.es/sites/default/files/styles/galeria-300-ancho/public/_MG_5824a.jpg',
          'http://rise.com.es/sites/default/files/styles/galeria-300-ancho/public/_MG_9346_1.jpg',
          'http://rise.com.es/sites/default/files/styles/galeria-300-ancho/public/_MG_5265_1.jpg'

          ];
    imgs_big = [
          'http://rise.com.es/sites/default/files/_MG_8368a.jpg',
          'http://rise.com.es/sites/default/files/_MG_3791.jpg',
          'http://rise.com.es/sites/default/files/IMG_3120.JPG',
          'http://rise.com.es/sites/default/files/_MG_0367_1.jpg',
          'http://rise.com.es/sites/default/files/_MG_3170_1.jpg',
          'http://rise.com.es/sites/default/files/_MG_3083.jpg',
          'http://rise.com.es/sites/default/files/_MG_5824a.jpg',
          'http://rise.com.es/sites/default/files/_MG_9346_1.jpg',
          'http://rise.com.es/sites/default/files/_MG_5265_1.jpg'

          ];
          ver_fotos();
}
function ver_fotos(){
  document.getElementById("fotos").innerHTML = "";
  for(i =0; i<imgs.length; i++){
    document.getElementById("fotos").innerHTML = document.getElementById("fotos").innerHTML +
    "<img src= '" +imgs[i] + "' onclick='quitarImagen("+ i +")' >";
  }
}
function transformarJson(){
    array_total = [imgs, imgs_big];
      final = "";

      console.log(array_total);
      var myJsonString =  JSON.stringify(array_total);
      console.log(myJsonString);
      var array_final = JSON.parse(myJsonString);
      console.log(array_final);
    document.getElementById("resultado").innerHTML = myJsonString;
}
function agregarImagen(){
  peq =document.forms["formulario"]["peq"].value; 

  grande = document.forms["formulario"]["grande"].value; 

  if(peq != null && peq != "" && grande != null && grande != ""){
    imgs.push(peq);
    imgs_big.push(grande);
  }
    else{
      alert("Introduce dos urls para añadirlas")
    }
    ver_fotos();
  
}
function quitarImagen(n){
  imgs.splice(n, 1);
  imgs_big.splice(n, 1);
  ver_fotos();
}
