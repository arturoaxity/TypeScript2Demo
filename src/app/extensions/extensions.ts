interface Date {
    addDaysToCurrentDay(days : number): Date;
    format():String;
}
Date.prototype.addDaysToCurrentDay = function(days: number): Date{
   let dat = new Date(this.valueOf());
   dat.setDate(dat.getDate() + days);
   return dat;
}

Date.prototype.format = function():String{
    let fecha = new Date(this.valueOf());
    var year = fecha.getFullYear();
    var month = (1 + fecha.getMonth()).toString();
    var day = fecha.getDate().toString();
    month = month.length > 1 ? month : '0' + month;
    day = day.length > 1 ? day : '0' + day;
    return `${day}/${month}/${year}`;
}


window.onload = function(){
    var fechaHoy = new Date();
    console.log(fechaHoy.toDateString());
    console.log(fechaHoy.format());
}