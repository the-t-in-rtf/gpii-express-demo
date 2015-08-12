"use strict";
var fluid = fluid || require("infusion"),                                                                                    
    path = require("path"),                                                                                          
    gpii = fluid.registerNamespace("gpii"),                                                                          
    contentDir = path.resolve(__dirname, "./content");                                                              

fluid.setLogging(true);
                                                                                                                     
require("gpii-express");                                                                                            
                                                                                                                     
gpii.express({        
    config: {                                                                                            
	express: {                                                                                      
	    port: 8808,
            baseUrl: "http://localhost:8808"                                                            
	}                                                                                                
    },                                                                                                  
    components: {                                                                                        
	staticRouter: {                                                                                  
	    type: "gpii.express.router.static",                                                          
	    options: {                                                                                  
		path: "/",                                                                              
		content: contentDir                                                                      
	    }                                                                                            
	}                                                                                                
    }                                                                              
});
