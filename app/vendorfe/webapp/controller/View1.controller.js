sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("vendorfe.controller.View1", {
        onInit: function() {
        },

        openTile: function() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteSubmitQuatation");
      },

      });
    }
  );