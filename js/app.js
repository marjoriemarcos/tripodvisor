import newsletter from "./newsletter.js";
import slider from "./slider.js";
import destinations from "./destination.js";
import theme from "./themeBis.js";
import comments from "./comments.js";


const app = {

    init: function () {
  
      // ici on charge tous les autres init de tous les autres modules
        
        newsletter.init();
        slider.init();
        destinations.init();
        theme.init();
        comments.init();

        function sayHelloToConsole() {
          console.log('hello');
        }

        setTimeout(sayHelloToConsole, 5000);
    },

    
    
  }

  document.addEventListener('DOMContentLoaded', app.init);