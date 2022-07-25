//모듈
exports.aaa - function(a,b){
    return a+b;
};
exports.bbb = function(a,b){
    return a-b;
}

aaa = function(a,b){
    return a+b;
}
bbb = function(a,b){
    return a-b;
}
module.exports = {aaa,bbb};

exports.ccc = function(a,b){
    return a*b;
}