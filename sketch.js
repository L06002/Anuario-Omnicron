let bckcolor = "#13068c";
//
let Loading;
//
let vid;
//
let pagenumT = 25;
let modoSexo = false;
let Icontraseña;
let contraseña = "pene";
//
let fondo;
let portada;
//change page button
let bLeft;
let bRight;
let pNum = 0;
let bBack;
//
//imagenes y objeto imagen
let funny = [];
let person = [];
let img = [];
let imgObj = [];
let lg1;
let closeButton;
let bState = false;
let imgD = false;
//
let cnv;
let cnvW = 852;
let cnvH = 480;
let wadd = 320;
let hadd = 180;
//
let name = [];
//
name[1] = "Diego Milad Amrollahi Supan"
name[2] = "Mireya Cristina Argente"
name[3] = "Danna Arredondo Ruiz"
name[4] = "Regina Ceballos Sanchéz"
name[5] = "Sofia Melian Contreras Gutierrez"
name[6] = "Valeria Flores Gomez"
name[7] = "Carly Grace Louise Lofrano"
name[8] = "Jorge Luis Madrigal"
name[9] = "Beatrice Martellini Rosas"
name[10] = "Eduardo Daniel Torres Dinero"
name[11] = "Lucia Martellini Rosas"
name[12] = "Adrian Martinez Arce"
name[13] = "Maite Gema Ochoa"
name[14] = "Luis Fernando Reyes Mercado"
name[15] = "Sara Sosa Rivera"
name[16] = "Antoine Alejandro Villaseñor Camarena"
name[17] = "Mariajose Vazquez Garcia"
name[18] = "Jorge Andres Zaragoza Nava"
name[19] = "Mtro. Jonathan Reyes"
//
let apodo = [];
apodo[1] = "Supan sin glùten"
apodo[2] = "Cristi, invento del gobierno"
apodo[3] = "Dannonino"
apodo[4] = "Regia"
apodo[5] = "Melón/Melongas"
apodo[6] = "Valencia"
apodo[7] = "La Cara de Nalga"
apodo[8] = "Jorge Wiss el Chikiwiss"
apodo[9] = "Betùn"
apodo[10] = "Lalevergue"
apodo[11] = "Lucia"
apodo[12] = "Adriansin"
apodo[13] = "Mate"
apodo[14] = "Luisito/Luisin"
apodo[15] = "La Pica Colas"
apodo[16] = "Tony"
apodo[17] = "Marijuana/Doña Mary/Carnaval/Festival/Marijoe"
apodo[18] = "The Lad"
apodo[19] = "\"Mr. Teacher Jhonny Jhonny\""
//
let fraseL = [];
//
fraseL[1] = ""
fraseL[2] = "\"Huh? What? ¿Qué?\""
fraseL[3] = "\"Dicen que los tramposos nunca ganan, pero aqui estoy yo graduándome\""
fraseL[4] = "\"Esto no fue como High School Musical\""
fraseL[5] = "\"Me dormi en 7mo y desperte en 9no\""
fraseL[6] = "\"Se me cuidan, que Diosito siempre los acompañe en caso de ser Betún, que Chayanne te cuide\""
fraseL[7] = "\"It's ok to be gay\""
fraseL[8] = "\"El no querer es el no poder\""
fraseL[9] = "\"Fuerza, hay que hecharle ganas\""
fraseL[10] = "\"Una cosa es desear,otra es querer y otra cosa es necesitar\""
fraseL[11] = "NOT FOUND 404"
fraseL[12] = "\"No se como ni cuando, pero terminamos\""
fraseL[13] = "\"Don't care about other people's opinion\""
fraseL[14] = "\"Per aspera ad astra\""
fraseL[15] = "\"Jalo a todo menos a hacer la tarea\""
fraseL[16] = "\"Roses are red, violets are blue, I\'m Moreno\""
fraseL[17] = "\"La neta no quiero que esto se acabe\""
fraseL[18] = "\"Never put pasion in front of principle\""
fraseL[19] = "\"Friends are the new cool family\""
// frases sucias
let fraseS = [];
fraseS[1] = "\"Benito se supero en super 500\""
fraseS[2] = "\"¡QUE NO SOY FURRA!\""
fraseS[3] = "\"Gracias Luis Fernando por pasarme toda la secundaria\""
fraseS[4] = "\"Hoy me siento bien puta repiola\""
fraseS[5] = "\"Quisiera ser panadero para morderte la empanada\""
fraseS[6] = "\"Bendecidos sean todos los hijos de Chayanne\""
fraseS[7] = "\"One's bigger than the other\""
fraseS[8] = "\"VIVA A LA MOTA\""
fraseS[9] = "\"Nuestra salón puede ser un desastre, lleno de pubertos y gente loca pero la verdad es que\""
fraseS[10] = "\"Amo los waffles, son lo mejor\""
fraseS[11] = "NOT FOUND 404"
fraseS[12] = "\"Si vas a hacer algo mal, hazlo bien\""
fraseS[13] = "\"Me gusta el pan\""
fraseS[14] = ""
fraseS[15] = "\"Teacher Jony, ¿Le puedo picar la cola?\""
fraseS[16] = "\"La vida aqui es como el pantalon de un niñito, bien cortito y repleto de caca, patas chidas\""
fraseS[17]  = "\"No digas mamadas Merijein\""
fraseS[18]  = "\"Si el caballo se comio 6 manzanas, yo compre 3 furros y luego me fume 3 puros con Jorge Luis en el CEMEN terio, ¿Cuantas pepitas de marihuana encontre en el ano de Luisito?\""
fraseS[19] = "\"Don\´t play with the food\""

