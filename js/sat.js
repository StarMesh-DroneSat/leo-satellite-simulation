		var scene = new THREE.Scene(); //Scene for Map of Earth 
        var scene2 = new THREE.Scene(); //Scene for satellites

        var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
        
        //-tempate-
        var renderer = new THREE.WebGLRenderer();
        renderer.autoClear = false;
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        //-template
        //Altitude of Satellites predefined //


        var zo = camera.getFocalLength();
        console.log("This is the field of View" + zo);
        
        //-satelite---1/
        var geometry = new THREE.SphereBufferGeometry( 1.19, 8, 6, 0, 6.3, 0, 6.3 );
        var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
        var sat1 = new THREE.Mesh( geometry, material );
        sat1.name = "SAT-1";
        scene2.add( sat1 );
        //-positions/
        /* Random coordinate for x axis */
        var sat1x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat1x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        var altitude = 0;
        sat1.position.x = sat1x;
        sat1.position.z = altitude;
        console.log(sat1x);
        console.log(altitude);
        //end

        var sat1y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat1y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat1.position.y = sat1y;
        console.log(sat1y);
        //end



        // // //-satellite---2/
        var sat2 = new THREE.Mesh( geometry, material );
        sat2.name = 'SAT-2';
        scene2.add( sat2 );
        //-positions/
         /* Random coordinate for x axis */
         var sat2x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat2x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat2.position.x = sat2x;
         sat2.position.z = altitude;
         console.log(sat2x);
         //end
         var sat2y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat2y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat2.position.y = sat2y;
         console.log(sat2y);
         //end

         //-satellite---3/
         var sat3 = new THREE.Mesh( geometry, material );
         sat3.name = 'SAT-3';
         scene2.add( sat3 );
         //-positions/
         /* Random coordinate for x axis */
         var sat3x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat3x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat3.position.x = sat3x;
         sat3.position.z = altitude;
         console.log(sat3x);
         //end
         var sat3y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat3y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat3.position.y = sat3y;
         console.log(sat3y);
         //end

         //-satellite---4/
         var sat4 = new THREE.Mesh( geometry, material );
         sat4.name = 'SAT-4';
         scene2.add( sat4 );
         //-positions/
         /* Random coordinate for x axis */
         var sat4x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat4x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat4.position.x = sat4x;
         sat4.position.z = altitude;
         console.log(sat4x);
         //end
         var sat4y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat4y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat4.position.y = sat4y;
         console.log(sat4y);
         //end


         //-satellite---5/
         var sat5 = new THREE.Mesh( geometry, material );
         sat5.name = 'SAT-5';
         scene2.add( sat5 );
         //-positions/
         /* Random coordinate for x axis */
         var sat5x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat5x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat5.position.x = sat5x;
         sat5.position.z = altitude;
         console.log(sat5x);
         //end
         var sat5y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat5y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat5.position.y = sat5y;
         console.log(sat5y);
         //end

         //-satellite---6/
         var sat6 = new THREE.Mesh( geometry, material );
         sat6.name = 'SAT-6';
         scene2.add( sat6 );
         //-positions/
         /* Random coordinate for x axis */
         var sat6x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat6x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat6.position.x = sat6x;
         sat6.position.z = altitude;
         console.log(sat6x);
         //end
         var sat6y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat6y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat6.position.y = sat6y; 
         console.log(sat6y);
         //end



         //-satellite---7/
         var sat7 = new THREE.Mesh( geometry, material );
         sat7.name = 'SAT-7';
         scene2.add( sat7 );
         //-positions/
         /* Random coordinate for x axis */
         var sat7x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat7x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat7.position.x = sat7x;
         sat7.position.z = altitude;
         console.log(sat7x);
         //end
         var sat7y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat7y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat7.position.y = sat7y; 
         console.log(sat7y);
         //end

         //-satellite---8/
         var sat8 = new THREE.Mesh( geometry, material );
         sat8.name = 'SAT-8';
         scene2.add( sat8 );
         //-positions/
         /* Random coordinate for x axis */
         var sat8x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat8x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat8.position.x = sat8x;
         sat8.position.z = altitude;
         console.log(sat8x);
         //end

         var sat8y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat8y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat8.position.y = sat8y; 
         console.log(sat8y);
         //end

        //-satellite---9/
         var sat9 = new THREE.Mesh( geometry, material );
         sat9.name = 'SAT-9';
         scene2.add( sat9 );
        //-positions/
         /* Random coordinate for x axis */
         var sat9x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat9x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat9.position.x = sat9x;
         sat9.position.z = altitude;
         console.log(sat9x);
         //end
        var sat9y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat9y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat9.position.y = sat9y; 
        console.log(sat9y);
         //end


        //-satellite---10/
        var sat10 = new THREE.Mesh( geometry, material );
        sat10.name = 'SAT-10';
        scene2.add( sat10 );
         //-positions/
        /* Random coordinate for x axis */
        var sat10x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat10x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat10.position.x = sat10x;
        sat10.position.z = altitude;
        console.log(sat10x);
        //end

        var sat10y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat10y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat10.position.y = sat10y; 
        console.log(sat10y);
        //end




        //-satellite---11/
        var sat11 = new THREE.Mesh( geometry, material );
        sat11.name = 'SAT-11';
        scene2.add( sat11 );
        //-positions/
        /* Random coordinate for x axis */
        var sat11x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat11x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat11.position.x = sat11x;
        sat11.position.z = altitude;
        console.log(sat11x);
        //end
        var sat11y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat11y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat11.position.y = sat11y; 
        console.log(sat11y);
         //end


         //-satellite---12/
        var sat12 = new THREE.Mesh( geometry, material );
        sat12.name = 'SAT-12';
        scene2.add( sat12 );
        //-positions/
        /* Random coordinate for x axis */
        var sat12x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat12x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat12.position.x = sat12x;
        sat12.position.z = altitude;
        console.log(sat12x);
        //end
        var sat12y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat12y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat12.position.y = sat12y; 
        console.log(sat12y);
        //end


        //-satellite---13/
        var sat13 = new THREE.Mesh( geometry, material );
        sat13.name = 'SAT-13';
        scene2.add( sat13 );
        //-positions/
        /* Random coordinate for x axis */
        var sat13x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat13x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat13.position.x = sat13x;
        sat13.position.z = altitude;
        console.log(sat13x);
        //end
        var sat13y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat13y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat13.position.y = sat13y; 
        console.log(sat13y);
        //end



        //-satellite---14/
        var sat14 = new THREE.Mesh( geometry, material );
        sat14.name = 'SAT-14';
        scene2.add( sat14 );
        //-positions/
        /* Random coordinate for x axis */
        var sat14x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat14x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat14.position.x = sat14x;
        sat14.position.z = altitude;
        console.log(sat14x);
        //end
        var sat14y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat14y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat14.position.y = sat14y; 
        console.log(sat14y);
        //end



        //-satellite---15/
        var sat15 = new THREE.Mesh( geometry, material );
        sat15.name = 'SAT-15';
        scene2.add( sat15 );
        //-positions/
        /* Random coordinate for x axis */
        var sat15x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat15x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat15.position.x = sat15x;
        sat15.position.z = altitude;
        console.log(sat15x);
        //end
        var sat15y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat15y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat15.position.y = sat15y; 
        console.log(sat15y);
        //end


        //-satellite---16/
        var sat16 = new THREE.Mesh( geometry, material );
        sat16.name = 'SAT-16';
        scene2.add( sat16 );
        //-positions/
        /* Random coordinate for x axis */
        var sat16x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat16x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat16.position.x = sat16x;
        sat16.position.z = altitude;
        console.log(sat16x);
        //end
        var sat16y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat16y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat16.position.y = sat16y; 
        console.log(sat16y);
        //end


        //-satellite---17/
        var sat17 = new THREE.Mesh( geometry, material );
        sat17.name = 'SAT-17';
        scene2.add( sat17 );
        //-positions/
        /* Random coordinate for x axis */
        var sat17x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat17x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat17.position.x = sat17x;
        sat17.position.z = altitude;
        console.log(sat17x);
        //end
        var sat17y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat17y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat17.position.y = sat17y; 
        console.log(sat17y);
        //end


        //-satellite---18/
        var sat18 = new THREE.Mesh( geometry, material );
        sat18.name = 'SAT-18';
        scene2.add( sat18 );
        //-positions/
        /* Random coordinate for x axis */
        var sat18x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat18x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat18.position.x = sat18x;
        sat18.position.z = altitude;
        console.log(sat18x);
        //end
        var sat18y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat18y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat18.position.y = sat18y; 
        console.log(sat18y);
        //end


        //-satellite---19/
        var sat19 = new THREE.Mesh( geometry, material );
        sat19.name = 'SAT-19';
        scene2.add( sat19 );
        //-positions/
        /* Random coordinate for x axis */
        var sat19x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat19x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat19.position.x = sat19x;
        sat19.position.z = altitude;
        console.log(sat19x);
        //end
        var sat19y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat19y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat19.position.y = sat19y; 
        console.log(sat19y);
        //end



        //-satellite---20/
        var sat20 = new THREE.Mesh( geometry, material );
        sat20.name = 'SAT-20';
        scene2.add( sat20 );
        //-positions/
        /* Random coordinate for x axis */
        var sat20x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat20x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat20.position.x = sat20x;
        sat20.position.z = altitude;
        console.log(sat20x);
        //end
        var sat20y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat20y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat20.position.y = sat20y; 
        console.log(sat20y);
        //end


        //-satellite---21/
        var sat21 = new THREE.Mesh( geometry, material );
        sat21.name = 'SAT-21';
        scene2.add( sat21 );
        //-positions/
        /* Random coordinate for x axis */
        var sat21x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat21x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat21.position.x = sat21x;
        sat21.position.z = altitude;
        console.log(sat20x);
        //end
        var sat21y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat21y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat21.position.y = sat21y; 
        console.log(sat21y);
        //end


        //-satellite---22/
        var sat22 = new THREE.Mesh( geometry, material );
        sat22.name = 'SAT-22';
        scene2.add( sat22 );
        //-positions/
        /* Random coordinate for x axis */
        var sat22x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat22x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat22.position.x = sat22x;
        sat22.position.z = altitude;
        console.log(sat22x);
        //end
        var sat22y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat22y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat22.position.y = sat22y; 
        console.log(sat22y);
        //end


        //-satellite---23/
        var sat23 = new THREE.Mesh( geometry, material );
        sat23.name = 'SAT-23';
        scene2.add( sat23 );
        //-positions/
        /* Random coordinate for x axis */
        var sat23x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat23x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat23.position.x = sat23x;
        sat23.position.z = altitude;
        console.log(sat23x);
        //end
        var sat23y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat23y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat23.position.y = sat23y; 
        console.log(sat23y);
        //end


        //-satellite---24/
        var sat24 = new THREE.Mesh( geometry, material );
        sat24.name = 'SAT-24';
        scene2.add( sat24 );
        //-positions/
        /* Random coordinate for x axis */
        var sat24x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat24x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat24.position.x = sat24x;
        sat24.position.z = altitude;
        console.log(sat24x);
        //end
        var sat24y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat24y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat24.position.y = sat24y; 
        console.log(sat24y);
        //end


        //-satellite---25/
        var sat25 = new THREE.Mesh( geometry, material );
        sat25.name = 'SAT-25';
        scene2.add( sat25 );
        //-positions/
        /* Random coordinate for x axis */
        var sat25x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat25x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat25.position.x = sat25x;
        sat25.position.z = altitude;
        console.log(sat25x);
        //end
        var sat25y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat25y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat25.position.y = sat25y; 
        console.log(sat25y);
        //end

        //-satellite---26/
        var sat26 = new THREE.Mesh( geometry, material );
        sat26.name = 'SAT-26';
        scene2.add( sat26 );
        //-positions/
        /* Random coordinate for x axis */
        var sat26x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat26x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat26.position.x = sat26x;
        sat26.position.z = altitude;
        console.log(sat26x);
        //end
        var sat26y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat26y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat26.position.y = sat26y; 
        console.log(sat26y);
        //end

        //-satellite---27/
        var sat27 = new THREE.Mesh( geometry, material );
        sat27.name = 'SAT-27';
        scene2.add( sat27 );
        //-positions/
        /* Random coordinate for x axis */
        var sat27x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat27x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat27.position.x = sat27x;
        sat27.position.z = altitude;
        console.log(sat27x);
        //end
        var sat27y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat27y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat27.position.y = sat27y; 
        console.log(sat27y);
        //end


        //-satellite---28/
        var sat28 = new THREE.Mesh( geometry, material );
        sat28.name = 'SAT-28';
        scene2.add( sat28 );
        //-positions/
        /* Random coordinate for x axis */
        var sat28x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat28x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat28.position.x = sat28x;
        sat28.position.z = altitude;
        console.log(sat28x);
        //end
        var sat28y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat28y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat28.position.y = sat28y; 
        console.log(sat28y);
        //end


        //-satellite---29/
        var sat29 = new THREE.Mesh( geometry, material );
        sat29.name = 'SAT-29';
        scene2.add( sat29 );
        //-positions/
        /* Random coordinate for x axis */
        var sat29x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat29x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat29.position.x = sat29x;
        sat29.position.z = altitude;
        console.log(sat29x);
        //end
        var sat29y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat29y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat29.position.y = sat29y; 
        console.log(sat29y);
        //end

        //-satellite---30/
        var sat30 = new THREE.Mesh( geometry, material );
        sat30.name = 'SAT-30';
        scene2.add( sat30 );
        //-positions/
        /* Random coordinate for x axis */
        var sat30x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat30x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat30.position.x = sat30x;
        sat30.position.z = altitude;
        console.log(sat30x);
        //end
        var sat30y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat30y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat30.position.y = sat30y; 
        console.log(sat30y);
        //end


        //-satellite---Pseudo Sat 1/
        var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
        var sat1i = new THREE.Mesh( geometry, material );
        sat1i.name = 'SAT-1i';
        scene2.add( sat1i );
        //-positions/
        /* Random coordinate for x axis */
        var sat1ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat1ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
        sat1i.position.x = (sat1x) - (pos1x * 9600);
        sat1i.position.z = altitude;
        console.log(sat1ix);
        //end
        var sat1iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat1iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat1i.position.y = (sat1y) + (pos1y * 9600); 
        console.log(sat1iy);
        //end

        //-satellite---Pseudo Sat 2/
        var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
        var sat2i = new THREE.Mesh( geometry, material );
        sat1i.name = 'SAT-2i';
        scene2.add( sat2i );
        //-positions/
        /* Random coordinate for x axis */
        var sat2ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat2ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
        sat2i.position.x = (sat2x) + (pos2x * 9600);
        sat2i.position.z = altitude;
        console.log(sat2ix);
        //end
        var sat2iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat2iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat2i.position.y = (sat2y) - (pos2y * 9600); 
        console.log(sat2iy);
        //end


        //-satellite---Pseudo Sat 3/
        var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
        var sat3i = new THREE.Mesh( geometry, material );
        sat3i.name = 'SAT-3i';
        scene2.add( sat3i );
        //-positions/
        /* Random coordinate for x axis */
        var sat3ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat3ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
        sat3i.position.x = (sat3x) - (pos3x * 9600);
        sat3i.position.z = altitude;
        console.log(sat3ix);
        //end
        var sat3iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat3iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat3i.position.y = (sat3y) + (pos3y * 9600); 
        console.log(sat3iy);
        //end


        //-satellite---Pseudo Sat 4/
        var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
        var sat4i = new THREE.Mesh( geometry, material );
        sat4i.name = 'SAT-4i';
        scene2.add( sat4i );
        //-positions/
        /* Random coordinate for x axis */
        var sat4ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat4ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
        sat4i.position.x = (sat4x) + (pos4x * 9600);
        sat4i.position.z = altitude;
        console.log(sat4ix);
        //end
        var sat4iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat4iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat4i.position.y = (sat4y) - (pos4y * 9600); 
        console.log(sat4iy);
        //end


        //-satellite---Pseudo Sat 5/
        var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
        var sat5i = new THREE.Mesh( geometry, material );
        sat5i.name = 'SAT-5i';
        scene2.add( sat5i );
        //-positions/
        /* Random coordinate for x axis */
        var sat5ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat5ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
        sat5i.position.x = (sat5x) + (pos5x * 9600);
        sat5i.position.z = altitude;
        console.log(sat5ix);
        //end
        var sat5iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat5iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat5i.position.y = (sat5y) - (pos5y * 9600); 
        console.log(sat5iy);
        //end


        //-satellite---Pseudo Sat 6/
        var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
        var sat6i = new THREE.Mesh( geometry, material );
        sat6i.name = 'SAT-6i';
        scene2.add( sat6i );
        //-positions/
        /* Random coordinate for x axis */
        var sat6ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat6ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
        sat6i.position.x = (sat6x) - (pos6x * 9600);
        sat6i.position.z = altitude;
        console.log(sat6ix);
        //end
        var sat6iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat6iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat6i.position.y = (sat6y) + (pos6y * 9600); 
        console.log(sat6iy);
        //end


        //-satellite---Pseudo Sat 7/
        var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
        var sat7i = new THREE.Mesh( geometry, material );
        sat7i.name = 'SAT-7i';
        scene2.add( sat7i );
        //-positions/
        /* Random coordinate for x axis */
        var sat7ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat7ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
        sat7i.position.x = (sat7x) - (pos7x * 9600);
        sat7i.position.z = altitude;
        console.log(sat7ix);
        //end
        var sat7iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat7iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat7i.position.y = (sat7y) + (pos7y * 9600); 
        console.log(sat7iy);
        //end


        //-satellite---Pseudo Sat 8/
        var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
        var sat8i = new THREE.Mesh( geometry, material );
        sat8i.name = 'SAT-8i';
        scene2.add( sat8i );
        //-positions/
        /* Random coordinate for x axis */
        var sat8ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat8ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
        sat8i.position.x = (sat8x) - (pos8x * 9600);
        sat8i.position.z = altitude;
        console.log(sat8ix);
        //end
        var sat8iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat8iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat8i.position.y = (sat8y) + (pos8y * 9600); 
        console.log(sat8iy);
        //end


         //-satellite---Pseudo Sat 9/
         var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
         var sat9i = new THREE.Mesh( geometry, material );
         sat9i.name = 'SAT-9i';
         scene2.add( sat9i );
         //-positions/
         /* Random coordinate for x axis */
         var sat9ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
         sat9ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
         sat9i.position.x = (sat9x) - (pos9x * 9600);
         sat9i.position.z = altitude;
         console.log(sat9ix);
         //end
         var sat9iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
         sat9iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat9i.position.y = (sat9y) - (pos9y * 9600); 
         console.log(sat9iy);
         //end


         //-satellite---Pseudo Sat 10/
         var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
         var sat10i = new THREE.Mesh( geometry, material );
         sat10i.name = 'SAT-10i';
         scene2.add( sat10i );
         //-positions/
         /* Random coordinate for x axis */
         var sat10ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
         sat10ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
         sat10i.position.x = (sat10x) + (pos10x * 9600);
         sat10i.position.z = altitude;
         console.log(sat10ix);
         //end
         var sat10iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
         sat10iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat10i.position.y = (sat10y) - (pos10y * 9600); 
         console.log(sat10iy);
         //end


         //-satellite---Pseudo Sat 11/
         var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
         var sat11i = new THREE.Mesh( geometry, material );
         sat11i.name = 'SAT-11i';
         scene2.add( sat11i );
         //-positions/
         /* Random coordinate for x axis */
         var sat11ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
         sat11ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
         sat11i.position.x = (sat11x) - (pos11x * 9600);
         sat11i.position.z = altitude;
         console.log(sat11ix);
         //end
         var sat11iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
         sat11iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat11i.position.y = (sat11y) + (pos11y * 9600); 
         console.log(sat11iy);
         //end


         //-satellite---Pseudo Sat 12/
         var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
         var sat12i = new THREE.Mesh( geometry, material );
         sat12i.name = 'SAT-12i';
         scene2.add( sat12i );
         //-positions/
         /* Random coordinate for x axis */
         var sat12ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
         sat12ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
         sat12i.position.x = (sat12x) - (pos12x * 9600);
         sat12i.position.z = altitude;
         console.log(sat12ix);
         //end
         var sat12iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
         sat12iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat12i.position.y = (sat12y) + (pos12y * 9600); 
         console.log(sat12iy);
         //end


         //-satellite---Pseudo Sat 13/
         var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
         var sat13i = new THREE.Mesh( geometry, material );
         sat13i.name = 'SAT-13i';
         scene2.add( sat13i );
         //-positions/
         /* Random coordinate for x axis */
         var sat13ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
         sat13ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
         sat13i.position.x = (sat13x) - (pos13x * 9600);
         sat13i.position.z = altitude;
         console.log(sat13ix);
         //end
         var sat13iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
         sat13iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat13i.position.y = (sat13y) - (pos13y * 9600); 
         console.log(sat13iy);
         //end


          //-satellite---Pseudo Sat 14/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
          var sat14i = new THREE.Mesh( geometry, material );
          sat14i.name = 'SAT-14i';
          scene2.add( sat14i );
          //-positions/
          /* Random coordinate for x axis */
          var sat14ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat14ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat14i.position.x = (sat14x) - (pos14x * 9600);
          sat14i.position.z = altitude;
          console.log(sat14ix);
          //end
          var sat14iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat14iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat14i.position.y = (sat14y) - (pos14y * 9600); 
          console.log(sat14iy);
          //end



          //-satellite---Pseudo Sat 15/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
          var sat15i = new THREE.Mesh( geometry, material );
          sat15i.name = 'SAT-15i';
          scene2.add( sat15i );
          //-positions/
          /* Random coordinate for x axis */
          var sat15ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat15ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat15i.position.x = (sat15x) - (pos15x * 9600);
          sat15i.position.z = altitude;
          console.log(sat15ix);
          //end
          var sat15iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat15iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat15i.position.y = (sat15y) + (pos15y * 9600); 
          console.log(sat15iy);
          //end


          //-satellite---Pseudo Sat 16/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
          var sat16i = new THREE.Mesh( geometry, material );
          sat16i.name = 'SAT-16i';
          scene2.add( sat16i );
          //-positions/
          /* Random coordinate for x axis */
          var sat16ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat16ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat16i.position.x = (sat16x) - (pos16x * 9600);
          sat16i.position.z = altitude;
          console.log(sat16ix);
          //end
          var sat16iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat16iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat16i.position.y = (sat16y) - (pos16y * 9600); 
          console.log(sat16iy);
          //end


          //-satellite---Pseudo Sat 17/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
          var sat17i = new THREE.Mesh( geometry, material );
          sat17i.name = 'SAT-17i';
          scene2.add( sat17i );
          //-positions/
          /* Random coordinate for x axis */
          var sat17ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat17ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat17i.position.x = (sat17x) + (pos17x * 9600);
          sat17i.position.z = altitude;
          console.log(sat17ix);
          //end
          var sat17iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat17iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat17i.position.y = (sat17y) + (pos17y * 9600); 
          console.log(sat17iy);
          //end


          //-satellite---Pseudo Sat 18/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
          var sat18i = new THREE.Mesh( geometry, material );
          sat18i.name = 'SAT-18i';
          scene2.add( sat18i );
          //-positions/
          /* Random coordinate for x axis */
          var sat18ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat18ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat18i.position.x = (sat18x) + (pos18x * 9600);
          sat18i.position.z = altitude;
          console.log(sat18ix);
          //end
          var sat18iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat18iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat18i.position.y = (sat18y) - (pos18y * 9600); 
          console.log(sat18iy);
          //end


          //-satellite---Pseudo Sat 19/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
          var sat19i = new THREE.Mesh( geometry, material );
          sat19i.name = 'SAT-19i';
          scene2.add( sat19i );
          //-positions/
          /* Random coordinate for x axis */
          var sat19ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat19ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat19i.position.x = (sat19x) + (pos19x * 9600);
          sat19i.position.z = altitude;
          console.log(sat19ix);
          //end
          var sat19iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat19iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat19i.position.y = (sat19y) + (pos19y * 9600); 
          console.log(sat19iy);
          //end


          //-satellite---Pseudo Sat 20/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
          var sat20i = new THREE.Mesh( geometry, material );
          sat20i.name = 'SAT-20i';
          scene2.add( sat20i );
          //-positions/
          /* Random coordinate for x axis */
          var sat20ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat20ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat20i.position.x = (sat20x) - (pos20x * 9600);
          sat20i.position.z = altitude;
          console.log(sat20ix);
          //end
          var sat20iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat20iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat20i.position.y = (sat20y) - (pos20y * 9600); 
          console.log(sat20iy);
          //end


          //-satellite---Pseudo Sat 21/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
          var sat21i = new THREE.Mesh( geometry, material );
          sat21i.name = 'SAT-21i';
          scene2.add( sat21i );
          //-positions/
          /* Random coordinate for x axis */
          var sat21ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat21ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat21i.position.x = (sat21x) + (pos21x * 9600);
          sat21i.position.z = altitude;
          console.log(sat21ix);
          //end
          var sat21iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat21iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat21i.position.y = (sat21y) + (pos21y * 9600); 
          console.log(sat21iy);
          //end


          //-satellite---Pseudo Sat 22/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } ); 
          var sat22i = new THREE.Mesh( geometry, material );
          sat22i.name = 'SAT-22i';
          scene2.add( sat22i );
          //-positions/
          /* Random coordinate for x axis */
          var sat22ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat22ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat22i.position.x = (sat22x) - (pos22x * 9600);
          sat22i.position.z = altitude;
          console.log(sat22ix);
          //end
          var sat22iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat22iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat22i.position.y = (sat22y) - (pos22y * 9600); 
          console.log(sat22iy);
          //end


          //-satellite---Pseudo Sat 23/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
          var sat23i = new THREE.Mesh( geometry, material );
          sat23i.name = 'SAT-23i';
          scene2.add( sat23i );
          //-positions/
          /* Random coordinate for x axis */
          var sat23ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat23ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat23i.position.x = (sat23x) + (pos23x * 9600);
          sat23i.position.z = altitude;
          console.log(sat23ix);
          //end
          var sat23iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat23iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat23i.position.y = (sat23y) + (pos23y * 9600); 
          console.log(sat23iy);
          //end


          //-satellite---Pseudo Sat 24/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
          var sat24i = new THREE.Mesh( geometry, material );
          sat24i.name = 'SAT-24i';
          scene2.add( sat24i );
          //-positions/
          /* Random coordinate for x axis */
          var sat24ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat24ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat24i.position.x = (sat24x) - (pos24x * 9600);
          sat24i.position.z = altitude;
          console.log(sat24ix);
          //end
          var sat24iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat24iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat24i.position.y = (sat24y) + (pos24y * 9600); 
          console.log(sat24iy);
          //end


          //-satellite---Pseudo Sat 25/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
          var sat25i = new THREE.Mesh( geometry, material );
          sat25i.name = 'SAT-25i';
          scene2.add( sat25i );
          //-positions/
          /* Random coordinate for x axis */
          var sat25ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat25ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat25i.position.x = (sat25x) - (pos25x * 9600);
          sat25i.position.z = altitude;
          console.log(sat25ix);
          //end
          var sat25iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat25iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat25i.position.y = (sat25y) + (pos25y * 9600); 
          console.log(sat25iy);
          //end


          //-satellite---Pseudo Sat 26/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
          var sat26i = new THREE.Mesh( geometry, material );
          sat26i.name = 'SAT-26i';
          scene2.add( sat26i );
          //-positions/
          /* Random coordinate for x axis */
          var sat26ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat26ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat26i.position.x = (sat26x) - (pos26x * 9600);
          sat26i.position.z = altitude;
          console.log(sat26ix);
          //end
          var sat26iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat26iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat26i.position.y = (sat26y) - (pos26y * 9600); 
          console.log(sat26iy);
          //end


          //-satellite---Pseudo Sat 27/
          var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
          var sat27i = new THREE.Mesh( geometry, material );
          sat27i.name = 'SAT-27i';
          scene2.add( sat27i );
          //-positions/
          /* Random coordinate for x axis */
          var sat27ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
          sat27ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
          sat27i.position.x = (sat27x) - (pos27x * 9600);
          sat27i.position.z = altitude;
          console.log(sat27ix);
          //end
          var sat27iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
          sat27iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
          sat27i.position.y = (sat27y) - (pos27y * 9600); 
          console.log(sat27iy);
          //end


           //-satellite---Pseudo Sat 28/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat28i = new THREE.Mesh( geometry, material );
           sat28i.name = 'SAT-28i';
           scene2.add( sat28i );
           //-positions/
           /* Random coordinate for x axis */
           var sat28ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat28ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat28i.position.x = (sat28x) + (pos28x * 9600);
           sat28i.position.z = altitude;
           console.log(sat28ix);
           //end
           var sat28iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat28iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat28i.position.y = (sat28y) - (pos28y * 9600); 
           console.log(sat28iy);
           //end


           //-satellite---Pseudo Sat 29/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat29i = new THREE.Mesh( geometry, material );
           sat29i.name = 'SAT-29i';
           scene2.add( sat29i );
           //-positions/
           /* Random coordinate for x axis */
           var sat29ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat29ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat29i.position.x = (sat29x) - (pos29x * 9600);
           sat29i.position.z = altitude;
           console.log(sat29ix);
           //end
           var sat29iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat29iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat29i.position.y = (sat29y) + (pos29y * 9600); 
           console.log(sat29iy);
           //end


           //-satellite---Pseudo Sat 30/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat30i = new THREE.Mesh( geometry, material );
           sat30i.name = 'SAT-30i';
           scene2.add( sat30i );
           //-positions/
           /* Random coordinate for x axis */
           var sat30ix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat30ix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat30i.position.x = (sat30x) - (pos30x * 9600);
           sat30i.position.z = altitude;
           console.log(sat30ix);
           //end
           var sat30iy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat30iy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat30i.position.y = (sat30y) - (pos30y * 9600); 
           console.log(sat30iy);
           //end


           //-satellite---Pseudo Sat 1ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat1ii = new THREE.Mesh( geometry, material );
           sat1ii.name = 'SAT-1ii';
           scene2.add( sat1ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat1iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat1iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat1ii.position.x = (sat1i.position.x) - (pos1x * 9600);
           sat1ii.position.z = altitude;
           console.log(sat1iix);
           //end
           var sat1iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat1iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat1ii.position.y = (sat1i.position.y) + (pos1y * 9600); 
           console.log(sat1iiy);
           //end


           //-satellite---Pseudo Sat 2ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat2ii = new THREE.Mesh( geometry, material );
           sat2ii.name = 'SAT-2ii';
           scene2.add( sat2ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat2iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat2iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat2ii.position.x = (sat2i.position.x) + (pos2x * 9600);
           sat2ii.position.z = altitude;
           console.log(sat2iix);
           //end
           var sat2iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat2iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat2ii.position.y = (sat2i.position.y) - (pos2y * 9600); 
           console.log(sat2iiy);
           //end


           //-satellite---Pseudo Sat 3ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat3ii = new THREE.Mesh( geometry, material );
           sat3ii.name = 'SAT-3ii';
           scene2.add( sat3ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat3iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat3iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat3ii.position.x = (sat3i.position.x) - (pos3x * 9600);
           sat3ii.position.z = altitude;
           console.log(sat3iix);
           //end
           var sat3iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat3iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat3ii.position.y = (sat3i.position.y) + (pos3y * 9600); 
           console.log(sat3iiy);
           //end


           //-satellite---Pseudo Sat 4ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat4ii = new THREE.Mesh( geometry, material );
           sat4ii.name = 'SAT-4ii';
           scene2.add( sat4ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat4iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat4iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat4ii.position.x = (sat4i.position.x) + (pos4x * 9600);
           sat4ii.position.z = altitude;
           console.log(sat4iix);
           //end
           var sat4iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat4iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat4ii.position.y = (sat4i.position.y) - (pos4y * 9600); 
           console.log(sat4iiy);
           //end


           //-satellite---Pseudo Sat 5ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat5ii = new THREE.Mesh( geometry, material );
           sat5ii.name = 'SAT-5ii';
           scene2.add( sat5ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat5iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat5iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat5ii.position.x = (sat5i.position.x) + (pos5x * 9600);
           sat5ii.position.z = altitude;
           console.log(sat5iix);
           //end
           var sat5iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat5iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat5ii.position.y = (sat5i.position.y) - (pos5y * 9600); 
           console.log(sat5iiy);
           //end


           //-satellite---Pseudo Sat 6ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat6ii = new THREE.Mesh( geometry, material );
           sat6ii.name = 'SAT-6ii';
           scene2.add( sat6ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat6iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat6iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat6ii.position.x = (sat6i.position.x) - (pos6x * 9600);
           sat6ii.position.z = altitude;
           console.log(sat6iix);
           //end
           var sat6iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat6iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat6ii.position.y = (sat6i.position.y) + (pos6y * 9600); 
           console.log(sat6iiy);
           //end


           //-satellite---Pseudo Sat 7ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat7ii = new THREE.Mesh( geometry, material );
           sat7ii.name = 'SAT-7ii';
           scene2.add( sat7ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat7iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat7iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat7ii.position.x = (sat7i.position.x) - (pos7x * 9600);
           sat7ii.position.z = altitude;
           console.log(sat7iix);
           //end
           var sat7iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat7iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat7ii.position.y = (sat7i.position.y) + (pos7y * 9600); 
           console.log(sat7iiy);
           //end


           //-satellite---Pseudo Sat 8ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat8ii = new THREE.Mesh( geometry, material );
           sat8ii.name = 'SAT-8ii';
           scene2.add( sat8ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat8iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat8iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat8ii.position.x = (sat8i.position.x) - (pos8x * 9600);
           sat8ii.position.z = altitude;
           console.log(sat8iix);
           //end
           var sat8iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat8iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat8ii.position.y = (sat8i.position.y) + (pos8y * 9600); 
           console.log(sat8iiy);
           //end


           //-satellite---Pseudo Sat 9ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat9ii = new THREE.Mesh( geometry, material );
           sat9ii.name = 'SAT-9ii';
           scene2.add( sat9ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat9iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat9iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat9ii.position.x = (sat9i.position.x) - (pos9x * 9600);
           sat9ii.position.z = altitude;
           console.log(sat9iix);
           //end
           var sat9iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat9iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat9ii.position.y = (sat9i.position.y) - (pos9y * 9600); 
           console.log(sat9iiy);
           //end


           //-satellite---Pseudo Sat 10ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat10ii = new THREE.Mesh( geometry, material );
           sat10ii.name = 'SAT-10ii';
           scene2.add( sat10ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat10iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat10iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat10ii.position.x = (sat10i.position.x) + (pos10x * 9600);
           sat10ii.position.z = altitude;
           console.log(sat10iix);
           //end
           var sat10iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat10iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat10ii.position.y = (sat10i.position.y) - (pos10y * 9600); 
           console.log(sat10iiy);
           //end


           //-satellite---Pseudo Sat 11ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat11ii = new THREE.Mesh( geometry, material );
           sat11ii.name = 'SAT-11ii';
           scene2.add( sat11ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat11iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat11iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat11ii.position.x = (sat11i.position.x) - (pos11x * 9600);
           sat11ii.position.z = altitude;
           console.log(sat11iix);
           //end
           var sat11iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat11iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat11ii.position.y = (sat11i.position.y) + (pos11y * 9600); 
           console.log(sat11iiy);
           //end


           //-satellite---Pseudo Sat 12ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat12ii = new THREE.Mesh( geometry, material );
           sat12ii.name = 'SAT-12ii';
           scene2.add( sat12ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat12iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat12iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat12ii.position.x = (sat12i.position.x) - (pos12x * 9600);
           sat12ii.position.z = altitude;
           console.log(sat12iix);
           //end
           var sat12iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat12iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat12ii.position.y = (sat12i.position.y) + (pos12y * 9600); 
           console.log(sat12iiy);
           //end


           //-satellite---Pseudo Sat 13ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat13ii = new THREE.Mesh( geometry, material );
           sat13ii.name = 'SAT-13ii';
           scene2.add( sat13ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat13iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat13iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat13ii.position.x = (sat13i.position.x) - (pos13x * 9600);
           sat13ii.position.z = altitude;
           console.log(sat13iix);
           //end
           var sat13iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat13iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat13ii.position.y = (sat13i.position.y) - (pos13y * 9600); 
           console.log(sat13iiy);
           //end


           //-satellite---Pseudo Sat 14ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat14ii = new THREE.Mesh( geometry, material );
           sat14ii.name = 'SAT-14ii';
           scene2.add( sat14ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat14iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat14iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat14ii.position.x = (sat14i.position.x) + (pos14x * 9600);
           sat14ii.position.z = altitude;
           console.log(sat14iix);
           //end
           var sat14iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat14iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat14ii.position.y = (sat14i.position.y) - (pos14y * 9600); 
           console.log(sat14iiy);
           //end


           //-satellite---Pseudo Sat 15ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat15ii = new THREE.Mesh( geometry, material );
           sat15ii.name = 'SAT-15ii';
           scene2.add( sat15ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat15iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat15iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat15ii.position.x = (sat15i.position.x) - (pos15x * 9600);
           sat15ii.position.z = altitude;
           console.log(sat15iix);
           //end
           var sat15iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat15iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat15ii.position.y = (sat15i.position.y) + (pos15y * 9600); 
           console.log(sat15iiy);
           //end


           //-satellite---Pseudo Sat 16ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat16ii = new THREE.Mesh( geometry, material );
           sat16ii.name = 'SAT-16ii';
           scene2.add( sat16ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat16iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat16iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat16ii.position.x = (sat16i.position.x) - (pos16x * 9600);
           sat16ii.position.z = altitude;
           console.log(sat16iix);
           //end
           var sat16iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat16iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat16ii.position.y = (sat16i.position.y) - (pos16y * 9600); 
           console.log(sat16iiy);
           //end


           //-satellite---Pseudo Sat 17ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat17ii = new THREE.Mesh( geometry, material );
           sat17ii.name = 'SAT-17ii';
           scene2.add( sat17ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat17iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat17iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat17ii.position.x = (sat17i.position.x) + (pos17x * 9600);
           sat17ii.position.z = altitude;
           console.log(sat17iix);
           //end
           var sat17iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat17iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat17ii.position.y = (sat17i.position.y) + (pos17y * 9600); 
           console.log(sat17iiy);
           //end


           //-satellite---Pseudo Sat 18ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat18ii = new THREE.Mesh( geometry, material );
           sat18ii.name = 'SAT-18ii';
           scene2.add( sat18ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat18iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat18iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat18ii.position.x = (sat18i.position.x) + (pos18x * 9600);
           sat18ii.position.z = altitude;
           console.log(sat18iix);
           //end
           var sat18iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat18iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat18ii.position.y = (sat18i.position.y) - (pos18y * 9600); 
           console.log(sat18iiy);
           //end


           //-satellite---Pseudo Sat 19ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat19ii = new THREE.Mesh( geometry, material );
           sat19ii.name = 'SAT-19ii';
           scene2.add( sat19ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat19iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat19iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat19ii.position.x = (sat19i.position.x) + (pos19x * 9600);
           sat19ii.position.z = altitude;
           console.log(sat19iix);
           //end
           var sat19iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat19iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat19ii.position.y = (sat19i.position.y) + (pos19y * 9600); 
           console.log(sat19iiy);
           //end


           //-satellite---Pseudo Sat 20ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat20ii = new THREE.Mesh( geometry, material );
           sat20ii.name = 'SAT-20ii';
           scene2.add( sat20ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat20iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat20iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat20ii.position.x = (sat20i.position.x) - (pos20x * 9600);
           sat20ii.position.z = altitude;
           console.log(sat20iix);
           //end
           var sat20iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat20iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat20ii.position.y = (sat20i.position.y) - (pos20y * 9600); 
           console.log(sat20iiy);
           //end


           //-satellite---Pseudo Sat 21ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat21ii = new THREE.Mesh( geometry, material );
           sat21ii.name = 'SAT-21ii';
           scene2.add( sat21ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat21iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat21iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat21ii.position.x = (sat21i.position.x) + (pos21x * 9600);
           sat21ii.position.z = altitude;
           console.log(sat21iix);
           //end
           var sat21iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat21iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat21ii.position.y = (sat21i.position.y) + (pos21y * 9600); 
           console.log(sat21iiy);
           //end


           //-satellite---Pseudo Sat 22ii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat22ii = new THREE.Mesh( geometry, material );
           sat22ii.name = 'SAT-22ii';
           scene2.add( sat22ii );
           //-positions/
           /* Random coordinate for x axis */
           var sat22iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat22iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat22ii.position.x = (sat22i.position.x) - (pos22x * 9600);
           sat22ii.position.z = altitude;
           console.log(sat22iix);
           //end
           var sat22iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat22iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat22ii.position.y = (sat22i.position.y) - (pos22y * 9600); 
           console.log(sat22iiy);
           //end


            //-satellite---Pseudo Sat 23ii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat23ii = new THREE.Mesh( geometry, material );
            sat23ii.name = 'SAT-23ii';
            scene2.add( sat23ii );
            //-positions/
            /* Random coordinate for x axis */
            var sat23iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat23iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat23ii.position.x = (sat23i.position.x) + (pos23x * 9600);
            sat23ii.position.z = altitude;
            console.log(sat23iix);
            //end
            var sat23iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat23iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat23ii.position.y = (sat23i.position.y) + (pos23y * 9600); 
            console.log(sat23iiy);
            //end


            //-satellite---Pseudo Sat 24ii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat24ii = new THREE.Mesh( geometry, material );
            sat24ii.name = 'SAT-24ii';
            scene2.add( sat24ii );
            //-positions/
            /* Random coordinate for x axis */
            var sat24iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat24iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat24ii.position.x = (sat24i.position.x) - (pos24x * 9600);
            sat24ii.position.z = altitude;
            console.log(sat24iix);
            //end
            var sat24iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat24iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat24ii.position.y = (sat24i.position.y) + (pos24y * 9600); 
            console.log(sat24iiy);
            //end


            //-satellite---Pseudo Sat 25ii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat25ii = new THREE.Mesh( geometry, material );
            sat25ii.name = 'SAT-25ii';
            scene2.add( sat25ii );
            //-positions/
            /* Random coordinate for x axis */
            var sat25iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat25iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat25ii.position.x = (sat25i.position.x) - (pos25x * 9600);
            sat25ii.position.z = altitude;
            console.log(sat25iix);
            //end
            var sat25iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat25iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat25ii.position.y = (sat25i.position.y) + (pos25y * 9600); 
            console.log(sat25iiy);
            //end


            //-satellite---Pseudo Sat 26ii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat26ii = new THREE.Mesh( geometry, material );
            sat26ii.name = 'SAT-26ii';
            scene2.add( sat26ii );
            //-positions/
            /* Random coordinate for x axis */
            var sat26iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat26iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat26ii.position.x = (sat26i.position.x) - (pos26x * 9600);
            sat26ii.position.z = altitude;
            console.log(sat26iix);
            //end
            var sat26iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat26iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat26ii.position.y = (sat26i.position.y) - (pos26y * 9600); 
            console.log(sat26iiy);
            //end


            //-satellite---Pseudo Sat 27ii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat27ii = new THREE.Mesh( geometry, material );
            sat27ii.name = 'SAT-27ii';
            scene2.add( sat27ii );
            //-positions/
            /* Random coordinate for x axis */
            var sat27iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat27iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat27ii.position.x = (sat27i.position.x) - (pos27x * 9600);
            sat27ii.position.z = altitude;
            console.log(sat27iix);
            //end
            var sat27iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat27iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat27ii.position.y = (sat27i.position.y) - (pos27y * 9600); 
            console.log(sat27iiy);
            //end


            //-satellite---Pseudo Sat 28ii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat28ii = new THREE.Mesh( geometry, material );
            sat28ii.name = 'SAT-28ii';
            scene2.add( sat28ii );
            //-positions/
            /* Random coordinate for x axis */
            var sat28iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat28iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat28ii.position.x = (sat28i.position.x) + (pos28x * 9600);
            sat28ii.position.z = altitude;
            console.log(sat28iix);
            //end
            var sat28iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat28iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat28ii.position.y = (sat28i.position.y) - (pos28y * 9600); 
            console.log(sat28iiy);
            //end


            //-satellite---Pseudo Sat 29ii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat29ii = new THREE.Mesh( geometry, material );
            sat29ii.name = 'SAT-29ii';
            scene2.add( sat29ii );
            //-positions/
            /* Random coordinate for x axis */
            var sat29iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat29iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat29ii.position.x = (sat29i.position.x) - (pos29x * 9600);
            sat29ii.position.z = altitude;
            console.log(sat29iix);
            //end
            var sat29iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat29iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat29ii.position.y = (sat29i.position.y) + (pos29y * 9600); 
            console.log(sat29iiy);
            //end


            //-satellite---Pseudo Sat 30ii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat30ii = new THREE.Mesh( geometry, material );
            sat30ii.name = 'SAT-30ii';
            scene2.add( sat30ii );
            //-positions/
            /* Random coordinate for x axis */
            var sat30iix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat30iix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat30ii.position.x = (sat30i.position.x) - (pos30x * 9600);
            sat30ii.position.z = altitude;
            console.log(sat30iix);
            //end
            var sat30iiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat30iiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat30ii.position.y = (sat30i.position.y) - (pos30y * 9600); 
            console.log(sat30iiy);
            //end


            //-satellite---Pseudo Sat 1iii/
           var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
           var sat1iii = new THREE.Mesh( geometry, material );
           sat1iii.name = 'SAT-1iii';
           scene2.add( sat1iii );
           //-positions/
           /* Random coordinate for x axis */
           var sat1iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
           sat1iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
           sat1iii.position.x = (sat1ii.position.x) - (pos1x * 9600);
           sat1iii.position.z = altitude;
           console.log(sat1iiix);
           //end
           var sat1iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
           sat1iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
           sat1iii.position.y = (sat1ii.position.y) + (pos1y * 9600); 
           console.log(sat1iiiy);
           //end


            //-satellite---Pseudo Sat 2iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat2iii = new THREE.Mesh( geometry, material );
            sat2iii.name = 'SAT-2iii';
            scene2.add( sat2iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat2iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat2iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat2iii.position.x = (sat2ii.position.x) + (pos2x * 9600);
            sat2iii.position.z = altitude;
            console.log(sat2iiix);
            //end
            var sat2iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat2iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat2iii.position.y = (sat2ii.position.y) - (pos2y * 9600); 
            console.log(sat2iiiy);
            //end


            //-satellite---Pseudo Sat 3iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat3iii = new THREE.Mesh( geometry, material );
            sat3iii.name = 'SAT-3iii';
            scene2.add( sat3iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat3iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat3iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat3iii.position.x = (sat3ii.position.x) - (pos3x * 9600);
            sat3iii.position.z = altitude;
            console.log(sat3iiix);
            //end
            var sat3iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat3iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat3iii.position.y = (sat3ii.position.y) + (pos3y * 9600); 
            console.log(sat3iiiy);
            //end


            //-satellite---Pseudo Sat 4iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat4iii = new THREE.Mesh( geometry, material );
            sat4iii.name = 'SAT-4iii';
            scene2.add( sat4iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat4iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat4iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat4iii.position.x = (sat4ii.position.x) + (pos4x * 9600);
            sat4iii.position.z = altitude;
            console.log(sat4iiix);
            //end
            var sat4iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat4iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat4iii.position.y = (sat4ii.position.y) - (pos4y * 9600); 
            console.log(sat4iiiy);
            //end


            //-satellite---Pseudo Sat 5iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat5iii = new THREE.Mesh( geometry, material );
            sat5iii.name = 'SAT-5iii';
            scene2.add( sat5iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat5iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat5iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat5iii.position.x = (sat5ii.position.x) + (pos5x * 9600);
            sat5iii.position.z = altitude;
            console.log(sat5iiix);
            //end
            var sat5iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat5iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat5iii.position.y = (sat5ii.position.y) - (pos5y * 9600); 
            console.log(sat5iiiy);
            //end


            //-satellite---Pseudo Sat 6iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat6iii = new THREE.Mesh( geometry, material );
            sat6iii.name = 'SAT-6iii';
            scene2.add( sat6iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat6iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat6iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat6iii.position.x = (sat6ii.position.x) - (pos6x * 9600);
            sat6iii.position.z = altitude;
            console.log(sat6iiix);
            //end
            var sat6iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat6iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat6iii.position.y = (sat6ii.position.y) + (pos6y * 9600); 
            console.log(sat6iiiy);
            //end


            //-satellite---Pseudo Sat 7iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat7iii = new THREE.Mesh( geometry, material );
            sat7iii.name = 'SAT-7iii';
            scene2.add( sat7iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat7iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat7iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat7iii.position.x = (sat7ii.position.x) - (pos7x * 9600);
            sat7iii.position.z = altitude;
            console.log(sat7iiix);
            //end
            var sat7iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat7iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat7iii.position.y = (sat7ii.position.y) + (pos7y * 9600); 
            console.log(sat7iiiy);
            //end


            //-satellite---Pseudo Sat 8iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat8iii = new THREE.Mesh( geometry, material );
            sat8iii.name = 'SAT-8iii';
            scene2.add( sat8iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat8iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat8iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat8iii.position.x = (sat8ii.position.x) - (pos8x * 9600);
            sat8iii.position.z = altitude;
            console.log(sat8iiix);
            //end
            var sat8iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat8iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat8iii.position.y = (sat8ii.position.y) + (pos8y * 9600); 
            console.log(sat8iiiy);
            //end


            //-satellite---Pseudo Sat 9iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat9iii = new THREE.Mesh( geometry, material );
            sat9iii.name = 'SAT-9iii';
            scene2.add( sat9iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat9iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat9iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat9iii.position.x = (sat9ii.position.x) - (pos9x * 9600);
            sat9iii.position.z = altitude;
            console.log(sat9iiix);
            //end
            var sat9iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat9iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat9iii.position.y = (sat9ii.position.y) - (pos9y * 9600); 
            console.log(sat9iiiy);
            //end


            //-satellite---Pseudo Sat 10iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat10iii = new THREE.Mesh( geometry, material );
            sat10iii.name = 'SAT-10iii';
            scene2.add( sat10iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat10iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat10iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat10iii.position.x = (sat10ii.position.x) + (pos10x * 9600);
            sat10iii.position.z = altitude;
            console.log(sat10iiix);
            //end
            var sat10iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat10iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat10iii.position.y = (sat10ii.position.y) - (pos10y * 9600); 
            console.log(sat10iiiy);
            //end


            //-satellite---Pseudo Sat 11iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat11iii = new THREE.Mesh( geometry, material );
            sat11iii.name = 'SAT-11iii';
            scene2.add( sat11iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat11iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat11iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat11iii.position.x = (sat11ii.position.x) - (pos11x * 9600);
            sat11iii.position.z = altitude;
            console.log(sat11iiix);
            //end
            var sat11iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat11iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat11iii.position.y = (sat11ii.position.y) + (pos11y * 9600); 
            console.log(sat11iiiy);
            //end


            //-satellite---Pseudo Sat 12iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat12iii = new THREE.Mesh( geometry, material );
            sat12iii.name = 'SAT-12iii';
            scene2.add( sat12iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat12iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat12iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat12iii.position.x = (sat12ii.position.x) - (pos12x * 9600);
            sat12iii.position.z = altitude;
            console.log(sat12iiix);
            //end
            var sat12iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat12iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat12iii.position.y = (sat12ii.position.y) + (pos12y * 9600); 
            console.log(sat12iiiy);
            //end


            //-satellite---Pseudo Sat 13iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat13iii = new THREE.Mesh( geometry, material );
            sat13iii.name = 'SAT-13iii';
            scene2.add( sat13iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat13iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat13iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat13iii.position.x = (sat13ii.position.x) - (pos13x * 9600);
            sat13iii.position.z = altitude;
            console.log(sat13iiix);
            //end
            var sat13iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat13iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat13iii.position.y = (sat13ii.position.y) - (pos13y * 9600); 
            console.log(sat13iiiy);
            //end

            //-satellite---Pseudo Sat 14iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat14iii = new THREE.Mesh( geometry, material );
            sat14iii.name = 'SAT-14iii';
            scene2.add( sat14iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat14iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat14iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat14iii.position.x = (sat14ii.position.x) + (pos14x * 9600);
            sat14iii.position.z = altitude;
            console.log(sat14iiix);
            //end
            var sat14iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat14iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat14iii.position.y = (sat14ii.position.y) - (pos14y * 9600); 
            console.log(sat14iiiy);
            //end


            //-satellite---Pseudo Sat 15iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat15iii = new THREE.Mesh( geometry, material );
            sat15iii.name = 'SAT-15iii';
            scene2.add( sat15iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat15iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat15iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat15iii.position.x = (sat15ii.position.x) - (pos15x * 9600);
            sat15iii.position.z = altitude;
            console.log(sat15iiix);
            //end
            var sat15iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat15iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat15iii.position.y = (sat15ii.position.y) + (pos15y * 9600); 
            console.log(sat15iiiy);
            //end


            //-satellite---Pseudo Sat 16iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat16iii = new THREE.Mesh( geometry, material );
            sat16iii.name = 'SAT-16iii';
            scene2.add( sat16iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat16iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat16iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat16iii.position.x = (sat16ii.position.x) - (pos16x * 9600);
            sat16iii.position.z = altitude;
            console.log(sat16iiix);
            //end
            var sat16iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat16iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat16iii.position.y = (sat16ii.position.y) - (pos16y * 9600); 
            console.log(sat16iiiy);
            //end


            //-satellite---Pseudo Sat 17iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat17iii = new THREE.Mesh( geometry, material );
            sat17iii.name = 'SAT-17iii';
            scene2.add( sat17iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat17iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat17iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat17iii.position.x = (sat17ii.position.x) + (pos17x * 9600);
            sat17iii.position.z = altitude;
            console.log(sat17iiix);
            //end
            var sat17iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat17iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat17iii.position.y = (sat17ii.position.y) + (pos17y * 9600); 
            console.log(sat17iiiy);
            //end


            //-satellite---Pseudo Sat 18iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat18iii = new THREE.Mesh( geometry, material );
            sat18iii.name = 'SAT-18iii';
            scene2.add( sat18iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat18iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat18iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat18iii.position.x = (sat18ii.position.x) + (pos18x * 9600);
            sat18iii.position.z = altitude;
            console.log(sat18iiix);
            //end
            var sat18iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat18iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat18iii.position.y = (sat18ii.position.y) - (pos18y * 9600); 
            console.log(sat18iiiy);
            //end


            //-satellite---Pseudo Sat 19iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat19iii = new THREE.Mesh( geometry, material );
            sat19iii.name = 'SAT-19iii';
            scene2.add( sat19iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat19iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat19iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat19iii.position.x = (sat19ii.position.x) + (pos19x * 9600);
            sat19iii.position.z = altitude;
            console.log(sat19iiix);
            //end
            var sat19iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat19iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat19iii.position.y = (sat19ii.position.y) + (pos19y * 9600); 
            console.log(sat19iiiy);
            //end


            //-satellite---Pseudo Sat 20iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat20iii = new THREE.Mesh( geometry, material );
            sat20iii.name = 'SAT-20iii';
            scene2.add( sat20iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat20iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat20iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat20iii.position.x = (sat20ii.position.x) - (pos20x * 9600);
            sat20iii.position.z = altitude;
            console.log(sat20iiix);
            //end
            var sat20iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat20iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat20iii.position.y = (sat20ii.position.y) - (pos20y * 9600); 
            console.log(sat20iiiy);
            //end

            //-satellite---Pseudo Sat 21iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat21iii = new THREE.Mesh( geometry, material );
            sat21iii.name = 'SAT-21iii';
            scene2.add( sat21iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat21iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat21iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat21iii.position.x = (sat21ii.position.x) + (pos21x * 9600);
            sat21iii.position.z = altitude;
            console.log(sat21iiix);
            //end
            var sat21iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat21iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat21iii.position.y = (sat21ii.position.y) + (pos21y * 9600); 
            console.log(sat21iiiy);
            //end

            //-satellite---Pseudo Sat 22iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat22iii = new THREE.Mesh( geometry, material );
            sat22iii.name = 'SAT-22iii';
            scene2.add( sat22iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat22iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat22iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat22iii.position.x = (sat22ii.position.x) - (pos22x * 9600);
            sat22iii.position.z = altitude;
            console.log(sat22iiix);
            //end
            var sat22iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat22iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat22iii.position.y = (sat22ii.position.y) - (pos22y * 9600); 
            console.log(sat22iiiy);
            //end


            //-satellite---Pseudo Sat 23iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat23iii = new THREE.Mesh( geometry, material );
            sat23iii.name = 'SAT-23iii';
            scene2.add( sat23iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat23iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat23iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat23iii.position.x = (sat23ii.position.x) + (pos23x * 9600);
            sat23iii.position.z = altitude;
            console.log(sat23iiix);
            //end
            var sat23iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat23iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat23iii.position.y = (sat23ii.position.y) + (pos23y * 9600); 
            console.log(sat23iiiy);
            //end


            //-satellite---Pseudo Sat 24iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat24iii = new THREE.Mesh( geometry, material );
            sat24iii.name = 'SAT-24iii';
            scene2.add( sat24iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat24iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat24iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat24iii.position.x = (sat24ii.position.x) - (pos24x * 9600);
            sat24iii.position.z = altitude;
            console.log(sat24iiix);
            //end
            var sat24iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat24iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat24iii.position.y = (sat24ii.position.y) + (pos24y * 9600); 
            console.log(sat24iiiy);
            //end


            //-satellite---Pseudo Sat 25iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat25iii = new THREE.Mesh( geometry, material );
            sat25iii.name = 'SAT-25iii';
            scene2.add( sat25iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat25iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat25iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat25iii.position.x = (sat25ii.position.x) - (pos25x * 9600);
            sat25iii.position.z = altitude;
            console.log(sat25iiix);
            //end
            var sat25iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat25iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat25iii.position.y = (sat25ii.position.y) + (pos25y * 9600); 
            console.log(sat25iiiy);
            //end


            //-satellite---Pseudo Sat 26iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat26iii = new THREE.Mesh( geometry, material );
            sat26iii.name = 'SAT-26iii';
            scene2.add( sat26iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat26iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat26iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat26iii.position.x = (sat26ii.position.x) - (pos26x * 9600);
            sat26iii.position.z = altitude;
            console.log(sat26iiix);
            //end
            var sat26iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat26iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat26iii.position.y = (sat26ii.position.y) - (pos26y * 9600); 
            console.log(sat26iiiy);
            //end


            //-satellite---Pseudo Sat 27iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat27iii = new THREE.Mesh( geometry, material );
            sat27iii.name = 'SAT-27iii';
            scene2.add( sat27iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat27iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat27iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat27iii.position.x = (sat27ii.position.x) - (pos27x * 9600);
            sat27iii.position.z = altitude;
            console.log(sat27iiix);
            //end
            var sat27iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat27iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat27iii.position.y = (sat27ii.position.y) - (pos27y * 9600); 
            console.log(sat27iiiy);
            //end


            //-satellite---Pseudo Sat 28iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat28iii = new THREE.Mesh( geometry, material );
            sat28iii.name = 'SAT-28iii';
            scene2.add( sat28iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat28iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat28iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat28iii.position.x = (sat28ii.position.x) + (pos28x * 9600);
            sat28iii.position.z = altitude;
            console.log(sat28iiix);
            //end
            var sat28iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat28iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat28iii.position.y = (sat28ii.position.y) - (pos28y * 9600); 
            console.log(sat28iiiy);
            //end


            //-satellite---Pseudo Sat 29iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat29iii = new THREE.Mesh( geometry, material );
            sat29iii.name = 'SAT-29iii';
            scene2.add( sat29iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat29iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat29iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat29iii.position.x = (sat29ii.position.x) - (pos29x * 9600);
            sat29iii.position.z = altitude;
            console.log(sat29iiix);
            //end
            var sat29iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat29iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat29iii.position.y = (sat29ii.position.y) + (pos29y * 9600); 
            console.log(sat29iiiy);
            //end


            //-satellite---Pseudo Sat 30iii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat30iii = new THREE.Mesh( geometry, material );
            sat30iii.name = 'SAT-30iii';
            scene2.add( sat30iii );
            //-positions/
            /* Random coordinate for x axis */
            var sat30iiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat30iiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat30iii.position.x = (sat30ii.position.x) - (pos30x * 9600);
            sat30iii.position.z = altitude;
            console.log(sat30iiix);
            //end
            var sat30iiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat30iiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat30iii.position.y = (sat30ii.position.y) - (pos30y * 9600); 
            console.log(sat30iiiy);
            //end


            //-satellite---Pseudo Sat 1iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat1iv = new THREE.Mesh( geometry, material );
            sat1iv.name = 'SAT-1iv';
            scene2.add( sat1iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat1ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat1ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat1iv.position.x = (sat1iii.position.x) - (pos1x * 9600);
            sat1iv.position.z = altitude;
            console.log(sat1ivx);
            //end
            var sat1ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat1ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat1iv.position.y = (sat1iii.position.y) + (pos1y * 9600); 
            console.log(sat1ivy);
            //end


            //-satellite---Pseudo Sat 2iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat2iv = new THREE.Mesh( geometry, material );
            sat2iv.name = 'SAT-2iv';
            scene2.add( sat2iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat2ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat2ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat2iv.position.x = (sat2iii.position.x) + (pos2x * 9600);
            sat2iv.position.z = altitude;
            console.log(sat2ivx);
            //end
            var sat2ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat2ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat2iv.position.y = (sat2iii.position.y) - (pos2y * 9600); 
            console.log(sat2ivy);
            //end


            //-satellite---Pseudo Sat 3iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat3iv = new THREE.Mesh( geometry, material );
            sat3iv.name = 'SAT-3iv';
            scene2.add( sat3iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat3ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat3ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat3iv.position.x = (sat3iii.position.x) - (pos3x * 9600);
            sat3iv.position.z = altitude;
            console.log(sat3ivx);
            //end
            var sat3ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat3ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat3iv.position.y = (sat3iii.position.y) + (pos3y * 9600); 
            console.log(sat3ivy);
            //end

            //-satellite---Pseudo Sat 4iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat4iv = new THREE.Mesh( geometry, material );
            sat4iv.name = 'SAT-4iv';
            scene2.add( sat4iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat4ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat4ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat4iv.position.x = (sat4iii.position.x) + (pos4x * 9600);
            sat4iv.position.z = altitude;
            console.log(sat4ivx);
            //end
            var sat4ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat4ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat4iv.position.y = (sat4iii.position.y) - (pos4y * 9600); 
            console.log(sat4ivy);
            //end


            //-satellite---Pseudo Sat 5iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat5iv = new THREE.Mesh( geometry, material );
            sat5iv.name = 'SAT-5iv';
            scene2.add( sat5iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat5ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat5ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat5iv.position.x = (sat5iii.position.x) + (pos5x * 9600);
            sat4iv.position.z = altitude;
            console.log(sat5ivx);
            //end
            var sat5ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat5ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat5iv.position.y = (sat5iii.position.y) - (pos5y * 9600); 
            console.log(sat5ivy);
            //end


            //-satellite---Pseudo Sat 6iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat6iv = new THREE.Mesh( geometry, material );
            sat6iv.name = 'SAT-6iv';
            scene2.add( sat6iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat6ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat6ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat6iv.position.x = (sat6iii.position.x) - (pos6x * 9600);
            sat6iv.position.z = altitude;
            console.log(sat6ivx);
            //end
            var sat6ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat6ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat6iv.position.y = (sat6iii.position.y) + (pos6y * 9600); 
            console.log(sat6ivy);
            //end


            //-satellite---Pseudo Sat 7iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat7iv = new THREE.Mesh( geometry, material );
            sat7iv.name = 'SAT-7iv';
            scene2.add( sat7iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat7ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat7ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat7iv.position.x = (sat7iii.position.x) - (pos7x * 9600);
            sat7iv.position.z = altitude;
            console.log(sat7ivx);
            //end
            var sat7ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat7ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat7iv.position.y = (sat7iii.position.y) + (pos7y * 9600); 
            console.log(sat7ivy);
            //end


            //-satellite---Pseudo Sat 8iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat8iv = new THREE.Mesh( geometry, material );
            sat8iv.name = 'SAT-8iv';
            scene2.add( sat8iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat8ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat8ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat8iv.position.x = (sat8iii.position.x) - (pos8x * 9600);
            sat8iv.position.z = altitude;
            console.log(sat8ivx);
            //end
            var sat8ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat8ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat8iv.position.y = (sat8iii.position.y) + (pos8y * 9600); 
            console.log(sat8ivy);
            //end

            //-satellite---Pseudo Sat 9iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat9iv = new THREE.Mesh( geometry, material );
            sat9iv.name = 'SAT-9iv';
            scene2.add( sat9iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat9ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat9ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat9iv.position.x = (sat9iii.position.x) - (pos9x * 9600);
            sat9iv.position.z = altitude;
            console.log(sat9ivx);
            //end
            var sat9ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat9ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat9iv.position.y = (sat9iii.position.y) - (pos9y * 9600); 
            console.log(sat9ivy);
            //end


            //-satellite---Pseudo Sat 10iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat10iv = new THREE.Mesh( geometry, material );
            sat10iv.name = 'SAT-10iv';
            scene2.add( sat10iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat10ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat10ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat10iv.position.x = (sat10iii.position.x) + (pos10x * 9600);
            sat10iv.position.z = altitude;
            console.log(sat10ivx);
            //end
            var sat10ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat10ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat10iv.position.y = (sat10iii.position.y) - (pos10y * 9600); 
            console.log(sat10ivy);
            //end

            //-satellite---Pseudo Sat 11iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat11iv = new THREE.Mesh( geometry, material );
            sat11iv.name = 'SAT-11iv';
            scene2.add( sat11iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat11ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat11ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat11iv.position.x = (sat11iii.position.x) - (pos11x * 9600);
            sat11iv.position.z = altitude;
            console.log(sat11ivx);
            //end
            var sat11ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat11ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat11iv.position.y = (sat11iii.position.y) + (pos11y * 9600); 
            console.log(sat11ivy);
            //end


            //-satellite---Pseudo Sat 12iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat12iv = new THREE.Mesh( geometry, material );
            sat12iv.name = 'SAT-12iv';
            scene2.add( sat12iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat12ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat12ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat12iv.position.x = (sat12iii.position.x) - (pos12x * 9600);
            sat12iv.position.z = altitude;
            console.log(sat12ivx);
            //end
            var sat12ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat12ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat12iv.position.y = (sat12iii.position.y) + (pos12y * 9600); 
            console.log(sat12ivy);
            //end


            //-satellite---Pseudo Sat 13iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat13iv = new THREE.Mesh( geometry, material );
            sat13iv.name = 'SAT-13iv';
            scene2.add( sat13iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat13ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat13ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat13iv.position.x = (sat13iii.position.x) - (pos13x * 9600);
            sat13iv.position.z = altitude;
            console.log(sat13ivx);
            //end
            var sat13ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat13ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat13iv.position.y = (sat13iii.position.y) - (pos13y * 9600); 
            console.log(sat13ivy);
            //end


            //-satellite---Pseudo Sat 14iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat14iv = new THREE.Mesh( geometry, material );
            sat14iv.name = 'SAT-14iv';
            scene2.add( sat14iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat14ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat14ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat14iv.position.x = (sat14iii.position.x) + (pos14x * 9600);
            sat14iv.position.z = altitude;
            console.log(sat14ivx);
            //end
            var sat14ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat14ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat14iv.position.y = (sat14iii.position.y) - (pos14y * 9600); 
            console.log(sat14ivy);
            //end


            //-satellite---Pseudo Sat 15iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat15iv = new THREE.Mesh( geometry, material );
            sat15iv.name = 'SAT-15iv';
            scene2.add( sat15iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat15ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat15ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat15iv.position.x = (sat15iii.position.x) - (pos15x * 9600);
            sat15iv.position.z = altitude;
            console.log(sat15ivx);
            //end
            var sat15ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat15ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat15iv.position.y = (sat15iii.position.y) + (pos15y * 9600); 
            console.log(sat15ivy);
            //end

            //-satellite---Pseudo Sat 16iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat16iv = new THREE.Mesh( geometry, material );
            sat16iv.name = 'SAT-16iv';
            scene2.add( sat16iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat16ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat16ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat16iv.position.x = (sat16iii.position.x) - (pos16x * 9600);
            sat16iv.position.z = altitude;
            console.log(sat16ivx);
            //end
            var sat16ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat16ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat16iv.position.y = (sat16iii.position.y) - (pos16y * 9600); 
            console.log(sat16ivy);
            //end


            //-satellite---Pseudo Sat 17iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat17iv = new THREE.Mesh( geometry, material );
            sat17iv.name = 'SAT-17iv';
            scene2.add( sat17iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat17ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat17ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat17iv.position.x = (sat17iii.position.x) + (pos17x * 9600);
            sat17iv.position.z = altitude;
            console.log(sat17ivx);
            //end
            var sat17ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat17ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat17iv.position.y = (sat17iii.position.y) + (pos17y * 9600); 
            console.log(sat17ivy);
            //end

            //-satellite---Pseudo Sat 18iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat18iv = new THREE.Mesh( geometry, material );
            sat18iv.name = 'SAT-18iv';
            scene2.add( sat18iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat18ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat18ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat18iv.position.x = (sat18iii.position.x) + (pos18x * 9600);
            sat18iv.position.z = altitude;
            console.log(sat18ivx);
            //end
            var sat18ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat18ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat18iv.position.y = (sat18iii.position.y) - (pos18y * 9600); 
            console.log(sat18ivy);
            //end


            //-satellite---Pseudo Sat 19iv/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat19iv = new THREE.Mesh( geometry, material );
            sat19iv.name = 'SAT-19iv';
            scene2.add( sat19iv );
            //-positions/
            /* Random coordinate for x axis */
            var sat19ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat19ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat19iv.position.x = (sat19iii.position.x) + (pos19x * 9600);
            sat19iv.position.z = altitude;
            console.log(sat19ivx);
            //end
            var sat19ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat19ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat19iv.position.y = (sat19iii.position.y) + (pos19y * 9600); 
            console.log(sat19ivy);
            //end


             //-satellite---Pseudo Sat 20iv/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat20iv = new THREE.Mesh( geometry, material );
             sat20iv.name = 'SAT-20iv';
             scene2.add( sat20iv );
             //-positions/
             /* Random coordinate for x axis */
             var sat20ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat20ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat20iv.position.x = (sat20iii.position.x) - (pos20x * 9600);
             sat20iv.position.z = altitude;
             console.log(sat20ivx);
             //end
             var sat20ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat20ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat20iv.position.y = (sat20iii.position.y) - (pos20y * 9600); 
             console.log(sat20ivy);
             //end


             //-satellite---Pseudo Sat 21iv/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat21iv = new THREE.Mesh( geometry, material );
             sat21iv.name = 'SAT-21iv';
             scene2.add( sat21iv );
             //-positions/
             /* Random coordinate for x axis */
             var sat21ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat21ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat21iv.position.x = (sat21iii.position.x) + (pos21x * 9600);
             sat21iv.position.z = altitude;
             console.log(sat21ivx);
             //end
             var sat21ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat21ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat21iv.position.y = (sat21iii.position.y) + (pos21y * 9600); 
             console.log(sat21ivy);
             //end


             //-satellite---Pseudo Sat 22iv/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat22iv = new THREE.Mesh( geometry, material );
             sat22iv.name = 'SAT-22iv';
             scene2.add( sat22iv );
             //-positions/
             /* Random coordinate for x axis */
             var sat22ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat22ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat22iv.position.x = (sat22iii.position.x) - (pos22x * 9600);
             sat22iv.position.z = altitude;
             console.log(sat22ivx);
             //end
             var sat22ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat22ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat22iv.position.y = (sat22iii.position.y) - (pos22y * 9600); 
             console.log(sat22ivy);
             //end


             //-satellite---Pseudo Sat 23iv/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat23iv = new THREE.Mesh( geometry, material );
             sat23iv.name = 'SAT-23iv';
             scene2.add( sat23iv );
             //-positions/
             /* Random coordinate for x axis */
             var sat23ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat23ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat23iv.position.x = (sat23iii.position.x) + (pos23x * 9600);
             sat23iv.position.z = altitude;
             console.log(sat23ivx);
             //end
             var sat23ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat23ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat23iv.position.y = (sat23iii.position.y) + (pos23y * 9600); 
             console.log(sat23ivy);
             //end


             //-satellite---Pseudo Sat 24iv/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat24iv = new THREE.Mesh( geometry, material );
             sat24iv.name = 'SAT-24iv';
             scene2.add( sat24iv );
             //-positions/
             /* Random coordinate for x axis */
             var sat24ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat24ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat24iv.position.x = (sat24iii.position.x) - (pos24x * 9600);
             sat24iv.position.z = altitude;
             console.log(sat24ivx);
             //end
             var sat24ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat24ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat24iv.position.y = (sat24iii.position.y) + (pos24y * 9600); 
             console.log(sat24ivy);
             //end


             //-satellite---Pseudo Sat 25iv/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat25iv = new THREE.Mesh( geometry, material );
             sat25iv.name = 'SAT-25iv';
             scene2.add( sat25iv );
             //-positions/
             /* Random coordinate for x axis */
             var sat25ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat25ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat25iv.position.x = (sat25iii.position.x) - (pos25x * 9600);
             sat25iv.position.z = altitude;
             console.log(sat25ivx);
             //end
             var sat25ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat25ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat25iv.position.y = (sat25iii.position.y) + (pos25y * 9600); 
             console.log(sat25ivy);
             //end


              //-satellite---Pseudo Sat 26iv/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat26iv = new THREE.Mesh( geometry, material );
              sat26iv.name = 'SAT-26iv';
              scene2.add( sat26iv );
              //-positions/
              /* Random coordinate for x axis */
              var sat26ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat26ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat26iv.position.x = (sat26iii.position.x) - (pos26x * 9600);
              sat26iv.position.z = altitude;
              console.log(sat26ivx);
              //end
              var sat26ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat26ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat26iv.position.y = (sat26iii.position.y) - (pos26y * 9600); 
              console.log(sat26ivy);
              //end


              //-satellite---Pseudo Sat 27iv/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat27iv = new THREE.Mesh( geometry, material );
              sat27iv.name = 'SAT-27iv';
              scene2.add( sat27iv );
              //-positions/
              /* Random coordinate for x axis */
              var sat27ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat27ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat27iv.position.x = (sat27iii.position.x) - (pos27x * 9600);
              sat27iv.position.z = altitude;
              console.log(sat27ivx);
              //end
              var sat27ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat27ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat27iv.position.y = (sat27iii.position.y) - (pos27y * 9600); 
              console.log(sat27ivy);
              //end


              //-satellite---Pseudo Sat 28iv/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat28iv = new THREE.Mesh( geometry, material );
              sat28iv.name = 'SAT-28iv';
              scene2.add( sat28iv );
              //-positions/
              /* Random coordinate for x axis */
              var sat28ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat28ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat28iv.position.x = (sat28iii.position.x) + (pos28x * 9600);
              sat28iv.position.z = altitude;
              console.log(sat28ivx);
              //end
              var sat28ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat28ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat28iv.position.y = (sat28iii.position.y) - (pos28y * 9600); 
              console.log(sat28ivy);
              //end


              //-satellite---Pseudo Sat 29iv/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat29iv = new THREE.Mesh( geometry, material );
              sat29iv.name = 'SAT-29iv';
              scene2.add( sat29iv );
              //-positions/
              /* Random coordinate for x axis */
              var sat29ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat29ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat29iv.position.x = (sat29iii.position.x) - (pos29x * 9600);
              sat29iv.position.z = altitude;
              console.log(sat29ivx);
              //end
              var sat29ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat29ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat29iv.position.y = (sat29iii.position.y) + (pos29y * 9600); 
              console.log(sat29ivy);
              //end


              //-satellite---Pseudo Sat 30iv/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat30iv = new THREE.Mesh( geometry, material );
              sat30iv.name = 'SAT-30iv';
              scene2.add( sat30iv );
              //-positions/
              /* Random coordinate for x axis */
              var sat30ivx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat30ivx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat30iv.position.x = (sat30iii.position.x) - (pos30x * 9600);
              sat30iv.position.z = altitude;
              console.log(sat30ivx);
              //end
              var sat30ivy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat30ivy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat30iv.position.y = (sat30iii.position.y) - (pos30y * 9600); 
              console.log(sat30ivy);
              //end


            //-satellite---Pseudo Sat 1v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat1v = new THREE.Mesh( geometry, material );
            sat1v.name = 'SAT-1v';
            scene2.add( sat1v );
            //-positions/
            /* Random coordinate for x axis */
            var sat1vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat1vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat1v.position.x = (sat1iv.position.x) - (pos1x * 9600);
            sat1v.position.z = altitude;
            console.log(sat1vx);
            //end
            var sat1vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat1vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat1v.position.y = (sat1iv.position.y) + (pos1y * 9600); 
            console.log(sat1vy);
            //end


            //-satellite---Pseudo Sat 2v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat2v = new THREE.Mesh( geometry, material );
            sat2v.name = 'SAT-2v';
            scene2.add( sat2v );
            //-positions/
            /* Random coordinate for x axis */
            var sat2vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat2vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat2v.position.x = (sat2iv.position.x) + (pos2x * 9600);
            sat2v.position.z = altitude;
            console.log(sat2vx);
            //end
            var sat2vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat2vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat2v.position.y = (sat2iv.position.y) - (pos2y * 9600); 
            console.log(sat2vy);
            //end


            //-satellite---Pseudo Sat 3v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat3v = new THREE.Mesh( geometry, material );
            sat3v.name = 'SAT-3v';
            scene2.add( sat3v );
            //-positions/
            /* Random coordinate for x axis */
            var sat3vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat3vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat3v.position.x = (sat3iv.position.x) - (pos3x * 9600);
            sat3v.position.z = altitude;
            console.log(sat3vx);
            //end
            var sat3vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat3vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat3v.position.y = (sat3iv.position.y) + (pos3y * 9600); 
            console.log(sat3vy);
            //end


            //-satellite---Pseudo Sat 4v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat4v = new THREE.Mesh( geometry, material );
            sat4v.name = 'SAT-4v';
            scene2.add( sat4v );
            //-positions/
            /* Random coordinate for x axis */
            var sat4vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat4vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat4v.position.x = (sat4iv.position.x) + (pos4x * 9600);
            sat4v.position.z = altitude;
            console.log(sat4vx);
            //end
            var sat4vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat4vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat4v.position.y = (sat4iv.position.y) - (pos4y * 9600); 
            console.log(sat4vy);
            //end

            //-satellite---Pseudo Sat 5v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat5v = new THREE.Mesh( geometry, material );
            sat5v.name = 'SAT-5v';
            scene2.add( sat5v );
            //-positions/
            /* Random coordinate for x axis */
            var sat5vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat5vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat5v.position.x = (sat5iv.position.x) + (pos5x * 9600);
            sat5v.position.z = altitude;
            console.log(sat5vx);
            //end
            var sat5vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat5vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat5v.position.y = (sat5iv.position.y) - (pos5y * 9600); 
            console.log(sat5vy);
            //end


            //-satellite---Pseudo Sat 6v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat6v = new THREE.Mesh( geometry, material );
            sat6v.name = 'SAT-6v';
            scene2.add( sat6v );
            //-positions/
            /* Random coordinate for x axis */
            var sat6vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat6vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat6v.position.x = (sat6iv.position.x) - (pos6x * 9600);
            sat6v.position.z = altitude;
            console.log(sat6vx);
            //end
            var sat6vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat6vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat6v.position.y = (sat6iv.position.y) + (pos6y * 9600); 
            console.log(sat6vy);
            //end


            //-satellite---Pseudo Sat 7v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat7v = new THREE.Mesh( geometry, material );
            sat7v.name = 'SAT-7v';
            scene2.add( sat7v );
            //-positions/
            /* Random coordinate for x axis */
            var sat7vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat7vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat7v.position.x = (sat7iv.position.x) - (pos7x * 9600);
            sat7v.position.z = altitude;
            console.log(sat7vx);
            //end
            var sat7vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat7vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat7v.position.y = (sat7iv.position.y) + (pos7y * 9600); 
            console.log(sat7vy);
            //end


            //-satellite---Pseudo Sat 8v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat8v = new THREE.Mesh( geometry, material );
            sat8v.name = 'SAT-8v';
            scene2.add( sat8v );
            //-positions/
            /* Random coordinate for x axis */
            var sat8vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat8vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat8v.position.x = (sat8iv.position.x) - (pos8x * 9600);
            sat8v.position.z = altitude;
            console.log(sat8vx);
            //end
            var sat8vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat8vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat8v.position.y = (sat8iv.position.y) + (pos8y * 9600); 
            console.log(sat8vy);
            //end


             //-satellite---Pseudo Sat 9v/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat9v = new THREE.Mesh( geometry, material );
             sat9v.name = 'SAT-9v';
             scene2.add( sat9v );
             //-positions/
             /* Random coordinate for x axis */
             var sat9vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat9vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat9v.position.x = (sat9iv.position.x) - (pos9x * 9600);
             sat9v.position.z = altitude;
             console.log(sat9vx);
             //end
             var sat9vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat9vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat9v.position.y = (sat9iv.position.y) - (pos9y * 9600); 
             console.log(sat9vy);
             //end


             //-satellite---Pseudo Sat 10v/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat10v = new THREE.Mesh( geometry, material );
             sat10v.name = 'SAT-10v';
             scene2.add( sat10v );
             //-positions/
             /* Random coordinate for x axis */
             var sat10vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat10vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat10v.position.x = (sat10iv.position.x) + (pos10x * 9600);
             sat10v.position.z = altitude;
             console.log(sat10vx);
             //end
             var sat10vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat10vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat10v.position.y = (sat10iv.position.y) - (pos10y * 9600); 
             console.log(sat10vy);
             //end

             //-satellite---Pseudo Sat 11v/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat11v = new THREE.Mesh( geometry, material );
             sat11v.name = 'SAT-11v';
             scene2.add( sat11v );
             //-positions/
             /* Random coordinate for x axis */
             var sat11vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat11vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat11v.position.x = (sat11iv.position.x) - (pos11x * 9600);
             sat11v.position.z = altitude;
             console.log(sat11vx);
             //end
             var sat11vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat11vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat11v.position.y = (sat11iv.position.y) + (pos11y * 9600); 
             console.log(sat11vy);
             //end


             //-satellite---Pseudo Sat 12v/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat12v = new THREE.Mesh( geometry, material );
             sat12v.name = 'SAT-12v';
             scene2.add( sat12v );
             //-positions/
             /* Random coordinate for x axis */
             var sat12vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat12vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat12v.position.x = (sat12iv.position.x) - (pos12x * 9600);
             sat12v.position.z = altitude;
             console.log(sat12vx);
             //end
             var sat12vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat12vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat12v.position.y = (sat12iv.position.y) + (pos12y * 9600); 
             console.log(sat12vy);
             //end


             //-satellite---Pseudo Sat 13v/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat13v = new THREE.Mesh( geometry, material );
             sat13v.name = 'SAT-13v';
             scene2.add( sat13v );
             //-positions/
             /* Random coordinate for x axis */
             var sat13vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat13vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat13v.position.x = (sat13iv.position.x) - (pos13x * 9600);
             sat13v.position.z = altitude;
             console.log(sat13vx);
             //end
             var sat13vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat13vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat13v.position.y = (sat13iv.position.y) - (pos13y * 9600); 
             console.log(sat13vy);
             //end


             //-satellite---Pseudo Sat 14v/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat14v = new THREE.Mesh( geometry, material );
             sat14v.name = 'SAT-14v';
             scene2.add( sat14v );
             //-positions/
             /* Random coordinate for x axis */
             var sat14vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat14vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat14v.position.x = (sat14iv.position.x) + (pos14x * 9600);
             sat14v.position.z = altitude;
             console.log(sat14vx);
             //end
             var sat14vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat14vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat14v.position.y = (sat14iv.position.y) - (pos14y * 9600); 
             console.log(sat14vy);
             //end


             //-satellite---Pseudo Sat 15v/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat15v = new THREE.Mesh( geometry, material );
             sat15v.name = 'SAT-15v';
             scene2.add( sat15v );
             //-positions/
             /* Random coordinate for x axis */
             var sat15vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat15vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat15v.position.x = (sat15iv.position.x) - (pos15x * 9600);
             sat15v.position.z = altitude;
             console.log(sat15vx);
             //end
             var sat15vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat15vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat15v.position.y = (sat15iv.position.y) + (pos15y * 9600); 
             console.log(sat15vy);
             //end


             //-satellite---Pseudo Sat 16v/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat16v = new THREE.Mesh( geometry, material );
             sat16v.name = 'SAT-16v';
             scene2.add( sat16v );
             //-positions/
             /* Random coordinate for x axis */
             var sat16vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat16vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat16v.position.x = (sat16iv.position.x) - (pos16x * 9600);
             sat16v.position.z = altitude;
             console.log(sat16vx);
             //end
             var sat16vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat16vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat16v.position.y = (sat16iv.position.y) - (pos16y * 9600); 
             console.log(sat16vy);
             //end


             //-satellite---Pseudo Sat 17v/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat17v = new THREE.Mesh( geometry, material );
             sat17v.name = 'SAT-17v';
             scene2.add( sat17v );
             //-positions/
             /* Random coordinate for x axis */
             var sat17vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat17vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat17v.position.x = (sat17iv.position.x) + (pos17x * 9600);
             sat17v.position.z = altitude;
             console.log(sat17vx);
             //end
             var sat17vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat17vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat17v.position.y = (sat17iv.position.y) + (pos17y * 9600); 
             console.log(sat17vy);
             //end


             //-satellite---Pseudo Sat 18v/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat18v = new THREE.Mesh( geometry, material );
             sat18v.name = 'SAT-18v';
             scene2.add( sat18v );
             //-positions/
             /* Random coordinate for x axis */
             var sat18vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat18vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat18v.position.x = (sat18iv.position.x) + (pos18x * 9600);
             sat18v.position.z = altitude;
             console.log(sat18vx);
             //end
             var sat18vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat18vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat18v.position.y = (sat18iv.position.y) - (pos18y * 9600); 
             console.log(sat18vy);
             //end


             //-satellite---Pseudo Sat 19v/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat19v = new THREE.Mesh( geometry, material );
             sat19v.name = 'SAT-19v';
             scene2.add( sat19v );
             //-positions/
             /* Random coordinate for x axis */
             var sat19vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat19vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat19v.position.x = (sat19iv.position.x) + (pos19x * 9600);
             sat19v.position.z = altitude;
             console.log(sat19vx);
             //end
             var sat19vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat19vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat19v.position.y = (sat19iv.position.y) + (pos19y * 9600); 
             console.log(sat19vy);
             //end


            //-satellite---Pseudo Sat 20v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat20v = new THREE.Mesh( geometry, material );
            sat20v.name = 'SAT-20v';
            scene2.add( sat20v );
            //-positions/
            /* Random coordinate for x axis */
            var sat20vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat20vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat20v.position.x = (sat20iv.position.x) - (pos20x * 9600);
            sat20v.position.z = altitude;
            console.log(sat20vx);
            //end
            var sat20vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat20vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat20v.position.y = (sat20iv.position.y) - (pos20y * 9600); 
            console.log(sat20vy);
            //end


            //-satellite---Pseudo Sat 21v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat21v = new THREE.Mesh( geometry, material );
            sat21v.name = 'SAT-21v';
            scene2.add( sat21v );
            //-positions/
            /* Random coordinate for x axis */
            var sat21vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat21vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat21v.position.x = (sat21iv.position.x) + (pos21x * 9600);
            sat21v.position.z = altitude;
            console.log(sat21vx);
            //end
            var sat21vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat21vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat21v.position.y = (sat21iv.position.y) + (pos21y * 9600); 
            console.log(sat21vy);
            //end


            //-satellite---Pseudo Sat 22v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat22v = new THREE.Mesh( geometry, material );
            sat22v.name = 'SAT-22v';
            scene2.add( sat22v );
            //-positions/
            /* Random coordinate for x axis */
            var sat22vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat22vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat22v.position.x = (sat22iv.position.x) - (pos22x * 9600);
            sat22v.position.z = altitude;
            console.log(sat22vx);
            //end
            var sat22vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat22vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat22v.position.y = (sat22iv.position.y) - (pos22y * 9600); 
            console.log(sat22vy);
            //end


            //-satellite---Pseudo Sat 23v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat23v = new THREE.Mesh( geometry, material );
            sat23v.name = 'SAT-23v';
            scene2.add( sat23v );
            //-positions/
            /* Random coordinate for x axis */
            var sat23vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat23vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat23v.position.x = (sat23iv.position.x) + (pos23x * 9600);
            sat23v.position.z = altitude;
            console.log(sat23vx);
            //end
            var sat23vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat23vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat23v.position.y = (sat23iv.position.y) + (pos23y * 9600); 
            console.log(sat23vy);
            //end


            //-satellite---Pseudo Sat 24v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat24v = new THREE.Mesh( geometry, material );
            sat24v.name = 'SAT-24v';
            scene2.add( sat24v );
            //-positions/
            /* Random coordinate for x axis */
            var sat24vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat24vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat24v.position.x = (sat24iv.position.x) - (pos24x * 9600);
            sat24v.position.z = altitude;
            console.log(sat24vx);
            //end
            var sat24vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat24vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat24v.position.y = (sat24iv.position.y) + (pos24y * 9600); 
            console.log(sat24vy);
            //end


            //-satellite---Pseudo Sat 25v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat25v = new THREE.Mesh( geometry, material );
            sat25v.name = 'SAT-25v';
            scene2.add( sat25v );
            //-positions/
            /* Random coordinate for x axis */
            var sat25vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat25vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat25v.position.x = (sat25iv.position.x) - (pos25x * 9600);
            sat25v.position.z = altitude;
            console.log(sat25vx);
            //end
            var sat25vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat25vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat25v.position.y = (sat25iv.position.y) + (pos25y * 9600); 
            console.log(sat25vy);
            //end


            //-satellite---Pseudo Sat 26v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat26v = new THREE.Mesh( geometry, material );
            sat26v.name = 'SAT-26v';
            scene2.add( sat26v );
            //-positions/
            /* Random coordinate for x axis */
            var sat26vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat26vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat26v.position.x = (sat26iv.position.x) - (pos26x * 9600);
            sat26v.position.z = altitude;
            console.log(sat26vx);
            //end
            var sat26vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat26vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat26v.position.y = (sat26iv.position.y) - (pos26y * 9600); 
            console.log(sat26vy);
            //end


            //-satellite---Pseudo Sat 27v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat27v = new THREE.Mesh( geometry, material );
            sat27v.name = 'SAT-27v';
            scene2.add( sat27v );
            //-positions/
            /* Random coordinate for x axis */
            var sat27vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat27vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat27v.position.x = (sat27iv.position.x) - (pos27x * 9600);
            sat27v.position.z = altitude;
            console.log(sat27vx);
            //end
            var sat27vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat27vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat27v.position.y = (sat27iv.position.y) - (pos27y * 9600); 
            console.log(sat27vy);
            //end



            //-satellite---Pseudo Sat 28v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat28v = new THREE.Mesh( geometry, material );
            sat28v.name = 'SAT-28v';
            scene2.add( sat28v );
            //-positions/
            /* Random coordinate for x axis */
            var sat28vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat28vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat28v.position.x = (sat28iv.position.x) + (pos28x * 9600);
            sat28v.position.z = altitude;
            console.log(sat28vx);
            //end
            var sat28vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat28vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat28v.position.y = (sat28iv.position.y) - (pos28y * 9600); 
            console.log(sat28vy);
            //end


            //-satellite---Pseudo Sat 29v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat29v = new THREE.Mesh( geometry, material );
            sat29v.name = 'SAT-29v';
            scene2.add( sat29v );
            //-positions/
            /* Random coordinate for x axis */
            var sat29vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat29vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat29v.position.x = (sat29iv.position.x) - (pos29x * 9600);
            sat29v.position.z = altitude;
            console.log(sat29vx);
            //end
            var sat29vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat29vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat29v.position.y = (sat29iv.position.y) + (pos29y * 9600); 
            console.log(sat29vy);
            //end


            //-satellite---Pseudo Sat 30v/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat30v = new THREE.Mesh( geometry, material );
            sat30v.name = 'SAT-30v';
            scene2.add( sat30v );
            //-positions/
            /* Random coordinate for x axis */
            var sat30vx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat30vx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat30v.position.x = (sat30iv.position.x) - (pos30x * 9600);
            sat30v.position.z = altitude;
            console.log(sat30vx);
            //end
            var sat30vy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat30vy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat30v.position.y = (sat30iv.position.y) - (pos30y * 9600); 
            console.log(sat30vy);
            //end


            //-satellite---Pseudo Sat 1vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat1vi = new THREE.Mesh( geometry, material );
            sat1vi.name = 'SAT-1vi';
            scene2.add( sat1vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat1vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat1vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat1vi.position.x = (sat1v.position.x) - (pos1x * 9600);
            sat1vi.position.z = altitude;
            console.log(sat1vix);
            //end
            var sat1viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat1viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat1vi.position.y = (sat1v.position.y) + (pos1y * 9600); 
            console.log(sat1viy);
            //end


            //-satellite---Pseudo Sat 2vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat2vi = new THREE.Mesh( geometry, material );
            sat2vi.name = 'SAT-2vi';
            scene2.add( sat2vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat2vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat2vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat2vi.position.x = (sat2v.position.x) + (pos2x * 9600);
            sat2vi.position.z = altitude;
            console.log(sat2vix);
            //end
            var sat2viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat2viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat2vi.position.y = (sat2v.position.y) - (pos2y * 9600); 
            console.log(sat2viy);
            //end


            //-satellite---Pseudo Sat 3vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat3vi = new THREE.Mesh( geometry, material );
            sat3vi.name = 'SAT-3vi';
            scene2.add( sat3vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat3vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat3vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat3vi.position.x = (sat3v.position.x) - (pos3x * 9600);
            sat3vi.position.z = altitude;
            console.log(sat3vix);
            //end
            var sat3viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat3viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat3vi.position.y = (sat3v.position.y) + (pos3y * 9600); 
            console.log(sat3viy);
            //end


            //-satellite---Pseudo Sat 4vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat4vi = new THREE.Mesh( geometry, material );
            sat4vi.name = 'SAT-4vi';
            scene2.add( sat4vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat4vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat4vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat4vi.position.x = (sat4v.position.x) + (pos4x * 9600);
            sat4vi.position.z = altitude;
            console.log(sat4vix);
            //end
            var sat4viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat4viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat4vi.position.y = (sat4v.position.y) - (pos4y * 9600); 
            console.log(sat4viy);
            //end


            //-satellite---Pseudo Sat 5vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat5vi = new THREE.Mesh( geometry, material );
            sat5vi.name = 'SAT-5vi';
            scene2.add( sat5vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat5vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat5vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat5vi.position.x = (sat5v.position.x) + (pos5x * 9600);
            sat5vi.position.z = altitude;
            console.log(sat5vix);
            //end
            var sat5viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat5viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat5vi.position.y = (sat5v.position.y) - (pos5y * 9600); 
            console.log(sat5viy);
            //end


            //-satellite---Pseudo Sat 6vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat6vi = new THREE.Mesh( geometry, material );
            sat6vi.name = 'SAT-6vi';
            scene2.add( sat6vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat6vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat6vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat6vi.position.x = (sat6v.position.x) - (pos6x * 9600);
            sat6vi.position.z = altitude;
            console.log(sat6vix);
            //end
            var sat6viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat6viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat6vi.position.y = (sat6v.position.y) + (pos6y * 9600); 
            console.log(sat6viy);
            //end


            //-satellite---Pseudo Sat 7vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat7vi = new THREE.Mesh( geometry, material );
            sat7vi.name = 'SAT-7vi';
            scene2.add( sat7vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat7vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat7vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat7vi.position.x = (sat7v.position.x) - (pos7x * 9600);
            sat7vi.position.z = altitude;
            console.log(sat7vix);
            //end
            var sat7viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat7viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat7vi.position.y = (sat7v.position.y) + (pos7y * 9600); 
            console.log(sat7viy);
            //end


            //-satellite---Pseudo Sat 8vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat8vi = new THREE.Mesh( geometry, material );
            sat8vi.name = 'SAT-8vi';
            scene2.add( sat8vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat8vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat8vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat8vi.position.x = (sat8v.position.x) - (pos8x * 9600);
            sat8vi.position.z = altitude;
            console.log(sat8vix);
            //end
            var sat8viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat8viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat8vi.position.y = (sat8v.position.y) + (pos8y * 9600); 
            console.log(sat8viy);
            //end


            //-satellite---Pseudo Sat 9vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat9vi = new THREE.Mesh( geometry, material );
            sat9vi.name = 'SAT-9vi';
            scene2.add( sat9vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat9vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat9vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat9vi.position.x = (sat9v.position.x) - (pos9x * 9600);
            sat9vi.position.z = altitude;
            console.log(sat9vix);
            //end
            var sat9viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat9viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat9vi.position.y = (sat9v.position.y) - (pos9y * 9600); 
            console.log(sat9viy);
            //end


            //-satellite---Pseudo Sat 10vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat10vi = new THREE.Mesh( geometry, material );
            sat10vi.name = 'SAT-10vi';
            scene2.add( sat10vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat10vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat10vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat10vi.position.x = (sat10v.position.x) + (pos10x * 9600);
            sat10vi.position.z = altitude;
            console.log(sat10vix);
            //end
            var sat10viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat10viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat10vi.position.y = (sat10v.position.y) - (pos10y * 9600); 
            console.log(sat10viy);
            //end


            //-satellite---Pseudo Sat 11vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat11vi = new THREE.Mesh( geometry, material );
            sat11vi.name = 'SAT-11vi';
            scene2.add( sat11vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat11vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat11vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat11vi.position.x = (sat11v.position.x) - (pos11x * 9600);
            sat11vi.position.z = altitude;
            console.log(sat11vix);
            //end
            var sat11viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat11viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat11vi.position.y = (sat11v.position.y) + (pos11y * 9600); 
            console.log(sat11viy);
            //end


            //-satellite---Pseudo Sat 12vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat12vi = new THREE.Mesh( geometry, material );
            sat12vi.name = 'SAT-12vi';
            scene2.add( sat12vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat12vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat12vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat12vi.position.x = (sat12v.position.x) - (pos12x * 9600);
            sat12vi.position.z = altitude;
            console.log(sat12vix);
            //end
            var sat12viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat12viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat12vi.position.y = (sat12v.position.y) + (pos12y * 9600); 
            console.log(sat12viy);
            //end


            //-satellite---Pseudo Sat 13vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat13vi = new THREE.Mesh( geometry, material );
            sat13vi.name = 'SAT-13vi';
            scene2.add( sat13vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat13vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat13vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat13vi.position.x = (sat13v.position.x) - (pos13x * 9600);
            sat13vi.position.z = altitude;
            console.log(sat13vix);
            //end
            var sat13viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat13viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat13vi.position.y = (sat13v.position.y) - (pos13y * 9600); 
            console.log(sat13viy);
            //end


            //-satellite---Pseudo Sat 14vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat14vi = new THREE.Mesh( geometry, material );
            sat14vi.name = 'SAT-14vi';
            scene2.add( sat14vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat14vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat14vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat14vi.position.x = (sat14v.position.x) + (pos14x * 9600);
            sat14vi.position.z = altitude;
            console.log(sat14vix);
            //end
            var sat14viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat14viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat14vi.position.y = (sat14v.position.y) - (pos14y * 9600); 
            console.log(sat14viy);
            //end


            //-satellite---Pseudo Sat 15vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat15vi = new THREE.Mesh( geometry, material );
            sat15vi.name = 'SAT-15vi';
            scene2.add( sat15vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat15vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat15vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat15vi.position.x = (sat15v.position.x) - (pos15x * 9600);
            sat15vi.position.z = altitude;
            console.log(sat15vix);
            //end
            var sat15viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat15viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat15vi.position.y = (sat15v.position.y) + (pos15y * 9600); 
            console.log(sat15viy);
            //end


            //-satellite---Pseudo Sat 16vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat16vi = new THREE.Mesh( geometry, material );
            sat16vi.name = 'SAT-16vi';
            scene2.add( sat16vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat16vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat16vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat16vi.position.x = (sat16v.position.x) - (pos16x * 9600);
            sat16vi.position.z = altitude;
            console.log(sat16vix);
            //end
            var sat16viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat16viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat16vi.position.y = (sat16v.position.y) - (pos16y * 9600); 
            console.log(sat16viy);
            //end


            //-satellite---Pseudo Sat 17vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat17vi = new THREE.Mesh( geometry, material );
            sat17vi.name = 'SAT-17vi';
            scene2.add( sat17vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat17vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat17vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat17vi.position.x = (sat17v.position.x) + (pos17x * 9600);
            sat17vi.position.z = altitude;
            console.log(sat17vix);
            //end
            var sat17viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat17viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat17vi.position.y = (sat17v.position.y) + (pos17y * 9600); 
            console.log(sat17viy);
            //end


            //-satellite---Pseudo Sat 18vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat18vi = new THREE.Mesh( geometry, material );
            sat18vi.name = 'SAT-18vi';
            scene2.add( sat18vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat18vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat18vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat18vi.position.x = (sat18v.position.x) + (pos18x * 9600);
            sat18vi.position.z = altitude;
            console.log(sat18vix);
            //end
            var sat18viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat18viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat18vi.position.y = (sat18v.position.y) + (pos18y * 9600); 
            console.log(sat18viy);
            //end


            //-satellite---Pseudo Sat 19vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat19vi = new THREE.Mesh( geometry, material );
            sat19vi.name = 'SAT-19vi';
            scene2.add( sat19vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat19vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat19vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat19vi.position.x = (sat19v.position.x) + (pos19x * 9600);
            sat19vi.position.z = altitude;
            console.log(sat19vix);
            //end
            var sat19viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat19viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat19vi.position.y = (sat19v.position.y) + (pos19y * 9600); 
            console.log(sat19viy);
            //end


            //-satellite---Pseudo Sat 20vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat20vi = new THREE.Mesh( geometry, material );
            sat20vi.name = 'SAT-20vi';
            scene2.add( sat20vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat20vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat20vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat20vi.position.x = (sat20v.position.x) - (pos20x * 9600);
            sat20vi.position.z = altitude;
            console.log(sat20vix);
            //end
            var sat20viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat20viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat20vi.position.y = (sat20v.position.y) - (pos20y * 9600); 
            console.log(sat20viy);
            //end

            //-satellite---Pseudo Sat 21vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat21vi = new THREE.Mesh( geometry, material );
            sat21vi.name = 'SAT-21vi';
            scene2.add( sat21vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat21vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat21vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat21vi.position.x = (sat21v.position.x) + (pos21x * 9600);
            sat21vi.position.z = altitude;
            console.log(sat21vix);
            //end
            var sat21viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat21viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat21vi.position.y = (sat21v.position.y) + (pos21y * 9600); 
            console.log(sat21viy);
            //end

            //-satellite---Pseudo Sat 22vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat22vi = new THREE.Mesh( geometry, material );
            sat22vi.name = 'SAT-22vi';
            scene2.add( sat22vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat22vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat22vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat22vi.position.x = (sat22v.position.x) - (pos22x * 9600);
            sat22vi.position.z = altitude;
            console.log(sat22vix);
            //end
            var sat22viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat22viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat22vi.position.y = (sat22v.position.y) - (pos22y * 9600); 
            console.log(sat22viy);
            //end


            //-satellite---Pseudo Sat 23vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat23vi = new THREE.Mesh( geometry, material );
            sat23vi.name = 'SAT-23vi';
            scene2.add( sat23vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat23vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat23vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat23vi.position.x = (sat23v.position.x) + (pos23x * 9600);
            sat23vi.position.z = altitude;
            console.log(sat23vix);
            //end
            var sat23viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat23viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat23vi.position.y = (sat23v.position.y) + (pos23y * 9600); 
            console.log(sat23viy);
            //end


            //-satellite---Pseudo Sat 24vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat24vi = new THREE.Mesh( geometry, material );
            sat24vi.name = 'SAT-24vi';
            scene2.add( sat24vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat24vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat24vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat24vi.position.x = (sat24v.position.x) - (pos24x * 9600);
            sat24vi.position.z = altitude;
            console.log(sat24vix);
            //end
            var sat24viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat24viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat24vi.position.y = (sat24v.position.y) + (pos24y * 9600); 
            console.log(sat24viy);
            //end


            //-satellite---Pseudo Sat 25vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat25vi = new THREE.Mesh( geometry, material );
            sat25vi.name = 'SAT-25vi';
            scene2.add( sat25vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat25vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat25vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat25vi.position.x = (sat25v.position.x) - (pos25x * 9600);
            sat25vi.position.z = altitude;
            console.log(sat25vix);
            //end
            var sat25viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat25viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat25vi.position.y = (sat25v.position.y) + (pos25y * 9600); 
            console.log(sat25viy);
            //end


            //-satellite---Pseudo Sat 26vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat26vi = new THREE.Mesh( geometry, material );
            sat26vi.name = 'SAT-26vi';
            scene2.add( sat26vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat26vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat26vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat26vi.position.x = (sat26v.position.x) - (pos26x * 9600);
            sat26vi.position.z = altitude;
            console.log(sat26vix);
            //end
            var sat26viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat26viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat26vi.position.y = (sat26v.position.y) - (pos26y * 9600); 
            console.log(sat26viy);
            //end


            //-satellite---Pseudo Sat 27vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat27vi = new THREE.Mesh( geometry, material );
            sat27vi.name = 'SAT-27vi';
            scene2.add( sat27vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat27vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat27vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat27vi.position.x = (sat27v.position.x) - (pos27x * 9600);
            sat27vi.position.z = altitude;
            console.log(sat27vix);
            //end
            var sat27viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat27viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat27vi.position.y = (sat27v.position.y) - (pos27y * 9600); 
            console.log(sat27viy);
            //end


            //-satellite---Pseudo Sat 28vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat28vi = new THREE.Mesh( geometry, material );
            sat28vi.name = 'SAT-28vi';
            scene2.add( sat28vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat28vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat28vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat28vi.position.x = (sat28v.position.x) + (pos28x * 9600);
            sat28vi.position.z = altitude;
            console.log(sat28vix);
            //end
            var sat28viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat28viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat28vi.position.y = (sat28v.position.y) - (pos28y * 9600); 
            console.log(sat28viy);
            //end


            //-satellite---Pseudo Sat 29vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat29vi = new THREE.Mesh( geometry, material );
            sat29vi.name = 'SAT-29vi';
            scene2.add( sat29vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat29vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat29vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat29vi.position.x = (sat29v.position.x) - (pos29x * 9600);
            sat29vi.position.z = altitude;
            console.log(sat29vix);
            //end
            var sat29viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat29viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat29vi.position.y = (sat29v.position.y) + (pos29y * 9600); 
            console.log(sat29viy);
            //end


            //-satellite---Pseudo Sat 30vi/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat30vi = new THREE.Mesh( geometry, material );
            sat30vi.name = 'SAT-30vi';
            scene2.add( sat30vi );
            //-positions/
            /* Random coordinate for x axis */
            var sat30vix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat30vix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat30vi.position.x = (sat30v.position.x) - (pos30x * 9600);
            sat30vi.position.z = altitude;
            console.log(sat30vix);
            //end
            var sat30viy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat30viy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat30vi.position.y = (sat30v.position.y) - (pos30y * 9600); 
            console.log(sat30viy);
            //end


            //-satellite---Pseudo Sat 1vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat1vii = new THREE.Mesh( geometry, material );
            sat1vii.name = 'SAT-1vii';
            scene2.add( sat1vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat1viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat1viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat1vii.position.x = (sat1vi.position.x) - (pos1x * 9600);
            sat1vii.position.z = altitude;
            console.log(sat1viix);
            //end
            var sat1viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat1viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat1vii.position.y = (sat1vi.position.y) + (pos1y * 9600); 
            console.log(sat1viiy);
            //end


            //-satellite---Pseudo Sat 2vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat2vii = new THREE.Mesh( geometry, material );
            sat2vii.name = 'SAT-2vii';
            scene2.add( sat2vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat2viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat2viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat2vii.position.x = (sat2vi.position.x) + (pos2x * 9600);
            sat2vii.position.z = altitude;
            console.log(sat2viix);
            //end
            var sat2viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat2viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat2vii.position.y = (sat2vi.position.y) - (pos2y * 9600); 
            console.log(sat2viiy);
            //end


            //-satellite---Pseudo Sat 3vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat3vii = new THREE.Mesh( geometry, material );
            sat3vii.name = 'SAT-3vii';
            scene2.add( sat3vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat3viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat3viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat3vii.position.x = (sat3vi.position.x) + (pos3x * 9600);
            sat3vii.position.z = altitude;
            console.log(sat3viix);
            //end
            var sat3viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat3viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat3vii.position.y = (sat3vi.position.y) - (pos3y * 9600); 
            console.log(sat3viiy);
            //end


            //-satellite---Pseudo Sat 4vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat4vii = new THREE.Mesh( geometry, material );
            sat4vii.name = 'SAT-4vii';
            scene2.add( sat4vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat4viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat4viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat4vii.position.x = (sat4vi.position.x) + (pos4x * 9600);
            sat4vii.position.z = altitude;
            console.log(sat4viix);
            //end
            var sat4viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat4viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat4vii.position.y = (sat4vi.position.y) - (pos4y * 9600); 
            console.log(sat4viiy);
            //end


            //-satellite---Pseudo Sat 5vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat5vii = new THREE.Mesh( geometry, material );
            sat5vii.name = 'SAT-5vii';
            scene2.add( sat5vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat5viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat5viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat5vii.position.x = (sat5vi.position.x) + (pos5x * 9600);
            sat5vii.position.z = altitude;
            console.log(sat5viix);
            //end
            var sat5viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat5viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat5vii.position.y = (sat5vi.position.y) - (pos5y * 9600); 
            console.log(sat5viiy);
            //end


            //-satellite---Pseudo Sat 6vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat6vii = new THREE.Mesh( geometry, material );
            sat6vii.name = 'SAT-6vii';
            scene2.add( sat6vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat6viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat6viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat6vii.position.x = (sat6vi.position.x) + (pos6x * 9600);
            sat6vii.position.z = altitude;
            console.log(sat6viix);
            //end
            var sat6viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat6viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat6vii.position.y = (sat6vi.position.y) - (pos6y * 9600); 
            console.log(sat6viiy);
            //end


            //-satellite---Pseudo Sat 7vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat7vii = new THREE.Mesh( geometry, material );
            sat7vii.name = 'SAT-7vii';
            scene2.add( sat7vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat7viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat7viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat7vii.position.x = (sat7vi.position.x) - (pos7x * 9600);
            sat7vii.position.z = altitude;
            console.log(sat7viix);
            //end
            var sat7viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat7viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat7vii.position.y = (sat7vi.position.y) + (pos7y * 9600); 
            console.log(sat7viiy);
            //end

            //-satellite---Pseudo Sat 8vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat8vii = new THREE.Mesh( geometry, material );
            sat8vii.name = 'SAT-8vii';
            scene2.add( sat8vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat8viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat8viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat8vii.position.x = (sat8vi.position.x) - (pos8x * 9600);
            sat8vii.position.z = altitude;
            console.log(sat8viix);
            //end
            var sat8viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat8viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat8vii.position.y = (sat8vi.position.y) + (pos8y * 9600); 
            console.log(sat8viiy);
            //end


            //-satellite---Pseudo Sat 9vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat9vii = new THREE.Mesh( geometry, material );
            sat9vii.name = 'SAT-9vii';
            scene2.add( sat9vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat9viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat9viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat9vii.position.x = (sat9vi.position.x) - (pos9x * 9600);
            sat9vii.position.z = altitude;
            console.log(sat9viix);
            //end
            var sat9viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat9viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat9vii.position.y = (sat9vi.position.y) - (pos9y * 9600); 
            console.log(sat9viiy);
            //end


            //-satellite---Pseudo Sat 10vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat10vii = new THREE.Mesh( geometry, material );
            sat10vii.name = 'SAT-10vii';
            scene2.add( sat10vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat10viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat10viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat10vii.position.x = (sat10vi.position.x) + (pos10x * 9600);
            sat10vii.position.z = altitude;
            console.log(sat10viix);
            //end
            var sat10viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat10viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat10vii.position.y = (sat10vi.position.y) - (pos10y * 9600); 
            console.log(sat10viiy);
            //end

            //-satellite---Pseudo Sat 11vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat11vii = new THREE.Mesh( geometry, material );
            sat11vii.name = 'SAT-11vii';
            scene2.add( sat11vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat11viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat11viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat11vii.position.x = (sat11vi.position.x) - (pos11x * 9600);
            sat11vii.position.z = altitude;
            console.log(sat11viix);
            //end
            var sat11viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat11viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat11vii.position.y = (sat11vi.position.y) + (pos11y * 9600); 
            console.log(sat11viiy);
            //end


            //-satellite---Pseudo Sat 12vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat12vii = new THREE.Mesh( geometry, material );
            sat12vii.name = 'SAT-12vii';
            scene2.add( sat12vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat12viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat12viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat12vii.position.x = (sat12vi.position.x) - (pos12x * 9600);
            sat12vii.position.z = altitude;
            console.log(sat12viix);
            //end
            var sat12viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat12viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat12vii.position.y = (sat12vi.position.y) + (pos12y * 9600); 
            console.log(sat12viiy);
            //end


            //-satellite---Pseudo Sat 13vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat13vii = new THREE.Mesh( geometry, material );
            sat13vii.name = 'SAT-13vii';
            scene2.add( sat13vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat13viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat13viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat13vii.position.x = (sat13vi.position.x) - (pos13x * 9600);
            sat13vii.position.z = altitude;
            console.log(sat13viix);
            //end
            var sat13viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat13viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat13vii.position.y = (sat13vi.position.y) - (pos13y * 9600); 
            console.log(sat13viiy);
            //end


            //-satellite---Pseudo Sat 14vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat14vii = new THREE.Mesh( geometry, material );
            sat14vii.name = 'SAT-14vii';
            scene2.add( sat14vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat14viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat14viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat14vii.position.x = (sat14vi.position.x) + (pos14x * 9600);
            sat14vii.position.z = altitude;
            console.log(sat14viix);
            //end
            var sat14viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat14viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat14vii.position.y = (sat14vi.position.y) - (pos14y * 9600); 
            console.log(sat14viiy);
            //end


            //-satellite---Pseudo Sat 15vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat15vii = new THREE.Mesh( geometry, material );
            sat15vii.name = 'SAT-15vii';
            scene2.add( sat15vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat15viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat15viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat15vii.position.x = (sat15vi.position.x) - (pos15x * 9600);
            sat15vii.position.z = altitude;
            console.log(sat15viix);
            //end
            var sat15viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat15viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat15vii.position.y = (sat15vi.position.y) + (pos15y * 9600); 
            console.log(sat15viiy);
            //end

            //-satellite---Pseudo Sat 16vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat16vii = new THREE.Mesh( geometry, material );
            sat16vii.name = 'SAT-16vii';
            scene2.add( sat16vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat16viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat16viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat16vii.position.x = (sat16vi.position.x) - (pos16x * 9600);
            sat16vii.position.z = altitude;
            console.log(sat16viix);
            //end
            var sat16viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat16viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat16vii.position.y = (sat16vi.position.y) - (pos16y * 9600); 
            console.log(sat16viiy);
            //end


            //-satellite---Pseudo Sat 17vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat17vii = new THREE.Mesh( geometry, material );
            sat17vii.name = 'SAT-17vii';
            scene2.add( sat17vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat17viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat17viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat17vii.position.x = (sat17vi.position.x) + (pos17x * 9600);
            sat17vii.position.z = altitude;
            console.log(sat17viix);
            //end
            var sat17viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat17viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat17vii.position.y = (sat17vi.position.y) + (pos17y * 9600); 
            console.log(sat17viiy);
            //end

            //-satellite---Pseudo Sat 18vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat18vii = new THREE.Mesh( geometry, material );
            sat18vii.name = 'SAT-18vii';
            scene2.add( sat18vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat18viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat18viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat18vii.position.x = (sat18vi.position.x) + (pos18x * 9600);
            sat18vii.position.z = altitude;
            console.log(sat18viix);
            //end
            var sat18viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat18viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat18vii.position.y = (sat18vi.position.y) - (pos18y * 9600); 
            console.log(sat18viiy);
            //end

            //-satellite---Pseudo Sat 19vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat19vii = new THREE.Mesh( geometry, material );
            sat19vii.name = 'SAT-19vii';
            scene2.add( sat19vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat19viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat19viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat19vii.position.x = (sat19vi.position.x) + (pos19x * 9600);
            sat19vii.position.z = altitude;
            console.log(sat19viix);
            //end
            var sat19viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat19viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat19vii.position.y = (sat19vi.position.y) + (pos19y * 9600); 
            console.log(sat19viiy);
            //end


            //-satellite---Pseudo Sat 20vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat20vii = new THREE.Mesh( geometry, material );
            sat20vii.name = 'SAT-20vii';
            scene2.add( sat20vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat20viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat20viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat20vii.position.x = (sat20vi.position.x) - (pos20x * 9600);
            sat20vii.position.z = altitude;
            console.log(sat20viix);
            //end
            var sat20viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat20viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat20vii.position.y = (sat20vi.position.y) - (pos20y * 9600); 
            console.log(sat20viiy);
            //end


            //-satellite---Pseudo Sat 21vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat21vii = new THREE.Mesh( geometry, material );
            sat21vii.name = 'SAT-21vii';
            scene2.add( sat21vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat21viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat21viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat21vii.position.x = (sat21vi.position.x) + (pos21x * 9600);
            sat21vii.position.z = altitude;
            console.log(sat21viix);
            //end
            var sat21viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat21viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat21vii.position.y = (sat21vi.position.y) + (pos21y * 9600); 
            console.log(sat21viiy);
            //end


            //-satellite---Pseudo Sat 22vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat22vii = new THREE.Mesh( geometry, material );
            sat22vii.name = 'SAT-22vii';
            scene2.add( sat22vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat22viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat22viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat22vii.position.x = (sat22vi.position.x) - (pos22x * 9600);
            sat22vii.position.z = altitude;
            console.log(sat22viix);
            //end
            var sat22viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat22viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat22vii.position.y = (sat22vi.position.y) - (pos22y * 9600); 
            console.log(sat22viiy);
            //end


            //-satellite---Pseudo Sat 23vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat23vii = new THREE.Mesh( geometry, material );
            sat23vii.name = 'SAT-23vii';
            scene2.add( sat23vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat23viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat23viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat23vii.position.x = (sat23vi.position.x) + (pos23x * 9600);
            sat23vii.position.z = altitude;
            console.log(sat23viix);
            //end
            var sat23viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat23viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat23vii.position.y = (sat23vi.position.y) + (pos23y * 9600); 
            console.log(sat23viiy);
            //end

            //-satellite---Pseudo Sat 24vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat24vii = new THREE.Mesh( geometry, material );
            sat24vii.name = 'SAT-24vii';
            scene2.add( sat24vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat24viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat24viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat24vii.position.x = (sat24vi.position.x) - (pos24x * 9600);
            sat24vii.position.z = altitude;
            console.log(sat24viix);
            //end
            var sat24viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat24viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat24vii.position.y = (sat24vi.position.y) + (pos24y * 9600); 
            console.log(sat24viiy);
            //end


            //-satellite---Pseudo Sat 25vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat25vii = new THREE.Mesh( geometry, material );
            sat25vii.name = 'SAT-25vii';
            scene2.add( sat25vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat25viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat25viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat25vii.position.x = (sat25vi.position.x) - (pos25x * 9600);
            sat25vii.position.z = altitude;
            console.log(sat25viix);
            //end
            var sat25viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat25viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat25vii.position.y = (sat25vi.position.y) + (pos25y * 9600); 
            console.log(sat25viiy);
            //end

            //-satellite---Pseudo Sat 26vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat26vii = new THREE.Mesh( geometry, material );
            sat26vii.name = 'SAT-26vii';
            scene2.add( sat26vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat26viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat26viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat26vii.position.x = (sat26vi.position.x) - (pos26x * 9600);
            sat26vii.position.z = altitude;
            console.log(sat26viix);
            //end
            var sat26viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat26viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat26vii.position.y = (sat26vi.position.y) - (pos26y * 9600); 
            console.log(sat26viiy);
            //end


            //-satellite---Pseudo Sat 27vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat27vii = new THREE.Mesh( geometry, material );
            sat27vii.name = 'SAT-27vii';
            scene2.add( sat27vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat27viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat27viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat27vii.position.x = (sat27vi.position.x) - (pos27x * 9600);
            sat27vii.position.z = altitude;
            console.log(sat27viix);
            //end
            var sat27viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat27viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat27vii.position.y = (sat27vi.position.y) - (pos27y * 9600); 
            console.log(sat27viiy);
            //end


            //-satellite---Pseudo Sat 28vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat28vii = new THREE.Mesh( geometry, material );
            sat28vii.name = 'SAT-28vii';
            scene2.add( sat28vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat28viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat28viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat28vii.position.x = (sat28vi.position.x) + (pos28x * 9600);
            sat28vii.position.z = altitude;
            console.log(sat28viix);
            //end
            var sat28viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat28viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat28vii.position.y = (sat28vi.position.y) - (pos28y * 9600); 
            console.log(sat28viiy);
            //end

            //-satellite---Pseudo Sat 29vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat29vii = new THREE.Mesh( geometry, material );
            sat29vii.name = 'SAT-29vii';
            scene2.add( sat29vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat29viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat29viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat29vii.position.x = (sat29vi.position.x) - (pos29x * 9600);
            sat29vii.position.z = altitude;
            console.log(sat29viix);
            //end
            var sat29viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat29viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat29vii.position.y = (sat29vi.position.y) + (pos29y * 9600); 
            console.log(sat29viiy);
            //end


            //-satellite---Pseudo Sat 30vii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat30vii = new THREE.Mesh( geometry, material );
            sat30vii.name = 'SAT-30vii';
            scene2.add( sat30vii );
            //-positions/
            /* Random coordinate for x axis */
            var sat30viix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat30viix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat30vii.position.x = (sat30vi.position.x) - (pos30x * 9600);
            sat30vii.position.z = altitude;
            console.log(sat30viix);
            //end
            var sat30viiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat30viiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat30vii.position.y = (sat30vi.position.y) - (pos30y * 9600); 
            console.log(sat30viiy);
            //end


            //-satellite---Pseudo Sat 1viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat1viii = new THREE.Mesh( geometry, material );
            sat1viii.name = 'SAT-1viii';
            scene2.add( sat1viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat1viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat1viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat1viii.position.x = (sat1vii.position.x) - (pos1x * 9600);
            sat1viii.position.z = altitude;
            console.log(sat1viiix);
            //end
            var sat1viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat1viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat1viii.position.y = (sat1vii.position.y) + (pos1y * 9600); 
            console.log(sat1viiiy);
            //end


            //-satellite---Pseudo Sat 2viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat2viii = new THREE.Mesh( geometry, material );
            sat2viii.name = 'SAT-2viii';
            scene2.add( sat2viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat2viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat2viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat2viii.position.x = (sat2vii.position.x) + (pos2x * 9600);
            sat2viii.position.z = altitude;
            console.log(sat2viiix);
            //end
            var sat2viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat2viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat2viii.position.y = (sat2vii.position.y) - (pos2y * 9600); 
            console.log(sat2viiiy);
            //end

            //-satellite---Pseudo Sat 3viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat3viii = new THREE.Mesh( geometry, material );
            sat3viii.name = 'SAT-3viii';
            scene2.add( sat3viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat3viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat3viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat3viii.position.x = (sat3vii.position.x) - (pos3x * 9600);
            sat3viii.position.z = altitude;
            console.log(sat3viiix);
            //end
            var sat3viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat3viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat3viii.position.y = (sat3vii.position.y) + (pos3y * 9600); 
            console.log(sat3viiiy);
            //end


            //-satellite---Pseudo Sat 4viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat4viii = new THREE.Mesh( geometry, material );
            sat4viii.name = 'SAT-4viii';
            scene2.add( sat4viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat4viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat4viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat4viii.position.x = (sat4vii.position.x) + (pos4x * 9600);
            sat4viii.position.z = altitude;
            console.log(sat4viiix);
            //end
            var sat4viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat4viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat4viii.position.y = (sat4vii.position.y) - (pos4y * 9600); 
            console.log(sat4viiiy);
            //end

            //-satellite---Pseudo Sat 5viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat5viii = new THREE.Mesh( geometry, material );
            sat5viii.name = 'SAT-5viii';
            scene2.add( sat5viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat5viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat5viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat5viii.position.x = (sat5vii.position.x) + (pos5x * 9600);
            sat5viii.position.z = altitude;
            console.log(sat5viiix);
            //end
            var sat5viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat5viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat5viii.position.y = (sat5vii.position.y) - (pos5y * 9600); 
            console.log(sat5viiiy);
            //end


            //-satellite---Pseudo Sat 6viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat6viii = new THREE.Mesh( geometry, material );
            sat6viii.name = 'SAT-6viii';
            scene2.add( sat6viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat6viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat6viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat6viii.position.x = (sat6vii.position.x) - (pos6x * 9600);
            sat6viii.position.z = altitude;
            console.log(sat6viiix);
            //end
            var sat6viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat6viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat6viii.position.y = (sat6vii.position.y) + (pos6y * 9600); 
            console.log(sat6viiiy);
            //end

            //-satellite---Pseudo Sat 7viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat7viii = new THREE.Mesh( geometry, material );
            sat7viii.name = 'SAT-7viii';
            scene2.add( sat7viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat7viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat7viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat7viii.position.x = (sat7vii.position.x) - (pos7x * 9600);
            sat7viii.position.z = altitude;
            console.log(sat7viiix);
            //end
            var sat7viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat7viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat7viii.position.y = (sat7vii.position.y) + (pos7y * 9600); 
            console.log(sat7viiiy);
            //end

            //-satellite---Pseudo Sat 8viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat8viii = new THREE.Mesh( geometry, material );
            sat8viii.name = 'SAT-8viii';
            scene2.add( sat8viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat8viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat8viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat8viii.position.x = (sat8vii.position.x) - (pos8x * 9600);
            sat8viii.position.z = altitude;
            console.log(sat8viiix);
            //end
            var sat8viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat8viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat8viii.position.y = (sat8vii.position.y) + (pos8y * 9600); 
            console.log(sat8viiiy);
            //end


            //-satellite---Pseudo Sat 9viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat9viii = new THREE.Mesh( geometry, material );
            sat9viii.name = 'SAT-9viii';
            scene2.add( sat9viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat9viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat9viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat9viii.position.x = (sat9vii.position.x) - (pos9x * 9600);
            sat9viii.position.z = altitude;
            console.log(sat9viiix);
            //end
            var sat9viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat9viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat9viii.position.y = (sat9vii.position.y) - (pos9y * 9600); 
            console.log(sat9viiiy);
            //end


            //-satellite---Pseudo Sat 10viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat10viii = new THREE.Mesh( geometry, material );
            sat10viii.name = 'SAT-10viii';
            scene2.add( sat10viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat10viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat10viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat10viii.position.x = (sat10vii.position.x) + (pos10x * 9600);
            sat10viii.position.z = altitude;
            console.log(sat10viiix);
            //end
            var sat10viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat10viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat10viii.position.y = (sat10vii.position.y) - (pos10y * 9600); 
            console.log(sat10viiiy);
            //end


            //-satellite---Pseudo Sat 11viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat11viii = new THREE.Mesh( geometry, material );
            sat11viii.name = 'SAT-11viii';
            scene2.add( sat11viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat11viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat11viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat11viii.position.x = (sat11vii.position.x) - (pos11x * 9600);
            sat11viii.position.z = altitude;
            console.log(sat11viiix);
            //end
            var sat11viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat11viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat11viii.position.y = (sat11vii.position.y) + (pos11y * 9600); 
            console.log(sat11viiiy);
            //end


            //-satellite---Pseudo Sat 12viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat12viii = new THREE.Mesh( geometry, material );
            sat12viii.name = 'SAT-12viii';
            scene2.add( sat12viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat12viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat12viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat12viii.position.x = (sat12vii.position.x) - (pos12x * 9600);
            sat12viii.position.z = altitude;
            console.log(sat12viiix);
            //end
            var sat12viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat12viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat12viii.position.y = (sat12vii.position.y) + (pos12y * 9600); 
            console.log(sat12viiiy);
            //end

            //-satellite---Pseudo Sat 13viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat13viii = new THREE.Mesh( geometry, material );
            sat13viii.name = 'SAT-13viii';
            scene2.add( sat13viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat13viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat13viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat13viii.position.x = (sat13vii.position.x) - (pos13x * 9600);
            sat13viii.position.z = altitude;
            console.log(sat13viiix);
            //end
            var sat13viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat13viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat13viii.position.y = (sat13vii.position.y) - (pos13y * 9600); 
            console.log(sat13viiiy);
            //end

            //-satellite---Pseudo Sat 14viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat14viii = new THREE.Mesh( geometry, material );
            sat14viii.name = 'SAT-14viii';
            scene2.add( sat14viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat14viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat14viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat14viii.position.x = (sat14vii.position.x) + (pos14x * 9600);
            sat14viii.position.z = altitude;
            console.log(sat14viiix);
            //end
            var sat14viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat14viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat14viii.position.y = (sat14vii.position.y) - (pos14y * 9600); 
            console.log(sat14viiiy);
            //end


            //-satellite---Pseudo Sat 15viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat15viii = new THREE.Mesh( geometry, material );
            sat15viii.name = 'SAT-15viii';
            scene2.add( sat15viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat15viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat15viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat15viii.position.x = (sat15vii.position.x) - (pos15x * 9600);
            sat15viii.position.z = altitude;
            console.log(sat15viiix);
            //end
            var sat15viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat15viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat15viii.position.y = (sat15vii.position.y) + (pos15y * 9600); 
            console.log(sat15viiiy);
            //end


            //-satellite---Pseudo Sat 16viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat16viii = new THREE.Mesh( geometry, material );
            sat16viii.name = 'SAT-16viii';
            scene2.add( sat16viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat16viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat16viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat16viii.position.x = (sat16vii.position.x) - (pos16x * 9600);
            sat16viii.position.z = altitude;
            console.log(sat16viiix);
            //end
            var sat16viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat16viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat16viii.position.y = (sat16vii.position.y) - (pos16y * 9600); 
            console.log(sat16viiiy);
            //end


            //-satellite---Pseudo Sat 17viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat17viii = new THREE.Mesh( geometry, material );
            sat17viii.name = 'SAT-17viii';
            scene2.add( sat17viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat17viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat17viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat17viii.position.x = (sat17vii.position.x) + (pos17x * 9600);
            sat17viii.position.z = altitude;
            console.log(sat17viiix);
            //end
            var sat17viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat17viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat17viii.position.y = (sat17vii.position.y) + (pos17y * 9600); 
            console.log(sat17viiiy);
            //end


            //-satellite---Pseudo Sat 18viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat18viii = new THREE.Mesh( geometry, material );
            sat18viii.name = 'SAT-18viii';
            scene2.add( sat18viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat18viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat18viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat18viii.position.x = (sat18vii.position.x) + (pos18x * 9600);
            sat18viii.position.z = altitude;
            console.log(sat18viiix);
            //end
            var sat18viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat18viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat18viii.position.y = (sat18vii.position.y) - (pos18y * 9600); 
            console.log(sat18viiiy);
            //end


            //-satellite---Pseudo Sat 19viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat19viii = new THREE.Mesh( geometry, material );
            sat19viii.name = 'SAT-19viii';
            scene2.add( sat19viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat19viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat19viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat19viii.position.x = (sat19vii.position.x) + (pos19x * 9600);
            sat19viii.position.z = altitude;
            console.log(sat19viiix);
            //end
            var sat19viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat19viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat19viii.position.y = (sat19vii.position.y) + (pos19y * 9600); 
            console.log(sat19viiiy);
            //end

            //-satellite---Pseudo Sat 20viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat20viii = new THREE.Mesh( geometry, material );
            sat20viii.name = 'SAT-20viii';
            scene2.add( sat20viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat20viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat20viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat20viii.position.x = (sat20vii.position.x) - (pos20x * 9600);
            sat20viii.position.z = altitude;
            console.log(sat20viiix);
            //end
            var sat20viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat20viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat20viii.position.y = (sat20vii.position.y) - (pos20y * 9600); 
            console.log(sat20viiiy);
            //end

            //-satellite---Pseudo Sat 21viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat21viii = new THREE.Mesh( geometry, material );
            sat21viii.name = 'SAT-21viii';
            scene2.add( sat21viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat21viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat21viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat21viii.position.x = (sat21vii.position.x) + (pos21x * 9600);
            sat21viii.position.z = altitude;
            console.log(sat21viiix);
            //end
            var sat21viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat21viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat21viii.position.y = (sat21vii.position.y) + (pos21y * 9600); 
            console.log(sat21viiiy);
            //end

            //-satellite---Pseudo Sat 22viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat22viii = new THREE.Mesh( geometry, material );
            sat22viii.name = 'SAT-22viii';
            scene2.add( sat22viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat22viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat22viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat22viii.position.x = (sat22vii.position.x) - (pos22x * 9600);
            sat22viii.position.z = altitude;
            console.log(sat22viiix);
            //end
            var sat22viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat22viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat22viii.position.y = (sat22vii.position.y) - (pos22y * 9600); 
            console.log(sat21viiiy);
            //end

            //-satellite---Pseudo Sat 23viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat23viii = new THREE.Mesh( geometry, material );
            sat23viii.name = 'SAT-23viii';
            scene2.add( sat23viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat23viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat23viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat23viii.position.x = (sat23vii.position.x) + (pos23x * 9600);
            sat23viii.position.z = altitude;
            console.log(sat23viiix);
            //end
            var sat23viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat23viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat23viii.position.y = (sat23vii.position.y) + (pos23y * 9600); 
            console.log(sat23viiiy);
            //end

            //-satellite---Pseudo Sat 24viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat24viii = new THREE.Mesh( geometry, material );
            sat24viii.name = 'SAT-24viii';
            scene2.add( sat24viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat24viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat24viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat24viii.position.x = (sat24vii.position.x) - (pos24x * 9600);
            sat24viii.position.z = altitude;
            console.log(sat24viiix);
            //end
            var sat24viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat24viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat24viii.position.y = (sat24vii.position.y) + (pos24y * 9600); 
            console.log(sat24viiiy);
            //end


            //-satellite---Pseudo Sat 25viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat25viii = new THREE.Mesh( geometry, material );
            sat25viii.name = 'SAT-25viii';
            scene2.add( sat25viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat25viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat25viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat25viii.position.x = (sat25vii.position.x) - (pos25x * 9600);
            sat25viii.position.z = altitude;
            console.log(sat25viiix);
            //end
            var sat25viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat25viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat25viii.position.y = (sat25vii.position.y) + (pos25y * 9600); 
            console.log(sat25viiiy);
            //end


            //-satellite---Pseudo Sat 26viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat26viii = new THREE.Mesh( geometry, material );
            sat26viii.name = 'SAT-26viii';
            scene2.add( sat26viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat26viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat26viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat26viii.position.x = (sat26vii.position.x) - (pos26x * 9600);
            sat26viii.position.z = altitude;
            console.log(sat26viiix);
            //end
            var sat26viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat26viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat26viii.position.y = (sat26vii.position.y) - (pos26y * 9600); 
            console.log(sat26viiiy);
            //end


            //-satellite---Pseudo Sat 27viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat27viii = new THREE.Mesh( geometry, material );
            sat27viii.name = 'SAT-27viii';
            scene2.add( sat27viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat27viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat27viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat27viii.position.x = (sat27vii.position.x) - (pos27x * 9600);
            sat27viii.position.z = altitude;
            console.log(sat27viiix);
            //end
            var sat27viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat27viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat27viii.position.y = (sat27vii.position.y) - (pos27y * 9600); 
            console.log(sat27viiiy);
            //end


            //-satellite---Pseudo Sat 28viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat28viii = new THREE.Mesh( geometry, material );
            sat28viii.name = 'SAT-28viii';
            scene2.add( sat28viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat28viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat28viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat28viii.position.x = (sat28vii.position.x) + (pos28x * 9600);
            sat28viii.position.z = altitude;
            console.log(sat28viiix);
            //end
            var sat28viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat28viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat28viii.position.y = (sat28vii.position.y) - (pos28y * 9600); 
            console.log(sat28viiiy);
            //end


            //-satellite---Pseudo Sat 29viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat29viii = new THREE.Mesh( geometry, material );
            sat29viii.name = 'SAT-29viii';
            scene2.add( sat29viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat29viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat29viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat29viii.position.x = (sat29vii.position.x) - (pos29x * 9600);
            sat29viii.position.z = altitude;
            console.log(sat29viiix);
            //end
            var sat29viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat29viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat29viii.position.y = (sat29vii.position.y) + (pos29y * 9600); 
            console.log(sat29viiiy);
            //end


            //-satellite---Pseudo Sat 30viii/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat30viii = new THREE.Mesh( geometry, material );
            sat30viii.name = 'SAT-30viii';
            scene2.add( sat30viii );
            //-positions/
            /* Random coordinate for x axis */
            var sat30viiix = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat30viiix *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat30viii.position.x = (sat30vii.position.x) - (pos30x * 9600);
            sat30viii.position.z = altitude;
            console.log(sat30viiix);
            //end
            var sat30viiiy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat30viiiy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat30viii.position.y = (sat30vii.position.y) - (pos30y * 9600); 
            console.log(sat30viiiy);
            //end


            //-satellite---Pseudo Sat 1ix/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat1ix = new THREE.Mesh( geometry, material );
            sat1ix.name = 'SAT-1ix';
            scene2.add( sat1ix );
            //-positions/
            /* Random coordinate for x axis */
            var sat1ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat1ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat1ix.position.x = (sat1viii.position.x) - (pos1x * 9600);
            sat1ix.position.z = altitude;
            console.log(sat1ix);
            //end
            var sat1ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat1ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat1ix.position.y = (sat1viii.position.y) + (pos1y * 9600); 
            console.log(sat1ixy);
            //end


            //-satellite---Pseudo Sat 2ix/
            var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
            var sat2ix = new THREE.Mesh( geometry, material );
            sat2ix.name = 'SAT-2ix';
            scene2.add( sat2ix );
            //-positions/
            /* Random coordinate for x axis */
            var sat2ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
            sat2ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
            sat2ix.position.x = (sat2viii.position.x) + (pos2x * 9600);
            sat2ix.position.z = altitude;
            console.log(sat2ix);
            //end
            var sat2ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
            sat2ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            sat2ix.position.y = (sat2viii.position.y) - (pos2y * 9600); 
            console.log(sat2ixy);
            //end


             //-satellite---Pseudo Sat 3ix/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat3ix = new THREE.Mesh( geometry, material );
             sat3ix.name = 'SAT-3ix';
             scene2.add( sat3ix );
             //-positions/
             /* Random coordinate for x axis */
             var sat3ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat3ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat3ix.position.x = (sat3viii.position.x) - (pos3x * 9600);
             sat3ix.position.z = altitude;
             console.log(sat3ix);
             //end
             var sat3ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat3ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat3ix.position.y = (sat3viii.position.y) + (pos3y * 9600); 
             console.log(sat3ixy);
             //end


             //-satellite---Pseudo Sat 4ix/
             var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
             var sat4ix = new THREE.Mesh( geometry, material );
             sat4ix.name = 'SAT-4ix';
             scene2.add( sat4ix );
             //-positions/
             /* Random coordinate for x axis */
             var sat4ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
             sat4ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
             sat4ix.position.x = (sat4viii.position.x) + (pos4x * 9600);
             sat4ix.position.z = altitude;
             console.log(sat4ix);
             //end
             var sat4ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
             sat4ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
             sat4ix.position.y = (sat4viii.position.y) - (pos4y * 9600); 
             console.log(sat4ixy);
             //end


              //-satellite---Pseudo Sat 5ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat5ix = new THREE.Mesh( geometry, material );
              sat5ix.name = 'SAT-5ix';
              scene2.add( sat5ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat5ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat5ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat5ix.position.x = (sat5viii.position.x) + (pos5x * 9600);
              sat5ix.position.z = altitude;
              console.log(sat5ix);
              //end
              var sat5ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat5ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat5ix.position.y = (sat5viii.position.y) - (pos5y * 9600); 
              console.log(sat5ixy);
              //end


              //-satellite---Pseudo Sat 6ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat6ix = new THREE.Mesh( geometry, material );
              sat6ix.name = 'SAT-6ix';
              scene2.add( sat6ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat6ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat6ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat6ix.position.x = (sat6viii.position.x) - (pos6x * 9600);
              sat6ix.position.z = altitude;
              console.log(sat6ix);
              //end
              var sat6ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat6ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat6ix.position.y = (sat6viii.position.y) + (pos6y * 9600); 
              console.log(sat6ixy);
              //end



              //-satellite---Pseudo Sat 7ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat7ix = new THREE.Mesh( geometry, material );
              sat7ix.name = 'SAT-7ix';
              scene2.add( sat7ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat7ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat7ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat7ix.position.x = (sat7viii.position.x) - (pos7x * 9600);
              sat7ix.position.z = altitude;
              console.log(sat7ix);
              //end
              var sat7ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat7ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat7ix.position.y = (sat7viii.position.y) + (pos7y * 9600); 
              console.log(sat7ixy);
              //end


              //-satellite---Pseudo Sat 8ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat8ix = new THREE.Mesh( geometry, material );
              sat8ix.name = 'SAT-8ix';
              scene2.add( sat8ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat8ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat8ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat8ix.position.x = (sat8viii.position.x) - (pos8x * 9600);
              sat8ix.position.z = altitude;
              console.log(sat8ix);
              //end
              var sat8ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat8ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat8ix.position.y = (sat8viii.position.y) + (pos8y * 9600); 
              console.log(sat8ixy);
              //end


              //-satellite---Pseudo Sat 9ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat9ix = new THREE.Mesh( geometry, material );
              sat9ix.name = 'SAT-9ix';
              scene2.add( sat9ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat9ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat9ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat9ix.position.x = (sat9viii.position.x) - (pos9x * 9600);
              sat9ix.position.z = altitude;
              console.log(sat9ix);
              //end
              var sat9ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat9ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat9ix.position.y = (sat9viii.position.y) - (pos9y * 9600); 
              console.log(sat9ixy);
              //end


              //-satellite---Pseudo Sat 10ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat10ix = new THREE.Mesh( geometry, material );
              sat10ix.name = 'SAT-10ix';
              scene2.add( sat10ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat10ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat10ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat10ix.position.x = (sat10viii.position.x) + (pos10x * 9600);
              sat10ix.position.z = altitude;
              console.log(sat10ix);
              //end
              var sat10ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat10ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat10ix.position.y = (sat10viii.position.y) - (pos10y * 9600); 
              console.log(sat10ixy);
              //end



              //-satellite---Pseudo Sat 11ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat11ix = new THREE.Mesh( geometry, material );
              sat11ix.name = 'SAT-11ix';
              scene2.add( sat11ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat11ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat11ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat11ix.position.x = (sat11viii.position.x) - (pos11x * 9600);
              sat11ix.position.z = altitude;
              console.log(sat11ix);
              //end
              var sat11ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat11ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat11ix.position.y = (sat11viii.position.y) + (pos11y * 9600); 
              console.log(sat11ixy);
              //end



              //-satellite---Pseudo Sat 11ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat11ix = new THREE.Mesh( geometry, material );
              sat11ix.name = 'SAT-11ix';
              scene2.add( sat11ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat11ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat11ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat11ix.position.x = (sat11viii.position.x) - (pos11x * 9600);
              sat11ix.position.z = altitude;
              console.log(sat11ix);
              //end
              var sat11ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat11ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat11ix.position.y = (sat11viii.position.y) + (pos11y * 9600); 
              console.log(sat11ixy);
              //end


              //-satellite---Pseudo Sat 12ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat12ix = new THREE.Mesh( geometry, material );
              sat12ix.name = 'SAT-12ix';
              scene2.add( sat12ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat12ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat12ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat12ix.position.x = (sat12viii.position.x) - (pos12x * 9600);
              sat12ix.position.z = altitude;
              console.log(sat12ix);
              //end
              var sat12ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat12ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat12ix.position.y = (sat12viii.position.y) + (pos12y * 9600); 
              console.log(sat12ixy);
              //end


              //-satellite---Pseudo Sat 13ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat13ix = new THREE.Mesh( geometry, material );
              sat13ix.name = 'SAT-13ix';
              scene2.add( sat13ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat13ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat13ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat13ix.position.x = (sat13viii.position.x) - (pos13x * 9600);
              sat13ix.position.z = altitude;
              console.log(sat13ix);
              //end
              var sat13ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat13ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat13ix.position.y = (sat13viii.position.y) - (pos13y * 9600); 
              console.log(sat13ixy);
              //end


              //-satellite---Pseudo Sat 14ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat14ix = new THREE.Mesh( geometry, material );
              sat14ix.name = 'SAT-14ix';
              scene2.add( sat14ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat14ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat14ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat14ix.position.x = (sat14viii.position.x) + (pos14x * 9600);
              sat14ix.position.z = altitude;
              console.log(sat14ix);
              //end
              var sat14ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat14ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat14ix.position.y = (sat14viii.position.y) - (pos14y * 9600); 
              console.log(sat14ixy);
              //end


              //-satellite---Pseudo Sat 15ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat15ix = new THREE.Mesh( geometry, material );
              sat15ix.name = 'SAT-15ix';
              scene2.add( sat15ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat15ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat15ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat15ix.position.x = (sat15viii.position.x) - (pos15x * 9600);
              sat15ix.position.z = altitude;
              console.log(sat15ix);
              //end
              var sat15ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat15ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat15ix.position.y = (sat15viii.position.y) + (pos15y * 9600); 
              console.log(sat15ixy);
              //end


              //-satellite---Pseudo Sat 16ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat16ix = new THREE.Mesh( geometry, material );
              sat16ix.name = 'SAT-16ix';
              scene2.add( sat16ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat16ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat16ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat16ix.position.x = (sat16viii.position.x) - (pos16x * 9600);
              sat16ix.position.z = altitude;
              console.log(sat16ix);
              //end
              var sat16ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat16ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat16ix.position.y = (sat16viii.position.y) - (pos16y * 9600); 
              console.log(sat16ixy);
              //end


              //-satellite---Pseudo Sat 17ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat17ix = new THREE.Mesh( geometry, material );
              sat17ix.name = 'SAT-17ix';
              scene2.add( sat17ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat17ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat17ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat17ix.position.x = (sat17viii.position.x) + (pos17x * 9600);
              sat17ix.position.z = altitude;
              console.log(sat17ix);
              //end
              var sat17ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat17ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat17ix.position.y = (sat17viii.position.y) + (pos17y * 9600); 
              console.log(sat17ixy);
              //end



              //-satellite---Pseudo Sat 18ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat18ix = new THREE.Mesh( geometry, material );
              sat18ix.name = 'SAT-18ix';
              scene2.add( sat18ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat18ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat18ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat18ix.position.x = (sat18viii.position.x) + (pos18x * 9600);
              sat18ix.position.z = altitude;
              console.log(sat18ix);
              //end
              var sat18ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat18ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat18ix.position.y = (sat18viii.position.y) - (pos18y * 9600); 
              console.log(sat18ixy);
              //end


              //-satellite---Pseudo Sat 19ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat19ix = new THREE.Mesh( geometry, material );
              sat19ix.name = 'SAT-19ix';
              scene2.add( sat19ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat19ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat19ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat19ix.position.x = (sat19viii.position.x) + (pos19x * 9600);
              sat19ix.position.z = altitude;
              console.log(sat19ix);
              //end
              var sat19ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat19ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat19ix.position.y = (sat19viii.position.y) + (pos19y * 9600); 
              console.log(sat19ixy);
              //end


              //-satellite---Pseudo Sat 20ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat20ix = new THREE.Mesh( geometry, material );
              sat20ix.name = 'SAT-20ix';
              scene2.add( sat20ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat20ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat20ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat20ix.position.x = (sat20viii.position.x) - (pos20x * 9600);
              sat20ix.position.z = altitude;
              console.log(sat20ix);
              //end
              var sat20ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat20ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat20ix.position.y = (sat20viii.position.y) - (pos20y * 9600); 
              console.log(sat20ixy);
              //end


              //-satellite---Pseudo Sat 21ix/
              var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
              var sat21ix = new THREE.Mesh( geometry, material );
              sat21ix.name = 'SAT-21ix';
              scene2.add( sat21ix );
              //-positions/
              /* Random coordinate for x axis */
              var sat21ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
              sat21ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
              sat21ix.position.x = (sat21viii.position.x) + (pos21x * 9600);
              sat21ix.position.z = altitude;
              console.log(sat21ix);
              //end
              var sat21ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
              sat21ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
              sat21ix.position.y = (sat21viii.position.y) + (pos21y * 9600); 
              console.log(sat21ixy);
              //end



               //-satellite---Pseudo Sat 21ix/
               var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
               var sat21ix = new THREE.Mesh( geometry, material );
               sat21ix.name = 'SAT-21ix';
               scene2.add( sat21ix );
               //-positions/
               /* Random coordinate for x axis */
               var sat21ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
               sat21ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
               sat21ix.position.x = (sat21viii.position.x) + (pos21x * 9600);
               sat21ix.position.z = altitude;
               console.log(sat21ix);
               //end
               var sat21ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
               sat21ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
               sat21ix.position.y = (sat21viii.position.y) + (pos21y * 9600); 
               console.log(sat21ixy);
               //end


               //-satellite---Pseudo Sat 22ix/
               var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
               var sat22ix = new THREE.Mesh( geometry, material );
               sat22ix.name = 'SAT-22ix';
               scene2.add( sat22ix );
               //-positions/
               /* Random coordinate for x axis */
               var sat22ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
               sat22ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
               sat22ix.position.x = (sat22viii.position.x) - (pos22x * 9600);
               sat22ix.position.z = altitude;
               console.log(sat22ix);
               //end
               var sat22ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
               sat22ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
               sat22ix.position.y = (sat22viii.position.y) - (pos22y * 9600); 
               console.log(sat22ixy);
               //end


               //-satellite---Pseudo Sat 23ix/
               var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
               var sat23ix = new THREE.Mesh( geometry, material );
               sat23ix.name = 'SAT-23ix';
               scene2.add( sat23ix );
               //-positions/
               /* Random coordinate for x axis */
               var sat23ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
               sat23ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
               sat23ix.position.x = (sat23viii.position.x) + (pos23x * 9600);
               sat23ix.position.z = altitude;
               console.log(sat23ix);
               //end
               var sat23ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
               sat23ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
               sat23ix.position.y = (sat23viii.position.y) + (pos23y * 9600); 
               console.log(sat23ixy);
               //end



               //-satellite---Pseudo Sat 24ix/
               var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
               var sat24ix = new THREE.Mesh( geometry, material );
               sat24ix.name = 'SAT-24ix';
               scene2.add( sat24ix );
               //-positions/
               /* Random coordinate for x axis */
               var sat24ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
               sat24ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
               sat24ix.position.x = (sat24viii.position.x) - (pos24x * 9600);
               sat24ix.position.z = altitude;
               console.log(sat24ix);
               //end
               var sat24ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
               sat24ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
               sat24ix.position.y = (sat24viii.position.y) + (pos24y * 9600); 
               console.log(sat24ixy);
               //end



               //-satellite---Pseudo Sat 25ix/
               var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
               var sat25ix = new THREE.Mesh( geometry, material );
               sat25ix.name = 'SAT-25ix';
               scene2.add( sat25ix );
               //-positions/
               /* Random coordinate for x axis */
               var sat25ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
               sat25ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
               sat25ix.position.x = (sat25viii.position.x) - (pos25x * 9600);
               sat25ix.position.z = altitude;
               console.log(sat25ix);
               //end
               var sat25ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
               sat25ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
               sat25ix.position.y = (sat25viii.position.y) + (pos25y * 9600); 
               console.log(sat25ixy);
               //end



               //-satellite---Pseudo Sat 26ix/
               var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
               var sat26ix = new THREE.Mesh( geometry, material );
               sat26ix.name = 'SAT-26ix';
               scene2.add( sat26ix );
               //-positions/
               /* Random coordinate for x axis */
               var sat26ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
               sat26ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
               sat26ix.position.x = (sat26viii.position.x) - (pos26x * 9600);
               sat26ix.position.z = altitude;
               console.log(sat26ix);
               //end
               var sat26ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
               sat26ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
               sat26ix.position.y = (sat26viii.position.y) - (pos26y * 9600); 
               console.log(sat26ixy);
               //end


               //-satellite---Pseudo Sat 27ix/
               var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
               var sat27ix = new THREE.Mesh( geometry, material );
               sat27ix.name = 'SAT-27ix';
               scene2.add( sat27ix );
               //-positions/
               /* Random coordinate for x axis */
               var sat27ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
               sat27ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
               sat27ix.position.x = (sat27viii.position.x) - (pos27x * 9600);
               sat27ix.position.z = altitude;
               console.log(sat27ix);
               //end
               var sat27ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
               sat27ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
               sat27ix.position.y = (sat27viii.position.y) - (pos27y * 9600); 
               console.log(sat27ixy);
               //end


               //-satellite---Pseudo Sat 28ix/
               var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
               var sat28ix = new THREE.Mesh( geometry, material );
               sat28ix.name = 'SAT-28ix';
               scene2.add( sat28ix );
               //-positions/
               /* Random coordinate for x axis */
               var sat28ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
               sat28ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
               sat28ix.position.x = (sat28viii.position.x) + (pos28x * 9600);
               sat28ix.position.z = altitude;
               console.log(sat28ix);
               //end
               var sat28ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
               sat28ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
               sat28ix.position.y = (sat28viii.position.y) - (pos28y * 9600); 
               console.log(sat28ixy);
               //end



               //-satellite---Pseudo Sat 29ix/
               var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
               var sat29ix = new THREE.Mesh( geometry, material );
               sat29ix.name = 'SAT-29ix';
               scene2.add( sat29ix );
               //-positions/
               /* Random coordinate for x axis */
               var sat29ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
               sat29ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
               sat29ix.position.x = (sat29viii.position.x) - (pos29x * 9600);
               sat29ix.position.z = altitude;
               console.log(sat29ix);
               //end
               var sat29ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
               sat29ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
               sat29ix.position.y = (sat29viii.position.y) + (pos29y * 9600); 
               console.log(sat29ixy);
               //end



               //-satellite---Pseudo Sat 30ix/
               var material = new THREE.MeshBasicMaterial( { color: 0xc7c7c7, side: THREE.DoubleSide } );
               var sat30ix = new THREE.Mesh( geometry, material );
               sat30ix.name = 'SAT-30ix';
               scene2.add( sat30ix );
               //-positions/
               /* Random coordinate for x axis */
               var sat30ixx = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
               sat30ixx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases  
               sat30ix.position.x = (sat30viii.position.x) - (pos30x * 9600);
               sat30ix.position.z = altitude;
               console.log(sat30ix);
               //end
               var sat30ixy = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
               sat30ixy *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
               sat30ix.position.y = (sat30viii.position.y) - (pos30y * 9600); 
               console.log(sat30ixy);
               //end







        //First Dot
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 10, sizeAttenuation: false, color: 0xff0e0e} );
        var dot1 = new THREE.Points( dotGeometry, dotMaterial );
        dot1.name = 'Nigeria';
        scene2.add( dot1 );
        dot1.position.x = 5;
        dot1.position.y = -100;



        //second Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 10, sizeAttenuation: false, color: 0xff0e0e} );
        var dot2 = new THREE.Points( dotGeometry, dotMaterial );
        dot2.name = 'Jordan';
        scene2.add( dot2 );
        dot2.position.x = 30;
        dot2.position.y = 39;


        //Third Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 10, sizeAttenuation: false, color: 0xff0e0e} );
        var dot3 = new THREE.Points( dotGeometry, dotMaterial );
        dot3.name = 'Saudi Arabia';
        scene2.add( dot3 );
        dot3.position.x = 109;
        dot3.position.y = -38;

        //Fourth Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 10, sizeAttenuation: false, color: 0xff0e0e} );
        var dot4 = new THREE.Points( dotGeometry, dotMaterial );
        dot4.name = 'Libya';
        scene2.add( dot4 );
        dot4.position.x = -110;
        dot4.position.y = -15;

        //Fifth Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 10, sizeAttenuation: false, color: 0xff0e0e} );
        var dot5 = new THREE.Points( dotGeometry, dotMaterial );
        dot5.name = 'Libya';
        scene2.add( dot5 );
        dot5.position.x = -220;
        dot5.position.y = 50;


        //Sixth Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 11, sizeAttenuation: false, color: 0xff0e0e} );
        var dot6 = new THREE.Points( dotGeometry, dotMaterial );
        dot6.name = 'Iran';
        scene2.add( dot6 );
        dot6.position.x = 145;
        dot6.position.y = 32;

        //Seventh Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 11, sizeAttenuation: false, color: 0xff0e0e} );
        var dot7 = new THREE.Points( dotGeometry, dotMaterial );
        dot7.name = 'Afghanistan';
        scene2.add( dot7 );
        dot7.position.x = 185;
        dot7.position.y = 64;

        //Eight Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 11, sizeAttenuation: false, color: 0xff0e0e} );
        var dot8 = new THREE.Points( dotGeometry, dotMaterial );
        dot8.name= 'Tunisia';
        scene2.add( dot8 );
        dot8.position.x = -125;
        dot8.position.y = 44;


        //Ninth Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 11, sizeAttenuation: false, color: 0xe60202} );
        var dot9 = new THREE.Points( dotGeometry, dotMaterial );
        dot9.name= 'Tunisia';
        scene2.add( dot9 );
        dot9.position.x = -162;
        dot9.position.y = -50;


        //Tenth Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 11, sizeAttenuation: false, color: 0xe60202} );
        var dot10 = new THREE.Points( dotGeometry, dotMaterial );
        dot10.name= 'Tunisia';
        scene2.add( dot10 );
        dot10.position.x = -29;
        dot10.position.y = 54;


        //Eleventh Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 11, sizeAttenuation: false, color: 0xe60202} );
        var dot11 = new THREE.Points( dotGeometry, dotMaterial );
        dot11.name= 'Tunisia';
        scene2.add( dot11 );
        dot11.position.x = 35;
        dot11.position.y = 99;


        //Twelfth Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 11, sizeAttenuation: false, color: 0xe60202} );
        var dot12 = new THREE.Points( dotGeometry, dotMaterial );
        dot12.name= 'Portugal';
        scene2.add( dot12 );
        dot12.position.x = -13;
        dot12.position.y = -35;


        //Thirteenth Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 11, sizeAttenuation: false, color: 0xe60202} );
        var dot13 = new THREE.Points( dotGeometry, dotMaterial );
        dot13.name= 'Turkey';
        scene2.add( dot13 );
        dot13.position.x = 46;
        dot13.position.y = -35;

        //---Center of Focus------------Line1//
        //  var material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        //  var geometry = new THREE.Geometry();
        //  //Start Point [0]
        //  geometry.vertices.push(new THREE.Vector3( 10, 10, 10) );
        //  geometry.verticesNeedUpdate = true;
        //  geometry.dynamic = true;
        //  //End Point [1]
        //  geometry.vertices.push(new THREE.Vector3( 10, 10, 10) );
        //  geometry.verticesNeedUpdate = true;
        //  geometry.dynamic = true;
        //  var line1 = new THREE.Line( geometry, material );
        //  scene2.add( line1 );


         //---Center of Focus------------Line1//
        //  var material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        //  var geometry = new THREE.Geometry();
        //  //Start Point [0]
        //  geometry.vertices.push(new THREE.Vector3( 5, 5, 5) );
        //  geometry.verticesNeedUpdate = true;
        //  geometry.dynamic = true;
        //  //End Point [1]
        //  geometry.vertices.push(new THREE.Vector3( 5, 5, 5) );
        //  geometry.verticesNeedUpdate = true;
        //  geometry.dynamic = true;
        //  var line2 = new THREE.Line( geometry, material );
        //  scene2.add( line2 );

         //---Center of Focus------------Line3//
        //  var material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        //  var geometry = new THREE.Geometry();
        //  //Start Point [0]
        //  geometry.vertices.push(new THREE.Vector3( 5, 5, 5) );
        //  geometry.verticesNeedUpdate = true;
        //  geometry.dynamic = true;
        //  //End Point [1]
        //  geometry.vertices.push(new THREE.Vector3( 5, 5, 5) );
        //  geometry.verticesNeedUpdate = true;
        //  geometry.dynamic = true;
        //  var line3 = new THREE.Line( geometry, material );
        //  scene2.add( line3 );


          //---Center of Focus------------Line4//
        //   var material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        //   var geometry = new THREE.Geometry();
        //   //Start Point [0]
        //   geometry.vertices.push(new THREE.Vector3( 5, 5, 5) );
        //   geometry.verticesNeedUpdate = true;
        //   geometry.dynamic = true;
        //   //End Point [1]
        //   geometry.vertices.push(new THREE.Vector3( 5, 5, 5) );
        //   geometry.verticesNeedUpdate = true;
        //   geometry.dynamic = true;
        //   var line4 = new THREE.Line( geometry, material );
        //   scene2.add( line4 );
 

        //  line1.geometry.vertices[ 0 ].x = -140;
        //  line1.geometry.vertices[ 0 ].y = 80;
        //  line1.geometry.vertices[ 1 ].x = 128;
        //  line1.geometry.vertices[ 1 ].y = 80;
        //  line1.geometry.verticesNeedUpdate = true;
        //  line2.geometry.vertices[ 0 ].x = 130;
        //  line2.geometry.vertices[ 0 ].y = 90;
        //  line2.geometry.vertices[ 1 ].x = 130;
        //  line2.geometry.vertices[ 1 ].y = -100;
        //  line2.geometry.verticesNeedUpdate = true;
        //  line3.geometry.vertices[ 0 ].x = -145;
        //  line3.geometry.vertices[ 0 ].y = -90;
        //  line3.geometry.vertices[ 1 ].x = 135;
        //  line3.geometry.vertices[ 1 ].y = -90;
        //  line3.geometry.verticesNeedUpdate = true;
        //  line4.geometry.vertices[ 0 ].x = -145;
        //  line4.geometry.vertices[ 0 ].y = 90;
        //  line4.geometry.vertices[ 1 ].x = -145;
        //  line4.geometry.vertices[ 1 ].y = -90;
        //  line4.geometry.verticesNeedUpdate = true;





























        

        
        
        camera.position.set(0, 0, 100);
        camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

        // DOM Variables //
            //this function makes satelites orbit in and out of viewport
            function orbitNewlyAddedSatelite(){
            
             for(let i = 0; i < sateliteArrayRight.length; i++){
                 // sateliteArrayRight[i].position.x = randomSatOrbitRightX[i];
                  if(sateliteArrayRight[i].position.y >=-150 && orbitLogYState[i]===0){
                  //alert('CurrentValue'+orbitLogX[i]);
                  //alert(orbitLogXState[i]+'CurrentValue'+sateliteArray[i].position.x);
                  sateliteArrayRight[i].position.y -= pos1y;
                  orbitLogY[i] = sateliteArrayRight[i].position.y;
                  if(sateliteArrayRight[i].position.y<=-149){
                     // alert('CurrentValue'+orbitLogX[i]);
                      orbitLogYState[i]=1;
                  }
              }else{
                  sateliteArrayRight[i].position.y += pos1y;
                  orbitLogY[i] = sateliteArrayRight[i].position.y;
                  if(orbitLogY[i]>150){
                      orbitLogYState[i]=0;
                  }
              }
             }
                
            for(let i = 0; i < sateliteArray.length; i++){
               
              if(sateliteArray[i].position.x >=-250 && orbitLogXState[i]===0){
                  //alert('CurrentValue'+orbitLogX[i]);
                  //alert(orbitLogXState[i]+'CurrentValue'+sateliteArray[i].position.x);
                  sateliteArray[i].position.x += pos1x;
                  orbitLogX[i] = sateliteArray[i].position.x;
                  if(sateliteArray[i].position.x<=-249){
                     // alert('CurrentValue'+orbitLogX[i]);
                      orbitLogXState[i]=1;
                  }
              }else{
                  sateliteArray[i].position.x -= pos1x;
                  orbitLogX[i] = sateliteArray[i].position.x;
                  if(orbitLogX[i]>250){
                      orbitLogXState[i]=0;
                  }
              }
              
              
              
              //sateliteArray[i].position.y -= randomSatOrbitLeftY[i];
            }
}
        // -- rendering start
        function animate() {
            requestAnimationFrame( animate );

            //--Animation--for rotating the element-----//
            rotate_all_satellites();
            orbit_all_satellites();
            orbitNewlyAddedSatelite();
            //Blinking Dot ---//
            // dot1.rotation.x += 0.10;
            
            // send();


            
            //-------ends--------------//
            
          
            renderer.clear();
            renderer.render( scene, camera );
            renderer.clearDepth();
            renderer.render( scene2, camera );
        }
        animate();
        // -- rendering end
