// add solution here

function theBeatlesPlay(musicians, instrument) {
  var music = [];
  for (var i = 0; music.length; i++) {
    music.push(`${musicians[i]} plays ${instrument[i]}`);
  }
  return music;
}