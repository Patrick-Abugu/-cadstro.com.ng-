var m =document.getElementById('carouselExampleCaptions');
var e =document.getElementById('nav-ul');
var a =document.getElementById('body');
function toggle() {
  var e =document.getElementById('nav-ul');
  if(e.style.display==='none'){
    e.style.display='block';
    e.style.transition='all 2s linear';
    m.style.marginTop='270px';
  }
  else{
    e.style.display='none';
    m.style.marginTop='100px';
  }
}
function services(){
  var s =document.getElementById('services');
  if(s.style.display==='none'){
    s.style.display='block';
    m.style.marginTop='350px';
  }
  else{
    m.style.marginTop='150px';
    s.style.display='none';
  }
}
function toggle1(){
  if(e.style.display==='none'){
    m.style.marginTop='0px';
  }
  else{
    m.style.marginTop='270px';
  }

}
function hide(){
e.style.display='none';
m.style.marginTop='100px';
}
