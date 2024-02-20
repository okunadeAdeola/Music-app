let url = "https://musicapi-19wk.onrender.com/music/myAPI";
let getfirstpart=""
let allmusic=""
let load = document.getElementsByClassName('loader')
const playme = async () => {
  let response = await fetch(url);
  let giveback = await response.json();
  allmusic=giveback
  let load = document.getElementById('load')
  console.log(allmusic);
  load.style.display = 'block'
if (allmusic){
        load.style.display = 'none'
}
allmusic.map((item, i)=>{
    //  fourthdiv.innerHTML=""
    fourthdiv.innerHTML+=`
    <div onclick="getsong(${i})">
        <img src=${item.songImage} alt="song image" style="width:90px" height:"100px " margin-top:2em ; />
        <p style="width:100px" height:"70px";>${item.artistName}</p>
    </div>      
    
    `
})
};
window.onload=()=>{
    playme()
}
const getsong=(i)=>{
    let obj=allmusic[i]
    console.log(obj);
    localStorage.setItem('playMusic', JSON.stringify(obj))
    window.location.href="play.html"
}

const search=()=>{
    allmusic.filter((item, i)=>{
        let  searchinput = document.getElementById('search')
        let tostring=searchinput.value.toLowerCase()
        console.log(tostring);
        if(item.albumName.toLowerCase().includes(tostring) || tostring==item.artistName.toLowerCase() || tostring==item.songTitle.toLowerCase()){
            console.log(item)
            fourthdiv.innerHTML =`
            <div onclick="getsong(${i})">
                <img src=${item.songImage} alt="song image" style="width:90px" height:"100px " margin-top:2em ; />
                <p style="width:100px" height:"70px";>${item.artistName}</p>
            </div>      
            
            `
        }
    })
}   