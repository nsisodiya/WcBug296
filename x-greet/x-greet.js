(function () {
  var ElementPrototype = Object.create(HTMLElement.prototype);
  var templateNode = document._currentScript.ownerDocument.querySelector("template");
  ElementPrototype.createdCallback = function () {
    //this.innerHTML = "This is a Hello from UI Team";
    console.log("createdCallback : Greet");
    this.appendChild(document.importNode(templateNode.content,true));
    console.log("change Attr");
    this.querySelector("x-hello").setAttribute("name", "Tushar");
  };
  document.registerElement("x-greet", {
    prototype: ElementPrototype
  });
})();

