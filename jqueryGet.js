// jqueryGet.js
console.log('jQueryGet loaded');

$(function(){
  //on document load
  $('#github').click(function(evt){
    //on github click

    //disable default bahavior
    evt.preventDefault();
    // const url = 'https://api.github.com/users/ausoto07'



    //get data from url
    $.get(url, function(result){
      $('#output').append(getData(result));
    });
  });
})
function getData(result){
  let output = "";
  output += '<ul>';
  for(const key in result){
    output += '<li>';
    output += key + " - " + result[key];
    output += '</li>';
  }
  output += '</ul>';
  return output;
}
