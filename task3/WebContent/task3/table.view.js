sap.ui.jsview("task3.table", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf task3.table
	*/ 
	getControllerName : function() {
		return "task3.table";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf task3.table
	*/ 
	createContent : function(oController) {

		
		
		
		var oTable = new sap.m.Table("idPrdList", {   
		      inset : true, 
		      headerText : "List of Products",
		      headerDesign : sap.m.ListHeaderDesign.Standard, 
		      mode : sap.m.ListMode.None,   
		      includeItemInSelection : false,   
		    });
		    
		    var col1 = new sap.m.Column("col1",{header: new sap.m.Label({text:"Product Name"})});
		    oTable.addColumn(col1); 
		    
		    var col2 = new sap.m.Column("col2",{header: new sap.m.Label({text:"Description"})});
		    oTable.addColumn(col2); 
		    
		    var col3 = new sap.m.Column("col3",{header: new sap.m.Label({text:"Price"})});
		    oTable.addColumn(col3);    
	}

});
