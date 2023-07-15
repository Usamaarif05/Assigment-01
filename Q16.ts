var GusetName:string[]=["Hassnain","Bilal","Talal"];

GusetName.unshift("Hassan");
GusetName.splice(1,1,"Usama");
GusetName.push("Hamza");

var message=":you are invited on  dinner";



console.log(GusetName);

console.log(GusetName[0]+message);
console.log(GusetName[1]+message);
console.log(GusetName[2]+message);

