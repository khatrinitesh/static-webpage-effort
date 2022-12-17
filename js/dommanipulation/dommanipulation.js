// Below sharing the code to check empty data in javascript which will handle all the datatype values including null, undefined, and NaN. ⚡Code 🎯: 𝐜𝐨𝐧𝐬𝐭 𝐈𝐬𝐄𝐦𝐩𝐭𝐲 = (𝐝𝐚𝐭𝐚) => 𝐭𝐲𝐩𝐞𝐨𝐟 𝐝𝐚𝐭𝐚 === '𝐨𝐛𝐣𝐞𝐜𝐭' ? 𝐎𝐛𝐣𝐞𝐜𝐭.𝐤𝐞𝐲𝐬(𝐝𝐚𝐭𝐚 || {}).𝐥𝐞𝐧𝐠𝐭𝐡 == 𝟎 : !𝐁𝐨𝐨𝐥𝐞𝐚𝐧(𝐝𝐚𝐭𝐚); this post for future reference please do like Comment and share it with your friends to help them with knowlegeable content
// const isEmpty = (data) => typeof data === 'object' ? Object.keys(data || {}).length == 0 : !Boolean(data);
// console.log(isEmpty([]));
// console.log(isEmpty({}));
// console.log(isEmpty(""));
// console.log(isEmpty(null));
// console.log(isEmpty(undefined));
// console.log(isEmpty(NaN));
// console.log(isEmpty(0));
// console.log(isEmpty(2));
// console.log(isEmpty('hello'));

// avoid errors when accessing properties of null values
// const share = undefined
// // console.log(share.done);   // throws an error 
// console.log(share?.done);  // undefined

// convert anything into boolean
// console.log(!!0);
// console.log(!!'follow me');
// console.log(!!" ");
// console.log(!!NaN);
// console.log(!!10);

// pass infinite parameters to a function
// function Saved(...args){
//     console.log(args)
// }
// Saved('like','follow');

// determine if a functions or constructor was called using new
// function like(){
//     if(new.target){
//         console.log('i wasnt called using new')
//     }
//     else{
//         console.log('i wasnt cancelled using new')
//     }
// }
// new like();
// like();


// get checkbox values with vanilla js
// const form = document.querySelector('form');
// form.addEventListener('submit',(e) => {
// 	e.preventDefault();
// 	let skills = {};
// 	document.querySelectorAll('[type="checkbox"]').forEach(item => {
// 		if(item.checked === true){
// 			skills[item.value] = true;
// 		}
// 		else if(item.checked === false){
// 			skills[item.value] = false;
// 		}
// 	})

// 	console.log(Object.entries(skills))
// })

// random image with vanilla js 
const imgEl = document.getElementById('random-image');

const srcArray = ['https://via.placeholder.com/550x150', 'https://via.placeholder.com/350x250', 'https://via.placeholder.com/350x650', 'https://via.placeholder.com/500x150'];
// Stores path to images in an array

imgEl.addEventListener('click', () => {
    randomImage();
    // Runs randomImage function when user clicks on image
});

let index;
// Current image index

randomImage();
function randomImage() {

    const randomIndex = Math.floor(Math.random()*srcArray.length);
    // Generates random number between 0 and array length-1 (because Math.floor rounds)

    if (randomIndex !== index) {
    // If number NOT same as current image index...

        imgEl.src = srcArray[randomIndex];
        //...set as image src

        index = randomIndex;
        //...and as new current index value

    } else {
    // If number same as current index value (repeat)...

        randomImage();
        //...start function from beginning again

    }

}

// let Index;


// randomImage();
// function randomImage(){
// 	const randomIndex = Math.floor(Math.random() * srcArray.length);

// 	if(randomIndex !== Number(localStorage.getItem('index'))){
// 		img1.src = srcArray[randomIndex];
// 		localStorage.setItem('index',randomIndex)
// 	}
// 	else{
// 		localStorage.setItem
// 	}
// }

// is it safe to use innerHTML 
// const profile = document.getElementById('user_profile');
// const name = 'nitesh khatri';
// const bio = 'you may know me from my popular 1987 hit "never gonna to give you up"'

// const imges = `<img src="img/wallpaper.jpg"/>`
// const markup = `<h2>${name}</h2><p>${bio}</p>${imges}`
// profile.innerHTML = markup;

// const h2 = document.createElement('h2');
// h2.textContent = name;
// const p = document.createElement('p');
// p.innerText = bio
// profile.appendChild(p)

