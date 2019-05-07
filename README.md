# ![LOGO](logo.png) LogicManagementClient **flow**ground Connector

## Description

A generated **flow**ground connector for the LogicManagementClient API (version 2018-07-01-preview).

Generated from: https://api.apis.guru/v2/specs/azure.com/logic/2018-07-01-preview/swagger.json<br/>
Generated at: 2019-05-07T17:38:18+03:00

## API Description

REST API for Azure Logic Apps.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Lists all of the available Logic REST API operations.

*Tags:* `Operations`

#### Input Parameters
* `api-version` - _required_ - The API version.

### Gets a list of integration accounts by subscription.

*Tags:* `IntegrationAccounts`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.

### Gets a list of workflows by subscription.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.
* `$filter` - _optional_ - The filter to apply on the operation. Options for filters include: State, Trigger, and ReferencedResourceId.

### Gets a list of integration accounts by resource group.

*Tags:* `IntegrationAccounts`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.

### Deletes an integration account.

*Tags:* `IntegrationAccounts`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.

### Gets an integration account.

*Tags:* `IntegrationAccounts`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.

### Updates an integration account.

*Tags:* `IntegrationAccounts`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.

### Creates or updates an integration account.

*Tags:* `IntegrationAccounts`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.

### Gets a list of integration account agreements.

*Tags:* `IntegrationAccountAgreements`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.
* `$filter` - _optional_ - The filter to apply on the operation. Options for filters include: AgreementType.

### Deletes an integration account agreement.

*Tags:* `IntegrationAccountAgreements`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `agreementName` - _required_ - The integration account agreement name.
* `api-version` - _required_ - The API version.

### Gets an integration account agreement.

*Tags:* `IntegrationAccountAgreements`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `agreementName` - _required_ - The integration account agreement name.
* `api-version` - _required_ - The API version.

### Creates or updates an integration account agreement.

*Tags:* `IntegrationAccountAgreements`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `agreementName` - _required_ - The integration account agreement name.
* `api-version` - _required_ - The API version.

### Get the content callback url.

*Tags:* `IntegrationAccountAgreements`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `agreementName` - _required_ - The integration account agreement name.
* `api-version` - _required_ - The API version.

### List the assemblies for an integration account.

*Tags:* `IntegrationAccountAssemblies`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.

### Delete an assembly for an integration account.

*Tags:* `IntegrationAccountAssemblies`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `assemblyArtifactName` - _required_ - The assembly artifact name.
* `api-version` - _required_ - The API version.

### Get an assembly for an integration account.

*Tags:* `IntegrationAccountAssemblies`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `assemblyArtifactName` - _required_ - The assembly artifact name.
* `api-version` - _required_ - The API version.

### Create or update an assembly for an integration account.

*Tags:* `IntegrationAccountAssemblies`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `assemblyArtifactName` - _required_ - The assembly artifact name.
* `api-version` - _required_ - The API version.

### Get the content callback url for an integration account assembly.

*Tags:* `IntegrationAccountAssemblies`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `assemblyArtifactName` - _required_ - The assembly artifact name.
* `api-version` - _required_ - The API version.

### List the batch configurations for an integration account.

*Tags:* `IntegrationAccountBatchConfigurations`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.

### Delete a batch configuration for an integration account.

*Tags:* `IntegrationAccountBatchConfigurations`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `batchConfigurationName` - _required_ - The batch configuration name.
* `api-version` - _required_ - The API version.

### Get a batch configuration for an integration account.

*Tags:* `IntegrationAccountBatchConfigurations`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `batchConfigurationName` - _required_ - The batch configuration name.
* `api-version` - _required_ - The API version.

### Create or update a batch configuration for an integration account.

*Tags:* `IntegrationAccountBatchConfigurations`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `batchConfigurationName` - _required_ - The batch configuration name.
* `api-version` - _required_ - The API version.

### Gets a list of integration account certificates.

*Tags:* `IntegrationAccountCertificates`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.

### Deletes an integration account certificate.

*Tags:* `IntegrationAccountCertificates`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `certificateName` - _required_ - The integration account certificate name.
* `api-version` - _required_ - The API version.

### Gets an integration account certificate.

*Tags:* `IntegrationAccountCertificates`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `certificateName` - _required_ - The integration account certificate name.
* `api-version` - _required_ - The API version.

### Creates or updates an integration account certificate.

*Tags:* `IntegrationAccountCertificates`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `certificateName` - _required_ - The integration account certificate name.
* `api-version` - _required_ - The API version.

### Gets the integration account callback URL.

*Tags:* `IntegrationAccounts`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.

### Gets the integration account's Key Vault keys.

*Tags:* `IntegrationAccounts`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.

### Logs the integration account's tracking events.

*Tags:* `IntegrationAccounts`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.

### Gets a list of integration account maps.

*Tags:* `IntegrationAccountMaps`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.
* `$filter` - _optional_ - The filter to apply on the operation. Options for filters include: MapType.

