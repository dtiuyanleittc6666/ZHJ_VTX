import request, {requestUrl, cancelAjax, downFile} from '../utils/request';
import {VtxUtil} from '../utils/util';
// 取消请求
export const cancelAjaxFun = (url) => {
    let index = requestUrl.indexOf(url);
    if (index > -1) {
        cancelAjax[index].abort();
    }
}

export function formatUrl(url) {
    return '/cloud/zhj/' + url + '.smvc';
}

export function formatMANAGEUrl(url, SUFFIX) {
    if (SUFFIX !== undefined) {
        return '/cloud/management/' + url + '.smvc';
    }
    return '/cloud/management/' + url + '.read';
}

export function formatCLWXFWUrl(url) {
    return '/cloud/clwxfw/api/common/' + url +'.smvc';
}

export function formatCLWXFW_V3_URL(url) {
    return '/cloud/clwxfw/api/np/v3/' + url + '.smvc';
}

export function formatRYGL_V2_URL(url) {
    return '/cloud/rygl/api/np/v2/' + url +'.smvc';
}
export function formatZYRY_URL(url) {
    return '/cloud/zyry/api/v2/' + url +'.smvc';
}
export function formatMILEAGE_URL(url) {
    return '/cloud/ljsy/api/np/' + url + '.smvc';
}

export function formatSSGL_URL(url) {
    return '/cloud/ssgl/' + url + '.smvc';
}
//权限管理

export function formatACCESSPREFIX_URL(url) {
    return '/accessControl/cloud/management/rest/' + url + '.read';
}


export function getUserIdParameter(param = {}) {
        param.userId = VtxUtil.getUrlParam('userId') || testUser.userId
        param.systemCode = VtxUtil.getUrlParam('systemCode') || testUser.systemCode
         console.log('getUserIdParameter',param);
    return {parameters: JSON.stringify(param)}
}


export function getParameter(param = {}) {
    //console.log('testUser',testUser);
    param.tenantId = VtxUtil.getUrlParam('tenantId') || testUser.tenantId,
        param.userId = VtxUtil.getUrlParam('userId') || testUser.userId
    return {parameters: JSON.stringify(param)}
}

export function getParam(param = {}) {
    param.tenantId = VtxUtil.getUrlParam('tenantId') || testUser.tenantId,
        param.userId = VtxUtil.getUrlParam('userId') || testUser.userId
    return param;
}

