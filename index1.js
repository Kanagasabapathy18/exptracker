 let total=0;
            function func()
            {   
                let exp =document.getElementById("exp").value;
                let am =Number(document.getElementById("am").value);
               

                if(exp==""||am<=0){
                    alert("Enter valid details:"); 
                    return;                   
                }

                let li= document.createElement("li");
                li.textContent=exp +"- ₹"+ am 
                document.getElementById("ls").appendChild(li);

                total+=am;
                document.getElementById("tot").textContent=total;


                document.getElementById("exp").value="";
                document.getElementById("am").value="";


            }
           