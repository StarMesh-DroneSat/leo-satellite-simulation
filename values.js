//DOM Variables //

var rot1x = 0.0019;
var rot1y = 0.0027;
var rot1z = 0.0086;

var rot2x = 0.0039;
var rot2y = 0.0018;
var rot2z = 0.0072;

var rot3x = 0.0077;
var rot3y = 0.0091;
var rot3z = 0.0028;

var rot4x = 0.0039;
var rot4y = 0.0042;
var rot4z = 0.0047;

var rot5x = 0.0059;
var rot5y = 0.0019;
var rot5z = 0.0032;

var rot6x = 0.0051;
var rot6y = 0.0022;
var rot6z = 0.0037;

var rot7x = 0.0012;
var rot7y = 0.0042;
var rot7z = 0.0038;

var rot8x = 0.0017;
var rot8y = 0.0029;
var rot8z = 0.0078;

var rot9x = 0.0019;
var rot9y = 0.0024;
var rot9z = 0.0036;

var rot10x = 0.0049;
var rot10y = 0.0028;
var rot10z = 0.0075;

var rot11x = 0.0019;
var rot11y = 0.0029;
var rot11z = 0.0038;

var rot12x = 0.0029;
var rot12y = 0.0045;
var rot12z = 0.0079;

var rot13x = 0.0016;
var rot13y = 0.0025;
var rot13z = 0.0078;

var rot14x = 0.0019;
var rot14y = 0.0026;
var rot14z = 0.0035;

var rot15x = 0.0018;
var rot15y = 0.0054;
var rot15z = 0.0073;

var rot16x = 0.0019;
var rot16y = 0.0028;
var rot16z = 0.0035;

var rot17x = 0.0018;
var rot17y = 0.0026;
var rot17z = 0.0074;

var rot18x = 0.0014;
var rot18y = 0.0023;
var rot18z = 0.0033;

var rot19x = 0.0014;
var rot19y = 0.0025;
var rot19z = 0.0076;

var rot20x = 0.0018;
var rot20y = 0.0022;
var rot20z = 0.0031;

var rot21x = 0.0028;
var rot21y = 0.00792;
var rot21z = 0.00388;


var rot22x = 0.00302;
var rot22y = 0.00230;
var rot22z = 0.00322;


var rot23x = 0.00292;
var rot23y = 0.00894;
var rot23z = 0.00334;


var rot24x = 0.00765;
var rot24y = 0.0032;
var rot24z = 0.00342;


var rot25x = 0.0034;
var rot25y = 0.00432;
var rot25z = 0.0056;

var rot26x = 0.00234;
var rot26y = 0.00234;
var rot26z = 0.0046;

var rot27x = 0.0042;
var rot27y = 0.0075;
var rot27z = 0.00465;

var rot28x = 0.0045;
var rot28y = 0.0045;
var rot28z = 0.0032;

var rot29x = 0.0061;
var rot29y = 0.0052;
var rot29z = 0.0041;

var rot30x = 0.0091;
var rot30y = 0.0055;
var rot30z = 0.0013;







//Direction for different Satellites
var pos1x = 0.0168;
var pos1y = 0.0214;
var pos2x = 0.0104;
var pos2y = 0.0149;
var pos3x = 0.0284;
var pos3y = 0.0199;

var pos4x = 0.0262;
var pos4y = 0.0179;
var pos5x = 0.0204;
var pos5y = 0.0149;
var pos6x = 0.0284;
var pos6y = 0.0199;

var pos7x = 0.0147;
var pos7y = 0.0259;
var pos8x = 0.0184;
var pos8y = 0.0129;
var pos9x = 0.0264;
var pos9y = 0.0179;

var pos10x = 0.0184;
var pos10y = 0.0195;
var pos11x = 0.0248;
var pos11y = 0.0139;
var pos12x = 0.0159;
var pos12y = 0.0128;

var pos13x = 0.0138;
var pos13y = 0.0169;
var pos14x = 0.0144;
var pos14y = 0.0159;
var pos15x = 0.0174;
var pos15y = 0.0249;

var pos16x = 0.0241;
var pos16y = 0.0229;
var pos17x = 0.0154;
var pos17y = 0.0269;
var pos18x = 0.0234;
var pos18y = 0.0259;

var pos19x = 0.0147;
var pos19y = 0.0152;
var pos20x = 0.0139;
var pos20y = 0.0129;

var pos21x = 0.01233;
var pos21y = 0.01982;