### Deletes an integration account map.

*Tags:* `IntegrationAccountMaps`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `mapName` - _required_ - The integration account map name.
* `api-version` - _required_ - The API version.

### Gets an integration account map.

*Tags:* `IntegrationAccountMaps`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `mapName` - _required_ - The integration account map name.
* `api-version` - _required_ - The API version.

### Creates or updates an integration account map.

*Tags:* `IntegrationAccountMaps`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `mapName` - _required_ - The integration account map name.
* `api-version` - _required_ - The API version.

### Get the content callback url.

*Tags:* `IntegrationAccountMaps`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `mapName` - _required_ - The integration account map name.
* `api-version` - _required_ - The API version.

### Gets a list of integration account partners.

*Tags:* `IntegrationAccountPartners`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.
* `$filter` - _optional_ - The filter to apply on the operation. Options for filters include: PartnerType.

### Deletes an integration account partner.

*Tags:* `IntegrationAccountPartners`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `partnerName` - _required_ - The integration account partner name.
* `api-version` - _required_ - The API version.

### Gets an integration account partner.

*Tags:* `IntegrationAccountPartners`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `partnerName` - _required_ - The integration account partner name.
* `api-version` - _required_ - The API version.

### Creates or updates an integration account partner.

*Tags:* `IntegrationAccountPartners`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `partnerName` - _required_ - The integration account partner name.
* `api-version` - _required_ - The API version.

### Get the content callback url.

*Tags:* `IntegrationAccountPartners`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `partnerName` - _required_ - The integration account partner name.
* `api-version` - _required_ - The API version.

### Regenerates the integration account access key.

*Tags:* `IntegrationAccounts`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.

### Gets a list of integration account schemas.

*Tags:* `IntegrationAccountSchemas`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.
* `$filter` - _optional_ - The filter to apply on the operation. Options for filters include: SchemaType.

### Deletes an integration account schema.

*Tags:* `IntegrationAccountSchemas`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `schemaName` - _required_ - The integration account schema name.
* `api-version` - _required_ - The API version.

### Gets an integration account schema.

*Tags:* `IntegrationAccountSchemas`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `schemaName` - _required_ - The integration account schema name.
* `api-version` - _required_ - The API version.

### Creates or updates an integration account schema.

*Tags:* `IntegrationAccountSchemas`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `schemaName` - _required_ - The integration account schema name.
* `api-version` - _required_ - The API version.

### Get the content callback url.

*Tags:* `IntegrationAccountSchemas`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `schemaName` - _required_ - The integration account schema name.
* `api-version` - _required_ - The API version.

### Gets a list of integration account sessions.

*Tags:* `IntegrationAccountSessions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.
* `$filter` - _optional_ - The filter to apply on the operation. Options for filters include: ChangedTime.

### Deletes an integration account session.

*Tags:* `IntegrationAccountSessions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `sessionName` - _required_ - The integration account session name.
* `api-version` - _required_ - The API version.

### Gets an integration account session.

*Tags:* `IntegrationAccountSessions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `sessionName` - _required_ - The integration account session name.
* `api-version` - _required_ - The API version.

### Creates or updates an integration account session.

*Tags:* `IntegrationAccountSessions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `integrationAccountName` - _required_ - The integration account name.
* `sessionName` - _required_ - The integration account session name.
* `api-version` - _required_ - The API version.

### Validates the workflow definition.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `location` - _required_ - The workflow location.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.

### Gets a list of workflows by resource group.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.
* `$filter` - _optional_ - The filter to apply on the operation. Options for filters include: State, Trigger, and ReferencedResourceId.

### Deletes a workflow.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.

### Gets a workflow.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.

### Updates a workflow.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.

### Creates or updates a workflow.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.

### Disables a workflow.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.

### Enables a workflow.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.

### Generates the upgraded definition for a workflow.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.

### Get the workflow callback Url.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.

### Gets an OpenAPI definition for the workflow.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.

### Moves an existing workflow.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.

### Regenerates the callback URL access key for request triggers.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.

### Gets a list of workflow runs.

*Tags:* `WorkflowRuns`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.
* `$filter` - _optional_ - The filter to apply on the operation. Options for filters include: Status, StartTime, and ClientTrackingId.

### Gets a workflow run.

*Tags:* `WorkflowRuns`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `api-version` - _required_ - The API version.

### Gets a list of workflow run actions.

*Tags:* `WorkflowRunActions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.
* `$filter` - _optional_ - The filter to apply on the operation. Options for filters include: Status.

### Gets a workflow run action.

*Tags:* `WorkflowRunActions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `actionName` - _required_ - The workflow action name.
* `api-version` - _required_ - The API version.

### Lists a workflow run expression trace.

*Tags:* `WorkflowRunActions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `actionName` - _required_ - The workflow action name.
* `api-version` - _required_ - The API version.

### Get all of a workflow run action repetitions.

*Tags:* `WorkflowRunActions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `actionName` - _required_ - The workflow action name.
* `api-version` - _required_ - The API version.

