//-------------------------------------------------------------------------------------//
            //---Flash From Cairo to a Satellite------------Line1//  
            var material = new THREE.LineBasicMaterial( {
                color: 0x00ff40,
                linewidth: 30,
                linecap: 'round', //ignored by WebGLRenderer
                linejoin:  'round' //ignored by WebGLRenderer
            } );
            var geometry = new THREE.Geometry();
            //Start Point [0]
            geometry.vertices.push(new THREE.Vector3( 0, 0) );
            geometry.verticesNeedUpdate = true;
            geometry.dynamic = true;
            //End Point [1]
            geometry.vertices.push(new THREE.Vector3( 0, 0) );
            geometry.verticesNeedUpdate = true;
            geometry.dynamic = true;
            var line1 = new THREE.Line( geometry, material );
            scene2.add( line1 );

//------------------------------------------------------------------------------------//
            //---Flash From Satellite to Destination---------Line2//
            var material = new THREE.LineBasicMaterial( {
                color: 0x00ff40,
                linewidth: 30,
                linecap: 'round', //ignored by WebGLRenderer
                linejoin:  'round' //ignored by WebGLRenderer
            } );
            var geometry = new THREE.Geometry();
            //Start Point [0]
            geometry.vertices.push(new THREE.Vector3( 5, 5, 5) );
            geometry.verticesNeedUpdate = true;
            geometry.dynamic = true;
            //End Point [1]
            geometry.vertices.push(new THREE.Vector3( 5, 5, 5) );
            geometry.verticesNeedUpdate = true;
            geometry.dynamic = true;
            var line2 = new THREE.Line( geometry, material );
            scene2.add( line2 );

//------------------------------------------------------------------------------------//
            //---Flash From Satellite to Destination---------Line3//
            var material = new THREE.LineBasicMaterial( {
                color: 0x00ff40,
                linewidth: 30,
                linecap: 'round', //ignored by WebGLRenderer
                linejoin:  'round' //ignored by WebGLRenderer
            } );
            var geometry = new THREE.Geometry();
            //Start Point [0]
            geometry.vertices.push(new THREE.Vector3( 5, 5, 5) );
            geometry.verticesNeedUpdate = true;
            geometry.dynamic = true;
            //End Point [1]
            geometry.vertices.push(new THREE.Vector3( 5, 5, 5) );
            geometry.verticesNeedUpdate = true;
            geometry.dynamic = true;
            var line3 = new THREE.Line( geometry, material );
            scene2.add( line3 );   
//------------------------------------------------------------------------------------// 

            //---Flash From Satellite to Destination---------Line4//
            var material = new THREE.LineBasicMaterial( {
                color: 0x00ff40,
                linewidth: 30,
                linecap: 'round', //ignored by WebGLRenderer
                linejoin:  'round' //ignored by WebGLRenderer
            } );
            var geometry = new THREE.Geometry();
            //Start Point [0]
            geometry.vertices.push(new THREE.Vector3( 5, 5, 5) );
            geometry.verticesNeedUpdate = true;
            geometry.dynamic = true;
            //End Point [1]
            geometry.vertices.push(new THREE.Vector3( 5, 5, 5) );
            geometry.verticesNeedUpdate = true;
            geometry.dynamic = true;
            var line4 = new THREE.Line( geometry, material );
            scene2.add( line4 );   
