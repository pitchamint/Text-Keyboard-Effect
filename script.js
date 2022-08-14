const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = "ขอให้สมัครงานได้ ได้งานดีๆ เงินทองไหลมาเทมา";
let speed = 300/speedEl.value;

let charactorID = 1;

writeText(); 

function writeText(){
    textEl.innerText = text.slice(0,charactorID);
    charactorID++;
    if(charactorID>text.length){
        charactorID = 1;
    }

    setTimeout(writeText,speed);
}

speedEl.addEventListener('input',(e)=>{
    speed = 300 / e.target.value;
})
