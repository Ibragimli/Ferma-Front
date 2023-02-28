




const dt = new DataTransfer();
let selectedFiles = []
let files = []
const fileInput = document.getElementById('imageInput')
let previewImages = document.getElementById('temperoryImages')
fileInput.onchange = (e) => {

    selectedFiles = []
    files = Object.values(e.target.files)

    if (files.length > 0) {
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const src = e.target.result;
                dt.items.add(file)

                selectedFiles.push({
                    file: file,
                    src: src,
                    degree: 0,
                });
            };
            if (typeof file != "undefined") {
                reader.readAsDataURL(file);
            }


        })
        setTimeout(() => setImages(), 100)
    }
}


const setImages = () => {
    let html = ''
    let i = -1
    selectedFiles.forEach(file => {
        i++

        html += `<div  class="imageBox">
                    <p id="${i}" onclick="removeFile(${i})"><i class="fa-solid fa-trash"></i></p>
                    <img class="temperorayImage" src="${file.src}" alt="">
                </div>`
    })
    previewImages.innerHTML = html
}

const removeFile = (index) => {
    const fileInput = document.getElementById('imageInput')
    dt.items.remove(index)
    fileInput.files = dt.files
    selectedFiles.splice(index, 1)
    setImages()
}






