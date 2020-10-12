
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const m = [ ];
    if (matrix === undefined) {
        return m;
    } 

    for (let i = 0; i<matrix.length; i++ ){
        let arr = matrix[i];
        if (i%2 == 0) {
            for (let j = 0; j<arr.length; j++){
                m.push(arr[j]);
            } 
        }else {
            arr = arr.reverse();
            for (let j = 0; j<arr.length; j++){
                m.push(arr[j]);      
            }          
        }        
    }
    return m;
}

