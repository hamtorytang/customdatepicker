let prev = document.querySelector('.prev-month table'),
after = document.querySelector('.next-month table');

var btn = document.getElementById("trgbtn");
var btn1 = document.getElementById("trgbtn1");  
var btnpoint = document.getElementById("apps");

var leftyear = document.getElementById("exp-year");
var leftmonth = document.getElementById("exp-month");

var rightyear = document.getElementById("exp-year1");
var rightmonth = document.getElementById("exp-month1");


var today = new Date();
var firstday = new Date(today.getFullYear(),today.getMonth(),1);
var firstday1 = new Date(today.getFullYear(),today.getMonth()-1,1);

var dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var Year1=[31,29,31,30,31,30,31,31,30,31,30,31];
var Year2=[31,28,31,30,31,30,31,31,30,31,30,31];

var str = document.getElementById("start");
var end = document.getElementById("end");

var precount = 0;
var nextfirst = new Date();
var nextcount = 0;

var clickcount = 0;

var one;
var two;

var one1;
var two1;

var min;
var max;

var multmonths = new Date();
var multmonths1= new Date();

var exm;
var exm1;

var multcount;

var strStartDate = null;
var strEndDate = null;


//날짜위에 마우스 올리면 영역표시를 해줌
function mousy(e){
    var x = e.currentTarget;
    x.style = "background-color:grey";
    setTimeout(function(){x.style = "background-color:none";},300);
}

//왼쪽 달력위의 날짜를 클릭하면 활성화됨
function clicker(e){
    ++clickcount;
    var curr = e.currentTarget;
    
    if(str.value.length==0){
        str.value = firstday1.getFullYear() +"년 "+ (firstday1.getMonth()+1) + "월 " + curr.innerText +"일";
        one = new Date(firstday1.getFullYear(),firstday1.getMonth(),curr.innerText);
    }
    else if(clickcount!=3){
        end.value= firstday1.getFullYear() +"년 "+ (firstday1.getMonth()+1) + "월 " + curr.innerText +"일";
        two = new Date(firstday1.getFullYear(),firstday1.getMonth(),curr.innerText);
    }

    if(clickcount==3)
    {
        multcount = 0;
        if(one!=undefined&&two1!=undefined&&two==undefined&&one1==undefined)
        {
            str.value = "";
            end.value = "";
            clickcount = 0;
            
            if(firstday1.getFullYear()%4==0)
            {
                var year = Year1;
            }
            else
            {
                var year = Year2;
            }

            if(nextfirst.getFullYear()%4==0)
            {
                var year = Year1;
            }
            else
            {
                var year = Year2;
            }
            
            for(let i = 1; i <= year[firstday1.getMonth()];++i)
            {
                let check = document.getElementById(i);
                check.classList.remove("activate");
            }
            for(let i = 201; i <= year[nextfirst.getMonth()]+200;++i)
            {
                let check = document.getElementById(i);
                check.classList.remove("activate1");
            }

            one = undefined;
            two1 = undefined;
        }
        else if (one!=undefined&&two!=undefined){
        str.value = "";
        end.value = "";
        clickcount = 0;
    
        for(let i = one.getDate(); i <= two.getDate();i++)
        {
            let active1 = document.getElementById(i);
            
           
            active1.classList.remove("activate");
        }
        one = undefined;
        two = undefined;
        }
        else if(one1!=undefined&&two1!=undefined){
            str.value = "";
            end.value = "";
            clickcount = 0;
        
            for(let i = one1.getDate()+200; i <= two1.getDate()+200;i++)
            {
                let active1 = document.getElementById(i);
                
                
                active1.classList.remove("activate1");
            }
            one1 = undefined;
            two1 = undefined;
        }
    }

    else if(one1!=undefined && two!=undefined)
    {
        if(one1.getTime()>two.getTime())
        {
                str.value = "";
                end.value = "";
                clickcount = 0;
                one = null;
                two = null;
        }
    }
    

    else if(one!=undefined&&two!=undefined)
    {
        
        if(one.getTime()>two.getTime())
        {
            str.value = "";
            end.value = "";
            clickcount = 0;
            one = null;
            two = null;
        }
        else{
            
            for(let i = one.getDate(); i <= two.getDate();i++)
            {
                let active = document.getElementById(i);

                active.classList.add("activate");
            }

        }
    }
    
    if(two!=undefined||two1!=undefined)
    {
        btnpoint.disabled = false;
    }
    else{
        btnpoint.disabled = true;
    }

    
}

