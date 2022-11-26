const form = document.querySelector('#myForm');
const display = document.querySelector('#display');
let fullName,post,idN,file;


form.addEventListener('submit', (e)=>{
    // This will prevent the default action of the form which is to reload the page
    e.preventDefault()

    // Retrieve the values from the form inputs
    fullName = form.fname.value;
    post = form.position.value;
    idN = form.ids.value;
    file = form.img.files[0];
    const imgePath = URL.createObjectURL(file)
    console.log(imgePath);
    // Display the ID CARD
    display.innerHTML = `
        <div class="card mx-auto shadow" style="max-width: 350px;">
            <div class="card-body">
                <img src="${imgePath}" width="100" height="100" class=" d-block mx-auto rounded-circle my-4">
                <div class="py-1 text-center">
                    <h1>${fullName}</h1>
                    <h2>${post}</h2>
                    <h3>${idN}</h3>
                </div>
            </div>
        // </div>
    `;  
    form.reset() 
})