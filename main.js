// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 160,
    height: 160
  });
  
  // then create layer
  var layer = new Konva.Layer();
  
  // create our shape
  var circle = new Konva.Circle({
    x: stage.width() / 2.2,
    y: stage.height() / 2,
    radius: 20,
    fill: 'transparent',
    stroke: 'black',
    strokeWidth: 5
  });
  
  var circle2 = new Konva.Circle({
    x: stage.width() / 7,
    y: stage.height() / 2,
    radius: 20,
    fill: 'transparent',
    stroke: 'blue',
    strokeWidth: 5
  });
  
  var circle3 = new Konva.Circle({
    x: stage.width() / 3.4,
    y: stage.height() / 1.5,
    radius: 20,
    fill: 'transparent',
    stroke: 'yellow',
    strokeWidth: 5
  });
  
  var circle4 = new Konva.Circle({
    x: stage.width() / 1.6,
    y: stage.height() / 1.5,
    radius: 20,
    fill: 'transparent',
    stroke: 'green',
    strokeWidth: 5
  });
  
  var circle5 = new Konva.Circle({
    x: stage.width() / 1.3,
    y: stage.height() / 2,
    radius: 20,
    fill: 'transparent',
    stroke: 'red',
    strokeWidth: 5
  });
  
  // add the shape to the layer
  layer.add(circle);
  layer.add(circle3);
  layer.add(circle4);
  layer.add(circle2);
  layer.add(circle5);
  
  // add the layer to the stage
  stage.add(layer);
  
  // draw the image
  layer.draw();