//오른쪽 달력위의 날짜를 클릭하면 활성화됨
function clicker1(e){
    ++clickcount;
    var curr = e.currentTarget;
    var year;
    var year1;

    

    if(str.value.length==0){
        str.value = firstday.getFullYear() +"년 "+ (firstday.getMonth()+1) + "월 " + curr.innerText +"일";
        one1 = new Date(firstday.getFullYear(),firstday.getMonth(),curr.innerText);
    }
    else if(clickcount!=3){
        end.value = firstday.getFullYear() +"년 "+ (firstday.getMonth()+1) + "월 " + curr.innerText +"일";
        two1 = new Date(firstday.getFullYear(),firstday.getMonth(),curr.innerText);
    }

    if(clickcount==3)
    {
        multcount = 0;
        if(one!=undefined&&two1!=undefined&&two==undefined&&one1==undefined)
        {
            str.value = "";
            end.value = "";
            clickcount = 0;

            if(firstday1.getFullYear()%4==0)
            {
                var year = Year1;
            }
            else
            {
                var year = Year2;
            }

            if(nextfirst.getFullYear()%4==0)
            {
                var year = Year1;
            }
            else
            {
                var year = Year2;
            }
            
            for(let i = 1; i <= year[firstday1.getMonth()];++i)
            {
                let check = document.getElementById(i);
                check.classList.remove("activate");
            }
            for(let i = 201; i <= year[nextfirst.getMonth()]+200;++i)
            {
                let check = document.getElementById(i);
                check.classList.remove("activate1");
            }

            one = undefined;
            two1 = undefined;
        }
        else if(one1!=undefined&&two1!=undefined){
        str.value = "";
        end.value = "";
        clickcount = 0;

        for(let i = one1.getDate()+200; i <= two1.getDate()+200;i++)
        {
            let active2 = document.getElementById(i);

            active2.classList.remove("activate1");
        }
        one1 = undefined;
        two1 = undefined;
        }
        else if(one!=undefined&&two!=undefined)
        {
            str.value = "";
            end.value = "";
            clickcount = 0;
        
            for(let i = one.getDate(); i <= two.getDate();i++)
            {
                let active1 = document.getElementById(i);
                active1.classList.remove("activate");
            }
            one = undefined;
            two = undefined;
        }
    }

    else if(one1!=undefined&&two1!=undefined)
        {
            
            if(one1.getTime()>two1.getTime())
            {
                str.value = "";
                end.value = "";
                clickcount = 0;
                one1 = null;
                two1 = null;
            }
            else{   
            
                for(let i = one1.getDate()+200; i <= two1.getDate()+200;i++)
                {
                    let active1 = document.getElementById(i);
    
                    active1.classList.add("activate1");
                }
    
            }
        }

    else if(one!=undefined&&two1!=undefined&&two==undefined&&one1==undefined)
        {
            if(one.getFullYear()%4==0)
                year = Year1;
            else
                year = Year2;
            
            if(two1.getFullYear()%4==0)
                year1 = Year1;
            else
                year1 = Year2;

            if(two1.getMonth()-one.getMonth()==1&&two1.getFullYear()==one.getFullYear()){
            
                for(let i = one.getDate(); i <= year[one.getMonth()];++i)
                {
                    let check = document.getElementById(i);
                    check.classList.add("activate");
                }
                for(let i = 201; i <= two1.getDate()+200;++i)
                {
                    let check = document.getElementById(i);
                    check.classList.add("activate1");
                }
            }
            else if(two1.getMonth()-one.getMonth()==-11&&two1.getFullYear()-one.getFullYear()==1)
            {
                for(let i = one.getDate(); i <= year[one.getMonth()];++i)
                {
                    let check = document.getElementById(i);
                    check.classList.add("activate");
                }
                for(let i = 201; i <= two1.getDate()+200;++i)
                {
                    let check = document.getElementById(i);
                    check.classList.add("activate1");
                }
            }
            else{
                    multcount = 1;
                    multcount++;
                    multmonths = one;
                    multmonths1 =two1;
                    min = multmonths.getMonth();
                    max = multmonths1.getMonth();
                    
                    
                    for(let i = 100; i < 106; ++i)
                    {
                        let delt = document.getElementById(i);
                        delt.remove();
                    }
                    exm = new Date(multmonths1.getFullYear(),multmonths1.getMonth(),1);
                    Calendershownext(exm);
                    
                    for(let i = 0; i < 6; ++i)
                    {
                        let delt = document.getElementById(i);
                        delt.remove();
                    }
                    exm1 = new Date(multmonths1.getFullYear(),multmonths1.getMonth()-1,1);
                    Calendershowprev(exm1);
                   
            }
        }

        if(two!=undefined||two1!=undefined)
        {
            btnpoint.disabled = false;
        }
        else{
            btnpoint.disabled = true;
        }

        
}

