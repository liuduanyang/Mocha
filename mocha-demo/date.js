function today(){
    var d=new Date(Date.now());

    return d.toISOString().slice(0,10); //返回 YYYY-MM-DD 年-月-日
}

module.exports.today=today;