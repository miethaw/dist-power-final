import { drawMapConstants } from '../_constants';

export function drawMap(state = {}, action) {
    switch (action.type) {
        case drawMapConstants.GETGENERATORINFO_REQUEST:
            return {
                loading: true
            };
        case drawMapConstants.GETGENERATORINFO_SUCCESS:
            return {
                generatorId: action.drawMap.data.generatorId,
                generatorName: action.drawMap.data.generatorName,
                guage: action.drawMap.data.guage,
                available: action.drawMap.data.available,
                standByGen_start_running_stop: action.drawMap.data.standby_generator_panel[0].start_running_stop,
                standByGen_gen_running: action.drawMap.data.standby_generator_panel[0].gen_running,
                standByGen_gen_voltage: action.drawMap.data.standby_generator_panel[0].gen_voltage,
                standByGen_gen_power: action.drawMap.data.standby_generator_panel[0].gen_power,
                standByGen_current: action.drawMap.data.standby_generator_panel[0].gen_current,
                standByGen_gen_frequency: action.drawMap.data.standby_generator_panel[0].gen_frequency,
                standByGen_fuel_status: action.drawMap.data.standby_generator_panel[0].fuel_status,
                standByGen_remu: action.drawMap.data.standby_generator_panel[0].remu,
                incPanelIncVoltage: action.drawMap.data.incomingPanel.incomingVoltage,
                incPanelGridFrequency: action.drawMap.data.incomingPanel.gridFrequency,
                incPanelInverterStatus: action.drawMap.data.incomingPanel.inverterStatus,
                sysStatusMainBreaker: action.drawMap.data.system_status[0].main_breaker,
                sysStatusRemote: action.drawMap.data.system_status[0].remote_byPass_maintenence
            };
        case drawMapConstants.GETGENERATORINFO_FAILURE:
            return {
                error: action.error
            };

        case drawMapConstants.GETLATLNGS_REQUEST:
            return {
                loading: true
            };
        case drawMapConstants.GETLATLNGS_SUCCESS:
            return {
                latlngs: action.drawMap.data
            };
        case drawMapConstants.GETLATLNGS_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}