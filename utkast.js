let list=[345,7123,8123,-1252];
function arraySum(){
    let total = 0;
    for (i=0;i<list.length;i++){
        total+=list[i];
    }
    return total;
}
console.log(arraySum(345,7123,8123,-1252));