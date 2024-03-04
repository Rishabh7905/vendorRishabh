 
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator,FilterType) {
        "use strict";
        return Controller.extend("vendorfe.controller.SubmitQuatation", {
            onInit: function () {
                
            },
            
            onBackPress: function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1");
            },
            onBackPressHome: function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1");
            },

            itemPressHandler:function(oEvent){
                // console.log(oEvent.getParameter("listItem"));
                var oEventData=oEvent.getParameter("listItem").mAggregations.cells;
                console.log(oEventData);
                vendorName=oEventData[0].mProperties.text

                CommercialRank = oEventData[2].mProperties.text;
                Quote = oEventData[4].mProperties.text;
                TechnicalScore = oEventData[1].mProperties.text
                console.log(vendorName);
                // console.log(CommercialRank);
                // console.log(Quote);
                this.getView().byId("Label01").setText(`Leading Commercial Rank: (${CommercialRank})`);
                this.getView().byId("boTxt5").setText(`Quote: ${Quote}`);
                this.getView().byId("QuoteValue").setValue(Quote);
                this.getView().byId("boTxt6").setText(vendorName);
                this.getView().byId("boTxt7").setText(`Technical Score: ${TechnicalScore}`);

            },
            

            onPressBidTableData(oEvent) {
                const oItem = oEvent.getSource();
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouterequestNO", {
                     bidObjPath: window.encodeURIComponent(oItem.getBindingContext("bidData").getPath().substr(1))
                });
            },
            closeTile: function(oEvent) {
                let oTable = this.getView().byId("table");
                let oNumericContent = this.getView().byId("closeTileNumericId"); 
                let oFilter = new sap.ui.model.Filter("Status", FilterOperator.Contains,"closed");
                oTable.getBinding("items").filter(oFilter, FilterType.Application);
                let closedItemsCount = oTable.getBinding("items").getLength();
                oNumericContent.setValue(closedItemsCount);
            },
            
            
            openTile : function(oEvent){
                let oTable = this.getView().byId("table");
                let oNumericContent = this.getView().byId("openTileNumericId"); 
                let oFilter = new sap.ui.model.Filter("Status", FilterOperator.Contains,"open");
                oTable.getBinding("items").filter(oFilter, FilterType.Application);
                let openItemsCount = oTable.getBinding("items").getLength();
                oNumericContent.setValue(openItemsCount);
            },

            
            allTile : function(oEvent){
                let oTable = this.getView().byId("table");
                let oNumericContent = this.getView().byId("allTileNumericId");
                let oFilter = new sap.ui.model.Filter("Status", FilterOperator,"Closed,open");
                oTable.getBinding("items").filter(oFilter, FilterType.Application);
                // Get the count of rows for the "Closed" status
                let ongoingItemsCount = oTable.getBinding("items").getLength();
            
                // Set the count to the NumericContent
                oNumericContent.setValue(ongoingItemsCount);
    
            }
  
        });
    });