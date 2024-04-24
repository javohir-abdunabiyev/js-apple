// let clicks = 0

// let minus = document.querySelector('.minus')
// let plus = document.querySelector('.plus')
// let count = document.querySelector('.count')


// function clicker() {
//     minus.onclick = () => count.textContent = clicks--
//     plus.onclick = () => count.textContent = clicks++
// }



let elems = document.querySelectorAll('div')

elems.forEach((btn) => {
    btn.onmouseenter = () => {
        btn.classList.add('active')
    }
})

