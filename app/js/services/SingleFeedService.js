'use strict';
					
/* Query All Feeds From DB Service */

mftApp.factory('SingleFeed', ['$resource', function($resource) { 
	//var getFeed = $resource('JSON/feeds.json', {id:'@id', status:'@status', interface:'@interface'},
	var getFeed = $resource('http://dev.bigcompass.com\:2222/rest/AaronL/SingleFeed/:id', {id:'@ID'}, 	
	{ post: {method: 'POST'}, 
	get: {method: 'GET'}, 
	update: {method:'PUT', params:{TD_IN_OUT:'@TD_IN_OUT',TD_INTERF_TYPE:'@TD_INTERF_TYPE',INTERFACE_NAME:'@INTERFACE_NAME',
	IS_WM_INTERFACE:'@IS_WM_INTERFACE',IS_ACTIVE:'@IS_ACTIVE',PCI:'@PCI',IS_PII_III:'@IS_PII_III',PII_III_SPECIFIC_DATA:'@PII_III_SPECIFIC_DATA',
	IS_SAFE_HARBOR:'@IS_SAFE_HARBOR',SAFE_HARBOR_SPECIFIC_DATA:'@SAFE_HARBOR_SPECIFIC_DATA',INTERFACE_DATA_CLASSIF:'@INTERFACE_DATA_CLASSIF',
	DATA_CLASSIF:'@DATA_CLASSIF',IS_TO_OR_FROM_SAFE_HARBOR:'@IS_TO_OR_FROM_SAFE_HARBOR',MEETS_WHICH_POLICIES:'@MEETS_WHICH_POLICIES',
	HAS_POLICY_OR_STANDARDS_ISSUE:'@HAS_POLICY_OR_STANDARDS_ISSUE',SECURITY_EXCEPTION_ID:'@SECURITY_EXCEPTION_ID',GROUP_:'@GROUP_',
	LAST_DATE_AUDITED:'@LAST_DATE_AUDITED',IS_ENCRYPTION_NEEDED:'@IS_ENCRYPTION_NEEDED',FILE_NAME_WRITTEN_TO_SHUTTLE:'@FILE_NAME_WRITTEN_TO_SHUTTLE',
	IL_FILE_NAME:'@IL_FILE_NAME',ACKNOWLEDGEMENT_IL_FILE_NAME:'@ACKNOWLEDGEMENT_IL_FILE_NAME',ISTRATEGY:'@ISTRATEGY',EART_ENTRY:'@EART_ENTRY',
	INTERFACE_DESCRIPTION:'@INTERFACE_DESCRIPTION',FEED_DESCRIPTION:'@FEED_DESCRIPTION',BU_SEGMENT_ENTITY:'@BU_SEGMENT_ENTITY',
	IMPLEMENTATION_PATTERN:'@IMPLEMENTATION_PATTERN',SOURCE_APPLICATION_NAME:'@SOURCE_APPLICATION_NAME',SOURCE_DATA_FORMAT:'@SOURCE_DATA_FORMAT',
	SOURCE_LOCATION:'@SOURCE_LOCATION',TARGET_APPLICATION_NAME:'@TARGET_APPLICATION_NAME',TARGET_DATA_FORMAT:'@TARGET_DATA_FORMAT',
	TARGET_LOCATION:'@TARGET_LOCATION',A2A_OR_B2B:'@A2A_OR_B2B',MESSAGE_TYPE_:'@MESSAGE_TYPE_',IDOC_TYPE:'@IDOC_TYPE',IDOC_EXTENSION:'@IDOC_EXTENSION',
	TRANSFORMATION_COMPLEXITY:'@TRANSFORMATION_COMPLEXITY',TRANSACTIONS_PER:'@TRANSACTIONS_PER',TRANSFER_TYPE:'@TRANSFER_TYPE',SFTP:'@SFTP',
	FTP:'@FTP',HTTP:'@HTTP',HTTPS:'@HTTPS',SAP_ALE_API:'@SAP_ALE_API',DELIVERY_MECHANISM:'@DELIVERY_MECHANISM',MAXIMUM_MESSAGE_SIZE:'@MAXIMUM_MESSAGE_SIZE',
	PEAK_MESSAGE_VOLUME:'@PEAK_MESSAGE_VOLUME',FREQUENCY:'@FREQUENCY',TRANSFER_DEADLINE:'@TRANSFER_DEADLINE',SYSTEM_CONTACTS:'@SYSTEM_CONTACTS',
	SITE_CONTACT:'@SITE_CONTACT',INTERFACE_OWNER:'@INTERFACE_OWNER',OUTBOUND_SERVER_HOST:'@OUTBOUND_SERVER_HOST',
	OUTBOUND_RESPONSIBLE_GROUP:'@OUTBOUND_RESPONSIBLE_GROUP',SSN:'@SSN',SALARY:'@SALARY',PGP:'@PGP',CYBER_DOC:'@CYBER_DOC',STATUS:'@STATUS',
	COMMENTS:'@COMMENTS',LAST_CHANGE_DATE:'@LAST_CHANGE_DATE',LAST_CHANGE_BY:'@LAST_CHANGE_BY',LAST_CHANGE_COMMENT:'@LAST_CHANGE_COMMENT'}, 
	transformRequest:function(data, headersGetter){
		var result = JSON.stringify(data);
		console.log("Result:" + result);             
	}}, 
	query: {method:'GET', isArray:false}});
	return getFeed;
}]);