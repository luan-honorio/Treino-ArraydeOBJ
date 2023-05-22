const item = [

    {
        img: './img/cat.jpg',
        nome: 'cat1',
    },
    {
        img: './img/cat2.jpg',
        nome: 'cat2',
    },
    {
        img: './img/cat3.jpg',
        nome: 'cat3',
    },

]


window.addEventListener("DOMContentLoaded", function(){
    display(item)
})

function display(itens){
    let displayi = itens.map(function(items){
        console.log(items)
        return `  <article>
        <div>
            <img src="${items.img}" width="300px" height="250px" alt="">
            <p>${items.nome}</p>
        </div>
    </article>`
    })

    displayi = displayi.join("")
    console.log(displayi)
    document.querySelector(".section-center").innerHTML = displayi

    
 
}