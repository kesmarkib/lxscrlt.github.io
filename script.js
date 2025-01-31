const heartContainer = document.getElementById("heart-container")

let fallSpeed = 5;

function generateHearts(){
    let x = Math.random() * 100;
    let deg = Math.random() * 360;
    let heart = document.createElement("div");
    heart.classList.add("heart")
    heart.style.top = "-100px";
    heart.style.left = `${x}%`; 
    let image = document.createElement("img");
    image.src = "images/background heart.svg";
    image.style.rotate = `${deg}deg`
    heart.appendChild(image)
    heartContainer.appendChild(heart);
    setTimeout(generateHearts, 1000/(fallSpeed*2));
}


function moveHeart(){ 
    Array.from(heartContainer.children).forEach(child => {
        let yPos = child.getBoundingClientRect().top;
        if(yPos > window.innerHeight){
            child.remove()
        }
        child.style.top = `${yPos += fallSpeed}px`
    });

    setTimeout(moveHeart, 1000/100);
}

moveHeart();

let opened = false

const seal = document.getElementById("seal")
const letter = document.getElementById("letter")

seal.addEventListener("click", ()=> {
    seal.remove();
    document.getElementById("envelope-top-polygon").setAttribute("points", "0, 300, 700, 300, 350, 0")
    document.getElementById("envelope-top").style.zIndex = "0";
    opened = true;
});

let out = false;

let letterOpen = false;

letter.addEventListener("click", ()=>{
    if(letterOpen == false && out == true){
        letter.style.boxShadow = "30px 30px 4px #0000004b";
        letterOpen = true;
        letter.remove();
        fallSpeed = 2
        document.getElementById("blur").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        document.getElementById("page-container").append(letter)
        letter.classList.add("letter_content")
        letter.style.zIndex = 3;
        letter.style.marginTop = "300px";
        letter.style.width = "600px";
        letter.style.height = "750px";

        let beginning = document.createElement("h")
        beginning.classList.add("letter_content")
        beginning.setAttribute("id", "beginning")
        beginning.innerHTML = "To My Love"
        letter.appendChild(beginning)

        let text = document.createElement("div")
        text.classList.add("letter_content")
        text.setAttribute("id", "text")
        text.innerHTML = 
        `<br id="be-my-valentine">Will you be my valentine 🥺</br>
         
        <ul> <strong>Reasons to be my valentine:</strong>
            <li>I am already yours, and I am Valentine</li>
            <li>I love you (more)</li>
            <li>I love you even more than that</li>
            <li>I miss you</li>
            <li>(I love you and you are my wife)</li>
        </ul>`

        letter.appendChild(text)

        letter.innerHTML += 
        `
        <div id="yes-container" class="letter_content">
            <input type="checkbox" id="yes">
            <label for="yes">YES</label>
        </div>
        <div id="no-container" class="letter_content">
            <input type="checkbox" id="no">
            <label for="no">No :(</label>
        </div>
        <button type="button" id="submit" class="letter_content">Submit</button>`

        let no = document.getElementById("no-container")
        let yes = document.getElementById("yes-container")
        no.addEventListener("mouseover", ()=>{
            let letterPos = letter.getBoundingClientRect().left
            let noPos = no.getBoundingClientRect().left - letterPos
            let yesPos = yes.getBoundingClientRect().left - letterPos

            no.style.left = `${yesPos}px`
            yes.style.left = `${noPos}px`

            document.getElementById("no").nextElementSibling.textContent = "Nice try ;)";
        });

        let submit = document.getElementById("submit")
        submit.addEventListener("click", ()=>{
            if(document.getElementById("yes").checked){
                document.getElementById("popup-blur").style.width = "100%"; 
                let popupBody = document.getElementById("popup-body")
                popupBody.style.height = "300px";
                popupBody.style.width = "500px";
                popupBody.style.borderWidth = "2px";

                document.getElementById("f-label").style.display = "none";
            }
        })
        
    }

    if(opened == true){
        letter.style.bottom = "150px";
        out = true;
    }
})

let badge = document.getElementById("badge")
badge.addEventListener("click", ()=>{
    badge.style.scale = `${Math.random() * (0.3 - 0.1) + 0.1}`
})

let fingerprint = document.getElementById("fingerprint")
fingerprint.addEventListener("click", ()=>{
    fingerprint.style.scale = `${Math.random() * (0.05 - 0.03) + 0.03}`
    document.getElementById("f-label").style.display = "inline";
})
