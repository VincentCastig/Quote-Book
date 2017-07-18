angular.module('myApp').service('myServ', function(){
  var  data = [
    { text: '"Life isn\'t about getting and having, it\'s about giving and being."', author: '-OSCAR WILDE'},
    { text: '"I can believe anything, provided that it is quite incredible"', author: '-NAPOLEON HILL'},
    { text: '"Though I am not naturally honest, I am so sometimes by chance".', author: '-WILLIAM SHAKESPEARE'},
    { text: '"Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference".', author: '-ROBERT FROST'},
    { text: '"The most difficult thing is the decision to act, the rest is merely tenacity".', author: '-AMELIA EARHART'},
    { text: '"Life is what happens to you while you\'re busy making other plans".', author: '-JOHN LENNON'},
    { text: '"To lengthen thy life, lessen thy meals"?', author: '-BENJAMIN FRANKLIN'}
  ]

  this.getData = function(){
    return data;
  }

  this.addData = function(quote, author){
      data.push({
       text: '"'+quote+'"',
       author: "-" + author.toUpperCase()
     })
  }
  this.removeData = function(name){

    for (i = 0; i < data.length; i++){
      if(data[i].author.includes(name)){
        data.splice(data.indexOf(data[i]),1)
      }
}

  }
})
