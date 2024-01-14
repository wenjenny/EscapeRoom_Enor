var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// modals
var story = document.getElementById("story");
var puzzle2 = document.getElementById("puzzle2");
var p2table = document.getElementById("puzzle2table");
var p2text = document.getElementById("puzzle2text");
var p2explosion = document.getElementById("p2explosion");
// var puzzle3 = document.getElementById("puzzle3");
var puzzle4 = document.getElementById("puzzle4");
var p5map = document.getElementById("p5map");
var p5sticky = document.getElementById("p5sticky");
var puzzle6 = document.getElementById("puzzle6");
var puzzle7 = document.getElementById("puzzle7");
var puzzle8 = document.getElementById("puzzle8");
// var puzzle9 = document.getElementById("puzzle9");
var p9_1 = document.getElementById("p9_1");
var p9_2 = document.getElementById("p9_2");
var p9_3 = document.getElementById("p9_3");
var p9_4 = document.getElementById("p9_4");
var p9_5 = document.getElementById("p9_5");
var p9_6 = document.getElementById("p9_6");
var p9_7 = document.getElementById("p9_7");
var p9_8 = document.getElementById("p9_8");
var p9_9 = document.getElementById("p9_9");
var p9_10 = document.getElementById("p9_10");
var modals = [story, puzzle2, p2table, p2text, puzzle4, p5map, p5sticky, puzzle6, puzzle7, puzzle8, p2explosion];
var p9puzz = [p9_1, p9_2, p9_3, p9_4, p9_5, p9_6, p9_7, p9_8, p9_9, p9_10]
modals.push(...p9puzz);

var p2correct = false;
var p3correct = false;
var p4correct = false;
var p5correct = false;
var p6correct = false;
var p7correct = false;
var p8correct = false;
var p9correct = false;
var numcorrect = 0;

