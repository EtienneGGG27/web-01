import { parseUrl } from "../../scripts/utils";
import { Component } from "../../scripts/component";

import template from "./score.component.html";
import "./score.component.css";



  export class ScoreComponent extends Component{
    constructor(name) {
      super(template)
      let params = parseUrl();
      this.template = template;
      this.name = params.name;
      this.size = parseInt(params.size);
      this.time = parseInt(params.time);
    }


    // TODO #class: turn function into a method of ScoreComponent
    /* method ScoreComponent.init */
    init() {
      document.getElementById("name").innerText = this.name;
      document.getElementById("size").innerText = this.size;
      document.getElementById("time").innerText = this.time;
    }
  }

