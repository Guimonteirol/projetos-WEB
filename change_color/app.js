const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.body.style.background =mudar();

     console.log(mudar()); 
    });

function mudar(){
    return `hsl(${Math.floor(Math.random() * 360)}, 100%,50%)`;
}
