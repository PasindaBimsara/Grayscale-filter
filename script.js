var image;
function upload(){
  var imgcanvas = document.getElementById("can1");
  var imgfile = document.getElementById("imgfile");
  image = new SimpleImage(imgfile);
  image.drawTo(imgcanvas);
}
function makeGray(){
  for(var pixel of image.values()){
    var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    pixel.setRed(avg);
    pixel.setBlue(avg);
    pixel.setGreen(avg);
  }
  var imgdraw = document.getElementById("can2");
  image.drawTo(imgdraw);
}