//QuerySELECTORAll//
var heaser = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';


var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i =0;i< odd.length;i++){
    odd[i].computedStyleMap.backgroundColor = '#f4f4f4';
}