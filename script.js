var namen = new Array();
		var tabelle = new Array();
		var counter = 0;
        var start;
		
        
        
          function reload(){
            window.location.reload();
        }
	
        
		function names(){
            
          document.getElementById("myName").innerHTML = '<option hidden>' + "Schüler"+'</option>';
            
			switch(document.getElementById("myClass").value){
				case "1AHITM":	
									
					namen[0] = "Karl";
					namen[1] = "Lena";
					namen[2] = "Herbert";
					namen[3] = "Lisa";
					namen[4] = "Michael";
                    
				break;
				
				case "2AHITM":	
									
					namen[0] = "Friedrich";
					namen[1] = "Fred";
					namen[2] = "Maximilian";
					namen[3] = "Chantal";
					namen[4] = "Lara";
				break;
				
				case "1BHITM":	
						
					namen[0] = "Emily";
					namen[1] = "Jana";
					namen[2] = "Petar";
					namen[3] = "Marko";
					namen[4] = "Tobias";
				break;
				
                    case "2BHITM":	
					
					namen[0] = "Heiko";
					namen[1] = "Alexandra";
					namen[2] = "Moritz";
					namen[3] = "Christian";
					namen[4] = "Robin";
				break;
				
		
			}

			  
			for(var i = 0; i < 5; i++){
				document.getElementById("myName").innerHTML += '<option>' + namen[i] + '</option>';
			}
		}
		
       
  function print(){
          var boolean = false;
      
      
      		var klasse = document.getElementById("myClass").value;
			var name = document.getElementById("myName").value;
			var fach = document.getElementById("mySubject").value;
			var note = document.getElementById("myMark").value;
			 
			if (klasse != "Klasse" && name != "Schüler" && fach != "Fach" && note != "Note"){		
				
                for(var i = 0; i < counter; i++){
                   if(tabelle[i][0]  == klasse && tabelle[i][1] == name && tabelle[i][2] == fach && tabelle[i][3] == note) {
                       alert("Der selbe Schueler mit der gleichen Note wurde berits eingetragen");
                       boolean = true;
                       
                   }else if(tabelle[i][0]== klasse && tabelle[i][1] == name && tabelle[i][2] == fach ) {
                         tabelle[i][3] = note;
                    
                      boolean = true;
                       
                   }
                }
                
                
                if(boolean != true){
				
					
					tabelle[counter] = new Array();
					tabelle[counter][0] = klasse;
					tabelle[counter][1] = name;
					tabelle[counter][2] = fach;
					tabelle[counter][3] = note;
					
					counter++;
							
				}
                document.getElementById("ausgabe").innerHTML = '<tr><th>' + "Klasse" + '</th><th>'+ "Name" + '</th><th>'+ "Fach" + '</th><th>'+ "note" + '</th><tr>';
				for (var j = 0; j < counter; j++){
						document.getElementById("ausgabe").innerHTML += '<tr><td>' + tabelle[j][0] + '</td><td>' + tabelle[j][1] + '</td><td>' + tabelle[j][2] + '</td><td>' + tabelle[j][3] + '</td></tr>';
                    
                    
				}
    
            }else{
                alert("Es wurde noch nicht überall etwas eingegeben!")
            }
      
  }