sap.ui.jsview("task3.page1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf task3.page1
	*/ 
	getControllerName : function() {
		return "task3.page1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf task3.page1
	*/ 
	createContent : function(oController) {
//		var oText= new sap.ui.commons.TextView({
//			
//			text: "THis is page 1"
//		})
//		
//		return oText;
		
	
		var vData=[
		           {assID:"EM1234", name:"kishan", linkText:"crave Technology Solutions", gender:"Male", mobile:"9934307162", rating:5},
		           {assID:"EM123456", name:"Bharath S", linkText:"crave Technology Solutions", gender:"Male", mobile:"9934307162", rating:5},
		           {assID:"EM263521", name:"Arun M", linkText:"crave Technology Solutions", href:"http://www.cognizant.com", gender:"Male", mobile:"9786721460", rating:3},
		           {assID:"EM323455", name:"Anitha", linkText:"Cognizant Technology Solutions", href:"http://www.cognizant.com", gender:"Female", mobile:"9524396759", rating:4},
		           {assID:"EM237652", name:"Ganesh", linkText:"Cognizant Technology Solutions", href:"http://www.cognizant.com", gender:"Male", mobile:"9876543210", rating:1},
		           {assID:"EM398454", name:"Ajai", linkText:"Cognizant Technology Solutions", href:"http://www.cognizant.com", gender:"Male", mobile:"9576113218", rating:4},
		           {assID:"EM348092", name:"Pranav", linkText:"Cognizant Technology Solutions", href:"http://www.cognizant.com", gender:"Male", mobile:"9576113218", rating:5},
		           
		          ];
		
		
		
		var oTable = new sap.ui.table.Table({
		                                     // Displayed as the heading of the table
		    visibleRowCount: 8,                                           // How much rows you want to display in the table
		    selectionMode: sap.ui.table.SelectionMode.Single, //Use Singe or Multi
		    navigationMode: sap.ui.table.NavigationMode.Paginator, //Paginator or Scrollbar
		    fixedColumnCount: 7,                     // Freezes the number of columns
		    enableColumnReordering:true,       // Allows you to drag and drop the column and reorder the position of the column
		    width:"1024px"    	
		  });
		
		
			    oTable.addColumn(new sap.ui.table.Column({
			    label: new sap.ui.commons.Label({text: "Name"}),
			    template: new sap.ui.commons.TextField().bindProperty("value", "assID"),
			    sortProperty: "assID",
			    filterProperty: "assID",
			    width: "125px"
			}));
			    
			    oTable.addColumn(new sap.ui.table.Column({
				    label: new sap.ui.commons.Label({text: "Discription"}),
				    template: new sap.ui.commons.TextField().bindProperty("value", "name"),
				    sortProperty: "name",
				    filterProperty: "name",
				    width: "125px"
				}));
		
			    oTable.addColumn(new sap.ui.table.Column({
				    label: new sap.ui.commons.Label({text: "MasterReading"}),
				    template: new sap.ui.commons.TextField().bindProperty("value", "name"),
				    sortProperty: "name",
				    filterProperty: "name",
				    width: "125px"
				}));
			    
			    oTable.addColumn(new sap.ui.table.Column({
				    label: new sap.ui.commons.Label({text: "Value"}),
				    template: new sap.ui.commons.TextField().bindProperty("value", "name"),
				    sortProperty: "name",
				    filterProperty: "name",
				    width: "125px"
				}));
			    oTable.addColumn(new sap.ui.table.Column({
			    	     label: new sap.ui.commons.Label({text: "Gender"}),
			    	     template: new sap.ui.commons.ComboBox(
			    	                    {items: [new sap.ui.core.ListItem({text: "Female"}),
			    	                    new sap.ui.core.ListItem({text: "Male"})]}).bindProperty("value","gender"),
			    	     sortProperty: "gender",
			    	     filterProperty: "gender",
			    	     width: "100px"
			    	    }));
			    
			    
			    oTable.addColumn(new sap.ui.table.Column({
				    label: new sap.ui.commons.Label({text: "Details"}),
				    template: new sap.ui.commons.TextField().bindProperty("value", "name"),
				    sortProperty: "name",
				    filterProperty: "name",
				    width: "125px"
				}));
			    
			    
			    
			    
			    oTable.addColumn(new sap.ui.table.Column({  
			    	  label: new sap.ui.commons.Label({text: "Confirmation"}),  
			    	  width: "125px",
			    	  template: new sap.ui.layout.HorizontalLayout({  
			    	    content : [  
			    	      new sap.ui.commons.TextView({  
			    	          
			    	        textAlign: sap.ui.core.TextAlign.Left,  
			    	        visible : false
			    	      }),  
			    	      new sap.ui.commons.Button({  
			    	        text : "DETAILS",  
			    	        press: "doit", 
			    	        visible : true 
			    	      }) 
			    	       
			    	    ]  
			    	  }) 
			    
			    	})); 
			    
			
			     var oModel = new sap.ui.model.json.JSONModel();        // created a JSON model      
			     oModel.setData({modelData: vData});                              // Set the data to the model using the JSON object defined already
			     oTable.setModel(oModel);                                                                                  
			     oTable.bindRows("/modelData");                              // binding all the rows into the model
			 
			     
			     oTable.sort(oTable.getColumns()[0]); 
			     
			     
			     footer : new sap.m.Bar({
			    	    contentRight : [
			    	      new sap.m.Button({
			    	      text : "Order",
			    	      type : "Emphasized"
			    	      }),
			    	      new sap.m.Button({
			    	      text : "Start",
			    	      type : "Emphasized"
			    	      }),
			    	      new sap.m.Button({
			    	      text : "Submit",
			    	      type : "Emphasized"
			    	      }),
			    	      new sap.m.Button({
			    	      text : "Approve",
			    	      type : "Emphasized"
			    	      }),
			    	      new sap.m.Button({
			    	      text : "ER",
			    	      type : "Emphasized"
			    	      }),
			    	      new sap.m.Button({
			    	      text : "Synchoniz",
			    	      type : "Emphasized"
			    	      })
			    	    
			    	    
			    	    
			    	    ]
			    	  });
			    	

			    
			       
			     
			    // return page;
			  		    
		return oTable;
		return obar;
		
		//return oTable2;
		//return oModel;
		//return aControls;
		
	
		
	}

});