// // Did you know you can create a context menu (aka right-click menu) with `oncontextmenu` event listener The code bellow will fire an alert on right click Find in the comments links for ways to create a new context menu and replace the browser's default one easily!
// function handleAlert(){
//     alert('you right clicked');
// }

// let btn = document.querySelector('#btn');
// if(btn){
//   let disabled = btn.hasAttribute('disabled');
//   console.log(disabled)
// }
// let fieldInput = document.querySelector('#fiedinput');
// if(fieldInput){
//   let readonly = fieldInput.hasAttribute('readonly');
//   console.log(readonly)
// }


// const btn  = document.querySelector('.btn')
// btn.addEventListener("click", function() {
//   document.body.style.backgroundColor = 'red';
//   console.log('hi')
// });

// const url = 'https://api.wheretheiss.at/v1/satellites/25544'
// async function getISS(){
//   const response = await fetch(url)
//   const data = await response.json()
//   const {latitude,longitude} = data
//   document.getElementById('latitude').textContent = latitude
//   document.getElementById('longitude').textContent = longitude
// }
// getISS()

// const url2 = 'https://jsonplaceholder.typicode.com/posts'
// async function getJSON(){
//   const response = await fetch(url2)
//   const data2 = await response.json()
//   const {title,body} = data2
//   document.getElementById('title').textContent = title
//   document.getElementById('body').textContent = body
// }
// getJSON()

// let jsonObj = {
//     name:'harry',
//     channel:'CW',
//     friend:'rohan das',
//     food:'bhindi'
// }
// console.log(jsonObj)
// let myjsonStr = JSON.stringify( )
// console.log(myjsonStr)
// // myjsonStr = myjsonStr.replace('harry','sachin')
// console.log(myjsonStr)

// function myFunction(){
//     let gender = document.forms[0]
//     let txt = ''
//     let i ;

//     for(let i=0;i<gender.length;i++){
//         if(gender[i].checked){
//             txt = txt + gender[i].value + '';
//         }
//     }
//     document.getElementById('results').value = 'you label yourself as :' + txt;
// }


// const btn = document.getElementById('btn');
// btn.addEventListener('click',function(){
//     var r1 = document.getElementById('r1')
//     var r2 = document.getElementById('r2')

//     if(r1.checked == true){
//         alert('the channel selected is:' + r1.value)
//     }
//     else if(r2.checked == true){
//         alert('the channel selected is:' + r2.value)
//     }
//     else{
//         alert('no channel selected')
//     }
// });


// getElementsByTagName()
// const listItems = document.getElementsByTagName('li')
// for(i=0;i<listItems.length;i++){
// 	listItems[i].style.fontSize = '2rem'
// 	listItems[i].style.color = 'red'
// }
// console.log(listItems)

// querySelectorAll()
// const container = document.querySelectorAll('div')
// console.log(container)

// DOM manipulation
// const title = document.querySelector('#main-heading')
// console.log(title)

// CREATING ELEMENTS
// const ul = document.querySelector('ul')
// const li = document.createElement('li')

// ADDING ELEMENTS
// ul.append(li)

// MODIFYING THE TEXT
// const firstListitem = document.querySelector('.list-items')
// console.log(firstListitem.innerText)
// console.log(firstListitem.textContent)
// console.log(firstListitem.innerHTML)
// li.innerHTML = 'x-men'

// MODIFYING ATTRIBUTES AND CLASSES
// li.setAttribute('id','bullet_list')
// li.removeAttribute('id')

// li.classList.remove('list-items')


// TRAVERSE THE DOM

// PARENT NODE TRAVERSAL
// let ui = document.querySelector('ul')
// console.log(ui.parentNode.parentNode)
// console.log(ui.parentElement.parentElement)


// const html = document.documentElement
// console.log(html.parentNode)
// console.log(html.parentElement)

// CHILD NODE TRAVERSAL 
// let ui = document.querySelector('ul')
// console.log(ui.childNodes)
// console.log(ui.firstChild)
// console.log(ui.lastChild)

// ui.childNodes[1].style.backgroundColor = 'red'

// console.log(ui.children)

// console.log(ui.firstElementChild)
// console.log(ui.lastElementChild)


// SIBLING NODE TRAVERSAL
// let ui = document.querySelector('ul')
// const div = document.querySelector('div')
// console.log(div.childNodes)
// console.log(ui.previousElementSibling)
// console.log(ui.nextElementSibling)