//PREVIOUS 버튼을 누르면 활성화됨
function myFunctionpre(){
    
    for(let i = 0; i < 6; ++i)
    {
        let delt = document.getElementById(i);
        delt.remove();
    }
    for(let i = 100; i < 106; ++i)
    {
        let delt = document.getElementById(i);
        delt.remove();
    }
    precount--;
    firstday1.setMonth(firstday1.getMonth()-1,1);
    Calendershowprev(firstday1);

    nextcount++;
    nextfirst.setMonth(nextfirst.getMonth()-1,1);
    Calendershownext(nextfirst);
}

//NEXT 버튼을 누르면 활성화됨
function myFunctionnext(){
    
    for(let i = 100; i < 106; ++i)
    {
        let delt = document.getElementById(i);
        delt.remove();
    }
    for(let i = 0; i < 6; ++i)
    {
        let delt = document.getElementById(i);
        delt.remove();
    }

    nextcount++;
    nextfirst.setMonth(nextfirst.getMonth()+1,1);
    Calendershownext(nextfirst);
    
    precount--;
    firstday1.setMonth(firstday1.getMonth()+1,1);
    Calendershowprev(firstday1);
}

//왼쪽 달력을 표시해줌
function Calendershowprev(someday){
    var weekcount = 0;
    var daycount = 1;
    var year;
    var checkit;
    
    if(precount<0)
    {
        firstday1 = someday;
    }
    if(firstday1.getFullYear()%4==0)
    {
        var year = Year1;
    }
    else
    {
        var year = Year2;
    }
    leftyear.innerHTML = (firstday1.getFullYear()).toString();
    leftmonth.innerHTML = monthList[firstday1.getMonth()];

    if(strStartDate==null)
    {
        strStartDate = new Date();
        let k = Date.now();
        let k1 = new Date(k);
        k1.setFullYear(k1.getFullYear()-1);
        strStartDate = k1;
        console.log(strStartDate);
    }
    if(strEndDate==null)
    {
        strEndDate = new Date();
        let k = Date.now();
        let k1 = new Date(k);
        strEndDate = k1;
        console.log(strEndDate);
    }

    if(firstday1.getMonth()==strStartDate.getMonth()&&firstday1.getFullYear()==strStartDate.getFullYear())
    {
        btn.disabled = true;
    }
    else{
        btn.disabled = false;
    }

    for(let i = 0; i < 6; ++i)
    {
        var week = document.createElement("tr");
        week.setAttribute("id",weekcount);
        for(let j = 0; j < 7; ++j)
        {
            if(i==0&&j < firstday1.getDay() || daycount>year[firstday1.getMonth()])
            {
                var day = document.createElement("td");
                week.appendChild(day);
            }
            else{
                var day = document.createElement("td");
                day.setAttribute("id",daycount);
                if(min != undefined&&max!=undefined&&multcount!=0){
                    if(firstday1.getFullYear()==multmonths.getFullYear()){
                        if(firstday1.getMonth()==multmonths.getMonth()&&daycount>=multmonths.getDate())
                        {
                            day.classList.add("activate");
                        }
                        else if(firstday1.getMonth()>multmonths.getMonth()&&firstday1.getFullYear()<multmonths1.getFullYear())
                        {
                            day.classList.add("activate");
                        }
                        else if(firstday1.getMonth()>multmonths.getMonth()&&firstday1.getMonth()<multmonths1.getMonth()&&firstday1.getFullYear()==multmonths1.getFullYear()){
                            day.classList.add("activate");
                        }
                    }
                    else if(firstday1.getFullYear()>multmonths.getFullYear())
                    {
                        if(firstday1.getMonth()<multmonths1.getMonth())
                        {
                            day.classList.add("activate");
                        }
                        else if (firstday1.getMonth()==multmonths1.getMonth()&&daycount<=multmonths1.getDate())
                        {
                            day.classList.add("activate");
                        }
                    }
                }
               
                day.innerText = daycount;
                checkit = new Date(firstday1.getFullYear(),firstday1.getMonth(),daycount);
                if(checkit.getTime()<strEndDate.getTime()&&checkit.getTime()>strStartDate.getTime())
                {
                    day.addEventListener('click', clicker);
                    day.addEventListener('mouseover', mousy);
                }
                else
                {
                    day.classList.add("exceptions");
                }
                week.appendChild(day);
                daycount++;
            }
        }
        weekcount++;
        prev.appendChild(week);
    }
    
}