//------------------------------------------------------------------------------------// 

           //Code to update path of Cairo to Satellite)
            line1.geometry.vertices[ 0 ].x = 0;
            line1.geometry.vertices[ 0 ].y = 0;

        //    line1.geometry.vertices[ 1 ].x = 0;
        //    line1.geometry.vertices[ 1 ].y = 0;


           //Code to update From Satellite to 2nd Satellite)
           line2.geometry.vertices[ 0 ].x = 0;
           line2.geometry.vertices[ 0 ].y = 0;

           line2.geometry.vertices[ 1 ].x = 0;
           line2.geometry.vertices[ 1 ].y = 0;

           //Code to update From  2nd Satellite to Destination)
           line3.geometry.vertices[ 0 ].x = 0;
           line3.geometry.vertices[ 0 ].y = 0;

           line3.geometry.vertices[ 1 ].x = 0;
           line3.geometry.vertices[ 1 ].y = 0;

           //Code to update From  2nd Satellite to Destination)
           line4.geometry.vertices[ 0 ].x = 0;
           line4.geometry.vertices[ 0 ].y = 0;

           line4.geometry.vertices[ 1 ].x = 0;
           line4.geometry.vertices[ 1 ].y = 0;





           //-Finalize Code
           line1.geometry.verticesNeedUpdate = true;
           line2.geometry.verticesNeedUpdate = true;
           line3.geometry.verticesNeedUpdate = true;
           line4.geometry.verticesNeedUpdate = true;


           var satlist = [sat1, sat2, sat3, sat4, sat5, sat6, sat7, sat8, sat9,
            sat10, sat11, sat12, sat13, sat14, sat15, sat16, sat17, sat18, sat19, 
            sat20, sat21, sat22, sat23, sat24, sat25, sat26, sat27, sat28, sat29, 
            sat30,

            sat1i, sat2i, sat3i, sat4i, sat5i, sat6i, sat7i, sat8i, sat9i, sat10i, 
            sat11i, sat12i, sat13i, sat14i, sat15i, sat16i, sat17i, sat18i, sat19i, 
            sat20i, sat21i, sat22i, sat23i, sat24i, sat25i, sat26i, sat27i, sat28i, 
            sat29i, sat30i,
            
            sat1ii, sat2ii, sat3ii, sat4ii, sat5ii, sat6ii, sat7ii, sat8ii, sat9ii,
            sat10ii, sat11ii, sat12ii, sat13ii, sat14ii, sat15ii, sat16ii, sat17ii, 
            sat18ii, sat19ii, sat20ii, sat21ii, sat22ii, sat23ii, sat24ii, sat25ii,
            sat26ii, sat27ii, sat28ii, sat29ii, sat30ii,
        
            sat1iii, sat2iii, sat3iii, sat4iii, sat5iii, sat6iii, sat7iii, sat8iii,
            sat9iii, sat10iii, sat11iii, sat12iii, sat13iii, sat14iii, sat15iii, 
            sat16iii, sat17iii, sat18iii, sat19iii, sat20iii, sat21iii, sat22iii,
            sat23iii, sat24iii, sat25iii, sat26iii, sat27iii, sat28iii, sat29iii,
            sat30iii,
        
            sat1iv, sat2iv, sat3iv, sat4iv, sat5iv, sat6iv, sat7iv, sat8iv, sat9iv,
            sat10iv, sat11iv, sat12iv, sat13iv, sat14iv, sat15iv, sat16iv, sat17iv, 
            sat18iv, sat19iv, sat20iv, sat21iv, sat22iv, sat23iv, sat24iv, sat25iv,
            sat26iv, sat27iv, sat28iv, sat29iv, sat30iv,
        
            sat1v, sat2v, sat3v, sat4v, sat5v, sat6v, sat7v, sat8v, sat9v, sat10v,
            sat11v, sat12v, sat13v, sat14v, sat15v, sat16v, sat17v, sat18v, sat19v, 
            sat20v, sat21v, sat22v, sat23v, sat24v, sat25v, sat26v, sat27v, sat28v,
            sat29v, sat30v,
        
            sat1vi, sat2vi, sat3vi, sat4vi, sat5vi, sat6vi, sat7vi, sat8vi, sat9vi,
            sat10vi, sat11vi, sat12vi, sat13vi, sat14vi, sat15vi, sat16vi, sat17vi, 
            sat18vi, sat19vi, sat20vi, sat21vi, sat22vi, sat23vi, sat24vi, sat25vi,
            sat26vi, sat27vi, sat28vi, sat29vi, sat30vi,
        
            sat1vii, sat2vii, sat3vii, sat4vii, sat5vii, sat6vii, sat7vii, sat8vii, 
            sat9vii, sat10vii, sat11vii, sat12vii, sat13vii, sat14vii, sat15vii, sat16vii,
            sat17vii, sat18vii, sat19vii, sat20vii, sat21vii, sat22vii, sat23vii, sat24vii,
            sat25vii, sat26vii, sat27vii, sat28vii, sat29vii, sat30vii,
        
            sat1viii, sat2viii, sat3viii, sat4viii, sat5viii, sat6viii, sat7viii, sat8viii, 
            sat9viii, sat10viii, sat11viii, sat12viii, sat13viii, sat14viii, sat15viii, 
            sat16viii, sat17viii, sat18viii, sat19viii, sat20viii, sat21viii, sat22viii,
            sat23viii, sat24viii, sat25viii, sat26viii, sat27viii, sat28viii, sat29viii,
            sat30viii,
        
            sat1ix, sat2ix, sat3ix, sat4ix, sat5ix, sat6ix, sat7ix, sat8ix, sat9ix, sat10ix,
            sat11ix, sat12ix, sat13ix, sat14ix, sat15ix, sat16ix, sat17ix, sat18ix, sat19ix,
            sat20ix, sat21ix, sat22ix, sat23ix, sat24ix, sat25ix, sat26ix, sat27ix,
            sat28ix, sat29ix, sat30ix];

           var loclist = [dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8, dot9, dot10, dot11, dot12, dot13];

           var satelliteAntennaRotationPositionArray = [];//We're going to model the antenna rotation position of
           // each satelite with numbers and store it in this array and we're going to be updating it every milliseconds 
           // to imitate and real life rotation of antenna positions.


           var sat_active1;
           var loc_active;
           var lata;
           var sata;
           var vata;
           var sat_active2;
           var sat_active3;
           
           function setcordinates() {
               ranum = Math.floor(Math.random() * 50);
               randnum = Math.floor(Math.random() * 30);
               for (var x = 0; x < satlist.length; x ++) {
                   if(satlist[x].position.x >= neg_footprint && satlist[x].position.x <= pos_footprint && satlist[x].position.y >= neg_footprint && satlist[x].position.y <= pos_footprint) {
                       lata = satlist[x];
                   }
               }
               //test running satellite availability for every second by getting it's current rotation
               // position and using that to determine whether it should send packets using that satelit or not.
               //note, 
               var satelliteAntennaAvailability = satelliteAntennaRotationPositionArray[ranum];
               if(satelliteAntennaAvailability<=400){//if antenna position is not in alignment
                   
                   alert('Satelite '+ranum+' antenna is currently unavailable.  revolution position is '+satelliteAntennaAvailability+" another satellite will be picked instead");
               }else{
                   sat_active = lata;
                   ranloc = Math.floor(Math.random() * 13);
                   loc_active = loclist[ranloc];
               }


               for (var x = 0; x < satlist.length; x ++) {
                   if (loc_active.position.x < 0 && loc_active.position.y > sat_active.position.y) {
                       if(satlist[x].position.x < sat_active.position.x && satlist[x].position.x > loc_active.position.x &&
                        satlist[x].position.y > sat_active.position.y && satlist[x].position.y < loc_active.position.y) {
                            sata = satlist[x];
                            sat_active2 = sata;
                       }  
                   } else if (loc_active.position.x > 0 && loc_active.position.y > sat_active.position.y) {
                        if(satlist[x].position.x > sat_active.position.x && satlist[x].position.x < loc_active.position.x &&
                          satlist[x].position.y > sat_active.position.y && satlist[x].position.y < loc_active.position.y) {
                            sata = satlist[x];
                            sat_active2 = sata;
                        } 
                   } else if (loc_active.position.x < 0 && loc_active.position.y < sat_active.position.y) {
                        if(satlist[x].position.x < sat_active.position.x && satlist[x].position.x > loc_active.position.x &&
                          satlist[x].position.y < sat_active.position.y && satlist[x].position.y > loc_active.position.y) {
                            sata = satlist[x];
                            sat_active2 = sata;   
                        }
                    } else if (loc_active.position.x > 0 && loc_active.position.y < sat_active.position.y) {
                        if(satlist[x].position.x > sat_active.position.x && satlist[x].position.x < loc_active.position.x &&
                          satlist[x].position.y < sat_active.position.y && satlist[x].position.y > loc_active.position.y) {
                            sata = satlist[x];
                            sat_active2 = sata;   
                        }
                    }   
               }

            }
            var delay = 0;
            var period_of_delay = 0;

           function connect() {
                line1.geometry.vertices[ 1 ].x = sat_active.position.x;
                line1.geometry.vertices[ 1 ].y = sat_active.position.y;
                line1.geometry.verticesNeedUpdate = true;  
                line2.geometry.vertices[ 0 ].x = line1.geometry.vertices[ 1 ].x;
                line2.geometry.vertices[ 0 ].y = line1.geometry.vertices[ 1 ].y;
                line2.geometry.vertices[ 1 ].x = sat_active2.position.x;
                line2.geometry.vertices[ 1 ].y = sat_active2.position.y;
                line2.geometry.verticesNeedUpdate = true;
                line3.geometry.vertices[ 0 ].x = sat_active2.position.x;
                line3.geometry.vertices[ 0 ].y = sat_active2.position.y;
                line3.geometry.vertices[ 1 ].x = loc_active.position.x;
                line3.geometry.vertices[ 1 ].y = loc_active.position.y;
                line3.geometry.verticesNeedUpdate = true;
            }
           function disconnect() {
            line1.geometry.vertices[ 1 ].x = 0;
            line1.geometry.vertices[ 1 ].y = 0;
            line1.geometry.verticesNeedUpdate = true;

            line2.geometry.vertices[ 0 ].x = 0;
            line2.geometry.vertices[ 0 ].y = 0;
            line2.geometry.vertices[ 1 ].x = 0;
            line2.geometry.vertices[ 1 ].y = 0;  
            line2.geometry.verticesNeedUpdate = true;

            line3.geometry.vertices[ 0 ].x = 0;
            line3.geometry.vertices[ 0 ].y = 0;
            line3.geometry.vertices[ 1 ].x = 0;
            line3.geometry.vertices[ 1 ].y = 0;
            line3.geometry.verticesNeedUpdate = true;
            
            
           }

           var packetnum = 1;
           var sentpackets = 0;
           var delayedpackets = 0;
           
           function link() {
            if (sat_active.position.x >= neg_footprint && sat_active.position.x <= pos_footprint &&
                 sat_active.position.y >= neg_footprint && sat_active.position.y <= pos_footprint) {
                if (loc_active.position.x < 0 && loc_active.position.y > sat_active.position.y) {
                    if (sat_active2.position.x < sat_active.position.x && sat_active2.position.x > loc_active.position.x &&
                        sat_active2.position.y > sat_active.position.y && sat_active2.position.y < loc_active.position.y) {
                        connect();
                        var audio = new Audio('https://steveakang.github.io/starmesh/sound/btn.mp3');
                        audio.play();
                        delay = 0;
                        period_of_delay = 0;
                    }
                } else if (loc_active.position.x > 0 && loc_active.position.y > sat_active.position.y) {
                    if (sat_active2.position.x > sat_active.position.x && sat_active2.position.x < loc_active.position.x &&
                        sat_active2.position.y > sat_active.position.y && sat_active2.position.y < loc_active.position.y) {
                        connect();
                        var audio = new Audio('https://steveakang.github.io/starmesh/sound/btn.mp3');
                        audio.play();
                        delay = 0;
                        period_of_delay = 0;
                    }
                } else if (loc_active.position.x < 0 && loc_active.position.y < sat_active.position.y) {
                    if (sat_active2.position.x < sat_active.position.x && sat_active2.position.x > loc_active.position.x &&
                        sat_active2.position.y < sat_active.position.y && sat_active2.position.y > loc_active.position.y) {
                        connect();
                        var audio = new Audio('https://steveakang.github.io/starmesh/sound/btn.mp3');
                        audio.play();
                        delay = 0;
                        period_of_delay = 0;
                    }
                } else if (loc_active.position.x > 0 && loc_active.position.y < sat_active.position.y) {
                    if (sat_active2.position.x > sat_active.position.x && sat_active2.position.x < loc_active.position.x &&
                        sat_active2.position.y < sat_active.position.y && sat_active2.position.y > loc_active.position.y) {
                        connect();
                        var audio = new Audio('https://steveakang.github.io/starmesh/sound/btn.mp3');
                        audio.play();
                        delay = 0;
                        period_of_delay = 0;
                    }
                }      
            } else {
                delay = 1;
                period_of_delay = period_of_delay + 20
            };
            // Find a <table> element with id="printable":
            var table = document.getElementById("printable");
            // Create an empty <tr> element and add it to the 1st position of the table:
            var row = table.insertRow();
            // Create an empty <tr> element
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            // var cell3 = row.insertCell(2);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);           
            /// Add values to the new cells:
            cell1.innerHTML = packetnum;
            cell2.innerHTML = loc_active.name;
            // cell3.innerHTML = sat_active.name, sat_active2.name;
            if (Boolean(delay) == true) {
                cell3.innerHTML = 'Delayed';
                delayedpackets++;
            } else {
                cell3.innerHTML = 'Sent';
                sentpackets++;
            }
            cell4.innerHTML = '00:00:00:' + period_of_delay;  
            packetnum++; 
            setTimeout(function() { disconnect()  }, 2800);
           }
           var s;
           
            function flash() {
                s = setInterval(function() { setcordinates(); link();  }, 200);
            }
            function stopflash() {
                clearInterval(s);
                
            }
            
            flash();
