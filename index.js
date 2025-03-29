document.addEventListener("DOMContentLoaded" , onPress);

async function onPress(){
    let informacion;
    await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then((data)=>{
        informacion = data;
    }).catch((error)=>{
        console.error("Esto es un error: " + error)
    });

    informacion.forEach((value) => {
        let div = document.createElement("div");
        let titulo = document.createElement("h5");
        let img = document.createElement("img");
        
        div.className = "card hola juan"
        titulo.textContent = value.title;
        img.width = 100;
        img.src = value.image;

        document.body.appendChild(div);
        div.appendChild(titulo);
        div.appendChild(img);
    });
}