//precargar imagenes
function preload(){//preload st
  Loading = createElement("h1","LOADING");
  Loading.style("font-size","75px");
  Loading.style("background","#FF2B00")
  Loading.position(windowWidth/2-175,windowHeight/2);
  Loading.hide();
  portada = loadImage("Portada1.png");
  fondo = loadImage("bck.png");
  img[0] = loadImage("collage.jpg");
  img[1] = loadImage("image"+1+".jpeg");
  img[2] = loadImage("image"+2+".jpeg");
  img[3] = loadImage("image"+3+".jpeg");

  //
  for(let i = 4; i<104; i++){
    img[i] = loadImage("imgs/Image"+i+".jpeg");
  }
  //
  person[1] = loadImage("Person"+1+".jpeg");
  person[2] = loadImage("Person"+2+".jpeg");
  person[3] = loadImage("Person"+3+".jpeg");
  person[4] = loadImage("Person"+4+".jpeg");
  person[5] = loadImage("Person"+5+".jpeg");
  person[6] = loadImage("Person"+6+".jpeg");
  person[7] = loadImage("Person"+7+".jpeg");
  person[8] = loadImage("Person"+8+".jpeg");
  person[10] = loadImage("Person"+10+".jpeg");
  person[11] = loadImage("Person11.jpg");
  person[12] = loadImage("Person"+12+".jpeg");
  person[13] = loadImage("Person"+13+".jpeg");
  person[14] = loadImage("Person"+14+".jpeg");
  person[15] = loadImage("Person"+15+".jpeg");
  person[16] = loadImage("Person"+16+".jpeg");
  person[17] = loadImage("Person"+17+".jpeg");
  person[18] = loadImage("Person"+18+".jpeg");
  person[19] = loadImage("Person"+19+".jpeg");
  //
  funny[1] = loadImage("funny/amrollahi.jpg");
  funny[2] = loadImage("funny/argente.jpg");
  funny[3] = loadImage("funny/arredondo.jpeg");
  funny[4] = loadImage("funny/ceballos.jpg");
  funny[5] = loadImage("funny/contreras.jpg");
  funny[6] = loadImage("funny/flores.jpg");
  funny[7] = loadImage("funny/lofrano.jpeg");
  funny[8] = loadImage("funny/madrigal.JPG");
  funny[9] = loadImage("funny/martinez.jpg");
  funny[10] = loadImage("funny/beatrice.jpg");
  funny[11] = loadImage("funny/torres.jpg");
  funny[12] = loadImage("funny/lucia.jpg");
  funny[13] = loadImage("funny/ochoa.JPG");
  funny[14] = loadImage("funny/reyes.PNG");
  funny[15] = loadImage("funny/sosa.JPG");
  funny[17] = loadImage("funny/vazquez.jpg");
  funny[16] = loadImage("funny/villaseñor2.JPG");
  funny[18] = loadImage("funny/zaragoza.jpg");
  funny[19] = loadImage("funny/jhonny.jpg");
  Loading.show();
  Loading.html("LOADING...");
  vid = createVideo("vids/Video.mp4");
  vid.hide();
  vid.pause();
  //
}//preload en

