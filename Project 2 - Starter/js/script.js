var students= document.getElementById("list").getElementsByTagName("li");
var pageSize=10;
var numberOfPages=Math.ceil(students.length/pageSize);

//To hide or show respective Pages data
function showPage(pageNo){
	//console.log(pageNo);
	var startItem=(pageNo-1)*pageSize;
	var lastItem=startItem+pageSize-1;
	for(i=0;i<students.length;i++)
	{
		if (i < startItem || i > lastItem) {
                students[i].style.display = 'none';
            } else {
                students[i].style.display = '';
            }
	}		
	
}

//To create pagination buttons
var buttons="";
for(i=1;i<=numberOfPages; i++){
	buttons=buttons+"<button onclick=showPage("+i+")>"+i+"</button>";
}
showPage(1);
document.getElementById("pg_btn").innerHTML=buttons;