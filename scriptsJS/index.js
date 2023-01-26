var str = "i love JS!",
j=0,
res = [];

while((j=str.indexOf(" ",j+1))>0){
	res.push(j+1);
}
console.log(res);