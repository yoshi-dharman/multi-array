let nav_bar =  document.getElementById("nav-side");

let link = [
    ['Home'],
    ['Profile'],
    ['Setting'],
    ['Logout']
]

console.log(link);

link.forEach((item) => {
    nav_bar.innerHTML += '<a href="">'+ item[0] + '</a>' + '<hr>';
});



// ================================================================

let linkUppercase = link.map((item) => {
    return item[0].toLocaleUpperCase();
});

console.log(linkUppercase);



//=================================================================
let strKata = "Halo semua, belajar coding di skilvul yuk";

function swapCase(kata) {
    let kalimatBaru ="";

    kata.split(" ").forEach((item,index) => {
        if(index % 2 == 0){
            kalimatBaru += item.toLocaleUpperCase() + " ";
        }
        else{
            kalimatBaru += item + " ";
        }
    });

    console.log(kalimatBaru);
}

swapCase(strKata);