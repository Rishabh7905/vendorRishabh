using INGXTNAUTICALCV_SRV from './external/INGXTNAUTICALCV_SRV.cds';
using NAUTIMASTER_BTP_SRV from './external/NAUTIMASTER_BTP_SRV.cds';
using NAUTIVENDOR_BTP_SRV from './external/NAUTIVENDOR_BTP_SRV.cds';

service MyService {    
    entity BidTypeSet as projection on INGXTNAUTICALCV_SRV.BidTypeSet;

    entity BidMasterSet as projection on NAUTIMASTER_BTP_SRV.BidMasterSet;

    entity xNAUTIxvend_btp as projection on NAUTIVENDOR_BTP_SRV.xNAUTIxvend_btp;

}