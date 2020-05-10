function p() { 
              
    var n, i, flag = true; 
      
    
    n = document.myform.n.value; 
    n = parseInt(n) 
    for(i = 2; i <= n - 1; i++) 
        if (n % i == 0) { 
            flag = false; 
            break; 
        } 
          
    
    if (flag == true) 
        alert("the first number"+n + " is prime"); 
    else
        alert("the first number"+n + " is not prime"); 
} 
function frequent(){
    var a=['a',1,1,3,9,10,'a',1,1,1,1,'b','a',0,'a',1,2,3];
    var m;
    var mf=0;
    var mfe;
    for(var i=0;i<a.length-1;i++){
        m=0;
        for(var j=i;j<a.length;j++){
            if(a[i]==a[j]){
                m++;
            }
            if(mf<m){
                mf=m;
                mfe=a[i];
            }
            
        }
    }
   
    document.getElementById("mst").innerHTML="array is : "+a;
    document.getElementById("most").innerHTML="<b>"+mfe+"</b>"+" occuring "+mf+" times is the most frequent element in the array";
}
function tocase(){
    var x=document.querySelector("#text3").value;
    var y,z="";
    for(var i=0;i<x.length;i++){
        y=x.charAt(i);
        if(y==y.toUpperCase()){
            z+=y.toLowerCase();
        }
        else{
            z+=y.toUpperCase();
        }
    }
    
    document.getElementById("out").innerHTML=z;
}

function sum()
{
   var result=0;
    var sum=document.querySelector('#input4').value.split(',');
    var value1=sum.map(function (el){ return  parseInt(el);   } );
    // console.log(value1);
    //  value1=parseInt(value1);
        for(var i=0;i<value1.length;i++){
              r=value1[i];
            // console.log(isNaN(r))
             var s=r*r;
              result=result+s;
}
alert("sum of squares of numbers is "+result);
}
function truncate(){
    var x=document.getElementById("input6").value;
    // console.log(x);
    var y;
    y=x.substring(0,10);
    document.getElementById("str").innerHTML="Truncated string of length 10 is: "+y;
}
function oddeven(){
    for(var i=0;i<=15;i++){
        if((i%2)==0){
            alert(i+"is even");
             
                    }
        else{
            alert(i+"is odd");
            
        }
    }
}
function findLargest(){
    var first=document.getElementById("input71").value;
    first=parseInt(first);
    var second=document.getElementById("input72").value;
    second=parseInt(second);
    var result=Math.max(first,second);
    alert("greater integer is "+result);

}
function ex(){
    //var input=document.querySelector("input9");
    var result='';
    var array1=['j','a','v','a','s','c','r','i','p','t'];
    for(var i=0;i<array1.length;i++){
        //console.log(array1[i]);
       
         result=result+array1[i];
       
       document.write(result+"<br>")
      


    }
}
function alphab(){
    var a=[];
    var out="";
    var fout="";
    for(var i=0;i<5;i++){
        a[i]=prompt("enter a word");
    }
    for(var i=0;i<a.length;i++){
        out+=a[i]+", ";
    }
    document.getElementById("id1").innerHTML="Entered array of strings: "+"<b>"+out+"</b>";
    
    a.sort();
    
    for(var i=0;i<a.length;i++){
        fout+=a[i]+", ";
    }
    document.getElementById("id2").innerHTML="sorted array: "+"<b>"+fout+"</b>";
}
function patt(){
    //var input10=document.getElementById("input10");
    for(var i=0;i<=4;i++){
        for(var j=0;j<i;j++){
           // input10.innerHtml="*<br>"
           document.write("*");

        }
        document.write("<br>");
    }
}