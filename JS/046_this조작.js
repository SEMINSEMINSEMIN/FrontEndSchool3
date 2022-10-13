var peter = {
    name: 'Peter Parker',
    sayName: function(){
        console.log(this.name);
    }
};

var bruce = {
    name: 'Bruce Wayne'
};
peter.sayName(); // Peter Parker
peter.sayName.call(bruce); // 마치 bruce에 있는 sayName처럼 사용할 수 있게 하겠다

// 재사용성을 위해
// 근데 잘 안 쓰임
// 차라리 bruce 안에 sayName을 넣는게 더 나음

//////
var peter = {
    name: 'Peter Parker',
    sayName: function(느낌표){
        console.log(this.name + 느낌표);
    }
};

peter.sayName.call(bruce, '!');
// Bruce Wayne!

/////
var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
          console.log(this.name+ ' is '+ is + ' or ' + is2);
      }
  }
  
  var bruce = {
    name : 'Bruce Wayne',
  }
  
  peter.sayName.apply(bruce, ['batman', 'richman']);
  
/* peter.sayName.apply(bruce, ['batman', 'richman']) 의 결과가 무엇이 될지 생각해보고 
apply 를 call로 바꾸어 호출했을 때와 비교해 봅시다. */

////
function sayName(){
    console.log(this.name);
  }
  
  var bruce = {
    name: 'bruce',
    sayName : sayName
  }
  
  var peter = {
    name : 'peter',
    sayName : sayName.bind(bruce)
  }
  
  peter.sayName();
  bruce.sayName();
  
  /* peter.sayName() 과 bruce.sayName() 의 결과 값이 무엇이 될지 생각해봅시다. */