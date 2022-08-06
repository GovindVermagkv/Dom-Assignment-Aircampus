
    var list1=[];
    var list2=[];
    var list3=[];
    var list4=[];
    var list5=[];
    let n=1;
    let x=0;

    function AddRow(){
 var addRow=document.getElementById("show")
 var newRow=addRow.insertRow(n);
 
 list1[x]='<input type="checkbox" id="checkbox"  onclick="checking()" >';
 list2[x]=document.getElementById("input").value;
 list3[x]='<input type="button" id="edit" value="Edit">';
 list4[x]='<input type="button" id="delete" value="Delete" onclick="removed()">';
 list5[x]='<input type="button" id="submit" value="submit" onclick="checking()">';


    
    var cell1=newRow.insertCell(0)
    var cell2=newRow.insertCell(1)
    var cell3=newRow.insertCell(2)
    var cell4=newRow.insertCell(3)
    var cell5=newRow.insertCell(4)
   
    cell1.innerHTML=list1[x];
    cell2.innerHTML=list2[x];
    cell3.innerHTML=list3[x];
    cell4.innerHTML=list4[x];
    cell5.innerHTML=list5[x];
    
 n++
 x++

    }

  

        function removed(){

            document.getElementById("show").deleteRow(1)
        
        }
        function removed2(){

            document.getElementById("show2").deleteRow(1)
        
        }


   

        function checking(){
            let n=1;
            let x=0;
            var verify=document.getElementById("checkbox").checked=true;
           


                var addRow=document.getElementById("show2")
                var newRow=addRow.insertRow(n);
                
                list1[x]=document.getElementById("input").value;
                list2[x]='<input type="button" id="edit" value="Edit">';
                list3[x]='<input type="button" id="delete" value="Delete" onclick="removed2()">';
               
               
                   
                   var cell1=newRow.insertCell(0)
                   var cell2=newRow.insertCell(1)
                   var cell3=newRow.insertCell(2)
                  
                   cell1.innerHTML=list1[x];
                   cell2.innerHTML=list2[x];
                   cell3.innerHTML=list3[x];
            
                n++
                x++
            

        }

        function editing(){
            
        }