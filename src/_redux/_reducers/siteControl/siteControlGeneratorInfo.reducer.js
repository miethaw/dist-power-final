import { siteControlGeneratorInfoConstants } from '../../_constants';

export function siteControlGeneratorInfo(state = {}, action) {
    switch (action.type) {
        case siteControlGeneratorInfoConstants.GETDATA_REQUEST:
            return {
                loading: true
            };
        case siteControlGeneratorInfoConstants.GETDATA_SUCCESS:
            return {
                generatorId: action.siteControlGeneratorInfo.data.generatorId,
                generatorName: action.siteControlGeneratorInfo.data.generatorName,
                guage: action.siteControlGeneratorInfo.data.guage,
                available: action.siteControlGeneratorInfo.data.available,
                standByGen_start_running_stop: action.siteControlGeneratorInfo.data.standby_generator_panel[0].start_running_stop,
                standByGen_gen_running: action.siteControlGeneratorInfo.data.standby_generator_panel[0].gen_running,
                standByGen_gen_voltage: action.siteControlGeneratorInfo.data.standby_generator_panel[0].gen_voltage,
                standByGen_gen_power: action.siteControlGeneratorInfo.data.standby_generator_panel[0].gen_power,
                standByGen_current: action.siteControlGeneratorInfo.data.standby_generator_panel[0].gen_current,
                standByGen_gen_frequency: action.siteControlGeneratorInfo.data.standby_generator_panel[0].gen_frequency,
                standByGen_fuel_status: action.siteControlGeneratorInfo.data.standby_generator_panel[0].fuel_status,
                standByGen_remu: action.siteControlGeneratorInfo.data.standby_generator_panel[0].remu,
                incPanelIncVoltage: action.siteControlGeneratorInfo.data.incomingPanel.incomingVoltage,
                incPanelGridFrequency: action.siteControlGeneratorInfo.data.incomingPanel.gridFrequency,
                incPanelInverterStatus: action.siteControlGeneratorInfo.data.incomingPanel.inverterStatus,
                sysStatusMainBreaker: action.siteControlGeneratorInfo.data.system_status[0].main_breaker,
                sysStatusRemote: action.siteControlGeneratorInfo.data.system_status[0].remote_byPass_maintenence
            };
        case siteControlGeneratorInfoConstants.GETDATA_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}