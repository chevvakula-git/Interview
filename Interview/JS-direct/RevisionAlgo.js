<html>
<head>
<style>
.main{
background-color:'red';
height:'500px';
}
</style>
<title> hello world </title>

<script>

function CountFactors(){
	var ret =0;
	var value = 24;
	
	for(var i=1;i<=24;i++){
		if(value%i === 0){
			ret++
		}
		
	}
	
	console.log(ret);
	
}



</script>
<body>
<h1> beautifull nature </h1>
<input type="text" onkeyup="keyUpFunction(event)" style="width:300px"/>
<button onclick="CountFactors()">Generators</button>

</body>
</html>
</head>



