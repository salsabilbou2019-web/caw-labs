 const mean=function(list){
    let result=0;
for(let i=0;i<list.length ;i++){
result=result+list[i];
}
return result/list.length;

};
module.exports = mean;