### Get a workflow run action repetition.

*Tags:* `WorkflowRunActions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `actionName` - _required_ - The workflow action name.
* `repetitionName` - _required_ - The workflow repetition.
* `api-version` - _required_ - The API version.

### Lists a workflow run expression trace.

*Tags:* `WorkflowRunActions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `actionName` - _required_ - The workflow action name.
* `repetitionName` - _required_ - The workflow repetition.
* `api-version` - _required_ - The API version.

### List a workflow run repetition request history.

*Tags:* `WorkflowRunActions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `actionName` - _required_ - The workflow action name.
* `repetitionName` - _required_ - The workflow repetition.
* `api-version` - _required_ - The API version.

### Gets a workflow run repetition request history.

*Tags:* `WorkflowRunActions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `actionName` - _required_ - The workflow action name.
* `repetitionName` - _required_ - The workflow repetition.
* `requestHistoryName` - _required_ - The request history name.
* `api-version` - _required_ - The API version.

### List a workflow run request history.

*Tags:* `WorkflowRunActions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `actionName` - _required_ - The workflow action name.
* `api-version` - _required_ - The API version.

### Gets a workflow run request history.

*Tags:* `WorkflowRunActions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `actionName` - _required_ - The workflow action name.
* `requestHistoryName` - _required_ - The request history name.
* `api-version` - _required_ - The API version.

### List the workflow run action scoped repetitions.

*Tags:* `WorkflowRunActions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `actionName` - _required_ - The workflow action name.
* `api-version` - _required_ - The API version.

### Get a workflow run action scoped repetition.

*Tags:* `WorkflowRunActions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `actionName` - _required_ - The workflow action name.
* `repetitionName` - _required_ - The workflow repetition.
* `api-version` - _required_ - The API version.

### Cancels a workflow run.

*Tags:* `WorkflowRuns`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `api-version` - _required_ - The API version.

### Gets an operation for a run.

*Tags:* `WorkflowRunOperations`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `runName` - _required_ - The workflow run name.
* `operationId` - _required_ - The workflow operation id.
* `api-version` - _required_ - The API version.

### Gets a list of workflow triggers.

*Tags:* `WorkflowTriggers`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.
* `$filter` - _optional_ - The filter to apply on the operation.

### Gets a workflow trigger.

*Tags:* `WorkflowTriggers`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `triggerName` - _required_ - The workflow trigger name.
* `api-version` - _required_ - The API version.

### Gets a list of workflow trigger histories.

*Tags:* `WorkflowTriggerHistories`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `triggerName` - _required_ - The workflow trigger name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.
* `$filter` - _optional_ - The filter to apply on the operation. Options for filters include: Status, StartTime, and ClientTrackingId.

### Gets a workflow trigger history.

*Tags:* `WorkflowTriggerHistories`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `triggerName` - _required_ - The workflow trigger name.
* `historyName` - _required_ - The workflow trigger history name. Corresponds to the run name for triggers that resulted in a run.
* `api-version` - _required_ - The API version.

### Resubmits a workflow run based on the trigger history.

*Tags:* `WorkflowTriggerHistories`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `triggerName` - _required_ - The workflow trigger name.
* `historyName` - _required_ - The workflow trigger history name. Corresponds to the run name for triggers that resulted in a run.
* `api-version` - _required_ - The API version.

### Get the callback URL for a workflow trigger.

*Tags:* `WorkflowTriggers`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `triggerName` - _required_ - The workflow trigger name.
* `api-version` - _required_ - The API version.

### Resets a workflow trigger.

*Tags:* `WorkflowTriggers`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `triggerName` - _required_ - The workflow trigger name.
* `api-version` - _required_ - The API version.

### Runs a workflow trigger.

*Tags:* `WorkflowTriggers`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `triggerName` - _required_ - The workflow trigger name.
* `api-version` - _required_ - The API version.

### Get the trigger schema as JSON.

*Tags:* `WorkflowTriggers`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `triggerName` - _required_ - The workflow trigger name.
* `api-version` - _required_ - The API version.

### Sets the state of a workflow trigger.

*Tags:* `WorkflowTriggers`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `triggerName` - _required_ - The workflow trigger name.
* `api-version` - _required_ - The API version.

### Validates the workflow.

*Tags:* `Workflows`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.

### Gets a list of workflow versions.

*Tags:* `WorkflowVersions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of items to be included in the result.

### Gets a workflow version.

*Tags:* `WorkflowVersions`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `versionId` - _required_ - The workflow versionId.
* `api-version` - _required_ - The API version.

### Get the callback url for a trigger of a workflow version.

*Tags:* `WorkflowTriggers`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `workflowName` - _required_ - The workflow name.
* `versionId` - _required_ - The workflow versionId.
* `triggerName` - _required_ - The workflow trigger name.
* `api-version` - _required_ - The API version.

## License

**flow**ground :- Telekom iPaaS / azure-com-logic-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