var Hcount = 0;
var Ocount = 0;
var Ccount = 0;
var Ncount = 0;
var Scount = 0;
function p2() {
    if (!rifle_active) {
        puzzle2.style.display = "block";
    }
}
function p2tablezoom() {
    if (!rifle_active) {
        p2table.style.display = "block";
    }
}
function p2showtext() {
    if (!rifle_active) {
        p2text.style.display = "block";
    }
}
function addH() {
    Hcount += 1;
    document.getElementById("Hcount").innerHTML = Hcount;
}
function addO() {
    Ocount += 1;
    document.getElementById("Ocount").innerHTML = Ocount;
}
function addC() {
    Ccount += 1;
    document.getElementById("Ccount").innerHTML = Ccount;
}
function addN() {
    Ncount += 1;
    document.getElementById("Ncount").innerHTML = Ncount;
}
function addS() {
    Scount += 1;
    document.getElementById("Scount").innerHTML = Scount;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var p2done_clicked = false;
function bbon(){
    if (p2correct) {
        alert("You can move on from this.")
        return
    }
    p2done_clicked = true;
    if (Hcount == 5 && Ocount == 6 && Ccount == 7 && Ncount == 5 && Scount == 0) {
        p2correct = true;
        document.getElementById("p2good").style = "position: absolute; top: 50%; left: 50%; height:100%; transform: translate(-50%, -50%);";
        // sleep(3000).then(() => { document.getElementById("p2good").style = "display:none" });
        alert("(Mr. Walz would be disappointed you didn't wear goggles, but...) The experiment was a success! Somehow that combination of elements created something you might be able to use to get out. You place it in your bag.");
        numcorrect += 1;
        if (numcorrect == 7) changebkgnd();
    }
    else {
        document.getElementById("p2explosion").style = "position: absolute; top: 50%; left: 50%; height:100%; transform: translate(-50%, -50%);";
        // sleep(3000).then(() => { document.getElementById("p2explosion").style = "display:none" });
        Hcount = 0;
        Ocount = 0;
        Ccount = 0;
        Ncount = 0;
        Scount = 0;
        document.getElementById("Hcount").innerHTML = Hcount;
        document.getElementById("Ocount").innerHTML = Ocount;
        document.getElementById("Ccount").innerHTML = Ccount;
        document.getElementById("Ncount").innerHTML = Ncount;
        document.getElementById("Scount").innerHTML = Scount;
    }
}

var rifle_active = false;
var rifle_found = false;
document.onkeydown = key_alert;
function key_alert(e) {
    if (`${e.code}` == "KeyS") {
        var anyshown = false;
        for(let i = 0; i < modals.length; i++) {
            if (modals[i].style.display == "block") anyshown = true;
        }
        if (rifle_found && !anyshown) {
            if (rifle_active) {
                document.getElementById("rifle").style.display = "block";
                document.body.style.cursor="default";
                rifle_active = false;
            } else {
                document.getElementById("rifle").style.display = "none";
                document.body.style.cursor="crosshair";
                rifle_active = true;
            }
        }
    }
}
function p3() {
    rifle_found = true;
    alert("Careful -- the 's'afety's off!");
}
var all = document.querySelectorAll(".p3img");
for (let i = 0; i < all.length; i++) {
    all[i].addEventListener('click',function testfunction(e){
        if (rifle_active){
            if (e.target.id == "flip") {
                if (p3correct) {
                    alert("Feel free to keep shooting, but no more pieces are coming off.")
                    return
                }
                alert("Oh yeah... that's the one.")
                alert("A part of this picture chipped off and fell into your bag.")
                p3correct = true;
                numcorrect += 1;
                if (numcorrect == 7) changebkgnd();
            } else {
                e.target.style.display = "none"
            }
        }
    });
}

function p4sel(name){
    if (!rifle_active) {
        document.getElementById(name).style.display = "none";
        document.getElementById(name+"4").style.display = "block";
        document.getElementById(name+"4rank").innerHTML = '<select name="'+name+'select" id="'+name+'select">\
                                                            <option value="b"> </option>\
                                                            <option value="1">1</option>\
                                                            <option value="2">2</option>\
                                                            <option value="3">3</option>\
                                                            <option value="4">4</option>\
                                                            <option value="5">5</option>\
                                                            <option value="6">6</option>\
                                                            <option value="7">7</option>\
                                                        </select>'
    }
}
function p4() {
    if (!rifle_active) {
        puzzle4.style.display = "block";
    }
}
var p4ans = {
    'A': "3",
    'D': "6",
    'E': "1",
    'H': "4",
    'J': "5",
    'N': "7",
    'S': "2"
};
var friendct = 7;
function puzzle4check() {
    if (p4correct) {
        alert("You can move on from this.")
        return
    }
    var count = 0
    var foundcount = 0
    var a = document.getElementById("aselect")
    if (a != null) foundcount++;
    var d = document.getElementById("dselect")
    if (d != null) foundcount++;
    var e = document.getElementById("eselect")
    if (e != null) foundcount++;
    var h = document.getElementById("hselect")
    if (h != null) foundcount++;
    var j = document.getElementById("jselect")
    if (j != null) foundcount++;
    var n = document.getElementById("nselect")
    if (n != null) foundcount++;
    var s = document.getElementById("sselect")
    if (s != null) foundcount++;
    if (foundcount != friendct) {
        alert("Gotta collect them all...")
        return
    }            
    if(a.value == p4ans['A']) { count++; }
    if(d.value == p4ans['D']) { count++; }
    if(e.value == p4ans['E']) { count++; }
    if(h.value == p4ans['H']) { count++; }
    if(j.value == p4ans['J']) { count++; }
    if(n.value == p4ans['N']) { count++; }
    if(s.value == p4ans['S']) { count++; }
    if (count == friendct) {
        p4correct = true;
        alert("Your friendship proves true and you win a prize. You put it in your bag.");
        numcorrect += 1;
        if (numcorrect == 7) changebkgnd();
    } else {
        alert("You should know your friends better than that...");
    }
}

function p5world() {
    if (!rifle_active) {
        p5map.style.display = "block";
    }
}
function p5note() {
    if (!rifle_active) {
        p5sticky.style.display = "block";
    }
}
function puzzle5() {
    if (p5correct) {
        alert("There is nothing else in here.")
        return
    }
    if (!rifle_active) {
        var p5ans = prompt('This briefcase is locked. The lock combination is made up of letters. You see a luggage tag that says "You have traveled all over the world - what is your most prized possession?"');
        if (p5ans.toLowerCase() == "peanut") {
            p5correct = true;
            alert("The briefcase opened, and you put its contents inside of your bag.");
            numcorrect += 1;
            if (numcorrect == 7) changebkgnd();
        } else {
            alert("That's not it.");
        }
    }
}

function p6() {
    if (p6correct) {
        alert("You can move on from this.")
        return
    }
    if (!rifle_active) {
        puzzle6.style.display = "block";
    }
}
function tab(elmnt,content){
    if (content.length==elmnt.maxLength){
        next=elmnt.tabIndex
        if (next<document.forms[0].elements.length){
            document.forms[0].elements[next].focus()
        }
    }
}
w5.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        puzzle6q();
    }
});
function puzzle6q(){
    if (p6correct) {
        alert("You've already taken what you needed.")
        return
    }
    var c1 = w1.value.toLowerCase() 
    var c2 = w2.value.toLowerCase() 
    var c3 = w3.value.toLowerCase()
    var c4 = w4.value.toLowerCase()
    var c5 = w5.value.toLowerCase()
    if (c1 == 'e' && c2 == 'n' && c3 == 'a' && c4 == 'u' && c5 == 'r') {
        p6correct = true;
        alert("You solved the wordle correctly, but you realize that you only needed this phone because there was something hidden in the case. You put it in your bag.");
        numcorrect += 1;
        if (numcorrect == 7) changebkgnd();
    } else {
        if (c1 == '' || c2 == '' || c3 == '' || c4 == '' || c5 == '') alert("Not enough letters")
        else alert("Wordle 114 X/6");
        form.reset();
    }
}

