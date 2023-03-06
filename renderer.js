const $ = selector => document.querySelector(selector)

const $count = $('#counter')
const $button = $('button')

$button.addEventListener('click', () => {
  const count = Number($count.innerText)
  $count.innerText = count + 1
})
