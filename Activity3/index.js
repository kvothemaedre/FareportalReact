const display = document.getElementById("displayVar");

var input = (function(el){
  return {
    set inp(v){
     el.value = v;
     display.innerText = v;
    },
    get inp(){
      return el.value;
    }
  };
})(document.getElementById("inp"));

function handleChange(event) {
    input.inp = event.target.value;
}

setInterval(() => {
    input.inp = Math.floor((Math.random() * 100) + 1);
}, 10000);