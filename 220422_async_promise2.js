
// async function called(val) {
//     if (val) {
//         let a = 'a'
//         return a = 'b'
//     }
//     else {
//         // throw new Error('err')
//         throw a = 'c'
//         // return a = 'd'

//     }
    
// }
// async function printC() {
//     const va = await called(0);
//     // console.log(va)
//     return va
// }

// // console.log(called(1));
// printC().then((v)=>console.log(v)).catch((c) => console.log(c));



// -----------------------------------------------------------------
/*
    비동기 처리
    Promise

    동기 처리
*/

// let a = 0;
// a();

function setTimeoutPromise(timeout) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve(); 
        }, timeout);
    })
}

// async await
async function timeoutCheckAdult(age, timeout) {
    
    console.log(`${age}. timeoutCheckAdult`);
    await setTimeoutPromise(timeout);
    console.log(`${age}. timeoutCheckAdult`);

    if (age > 20) return true;
    // let a = false
    throw false;
}

// async function asyncCheckAdult(age) {
//     if (age >= 20)  { return age; }
//     else throw new Error(age);
// }

// await 키워드 사용 함수의 종료를 기다리지 않고 다음 함수를 호출한다.

// function asyncCheckAdult(age) {
//     return new Promise((resolve, reject) => {
//         if (age >= 20)  resolve(age);
//         else    reject(age);
//     })
// }

async function testAsyncAwaitFunc()
{
    // timeoutCheckAdult(10, 8000);
    // timeoutCheckAdult(20, 5000);
    let a = (timeoutCheckAdult(19, 1000));

    // await timeoutCheckAdult(10, 8000);
    // await timeoutCheckAdult(20, 5000);
    // let b = await timeoutCheckAdult(30, 1000);
    console.log(`a : ${a.then(()=>console.log('then')).catch(()=>console.log('a.catch called'))}`)
    // console.log(`b : ${b}`)


    // let promises = [];

    // promises.push(timeoutCheckAdult(10, 5000).then((a)=>a).catch((a)=>a));
    // promises.push(timeoutCheckAdult(20, 3000).then((a)=>a).catch((a)=>a));
    // promises.push(timeoutCheckAdult(30, 1000).then((a)=>a).catch((a)=>a));

    // let results = await Promise.all(promises);
    // // let results = await Promise.all(promises).then(()=>true).catch(()=>false);
    // console.log(results);


    // const promiseCheckAdult = asyncCheckAdult(10);
    // promiseCheckAdult.then((age) => {
    //     console.log(`${age} is adult!!`);
    // }).catch((age) => {
    //     console.log(`${age} is not adult!!`);
    // });
    
    // const promiseCheckAdult1 = asyncCheckAdult(21);
    // promiseCheckAdult1.then((age) => {
    //     console.log(`${age} is adult!!`);
    // }).catch((age) => {
    //     console.log(`${age} is not adult!!`);
    // });
}

testAsyncAwaitFunc();



// const promise = new Promise(() => {
     
// });

/*
    new Promise 호출과 동시에 비동기 처리 시작
*/
//  const promise = new Promise((resolve, reject) => {
//     /*
//         시간이 오래 걸리는 실행문 ... 5초
//     */
//     reject();
//     resolve();
//  });

//  promise.then(() => {
//             console.log('1. promsie() then() called');
//      }).catch(() => {
//            console.log('2. promsie() catch() called');
//     });

// function testFunc1() {
//     console.log('testFunc1()');

//     let startTime = new Date().getTime();
//     while(new Date().getTime() - startTime < 100);

//     testFunc2();
// }

// function testFunc2() {
//     console.log('testFunc2()');
// }

// testFunc1();