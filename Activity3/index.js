var input = (function(el){
    return {
      set inp(v){
       el.value = v;
      },
      get inp(){
        return el.value;
      }
    };
})(document.getElementById("inp"));


const display = document.getElementById("displayVar");

function handleChange(event) {
    input.inp = event.target.value;
    display.innerText = input.inp;
}

setInterval(() => {
    input.inp = Math.floor((Math.random() * 100) + 1);
    display.innerText = input.inp;
}, 10000);