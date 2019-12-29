    function startWrite(){

            console.log(document.getElementById("hh1").innerHTML);
            //console.log(document.readyState);
            console.log(days1);
            document.getElementById("hh1").childNodes[0].textContent = days1[1] ;
            document.getElementById("hh2").childNodes[0].textContent = days1[2] ;
            document.getElementById("hh3").innerHTML = days1[3] ;
            document.getElementById("hh4").childNodes[0].textContent = days1[4] ;
            document.getElementById("hh5").childNodes[0].textContent = days1[5] ;
            document.getElementById("hh6").childNodes[0].textContent = days1[6] ;

            document.getElementById("t1").childNodes[0].textContent = temp[1] ;
            document.getElementById("t2").childNodes[0].textContent = temp[2] ;
            document.getElementById("t3").childNodes[0].textContent = temp[3] ;
            document.getElementById("t4").childNodes[0].textContent = temp[4] ;
            document.getElementById("t5").childNodes[0].textContent = temp[5] ;
            document.getElementById("t6").childNodes[0].textContent = temp[6] ;

            console.log(date,month,year);
            console.log(city,country);

             document.getElementById("day").childNodes[0].textContent = days1[0];
            document.getElementById("date").childNodes[0].textContent = date;
            document.getElementById("month").childNodes[0].textContent = month;
            document.getElementById("year").childNodes[0].textContent = year;

            document.getElementById("city").childNodes[0].textContent = city;
            document.getElementById("country").childNodes[0].textContent = country;

            document.getElementById("curr").childNodes[0].textContent = temp[0];

            temp.length=0;
            days1.length=0;
                        



        }