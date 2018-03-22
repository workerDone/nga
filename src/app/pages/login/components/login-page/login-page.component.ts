import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;

  constructor() { }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      "background-color" : "#E0F7FA",
      'z-index': 0,
      'top':'64px',
      'left': 0,
      'right': 0,
      'bottom': 0,
  };

  this.myParams = {
        particles: {
            "number": {
              "value": 60,
              "density": {
                "enable": true,
                "value_area": 400
              }
            },
            "color": {
                "value": '#FFCCBC'
            },
            "shape": {
                "type": ["circle", "triangle"],
                "stroke": {
                  "width": 1,
                  "color": "#9575CD"
                },
                // "polygon": {
                //   "nb_sides": 10
                // },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
            },
            "opacity": {
              "value": 0.7,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 200,
              "color": "#BDBDBD",
              "opacity": 1,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 3,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": true,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": true,
                "mode":[ "repulse"]
              },
              "onclick": {
                "enable": true,
                "mode": "bubble"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 800,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 200,
                "size": 3,
                "duration": .7,
                "opacity": 0.7,
                "color" : "#1976D2",
                "speed": 4
              },
              "repulse": {
                "distance": 100,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
  
          // 
    },
    // "retina_detect": true
  };

  }

}
