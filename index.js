const btn = document.getElementById("btn");
var a = 0;
const headings = ['#E2DCC8', '#F1F1F1', '#FFB4B4', '#B2A4FF', '#A5C9CA', '#E8AA42', '#FFE5B4', '#DAE2B6', '#DFE8CC', '#F7EDDB', '#A8A4CE', '#C8B6E2', '#F5EDDC', '#D9F8C4', '#F9F9C5', '#FAD9A1', '#F37878', '#B2C8DF']
const textareaclr = ['#3AB4F2', '#A8A4CE', '#C8B6E2', '#DAE2B6', '#FBC5C5', '#C4D7E0', '#F8F9D7', '#C9BBCF', '#B7D3DF', '#D6EFED', '#66BFBF', '#EAF6F6', '#FFDEDE', '#FF8B8B', '#FBB454', '#C4DFAA', '#90C8AC', '#FBC5C5']
function btnn() {
    a++
    const radnum = Math.floor(Math.random() * 18);
    document.getElementById('main').innerHTML += `<form class='ok' id=${a}></form>`
    const data = document.getElementById(`${a}`)
    data.innerHTML = `<div id=heading${a}><input style="background-color:${headings[radnum]}" name="title" placeholder='Title'" id=headinginp${a} type="text"></div>`
    data.innerHTML += `<br><div id=text${a}><textarea name="detail" placeholder='Write Your Text here' style="background-color:${textareaclr[radnum]}" id=textarea${a} cols="30" rows="10"></textarea></div></div>`
    data.innerHTML += `<button  class="btn1" type="submit" onclick="saveData(${a})"> Save </button>`
}

function saveData(some) {
    const frmm = document.getElementById(some)
    frmm.addEventListener('submit', (e) => {
        e.preventDefault()
        const titleData = document.getElementById(`headinginp${some}`).value
        const bodyData = document.getElementById(`textarea${some}`).value
        console.log(titleData);
        console.log(bodyData);
    })
}