//
function setup() {//setup st
  Loading.hide();
  cnv = createCanvas(cnvW,cnvH);
  lg1 = createGraphics(cnvW,cnvH);
  bLeft = createButton("<---");
  bRight = createButton("--->");
  bLeft.style("background","#AEDB05");
  bRight.style("background","#AEDB05");
  bLeft.mousePressed(prevPage);
  bRight.mousePressed(nextPage);
  bBack = createButton("LIST PAGE");
  bBack.style("background","#FF5A5A")
  bBack.hide();
  bBack.mousePressed(listPage);
  Icontraseña = createInput("Basado¿?")
  Icontraseña.style("background","#FA8282")
  Icontraseña.changed(checkPassword);
  Icontraseña.hide();
  closeButton = createButton("X X X X X");
  closeButton.style("background","#FF0303")
  closeButton.hide();
  closeButton.mousePressed(bFunction);
  vid.style("width","576px");
  vid.style("height","720px");
  vid.showControls();
  fondol2 = createGraphics(0,0)
  //
  imgObj[21] = new imgLoaded(2,0,0,52,57);
  imgObj[22] = new imgLoaded(1,52,0,69,88);
  imgObj[23] = new imgLoaded(3,0,57,53,78);
  //
  imgObj[24] = new imgLoaded(32,191,0,75,72);
  imgObj[25] = new imgLoaded(3,267,0,57,49);
  imgObj[26] = new imgLoaded(35,122,0,66,69);
  imgObj[27] = new imgLoaded(3,325,0,78,49);
  imgObj[28] = new imgLoaded(30,403,0,105,49);
  imgObj[29] = new imgLoaded(3,508,0,56,39);
  imgObj[30] = new imgLoaded(3,564,0,48,39);
  imgObj[31] = new imgLoaded(3,612,0,72,83);
  imgObj[32] = new imgLoaded(22,684,0,49,80);
  imgObj[33] = new imgLoaded(3,735,0,58,84);
  imgObj[34] = new imgLoaded(29,794,0,57,83);
  imgObj[35] = new imgLoaded(21,53,88,68,97);
  imgObj[36] = new imgLoaded(28,121,72,142,74);
  imgObj[37] = new imgLoaded(3,266,51,56,64);
  imgObj[38] = new imgLoaded(27,323,49,58,64);
  imgObj[39] = new imgLoaded(3,383,49,48,64);
  imgObj[40] = new imgLoaded(26,435,50,73,76);
  imgObj[41] = new imgLoaded(24,508,39,55,44);
  imgObj[42] = new imgLoaded(20,564,40,48,43);
  imgObj[43] = new imgLoaded(25,509,85,55,37);
  imgObj[44] = new imgLoaded(96,566,85,61,38);
  imgObj[45] = new imgLoaded(3,629,85,63,49);
  imgObj[46] = new imgLoaded(3,694,83,55,45);
  imgObj[47] = new imgLoaded(23,749,86,47,58);
  imgObj[48] = new imgLoaded(3,797,85,54,58);
  imgObj[49] = new imgLoaded(98,0,135,51,50);
  imgObj[50] = new imgLoaded(99,123,147,74,65);
  imgObj[51] = new imgLoaded(3,198,148,63,66);
  imgObj[52] = new imgLoaded(3,266,115,57,76);
  imgObj[53] = new imgLoaded(7,325,116,59,74);
  imgObj[54] = new imgLoaded(3,386,115,45,75);
  imgObj[55] = new imgLoaded(18,432,127,120,79);
  imgObj[56] = new imgLoaded(19,555,124,63,82);
  imgObj[57] = new imgLoaded(3,628,135,63,56);
  imgObj[58] = new imgLoaded(6,693,135,56,56);
  imgObj[59] = new imgLoaded(12,751,145,52,71);
  imgObj[60] = new imgLoaded(72,804,145,47,70);
  imgObj[61] = new imgLoaded(77,0,186,51,45);
  imgObj[62] = new imgLoaded(8,53,186,70,85);
  imgObj[63] = new imgLoaded(36,125,215,72,56);
  imgObj[64] = new imgLoaded(10,198,214,65,58);
  imgObj[65] = new imgLoaded(3,263,193,61,58);
  imgObj[66] = new imgLoaded(11,325,194,47,56);
  imgObj[67] = new imgLoaded(9,373,194,60,56);
  imgObj[68] = new imgLoaded(13,435,209,72,60);
  imgObj[69] = new imgLoaded(76,509,209,61,60);
  imgObj[70] = new imgLoaded(3,571,209,58,59);
  imgObj[71] = new imgLoaded(17,629,192,61,47);
  imgObj[72] = new imgLoaded(14,693,192,57,47);
  imgObj[73] = new imgLoaded(57,751,220,53,54);
  imgObj[74] = new imgLoaded(83,806,220,45,55);
  imgObj[75] = new imgLoaded(15,0,235,51,58);
  imgObj[76] = new imgLoaded(87,52,273,71,54);
  imgObj[77] = new imgLoaded(39,124,273,70,54);
  imgObj[78] = new imgLoaded(41,263,254,83,58);
  imgObj[79] = new imgLoaded(75,344,254,82,69);
  imgObj[80] = new imgLoaded(73,434,271,55,51);
  imgObj[81] = new imgLoaded(16,492,271,78,53);
  imgObj[82] = new imgLoaded(3,571,270,56,56);
  imgObj[83] = new imgLoaded(79,630,241,59,46);
  imgObj[84] = new imgLoaded(82,691,241,60,45);
  imgObj[85] = new imgLoaded(3,628,289,52,36);
  imgObj[86] = new imgLoaded(3,680,288,72,37);
  imgObj[87] = new imgLoaded(89,753,276,53,48);
  imgObj[88] = new imgLoaded(65,807,276,42,47);
  imgObj[89] = new imgLoaded(68,0,295,50,69);
  imgObj[90] = new imgLoaded(52,52,331,56,81);
  imgObj[91] = new imgLoaded(42,109,331,86,47);
  imgObj[92] = new imgLoaded(65,197,330,64,91);
  imgObj[93] = new imgLoaded(69,266,316,80,59);
  imgObj[94] = new imgLoaded(48,263,375,38,59);
  imgObj[95] = new imgLoaded(3,302,277,44,57);
  imgObj[96] = new imgLoaded(58,349,325,46,62);
  imgObj[97] = new imgLoaded(3,309,325,62,47);
  imgObj[98] = new imgLoaded(78,348,390,47,44);
  imgObj[99] = new imgLoaded(86,397,323,64,61);
  imgObj[100] = new imgLoaded(5,462,325,49,49);
  imgObj[101] = new imgLoaded(45,514,326,60,52);
  imgObj[102] = new imgLoaded(4,463,377,51,57);
  imgObj[103] = new imgLoaded(84,514,375,60,47);
  imgObj[104] = new imgLoaded(3,576,327,82,64);
  imgObj[105] = new imgLoaded(3,660,325,60,66);
  imgObj[106] = new imgLoaded(40,724,327,44,39);
  imgObj[107] = new imgLoaded(46,771,326,39,32);
  imgObj[108] = new imgLoaded(47,810,325,41,40);
  imgObj[109] = new imgLoaded(62,724,367,47,26);
  imgObj[110] = new imgLoaded(7,771,359,39,33);
  imgObj[111] = new imgLoaded(88,812,365,39,28);
  imgObj[112] = new imgLoaded(71,0,368,50,45);
  imgObj[113] = new imgLoaded(50,0,414,110,65);
  imgObj[114] = new imgLoaded(3,110,378,87,100);
  imgObj[115] = new imgLoaded(49,199,422,61,55);
  imgObj[116] = new imgLoaded(3,263,437,48,41);
  imgObj[117] = new imgLoaded(80,312,437,48,41);
  imgObj[118] = new imgLoaded(66,362,437,99,41);
  imgObj[119] = new imgLoaded(81,462,435,55,43);
  imgObj[120] = new imgLoaded(64,516,423,57,55);
  imgObj[121] = new imgLoaded(3,575,392,62,87);
  imgObj[122] = new imgLoaded(44,639,394,38,39);
  imgObj[123] = new imgLoaded(31,678,393,49,42);
  imgObj[124] = new imgLoaded(38,728,395,38,38);
  imgObj[125] = new imgLoaded(43,767,395,48,37);
  imgObj[126] = new imgLoaded(59,818,395,33,44);
  imgObj[127] = new imgLoaded(67,639,436,40,41);
  imgObj[128] = new imgLoaded(60,680,436,46,41);
  imgObj[129] = new imgLoaded(61,728,435,88,43);
  imgObj[130] = new imgLoaded(70,817,442,34,37);
  imgObj[131] = new imgLoaded(51,302,377,42,54);

  //
  imgObj[1] = new imgLoaded(1,110,20,120,213);
  imgObj[2] = new imgLoaded(2,366,20,120,213);
  imgObj[3] = new imgLoaded(3,579,20,120,213);
  imgObj[4] = new imgLoaded(4,224,250,120,213);
  imgObj[5] = new imgLoaded(5,508,250,120,213);
  imgObj[6] = new imgLoaded(6,153,20,120,213);
  imgObj[7] = new imgLoaded(7,366,20,120,213);
  imgObj[8] = new imgLoaded(8,579,20,120,213);
  imgObj[9] = new imgLoaded(9,224,250,120,213);
  imgObj[10] = new imgLoaded(10,508,250,120,213);
  imgObj[11] = new imgLoaded(11,153,20,120,213);
  imgObj[12] = new imgLoaded(12,366,20,120,213);
  imgObj[13] = new imgLoaded(13,579,20,120,213);
  imgObj[14] = new imgLoaded(14,224,250,120,213);
  imgObj[15] = new imgLoaded(15,508,250,120,213);
  imgObj[18] = new imgLoaded(18,366,20,120,213);
  imgObj[16] = new imgLoaded(16,224,250,120,213);
  imgObj[17] = new imgLoaded(17,508,250,120,213);
}//setup en

