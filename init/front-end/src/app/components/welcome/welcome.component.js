import { Component } from "../../scripts/component";
import template from "../welcome/welcome.component.html";
import "./welcome.component.css";

  // TODO #class: use the ES6 class keyword
  export class WelcomeComponent extends Component{
    constructor(name) {
      super(template)
      this.template = template;
      this.name = name;
    }

    /* method WelcomeComponent.init */
    init() {
      let form = document.querySelector("form.form-signin");

      form.addEventListener(
          "submit",
          (event) => {
            event.preventDefault();
            if (form.checkValidity() === false) {
              event.stopPropagation();
              form.classList.add("was-validated");
            } else {
              let name = event.srcElement.querySelector("#nickname").value;
              let size = parseInt(event.srcElement.querySelector("#size").value);

              this._startGame(name, size);
            }
          },
          false
      );

      return this;
    };


    _startGame(name, size) {
      let gamePage = "./#game";
      // TODO #template-literals:  use template literals (backquotes)
      window.location = `${gamePage}?name=${name}&size=${size}`
      ;
    }
  }