var pos22x = 0.0243;
var pos22y = 0.0131;

var pos23x = 0.01783;
var pos23y = 0.0221;

var pos24x = 0.0145;
var pos24y = 0.01232;

var pos25x = 0.01432;
var pos25y = 0.02351;

var pos26x = 0.01435;
var pos26y = 0.02543;

var pos27x = 0.0246;
var pos27y = 0.01451;

var pos28x = 0.0246;
var pos28y = 0.0193;

var pos29x = 0.0129;
var pos29y = 0.0159;

var pos30x = 0.0259;
var pos30y = 0.0139;

var pos_footprint = 120;
var neg_footprint = -120;


var alt = "";
var data = "make";
function loadParams(){
    // console.log("Yello Yello Yel")
    var alt_of_sats = document.getElementById('altitude').value;
    console.log(alt_of_sats, alt_of_sats, alt_of_sats,alt_of_sats);

    if (alt_of_sats == 300) {
    document.getElementById("btn6").innerHTML = "Altitude:300 miles";
    document.getElementById("log_alt").innerHTML = 300;

    alt = 300;
    var dh = (((4000 + alt)*(4000 + alt)) - 4000*4000);
    dh = Math.sqrt(dh);
    var footprint = 3.14159 * dh*dh;
    document.getElementById("ftpt").innerHTML = Math.round(footprint);

    pos_footprint = 120;
    neg_footprint = -120;


    pos1x = 0.0098;
    pos1y = 0.0084;
    pos2x = 0.0098;
    pos2y = 0.0098;
    pos3x = 0.0084;
    pos3y = 0.0098;

    pos4x = 0.0084;
    pos4y = 0.0098;
    pos5x = 0.0084;
    pos5y = 0.0098;
    pos6x = 0.0084;
    pos6y = 0.0098;

    pos7x = 0.0098;
    pos7y = 0.0084;
    pos8x = 0.0098;
    pos8y = 0.0098;
    pos9x = 0.0084;
    pos9y = 0.0098;

    pos10x = 0.0098;
    pos10y = 0.0098;
    pos11x = 0.0084;
    pos11y = 0.0098;
    pos12x = 0.0098;
    pos12y = 0.0098;

    pos13x = 0.0098;
    pos13y = 0.0098;
    pos14x = 0.0098;
    pos14y = 0.0098;
    pos15x = 0.0098;
    pos15y = 0.0084;

    pos16x = 0.0084;
    pos16y = 0.0098;
    pos17x = 0.0098;
    pos17y = 0.0084;
    pos18x = 0.0084;
    pos18y = 0.0084;

    pos19x = 0.0098;
    pos19y = 0.0098;
    pos20x = 0.0098;
    pos20y = 0.0098;

    pos21x = 0.0098;
    pos21y = 0.0098;

    pos22x = 0.0084;
    pos22y = 0.0098;

    pos23x = 0.0098;
    pos23y = 0.0084;

    pos24x = 0.0098;
    pos24y = 0.0098;

    pos25x = 0.0084;
    pos25y = 0.0084;

    pos26x = 0.0098;
    pos26y = 0.0098;

    pos27x = 0.0084;
    pos27y = 0.0098;

    pos28x = 0.0084;
    pos28y = 0.0098;

    pos29x = 0.0098;
    pos29y = 0.0098;

    pos30x = 0.0084;
    pos30y = 0.0098;
    } else if (alt_of_sats == 400) {
    document.getElementById("btn6").innerHTML = "Altitude:400 miles";
    document.getElementById("log_alt").innerHTML = 400;

    alt = 400;
    var dh = (((4000 + alt)*(4000 + alt)) - 4000*4000);
    dh = Math.sqrt(dh);
    var footprint = 3.14159 * dh*dh;
    document.getElementById("ftpt").innerHTML = Math.round(footprint);

    pos_footprint = 120;
    neg_footprint = -120;

    pos1x = 0.0078;
    pos1y = 0.0064;
    pos2x = 0.0078;
    pos2y = 0.0078;
    pos3x = 0.0064;
    pos3y = 0.0078;

    pos4x = 0.0064;
    pos4y = 0.0078;
    pos5x = 0.0064;
    pos5y = 0.0078;
    pos6x = 0.0064;
    pos6y = 0.0078;

    pos7x = 0.0078;
    pos7y = 0.0064;
    pos8x = 0.0078;
    pos8y = 0.0078;
    pos9x = 0.0064;
    pos9y = 0.0078;

    pos10x = 0.0078;
    pos10y = 0.0078;
    pos11x = 0.0064;
    pos11y = 0.0078;
    pos12x = 0.0078;
    pos12y = 0.0078;

    pos13x = 0.0078;
    pos13y = 0.0078;
    pos14x = 0.0078;
    pos14y = 0.0078;
    pos15x = 0.0078;
    pos15y = 0.0064;

    pos16x = 0.0064;
    pos16y = 0.0078;
    pos17x = 0.0078;
    pos17y = 0.0064;
    pos18x = 0.0064;
    pos18y = 0.0064;

    pos19x = 0.0078;
    pos19y = 0.0078;
    pos20x = 0.0078;
    pos20y = 0.0078;

    pos21x = 0.0078;
    pos21y = 0.0078;

    pos22x = 0.0064;
    pos22y = 0.0078;

    pos23x = 0.0078;
    pos23y = 0.0064;

    pos24x = 0.0078;
    pos24y = 0.0078;

    pos25x = 0.0064;
    pos25y = 0.0064;

    pos26x = 0.0078;
    pos26y = 0.0078;

    pos27x = 0.0064;
    pos27y = 0.0078;

    pos28x = 0.0064;
    pos28y = 0.0078;

    pos29x = 0.0078;
    pos29y = 0.0078;

    pos30x = 0.0064;
    pos30y = 0.0078;
    } else if (alt_of_sats == 600) {
    document.getElementById("btn6").innerHTML = "Altitude:600 miles";
    document.getElementById("log_alt").innerHTML = 600;

    alt = 600;
    var dh = (((4000 + alt)*(4000 + alt)) - 4000*4000);
    dh = Math.sqrt(dh);
    var footprint = 3.14159 * dh*dh;
    document.getElementById("ftpt").innerHTML = Math.round(footprint);
    
    pos_footprint = 120;
    neg_footprint = 120;

    pos1x = 0.0038;
    pos1y = 0.0024;
    pos2x = 0.0038;
    pos2y = 0.0038;
    pos3x = 0.0024;
    pos3y = 0.0038;

    pos4x = 0.0024;
    pos4y = 0.0038;
    pos5x = 0.0024;
    pos5y = 0.0038;
    pos6x = 0.0024;
    pos6y = 0.0038;

    pos7x = 0.0038;
    pos7y = 0.0024;
    pos8x = 0.0038;
    pos8y = 0.0038;
    pos9x = 0.0024;
    pos9y = 0.0038;

    pos10x = 0.0038;
    pos10y = 0.0038;
    pos11x = 0.0024;
    pos11y = 0.0038;
    pos12x = 0.0038;
    pos12y = 0.0038;

    pos13x = 0.0038;
    pos13y = 0.0038;
    pos14x = 0.0038;
    pos14y = 0.0038;
    pos15x = 0.0038;
    pos15y = 0.0024;

    pos16x = 0.0024;
    pos16y = 0.0038;
    pos17x = 0.0038;
    pos17y = 0.0024;
    pos18x = 0.0024;
    pos18y = 0.0024;

    pos19x = 0.0038;
    pos19y = 0.0038;
    pos20x = 0.0038;
    pos20y = 0.0038;

    pos21x = 0.0038;
    pos21y = 0.0038;

    pos22x = 0.0024;
    pos22y = 0.0038;

    pos23x = 0.0038;
    pos23y = 0.0024;

    pos24x = 0.0038;
    pos24y = 0.0038;

    pos25x = 0.0024;
    pos25y = 0.0024;

    pos26x = 0.0038;
    pos26y = 0.0038;

    pos27x = 0.0024;
    pos27y = 0.0038;

    pos28x = 0.0024;
    pos28y = 0.0038;

    pos29x = 0.0038;
    pos29y = 0.0038;

    pos30x = 0.0024;
    pos30y = 0.0038;
    } else if (alt_of_sats == 800) {
    document.getElementById("btn6").innerHTML = "Altitude:800 miles";
    document.getElementById("log_alt").innerHTML = 800;
    
    alt = 800;
    var dh = (((4000 + alt)*(4000 + alt)) - 4000*4000);
    dh = Math.sqrt(dh);
    var footprint = 3.14159 * dh*dh;
    document.getElementById("ftpt").innerHTML = Math.round(footprint);
    
    pos_footprint = 120;
    neg_footprint = -120;

    pos1x = 0.0008;
    pos1y = 0.0004;
    pos2x = 0.0008;
    pos2y = 0.0008;
    pos3x = 0.0004;
    pos3y = 0.0008;

    pos4x = 0.0004;
    pos4y = 0.0008;
    pos5x = 0.0004;
    pos5y = 0.0008;
    pos6x = 0.0004;
    pos6y = 0.0008;

    pos7x = 0.0008;
    pos7y = 0.0004;
    pos8x = 0.0008;
    pos8y = 0.0008;
    pos9x = 0.0004;
    pos9y = 0.0008;

    pos10x = 0.0008;
    pos10y = 0.0008;
    pos11x = 0.0004;
    pos11y = 0.0008;
    pos12x = 0.0008;
    pos12y = 0.0008;

    pos13x = 0.0008;
    pos13y = 0.0008;
    pos14x = 0.0008;
    pos14y = 0.0008;
    pos15x = 0.0008;
    pos15y = 0.0004;

    pos16x = 0.0004;
    pos16y = 0.0008;
    pos17x = 0.0008;
    pos17y = 0.0004;
    pos18x = 0.0004;
    pos18y = 0.0004;

    pos19x = 0.0008;
    pos19y = 0.0008;
    pos20x = 0.0008;
    pos20y = 0.0008;

    pos21x = 0.0008;
    pos21y = 0.0008;

    pos22x = 0.0004;
    pos22y = 0.0008;

    pos23x = 0.0008;
    pos23y = 0.0004;

    pos24x = 0.0008;
    pos24y = 0.0008;

    pos25x = 0.0004;
    pos25y = 0.0004;

    pos26x = 0.0008;
    pos26y = 0.0008;

    pos27x = 0.0004;
    pos27y = 0.0008;

    pos28x = 0.0004;
    pos28y = 0.0008;

    pos29x = 0.0008;
    pos29y = 0.0008;

    pos30x = 0.0004;
    pos30y = 0.0008;
    } else if (alt_of_sats == 1000) {
    document.getElementById("btn6").innerHTML = "Altitude:1000 miles";
    document.getElementById("log_alt").innerHTML = 1000;

    alt = 1000;
    var dh = (((4000 + alt)*(4000 + alt)) - 4000*4000);
    dh = Math.sqrt(dh);
    var footprint = 3.14159 * dh*dh;
    document.getElementById("ftpt").innerHTML = Math.round(footprint);
    
    pos_footprint = 120;
    neg_footprint = -120;

    pos1x = 0.0004;
    pos1y = 0.0001;
    pos2x = 0.0004;
    pos2y = 0.0004;
    pos3x = 0.0001;
    pos3y = 0.0004;

    pos4x = 0.0001;
    pos4y = 0.0004;
    pos5x = 0.0001;
    pos5y = 0.0004;
    pos6x = 0.0001;
    pos6y = 0.0004;

    pos7x = 0.0004;
    pos7y = 0.0004;
    pos8x = 0.0004;
    pos8y = 0.0004;
    pos9x = 0.0001;
    pos9y = 0.0004;

    pos10x = 0.0004;
    pos10y = 0.0004;
    pos11x = 0.0001;
    pos11y = 0.0004;
    pos12x = 0.0004;
    pos12y = 0.0004;

    pos13x = 0.0004;
    pos13y = 0.0004;
    pos14x = 0.0004;
    pos14y = 0.0004;
    pos15x = 0.0004;
    pos15y = 0.0001;

    pos16x = 0.0001;
    pos16y = 0.0004;
    pos17x = 0.0004;
    pos17y = 0.0001;
    pos18x = 0.0001;
    pos18y = 0.0001;

    pos19x = 0.0004;
    pos19y = 0.0004;
    pos20x = 0.0004;
    pos20y = 0.0004;

    pos21x = 0.0004;
    pos21y = 0.0004;

    pos22x = 0.0001;
    pos22y = 0.0004;

    pos23x = 0.0004;
    pos23y = 0.0001;

    pos24x = 0.0004;
    pos24y = 0.0004;

    pos25x = 0.0001;
    pos25y = 0.0001;

    pos26x = 0.0004;
    pos26y = 0.0004;

    pos27x = 0.0001;
    pos27y = 0.0004;

    pos28x = 0.0001;
    pos28y = 0.0004;

    pos29x = 0.0004;
    pos29y = 0.0004;

    pos30x = 0.0001;
    pos30y = 0.0004;
    }
    
}
loadParams();


var r_v = 0.01;
var o_v = 16000;

var f_o_v = 7.3;
var fov_im = 10000;