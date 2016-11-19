var x = document.querySelectorAll("#ItemListGroup li");
for(i = 0; i < x.length; i++){
console.log(i);
x[i].addEventListener("click", function(){
	console.log("sdjhsjdhjsd"  + this.id);
	if(this.nextElementSibling.classList.contains("contentListNone")){
		this.nextElementSibling.classList.remove("contentListNone");
		this.nextElementSibling.classList.add("contentListBlock");
		applyAnimation(this.id , "slideInDown");
	}
	else{
		this.nextElementSibling.classList.remove("contentListBlock");
		this.nextElementSibling.classList.add("contentListNone");
		applyAnimation(this.id , "slideInUp");
	}
	// this.nextElementSibling.classList.toggle("contentListBlock");
	// applyAnimation()	
});
}

function applyAnimation(identifier, a){
	console.log("#" + identifier + " ~ .animated");
	var elementList = document.querySelectorAll("#" + identifier + " ~ .animated");
	console.log(elementList);
	for(i = 0; i < elementList.length; i++){
		var e = elementList[i];
		if(e.id.indexOf("ListGroupItem") !== -1){
			console.log("animating li" + e.id);
			e.classList.remove("slideInDown");
			e.classList.remove("slideInUp");
			
			void e.offsetWidth;
			e.classList.add(a);
		}
		else if(e.classList.contains("contentListBlock")){
			console.log("animating span " + e.id);
			e.classList.remove("slideInUp");
			e.classList.remove("slideInDown");
			
			void e.offsetWidth;
			e.classList.add(a);	
		}
	}
}