function draw(){//draw st
  cnv.position(windowWidth/2-wadd,windowHeight/2-hadd);
  bLeft.position(windowWidth/2-470,windowHeight/2);
  bRight.position(windowWidth/2+432,windowHeight/2);
  closeButton.position(windowWidth/2-426,windowHeight/2-240);
  bBack.position(windowWidth/2+300,windowHeight/2+200);
  Icontraseña.position(windowWidth/2,windowHeight/2);
  vid.position(windowWidth/2-288,windowHeight/2-360);

  
  background(bckcolor);
  imageMode(CENTER);
  lg1.clear();
  lg1.imageMode(CENTER);
  //vid
if(pNum === 24){
    if(modoSexo === true){
    vid.show();
    }
    else{
      Creditos();
    }
  }
  else{
    vid.hide();
  }
  //pgs pics st
  if(pNum>5 && pNum<24){//button show
    bBack.show();
  }
  else{
    bBack.hide();
  }//button hide
  //formato Nombres st
  textSize(30);
  textAlign(CENTER);
  fill("#f0d90a");
  stroke("#f0d90a");
  strokeWeight(2);
  //formato Nombres en
  if(modoSexo===false){
  for(let i = 0; i<5;i++){//pg pics1 st
    let n = i+6
    if(pNum === n){   
    let p = i+1;
  image(person[p],180,height/2,360,640);
  rectMode(CENTER);
  text(name[p],606,50,480,50);
  fill(255);
  noStroke();
  textSize(20);
  text(fraseL[p],606,height/2+75,460,390);
    }
  }//pg pics1 en
  if(pNum === 11){
    image(person[6],180,height/2,360,640);
  rectMode(CENTER);
  //rect(606,35,480,50);
    strokeWeight(1);
    textSize(20);
  text(name[6],606,35,480,50);
  text(name[9],606,65,480,50);
  fill(255);
  noStroke();
  textSize(20);
  text(fraseL[6],606,height/2+75,460,390);
  text(fraseL[9],606,height/2+250,460,390);
  }
  if(pNum === 12){
  image(person[7],180,height/2,360,640);
  rectMode(CENTER);
  text(name[7],606,50,480,50);
  fill(255);
  noStroke();
  textSize(20);
  text(fraseL[7],606,height/2+75,460,390);
  }
    if(pNum === 13){
  image(person[8],180,height/2,360,640);
  rectMode(CENTER);
  text(name[8],606,50,480,50);
  fill(255);
  noStroke();
  textSize(20);
  text(fraseL[8],606,height/2+75,460,390);
  }
    if(pNum === 14){
  image(person[10],180,height/2,360,640);
  rectMode(CENTER);
  text(name[10],606,50,480,50);
  fill(255);
  noStroke();
  textSize(20);
  text(fraseL[10],606,height/2+75,460,390);
  }
    if(pNum === 15){
  image(person[11],180,height/2,360,640);
  rectMode(CENTER);
  text(name[11],606,50,480,50);
  fill(255);
  noStroke();
  textSize(20);
  text(fraseL[11],606,height/2+75,460,390);
  }
  for(let i = 11; i<19;i++){//pg pics2 st
    let n = i+5
    if(pNum === n){   
    let p = i+1;
  image(person[p],180,height/2,360,640);
  rectMode(CENTER);
  //rect(606,35,480,50);
  text(name[p],606,50,480,50);
  fill(255);
  noStroke();
  textSize(20);
  text(fraseL[p],606,height/2+75,460,390);
    }
  }//pg pics2 en
  //pgs pics en
  
  if(pNum === 2){
    imageMode(CORNER);
    image(person[1],153,20,120,213);
    image(person[2],366,20,120,213);
    image(person[3],579,20,120,213);
    image(person[4],224,250,120,213);
    image(person[5],508,250,120,213);
    textSize(15);
    fill(255);
    noStroke();
    rectMode(CORNER)
    text(name[1],213,245);
    text(name[2],426,245);
    text(name[3],639,245);
    text(name[4],284,475);
    text(name[5],568,475);
  }
  if(pNum === 3){
    imageMode(CORNER);
    image(person[6],153,20,120,213);
    image(person[7],366,20,120,213);
    image(person[8],579,20,120,213);
    image(person[10],224,250,120,213);
    image(person[11],508,250,120,213);
    textSize(15);
    fill(255);
    noStroke();
    rectMode(CORNER)
    text(name[9],213,15)
    text(name[6],213,245);
    text(name[7],426,245);
    text(name[8],639,245);
    text(name[10],284,475);
    text(name[11],568,475);
  }
  if(pNum === 4){
    imageMode(CORNER);
    image(person[12],153,20,120,213);
    image(person[13],366,20,120,213);
    image(person[14],579,20,120,213);
    image(person[15],224,250,120,213);
    image(person[16],508,250,120,213);
    textSize(15);
    fill(255);
    noStroke();
    rectMode(CORNER)
    text(name[12],213,245);
    text(name[13],426,245);
    text(name[14],639,245);
    text(name[15],284,475);
    text(name[16],568,475);
    
  }
  if(pNum === 5){
    imageMode(CORNER);
    image(person[19],366,20,120,213);
    image(person[17],224,250,120,213);
    image(person[18],508,250,120,213);
    textSize(15);
    fill(255);
    noStroke();
    rectMode(CORNER)
    text(name[19],426,245);
    text(name[17],284,475);
    text(name[18],568,475);
    
  }
  }
  else{
    background("#ecf973")
  fill("#0f26f5");
  stroke("#0f26f5");
    for(let i = 0; i<5;i++){//pg pics1 st
    let n = i+6
    if(pNum === n){   
    let p = i+1;
  image(funny[p],180,height/2,360,640);
  rectMode(CENTER);
  text(apodo[p],606,50,480,50);
  fill(0);
  noStroke();
  textSize(20);
  text(fraseS[p],606,height/2+75,460,390);
    }
  }//pg pics1 en
  if(pNum === 11){
    image(funny[6],90,height/4,180,320);
    image(funny[10],90*3,height/4*3,180,320);
  rectMode(CENTER);
  //rect(606,35,480,50);
    strokeWeight(1);
    textSize(20);
  text(apodo[6],606,35,480,50);
  text(apodo[9],606,65,480,50);
  fill(0);
  noStroke();
  textSize(20);
  text(fraseS[6],606,height/2+75,460,390);
  text(fraseS[9],606,height/2+250,460,390);
  }
  if(pNum === 12){
  image(funny[7],180,height/2,360,640);
  rectMode(CENTER);
  text(apodo[7],606,50,480,50);
  fill(0);
  noStroke();
  textSize(20);
  text(fraseS[7],606,height/2+75,460,390);
  }
    if(pNum === 13){
  image(funny[8],180,height/2,360,640);
  rectMode(CENTER);
  text(apodo[8],606,50,480,50);
  fill(0);
  noStroke();
  textSize(20);
  text(fraseS[8],606,height/2+75,460,390);
  }
    if(pNum === 14){
  image(funny[11],180,height/2,360,640);
  rectMode(CENTER);
  text(apodo[10],606,50,480,50);
  fill(0);
  noStroke();
  textSize(20);
  text(fraseS[10],606,height/2+75,460,390);
  }
    if(pNum === 15){
  image(funny[12],180,height/2,360,640);
  rectMode(CENTER);
  text(apodo[11],606,50,480,50);
  fill(0);
  noStroke();
  textSize(20);
  text(fraseS[11],606,height/2+75,460,390);
  }
     if(pNum === 16){
  image(funny[9],180,height/2,360,640);
  rectMode(CENTER);
  text(apodo[12],606,50,480,50);
  fill(0);
  noStroke();
  textSize(20);
  text(fraseS[12],606,height/2+75,460,390);
  }
    
  for(let i = 12; i<19;i++){//pg pics2 st
    let n = i+5
    if(pNum === n){   
    let p = i+1;
  image(funny[p],180,height/2,360,640);
  rectMode(CENTER);
  //rect(606,35,480,50);
  text(apodo[p],606,50,480,50);
  fill(0);
  noStroke();
  textSize(20);
  text(fraseS[p],606,height/2+75,460,390);
    }
  }//pg pics2 en
  //pgs pics en
  
  if(pNum === 2){
    imageMode(CORNER);
    image(funny[1],153,20,120,213);
    image(funny[2],366,20,120,213);
    image(funny[3],579,20,120,213);
    image(funny[4],224,250,120,213);
    image(funny[5],508,250,120,213);
    textSize(15);
    fill(0);
    noStroke();
    rectMode(CORNER)
    text(apodo[1],213,245);
    text(apodo[2],426,245);
    text(apodo[3],639,245);
    text(apodo[4],284,475);
    text(apodo[5],568,475);
  }
  if(pNum === 3){
    imageMode(CORNER);
    image(funny[6],153,20,120,213);
    image(funny[7],366,20,120,213);
    image(funny[8],579,20,120,213);
    image(funny[11],224,250,120,213);
    image(funny[12],508,250,120,213);
    textSize(15);
    fill(0);
    noStroke();
    rectMode(CORNER)
    text(apodo[9],213,15)
    text(apodo[6],213,245);
    text(apodo[7],426,245);
    text(apodo[8],639,245);
    text(apodo[10],284,475);
    text(apodo[11],568,475);
  }
  if(pNum === 4){
    imageMode(CORNER);
    image(funny[9],153,20,120,213);
    image(funny[13],366,20,120,213);
    image(funny[14],579,20,120,213);
    image(funny[15],224,250,120,213);
    image(funny[16],508,250,120,213);
    textSize(15);
    fill(0);
    noStroke();
    rectMode(CORNER)
    text(apodo[12],213,245);
    text(apodo[13],426,245);
    text(apodo[14],639,245);
    text(apodo[15],284,475);
    text(apodo[16],568,475);
    
  }
  if(pNum === 5){
    imageMode(CORNER);
    image(funny[19],366,20,120,213);
    image(funny[17],224,250,120,213);
    image(funny[18],508,250,120,213);
    textSize(15);
    fill(0);
    noStroke();
    rectMode(CORNER)
    text(apodo[19],426,245);
    text(apodo[17],284,475);
    text(apodo[18],568,475);
    
  }
  }
  
  if(pNum === 1){//p1 st
    wadd = 426;
    hadd = 220;
    cnv.style("width","852px");
    cnv.style("height","480px")
  imgObj[21].show();
  imgObj[22].show();
  imgObj[23].show();
    for(let i = 24; i<imgObj.length;i++){
      imgObj[i].show();
    }
  image(img[0],width/2,height/2,width,height);
  noStroke();
  image(lg1,width/2,height/2,width,height);
  }//p1 en
  
  if(pNum === 0){
    cnv.style("width","638px");
    cnv.style("height","825px");
    hadd = windowHeight/2;
    wadd = 319;
    image(portada,width/2,height/2,width-10,height-10);
    rectMode(CENTER);
    textSize(75);
    strokeWeight(15);
    stroke(0);
    fill(255);
    text("OMNICRON  2022",width/2,height/2-75);
  }
  if(pNum === 25){
    Creditos();
  }
  print(pNum);
  //rect(52,0,69,88);
}//draw en

