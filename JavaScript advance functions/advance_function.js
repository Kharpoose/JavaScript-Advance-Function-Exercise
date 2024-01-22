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