var meat_count = 0;
var need_order = true;
function p7() {
    if (!rifle_active) {
        puzzle7.style.display = "block";
    }
}
function kimchi() {
    if (p7correct) {
        alert("This restaurant is out of business. You can't eat any more kimchi here (not that you ever should've).")
        return
    }
    meat_count = 0;
    document.getElementById("order").style.display = "block";
    document.getElementById("p7meat").style.display = "none";
    need_order = true;
    // document.getElementById("ordernumtest").innerHTML = meat_count;
}
function meat() {
    if (p7correct) {
        alert("This restaurant is out of business. You can't eat any more meat here.")
        return
    }
    if (!need_order) {
        meat_count += 1;
        document.getElementById("p7meat").style.display = "block";
    } 
    // document.getElementById("ordernumtest").innerHTML = meat_count;
    need_order = meat_count % 12 == 0
    if (need_order && meat_count!= 60) {
        document.getElementById("order").style.display = "block";
        need_order = true;
    }
    if (meat_count == 60 && !p7correct) {
        alert("You won a prize and you put it into your bag. Unfortunately, you have also put the restaurant out of business.");
        p7correct = true;
        numcorrect += 1;
        if (numcorrect == 7) changebkgnd();
    }
}
function veg() {
    if (p7correct) {
        alert("This restaurant is out of business. You can't eat any more vegetables here.")
    }
}
function order() {
    need_order = false;
    document.getElementById("order").style.display = "none";
}

function p8() {
    if (!rifle_active) {
        if (p2correct) { mf2.style.display = "block" }
        if (p3correct) { mf3.style.display = "block" }
        if (p4correct) { mf4.style.display = "block" }
        if (p5correct) { mf5.style.display = "block" }
        if (p6correct) { mf6.style.display = "block" }
        if (p7correct) { mf7.style.display = "block" }
        if (p9correct) { mf9.style.display = "block" }
        puzzle8.style.display = "block"
    }
}

// PICTURE HERE
// puzzle starts at (20, 120) and is 368 x 490 px tall
// each piece is 70 px tall
// order: 2 4 6 9 3 7 5

var margin = 10;
var l = 20;
var t = 120;

function p8check() {
    mf2_correct = Math.abs(mf2.offsetLeft - l) < margin && Math.abs(mf2.offsetTop - 0 - t) < margin;
    mf3_correct = Math.abs(mf3.offsetLeft - l) < margin && Math.abs(mf3.offsetTop - 280 - t) < margin;
    mf4_correct = Math.abs(mf4.offsetLeft - l) < margin && Math.abs(mf4.offsetTop - 70 - t) < margin;
    mf5_correct = Math.abs(mf5.offsetLeft - l) < margin && Math.abs(mf5.offsetTop - 420 - t) < margin;
    mf6_correct = Math.abs(mf6.offsetLeft - l) < margin && Math.abs(mf6.offsetTop - 140 - t) < margin;
    mf7_correct = Math.abs(mf7.offsetLeft - l) < margin && Math.abs(mf7.offsetTop - 350 - t) < margin;
    mf9_correct = Math.abs(mf9.offsetLeft - l) < margin && Math.abs(mf9.offsetTop - 210 - t) < margin;

    if (mf2_correct && mf3_correct && mf4_correct && mf5_correct && mf6_correct && mf7_correct && mf9_correct) {
        p8correct = true;
        document.getElementById("sesame").style.display = "block"
        document.getElementById("door").style.display = "none"
        alert("You hold up this picture to the lock on the door. To your surprise, you hear the lock click, and you jiggle the handle. It opens!")
    } 
    else alert("This doesn't look right.");
}