function Creditos(){
  if(modoSexo === true){
  text("¿?",100,50);
  rectMode(CORNER);
  textAlign(LEFT);
  fill(0);
  textSize(20);
  noStroke();
  text(apodo[17],50,75);
  text(apodo[10],50,100);
  text(apodo[12],50,125);
  //
  textSize(30);
  textAlign(CENTER);
  fill("#0f26f5");
  stroke("#0f26f5");
  strokeWeight(2);
  text("VIDEO:",100,175);
  fill(0);
  textSize(20);
  noStroke();
  rectMode(CORNER);
  textAlign(LEFT);
  text(apodo[3],50,200);
  text(apodo[6],50,225);
  text(apodo[13],50,250);
  text(apodo[9],50,275);
  text(apodo[11],50,300);
  //
  textSize(30);
  textAlign(CENTER);
  fill("#0f26f5");
  stroke("#0f26f5");
  strokeWeight(2);
  text("G-Drive:",width-175,50);
  fill(0);
  textSize(20);
  noStroke();
  rectMode(CORNER);
  textAlign(RIGHT);
  text(apodo[18],width-50,75);
  text(apodo[1],width-50,100);
  //
  textSize(30);
  textAlign(CENTER);
  fill("#0f26f5");
  stroke("#0f26f5");
  strokeWeight(2);
  text("Dibujitos:",width-175,150);
  fill(0);
  textSize(20);
  noStroke();
  rectMode(CORNER);
  textAlign(RIGHT);
  text(apodo[4],width-50,175);
  text(apodo[8],width-50,200);
  text(apodo[16],width-50,225);
  text(apodo[7],width-50,250);
  text(apodo[5],width-50,275);
  text(apodo[2],width-50,300);
      
  textSize(30);
  textAlign(CENTER);
  fill("#0f26f5");
  stroke("#0f26f5");
  strokeWeight(2);
  text("NO DORMIR:",width/2,350);
  text(apodo[14],width/2,400);
  }
  else{
  text("Redacción:",100,50);
  rectMode(CORNER);
  textAlign(LEFT);
  fill(255);
  textSize(20);
  noStroke();
  text(name[17],50,75);
  text(name[10],50,100);
  text(name[12],50,125);
  //
  textSize(30);
  textAlign(CENTER);
  fill("#f0d90a");
  stroke("#f0d90a");
  strokeWeight(2);
  text("Audiovisual:",100,175);
  fill(255);
  textSize(20);
  noStroke();
  rectMode(CORNER);
  textAlign(LEFT);
  text(name[3],50,200);
  text(name[6],50,225);
  text(name[13],50,250);
  text(name[9],50,275);
  text(name[11],50,300);
  //
  textSize(30);
  textAlign(CENTER);
  fill("#f0d90a");
  stroke("#f0d90a");
  strokeWeight(2);
  text("Archivo:",width-175,50);
  fill(255);
  textSize(20);
  noStroke();
  rectMode(CORNER);
  textAlign(RIGHT);
  text(name[18],width-50,75);
  text(name[1],width-50,100);
  //
  textSize(30);
  textAlign(CENTER);
  fill("#f0d90a");
  stroke("#f0d90a");
  strokeWeight(2);
  text("Diseño:",width-175,150);
  fill(255);
  textSize(20);
  noStroke();
  rectMode(CORNER);
  textAlign(RIGHT);
  text(name[4],width-50,175);
  text(name[8],width-50,200);
  text(name[16],width-50,225);
  text(name[7],width-50,250);
  text(name[5],width-50,275);
  text(name[2],width-50,300);
  //
  textSize(30);
  textAlign(CENTER);
  fill("#f0d90a");
  stroke("#f0d90a");
  strokeWeight(2);
  text("PROGRAMACIÓN:",width/2,350);
  text(name[14],width/2,400);
  }
}
function modoNormA(){
  modoSexo = false;
  pagenumT = 24;
  Icontraseña.html("Basado¿?");
}
function modoSexoA(){
  modoSexo = true;
  pagenumT = 25
  Icontraseña.html("Basado¿?");
}
function checkPassword(){
  if(Icontraseña.value() === contraseña){
    modoSexoA();
    Icontraseña.html("Basado¿?");
    Icontraseña.hide();
    Icontraseña.html("Basado¿?");
  }
  else{
    modoSexo = false;
    Icontraseña.value("Basado ¿?");
    Icontraseña.hide();
  }
  print(Icontraseña.value());
  print(modoSexo);
}
function listPage(){
  if(pNum>5 && pNum<11){
    pNum = 2;
  }
  if(pNum>10 && pNum<16){
    pNum = 3;
  }
  if(pNum>15 && pNum<21){
    pNum = 4;
  }
  if(pNum>20 && pNum<24){
    pNum = 5;
  }
}