//오른쪽 달력을 표시해줌
function Calendershownext(someday){
    var weekcount = 100;
    var daycount = 1;
    var year;
    var checkit;

    if(nextcount>0)
    {
        firstday = someday;
    }

    if(firstday.getFullYear()%4==0)
    {
        var year = Year1;
    }
    else
    {
        var year = Year2;
    }

    if(firstday.getMonth()==2&&firstday.getFullYear()==2021)
    {
        btn1.disabled = true;
    }
    else{
        btn1.disabled = false;
    }

    rightyear.innerHTML = (firstday.getFullYear()).toString();
    rightmonth.innerHTML = monthList[firstday.getMonth()];

    if(strStartDate==null)
    {
        strStartDate = new Date();
        let k = Date.now();
        let k1 = new Date(k);
        k1.setFullYear(k1.getFullYear()-1);
        strStartDate = k1;
    }

    if(strEndDate==null)
    {
        strEndDate = new Date();
        let k = Date.now();
        let k1 = new Date(k);
        strEndDate = k1;
    }

    for(let i = 0; i < 6; ++i)
    {
        var week = document.createElement("tr");
        week.setAttribute("id",weekcount);
        for(let j = 0; j < 7; ++j)
        {
            if(i==0&&j < firstday.getDay() || daycount>year[firstday.getMonth()])
            {
                var day = document.createElement("td");
                week.appendChild(day);
            }
            else{
                var day = document.createElement("td");
                day.setAttribute("id",daycount+200);
                if(max != undefined&&max!=undefined&&multcount!=0){
                    if(firstday.getFullYear()==multmonths1.getFullYear()){
                        if(firstday.getMonth()==multmonths1.getMonth()&&daycount<=multmonths1.getDate())
                        {
                            day.classList.add("activate1");
                        }
                        else if(firstday.getMonth()<multmonths1.getMonth()&&firstday.getFullYear()>multmonths.getFullYear())
                        {
                            day.classList.add("activate1");
                        }
                        else if(firstday.getMonth()<multmonths1.getMonth()&&firstday.getMonth()>multmonths.getMonth()&&firstday.getFullYear()==multmonths.getFullYear())
                        {
                            day.classList.add("activate1");
                        }
        
                    }
                    else if(firstday.getFullYear()<multmonths1.getFullYear())
                    {
                        if(multmonths.getMonth()<firstday.getMonth())
                        {
                            day.classList.add("activate1");
                        }
                        else if(multmonths.getMonth()==firstday.getMonth()&&daycount>=multmonths.getDate())
                        {
                            day.classList.add("activate1");
                        }
                    }
                }
                day.innerText = daycount;
                checkit = new Date(firstday.getFullYear(),firstday.getMonth(),daycount);
                if(checkit.getTime()<strEndDate.getTime()&&checkit.getTime()>strStartDate.getTime())
                {
                    day.addEventListener('click', clicker1);
                    day.addEventListener('mouseover', mousy);
                }
                else
                {
                    day.classList.add("exceptions");
                }
                week.appendChild(day);
                daycount++;
            }
        }
        weekcount++;
        after.appendChild(week);
    }
    
}



Calendershowprev(dayList);
Calendershownext(dayList);
