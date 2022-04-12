//function myName(){ 
    const working_hours=40;
    var hours_worked=prompt("please Enter hours worked last week");
 
    //document.getElementById("hourswroked").value=hours_worked;
    //logical or in js
    //if(hours_worked<working_hours || hours_worked>working_hours){
        var regular_hours=hours_worked-working_hours;
        var overtime=hours_worked-working_hours;
        var tax=gross_pay*0.2;
        var pay_reg=regular_hours*10;
        var pay_over=overtime*15;
        var net_pay=gross_pay-tax;
        var gross_pay= pay_reg + over_pay;

        document.write("ovetime hours worked is "+ hours_worked);
        document.write("Regular hours is : "+ regular_hours)
        document.write("ovetime hours worked is"+ overtime);
        document.write("ovetime hours worked is "+ gross_pay);
        document.write("Gross_pay is :"+ tax);
        document.write("net pay is " + net_pay);
       
   // }

        
   // }