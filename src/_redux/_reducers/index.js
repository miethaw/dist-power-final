import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { header } from './header.reducer';
import { drawMap } from './drawMap.reducer';
import { overviewPageOnedataChart } from './overView/overviewPageOnedataChart.reducer';
import { realTimeAncillaryServicesPrices } from './overView/realTimeAncillaryServicesPrices.reducer';
import { realTimePriceAndDemand } from './overView/realTimePriceAndDemand.reducer';
import { sevenDayPriceAndDemand } from './overView/sevenDayPriceAndDemand.reducer';
import { marketBiddingLineChart } from './marketBidding/marketBiddingLineChart.reducer';
import { marketBiddingGeneratorList } from './marketBidding/marketBiddingGeneratorList.reducer';
import {marketBiddingTotalPowerCapacity} from './marketBidding/marketBiddingTotalPowerCapacity.reducer';
import {marketBiddingFuture20Days} from './marketBidding/marketBiddingFuture20Days.reducer';
import {siteControlGeneratorInfo} from './siteControl/siteControlGeneratorInfo.reducer';
import {siteControlGeneratorList} from './siteControl/siteControlGeneratorList.reducer';
import {siteControlSolarImage} from './siteControl/siteControlSolarImage.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  header,
  drawMap,
  overviewPageOnedataChart,
  realTimeAncillaryServicesPrices,
  realTimePriceAndDemand,
  sevenDayPriceAndDemand,
  marketBiddingLineChart,
  marketBiddingGeneratorList,
  marketBiddingTotalPowerCapacity,
  marketBiddingFuture20Days,
  siteControlGeneratorInfo,
  siteControlGeneratorList,
  siteControlSolarImage
});

export default rootReducer;