export const apiUrl = {
    // ===================== 共通接口
    ProjectCompanyInfo:formatUrl('projectCompany/list'),

    loadOrgTreeByPermission: formatUrl('common/getDeptTree'),
    loadDeptCarTree: formatUrl('common/loadDeptCarTree'),
    loadEnumValue: formatUrl('common/loadEnumValue'),
    loadTypeTree: formatUrl('common/loadType'),
    //设备名称
    LoadEquipmentTree:formatSSGL_URL('common/loadEquipmentTree'),
    // 获取人员树（无GPS状态）
    getDeptUserTree: formatMANAGEUrl('rest/np/staff/loadStaffTreeWithPermission'),
    // 获取职位
    getByParamTypeCode: formatMANAGEUrl('rest/np/param/getByParamTypeCode', ''),
    // 根据人员id，得到人员基本信息
    getstaff: formatMANAGEUrl('rest/np/staff/getstaff'),
    //权限管理
    getFunctionsByUsreIdAndSystem:formatACCESSPREFIX_URL('np/function/getFunctionsByUsreIdAndSystem'),

    // ===================== 数据中心
    // 集团业务信息总览
    getOperationalData: formatUrl('item/getOperationalData'),
    // 集团业务体量饼图
    getPieChartData: formatUrl('item/getPieChartData'),
    // 集团业务体量折线图
    getLineChartData: formatUrl('item/getLineChartData'),
    // 根据省份获取项目信息
    getInfoByProvince: formatUrl('item/getInfoByProvince'),
    // 获取项目位置信息
    getCoordinateData: formatUrl('item/getCoordinateData'),
    // 获取单个项目信息
    getItemInfo: formatUrl('item/getItemInfo'),
    // ====================== 项目信息
    getItemInfoPage: formatUrl('item/getItemInfoPage'),
    updateItemInfo: formatUrl('item/updateItemInfo'),
    delItemInfo: formatUrl('item/delItemInfo'),
    getItemReport: formatUrl('item/getItemReport'),
    updateItemReport: formatUrl('item/updateItemReport'),
    delItemReport: formatUrl('item/delItemReport'),

    getTypeCostPage: formatUrl('machineCost/getTypeCostPage'),

    // ====================== 车辆类型绑定
    // 车辆类型绑定分页查询
    getCarTypeBangdingPage: formatUrl('carTypeBangding/pageList'),
    // 新增、修改车辆类型绑定
    updateCarTypeBangding: formatUrl('carTypeBangding/saveOrUpdate'),
    //
    CarNumberUrl: formatUrl('carTypeBangding/getCarCodeList'),
    // 刷新所有数据
    reloadCarTypeBangding: formatUrl('carTypeBangding/reload'),
    // 删除
    deleteCarTypeBangding: formatUrl('carTypeBangding/delete'),
    downloadCarTypeBangding: formatUrl('carTypeBangding/download'),
    //===================== 单车作业月报表
    getCarOperateMonthReportPage: formatUrl('carOperateMonthReport/pageList'),
    updateCarOperateMonthReport: formatUrl('carOperateMonthReport/updateReport'),
    updateCarOperateMonthReportIsAuto: formatUrl('carOperateMonthReport/updateReportIsAuto'),
    updateCollectMonthReportJob: formatUrl('carOperateMonthReport/updateCollectMonthReportJob'),
    //===================== 机械作业车辆作业量月报表
    getCarAssignmentMonthlyReportPage: formatUrl('carAssignmentMonthlyReport/pageList'),
    updateCarAssignmentMonthlyReport: formatUrl('carAssignmentMonthlyReport/update'),
    updateCarAssignmentMonthlyReportIsAuto: formatUrl('carAssignmentMonthlyReport/updateIsAuto'),
    refreshCarAssignmentMonthlyReport: formatUrl('carAssignmentMonthlyReport/refresh'),
    exportCarAssignmentMonthlyReport: formatUrl('carAssignmentMonthlyReport/export'),

    //===================== 单车成本月报表
    getCarCostMonthPage: formatUrl('machineCost/month/getCarCostPage'),
    exportCarCostMonthPage: formatUrl('machineCost/month/export'),
    refreshCarCostMonthPage: formatUrl('machineCost/month/refresh'),
    updateCarCostMonthPage: formatUrl('machineCost/month/update'),
    deleteCarCostMonthPage: formatUrl('machineCost/month/delete'),
    // ===================== 收转运单车成本月表
    // 收转运单车成本月报表分页查询
    getCollectTransCostReportPage: formatUrl('collectTransCostReport/pageList'),
    // 手动刷新车辆成本数据
    refreshCollectTransCostReport: formatUrl('collectTransCostReport/reload'),
    // 新增、修改单车成本月报表
    updateCollectTransCostReport: formatUrl('collectTransCostReport/saveOrUpdate'),
    // 导出数据
    downloadCollectTransCostReport: formatUrl('collectTransCostReport/download'),
    // 导入
    importCollectTransCostReport: formatUrl('collectTransCostReport/importData'),
    // 删除单车成本月报表
    deleteCollectTransCostReport: formatUrl('collectTransCostReport/delete'),
    // ====================== 人员作业类型管理
    // 加载作业类型列表
    loadStaffOpType: formatUrl('staffOpTypeManage/loadOpType'),
    // 加载人员作业类型绑定关系分页
    loadStaffOpTypePage: formatUrl('staffOpTypeManage/loadPage'),
    // 新增人员作业类型绑定关系
    addStaffOpType: formatUrl('staffOpTypeManage/add'),
    // 查看人员作业类型绑定关系
    viewStaffOpType: formatUrl('staffOpTypeManage/view'),
    // 修改人员作业类型绑定关系
    updateStaffOpType: formatUrl('staffOpTypeManage/update'),
    // 删除人员作业类型绑定关系
    removeStaffOpType: formatUrl('staffOpTypeManage/remove'),
    // 删除人员作业类型绑定关系
    refreshStaffOpType: formatUrl('staffOpTypeManage/refresh'),
    // ====================== 月统计
    // 加载人员工时月统计分页
    loadWorkTimePage: formatUrl('staffMonthlyReportManage/loadWorkTimePage'),
    // 导出人员工时月统计
    exportWorkTimePage: formatUrl('staffMonthlyReportManage/exportWorkTimePage'),
    // 修改工时月统计
    updateWorkTime: formatUrl('staffMonthlyReportManage/updateWorkTime'),
    // 手动刷新
    handRefresh: formatUrl('staffMonthlyReportManage/handRefresh'),
    // 加载人员成本月统计分页
    loadCostPage: formatUrl('staffMonthlyReportManage/loadCostPage'),
    // 导出人员成本月统计
    exportCostPage: formatUrl('staffMonthlyReportManage/exportCostPage'),
    // 新增人工扫保单人成本月分析
    saveCostPage: formatUrl('staffMonthlyReportManage/save'),
    // 修改人工扫保单人成本月分析
    updateCostPage: formatUrl('staffMonthlyReportManage/updateHandCost'),
    // 删除手动人工扫保单人成本月分析
    removeCostPage: formatUrl('staffMonthlyReportManage/deleteHandCost'),
    // ====================== 人工费用
    CarCostMoneyUrl: formatUrl('operateCarUserCost/getUserSalary'),//自动计算接口
    CarFirstTypeEnumUrl: formatUrl('common/loadEnumValue'),
    DeptUrl: formatUrl('common/getDeptTree'),
    CarUserCostUrl: formatUrl('operateCarUserCost/getOperateCarUserCostPage'),
    EditUserCostUrl: formatUrl('operateCarUserCost/getOperateCarUserCostById'),
    UpdateCarUserCostUrl: formatUrl('operateCarUserCost/updateOperateCarUserCost'),
    AddCarUserCostUrl: formatUrl('operateCarUserCost/saveOperateCarUserCost'),
    CarPersonExportUrl: formatUrl('operateCarUserCost/exportOperateCarUserCost'),
    //车辆折旧
    DeprExportUrl: formatUrl('carDepreciationMonthStatistics/exportCarDepreciationMonthStatistics'),
    DeprCarUserCostUrl: formatUrl('carDepreciationMonthStatistics/getCarDepreciationMonthStatisticsPage'),
    RefreshCarUserCostUrl: formatUrl('carDepreciationMonthStatistics/updateCarDepreciationMonthStatistics'),
    //车辆保险
    MonthStatisticsExportUrl: formatUrl('carInsuranceMonthStatistics/exportCarInsuranceMonthStatistics'),
    MonthStatisticsCarUserCostUrl: formatUrl('carInsuranceMonthStatistics/getCarInsuranceMonthStatisticsPage'),
    MonthStatisticsRefreshCarUserCostUrl: formatUrl('carInsuranceMonthStatistics/updateCarInsuranceMonthStatistics'),
    //车辆维修
    CarMaintenanceExportUrl: formatUrl('carMaintenanceMonthStatistics/exportCarMaintenanceMonthStatistics'),
    CarMaintenanceCostUrl: formatUrl('carMaintenanceMonthStatistics/getCarMaintenanceMonthStatisticsPage'),
    CarMaintenanceRefreshCostUrl: formatUrl('carMaintenanceMonthStatistics/updateCarMaintenanceMonthStatistics'),
    //车辆加油费用
    CarOilExportUrl: formatUrl('carRefuelMonthStatistics/exportCarRefuelMonthStatistics'),
    CarOilUrl: formatUrl('carRefuelMonthStatistics/getCarRefuelMonthStatisticsPage'),
    CarOilRefreshUrl: formatUrl('carRefuelMonthStatistics/updateCarRefuelMonthStatistics'),
    //车辆加水费用
    CarWaterExportUrl: formatUrl('carWaterMonthStatistics/exportCarWaterMonthStatistics'),
    CarWaterUrl: formatUrl('carWaterMonthStatistics/getCarWaterMonthStatisticsPage'),
    CarWaterRefreshUrl: formatUrl('carWaterMonthStatistics/updateCarWaterMonthStatistics'),
    //人员月薪
    loadMonthlyPayList: formatUrl('monthlyPayManage/loadPage'),
    saveMonthlyPayManage: formatUrl('monthlyPayManage/save'),
    updateMonthlyPayManage: formatUrl('monthlyPayManage/update'),
    loadStaffTreeWithPermission: formatMANAGEUrl('rest/np/staff/loadStaffTreeWithPermission'),
    detailMonthlyPayManage: formatUrl('monthlyPayManage/view'),
    exportMonthlyPayManage: formatUrl('monthlyPayManage/export'),
    // ====================== 管控项目
    // 项目看板首页(人工扫保)
    manualInit: formatUrl('manualSweeping/monthStatistics'),
    // 人工扫保(饼图放大)
    bigPieManual: formatUrl('manualSweeping/bigPieMonthStatistics'),
    // 人工扫保(趋势图放大)
    bigTrendManual: formatUrl('manualSweeping/bigTrendMonthStatistics'),

    // 项目看板首页(机械保洁)
    mechanicalInit: formatUrl('mechanicalSweeping/monthStatistics'),
    // 机械保洁(饼图放大)
    bigPieMechanical: formatUrl('mechanicalSweeping/bigPieMonthStatistics'),
    // 机械保洁(趋势图放大)
    bigTrendMechanical: formatUrl('mechanicalSweeping/bigTrendMonthStatistics'),

    // 项目看板首页(垃圾清运)
    collectInit: formatUrl('collectSweeping/monthStatistics'),
    // 垃圾清运(饼图放大)
    bigPieCollect: formatUrl('collectSweeping/bigPieMonthStatistics'),
    // 垃圾清运(趋势图放大)
    bigTrendCollect: formatUrl('collectSweeping/bigTrendMonthStatistics'),

    // 项目看板首页(公厕)
    latrineInit: formatUrl('toiletSweeping/monthStatistics'),
    // 公厕(饼图放大)
    bigPieLatrine: formatUrl('toiletSweeping/bigPieMonthStatistics'),
    // 公厕(趋势图放大)
    bigTrendLatrine: formatUrl('toiletSweeping/bigTrendMonthStatistics'),

    // 项目看板首页(中转站)
    facilityInit: formatUrl('transferStationSweeping/monthStatistics'),
    // 中转站(饼图放大)
    bigPieFacility: formatUrl('transferStationSweeping/bigPieMonthStatistics'),
    // 中转站(趋势图放大)
    bigTrendFacility: formatUrl('transferStationSweeping/bigTrendMonthStatistics'),

    // 项目看板首页(项目列表接口)
    getProjectInfo: formatUrl('projectKanBan/getProjectInfo'),
    // ====================== 主体项目绑定
    // 主体、项目绑定分页查询
    subjectItemBangdingList: formatUrl('subjectItemBangding/pageList'),
    // 新增、修改主体、项目绑定
    subjectItemBangdingSaveOrUpdate: formatUrl('subjectItemBangding/saveOrUpdate'),
    // 删除记录
    subjectItemBangdingDelete: formatUrl('subjectItemBangding/delete'),
    // 新增时获取主体列表（带是否绑定）
    loadBangdingSubjectList: formatUrl('subjectItemBangding/loadBangdingSubjectList'),
    // 编辑时获取主体列表（带是否绑定）
    loadBangdingItemList: formatUrl('subjectItemBangding/loadBangdingItemList'),
    //项目运营看板
    loadCheckGroupList: formatUrl('subjectManage/loadCheckGroupList'),
    loadSubjectList: formatUrl('subjectManage/loadSubjectList'),
    loadCarType: formatCLWXFWUrl('cloudManage/loadCarType'),
    loadStaffPost: formatUrl('bkKanbanManage/loadStaffPost'),
    loadCarAmt: formatCLWXFW_V3_URL('bkKanbanManage/loadCarAmt'),
    loadLJSYMileage: formatMILEAGE_URL('foreignInterface/getTotalCarMileage'),
    loadStaffAmt: formatUrl('bkKanbanManage/loadStaffAmt'),
    loadWorkHour: formatZYRY_URL('reportManage/getWorkHour'),
    loadLJQY: formatUrl('bkKanbanManage/loadLJQY'),
    loadLJZY: formatUrl('bkKanbanManage/loadLjzy'),
    loadJXBJ: formatUrl('bkKanbanManage/loadJXBJ'),
    loadRGSB: formatZYRY_URL('reportManage/loadRGSB'),
    //标书项目
    initDocData: formatUrl('item/getAllItems'),
    DocList: formatUrl('itemBidingDoc/page'),
    ViewDoc:formatUrl('itemBidingDoc/view'),
    EditDoc:formatUrl('itemBidingDoc/edit'),
    AddDoc:formatUrl('itemBidingDoc/add'),
    NewInitDocData:formatUrl('item/getItems'),
    DeletDoc:formatUrl('itemBidingDoc/delete'),
    //定额
    QuotaList: formatUrl('itemQuotaDoc/page'),
    ViewQuota:formatUrl('itemQuotaDoc/view'),
    AddQuota:formatUrl('itemQuotaDoc/add'),
    EditQuota:formatUrl('itemQuotaDoc/update'),
    DeletQuota:formatUrl('itemQuotaDoc/delete'),
    OverdueQuota:formatUrl('itemQuotaDoc/invalid'),
    //设施等级配置表
    FacilityLevelList:formatUrl('facilityTypeBanding/page'),
    FacilityLevelView:formatUrl('facilityTypeBanding/view'),
    FacilityLevelAdd:formatUrl('facilityTypeBanding/add'),
    FacilityLevelEdit:formatUrl('facilityTypeBanding/edit'),
    FacilityLevelDelet:formatUrl('facilityTypeBanding/delete'),
    FacilityLevelExport:formatUrl('facilityTypeBanding/export'),
    //设施人工费用facilityUserCost/export
    FacilityMoneyList:formatUrl('facilityUserCost/page'),
    FacilityMoneyView:formatUrl('facilityUserCost/view'),
    FacilityMoneyUserCost:formatUrl('facilityUserCost/getUserSalary'),
    FacilityMoneyEdit:formatUrl('facilityUserCost/update'),
    FacilityMoneyExport:formatUrl('facilityUserCost/export'),
    //设施用电费用
    FacilityElectrList:formatUrl('facilityElectricityMonthStatistics/page'),
    FacilityElectrRefesh:formatUrl('facilityElectricityMonthStatistics/update'),
    FacilityElectrExport:formatUrl('facilityElectricityMonthStatistics/export'),
    //设施用水费用
    FacilityWaterList:formatUrl('facilityWaterMonthStatistics/page'),
    FacilityWaterRefesh:formatUrl('facilityWaterMonthStatistics/update'),
    FacilityWaterExport:formatUrl('facilityWaterMonthStatistics/export'),
    //设施维保
    FacilityMaintenanceList:formatUrl('facilityMaintenanceMonthStatistics/page'),
    FacilityMaintenanceRefesh:formatUrl('facilityMaintenanceMonthStatistics/update'),
    FacilityMaintenanceExport:formatUrl('facilityMaintenanceMonthStatistics/export'),
    //设施综合费用表
    FacilitySumCostList:formatUrl('FacilityMonthReport/page'),
    FacilitySumCostExport:formatUrl('FacilityMonthReport/export'),
    FacilitySumDelet:formatUrl('FacilityMonthReport/delete'),
    FacilitySumAdd:formatUrl('FacilityMonthReport/add'),
    FacilitySumView:formatUrl('FacilityMonthReport/view'),
    FacilitySumEdit:formatUrl('FacilityMonthReport/update'),
    FacilitySumRefesh:formatUrl('FacilityMonthReport/refresh'),
   //安全基础数据
    SafetyBaseList:formatUrl('accidents/page'),
    SafetyBaseView:formatUrl('accidents/view'),
    SafetyBaseAdd:formatUrl('accidents/add'),
    SafetyBaseEdit:formatUrl('accidents/update'),
    SafetyBaseExport:formatUrl('accidents/export'),
    SafetyBaseDelet:formatUrl('accidents/delete'),
    //安全管理统计
    SafetyBaseStatisticseList:formatUrl('accidentsManage/page'),
    SafetyBaseStatisticseCount:formatUrl('accidentsManage/cumulative'),
    SafetyBaseStatisticseExport:formatUrl('accidentsManage/export'),
    SafetyBaseDetailInfoView:formatUrl('accidentsManage/detail'),
    SafetyBaseStatisticseEdit:formatUrl('accidentsManage/update'),
    SafetyBaseStatisticseDelet:formatUrl('accidentsManage/delete'),
    SafetyBaseStatisticseAdd:formatUrl('accidentsManage/add'),
    SafetyBaseStatisticseView:formatUrl('accidentsManage/view'),
    //成本管理基础数据表
    CostManagementBasisList:formatUrl('CostManageBaseData/page'),
    CostManagementBasisView:formatUrl('CostManageBaseData/view'),
    CostManagementBasisAdd:formatUrl('CostManageBaseData/add'),
    CostManagementBasisEdit:formatUrl('CostManageBaseData/update'),
    CostManagementBasisExport:formatUrl('CostManageBaseData/export'),
    CostManagementBasisDelet:formatUrl('CostManageBaseData/delete'),
    //成本区域类型基础数据表
    CostAreaTypeList:formatUrl('RegionalTypeBaseData/page'),
    CostAreaTypeView:formatUrl('RegionalTypeBaseData/view'),
    CostAreaTypeAdd:formatUrl('RegionalTypeBaseData/add'),
    CostAreaTypeEdit:formatUrl('RegionalTypeBaseData/update'),
    CostAreaTypeExport:formatUrl('RegionalTypeBaseData/export'),
    CostAreaTypeDelet:formatUrl('RegionalTypeBaseData/delete'),
    //成本管理统计数据表
    CostManagementStatisticsList:formatUrl('CostManageMonthStatistics/page'),
    CostManagementStatisticsView:formatUrl('CostManageMonthStatistics/view'),
    CostManagementStatisticsAdd:formatUrl('CostManageMonthStatistics/add'),
    CostManagementStatisticsEdit:formatUrl('CostManageMonthStatistics/update'),
    CostManagementStatisticsExport:formatUrl('CostManageMonthStatistics/export'),
    CostManagementStatisticsDelet:formatUrl('CostManageMonthStatistics/delete'),
    //成本消耗基础数据CostConsumptionBase
    CostConsumptionBaseList:formatUrl('CostConsumeBaseData/page'),
    CostConsumptionBaseView:formatUrl('CostConsumeBaseData/view'),
    CostConsumptionBaseAdd:formatUrl('CostConsumeBaseData/add'),
    CostConsumptionBaseEdit:formatUrl('CostConsumeBaseData/update'),
    CostConsumptionBaseExport:formatUrl('CostConsumeBaseData/export'),
    CostConsumptionBaseDelet:formatUrl('CostConsumeBaseData/delete'),
    //成本消耗统计数据 CostConsumeStatistics/page
    CostConsumeStatisticsList:formatUrl('CostConsumeStatistics/page'),
    CostConsumeStatisticsView:formatUrl('CostConsumeStatistics/view'),
    CostConsumeStatisticsAdd:formatUrl('CostConsumeStatistics/add'),
    CostConsumeStatisticsEdit:formatUrl('CostConsumeStatistics/update'),
    CostConsumeStatisticsExport:formatUrl('CostConsumeStatistics/export'),
    CostConsumeStatisticsDelet:formatUrl('CostConsumeStatistics/delete'),
    //成本车辆机械数据表
    CostVehicleMachineryList:formatUrl('CostCarMachineData/page'),
    CostVehicleMachineryView:formatUrl('CostCarMachineData/view'),
    CostVehicleMachineryAdd:formatUrl('CostCarMachineData/add'),
    CostVehicleMachineryEdit:formatUrl('CostCarMachineData/update'),
    CostVehicleMachineryExport:formatUrl('CostCarMachineData/export'),
    CostVehicleMachineryDelet:formatUrl('CostCarMachineData/delete'),
    CostVehicleMachinerySpecialExport:formatUrl('CostCarMachineData/specialExport'),
    //成本车辆收转运数据表
    CostVehicleCollectionTransferList:formatUrl('CostCarCollTransData/page'),
    CostVehicleCollectionTransferView:formatUrl('CostCarCollTransData/view'),
    CostVehicleCollectionTransferAdd:formatUrl('CostCarCollTransData/add'),
    CostVehicleCollectionTransferEdit:formatUrl('CostCarCollTransData/update'),
    CostVehicleCollectionTransferExport:formatUrl('CostCarCollTransData/export'),
    CostVehicleCollectionTransferDelet:formatUrl('CostCarCollTransData/delete'),
    CostVehicleCollectionTransferSpecialExport:formatUrl('CostCarCollTransData/specialExport'),
    //质量管甲方考核数据  QuaManageAssessment
    QuaManageAssessmentList:formatUrl('QualityManageStatistics/page'),
    QuaManageAssessmentView:formatUrl('QualityManageStatistics/view'),
    QuaManageAssessmentAdd:formatUrl('QualityManageStatistics/add'),
    QuaManageAssessmentEdit:formatUrl('QualityManageStatistics/update'),
    QuaManageAssessmentExport:formatUrl('QualityManageStatistics/export'),
    QuaManageAssessmentDelet:formatUrl('QualityManageStatistics/delete'),
    //质量管理甲方调查问卷
    QualityManageAQuesList:formatUrl('QualityManageAQues/page'),
    QualityManageAQuesView:formatUrl('QualityManageAQues/view'),
    QualityManageAQuesAdd:formatUrl('QualityManageAQues/add'),
    QualityManageAQuesEdit:formatUrl('QualityManageAQues/update'),
    QualityManageAQuesExport:formatUrl('QualityManageAQues/export'),
    QualityManageAQuesDelet:formatUrl('QualityManageAQues/delete'),
    //质量管理群众调查问卷
    QualityManageMQuesList:formatUrl('QualityManageMQues/page'),
    QualityManageMQuesView:formatUrl('QualityManageMQues/view'),
    QualityManageMQuesAdd:formatUrl('QualityManageMQues/add'),
    QualityManageMQuesEdit:formatUrl('QualityManageMQues/update'),
    QualityManageMQuesExport:formatUrl('QualityManageMQues/export'),
    QualityManageMQuesDelet:formatUrl('QualityManageMQues/delete'),
    //质量管理项目部自检 QualityManageProjectCheck
    QualityManageProjectCheckList:formatUrl('QualityManageProjectCheck/page'),
    QualityManageProjectCheckView:formatUrl('QualityManageProjectCheck/view'),
    QualityManageProjectCheckAdd:formatUrl('QualityManageProjectCheck/add'),
    QualityManageProjectCheckEdit:formatUrl('QualityManageProjectCheck/update'),
    QualityManageProjectCheckExport:formatUrl('QualityManageProjectCheck/export'),
    QualityManageProjectCheckDelet:formatUrl('QualityManageProjectCheck/delete'),
    //质量管理运营部自检
    QualityManageOperateCheckList:formatUrl('QualityManageOperateCheck/page'),
    QualityManageOperateCheckView:formatUrl('QualityManageOperateCheck/view'),
    QualityManageOperateCheckAdd:formatUrl('QualityManageOperateCheck/add'),
    QualityManageOperateCheckEdit:formatUrl('QualityManageOperateCheck/update'),
    QualityManageOperateCheckExport:formatUrl('QualityManageOperateCheck/export'),
    QualityManageOperateCheckDelet:formatUrl('QualityManageOperateCheck/delete'),
    //质量管理车队自检
    QualityManageFleetCheckList:formatUrl('QualityManageFleetCheck/page'),
    QualityManageFleetCheckView:formatUrl('QualityManageFleetCheck/view'),
    QualityManageFleetCheckAdd:formatUrl('QualityManageFleetCheck/add'),
    QualityManageFleetCheckEdit:formatUrl('QualityManageFleetCheck/update'),
    QualityManageFleetCheckExport:formatUrl('QualityManageFleetCheck/export'),
    QualityManageFleetCheckDelet:formatUrl('QualityManageFleetCheck/delete'),
    //质量管理扫保所自检 QualityManageSweepCheck
    QualityManageSweepCheckList:formatUrl('QualityManageSweepCheck/page'),
    QualityManageSweepCheckView:formatUrl('QualityManageSweepCheck/view'),
    QualityManageSweepCheckAdd:formatUrl('QualityManageSweepCheck/add'),
    QualityManageSweepCheckEdit:formatUrl('QualityManageSweepCheck/update'),
    QualityManageSweepCheckExport:formatUrl('QualityManageSweepCheck/export'),
    QualityManageSweepCheckDelet:formatUrl('QualityManageSweepCheck/delete'),
    //质量管理媒体报道 QualityManageMediaReport
    QualityManageMediaReportList:formatUrl('QualityManageMediaReport/page'),
    QualityManageMediaReportView:formatUrl('QualityManageMediaReport/view'),
    QualityManageMediaReportAdd:formatUrl('QualityManageMediaReport/add'),
    QualityManageMediaReportEdit:formatUrl('QualityManageMediaReport/update'),
    QualityManageMediaReportExport:formatUrl('QualityManageMediaReport/export'),
    QualityManageMediaReportDelet:formatUrl('QualityManageMediaReport/delete'),
    //质量管理统计表 QualityManageStatisticsData
    QualityManageStatisticsDataList:formatUrl('QualityManageStatisticsData/page'),
    QualityManageStatisticsDataView:formatUrl('QualityManageStatisticsData/view'),
    QualityManageStatisticsDataAdd:formatUrl('QualityManageStatisticsData/add'),
    QualityManageStatisticsDataEdit:formatUrl('QualityManageStatisticsData/update'),
    QualityManageStatisticsDataExport:formatUrl('QualityManageStatisticsData/export'),
    QualityManageStatisticsDataDelet:formatUrl('QualityManageStatisticsData/delete'),
    //项目公司信息维护 projectCompany
    projectCompanyList:formatUrl('projectCompany/page'),
    projectCompanyView:formatUrl('projectCompany/view'),
    projectCompanyAdd:formatUrl('projectCompany/add'),
    projectCompanyEdit:formatUrl('projectCompany/update'),
    projectCompanyExport:formatUrl('projectCompany/export'),
    projectCompanyDelet:formatUrl('projectCompany/delete'),

    postMaintenanceList:formatUrl('postMaintenance/page'),
    postMaintenanceView:formatUrl('postMaintenance/view'),
    postMaintenanceAdd:formatUrl('postMaintenance/add'),
    postMaintenanceEdit:formatUrl('postMaintenance/update'),
    postMaintenanceExport:formatUrl('postMaintenance/export'),
    postMaintenanceDelet:formatUrl('postMaintenance/delete'),

    projectBaseList:formatUrl('projectBase/page'),
    projectBaseView:formatUrl('projectBase/view'),
    projectBaseEdit:formatUrl('projectBase/update'),
    projectBaseExport:formatUrl('projectBase/export'),
    projectBaseState:formatUrl('projectBase/state'),

    wagesHoursList:formatUrl('wagesHours/page'),
    wagesHoursView:formatUrl('wagesHours/view'),
    wagesHoursExport:formatUrl('wagesHours/export'),
    wagesHoursDelet:formatUrl('wagesHours/delete'),
    wagesHoursEdit:formatUrl('wagesHours/update'),
    wagesHoursPostList:formatUrl('postMaintenance/list'),

    BusinessLineDisplayList:formatUrl('wagesHours/personDisplay'),
    BusinessLineDisplayExport:formatUrl('wagesHours/exportPersonDisplay'),

    PersonOrganizationDisplayList:formatUrl('wagesHours/personDisplay'),
    PersonOrganizationDisplayExport:formatUrl('wagesHours/exportPersonDisplay'),

    PersonCostDisplayList:formatUrl('wagesHours/costDisplay'),
    PersonCostDisplayExport:formatUrl('wagesHours/exportCostDisplay'),

    UnitHourConsumptionList:formatUrl('wagesHours/hoursDisplay'),
    UnitHourConsumptionExport:formatUrl('wagesHours/exportHoursDisplay'),

    UnitManCostConsumptionDisplayList:formatUrl('wagesHours/costAreaDisplay'),
    UnitManCostConsumptionDisplayExport:formatUrl('wagesHours/exportCostAreaDisplay'),
    //项目部们管理   projectDeptBind
    ProjectItemList:formatUrl('item/getItemsList'),
    projectDeptBindList:formatUrl('projectDeptBind/page'),
    projectDeptBindView:formatUrl('projectDeptBind/view'),
    projectDeptBindDelet:formatUrl('projectDeptBind/delete'),
    projectDeptBindEdit:formatUrl('projectDeptBind/update'),
    projectDeptBindAdd:formatUrl('projectDeptBind/add'),
     //项目名称接口 
    getNewProjectInfo: formatUrl('projectDeptBind/getProjectInfo'),
    
}

