//이벤트 처리하기
const EventEmitter = require('events');
const myEvent = new EventEmitter();
myEvent.on('event1',()=>{
    console.log('이벤트1');
});
myEvent.addListener('event2',()=>{
    console.log('이벤트2');
});
myEvent.on('event2',()=>{
    console.log('이벤트2 추가');
});
myEvent.once('event3',()=>{ // once 한번만 수행
    console.log('이벤트3');
});
myEvent.on('event4',()=>{
    console.log('이벤트4');
});
const listener  = ()=>{
    console.log('이벤트5');
}
myEvent.on('event5', listener);
myEvent.removeAllListeners('event5');
myEvent.emit('event5');
myEvent.removeAllListeners('event4');
myEvent.emit('event1');//이벤트 호출
myEvent.emit('event2');
myEvent.emit('event3');
myEvent.emit('evnet4');//지웠기 때문에 실행이 안된다.
console.log(myEvent.listenerCount('event1'));
console.log(myEvent.listenerCount('event2')); //2개 연결