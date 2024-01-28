/*
function greeting() {
  console.log("hello");
}
greeting();

const num = 2;
const function1 = function () {
  console.log("hello2");
};

console.log(function1);
function1();

const onject1 = {
  num: 2,
  fun: function () {
    console.log("hello3");
  },
};

onject1.fun();

function display(param) {
    console.log(param);
}

display(2);

function rum(param){
    param();
}

rum(function(){
    console.log("hello4")
    //callback function
});
*/
/*
setTimeout(function(){
  console.log("timeout");
  console.log("timeous2")
}, 3000);

console.log("next line");

setInterval(function(){
  console.log("interval")
}, 3000);

console.log("next line2")

*/

["make dinner", "watch youtube", "wash dishes"].forEach(function (
  value,
  index
) {
  if (value === "wash dishes") {
    return;
  }
  console.log(value);
  console.log(index);
});
