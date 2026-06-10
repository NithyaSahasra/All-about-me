/* =====================================
   NITHYA'S UNIVERSE
   VERSION 3
===================================== */

/* =====================================
   PASSWORD SYSTEM
===================================== */

let universePassword =
localStorage.getItem("nithyaPassword") || "nithya20";

function togglePassword(){

    const input =
    document.getElementById("passwordInput");

    if(input.type === "password"){
        input.type = "text";
    }
    else{
        input.type = "password";
    }
}

/* =====================================
   LOGIN
===================================== */

function unlockUniverse(){

    const password =
    document.getElementById("passwordInput").value;

    const msg =
    document.getElementById("loginMessage");

    if(password === universePassword){

        document
        .getElementById("login-screen")
        .classList.add("hidden");

        document
        .getElementById("unlock-screen")
        .classList.remove("hidden");

        createBurstHearts();

        setTimeout(()=>{

            document
            .getElementById("unlock-screen")
            .classList.add("hidden");

            document
            .getElementById("universe")
            .classList.remove("hidden");

        },2500);

    }
    else{

        msg.innerHTML =
        "❌ Wrong Password";

    }
}

/* =====================================
   FORGOT PASSWORD
===================================== */

function openForgotPassword(){

    document
    .getElementById("forgotModal")
    .classList.remove("hidden");
}

function closeForgotPassword(){

    document
    .getElementById("forgotModal")
    .classList.add("hidden");
}

function resetPassword(){

    const answer =
    document
    .getElementById("securityAnswer")
    .value
    .toLowerCase()
    .trim();

    const newPassword =
    document
    .getElementById("newPassword")
    .value;

    if(answer === "pink"){

        universePassword =
        newPassword;

        localStorage.setItem(
            "nithyaPassword",
            newPassword
        );

        alert(
        "🌸 Password Updated Successfully!"
        );

        closeForgotPassword();
    }
    else{

        alert(
        "❌ Wrong Security Answer"
        );
    }
}

/* =====================================
   MODALS
===================================== */

function openModal(id){

    const modal =
    document.getElementById(id);

    if(modal){

        modal.classList.remove("hidden");

        createSparkleBurst();
    }
}

function closeModal(id){

    const modal =
    document.getElementById(id);

    if(modal){

        modal.classList.add("hidden");
    }
}

/* =====================================
   CLICK OUTSIDE CLOSE
===================================== */

window.addEventListener("click",(e)=>{

    if(e.target.classList.contains("section-modal")){

        e.target.classList.add("hidden");
    }

    if(e.target.classList.contains("modal")){

        e.target.classList.add("hidden");
    }

});

/* =====================================
   FLOATING HEARTS
===================================== */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.bottom = "-50px";

    heart.style.fontSize =
    (20 + Math.random()*25) + "px";

    heart.style.zIndex = "1";

    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    let pos = -50;

    const interval = setInterval(()=>{

        pos += 2;

        heart.style.bottom =
        pos + "px";

        heart.style.opacity =
        1 - pos/900;

        if(pos > window.innerHeight+100){

            clearInterval(interval);

            heart.remove();
        }

    },25);
}

setInterval(createHeart,1800);

/* =====================================
   BURST HEARTS
===================================== */

function createBurstHearts(){

    for(let i=0;i<20;i++){

        setTimeout(()=>{

            createHeart();

        },i*100);
    }
}

/* =====================================
   SPARKLES
===================================== */

function createSparkle(x,y){

    const sparkle =
    document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position="fixed";

    sparkle.style.left=x+"px";
    sparkle.style.top=y+"px";

    sparkle.style.pointerEvents="none";

    sparkle.style.fontSize=
    (10+Math.random()*20)+"px";

    sparkle.style.zIndex="9999";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },1000);
}

document.addEventListener(
"mousemove",
(e)=>{

    if(Math.random()>.85){

        createSparkle(
        e.clientX,
        e.clientY
        );
    }

});

