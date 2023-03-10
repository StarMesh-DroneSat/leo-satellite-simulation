//-------------------------------------------------------------------------------------//
            //---Flash From Cairo to a Satellite------------Line1//  
            var material = new THREE.LineDashedMaterial( {
                color: 0x00ff40,
                linewidth: 18,
                scale: 1,
                dashSize: 7,
                gapSize: 4,
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
            var material = new THREE.LineDashedMaterial( {
                color: 0x00ff40,
                linewidth: 18,
                scale: 7,
                dashSize: 0.2,
                gapSize: 12,
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

           //Code to update path of Cairo to Satellite)
            line1.geometry.vertices[ 0 ].x = 0;
            line1.geometry.vertices[ 0 ].y = 0;

           // line1.geometry.vertices[ 1 ].x = -20;
           // line1.geometry.vertices[ 1 ].y = -18;


           //Code to update From Satellite to Destination)
           line2.geometry.vertices[ 0 ].x = 0;
           line2.geometry.vertices[ 0 ].y = 0;

           line2.geometry.vertices[ 1 ].x = 0;
           line2.geometry.vertices[ 1 ].y = 0;

           //-Finalize Code
           line1.geometry.verticesNeedUpdate = true;
           line2.geometry.verticesNeedUpdate = true;

           var satlist = [sat1, sat2, sat3, sat4, sat5, sat6, sat7, sat8, sat9, sat10, sat11, sat12, sat13, sat14, sat15, sat16, sat17, sat18, sat19, sat20 ];
           var loclist = [dot2, dot3, dot4, dot6, dot7, dot8];

           var sat_active1;
           var loc_active;
           function setcordinates() {
               ranum = Math.floor(Math.random() * 20);
               sat_active = satlist[ranum];
               ranloc = Math.floor(Math.random() * 6);
               loc_active = loclist[ranloc];
            }
            var delay = 0;
            var period_of_delay = 0;

           function connect() {
                line1.geometry.vertices[ 1 ].x = sat_active.position.x;
                line1.geometry.vertices[ 1 ].y = sat_active.position.y;
                line1.geometry.verticesNeedUpdate = true;  
                var audio = new Audio('https://steveakang.github.io/starmesh/sound/btn.mp3');
                audio.play();
                line2.geometry.vertices[ 0 ].x = line1.geometry.vertices[ 1 ].x;
                line2.geometry.vertices[ 0 ].y = line1.geometry.vertices[ 1 ].y;
                line2.geometry.vertices[ 1 ].x = loc_active.position.x;
                line2.geometry.vertices[ 1 ].y = loc_active.position.y;
                line2.geometry.verticesNeedUpdate = true;
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
           }

           function link() {
            if (sat_active.position.x >= -140 && sat_active.position.x <= 128 && sat_active.position.y >= -90 && sat_active.position.y <= 80) {
                delay = 0;
                connect();
                period_of_delay = 0;
            } else {
                delay = 1;
                period_of_delay++;
            };
            // Find a <table> element with id="printable":
            var table = document.getElementById("printable");
            // Create an empty <tr> element and add it to the 1st position of the table:
            var row = table.insertRow();
            // Create an empty <tr> element
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            // Add values to the new cells:
            cell1.innerHTML = loclist.indexOf(loc_active);
            cell2.innerHTML = loc_active.name;
            cell3.innerHTML = sat_active.name;
            if (Boolean(delay) == true) {
                cell4.innerHTML = 'YES';
            } else {
                cell4.innerHTML = 'NO';
            }
            cell5.innerHTML = '00:0' + period_of_delay;    
            setTimeout(function() { disconnect()  }, 50);
           }
           var s;
            function flash() {
                s = setInterval(function() { setcordinates(); link();  }, 1000);
            }
            function stopflash() {
                clearInterval(s);
            }
            flash();
