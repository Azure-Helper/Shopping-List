function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
             var response = JSON.parse(this.responseText);
             var mlist=response.list;
            var tbody = document.getElementById("Tbody");
            var trow="";

            for(var i=0; i<mlist.length; i++){

                trow += `<tr>
                <th scope="row">${mlist[i].sNo}</th>      
                <td>${mlist[i].Name}</td> 
                <td>${mlist[i].Qnty}</td> 
                <td>${mlist[i].Unit}</td> 
                <td>${mlist[i].Type}</td> 
                <td>${mlist[i].Price}</td>
                <td><input class="checkk" type="checkbox" id="checking"> </td>
                </tr>`;
           }
            tbody.innerHTML = trow;

        }}
        xhttp.open("GET","./list.json",true);
        xhttp.send();
}

window.addEventListener("load", ajax);


function strikeon(){
    

}
