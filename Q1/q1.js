const mixedArray = ['PIZZA', 10, true, 25, false, "Wings"];
        const mixedArray2 = [];
        

        function lowerCaseWords(){
            let promise = new Promise(function(resolve,reject){
                for(var i = 0; i < mixedArray.length; i++){
                    if(isNaN(mixedArray[i])){
                        mixedArray2.push(mixedArray[i].toLowerCase());
                    }
                }
                resolve(console.log(mixedArray2.sort()));
            })
        }
lowerCaseWords(mixedArray);