function keyPressed(){
  if(keyCode===LEFT_ARROW)
    {
      if(pNum>0){
        pNum -= 1;
      }
    }
  if(keyCode===RIGHT_ARROW){
    if(pNum<pagenumT){
      pNum += 1;
    }
  }
}

function prevPage(){
  if(pNum>0){
    pNum -= 1;
  }
}

function nextPage(){
  if(pNum<pagenumT){
    pNum += 1;
  }
}

function bFunction(){//st button func
  bState = true;
}//en button func

function mousePressed(){//st mousePressed
  if(pNum === 1){//p1 mS st
  //imgObj[21].checkImageArea();
  //imgObj[22].checkImageArea();
  //imgObj[23].checkImageArea();
  for(let i = 21; i<imgObj.length;i++){
    imgObj[i].checkImageArea();
  }
  }//p1 mS en
  if(pNum === 2){
    imgObj[1].checkImageArea2();
    imgObj[2].checkImageArea2();
    imgObj[3].checkImageArea2();
    imgObj[4].checkImageArea2();
    imgObj[5].checkImageArea2();
  }
  if(pNum === 3){
    imgObj[6].checkImageArea2();
    imgObj[7].checkImageArea2();
    imgObj[8].checkImageArea2();
    imgObj[9].checkImageArea2();
    imgObj[10].checkImageArea2();
  }
    if(pNum === 4){
    imgObj[11].checkImageArea2();
    imgObj[12].checkImageArea2();
    imgObj[13].checkImageArea2();
    imgObj[14].checkImageArea2();
    imgObj[15].checkImageArea2();
  }
    if(pNum === 5){
    imgObj[16].checkImageArea2();
    imgObj[17].checkImageArea2();
    imgObj[18].checkImageArea2();
  }
  if(pNum === 0){
    Icontraseña.html("Basado¿?");
  if(mouseX>664 && mouseX<728 && mouseY>272 && mouseY<293){
    if(pNum === 0){
      if(modoSexo === false){
    Icontraseña.show();
    Icontraseña.html("Basado¿?");
      }
      else{
        Icontraseña.html("Basado¿?");
        modoNormA();
        print(modoSexo);
        Icontraseña.html("Basado¿?");
      }
    }
  }
  }
  else{
    Icontraseña.hide();
    Icontraseña.html("Basado¿?");
  }
}//en mousePressed

