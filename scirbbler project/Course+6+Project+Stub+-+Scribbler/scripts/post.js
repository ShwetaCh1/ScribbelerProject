// edit functionality in page 
function editThePage(){

    //edit button change into save button
    document.getElementById('editButton').innerHTML = 'Save <i class="fa fa-floppy-o" aria-hidden="true"></i>'

    // title code for editing
    var title = document.getElementById('pageMainTitle').innerHTML;
    document.getElementById('pageMainTitle').innerHTML = '';
    document.getElementById('titleArea').value = title;
    document.getElementById('titleArea').style.display = 'block';
    

    //content code for editing

    var content = document.getElementById('pageMainContent').innerHTML;
    document.getElementById('pageMainContent').innerHTML = '';
    document.getElementById('contentTextArea').value = content;
    document.getElementById('contentTextArea').style.display = 'block';


    //adding color to the border 
    document.getElementById('titleBox').style.border = '2px solid pink'

    document.getElementById('pageMainContent').style.border = '2px solid pink'
}





//like and comment functionality here
var like = 1;
function showNumOfLike(){
    var template  = '<i class="fa fa-thumbs-o-up" aria-hidden="true" onclick="showNumOfLike()">Liked</i>'+
    '<div id="showLike">'+ '<p>'+
     like + ' person likes this!'+ '<p>'+
    '</div>';

    document.getElementsByClassName('like')[0].innerHTML = template;
    like++;
}

function addComment(text){
    var template = '<div class="commentme">'+
    text.value + 
    '</div>';
    
    document.getElementsByClassName('showCommentHere')[0].innerHTML += template;
   text.value = text.defaultValue;

}
