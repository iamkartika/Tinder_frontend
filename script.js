//get the data
let users = [
    {
    profilepic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    displayPic: "https://images.unsplash.com/photo-1518729582962-98d343ccb9e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4MzQ2NzQ4fHxlbnwwfHx8fHw%3D",
    pendingmessages: 2,
    location: "Jaipur,India",
    name: "Vaidhahi",
    age: 21,
    interests: [{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing"
    }],
    bio: " sit amet consectetur adipisicing elit. Recusandae, nobis..",
    isFriend: null
},
    {
    profilepic: "https://images.unsplash.com/photo-1625780528696-ef6530f9456d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwzMTU2MDU5fHxlbnwwfHx8fHw%3D",
    displayPic: "https://images.unsplash.com/photo-1623193903783-9a418ac9b2b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wzMTU2MDU5fHxlbnwwfHx8fHw%3D",
    pendingmessages: 8,
    location: "Delhi,India",
    name: "Arushi",
    age: 26,
    interests: [{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing"
    }],
    bio: "Lorem ipsum dolor sit amet . Recusandae, nobis..",
    isFriend: null
},

    {
    profilepic: "https://images.unsplash.com/photo-1520134788424-e6a26eaf8eea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwyNTUyMjQwfHxlbnwwfHx8fHw%3D",
    displayPic: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MjU1MjI0MHx8ZW58MHx8fHx8",
    pendingmessages: 3,
    location: "Mumbai,India",
    name: "Abhi",
    age: 19,
    interests: [{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing"
    }],
    bio: "Lorem ipsum dolor sit amet .",
    isFriend: null
},

    {
    profilepic: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8V3l0OVNYbXlseVF8fGVufDB8fHx8fA%3D%3D",
    displayPic: "https://images.unsplash.com/photo-1543205089-8f2143f321b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw5MzcxOTQzfHxlbnwwfHx8fHw%3D",
    pendingmessages: 5,
    location: "Coonoor,India",
    name: "Abhishek",
    age: 28,
    interests: [{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing"
    }],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nobis..",
    isFriend: null
},
];

function select(elem){
    return document.querySelector(elem);
}

let curr =0;// curr variable sows the 0th curr person
let isAnimating = false;// to click while animating

function setData(curr){
    select(".profileimg img").src = users[curr].profilepic;
    select(".badge h5").textContent = users[curr].pendingmessages;
    select(".location h3").textContent = users[curr].location;
    select(".name h1:nth-child(1)").textContent = users[curr].name;
    select(".name h1:nth-child(2)").textContent = users[curr].age;

    //getting the icon of 1st person
    var clutter ="";
    users[curr].interests.forEach(function(interest){
        clutter+= `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        ${interest.icon}<h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
    </div>`
    })
    select(".tags").innerHTML = clutter;

    select(".bio p").textContent = users[curr].bio;
}

(function setInitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr+1]?.displayPic;

    setData(curr);
    curr=2;
})();


function imageChange(){
    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
            //to swap the maincard to incomingcard and vise versa
            onComplete: function(){
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                })
                //to change the pic continuously
                if(curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
    
    
            }
        });

        tl.to(".maincard",{
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "a")

        .from(".incomingcard",{
        scale: .9,
        opacity: 0,
        ease: Circ,
        duration: 1.1
        },"a")
    }
};

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click",function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y: "100%",
        opacity: 0,
        stagger: .1,
        ease: Power4.easeInOut,
        duration: 1.5
    })
    
});

accept.addEventListener("click",function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y: "100%",
        opacity: 0,
        stagger: .1,
        ease: Power4.easeInOut,
        duration: 1.5
    })
    
});

(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function (element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container, overflow-hidden`);
        div.appendChild(element);
    })
})();

