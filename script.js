function onLoad() {

};

function Portrait() {
  for (let index = 0; index <= 157; index++) {    

  };
  // document.getElementById('portraits').innerHTML = 
};


// Stack Function
function LowerCase(value){
  return value.toLowerCase();
}

ChampionList = ['Zyra', 'Zoe', 'Zilean', 'Ziggs', 'Zed', 'Zac', 'Yuumi', 'Yorick', 'Yone', 'Yasuo', 'Xin Zhao', 'Xerath', 'Xayah', 'Wukong', 'Warwick', 'Volibear', 'Vladimir', 'Viktor', 'Viego', 'Vi', 'Vex', 'Veigar', 'Vayne', 'Varus', 'Urgot', 'Udyr', 'Twitch', 'Twisted Fate', 'Tryndamere', 'Trundle', 'Tristana', 'Thresh', 'Teemo', 'Taric', 'Talon', 'Taliyah', 'Tahm Kench', 'Syndra', 'Sylas', 'Swain', 'Soraka', 'Sona', 'Skarner', 'Sivir', 'Sion', 'Singed', 'Shyvana', 'Shen', 'Shaco', 'Sett', 'Seraphine', 'Senna', 'Sejuani', 'Samira', 'Ryze', 'Rumble', 'Riven', 'Rengar', 'Renekton', 'Rell',, 'Rammus', 'Rakan', 'Quinn', 'Qiyana', 'Pyke', 'Poppy', 'Pantheon', 'Ornn', 'Orianna', 'Olaf', 'Nocturne', 'Nidalee', 'Neeko', 'Nautilus', 'Nasus', 'Nami', 'Morgana', 'Mordekaiser', 'Miss Fortune', 'Master Yi', 'Maokai', 'Malzahar', 'Malphite', 'Lux', 'Lulu', 'Lucian', 'Lissandra', 'Lillia', 'Leona', 'Lee Sin', 'LeBlanc', 'Kled', 'Kindred', 'Kennen', 'Kayn', 'Kayle', 'Katarina', 'Kassadin', 'Karthus', 'Karma', 'Kalista', 'Jinx', 'Jhin', 'Jayce', 'Jax', 'Jarvan IV', 'Janna', 'Ivern', 'Irelia', 'Illaoi', 'Heimerdinger', 'Hecarim', 'Gwen', 'Graves', 'Gragas', 'Gnar', 'Garen', 'Gangplank', 'Galio', 'Fizz', 'Fiora', 'Fiddlesticks', 'Ezreal', 'Evelynn', 'Elise', 'Ekko', 'Draven', 'Dr. Mundo', 'Diana', 'Darius', 'Corki', 'Cassiopeia', 'Camille', 'Caitlyn', 'Braum', 'Brand', 'Blitzcrank', 'Bard', 'Azir', 'Aurelion Sol', 'Ashe', 'Aphelios', 'Annie', 'Anivia', 'Amumu', 'Alistar', 'Akshan', 'Akali', 'Ahri', 'Aatrox'];
ChampionList_lowerCase = ChampionList.map(LowerCase);
// bad chars = Vel Koz, Rek Sai, Kai Sa, KogMaw, KhaZix,Cho'Gath 


function SearchURL(champion) {
  console.log(champion);
  if (ChampionList.includes(champion)){
    document.getElementById('output').innerHTML = champion + '<br>' + '<img src = "./portrait/02_portrait.png">';
  } else {
    document.getElementById('output').innerHTML = '';
  };
};


