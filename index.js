// add solution here

function theBeatlesPlay(musicians, instrument) {
  var music = [];
  for (var i = 0; l = musicians.length; i < l; i++) {
    music.push(`${musicians[i]} plays ${instrument[i]}`);
  }
  return music;
}