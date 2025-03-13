const num = "Hubri Gubri";
try {
    if(isNaN(num)){
        throw "Not a number"
    } else {
        throw "True"
    }

} catch (error) {
    console.log('ERROR:',error);}
finally{
    console.log(`We've tried and logged.`);
}

// ERROR: Not a number
// We've tried and logged.