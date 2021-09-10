var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
function draw_circle(color,mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(mouse_x,mouse_y,40,0,2* Math.PI);
    ctx.stroke()
}
draw_circle("blue",200,200)
draw_circle("black",300,200)
draw_circle("red",400,200)
draw_circle("yellow",250,250)
draw_circle("green",350,250)