const shareButtons = document.querySelectorAll('.tile-share-button')
const shareButton = document.querySelectorAll('.share-button')


console.log(shareButtons || shareButton)

async function copyText(e) {

e.preventDefault()
const link = this.getAttribute('link')
console.log(link)

try{
    await navigator.clipboard.writeText(link)
    alert("Copied to clipboard")
} catch (err) {
    console.error(err)
}

}

shareButtons.forEach(shareButtons => shareButtons.addEventListener('click',copyText))
shareButton.forEach(shareButton => shareButton.addEventListener('click',copyText))


