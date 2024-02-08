const Buttons = document.querySelector("#buttons");
const ShowDone = document.querySelector("#ups");

var true1 = false;
var true2 = false;
var true3 = false;

function change() {
    var chngs = document.getElementById('buttons');
    var chnges = document.getElementById('ups');
    
    if (FileBtn.value === "") {
        chngs.innerHTML = 'Upload';
        chnges.classList.remove("done");
        chnges.classList.add("up");
    } else {
        chngs.innerHTML = 'Uploaded';
        chnges.classList.remove("up");
        chnges.classList.add("done");
    }
}

const FileBtn = document.getElementById("files");
const Tombol = document.getElementById("buttons");
const Teks = document.getElementById("texts");

ShowDone.addEventListener("click", function(){
    FileBtn.click();
});
Tombol.addEventListener("click", function(){
    FileBtn.click();
});

FileBtn.addEventListener("change", function(){
    if (FileBtn.value) {
        Teks.innerHTML = FileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        change();
        true1 =  true;
    } else {
        Teks.innerHTML = ".pdf, .jpeg, .jpg, .png";
        change();
        true1 =  false;
    }
})

const Buttons2 = document.querySelector("#buttons2");
const ShowDone2 = document.querySelector("#ups2");

function change2() {
    var chngs2 = document.getElementById('buttons2');
    var chnges2 = document.getElementById('ups2');
    
    if (FileBtn2.value === "") {
        chngs2.innerHTML = 'Upload';
        chnges2.classList.remove("done");
        chnges2.classList.add("up");
    } else {
        chngs2.innerHTML = 'Uploaded';
        chnges2.classList.remove("up");
        chnges2.classList.add("done");
    }
}

const FileBtn2 = document.getElementById("files2");
const Tombol2 = document.getElementById("buttons2");
const Teks2 = document.getElementById("texts2");

ShowDone2.addEventListener("click", function(){
    FileBtn2.click();
});
Tombol2.addEventListener("click", function(){
    FileBtn2.click();
});

FileBtn2.addEventListener("change", function(){
    if (FileBtn2.value) {
        Teks2.innerHTML = FileBtn2.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        change2();
        true2 = true;
    } else {
        Teks2.innerHTML = ".pdf, .jpeg, .jpg, .png";
        change2();
        true2 = false;
    }
})

const Buttons3 = document.querySelector("#buttons3");
const ShowDone3 = document.querySelector("#ups3");

function change3() {
    var chngs3 = document.getElementById('buttons3');
    var chnges3 = document.getElementById('ups3');
    
    if (FileBtn3.value === "") {
        chngs3.innerHTML = 'Upload';
        chnges3.classList.remove("done");
        chnges3.classList.add("up");
    } else {
        chngs3.innerHTML = 'Uploaded';
        chnges3.classList.remove("up");
        chnges3.classList.add("done");
    }
}

const FileBtn3 = document.getElementById("files3");
const Tombol3 = document.getElementById("buttons3");
const Teks3 = document.getElementById("texts3");

ShowDone3.addEventListener("click", function(){
    FileBtn3.click();
});
Tombol3.addEventListener("click", function(){
    FileBtn3.click();
});

FileBtn3.addEventListener("change", function(){
    if (FileBtn3.value) {
        Teks3.innerHTML = FileBtn3.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        change3();
        true3 = true;
    } else {
        Teks3.innerHTML = ".pdf, .jpeg, .jpg, .png";
        change3();
        true3 = false;
    }
});

let stepBtn = document.querySelector("#step-btn");
  stepBtn.addEventListener("click", function (e) {
    // e.preventDefault();
  
    if (
      true1 &&
      true2 ||
      true1 &&
      true3
    ) {
            window.location.href='Dashboard.html';
    }
  });