import { parseUrl } from "./utils";
import template from "../views/score.html";
import {Component} from "./component";



  export class ScoreComponent extends Component{
    constructor(name) {
      super(template)
      var params = parseUrl();
      this.template = template;
      this.name = name;
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

