import { createStore } from './index'



function action() {
  return {
  type: 'action'
  }
}

function  reducer(state=0, action) {
  if (action.type === 'action') {
    return state+1
  }
}

//创建store时要传入reducer进去 这个reducer必须是一个function 
let store = createStore(reducer)

let number = document.getElementById('number')
//监听者  调用subscribe将会把要执行的函数放到一个listener队列中
const unsubscribe = store.subscribe(() => {
  number.innerText = store.getState() + ''
})

//dispatch执行动作  必须是一个对象  会先执行之前传入的函数  此时currentState由0变为1  然后触发监听者  执行listener队列中的函数 改变listener队列状态

let button = document.getElementById('button')
button.onclick = function() {
  store.dispatch(action())
}

