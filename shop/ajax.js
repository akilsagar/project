function changeprod(){
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.open("GET","fetch.php?prod="+document.getElementById("category").value,false);         xmlhttp.send(null);
    document.getElementById("product").innerHTML = xmlhttp.responseText;
                
    } 