
Alloy.Collections.chiste = Alloy.createCollection('nivel', [
																{ 
																	nivel: "Nivel 1" 
																}, 
																{ 
																	nivel: "Nivel 2" 
																}, 
																{ 
																	nivel: "Nivel 3" 
																}
															]);
															
var operacionesNivelUno = [
					{ op: " 2 x 3 = ?", resultado: 6   },
					{ op: " 2 x 5 = ?", resultado: 10  },
					{ op: " 1 x 4 = ?", resultado: 4   },
					{ op: " 4 x 3 = ?", resultado: 12  },
					{ op: " 3 x 3 = ?", resultado: 9   },
					{ op: " 1 x 3 = ?", resultado: 3   },
					{ op: " 9 x 1 = ?", resultado: 9   },
					{ op: " 6 x 6 = ?", resultado: 36  },
					{ op: " 5 x 3 = ?", resultado: 15  }, 
];	

														
var operacionesNivelDos = [
					{ op: " 3 x 6 = ?", resultado: 18   },
					{ op: " 4 x 10 = ?",resultado: 40  },
					{ op: " 7 x 4 = ?", resultado: 28   },
					{ op: " 8 x 3 = ?", resultado: 24  },
					{ op: " 7 x 7 = ?", resultado: 49   },
					{ op: " 3 x 3 = ?", resultado: 9   },
					{ op: " 1 x 1 = ?", resultado: 1   },
					{ op: " 6 x 6 = ?", resultado: 36  },
					{ op: " 5 x 9 = ?", resultado: 45  }, 
];


														
var operacionesNivelTres = [
					{ op: " 2 x 3 = ?", resultado: 6   },
					{ op: " 2 x 6 = ?", resultado: 12  },
					{ op: " 6 x 7 = ?", resultado: 42   },
					{ op: " 4 x 3 = ?", resultado: 12  },
					{ op: " 9 x 3 = ?", resultado: 27   },
					{ op: " 8 x 9 = ?", resultado: 72   },
					{ op: " 9 x 6 = ?", resultado: 54   },
					{ op: " 9 x 9 = ?", resultado: 81  },
					{ op: " 2 x 11 = ?", resultado:22  }, 
];														
					
Alloy.Globals.mathMasterConfig = 	{	
										nivel: 'nivelUno',
										operaciones: {
											nivelUno:  operacionesNivelUno, 
											nivelDos:  operacionesNivelDos, 
											nivelTres: operacionesNivelTres	
										},
										record: {
											nivelUno: 0,
											nivelDos: 0,
											nivelTres: 0
										} 
									};					
															
var fb = require('facebook');
fb.appid = 654538291277702;

fb.permissions = ['publish_stream', 'access_token'];


fb.authorize();

fb.publicarEnFacebook = function() {
	
	var data = {
	    link : "http://itculiacan.edu.mx",
	    name : "MathMaster Mobile Homework MCC-2014",
	    message : "Tareando ando",
	    caption : "Inteligencia artificial aplicada a la educación",
	    picture : "http://itculiacan.edu.mx/wp-content/uploads/2013/06/LOGO-SIG-XXXX.png",
	    description : "Desarrolla tus habilidades matemáticas. Rompe tus récords "
	                  
	};
	fb.dialog("feed", data, function(e) {	   
        if(e.error) {
            alert(e.error);
        } 
	});
};


Alloy.Globals.fb = fb;
console.log(Alloy.Globals.fb);