let opt=document.querySelectorAll('option')

function gtnel(){
	let li=document.querySelectorAll('.or')
	for(let i=0;i<li.length;i++){
		li[i].remove()
	}
	let x=inp1.value
	let y=sel.value
	y=y.split(',')
	tari.innerHTML=x
	amis.innerHTML=y[1]
	let d=new Date(x,y[0])
	let or=d.getDay()
	if(or==0){
		or=7
	}
	for(let i=0;i<or-1;i++){
		let li=document.createElement('li')
		li.innerHTML=''
		li.className='or'
		document.querySelector('.days').appendChild(li)
	}
	while(y[0]==d.getMonth()){
		let o=d.getDate()
		let li=document.createElement('li')
		li.innerHTML=o
		li.className='or'
		document.querySelector('.days').appendChild(li)
		d.setDate(o+1)
	}
}

function next(){
	let li=document.querySelectorAll('.or')
	for(let i=0;i<li.length;i++){
		li[i].remove()
	}
	let x=+inp1.value
	console.log(x)
	let y
	for(let i=0; i<opt.length; i++){
		if(opt[i].value==sel.value){
			if(i==11){
				x++
				inp1.value=x
				y=opt[0].value
			} else {
				i++ 	
				y=opt[i].value
			}
		}
	}
	sel.value=y
	y=y.split(',')
	tari.innerHTML=x
	amis.innerHTML=y[1]
	let d=new Date(x,y[0])
	let or=d.getDay()
	if(or==0){
		or=7
	}
	for(let i=0;i<or-1;i++){
		let li=document.createElement('li')
		li.innerHTML=''
		li.className='or'
		document.querySelector('.days').appendChild(li)
	}
	while(y[0]==d.getMonth()){
		let o=d.getDate()
		let li=document.createElement('li')
		li.innerHTML=o
		li.className='or'
		document.querySelector('.days').appendChild(li)
		d.setDate(o+1)
	}
}

function prev(){
	let li=document.querySelectorAll('.or')
	for(let i=0;i<li.length;i++){
		li[i].remove()
	}
	let x=+inp1.value
	console.log(x)
	let y
	for(let i=11; i>=0; i--){
		if(opt[i].value==sel.value){
			if(i==0){
				x--
				inp1.value=x
				y=opt[11].value
			} 
			if(i!=0) {
				i-- 	
				y=opt[i].value
			}
		}
	}
	sel.value=y
	y=y.split(',')
	tari.innerHTML=x
	amis.innerHTML=y[1]
	let d=new Date(x,y[0])
	let or=d.getDay()
	if(or==0){
		or=7
	}
	for(let i=0;i<or-1;i++){
		let li=document.createElement('li')
		li.innerHTML=''
		li.className='or'
		document.querySelector('.days').appendChild(li)
	}
	while(y[0]==d.getMonth()){
		let o=d.getDate()
		let li=document.createElement('li')
		li.innerHTML=o
		li.className='or'
		document.querySelector('.days').appendChild(li)
		d.setDate(o+1)
	}
}

let k=new Date()
let a=k.getFullYear()
let b=k.getMonth()
let c=a
let g=b
tari.innerHTML=c
let t=opt[g].value
t=t.split(',')
let r=t[1]
amis.innerHTML=r
inp1.value=c
sel.value=t
let q=new Date(c,g)
let or=q.getDay()
if(or==0){
	or=7
}
for(let i=0;i<or-1;i++){
	let li=document.createElement('li')
	li.innerHTML=''
	li.className='or'
	document.querySelector('.days').appendChild(li)
}
while(g==q.getMonth()){
	let o=q.getDate()
	let li=document.createElement('li')
	li.innerHTML=o
	li.className='or'
	document.querySelector('.days').appendChild(li)
	q.setDate(o+1)
}