//----------------Update poster ,Song Title and artist name-----------------//

const music= new Audio ('guru M/1.mp3');
// music.play();

// Create Array of SongNames and poster  
const songs=[
    {
        id:'1',
        SongName:`High Rated Gabru <br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/1.jpg',
    },
    {
        id:'2',
        SongName:`Made In India  <br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/2.jpg',
    },
    {
        id:'3',
        SongName:`Raat Kamaal Hai<br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/3.jpg',
    },
    {
        id:'4',
        SongName:`Yaar Mod Do <br />
        <div class="Mortals">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/4.jpg',
    },
    {
        id:'5',
        SongName:`Suit<br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/5.jpg',
    },
    {
        id:'6',
        SongName:`Patola <br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/6.jpg',
    },
    {
        id:'7',
        SongName:`Khat <br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/7.jpg',
    },
    {
        id:'8',
        SongName:`Outfit<br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/8.jpg',
    },
    {
        id:'9',
        SongName:`Tu Meri Rani<br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/9.jpg',
    },
    {
        id:'10',
        SongName:`I Like You <br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/10.jpg',
    },
    {
        id:'11',
        SongName:`Fashion<br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/11.jpg',
    },
    {
        id:'12',
        SongName:`Ambarsariya-Suit   <br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/12.jpg',
    },
    {
        id:'13',
        SongName:`Signs  <br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/13.jpg',
    },
    {
        id:'14',
        SongName:`Teri Gali Cover <br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/14.jpg',
    },
    {
        id:'15',
        SongName:`Nain Ta Heere<br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/15.jpg',
    },
    {
        id:'16',
        SongName:`Designer<br/>
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/16.jpg',
    },
    {
        id:'17',
        SongName:`Punjabiyan Di Dhee<br/>
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/17.jpg',
    },
    {
        id:'18',
        SongName:`Downtown<br/>
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/18.jpg',
    },
    {
        id:'19',
        SongName:` Tumse Milna Is Kadar <br/>
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/19.jpg',
    },
    {
        id:'20',   
        SongName:`Ishare Tere<br />
        <div class="subtitle">Guru Randhawa</div>
      </h5>`,
        Poster:'guru I/20.jpg',
    }
]

//UPDATE SONG NAME AND POSTER
Array.from(document.getElementsByClassName("song-item")).forEach((e, i) =>{
  e.getElementsByTagName('img')[0].src = songs[i].Poster;
  e.getElementsByTagName('h5')[0].innerHTML=songs[i].SongName;
});


// ----------------------Master play button controls ---------------------------

 let masterPlay = document.getElementById("masterPlay");
 let wave = document.getElementById('wave');

//  PLAY PAUSE MUSIC / ACTIVE WAVE ON PLAY /SHUFFEL PLAY PAUSE BUTTON 
masterPlay.addEventListener("click", () => {
  if(music.paused || music.currentTime<=0)
  {music.play();
 wave.classList.add('active1');
 masterPlay.classList.add('bi-pause-fill')
 masterPlay.classList.remove('bi-play-fill');
}
  else{
    music.pause();
wave.classList.remove('active1');
masterPlay.classList.remove('bi-pause-fill')
masterPlay.classList.add('bi-play-fill');
  }
});


//--------------Current TIME & Duration of song &  Progressive bar -------------//
let currentStart=document.getElementById('current_start')
let currentEnd=document.getElementById('current_end')
let seek=document.getElementById('seek')
let bar2=document.getElementById('bar2')
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{

//MUSIC CURRENT TIME
  let music_cur=music.currentTime
min1=Math.floor(music_cur/60);
sec1=Math.floor(music_cur%60)
if (sec1<10)
{
  sec1=`0${sec1}`;
}
currentStart.innerText=`${min1}:${sec1}`;

//MUSIC DURATION TIME
  let music_dur=music.duration;
min2=Math.floor(music_dur/60)
sec2=Math.floor(music_dur%60)

if (sec2<10){
  sec2=`0${sec2}`
}
currentEnd.innerText=`${min2}:${sec2}`

//PROGRESS BAR
let progressbar= parseInt(music_cur/music_dur*100);
seek.value=progressbar
let seekbar =seek.value;
bar2.style.width=`${seekbar}%`;
dot.style.left=`${seekbar}%`;
} )

//MUSIC PLAY TIME CHANGE SYNC WITH PROGRESS  BAR
seek.addEventListener('change',()=>{
  music.currentTime=seek.value*music.duration/100;
})

//-----------------MUsic volume  icon and Music Volume control-----------------//


let vol_icon=document.getElementById('vol_icon');
let vol =document.getElementById('vol');
let vol_bar=document.getElementById('vol_bar');
let vol_dot =document.getElementById('vol_dot');

//VOLUME ICON CHANGE
vol.addEventListener('change',()=>{
  if(vol.value==0){
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.add('bi-volume-off-fill');
  }
  if(vol.value>0){
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.add('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-off-fill');
  }
  if(vol.value>50){
    vol_icon.classList.add('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-off-fill');
  }
  //MUSIC VOLUME CONTROLER
let vol_a = vol.value;
vol_bar.style.width = `${vol_a}%`;
vol_dot.style.left = `${vol_a}%`; 
music.volume=vol_a/100;
})

//-----------------------------------NEXT OR PREVIOUS SONG BUTTON CONTROL-------------------------------


//BACK-BUTTON
let back =document.getElementById('back');
back.addEventListener('click',()=>{
  index-=1;
  if(index<1){
    index=Array.from(document.getElementsByClassName('song-item')).length;
  }
//CHANGE MUSIC
music.src=`guru M/${index}.mp3`;
music.play();
//CHANGE TITLE
let songTitle = songs.filter((els)=>{
  return els.id ==index;
})
songTitle.forEach(elss=>{
  let  {SongName,Poster}=elss;
Title.innerHTML = SongName;
poster_master_play.src=Poster;
});
})

let next =document.getElementById('next');
next.addEventListener('click',()=>{
  index++;
  if (index>Array.from(document.getElementsByClassName('song-item')).length){
    index =1;
  }
music.src=`guru M/${index}.mp3`;
music.play();
let songTitle=songs.filter((ep)=>{
  return ep.id==index;
})
songTitle.forEach(elpp=>{
  let {SongName,Poster}=elpp;
Title.innerHTML=SongName;
poster_master_play.src=Poster;
})
})


//------------------Change Background on Play  and Play/Pause icon shuffle ------------------//

//DEFAULT  BACKGROUND 
let makeAllBackground = () =>{
  Array.from(document.getElementsByClassName("song-item")).forEach((el)=>{
    el.style.background = 'rgb(105, 105, 105,.0)';
  })
}
//DEFAULT  PLAY ICON
let makeAllPlay=()=>{
  Array.from(document.getElementsByClassName('playListPlay ')).forEach((el)=>{
    el.classList.add('bi-play-circle-fill')
    el.classList.remove('bi-pause-circle-fill');
  })
}

//----------------------Song menu button controls //Change song/poster/Title-----------------//
let index=0;
let posterimg =document.getElementById('poster_master_play');
let Title=document.getElementById('Title');
let download_music=document.getElementById('download_music');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
  e.addEventListener('click',(el)=>{

//GET INDEX
    index=el.target.id;

//CHANGE MUSIC
music.src=`guru M/${index}.mp3`;
music.play();
// posterimg.src=`img/${index}.jpg`
masterPlay.classList.add('bi-pause-fill')
masterPlay.classList.remove('bi-play-fill');
//DOWNLOAD MUSIC
download_music.href=`guru M/${index}.mp3`;
//CHANGE TITLE
let songTitle = songs.filter((els)=>{
  return els.id ==index;
})
songTitle.forEach(elss=>{
  let  {SongName,Poster}=elss;
   Title.innerHTML = SongName;
    poster_master_play.src=Poster;
    download_music.setAttribute('download',SongName)
});
//CHANGE BACKGROUND
makeAllBackground();
Array.from(document.getElementsByClassName("song-item"))[index-1].style.background ='rgb(105,105,105,0.1)';
//CHANGE PLAY PAUSE
makeAllPlay();
el.target.classList.add('bi-pause-circle-fill')
el.target.classList.remove('bi-play-circle-fill')
//ANIMATE WAVE
wave.classList.add('active1');
})
})


// -----------------------  Scroll buttons Control   ----------------------


//POP SONG SCROLL BAR
let pop_song_left = document.getElementById("pop_song_left"); 
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 630;
    console.log(pop_song)
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=630;
    console.log(pop_song + "left")
})


//POP ARTISTS SCROLL BAR
let pop_artist_left= document.getElementById('pop_artists_left');
let pop_artist_right=document.getElementById('pop_artists-right');
let pop_artist= document.getElementsByClassName("item")[0];

pop_artist_right.addEventListener('click',()=>{
pop_artist.scrollLeft += 330;
})
pop_artist_left.addEventListener('click',()=>{
    pop_artist.scrollLeft -= 330;
    });


// Switch icon on click next to repeat to random

let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click',()=>{
  let a = shuffle.innerHTML;

  switch (a) {
    case "next":
      shuffle.classList.add('bi-arrow-repeat');
      shuffle.classList.remove('bi-music-note-beamed');
      shuffle.classList.remove('bi-shuffle');
      shuffle.innerHTML='repeat'
      console.log("1")
      break;
    case 'repeat':
    shuffle.classList.add('bi-shuffle');
    shuffle.classList.remove('bi-arrow-repeat');
    shuffle.classList.remove('bi-music-note-beamed');
    shuffle.innerHTML='random'
    console.log("2")
    break;
    case 'random':
      shuffle.classList.add('bi-music-note-beamed');
      shuffle.classList.remove('bi-arrow-repeat');
      shuffle.classList.remove('bi-shuffle');
      shuffle.innerHTML='next'
      console.log('3')
        break;
  }
});

// Create function for NEXT REPEAT AND RANDOM  

const next_music=()=>{
if(index==songs.length){
  index=1
}
else{
  index ++
}
music.src=`guru M/${index}.mp3`;
music.play();
masterPlay.classList.add('bi-pause-fill')
masterPlay.classList.remove('bi-play-fill');
let songTitles=songs.filter((elm)=>{
return elm.id== index
})
songTitles.forEach(elss=>{
  let {SongName,Poster} =elss;
  Title.innerHTML=SongName;
  poster_master_play.src=Poster;
  download_music.setAttribute('download',SongName)
  wave.classList.add('active1');
})
}
const repeat_music=()=>{
index;
  music.src=`guru M/${index}.mp3`;
  music.play();
  masterPlay.classList.add('bi-pause-fill')
  masterPlay.classList.remove('bi-play-fill');
  let songTitles=songs.filter((elm)=>{
  return elm.id== index
  })
  songTitles.forEach(elss=>{
    let {SongName,Poster} =elss;
    Title.innerHTML=SongName;
    poster_master_play.src=Poster;
    download_music.setAttribute('download',SongName)
    wave.classList.add('active1');
  })
  }
  const random_music=()=>{
    if(index==songs.length){
      index=1
    }
    else{
  index=Math.floor((Math.random()*songs.length))
    }
    music.src=`guru M/${index}.mp3`;
    music.play();
    masterPlay.classList.add('bi-pause-fill')
    masterPlay.classList.remove('bi-play-fill');
    let songTitles=songs.filter((elm)=>{
    return elm.id== index
    })
    songTitles.forEach(elss=>{
      let {SongName,Poster} =elss;
      Title.innerHTML=SongName;
      poster_master_play.src=Poster;
      download_music.setAttribute('download',SongName)
      wave.classList.add('active1');
    })
  }

  music.addEventListener('ended',()=>{
    let b=shuffle.innerHTML

    switch(b)
    {
      case 'next':
        next_music();
      break;
      case 'repeat':
        repeat_music();
        break;
      case 'random':
        random_music();
        break;
    }
  })
//-------------------------SEARCH BAR--------------------//
///search data start
let search_results=document.getElementsByClassName("search_results")[0];
songs.forEach(element=>{
  const {id ,SongName ,Poster}=element;
  // console.log(SongName);
  let card=document.createElement("a");
  card.href="#" + id;
  card.classList.add('card');
  card.innerHTML=`
  <img src="${Poster}" alt="">
  <div class="content">
${SongName}
  </div>
  `;
  search_results.appendChild(card);
})
let input=document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
  let input_value = input.value.toUpperCase();
  let items=search_results.getElementsByTagName('a');
  for (index = 0; index <items.length;index++){
let as=items[index].getElementsByClassName('content')[0];
let text_value=as.textContent || as.innerHTML;
if(text_value.toUpperCase().indexOf(input_value)>-1){
  items[index].style.display="flex";
  console.log(input_value);
}
else{  items[index].style.display="none";}
  }
}
  )
//search data end
//-------------------------Last lISTENING---------------------->
let Last =document.getElementById('last');
Last.addEventListener('click',()=>{
  index-=1;
  if(index<1){
    index=Array.from(document.getElementsByClassName('song-item')).length;
  }
//CHANGE MUSIC
music.src=`guru M/${index}.mp3`;
music.play();
masterPlay.classList.add('bi-pause-fill')
masterPlay.classList.remove('bi-play-fill');
//CHANGE TITLE
let songTitle = songs.filter((els)=>{
  return els.id ==index;
})
songTitle.forEach(elss=>{
  let  {SongName,Poster}=elss;
Title.innerHTML = SongName;
poster_master_play.src=Poster;
});
})