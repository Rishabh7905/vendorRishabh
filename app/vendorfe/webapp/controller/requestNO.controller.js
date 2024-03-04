
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        var CommercialRank="";
        var Quote="";
        var vendorName;
        var TechnicalScore="";
 
        return Controller.extend("vendorfe.controller.requestNO", {
            onInit: function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("RouterequestNO").attachPatternMatched(this.onObjectMatched, this);
                this.getView().byId("boTxt5").setText(`Quote: ${Quote}`);
                this.getView().byId("Label01").setText(`Leading Commercial Rank: (${CommercialRank})`);
                this.getView().byId("boTxt6").setText(vendorName);
                this.getView().byId("boTxt7").setText(`Technical Score: ${TechnicalScore}`);

            },
            onObjectMatched(oEvent) {
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").bidObjPath),
                    model: "bidData"
                });
            },
           
 
            BidObjData:function(){
                console.log("hello");
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
                // console.(logQuote);
                this.getView().byId("Label01").setText(`Leading Commercial Rank: (${CommercialRank})`);
                this.getView().byId("boTxt5").setText(`Quote: ${Quote}`);
                this.getView().byId("QuoteValue").setValue(Quote);
                this.getView().byId("boTxt6").setText(vendorName);
                this.getView().byId("boTxt7").setText(`Technical Score: ${TechnicalScore}`);

            },
            onBackPress: function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteBidCont");
            },
            onBackPressHome: function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteHome");
            },
            handleNav: function(evt) {
                var navCon = this.byId("navCon");
                var target = evt.getSource().data("target");
                if (target) {
                    var animation = this.byId("animationSelect").getSelectedKey();
                    navCon.to(this.byId(target), animation);
                } else {
                    navCon.back();
                }
            },
            //  for navigation of nav container 2 
              handleNavToPanelA: function() {
              this.navigateToPanel("panelA");
             },
        
             handleNavToPanelB: function() {
              this.navigateToPanel("panelB");
            },
        
            navigateToPanel: function(panelId) {
                var navCon = this.byId("navCon2");
                navCon.to(this.byId(panelId));
            },  
        });
    });