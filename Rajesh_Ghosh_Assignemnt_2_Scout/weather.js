var days1=[],t1=[];
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        console.log(document.readyState);
        var temp=[];
        var flag=0;
        var year,month,a,date,city,country;
        function api_call(){
    //document.write("asda");
        flag=1;
        var hack= 'c0c4a4b4047b97ebc5948ac9c48c0559';
        var normal='54315abe59ac068a50e3312bc06abeda';
        var x = document.getElementById("searchdemo").value;
        console.log(document.readyState);
        // x=x.toString();
        //document.write(x);

        fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${x}&units=metric&cnt=7&APPID=${hack}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            console.log(document.readyState);
            var strDataJson = JSON.stringify(res);
            // document.write(strDataJson);
            //document.write(res.coord.lat)
            console.log(Object.keys(res));
            console.log(Object.values(res));

            var arr=[];
            var  days=[];
            var a = new Date(res.list[0]['dt'] * 1000);
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();

            var city = res.city.name;
            this.city=city;

            var country = res.city.country;
            this.country=country;

            this.year= year;
            this.month=month;
            this.a=a;
            this.date=date;
            for(var i =0 ; i< 7;i++)
            {
                arr.push(res.list[i]['dt']);
                days.push(timeConvert(res.list[i]['dt']));
            }
            //var days1=[];
            for (var i=0;i<7;i++)
            {
                days1.push(toDays(days[i]));
            }

            //var temp=[];
            for (var i=0;i<7;i++)
            {
                temp.push(res.list[i].temp.day);
            }
            this.days1=days1;
            this.temp=temp;
            console.log(days1);
            console.log(temp);
            startWrite();
           
        
        })
       
        }
        
        //  function startWrite(days,temp){
        //     document.getElementById("hh").innerHTML = days[1] ;
        // }

        function timeConvert( x){

            return (Math.floor(x/86400) + 4) % 7;

        }

        function toDays(x){
            var dict = {
              '0': "SUN",
              '1': "MON",         
              '2':"TUE",'3':"WED",'4':"THU",'5':"FRI",'6':"SAT"
              
            }
            for(var key in dict) {
             // var value = dict[key];
              if(key==x)
                return dict[key];

            }
        }