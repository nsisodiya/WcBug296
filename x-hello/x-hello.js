/**
 * Created by narendra on 27/4/15.
 */


(function () {
  var ElementPrototype = Object.create(HTMLElement.prototype);

  var templateNode = document._currentScript.ownerDocument.querySelector("template");

  ElementPrototype.createdCallback = function () {
    //this.innerHTML = "This is a Hello from UI Team";
    console.log("createdCallback : Hello");
    this.appendChild(templateNode.content.cloneNode(true));
    this.querySelector("span").textContent = this.getAttribute("name");
  };
  ElementPrototype.attributeChangedCallback = function (attrName, old, newVal) {
    //debugger;
    console.log("attributeChangedCallback : Hello", arguments);
    if(attrName === "name"){
      this.querySelector("span").textContent = newVal;
    }
  };
  document.registerElement("x-hello", {
    prototype: ElementPrototype
  });
})();