// ====================== 主体项目绑定
//项目公司信息
export async function ProjectCompanyInfo(arg) {
    cancelAjaxFun(apiUrl.ProjectCompanyInfo);
    return request(apiUrl.ProjectCompanyInfo,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

// 主体、项目绑定分页查询
export async function subjectItemBangdingList(arg) {
    cancelAjaxFun(apiUrl.subjectItemBangdingList);
    return request(apiUrl.subjectItemBangdingList,
        {
            body: getParam(arg),
        });
}

// 新增、修改主体、项目绑定
export async function subjectItemBangdingSaveOrUpdate(arg) {
    cancelAjaxFun(apiUrl.subjectItemBangdingSaveOrUpdate);
    return request(apiUrl.subjectItemBangdingSaveOrUpdate,
        {
            body: getParam(arg),
            method: 'POST'
        });
}

// 删除记录
export async function subjectItemBangdingDelete(arg) {
    cancelAjaxFun(apiUrl.subjectItemBangdingDelete);
    return request(apiUrl.subjectItemBangdingDelete,
        {
            body: getParam(arg),
            method: 'POST'
        });
}

// 新增时获取主体列表（带是否绑定）
export async function loadBangdingSubjectList(arg) {
    cancelAjaxFun(apiUrl.loadBangdingSubjectList);
    return request(apiUrl.loadBangdingSubjectList,
        {
            body: getParam(arg),
        });
}

// 编辑时获取主体列表（带是否绑定）
export async function loadBangdingItemList(arg) {
    cancelAjaxFun(apiUrl.loadBangdingItemList);
    return request(apiUrl.loadBangdingItemList,
        {
            body: getParam(arg),
        });
}

//车辆人员费用
export async function CarCostMoney(arg) {
    cancelAjaxFun(apiUrl.CarCostMoneyUrl);
    return request(apiUrl.CarCostMoneyUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function DeprExport(arg) {
    return downFile(apiUrl.DeprExportUrl,
        {
            body: getParam(arg),
        });
}

export async function RefreshCarUserCost(arg) {
    cancelAjaxFun(apiUrl.RefreshCarUserCostUrl);
    return request(apiUrl.RefreshCarUserCostUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function DeprCarUserCost(arg) {
    cancelAjaxFun(apiUrl.DeprCarUserCostUrl);
    return request(apiUrl.DeprCarUserCostUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

//保险
export async function MonthStatisticsExport(arg) {
    return downFile(apiUrl.MonthStatisticsExportUrl,
        {
            body: getParam(arg),
        });
}

export async function MonthStatisticsCarUserCost(arg) {
    cancelAjaxFun(apiUrl.MonthStatisticsCarUserCostUrl);
    return request(apiUrl.MonthStatisticsCarUserCostUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function MonthStatisticsRefreshCarUserCost(arg) {
    cancelAjaxFun(apiUrl.MonthStatisticsRefreshCarUserCostUrl);
    return request(apiUrl.MonthStatisticsRefreshCarUserCostUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

//车辆维修
export async function CarMaintenanceExport(arg) {
    return downFile(apiUrl.CarMaintenanceExportUrl,
        {
            body: getParam(arg),
        });
}

export async function CarMaintenanceCost(arg) {
    cancelAjaxFun(apiUrl.CarMaintenanceCostUrl);
    return request(apiUrl.CarMaintenanceCostUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function CarMaintenanceRefreshCost(arg) {
    cancelAjaxFun(apiUrl.CarMaintenanceRefreshCostUrl);
    return request(apiUrl.CarMaintenanceRefreshCostUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

//加水
export async function CarWaterExport(arg) {
    return downFile(apiUrl.CarWaterExportUrl,
        {
            body: getParam(arg),
        });
}

export async function CarWater(arg) {
    cancelAjaxFun(apiUrl.CarWaterUrl);
    return request(apiUrl.CarWaterUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function CarWaterRefresh(arg) {
    cancelAjaxFun(apiUrl.CarWaterRefreshUrl);
    return request(apiUrl.CarWaterRefreshUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

//加油
export async function CarOilExport(arg) {
    return downFile(apiUrl.CarOilExportUrl,
        {
            body: getParam(arg),
        });
}

export async function CarOil(arg) {
    cancelAjaxFun(apiUrl.CarOilUrl);
    return request(apiUrl.CarOilUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function CarOilRefresh(arg) {
    cancelAjaxFun(apiUrl.CarOilRefreshUrl);
    return request(apiUrl.CarOilRefreshUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

//人工
export async function CarPersonExport(arg) {
    return downFile(apiUrl.CarPersonExportUrl,
        {
            body: getParam(arg),
        });
}

export async function AddCarUserCost(arg) {
    cancelAjaxFun(apiUrl.AddCarUserCostUrl);
    return request(apiUrl.AddCarUserCostUrl,
        {
            body: getParam(arg),
            method: 'POST'
        });
}

export async function UpdateCarUserCost(arg) {
    cancelAjaxFun(apiUrl.UpdateCarUserCostUrl);
    return request(apiUrl.UpdateCarUserCostUrl,
        {
            body: getParam(arg),
            method: 'POST'
        });
}

export async function EditUserCost(arg) {
    cancelAjaxFun(apiUrl.EditUserCostUrl);
    return request(apiUrl.EditUserCostUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function CarFirstTypeEnum(arg) {
    cancelAjaxFun(apiUrl.CarFirstTypeEnumUrl);
    return request(apiUrl.CarFirstTypeEnumUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function CarNumber(arg) {
    cancelAjaxFun(apiUrl.CarNumberUrl);
    return request(apiUrl.CarNumberUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function DeptTree(arg) {
    cancelAjaxFun(apiUrl.DeptUrl);
    return request(apiUrl.DeptUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function CarUserCostList(arg) {
    cancelAjaxFun(apiUrl.CarUserCostUrl);
    return request(apiUrl.CarUserCostUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

// ========================== 车辆类型绑定
// 导出数据
export async function downloadCarTypeBangding(arg) {
    return downFile(apiUrl.downloadCarTypeBangding,
        {
            body: getParam(arg),
            method: 'POST'
        });
}

// 新增、修改车辆类型绑定
export async function updateCarTypeBangding(arg) {
    cancelAjaxFun(apiUrl.updateCarTypeBangding);
    return request(apiUrl.updateCarTypeBangding,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

// 刷新所有数据
export async function reloadCarTypeBangding(arg) {
    cancelAjaxFun(apiUrl.reloadCarTypeBangding);
    return request(apiUrl.reloadCarTypeBangding,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function deleteCarTypeBangding(arg){
    cancelAjaxFun(apiUrl.deleteCarTypeBangding);
    return request(apiUrl.deleteCarTypeBangding,
        {
            body:getParam(arg),
            method: 'GET'
        });
}
// 车辆类型绑定分页查询
export async function getCarTypeBangdingPage(arg) {
    cancelAjaxFun(apiUrl.getCarTypeBangdingPage);
    return request(apiUrl.getCarTypeBangdingPage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

// ================共同方法==========
export async function getDeptUserTree(arg) {
    arg = Object.assign({
        isLeave: "0", // 在职 0、离职 1、退休 2
        isControlPermission: "1", // 选填"0"或者不传不控制，"1"控制权限
        order: null, //null或者1按照orderIndex升序排，2按照姓名全拼升序排
    }, arg)
    cancelAjaxFun(apiUrl.getDeptUserTree);
    return request(apiUrl.getDeptUserTree,
        {
            body: getParameter(arg),
            method: 'GET'
        });
}

export async function getByParamTypeCode(arg) {
    return request(apiUrl.getByParamTypeCode,
        {
            body: getParameter(arg),
            method: 'GET'
        });
}

export async function getstaff(arg) {
    return request(apiUrl.getstaff,
        {
            body: getParameter(arg),
            method: 'GET'
        });
}

export async function loadDeptCarTree(arg) {
    cancelAjaxFun(apiUrl.loadDeptCarTree);
    return request(apiUrl.loadDeptCarTree,
        {
            body: getParam(arg),
            method: 'GET'
        });
}


export async function loadTypeTree(arg) {
    cancelAjaxFun(apiUrl.loadTypeTree);
    return request(apiUrl.loadTypeTree,
        {
            body: getParam(arg),
            method: 'GET'
        });
}


export async function getTypeCostPage(arg) {
    cancelAjaxFun(apiUrl.getTypeCostPage);
    return request(apiUrl.getTypeCostPage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function loadOrgTreeByPermission(arg) {
    return request(apiUrl.loadOrgTreeByPermission,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function updateItemReport(arg) {
    cancelAjaxFun(apiUrl.updateItemReport);
    return request(apiUrl.updateItemReport,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function delItemReport(arg) {
    cancelAjaxFun(apiUrl.delItemReport);
    return request(apiUrl.delItemReport,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function getItemInfoPage(arg) {
    cancelAjaxFun(apiUrl.getItemInfoPage);
    return request(apiUrl.getItemInfoPage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function updateItemInfo(arg) {
    cancelAjaxFun(apiUrl.updateItemInfo);
    return request(apiUrl.updateItemInfo,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function delItemInfo(arg) {
    cancelAjaxFun(apiUrl.delItemInfo);
    return request(apiUrl.delItemInfo,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function getItemReport(arg) {
    cancelAjaxFun(apiUrl.getItemReport);
    return request(apiUrl.getItemReport,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function loadEnumValue(arg) {
    // cancelAjaxFun(apiUrl.loadEnumValue);
    return request(apiUrl.loadEnumValue,
        {
            body: getParam(arg),
            method: 'GET'
        });
}


export async function getOperationalData(arg) {
    cancelAjaxFun(apiUrl.getOperationalData);
    return request(apiUrl.getOperationalData,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function getPieChartData(arg) {
    cancelAjaxFun(apiUrl.getPieChartData);
    return request(apiUrl.getPieChartData,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function getLineChartData(arg) {
    cancelAjaxFun(apiUrl.getLineChartData);
    return request(apiUrl.getLineChartData,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function getInfoByProvince(arg) {
    cancelAjaxFun(apiUrl.getInfoByProvince);
    return request(apiUrl.getInfoByProvince,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function getCoordinateData(arg) {
    cancelAjaxFun(apiUrl.getCoordinateData);
    return request(apiUrl.getCoordinateData,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function getItemInfo(arg) {
    cancelAjaxFun(apiUrl.getItemInfo);
    return request(apiUrl.getItemInfo,
        {
            body: getParam(arg),
            method: 'GET'
        });
}
export async function getFunctionsByUsreIdAndSystem(arg) {
    return request(apiUrl.getFunctionsByUsreIdAndSystem,
        {
            body:getUserIdParameter(arg),
            method: 'GET'
        });
}

//===================== 单车作业月报表
export async function getCarOperateMonthReportPage(arg) {
    cancelAjaxFun(apiUrl.getCarOperateMonthReportPage);
    return request(apiUrl.getCarOperateMonthReportPage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function updateCarOperateMonthReport(arg) {
    cancelAjaxFun(apiUrl.updateCarOperateMonthReport);
    return request(apiUrl.updateCarOperateMonthReport,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function updateCarOperateMonthReportIsAuto(arg) {
    cancelAjaxFun(apiUrl.updateCarOperateMonthReportIsAuto);
    return request(apiUrl.updateCarOperateMonthReportIsAuto,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function updateCollectMonthReportJob(arg) {
    cancelAjaxFun(apiUrl.updateCollectMonthReportJob);
    return request(apiUrl.updateCollectMonthReportJob,
        {
            body: getParam(arg),
            method: 'GET'
        });
}


//===================== 机械作业车辆作业量月报表
export async function getCarAssignmentMonthlyReportPage(arg) {
    cancelAjaxFun(apiUrl.getCarAssignmentMonthlyReportPage);
    return request(apiUrl.getCarAssignmentMonthlyReportPage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function updateCarAssignmentMonthlyReport(arg) {
    cancelAjaxFun(apiUrl.updateCarAssignmentMonthlyReport);
    return request(apiUrl.updateCarAssignmentMonthlyReport,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function updateCarAssignmentMonthlyReportIsAuto(arg) {
    cancelAjaxFun(apiUrl.updateCarAssignmentMonthlyReportIsAuto);
    return request(apiUrl.updateCarAssignmentMonthlyReportIsAuto,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function refreshCarAssignmentMonthlyReport(arg) {
    cancelAjaxFun(apiUrl.refreshCarAssignmentMonthlyReport);
    return request(apiUrl.refreshCarAssignmentMonthlyReport,
        {
            body: getParam(arg),
            method: 'GET'
        });
}
export async function  exportCarAssignmentMonthlyReport(arg){
    return downFile(apiUrl.exportCarAssignmentMonthlyReport,
        {
            body: getParam(arg),
        });
}
//===================== 单车成本月报表
export async function getCarCostMonthPage(arg) {
    cancelAjaxFun(apiUrl.getCarCostMonthPage);
    return request(apiUrl.getCarCostMonthPage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}
export async function exportCarCostMonthPage(arg) {
    return downFile(apiUrl.exportCarCostMonthPage,
        {

            body: getParam(arg)
        });
}
export async function refreshCarCostMonthPage(arg) {
    return request(apiUrl.refreshCarCostMonthPage,
        {

            body: getParam(arg),
            method: 'GET'
        });
}
export async function updateCarCostMonthPage(arg) {
    return request(apiUrl.updateCarCostMonthPage,
        {

            body: getParam(arg),
            method: 'GET'
        });
}
export async function deleteCarCostMonthPage(arg) {
    return request(apiUrl.deleteCarCostMonthPage,
        {

            body: getParam(arg),
            method: 'GET'
        });
}
// ===================== 收转运单车成本月表
// 收转运单车成本月报表分页查询
export async function getCollectTransCostReportPage(arg) {
    cancelAjaxFun(apiUrl.getCollectTransCostReportPage);
    return request(apiUrl.getCollectTransCostReportPage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

// 手动刷新车辆成本数据
export async function refreshCollectTransCostReport(arg) {
    cancelAjaxFun(apiUrl.refreshCollectTransCostReport);
    return request(apiUrl.refreshCollectTransCostReport,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

// 新增、修改单车成本月报表
export async function updateCollectTransCostReport(arg) {
    cancelAjaxFun(apiUrl.updateCollectTransCostReport);
    return request(apiUrl.updateCollectTransCostReport,
        {
            body: getParam(arg),
            method: 'POST'
        });
}

// 导出数据
export async function downloadCollectTransCostReport(arg) {
    return downFile(apiUrl.downloadCollectTransCostReport,
        {

            body: getParam(arg)
        });
}


// 删除单车成本月报表
export async function deleteCollectTransCostReport(arg) {
    cancelAjaxFun(apiUrl.deleteCollectTransCostReport);
    return request(apiUrl.deleteCollectTransCostReport,
        {
            body: getParam(arg),
            method: 'POST'
        });
}

// =====================


export async function loadStaffOpType(arg) {
    cancelAjaxFun(apiUrl.loadStaffOpType);
    return request(apiUrl.loadStaffOpType,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function loadStaffOpTypePage(arg) {
    cancelAjaxFun(apiUrl.loadStaffOpTypePage);
    return request(apiUrl.loadStaffOpTypePage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function addStaffOpType(arg) {
    cancelAjaxFun(apiUrl.addStaffOpType);
    return request(apiUrl.addStaffOpType,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function viewStaffOpType(arg) {
    cancelAjaxFun(apiUrl.viewStaffOpType);
    return request(apiUrl.viewStaffOpType,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function updateStaffOpType(arg) {
    cancelAjaxFun(apiUrl.updateStaffOpType);
    return request(apiUrl.updateStaffOpType,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function removeStaffOpType(arg) {
    cancelAjaxFun(apiUrl.removeStaffOpType);
    return request(apiUrl.removeStaffOpType,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function refreshStaffOpType(arg) {
    cancelAjaxFun(apiUrl.refreshStaffOpType);
    return request(apiUrl.refreshStaffOpType,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function loadWorkTimePage(arg) {
    cancelAjaxFun(apiUrl.loadWorkTimePage);
    return request(apiUrl.loadWorkTimePage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function updateWorkTime(arg) {
    cancelAjaxFun(apiUrl.updateWorkTime);
    return request(apiUrl.updateWorkTime,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function handRefresh(arg) {
    cancelAjaxFun(apiUrl.handRefresh);
    return request(apiUrl.handRefresh,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function loadCostPage(arg) {
    cancelAjaxFun(apiUrl.loadCostPage);
    return request(apiUrl.loadCostPage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function exportCost(arg) {
    cancelAjaxFun(apiUrl.exportCost);
    return request(apiUrl.exportCost,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function exportCostPage(arg) {
    return downFile(apiUrl.exportCostPage,
        {

            body: getParam(arg)
        });
}

export async function exportWorkTimePage(arg) {
    return downFile(apiUrl.exportWorkTimePage,
        {
            body: getParam(arg)
        });
}

export async function saveCostPage(arg) {
    cancelAjaxFun(apiUrl.saveCostPage);
    return request(apiUrl.saveCostPage,
        {
            body: getParam(arg),
            method: 'POST'
        });
}

export async function updateCostPage(arg) {
    cancelAjaxFun(apiUrl.updateCostPage);
    return request(apiUrl.updateCostPage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function removeCostPage(arg) {
    cancelAjaxFun(apiUrl.removeCostPage);
    return request(apiUrl.removeCostPage,
        {
            body: getParam(arg),
            method: 'POST'
        });
}


/*------------------------人员月薪------------------------------*/
export async function loadMonthlyPayList(arg) {
    cancelAjaxFun(apiUrl.loadMonthlyPayList);
    return request(apiUrl.loadMonthlyPayList,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function saveMonthlyPayManage(arg) {
    cancelAjaxFun(apiUrl.saveMonthlyPayManage);
    return request(apiUrl.saveMonthlyPayManage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function updateMonthlyPayManage(arg) {
    cancelAjaxFun(apiUrl.updateMonthlyPayManage);
    return request(apiUrl.updateMonthlyPayManage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}


export async function detailMonthlyPayManage(arg) {
    cancelAjaxFun(apiUrl.detailMonthlyPayManage);
    return request(apiUrl.detailMonthlyPayManage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

export async function exportMonthlyPayManage(arg) {
    return downFile(apiUrl.exportMonthlyPayManage,
        {
            body: getParam(arg),
            method: 'GET'
        });
}

//管控项目
export async function mechanicaInitl(arg) {
    cancelAjaxFun(apiUrl.mechanicaInitlUrl);
    return request(apiUrl.mechanicaInitlUrl,
        {
            body: getParam(arg),
            method: 'GET'
        });
}
// ====================== 管控项目
// 项目看板首页(人工扫保)
export async function manualInit(arg){
    cancelAjaxFun(apiUrl.manualInit);
    return request(apiUrl.manualInit,
        {
            body:getParam(arg),
            method: 'GET'
        });
}
// 人工扫保(饼图放大)
export async function bigPieManual(arg){
    cancelAjaxFun(apiUrl.bigPieManual);
    return request(apiUrl.bigPieManual,
        {
            body:getParam(arg),
            method: 'GET'
        });
}
// 人工扫保(趋势图放大)
export async function bigTrendManual(arg){
    cancelAjaxFun(apiUrl.bigTrendManual);
    return request(apiUrl.bigTrendManual,
        {
            body:getParam(arg),
            method: 'GET'
        });
}
// 项目看板首页(机械保洁)
export async function mechanicalInit(arg){
    cancelAjaxFun(apiUrl.mechanicalInit);
    return request(apiUrl.mechanicalInit,
        {
            body:getParam(arg),
            method: 'GET'
        });
}
// 机械保洁(饼图放大)
export async function bigPieMechanical(arg){
    cancelAjaxFun(apiUrl.bigPieMechanical);
    return request(apiUrl.bigPieMechanical,
        {
            body:getParam(arg),
            method: 'GET'
        });
}
// 机械保洁(趋势图放大)
export async function bigTrendMechanical(arg){
    cancelAjaxFun(apiUrl.bigTrendMechanical);
    return request(apiUrl.bigTrendMechanical,
        {
            body:getParam(arg),
            method: 'GET'
        });
}


// 项目看板首页(收转运)
export async function collectInit(arg){
    cancelAjaxFun(apiUrl.collectInit);
    return request(apiUrl.collectInit,
        {
            body:getParam(arg),
            method: 'GET'
        });
}
// 收转运(饼图放大)
export async function bigPieCollect(arg){
    cancelAjaxFun(apiUrl.bigPieCollect);
    return request(apiUrl.bigPieCollect,
        {
            body:getParam(arg),
            method: 'GET'
        });
}
// 收转运(趋势图放大)
export async function bigTrendCollect(arg){
    cancelAjaxFun(apiUrl.bigTrendCollect);
    return request(apiUrl.bigTrendCollect,
        {
            body:getParam(arg),
            method: 'GET'
        });
}

// 项目看板首页(公厕)
export async function latrineInit(arg){
    cancelAjaxFun(apiUrl.latrineInit);
    return request(apiUrl.latrineInit,
        {
            body:getParam(arg),
            method: 'GET'
        });
}
// 公厕(饼图放大)
export async function bigPieLatrine(arg){
    cancelAjaxFun(apiUrl.bigPieLatrine);
    return request(apiUrl.bigPieLatrine,
        {
            body:getParam(arg),
            method: 'GET'
        });
}
// 公厕(趋势图放大)
export async function bigTrendLatrine(arg){
    cancelAjaxFun(apiUrl.bigTrendLatrine);
    return request(apiUrl.bigTrendLatrine,
        {
            body:getParam(arg),
            method: 'GET'
        });
}

// 项目看板首页(中转站)
export async function facilityInit(arg){
    cancelAjaxFun(apiUrl.facilityInit);
    return request(apiUrl.facilityInit,
        {
            body:getParam(arg),
            method: 'GET'
        });
}
// 中转站(饼图放大)
export async function bigPieFacility(arg){
    cancelAjaxFun(apiUrl.bigPieFacility);
    return request(apiUrl.bigPieFacility,
        {
            body:getParam(arg),
            method: 'GET'
        });
}
// 中转站(趋势图放大)
export async function bigTrendFacility(arg){
    cancelAjaxFun(apiUrl.bigTrendFacility);
    return request(apiUrl.bigTrendFacility,
        {
            body:getParam(arg),
            method: 'GET'
        });
}


// 项目看板首页(项目列表接口)
export async function getProjectInfo(arg){
    cancelAjaxFun(apiUrl.getProjectInfo);
    return request(apiUrl.getProjectInfo,
        {
            body:getParam(arg),
            method: 'GET'
        });
}
//项目运营看板
export async function loadCheckGroupList(arg) {
    cancelAjaxFun(apiUrl.loadCheckGroupList);
    return request(apiUrl.loadCheckGroupList,
        {
            body: getParam(arg),
            method: 'GET'
        });
}
export async function loadSubjectList(arg) {
    cancelAjaxFun(apiUrl.loadSubjectList);
    return request(apiUrl.loadSubjectList,
        {
            body: getParam(arg),
            method: 'GET'
        });
}
export async function loadCarType(arg) {
    cancelAjaxFun(apiUrl.loadCarType);
    return request(apiUrl.loadCarType, {
        body: getParam(arg),
        method: 'POST',
    })
}

export async function loadStaffPost(arg) {
    cancelAjaxFun(apiUrl.loadStaffPost);
    return request(apiUrl.loadStaffPost, {
        body: getParam(arg),
        method: 'POST',
    })
}

export async function loadCarAmt(arg) {
    cancelAjaxFun(apiUrl.loadCarAmt);
    return request(apiUrl.loadCarAmt, {
        body: getParam(arg),
        method: 'POST',
    })
}

export async function loadLJSYMileage(arg) {
    cancelAjaxFun(apiUrl.loadLJSYMileage);
    return request(apiUrl.loadLJSYMileage, {
        body: getParam(arg),
        method: 'POST',
    })
}

export async function loadStaffAmt(arg) {
    cancelAjaxFun(apiUrl.loadStaffAmt);
    return request(apiUrl.loadStaffAmt, {
        body: getParam(arg),
        method: 'POST',
    })
}

export async function loadWorkHour(arg) {
    cancelAjaxFun(apiUrl.loadWorkHour);
    return request(apiUrl.loadWorkHour, {
        body: getParam(arg),
        method: 'POST',
    })
}

export async function loadLJQY(arg) {
    cancelAjaxFun(apiUrl.loadLJQY);
    return request(apiUrl.loadLJQY, {
        body: getParam(arg),
        method: 'POST',
    })
}

export async function loadLJZY(arg) {
    cancelAjaxFun(apiUrl.loadLJZY);
    return request(apiUrl.loadLJZY, {
        body: getParam(arg),
        method: 'POST',
    })
}

export async function loadJXBJ(arg) {
    cancelAjaxFun(apiUrl.loadJXBJ);
    return request(apiUrl.loadJXBJ, {
        body: getParam(arg),
        method: 'POST',
    })
}

export async function loadRGSB(arg) {
    cancelAjaxFun(apiUrl.loadRGSB);
    return request(apiUrl.loadRGSB, {
        body: getParam(arg),
        method: 'POST',
    })
}


//标书项目列表
export async function initDocData(arg) {
    cancelAjaxFun(apiUrl.initDocData);
    return request(apiUrl.initDocData,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function DocList(arg) {
    cancelAjaxFun(apiUrl.DocList);
    return request(apiUrl.DocList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function ViewDoc(arg) {
    cancelAjaxFun(apiUrl.ViewDoc);
    return request(apiUrl.ViewDoc,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function EditDoc(arg) {
    cancelAjaxFun(apiUrl.EditDoc);
    return request(apiUrl.EditDoc,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function AddDoc(arg) {
    cancelAjaxFun(apiUrl.AddDoc);
    return request(apiUrl.AddDoc,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function NewInitDocData(arg) {
    cancelAjaxFun(apiUrl.NewInitDocData);
    return request(apiUrl.NewInitDocData,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function DeletDoc(arg) {
    cancelAjaxFun(apiUrl.DeletDoc);
    return request(apiUrl.DeletDoc,{
            body: getParam(arg),
            method: 'GET'
        });
}
//定额
export async function QuotaList(arg) {
    cancelAjaxFun(apiUrl.QuotaList);
    return request(apiUrl.QuotaList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function ViewQuota(arg) {
    cancelAjaxFun(apiUrl.ViewQuota);
    return request(apiUrl.ViewQuota,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function AddQuota(arg) {
    cancelAjaxFun(apiUrl.AddQuota);
    return request(apiUrl.AddQuota,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function EditQuota(arg) {
    cancelAjaxFun(apiUrl.EditQuota);
    return request(apiUrl.EditQuota,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function DeletQuota(arg) {
    cancelAjaxFun(apiUrl.DeletQuota);
    return request(apiUrl.DeletQuota,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function OverdueQuota(arg) {
    cancelAjaxFun(apiUrl.OverdueQuota);
    return request(apiUrl.OverdueQuota,{
            body: getParam(arg),
            method: 'GET'
        });
}
//设施管理
export async function LoadEquipmentTree(arg) {
    cancelAjaxFun(apiUrl.LoadEquipmentTree);
    return request(apiUrl.LoadEquipmentTree,
        {
            body: getParam(arg),
            method: 'GET'
        });
}
//设施等级FacilityMoneyList
export async function FacilityLevelList(arg) {
    cancelAjaxFun(apiUrl.FacilityLevelList);
    return request(apiUrl.FacilityLevelList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilityLevelView(arg) {
    cancelAjaxFun(apiUrl.FacilityLevelView);
    return request(apiUrl.FacilityLevelView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilityLevelAdd(arg) {
    cancelAjaxFun(apiUrl.FacilityLevelAdd);
    return request(apiUrl.FacilityLevelAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function FacilityLevelEdit(arg) {
    cancelAjaxFun(apiUrl.FacilityLevelEdit);
    return request(apiUrl.FacilityLevelEdit,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilityLevelDelet(arg) {
    cancelAjaxFun(apiUrl.FacilityLevelDelet);
    return request(apiUrl.FacilityLevelDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilityLevelExport(arg) {
    return downFile(apiUrl.FacilityLevelExport,
        {
            body: getParam(arg),
        });
}
//设施人工费用
export async function FacilityMoneyList(arg) {
    cancelAjaxFun(apiUrl.FacilityMoneyList);
    return request(apiUrl.FacilityMoneyList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilityMoneyView(arg) {
    cancelAjaxFun(apiUrl.FacilityMoneyView);
    return request(apiUrl.FacilityMoneyView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilityMoneyUserCost(arg) {
    cancelAjaxFun(apiUrl.FacilityMoneyUserCost);
    return request(apiUrl.FacilityMoneyUserCost,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilityMoneyEdit(arg) {
    cancelAjaxFun(apiUrl.FacilityMoneyEdit);
    return request(apiUrl.FacilityMoneyEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function FacilityMoneyExport(arg) {
    return downFile(apiUrl.FacilityMoneyExport,
        {
            body: getParam(arg),
        });
}
//设施用电
export async function FacilityElectrList(arg) {
    cancelAjaxFun(apiUrl.FacilityElectrList);
    return request(apiUrl.FacilityElectrList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilityElectrRefesh(arg) {
    cancelAjaxFun(apiUrl.FacilityElectrRefesh);
    return request(apiUrl.FacilityElectrRefesh,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilityElectrExport(arg) {
    return downFile(apiUrl.FacilityElectrExport,
        {
            body: getParam(arg),
        });
}
//设施用水费用FacilityMaintenance
export async function FacilityWaterList(arg) {
    cancelAjaxFun(apiUrl.FacilityWaterList);
    return request(apiUrl.FacilityWaterList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilityWaterRefesh(arg) {
    cancelAjaxFun(apiUrl.FacilityWaterRefesh);
    return request(apiUrl.FacilityWaterRefesh,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilityWaterExport(arg) {
    return downFile(apiUrl.FacilityWaterExport,
        {
            body: getParam(arg),
        });
}
//设施维保费用
export async function FacilityMaintenanceList(arg) {
    cancelAjaxFun(apiUrl.FacilityMaintenanceList);
    return request(apiUrl.FacilityMaintenanceList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilityMaintenanceRefesh(arg) {
    cancelAjaxFun(apiUrl.FacilityMaintenanceRefesh);
    return request(apiUrl.FacilityMaintenanceRefesh,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilityMaintenanceExport(arg) {
    return downFile(apiUrl.FacilityMaintenanceExport,
        {
            body: getParam(arg),
        });
}
//设施综合费用
export async function FacilitySumCostList(arg) {
    cancelAjaxFun(apiUrl.FacilitySumCostList);
    return request(apiUrl.FacilitySumCostList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilitySumCostExport(arg) {
    return downFile(apiUrl.FacilitySumCostExport,
        {
            body: getParam(arg),
        });
}
export async function FacilitySumDelet(arg) {
    cancelAjaxFun(apiUrl.FacilitySumDelet);
    return request(apiUrl.FacilitySumDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilitySumView(arg) {
    cancelAjaxFun(apiUrl.FacilitySumView);
    return request(apiUrl.FacilitySumView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function FacilitySumAdd(arg) {
    cancelAjaxFun(apiUrl.FacilitySumAdd);
    return request(apiUrl.FacilitySumAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function FacilitySumEdit(arg) {
    cancelAjaxFun(apiUrl.FacilitySumEdit);
    return request(apiUrl.FacilitySumEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function FacilitySumRefesh(arg) {
    cancelAjaxFun(apiUrl.FacilitySumRefesh);
    return request(apiUrl.FacilitySumRefesh,{
            body: getParam(arg),
            method: 'GET'
        });
}
//安全基础数据
export async function SafetyBaseList(arg) {
    cancelAjaxFun(apiUrl.SafetyBaseList);
    return request(apiUrl.SafetyBaseList,{
            body: getParam(arg),
            method: 'GET'
        });
}

export async function SafetyBaseView(arg) {
    cancelAjaxFun(apiUrl.SafetyBaseView);
    return request(apiUrl.SafetyBaseView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function SafetyBaseAdd(arg) {
    cancelAjaxFun(apiUrl.SafetyBaseAdd);
    return request(apiUrl.SafetyBaseAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function SafetyBaseEdit(arg) {
    cancelAjaxFun(apiUrl.SafetyBaseEdit);
    return request(apiUrl.SafetyBaseEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function SafetyBaseExport(arg) {
    return downFile(apiUrl.SafetyBaseExport,
        {
            body: getParam(arg),
        });
}
export async function SafetyBaseDelet(arg) {
    cancelAjaxFun(apiUrl.SafetyBaseDelet);
    return request(apiUrl.SafetyBaseDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//安全管理统计数据
export async function SafetyBaseStatisticseList(arg) {
    cancelAjaxFun(apiUrl.SafetyBaseStatisticseList);
    return request(apiUrl.SafetyBaseStatisticseList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function SafetyBaseStatisticseCount(arg) {
    cancelAjaxFun(apiUrl.SafetyBaseStatisticseCount);
    return request(apiUrl.SafetyBaseStatisticseCount,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function SafetyBaseStatisticseExport(arg) {
    return downFile(apiUrl.SafetyBaseStatisticseExport,
        {
            body: getParam(arg),
        });
}
export async function SafetyBaseDetailInfoView(arg) {
    cancelAjaxFun(apiUrl.SafetyBaseDetailInfoView);
    return request(apiUrl.SafetyBaseDetailInfoView,{
            body: getParam(arg),
            method: 'GET'
        });
}


export async function SafetyBaseStatisticseView(arg) {
    cancelAjaxFun(apiUrl.SafetyBaseStatisticseView);
    return request(apiUrl.SafetyBaseStatisticseView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function SafetyBaseStatisticseAdd(arg) {
    cancelAjaxFun(apiUrl.SafetyBaseStatisticseAdd);
    return request(apiUrl.SafetyBaseStatisticseAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function SafetyBaseStatisticseEdit(arg) {
    cancelAjaxFun(apiUrl.SafetyBaseStatisticseEdit);
    return request(apiUrl.SafetyBaseStatisticseEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function SafetyBaseStatisticseDelet(arg) {
    cancelAjaxFun(apiUrl.SafetyBaseStatisticseDelet);
    return request(apiUrl.SafetyBaseStatisticseDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//成本管理基础数据表CostAreaType
export async function CostManagementBasisList(arg) {
    cancelAjaxFun(apiUrl.CostManagementBasisList);
    return request(apiUrl.CostManagementBasisList,{
            body: getParam(arg),
            method: 'GET'
        });
}

export async function CostManagementBasisView(arg) {
    cancelAjaxFun(apiUrl.CostManagementBasisView);
    return request(apiUrl.CostManagementBasisView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostManagementBasisAdd(arg) {
    cancelAjaxFun(apiUrl.CostManagementBasisAdd);
    return request(apiUrl.CostManagementBasisAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostManagementBasisEdit(arg) {
    cancelAjaxFun(apiUrl.CostManagementBasisEdit);
    return request(apiUrl.CostManagementBasisEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostManagementBasisExport(arg) {
    return downFile(apiUrl.CostManagementBasisExport,
        {
            body: getParam(arg),
        });
}
export async function CostManagementBasisDelet(arg) {
    cancelAjaxFun(apiUrl.CostManagementBasisDelet);
    return request(apiUrl.CostManagementBasisDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//成本区域类型基础数据
export async function CostAreaTypeList(arg) {
    cancelAjaxFun(apiUrl.CostAreaTypeList);
    return request(apiUrl.CostAreaTypeList,{
            body: getParam(arg),
            method: 'GET'
        });
}

export async function CostAreaTypeView(arg) {
    cancelAjaxFun(apiUrl.CostAreaTypeView);
    return request(apiUrl.CostAreaTypeView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostAreaTypeAdd(arg) {
    cancelAjaxFun(apiUrl.CostAreaTypeAdd);
    return request(apiUrl.CostAreaTypeAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostAreaTypeEdit(arg) {
    cancelAjaxFun(apiUrl.CostAreaTypeEdit);
    return request(apiUrl.CostAreaTypeEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostAreaTypeExport(arg) {
    return downFile(apiUrl.CostAreaTypeExport,
        {
            body: getParam(arg),
        });
}
export async function CostAreaTypeDelet(arg) {
    cancelAjaxFun(apiUrl.CostAreaTypeDelet);
    return request(apiUrl.CostAreaTypeDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//成本管理统计数据表
export async function CostManagementStatisticsList(arg) {
    cancelAjaxFun(apiUrl.CostManagementStatisticsList);
    return request(apiUrl.CostManagementStatisticsList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostManagementStatisticsView(arg) {
    cancelAjaxFun(apiUrl.CostManagementStatisticsView);
    return request(apiUrl.CostManagementStatisticsView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostManagementStatisticsAdd(arg) {
    cancelAjaxFun(apiUrl.CostManagementStatisticsAdd);
    return request(apiUrl.CostManagementStatisticsAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostManagementStatisticsEdit(arg) {
    cancelAjaxFun(apiUrl.CostManagementStatisticsEdit);
    return request(apiUrl.CostManagementStatisticsEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostManagementStatisticsExport(arg) {
    return downFile(apiUrl.CostManagementStatisticsExport,
        {
            body: getParam(arg),
        });
}
export async function CostManagementStatisticsDelet(arg) {
    cancelAjaxFun(apiUrl.CostManagementStatisticsDelet);
    return request(apiUrl.CostManagementStatisticsDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//成本消耗基础数据
export async function CostConsumptionBaseList(arg) {
    cancelAjaxFun(apiUrl.CostConsumptionBaseList);
    return request(apiUrl.CostConsumptionBaseList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostConsumptionBaseView(arg) {
    cancelAjaxFun(apiUrl.CostConsumptionBaseView);
    return request(apiUrl.CostConsumptionBaseView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostConsumptionBaseAdd(arg) {
    cancelAjaxFun(apiUrl.CostConsumptionBaseAdd);
    return request(apiUrl.CostConsumptionBaseAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostConsumptionBaseEdit(arg) {
    cancelAjaxFun(apiUrl.CostConsumptionBaseEdit);
    return request(apiUrl.CostConsumptionBaseEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostConsumptionBaseExport(arg) {
    return downFile(apiUrl.CostConsumptionBaseExport,
        {
            body: getParam(arg),
        });
}
export async function CostConsumptionBaseDelet(arg) {
    cancelAjaxFun(apiUrl.CostConsumptionBaseDelet);
    return request(apiUrl.CostConsumptionBaseDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//成本消耗统计数据
export async function CostConsumeStatisticsList(arg) {
    cancelAjaxFun(apiUrl.CostConsumeStatisticsList);
    return request(apiUrl.CostConsumeStatisticsList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostConsumeStatisticsView(arg) {
    cancelAjaxFun(apiUrl.CostConsumeStatisticsView);
    return request(apiUrl.CostConsumeStatisticsView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostConsumeStatisticsAdd(arg) {
    cancelAjaxFun(apiUrl.CostConsumeStatisticsAdd);
    return request(apiUrl.CostConsumeStatisticsAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostConsumeStatisticsEdit(arg) {
    cancelAjaxFun(apiUrl.CostConsumeStatisticsEdit);
    return request(apiUrl.CostConsumeStatisticsEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostConsumeStatisticsExport(arg) {
    return downFile(apiUrl.CostConsumeStatisticsExport,
        {
            body: getParam(arg),
        });
}
export async function CostConsumeStatisticsDelet(arg) {
    cancelAjaxFun(apiUrl.CostConsumeStatisticsDelet);
    return request(apiUrl.CostConsumeStatisticsDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//成本车辆机械数据CostVehicleCollectionTransfer
export async function CostVehicleMachineryList(arg) {
    cancelAjaxFun(apiUrl.CostVehicleMachineryList);
    return request(apiUrl.CostVehicleMachineryList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostVehicleMachineryView(arg) {
    cancelAjaxFun(apiUrl.CostVehicleMachineryView);
    return request(apiUrl.CostVehicleMachineryView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostVehicleMachineryAdd(arg) {
    cancelAjaxFun(apiUrl.CostVehicleMachineryAdd);
    return request(apiUrl.CostVehicleMachineryAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostVehicleMachineryEdit(arg) {
    cancelAjaxFun(apiUrl.CostVehicleMachineryEdit);
    return request(apiUrl.CostVehicleMachineryEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostVehicleMachineryExport(arg) {
    return downFile(apiUrl.CostVehicleMachineryExport,
        {
            body: getParam(arg),
        });
}
export async function CostVehicleMachineryDelet(arg) {
    cancelAjaxFun(apiUrl.CostVehicleMachineryDelet);
    return request(apiUrl.CostVehicleMachineryDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostVehicleMachinerySpecialExport(arg) {
    return downFile(apiUrl.CostVehicleMachinerySpecialExport,
        {
            body: getParam(arg),
        });
}
//成本车辆机械数据
export async function CostVehicleCollectionTransferList(arg) {
    cancelAjaxFun(apiUrl.CostVehicleCollectionTransferList);
    return request(apiUrl.CostVehicleCollectionTransferList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostVehicleCollectionTransferView(arg) {
    cancelAjaxFun(apiUrl.CostVehicleCollectionTransferView);
    return request(apiUrl.CostVehicleCollectionTransferView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostVehicleCollectionTransferAdd(arg) {
    cancelAjaxFun(apiUrl.CostVehicleCollectionTransferAdd);
    return request(apiUrl.CostVehicleCollectionTransferAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostVehicleCollectionTransferEdit(arg) {
    cancelAjaxFun(apiUrl.CostVehicleCollectionTransferEdit);
    return request(apiUrl.CostVehicleCollectionTransferEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function CostVehicleCollectionTransferExport(arg) {
    return downFile(apiUrl.CostVehicleCollectionTransferExport,
        {
            body: getParam(arg),
        });
}
export async function CostVehicleCollectionTransferDelet(arg) {
    cancelAjaxFun(apiUrl.CostVehicleCollectionTransferDelet);
    return request(apiUrl.CostVehicleCollectionTransferDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function CostVehicleCollectionTransferSpecialExport(arg) {
    return downFile(apiUrl.CostVehicleCollectionTransferSpecialExport,
        {
            body: getParam(arg),
        });
}
//质量管甲方考核数据
export async function QuaManageAssessmentList(arg) {
    cancelAjaxFun(apiUrl.QuaManageAssessmentList);
    return request(apiUrl.QuaManageAssessmentList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QuaManageAssessmentView(arg) {
    cancelAjaxFun(apiUrl.QuaManageAssessmentView);
    return request(apiUrl.QuaManageAssessmentView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QuaManageAssessmentAdd(arg) {
    cancelAjaxFun(apiUrl.QuaManageAssessmentAdd);
    return request(apiUrl.QuaManageAssessmentAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QuaManageAssessmentEdit(arg) {
    cancelAjaxFun(apiUrl.QuaManageAssessmentEdit);
    return request(apiUrl.QuaManageAssessmentEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QuaManageAssessmentExport(arg) {
    return downFile(apiUrl.QuaManageAssessmentExport,
        {
            body: getParam(arg),
        });
}
export async function QuaManageAssessmentDelet(arg) {
    cancelAjaxFun(apiUrl.QuaManageAssessmentDelet);
    return request(apiUrl.QuaManageAssessmentDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//质量管理甲方调查问卷
export async function QualityManageAQuesList(arg) {
    cancelAjaxFun(apiUrl.QualityManageAQuesList);
    return request(apiUrl.QualityManageAQuesList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageAQuesView(arg) {
    cancelAjaxFun(apiUrl.QualityManageAQuesView);
    return request(apiUrl.QualityManageAQuesView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageAQuesAdd(arg) {
    cancelAjaxFun(apiUrl.QualityManageAQuesAdd);
    return request(apiUrl.QualityManageAQuesAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageAQuesEdit(arg) {
    cancelAjaxFun(apiUrl.QualityManageAQuesEdit);
    return request(apiUrl.QualityManageAQuesEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageAQuesExport(arg) {
    return downFile(apiUrl.QualityManageAQuesExport,
        {
            body: getParam(arg),
        });
}
export async function QualityManageAQuesDelet(arg) {
    cancelAjaxFun(apiUrl.QualityManageAQuesDelet);
    return request(apiUrl.QualityManageAQuesDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//质量管理群众调查问卷
export async function QualityManageMQuesList(arg) {
    cancelAjaxFun(apiUrl.QualityManageMQuesList);
    return request(apiUrl.QualityManageMQuesList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageMQuesView(arg) {
    cancelAjaxFun(apiUrl.QualityManageMQuesView);
    return request(apiUrl.QualityManageMQuesView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageMQuesAdd(arg) {
    cancelAjaxFun(apiUrl.QualityManageMQuesAdd);
    return request(apiUrl.QualityManageMQuesAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageMQuesEdit(arg) {
    cancelAjaxFun(apiUrl.QualityManageMQuesEdit);
    return request(apiUrl.QualityManageMQuesEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageMQuesExport(arg) {
    return downFile(apiUrl.QualityManageMQuesExport,
        {
            body: getParam(arg),
        });
}
export async function QualityManageMQuesDelet(arg) {
    cancelAjaxFun(apiUrl.QualityManageMQuesDelet);
    return request(apiUrl.QualityManageMQuesDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//质量管理项目部自检
export async function QualityManageProjectCheckList(arg) {
    cancelAjaxFun(apiUrl.QualityManageProjectCheckList);
    return request(apiUrl.QualityManageProjectCheckList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageProjectCheckView(arg) {
    cancelAjaxFun(apiUrl.QualityManageProjectCheckView);
    return request(apiUrl.QualityManageProjectCheckView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageProjectCheckAdd(arg) {
    cancelAjaxFun(apiUrl.QualityManageProjectCheckAdd);
    return request(apiUrl.QualityManageProjectCheckAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageProjectCheckEdit(arg) {
    cancelAjaxFun(apiUrl.QualityManageProjectCheckEdit);
    return request(apiUrl.QualityManageProjectCheckEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageProjectCheckExport(arg) {
    return downFile(apiUrl.QualityManageProjectCheckExport,
        {
            body: getParam(arg),
        });
}
export async function QualityManageProjectCheckDelet(arg) {
    cancelAjaxFun(apiUrl.QualityManageProjectCheckDelet);
    return request(apiUrl.QualityManageProjectCheckDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//质量管理运营部自检
export async function QualityManageOperateCheckList(arg) {
    cancelAjaxFun(apiUrl.QualityManageOperateCheckList);
    return request(apiUrl.QualityManageOperateCheckList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageOperateCheckView(arg) {
    cancelAjaxFun(apiUrl.QualityManageOperateCheckView);
    return request(apiUrl.QualityManageOperateCheckView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageOperateCheckAdd(arg) {
    cancelAjaxFun(apiUrl.QualityManageOperateCheckAdd);
    return request(apiUrl.QualityManageOperateCheckAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageOperateCheckEdit(arg) {
    cancelAjaxFun(apiUrl.QualityManageOperateCheckEdit);
    return request(apiUrl.QualityManageOperateCheckEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageOperateCheckExport(arg) {
    return downFile(apiUrl.QualityManageOperateCheckExport,
        {
            body: getParam(arg),
        });
}
export async function QualityManageOperateCheckDelet(arg) {
    cancelAjaxFun(apiUrl.QualityManageOperateCheckDelet);
    return request(apiUrl.QualityManageOperateCheckDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//质量管理车队自检
export async function QualityManageFleetCheckList(arg) {
    cancelAjaxFun(apiUrl.QualityManageFleetCheckList);
    return request(apiUrl.QualityManageFleetCheckList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageFleetCheckView(arg) {
    cancelAjaxFun(apiUrl.QualityManageFleetCheckView);
    return request(apiUrl.QualityManageFleetCheckView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageFleetCheckAdd(arg) {
    cancelAjaxFun(apiUrl.QualityManageFleetCheckAdd);
    return request(apiUrl.QualityManageFleetCheckAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageFleetCheckEdit(arg) {
    cancelAjaxFun(apiUrl.QualityManageFleetCheckEdit);
    return request(apiUrl.QualityManageFleetCheckEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageFleetCheckExport(arg) {
    return downFile(apiUrl.QualityManageFleetCheckExport,
        {
            body: getParam(arg),
        });
}
export async function QualityManageFleetCheckDelet(arg) {
    cancelAjaxFun(apiUrl.QualityManageFleetCheckDelet);
    return request(apiUrl.QualityManageFleetCheckDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//质量管理扫保所自检
export async function QualityManageSweepCheckList(arg) {
    cancelAjaxFun(apiUrl.QualityManageSweepCheckList);
    return request(apiUrl.QualityManageSweepCheckList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageSweepCheckView(arg) {
    cancelAjaxFun(apiUrl.QualityManageSweepCheckView);
    return request(apiUrl.QualityManageSweepCheckView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageSweepCheckAdd(arg) {
    cancelAjaxFun(apiUrl.QualityManageSweepCheckAdd);
    return request(apiUrl.QualityManageSweepCheckAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageSweepCheckEdit(arg) {
    cancelAjaxFun(apiUrl.QualityManageSweepCheckEdit);
    return request(apiUrl.QualityManageSweepCheckEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageSweepCheckExport(arg) {
    return downFile(apiUrl.QualityManageSweepCheckExport,
        {
            body: getParam(arg),
        });
}
export async function QualityManageSweepCheckDelet(arg) {
    cancelAjaxFun(apiUrl.QualityManageSweepCheckDelet);
    return request(apiUrl.QualityManageSweepCheckDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//质量管理媒体报道
export async function QualityManageMediaReportList(arg) {
    cancelAjaxFun(apiUrl.QualityManageMediaReportList);
    return request(apiUrl.QualityManageMediaReportList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageMediaReportView(arg) {
    cancelAjaxFun(apiUrl.QualityManageMediaReportView);
    return request(apiUrl.QualityManageMediaReportView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageMediaReportAdd(arg) {
    cancelAjaxFun(apiUrl.QualityManageMediaReportAdd);
    return request(apiUrl.QualityManageMediaReportAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageMediaReportEdit(arg) {
    cancelAjaxFun(apiUrl.QualityManageMediaReportEdit);
    return request(apiUrl.QualityManageMediaReportEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageMediaReportExport(arg) {
    return downFile(apiUrl.QualityManageMediaReportExport,
        {
            body: getParam(arg),
        });
}
export async function QualityManageMediaReportDelet(arg) {
    cancelAjaxFun(apiUrl.QualityManageMediaReportDelet);
    return request(apiUrl.QualityManageMediaReportDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//质量管理统计表
export async function QualityManageStatisticsDataList(arg) {
    cancelAjaxFun(apiUrl.QualityManageStatisticsDataList);
    return request(apiUrl.QualityManageStatisticsDataList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageStatisticsDataView(arg) {
    cancelAjaxFun(apiUrl.QualityManageStatisticsDataView);
    return request(apiUrl.QualityManageStatisticsDataView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function QualityManageStatisticsDataAdd(arg) {
    cancelAjaxFun(apiUrl.QualityManageStatisticsDataAdd);
    return request(apiUrl.QualityManageStatisticsDataAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageStatisticsDataEdit(arg) {
    cancelAjaxFun(apiUrl.QualityManageStatisticsDataEdit);
    return request(apiUrl.QualityManageStatisticsDataEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function QualityManageStatisticsDataExport(arg) {
    return downFile(apiUrl.QualityManageStatisticsDataExport,
        {
            body: getParam(arg),
        });
}
export async function QualityManageStatisticsDataDelet(arg) {
    cancelAjaxFun(apiUrl.QualityManageStatisticsDataDelet);
    return request(apiUrl.QualityManageStatisticsDataDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//项目公司信息维护
export async function projectCompanyList(arg) {
    cancelAjaxFun(apiUrl.projectCompanyList);
    return request(apiUrl.projectCompanyList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function projectCompanyView(arg) {
    cancelAjaxFun(apiUrl.projectCompanyView);
    return request(apiUrl.projectCompanyView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function projectCompanyAdd(arg) {
    cancelAjaxFun(apiUrl.projectCompanyAdd);
    return request(apiUrl.projectCompanyAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function projectCompanyEdit(arg) {
    cancelAjaxFun(apiUrl.projectCompanyEdit);
    return request(apiUrl.projectCompanyEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function projectCompanyDelet(arg) {
    cancelAjaxFun(apiUrl.projectCompanyDelet);
    return request(apiUrl.projectCompanyDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//岗位业务线维护
export async function postMaintenanceList(arg) {
    cancelAjaxFun(apiUrl.postMaintenanceList);
    return request(apiUrl.postMaintenanceList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function postMaintenanceView(arg) {
    cancelAjaxFun(apiUrl.postMaintenanceView);
    return request(apiUrl.postMaintenanceView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function postMaintenanceAdd(arg) {
    cancelAjaxFun(apiUrl.postMaintenanceAdd);
    return request(apiUrl.postMaintenanceAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function postMaintenanceEdit(arg) {
    cancelAjaxFun(apiUrl.postMaintenanceEdit);
    return request(apiUrl.postMaintenanceEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function postMaintenanceDelet(arg) {
    cancelAjaxFun(apiUrl.postMaintenanceDelet);
    return request(apiUrl.postMaintenanceDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//项目公司基础信息统计表
export async function projectBaseList(arg) {
    cancelAjaxFun(apiUrl.projectBaseList);
    return request(apiUrl.projectBaseList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function projectBaseView(arg) {
    cancelAjaxFun(apiUrl.projectBaseView);
    return request(apiUrl.projectBaseView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function projectBaseEdit(arg) {
    cancelAjaxFun(apiUrl.projectBaseEdit);
    return request(apiUrl.projectBaseEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function projectBaseExport(arg) {
    return downFile(apiUrl.projectBaseExport,
        {
            body: getParam(arg),
        });
}
export async function projectBaseState(arg) {
    cancelAjaxFun(apiUrl.projectBaseState);
    return request(apiUrl.projectBaseState,{
            body: getParam(arg),
            method: 'GET'
        });
}
//工资与工时管理
export async function wagesHoursList(arg) {
    cancelAjaxFun(apiUrl.wagesHoursList);
    return request(apiUrl.wagesHoursList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function wagesHoursPostList(arg) {
    cancelAjaxFun(apiUrl.wagesHoursPostList);
    return request(apiUrl.wagesHoursPostList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function wagesHoursView(arg) {
    cancelAjaxFun(apiUrl.wagesHoursView);
    return request(apiUrl.wagesHoursView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function wagesHoursEdit(arg) {
    cancelAjaxFun(apiUrl.wagesHoursEdit);
    return request(apiUrl.wagesHoursEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function wagesHoursExport(arg) {
    return downFile(apiUrl.wagesHoursExport,
        {
            body: getParam(arg),
        });
}
export async function wagesHoursDelet(arg) {
    cancelAjaxFun(apiUrl.wagesHoursDelet);
    return request(apiUrl.wagesHoursDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
//业务线展示
export async function BusinessLineDisplayList(arg) {
    cancelAjaxFun(apiUrl.BusinessLineDisplayList);
    return request(apiUrl.BusinessLineDisplayList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function BusinessLineDisplayExport(arg) {
    return downFile(apiUrl.BusinessLineDisplayExport,
        {
            body: getParam(arg),
        });
}
//人员编制构成展示
export async function PersonOrganizationDisplayList(arg) {
    cancelAjaxFun(apiUrl.PersonOrganizationDisplayList);
    return request(apiUrl.PersonOrganizationDisplayList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function PersonOrganizationDisplayExport(arg) {
    return downFile(apiUrl.PersonOrganizationDisplayExport,
        {
            body: getParam(arg),
        });
}
//人员成本占比展示
export async function PersonCostDisplayList(arg) {
    cancelAjaxFun(apiUrl.PersonCostDisplayList);
    return request(apiUrl.PersonCostDisplayList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function PersonCostDisplayExport(arg) {
    return downFile(apiUrl.PersonCostDisplayExport,
        {
            body: getParam(arg),
        });
}
//单位工时消耗展示
export async function UnitHourConsumptionList(arg) {
    cancelAjaxFun(apiUrl.UnitHourConsumptionList);
    return request(apiUrl.UnitHourConsumptionList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function UnitHourConsumptionExport(arg) {
    return downFile(apiUrl.UnitHourConsumptionExport,
        {
            body: getParam(arg),
        });
}
//单位人力成本消耗展示   UnitManCostConsumptionDisplay
export async function UnitManCostConsumptionDisplayList(arg) {
    cancelAjaxFun(apiUrl.UnitManCostConsumptionDisplayList);
    return request(apiUrl.UnitManCostConsumptionDisplayList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function UnitManCostConsumptionDisplayExport(arg) {
    return downFile(apiUrl.UnitManCostConsumptionDisplayExport,
        {
            body: getParam(arg),
        });
}
//项目部们管理
export async function ProjectItemList(arg) {
    cancelAjaxFun(apiUrl.ProjectItemList);
    return request(apiUrl.ProjectItemList,{
            body: getParam(arg),
            method: 'GET'
        });
}

export async function projectDeptBindList(arg) {
    cancelAjaxFun(apiUrl.projectDeptBindList);
    return request(apiUrl.projectDeptBindList,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function projectDeptBindView(arg) {
    cancelAjaxFun(apiUrl.projectDeptBindView);
    return request(apiUrl.projectDeptBindView,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function projectDeptBindEdit(arg) {
    cancelAjaxFun(apiUrl.projectDeptBindEdit);
    return request(apiUrl.projectDeptBindEdit,{
            body: getParam(arg),
            method: 'POST'
        });
}
export async function projectDeptBindDelet(arg) {
    cancelAjaxFun(apiUrl.projectDeptBindDelet);
    return request(apiUrl.projectDeptBindDelet,{
            body: getParam(arg),
            method: 'GET'
        });
}
export async function projectDeptBindAdd(arg) {
    cancelAjaxFun(apiUrl.projectDeptBindAdd);
    return request(apiUrl.projectDeptBindAdd,{
            body: getParam(arg),
            method: 'POST'
        });
}
//项目名称接口 
export async function getNewProjectInfo(arg) {
    cancelAjaxFun(apiUrl.getNewProjectInfo);
    return request(apiUrl.getNewProjectInfo,{
            body: getParam(arg),
            method: 'GET'
        });
}