function touchStarted () {
hE = createElement("h1","DEVICE NOT SUPPORTED");
  hE.style("font-size","30");
  hE.style("background","#ff0000");
  hE.position(windowWidth,windowHeight);
}

class imgLoaded { //imgObj st
  constructor(i,sx,sy,w,h){//imglcons st
    this.i = i;
    this.w = w;
    this.h = h;
    this.fw = w;
    this.fh = h;
    this.sx =sx;
    this.sy = sy;
    this.lx = this.sx+this.w;
    this.ly = this.sy+this.h;
    this.tf = false;
  }//cons en
  
  checkImageArea2(){
    if(mouseX>this.sx && mouseX<this.lx && mouseY>this.sy && mouseY<this.ly){
      pNum = this.i+5;
    }
  }
  
  checkImageArea(){//imgl check st
    if(mouseX>this.sx && mouseX<this.lx && mouseY>this.sy && mouseY<this.ly){//imglC if st
      print(this.tf);
        if(imgD === false){//imglCIF if2 st
        if(bState === false){//imglCIFIF if3 st
        this.tf = true;
        closeButton.show();
        imgD = true;
        }//imglCIFIF if3 en
        }//imglCIF if2 en
    }//imglc if en
          if(this.tf===true){
        if(bState === true){
        this.tf = false;
        this.w = this.fw;
        this.h = this.fh;
        closeButton.hide();
        imgD = false;
        bState = false;
        }
      }
  }//imgl check en
  show() {
    if(this.tf===true){
      if(this.h<height){
      this.w += 40;
      this.h += 50;
    }
      lg1.background("rgba(30,30,30,0.76)");
      lg1.image(img[this.i],426,240,this.w,this.h);
    }
  }
} //imgObj en
