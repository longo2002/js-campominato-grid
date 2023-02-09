console.log('griglia')
let btnEl = document.getElementById("bottone")

bottone.addEventListener("click",
    function myFunction() {
        let latoGriglia = 8
        let numeroCelle = latoGriglia * latoGriglia

        console.log(latoGriglia, numeroCelle)

        const grigliaElement = document.querySelector('.griglia')
        console.log(grigliaElement)

        for (let i = 0; i < numeroCelle; i++) {
            let num = i + 1
            console.log(num)
            let divString = `<div class="cella" style="width: calc(100% / ${latoGriglia});" >${num}</div>`
            grigliaElement.innerHTML += divString

        }

        const celleElements = document.querySelectorAll('.cella')

        for (let i = 0; i < celleElements.length; i++) {
            const cella = celleElements[i]

            cella.addEventListener('click', function () {
                console.log(i + 1)
            })
        }

        function onClick() {
            console.log(i + 1)
        }
    }
)