/**
 * Auto-generated action file for "LogicManagementClient" API.
 *
 * Generated at: 2019-05-07T14:38:18.565Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-logic-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'IntegrationAccountAgreements_CreateOrUpdate'
 * Endpoint Path: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "agreementName",
    "api-version"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "subscriptionId": "subscriptionId",
    "resourceGroupName": "resourceGroupName",
    "integrationAccountName": "integrationAccountName",
    "agreementName": "agreementName",
    "api_version": "api-version",
    "agreementType": "agreementType",
    "changedTime": "changedTime",
    "ignoreCertificateNameMismatch": "ignoreCertificateNameMismatch",
    "keepHttpConnectionAlive": "keepHttpConnectionAlive",
    "supportHttpStatusCodeContinue": "supportHttpStatusCodeContinue",
    "unfoldHttpHeaders": "unfoldHttpHeaders",
    "acknowledgementConnectionSettings": "acknowledgementConnectionSettings",
    "autogenerateFileName": "autogenerateFileName",
    "fileNameTemplate": "fileNameTemplate",
    "messageContentType": "messageContentType",
    "suspendMessageOnFileNameGenerationError": "suspendMessageOnFileNameGenerationError",
    "transmitFileNameInMimeHeader": "transmitFileNameInMimeHeader",
    "envelopeSettings": "envelopeSettings",
    "resendIfMDNNotReceived": "resendIfMDNNotReceived",
    "suspendDuplicateMessage": "suspendDuplicateMessage",
    "errorSettings": "errorSettings",
    "dispositionNotificationTo": "dispositionNotificationTo",
    "mdnText": "mdnText",
    "micHashingAlgorithm": "micHashingAlgorithm",
    "needMDN": "needMDN",
    "receiptDeliveryUrl": "receiptDeliveryUrl",
    "sendInboundMDNToMessageBox": "sendInboundMDNToMessageBox",
    "sendMDNAsynchronously": "sendMDNAsynchronously",
    "signMDN": "signMDN",
    "signOutboundMDNIfOptional": "signOutboundMDNIfOptional",
    "mdnSettings": "mdnSettings",
    "messageConnectionSettings": "messageConnectionSettings",
    "enableNRRForInboundDecodedMessages": "enableNRRForInboundDecodedMessages",
    "enableNRRForInboundEncodedMessages": "enableNRRForInboundEncodedMessages",
    "enableNRRForInboundMDN": "enableNRRForInboundMDN",
    "enableNRRForOutboundDecodedMessages": "enableNRRForOutboundDecodedMessages",
    "enableNRRForOutboundEncodedMessages": "enableNRRForOutboundEncodedMessages",
    "enableNRRForOutboundMDN": "enableNRRForOutboundMDN",
    "encryptionCertificateName": "encryptionCertificateName",
    "overrideGroupSigningCertificate": "overrideGroupSigningCertificate",
    "sha2AlgorithmFormat": "sha2AlgorithmFormat",
    "signingCertificateName": "signingCertificateName",
    "securitySettings": "securitySettings",
    "checkCertificateRevocationListOnReceive": "checkCertificateRevocationListOnReceive",
    "checkCertificateRevocationListOnSend": "checkCertificateRevocationListOnSend",
    "checkDuplicateMessage": "checkDuplicateMessage",
    "compressMessage": "compressMessage",
    "encryptMessage": "encryptMessage",
    "encryptionAlgorithm": "encryptionAlgorithm",
    "interchangeDuplicatesValidityDays": "interchangeDuplicatesValidityDays",
    "overrideMessageProperties": "overrideMessageProperties",
    "signMessage": "signMessage",
    "signingAlgorithm": "signingAlgorithm",
    "validationSettings": "validationSettings",
    "protocolSettings": "protocolSettings",
    "qualifier": "qualifier",
    "value": "value",
    "receiverBusinessIdentity": "receiverBusinessIdentity",
    "senderBusinessIdentity": "senderBusinessIdentity",
    "receiveAgreement": "receiveAgreement",
    "sendAgreement": "sendAgreement",
    "aS2": "aS2",
    "acknowledgementControlNumberLowerBound": "acknowledgementControlNumberLowerBound",
    "acknowledgementControlNumberPrefix": "acknowledgementControlNumberPrefix",
    "acknowledgementControlNumberSuffix": "acknowledgementControlNumberSuffix",
    "acknowledgementControlNumberUpperBound": "acknowledgementControlNumberUpperBound",
    "batchFunctionalAcknowledgements": "batchFunctionalAcknowledgements",
    "batchTechnicalAcknowledgements": "batchTechnicalAcknowledgements",
    "needFunctionalAcknowledgement": "needFunctionalAcknowledgement",
    "needLoopForValidMessages": "needLoopForValidMessages",
    "needTechnicalAcknowledgement": "needTechnicalAcknowledgement",
    "rolloverAcknowledgementControlNumber": "rolloverAcknowledgementControlNumber",
    "sendSynchronousAcknowledgement": "sendSynchronousAcknowledgement",
    "acknowledgementSettings": "acknowledgementSettings",
    "edifactDelimiterOverrides": "edifactDelimiterOverrides",
    "envelopeOverrides": "envelopeOverrides",
    "applicationReferenceId": "applicationReferenceId",
    "applyDelimiterStringAdvice": "applyDelimiterStringAdvice",
    "communicationAgreementId": "communicationAgreementId",
    "createGroupingSegments": "createGroupingSegments",
    "enableDefaultGroupHeaders": "enableDefaultGroupHeaders",
    "functionalGroupId": "functionalGroupId",
    "groupApplicationPassword": "groupApplicationPassword",
    "groupApplicationReceiverId": "groupApplicationReceiverId",
    "groupApplicationReceiverQualifier": "groupApplicationReceiverQualifier",
    "groupApplicationSenderId": "groupApplicationSenderId",
    "groupApplicationSenderQualifier": "groupApplicationSenderQualifier",
    "groupAssociationAssignedCode": "groupAssociationAssignedCode",
    "groupControlNumberLowerBound": "groupControlNumberLowerBound",
    "groupControlNumberPrefix": "groupControlNumberPrefix",
    "groupControlNumberSuffix": "groupControlNumberSuffix",
    "groupControlNumberUpperBound": "groupControlNumberUpperBound",
    "groupControllingAgencyCode": "groupControllingAgencyCode",
    "groupMessageRelease": "groupMessageRelease",
    "groupMessageVersion": "groupMessageVersion",
    "interchangeControlNumberLowerBound": "interchangeControlNumberLowerBound",
    "interchangeControlNumberPrefix": "interchangeControlNumberPrefix",
    "interchangeControlNumberSuffix": "interchangeControlNumberSuffix",
    "interchangeControlNumberUpperBound": "interchangeControlNumberUpperBound",
    "isTestInterchange": "isTestInterchange",
    "overwriteExistingTransactionSetControlNumber": "overwriteExistingTransactionSetControlNumber",
    "processingPriorityCode": "processingPriorityCode",
    "receiverInternalIdentification": "receiverInternalIdentification",
    "receiverInternalSubIdentification": "receiverInternalSubIdentification",
    "receiverReverseRoutingAddress": "receiverReverseRoutingAddress",
    "recipientReferencePasswordQualifier": "recipientReferencePasswordQualifier",
    "recipientReferencePasswordValue": "recipientReferencePasswordValue",
    "rolloverGroupControlNumber": "rolloverGroupControlNumber",
    "rolloverInterchangeControlNumber": "rolloverInterchangeControlNumber",
    "rolloverTransactionSetControlNumber": "rolloverTransactionSetControlNumber",
    "senderInternalIdentification": "senderInternalIdentification",
    "senderInternalSubIdentification": "senderInternalSubIdentification",
    "senderReverseRoutingAddress": "senderReverseRoutingAddress",
    "transactionSetControlNumberLowerBound": "transactionSetControlNumberLowerBound",
    "transactionSetControlNumberPrefix": "transactionSetControlNumberPrefix",
    "transactionSetControlNumberSuffix": "transactionSetControlNumberSuffix",
    "transactionSetControlNumberUpperBound": "transactionSetControlNumberUpperBound",
    "characterEncoding": "characterEncoding",
    "characterSet": "characterSet",
    "componentSeparator": "componentSeparator",
    "dataElementSeparator": "dataElementSeparator",
    "decimalPointIndicator": "decimalPointIndicator",
    "protocolVersion": "protocolVersion",
    "releaseIndicator": "releaseIndicator",
    "repetitionSeparator": "repetitionSeparator",
    "segmentTerminator": "segmentTerminator",
    "segmentTerminatorSuffix": "segmentTerminatorSuffix",
    "serviceCodeListDirectoryVersion": "serviceCodeListDirectoryVersion",
    "framingSettings": "framingSettings",
    "messageFilterType": "messageFilterType",
    "messageFilter": "messageFilter",
    "messageFilterList": "messageFilterList",
    "createEmptyXmlTagsForTrailingSeparators": "createEmptyXmlTagsForTrailingSeparators",
    "maskSecurityInfo": "maskSecurityInfo",
    "preserveInterchange": "preserveInterchange",
    "suspendInterchangeOnError": "suspendInterchangeOnError",
    "useDotAsDecimalSeparator": "useDotAsDecimalSeparator",
    "processingSettings": "processingSettings",
    "schemaReferences": "schemaReferences",
    "validationOverrides": "validationOverrides",
    "allowLeadingAndTrailingSpacesAndZeroes": "allowLeadingAndTrailingSpacesAndZeroes",
    "checkDuplicateGroupControlNumber": "checkDuplicateGroupControlNumber",
    "checkDuplicateInterchangeControlNumber": "checkDuplicateInterchangeControlNumber",
    "checkDuplicateTransactionSetControlNumber": "checkDuplicateTransactionSetControlNumber",
    "interchangeControlNumberValidityDays": "interchangeControlNumberValidityDays",
    "trailingSeparatorPolicy": "trailingSeparatorPolicy",
    "trimLeadingAndTrailingSpacesAndZeroes": "trimLeadingAndTrailingSpacesAndZeroes",
    "validateCharacterSet": "validateCharacterSet",
    "validateEDITypes": "validateEDITypes",
    "validateXSDTypes": "validateXSDTypes",
    "edifact": "edifact",
    "batchImplementationAcknowledgements": "batchImplementationAcknowledgements",
    "functionalAcknowledgementVersion": "functionalAcknowledgementVersion",
    "implementationAcknowledgementVersion": "implementationAcknowledgementVersion",
    "needImplementationAcknowledgement": "needImplementationAcknowledgement",
    "controlStandardsId": "controlStandardsId",
    "controlVersionNumber": "controlVersionNumber",
    "groupHeaderAgencyCode": "groupHeaderAgencyCode",
    "groupHeaderDateFormat": "groupHeaderDateFormat",
    "groupHeaderTimeFormat": "groupHeaderTimeFormat",
    "groupHeaderVersion": "groupHeaderVersion",
    "receiverApplicationId": "receiverApplicationId",
    "senderApplicationId": "senderApplicationId",
    "usageIndicator": "usageIndicator",
    "useControlStandardsIdAsRepetitionCharacter": "useControlStandardsIdAsRepetitionCharacter",
    "replaceCharacter": "replaceCharacter",
    "replaceSeparatorsInPayload": "replaceSeparatorsInPayload",
    "convertImpliedDecimal": "convertImpliedDecimal",
    "authorizationQualifier": "authorizationQualifier",
    "authorizationValue": "authorizationValue",
    "passwordValue": "passwordValue",
    "securityQualifier": "securityQualifier",
    "x12DelimiterOverrides": "x12DelimiterOverrides",
    "x12": "x12",
    "content": "content",
    "createdTime": "createdTime",
    "guestIdentity": "guestIdentity",
    "guestPartner": "guestPartner",
    "hostIdentity": "hostIdentity",
    "hostPartner": "hostPartner",
    "metadata": "metadata",
    "properties": "properties",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['azure_auth'] = {token: cfg['azure_auth']};

    let callParams = {
        spec: spec,
        operationId: 'IntegrationAccountAgreements_CreateOrUpdate',
        pathName: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}