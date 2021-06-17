let img = [
    "https://oldschool.runescape.wiki/images/4/48/Frog_%28Zanaris%29.png?dd7fd",
    "http://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
    "https://i.pinimg.com/originals/98/f4/51/98f451f8794a407e123a35efc8373484.jpg",
    "https://phillipbrande.files.wordpress.com/2013/10/random-pic-14.jpg",
    "http://www.cedarcreekgallery.com/sites/default/files/images/pumpkin-carved2.png",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtH1CWAJ4M77xox7HN9b03V3xSb3OoeH9SqxHzUAx_gVVh22zu",
    "http://4.bp.blogspot.com/-fM8ROSKM1Tw/TbabQDnGLiI/AAAAAAAAHCQ/jhvcyS6ehnA/s1600/Wierd+House+01.jpg"
];
let names = [
    "frog with clown",
    "broccoli house",
    "banana duck",
    "sad box",
    "angry punkin",
    "shark car",
    "happy house"
];
var i = 0;
function upgrade() {
    i++;
    var number_of_img = names.length;
    if(i >= number_of_img){
        i = 0;
    }
    var upgrade_img = img[i];
    var upgrade_name = names[i];
    document.getElementById("the-img").src = upgrade_img;
    document.getElementById("img-name").innerHTML = upgrade_name;
}