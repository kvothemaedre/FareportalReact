const ele1 =  document.getElementById("container-1");
const ele2 =  document.getElementById("container-2");

    ele1.addEventListener(
        "mouseover", () => {
            ele1.style.color = "red";
            ele1.style.cursor = "pointer"
        }
    )

    ele1.addEventListener(
        "mouseout", () => {
            ele1.style.color = "black";
        }
    )

    ele2.addEventListener(
        "mouseover", () => {
            ele2.style.color = "red";
            ele2.style.cursor = "pointer"
        }
    )

    ele2.addEventListener(
        "mouseout", () => {
            ele2.style.color = "black";
        }
    )