// element.addEventListener("click",function)
// const btnTwo = document.querySelector('.btn-2');
// function alertBtn(){
// 	alert('I love javascript')
// }
// btnTwo.addEventListener('click',alertBtn);

// Mouseover
// const newBgColor = document.querySelector('.box-3')
// function ChangeBgColor(){
// 	newBgColor.style.backgroundColor = 'orange'
// }

// newBgColor.addEventListener('mouseover',ChangeBgColor)

// reveal event 
// const btnReveal = document.querySelector('.btn-reveal')
// const hiddenContent = document.querySelector('.hidden-content')

// function revealContent(){
// 	if(hiddenContent.classList.contains('btn-reveal')){
// 		hiddenContent.classList.remove('btn-reveal')
// 	}
// 	else{
// 		hiddenContent.classList.add('btn-reveal')	
// 	}
// }

// btnReveal.addEventListener('click',revealContent)

// EVENT PROPAGATION
// window.addEventListener('click',function(){
// 	console.log('window')
// },true)

// document.addEventListener('click',function(){
// 	console.log('document')
// },true)

// document.querySelector('.div2').addEventListener('click',function(){
// 	// e.stopPropagation()
// 	console.log('DIV 2')
// },{once:true})
// document.querySelector('.div1').addEventListener('click',function(){
// 	console.log('DIV 1')
// },true)
// document.querySelector('button').addEventListener('click',function(e){
// 	console.log(e.target.innerText = 'button clicked')
// },true);

// EVENT DELEGATION 
// document.querySelector('#football').addEventListener('click',function(e){
// 	e.preventDefault()
// 	console.log('football is clicked');
// 	const target = e.target 
// 	if(target.matches('li')){
// 		target.style.backgroundColor = 'orange'
// 	}
// })
// document.querySelector('#basketball').addEventListener('click',function(e){
// 	e.preventDefault()
// 	console.log('basketball is clicked');
// 	const target = e.target 
// 	if(target.matches('li')){
// 		target.style.backgroundColor = 'red'
// 	}
// })
// document.querySelector('#boxing').addEventListener('click',function(e){
// 	e.preventDefault()
// 	console.log('boxing is clicked');
// 	const target = e.target 
// 	if(target.matches('li')){
// 		target.style.backgroundColor = 'purple'
// 	}
// })

// document.querySelector('#sports').addEventListener('click',function(e){
// 	console.log(e.target.getAttribute('id') + ' is clicked');
// 	const target = e.target 
// 	if(target.matches('li')){
// 		target.style.backgroundColor = 'blue'
// 	}
// });

// const sports = document.querySelector('#sports')
// const newSport = document.createElement('li')
// newSport.innerText = 'rugby'
// newSport.setAttribute = ['id','rugby']

// sports.appendChild(newSport)

// let btn = document.querySelector('#new-quote');
// let quote = document.querySelector('.quote');
// let person = document.querySelector('.person')

// const quotes = [
//  {
//  	quote:`The greatest glory in living lies not in never falling, but in rising every time we fall. `,
//  	person:`Nelson Mandela`
//  },
//  {
//  	quote:`The way to get started is to quit talking and begin doing. `,
//  	person:`Walt Disney`
//  },
//  {
//  	quote:`Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`,
//  	person:`Steve Jobs`
//  },
//  {
//  	quote:`If life were predictable it would cease to be life, and be without flavor.`,
//  	person:`Eleanor Roosevelt`
//  },
// ]

// btn.addEventListener('click',function(){
// 	let random = Math.floor(Math.random() * quotes.length)
// 	quote.innerText = quotes[random].quote;
// 	person.innerText = quotes[random].person;
// });


// let btnopen = document.getElementById('btnopen')
// let modalContainer = document.getElementById('modal-container')
// let btnclose = document.getElementById('btnclose')

// // event listeners
// btnopen.addEventListener('click',function(){
// 	modalContainer.style.display = 'block'
// })

// btnclose.addEventListener('click',function(){
// 	modalContainer.style.display = 'none'
// })

// window.addEventListener('click',function(e){
// 	if(e.target === modalContainer){
// 		modalContainer.style.display = 'none'
// 	}
// })

// function toggle() {
//     let text = document.getElementById("extra");
//     let btn = document.getElementsByClassName("button")[0];

//     if (text.style.display === "none") {
//         text.style.display = "block";
//         btn.textContent = "Less";
//     } else {
//         text.style.display = "none";
//         btn.textContent = "More";
//     }
// }