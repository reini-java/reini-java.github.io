container = document.getElementById("main");

var text = new Blotter.Text("Robin Reinhart", {
    
    family: "serif",
    size: 130,
    fill: "black",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    paddingBottom: 10
});

var material = new Blotter.FliesMaterial();
material.uniforms.uPointCellWidth.value = 0.009;
material.uniforms.uPointRadius.value = 1;
material.uniforms.uSpeed.value = 2;

var blotter = new Blotter(material, {
    texts: text
});

var scope = blotter.forText(text);
scope.appendTo(container);

    