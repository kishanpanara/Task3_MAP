sap.ui.jsview("task3.page2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf task3.page2
	*/ 
	getControllerName : function() {
		return "task3.page2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf task3.page2
	*/ 
	createContent : function(oController) {
				
	
		
		
		var vData=[
		           {assID:"EM1234", name:"kishan", linkText:"crave Technology Solutions",href:"http://www.craveinfotech.com", gender:"Male", mobile:"9934307162", rating:5},
		           {assID:"EM123456", name:"Bharath S", linkText:"crave Technology Solutions", href:"http://www.craveinfotech.com",gender:"Male", mobile:"9934307162", rating:5},
		           {assID:"EM263521", name:"Arun M", linkText:"crave Technology Solutions", href:"http://www.craveinfotech.com", gender:"Male", mobile:"9786721460", rating:3},
		           {assID:"EM323455", name:"Anitha", linkText:"Cognizant Technology Solutions", href:"http://www.craveinfotech.com", gender:"Female", mobile:"9524396759", rating:4},
		           {assID:"EM237652", name:"Ganesh", linkText:"Cognizant Technology Solutions", href:"http://www.craveinfotech.com", gender:"Male", mobile:"9876543210", rating:1},
		           {assID:"EM398454", name:"Ajai", linkText:"Cognizant Technology Solutions", href:"http://www.craveinfotech.com", gender:"Male", mobile:"9576113218", rating:4},
		           {assID:"EM348092", name:"Pranav", linkText:"Cognizant Technology Solutions", href:"http://www.craveinfotech.com", gender:"Male", mobile:"9576113218", rating:5}
		          ];
		
		
		
		var oTable = new sap.ui.table.Table({
		                                     // Displayed as the heading of the table
		    visibleRowCount: 8,                                           // How much rows you want to display in the table
		    selectionMode: sap.ui.table.SelectionMode.Single, //Use Singe or Multi
		    navigationMode: sap.ui.table.NavigationMode.Paginator, //Paginator or Scrollbar
		    fixedColumnCount: 6,                     // Freezes the number of columns
		    enableColumnReordering:true,       // Allows you to drag and drop the column and reorder the position of the column
		    width:"700px"                              // width of the table
		  });
		
		
			   
			    
			   
		
			    oTable.addColumn(new sap.ui.table.Column({
				    label: new sap.ui.commons.Label({text: "Name"}),
				    template: new sap.ui.commons.TextField().bindProperty("value", "name"),
				    sortProperty: "name",
				    filterProperty: "name",
				    width: "125px"
				}));
			    
			    oTable.addColumn(new sap.ui.table.Column({
				    label: new sap.ui.commons.Label({text: "mobile"}),
				    template: new sap.ui.commons.TextField().bindProperty("value", "mobile"),
				    sortProperty: "mobile",
				    filterProperty: "mobile",
				    width: "125px"
				}));
			    
			    
			    
			    oTable.addColumn(new sap.ui.table.Column({
				    label: new sap.ui.commons.Label({text: "Website"}),
				    template: new sap.ui.commons.TextField().bindProperty("value", "href"),
				    sortProperty: "linkText",
				    filterProperty: "linkText",
				    width: "225px"
				}));
		
			    var oModel = new sap.ui.model.json.JSONModel();        // created a JSON model      
			     oModel.setData({modelData: vData});                              // Set the data to the model using the JSON object defined already
			     oTable.setModel(oModel);                                                                                  
			     oTable.bindRows("/modelData");                              // binding all the rows into the model
			 
			     
			     oTable.sort(oTable.getColumns()[0]); 
			     
			     return oTable;
					return oModel;
					
		
	}

});
