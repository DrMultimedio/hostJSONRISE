var imgs = [];
var web = [];
function llenar_lista(){

    imgs = ['http://rise.com.es/sites/default/files/styles/galeria-300-ancho/public/CosyH.jpg',
          'http://rise.com.es/sites/default/files/styles/galeria-300-ancho/public/Imp2.jpg',
          'http://rise.com.es/sites/default/files/styles/galeria-300-ancho/public/LopezM.jpg',
          ];
    web = [
          'http://www.cosyhome.es/',
          'http://www.impresionalcuadrado.com/',
          'http://www.lopezmarin.com/es',
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
    array_total = [imgs, web];
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
    web.push(grande);
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
function cargarJSON(){
  console.log(document.getElementById("carga").value);
  obj = JSON.parse(document.getElementById("carga").value);
  imgs = obj[0];
  web = obj[1];
  console.log(obj);
    ver_fotos();

}