/* =====================================
   SPARKLE BURST
===================================== */

function createSparkleBurst(){

    for(let i=0;i<25;i++){

        setTimeout(()=>{

            createSparkle(
            Math.random()*window.innerWidth,
            Math.random()*window.innerHeight
            );

        },i*30);
    }
}

/* =====================================
   BUTTERFLIES
===================================== */

function createButterfly(){

    const butterfly =
    document.createElement("div");

    butterfly.innerHTML = "🦋";

    butterfly.style.position="fixed";

    butterfly.style.left="-50px";

    butterfly.style.top=
    Math.random()*window.innerHeight+"px";

    butterfly.style.fontSize="28px";

    butterfly.style.pointerEvents="none";

    butterfly.style.zIndex="2";

    document.body.appendChild(butterfly);

    let x=-50;

    const interval=setInterval(()=>{

        x+=2;

        butterfly.style.left=x+"px";

        butterfly.style.top=
        parseFloat(
        butterfly.style.top
        )+
        Math.sin(x/50);

        if(x>window.innerWidth+50){

            clearInterval(interval);

            butterfly.remove();
        }

    },20);
}

setInterval(
createButterfly,
8000
);

/* =====================================
   GIFT ANIMATION
===================================== */

const giftItems =
document.querySelectorAll(
".gift-item"
);

giftItems.forEach((item,index)=>{

    item.style.opacity="0";

    setTimeout(()=>{

        item.style.transition=
        "all 0.7s ease";

        item.style.opacity="1";

        item.style.transform=
        "translateY(0)";

    },index*200);
});

/* =====================================
   TITLE EASTER EGG
===================================== */

let titleClicks = 0;

document.addEventListener(
"DOMContentLoaded",
()=>{

    const titles =
    document.querySelectorAll(
    ".hero-title,.main-title"
    );

    titles.forEach(title=>{

        title.addEventListener(
        "click",
        ()=>{

            titleClicks++;

            if(titleClicks >= 7){

                launchEasterEgg();

                titleClicks = 0;
            }

        });

    });

});

function launchEasterEgg(){

    alert(
    "🌸 Secret Message 🌸\n\nNever stop dreaming, Nithya 💖"
    );

    createSparkleBurst();
    createBurstHearts();
}

/* =====================================
   CONFETTI
===================================== */

function createConfetti(){

    const emojis = [
        "🎀",
        "🌸",
        "💖",
        "✨",
        "🎉"
    ];

    for(let i=0;i<50;i++){

        const confetti =
        document.createElement("div");

        confetti.innerHTML =
        emojis[
        Math.floor(
        Math.random()*emojis.length
        )
        ];

        confetti.style.position="fixed";

        confetti.style.left=
        Math.random()*100+"vw";

        confetti.style.top="-50px";

        confetti.style.fontSize=
        (15+Math.random()*20)+"px";

        confetti.style.zIndex="9999";

        document.body.appendChild(confetti);

        let y=-50;

        const fall=setInterval(()=>{

            y+=5;

            confetti.style.top=
            y+"px";

            if(y>
            window.innerHeight+50){

                clearInterval(fall);

                confetti.remove();
            }

        },20);
    }
}

/* =====================================
   ACHIEVEMENT CONFETTI
===================================== */

const achievementCard =
document.querySelector(
'[onclick="openModal(\'achievementModal\')"]'
);

if(achievementCard){

    achievementCard.addEventListener(
    "click",
    createConfetti
    );
}

/* =====================================
   ENTER KEY LOGIN
===================================== */

document.addEventListener(
"keydown",
(e)=>{

    if(e.key==="Enter"){

        const login =
        document.getElementById(
        "login-screen"
        );

        if(
        !login.classList.contains(
        "hidden"
        )
        ){

            unlockUniverse();
        }
    }
});

/* =====================================
   WELCOME MESSAGE
===================================== */

window.addEventListener(
"load",
()=>{

    console.log(
    "✨ Welcome to Nithya's Universe ✨"
    );

});