var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t4 = document.getElementById("t4");
var t5 = document.getElementById("t5");
var t6 = document.getElementById("t6");
var t7 = document.getElementById("t7");
var t8 = document.getElementById("t8");
var t9 = document.getElementById("t9");
var t10 = document.getElementById("t10");
var index = 0;
var playlist = [t4, t7, t8, t1, t9, t6, t2, t10, t5];
var allplayed = false;
function p9playpause() {
    if (!rifle_active) {
        if (!p9correct) {
            if (playlist[index].paused) { playlist[index].play(); }
            else { playlist[index].pause(); }
        } else {
            alert("This CD player doesn't work anymore.")
        }
    }
}
function p9skip() {
    if (!rifle_active && !playlist[index].paused) {
        playlist[index].pause();
        playlist[index].currentTime = 0;
        index = (index + 1) % playlist.length;
        if (index == playlist.length-1) { allplayed = true; }
        playlist[index].play();
    }
    if (p9correct) {
        alert("This CD player doesn't work anymore.")
    }
}
function p9eject() {
    if (p9correct) {
        alert("There is nothing in here anymore.")
        return
    }
    if (!rifle_active) {
        if (allplayed) {
            var p9ans = prompt("Something's missing...");
            if (p9ans == "16") {
                p9correct = true;
                alert("The music stops, and out comes something you put into your bag.");
                playlist[index].pause();
                numcorrect += 1;
                if (numcorrect == 7) changebkgnd();
            } else {
                alert("This button isn't working.")
            }
        }
    }
}
var p9aud = document.querySelectorAll(".p9audio");
for (let i = 0; i < p9aud.length; i++) {
    p9aud[i].addEventListener('ended',function fn(){
        index = (index + 1) % playlist.length;
        if (index == playlist.length-1) { allplayed = true; }
        playlist[index].play();
    });
}
function clck(i){
    if (!rifle_active) {
        p9puzz[i-1].style.display = "block"
    }
}

function d() {
    if (!rifle_active) {
        alert("The lock on this door employs facial recognition software and won't open for you.")
    }
}

function changebkgnd() {
    const pics = document.querySelectorAll('.mfcollage');
    pics.forEach(pic => {
        pic.style = "position:absolute;top:0px;left:0px;height:100%;width:100%;object-fit:cover";
    });
}

// PICTURE HERE

// Make the element draggable:
dragElement(document.getElementById("mf2"));
dragElement(document.getElementById("mf3"));
dragElement(document.getElementById("mf4"));
dragElement(document.getElementById("mf5"));
dragElement(document.getElementById("mf6"));
dragElement(document.getElementById("mf7"));
dragElement(document.getElementById("mf9"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

window.onclick = function(event) {
    if (modals.includes(event.target)) {
        story.style.display = "none";
        puzzle2.style.display = "none";
        p2table.style.display = "none";
        p2text.style.display = "none";
        // puzzle3.style.display = "none";
        puzzle4.style.display = "none";
        p5map.style.display = "none";
        p5sticky.style.display = "none";
        puzzle6.style.display = "none";
        puzzle7.style.display = "none";
        puzzle8.style.display = "none";
        p9_1.style.display = "none";
        p9_2.style.display = "none";
        p9_3.style.display = "none";
        p9_4.style.display = "none";
        p9_5.style.display = "none";
        p9_6.style.display = "none";
        p9_7.style.display = "none";
        p9_8.style.display = "none";
        p9_9.style.display = "none";
        p9_10.style.display = "none";
        p2explosion.style.display = "none";
    }
    if (event.target.id == "puzzle2") {
        if (!p2done_clicked && !p2correct) {
            if (Hcount == 0 && Ocount == 0 && Ccount == 0 && Ncount == 0 && Scount == 0) return
            alert('Walz yelled at you for turning your back on an open flame. He forced you to discard your solution and to turn off the Bunsen burner.')
            Hcount = 0;
            Ocount = 0;
            Ccount = 0;
            Ncount = 0;
            Scount = 0;
            document.getElementById("Hcount").innerHTML = Hcount;
            document.getElementById("Ocount").innerHTML = Ocount;
            document.getElementById("Ccount").innerHTML = Ccount;
            document.getElementById("Ncount").innerHTML = Ncount;
            document.getElementById("Scount").innerHTML = Scount;
        }
        p2done_clicked = false
    }
}

document.oncontextmenu = rightclick;
function rightclick(e){
    e.preventDefault();
}
