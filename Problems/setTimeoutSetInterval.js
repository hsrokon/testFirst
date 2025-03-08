
const clockId = setTimeout(()=>{
    console.log(1);
},2000)
console.log(`Clock Id ${clockId}`);

clearTimeout(clockId)//stops the timeout function
//without clockId only clearTimeout() won't work

let num = 1;
const intervalId = setInterval(() => {
    console.log(`interval id: ${intervalId}, num: ${num}`);
    num++;
    if (num > 5) clearInterval(intervalId);
}, 1000);

let num2 = 1;
const intervalId2 = setInterval(() => {
    console.log(`interval id_: ${intervalId2}, num_: ${num2}`);
    num2++;
    if (num2 > 5) clearInterval(intervalId2);
}, 1000);


for (let i = 1; i <= 3; i++) {
    const intervalId = setInterval(() => {
        console.log(`interval id>>: ${intervalId}, num>>: ${i}`);
        clearInterval(intervalId); // Stops after the first execution
    }, 1000);
}

let num3 = 0;
const clockId3 = setInterval(() => {
    num3++; // Increment num
    console.log(clockId3, num3); // Log inside setInterval

    if (num3 > 6) {
        clearInterval(clockId3);
    }
}, 1000);

/*
Clock Id 1                      setTimeoutSetInterval.js:5
interval id: 2, num: 1          setTimeoutSetInterval.js:12
interval id_: 3, num_: 1        setTimeoutSetInterval.js:19
interval id>>: 4, num>>: 1      setTimeoutSetInterval.js:27 
interval id>>: 5, num>>: 2      setTimeoutSetInterval.js:27
interval id>>: 6, num>>: 3      setTimeoutSetInterval.js:27
7 1                             setTimeoutSetInterval.js:35 
interval id: 2, num: 2          setTimeoutSetInterval.js:12 
interval id_: 3, num_: 2        setTimeoutSetInterval.js:19 
7 2                             setTimeoutSetInterval.js:35 
interval id: 2, num: 3          setTimeoutSetInterval.js:12 
interval id_: 3, num_: 3        setTimeoutSetInterval.js:19 
7 3                             setTimeoutSetInterval.js:35 
interval id: 2, num: 4          setTimeoutSetInterval.js:12 
interval id_: 3, num_: 4        setTimeoutSetInterval.js:19 
7 4                             setTimeoutSetInterval.js:35 
interval id: 2, num: 5          setTimeoutSetInterval.js:12 
interval id_: 3, num_: 5        setTimeoutSetInterval.js:19 
7 5                             setTimeoutSetInterval.js:35 
*/