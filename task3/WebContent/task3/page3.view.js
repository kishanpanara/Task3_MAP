
	        // PART 1: define the new GoogleMap Control type
	     sap.ui.jsview("task3.page3", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf task3.page2
	*/ 
	getControllerName : function() {
		return "task3.page3";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf task3.page2
	*/ 
	createContent : function(oController) {
	  
	        sap.ui.core.Control.extend("my.GoogleMap", {            
	            metadata : {
	                properties : {           // setter and getter are created behind the scenes, incl. data binding and type validation
	                    latitude: "float",
	                    longitude: "float"
	                }
	            },
	            init: function(){
	                this._html = new sap.ui.core.HTML({content:"<div style='height:100%;width:100%;' id='" + this.getId()+"-map'></div>"});
	            },
	            renderer : function(oRm, oControl) {
	                oRm.write("<div style='height:500px;width:99%;margin:18px;' ");
	                oRm.writeControlData(oControl);  // writes the Control ID and enables event handling - important!
	                oRm.write(">");
	                oRm.renderControl(oControl._html);
	                oRm.write("</div>");
	            },
	            onAfterRendering : function() {  
	                if (!this.initialized) {      // after the first rendering initialize the map
	                    this.initialized = true;
	                    var options = {
	                        zoom:12,
	                        center: new google.maps.LatLng(this.getLatitude(),this.getLongitude()),
	                        mapTypeId: "roadmap"
	                    };
	                    this._map = new google.maps.Map(jQuery.sap.domById(this.getId()+"-map"),options);
	                } else {  // after subsequent rerenderings, the map needs to get the current values set
	                    this._map.setCenter(new google.maps.LatLng(this.getLatitude(),this.getLongitude()));
	                }
	            }
	        });
	       
	       
	        // PART 2: instantiate Control and place it onto the page
	       
	        var myMap = new my.GoogleMap({
	            latitude:49.3,
	            longitude:8.64
	        })
	       return myMap;
	}

	     });   
		
	        
		

