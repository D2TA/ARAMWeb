// bad chars = Vel Koz, Rek Sai, Kai Sa, KogMaw, KhaZix,Cho'Gath 
ChampionList = ['Zyra', 'Zoe', 'Zilean', 'Ziggs', 'Zed', 'Zac', 'Yuumi', 'Yorick', 'Yone', 'Yasuo', 'Xin Zhao', 'Xerath', 'Xayah', 'Wukong', 'Warwick', 'Volibear', 'Vladimir', 'Viktor', 'Viego', 'Vi', 'Vex', 'Veigar', 'Vayne', 'Varus', 'Urgot', 'Udyr', 'Twitch', 'Twisted Fate', 'Tryndamere', 'Trundle', 'Tristana', 'Thresh', 'Teemo', 'Taric', 'Talon', 'Taliyah', 'Tahm Kench', 'Syndra', 'Sylas', 'Swain', 'Soraka', 'Sona', 'Skarner', 'Sivir', 'Sion', 'Singed', 'Shyvana', 'Shen', 'Shaco', 'Sett', 'Seraphine', 'Senna', 'Sejuani', 'Samira', 'Ryze', 'Rumble', 'Riven', 'Rengar', 'Renekton', 'Rell',, 'Rammus', 'Rakan', 'Quinn', 'Qiyana', 'Pyke', 'Poppy', 'Pantheon', 'Ornn', 'Orianna', 'Olaf', 'Nocturne', 'Nidalee', 'Neeko', 'Nautilus', 'Nasus', 'Nami', 'Morgana', 'Mordekaiser', 'Miss Fortune', 'Master Yi', 'Maokai', 'Malzahar', 'Malphite', 'Lux', 'Lulu', 'Lucian', 'Lissandra', 'Lillia', 'Leona', 'Lee Sin', 'LeBlanc', 'Kled', 'Kindred', 'Kennen', 'Kayn', 'Kayle', 'Katarina', 'Kassadin', 'Karthus', 'Karma', 'Kalista', 'Jinx', 'Jhin', 'Jayce', 'Jax', 'Jarvan IV', 'Janna', 'Ivern', 'Irelia', 'Illaoi', 'Heimerdinger', 'Hecarim', 'Gwen', 'Graves', 'Gragas', 'Gnar', 'Garen', 'Gangplank', 'Galio', 'Fizz', 'Fiora', 'Fiddlesticks', 'Ezreal', 'Evelynn', 'Elise', 'Ekko', 'Draven', 'Dr. Mundo', 'Diana', 'Darius', 'Corki', 'Cassiopeia', 'Camille', 'Caitlyn', 'Braum', 'Brand', 'Blitzcrank', 'Bard', 'Azir', 'Aurelion Sol', 'Ashe', 'Aphelios', 'Annie', 'Anivia', 'Amumu', 'Alistar', 'Akshan', 'Akali', 'Ahri', 'Aatrox'];
ChampionList_lowerCase = ChampionList.map(function LowerCase(value){return value.toLowerCase();});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomChampion() {
  let index = getRandomInt(ChampionList.length -1)
  return document.body.style.backgroundImage =   'linear-gradient(to left, rgba(44, 44, 44, 0.9), rgba(255, 17, 17, 0.2)), url(./ARAMPython-main/portrait/' + ChampionList[index] + '_portrait.png)';
}


function onLoadRun() {
  // Old Variables: NumRows NumCols
  var NumCols = Math.floor(document.documentElement.clientWidth/120) + 1;
  var NumRows = Math.floor(document.documentElement.clientHeight/120) + 1;
  // Random Portrait
  getRandomChampion();
};

function SearchURL(champion) {
  champion = champion.toLowerCase();
  console.log(champion);
  if (ChampionList_lowerCase.includes(champion.toLowerCase())){
    champion = ChampionList[ChampionList_lowerCase.indexOf(champion)];
    document.getElementById('output').onclick= function(){
        location.href = "https://na.op.gg/aram/" + champion + "/statistics/450/build"; // location.href = location.href + "/currentpath/additional/params/here"
    };
    document.getElementById('output').innerHTML = '<br>' + champion + '<br>' + '<img src = "./ARAMPython-main/portrait/' + champion + '_portrait.png">';    
  } else {
    document.getElementById('output').innerHTML = '';
  };
};