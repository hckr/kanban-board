'use strict';

angular.module('Asana')
  .service('Workspace', ['$resource', 'ASANA_API_URL', 'WORKSPACE_ID', function Workspace($resource, ASANA_API_URL, WORKSPACE_ID) {
    return $resource(ASANA_API_URL + '/workspaces/:workspaceId/:path', {workspaceId: WORKSPACE_ID, path: "@path"}, {
      get: {method: 'GET'},
      projects: {method: 'GET', params: {path: "projects"}}
    });
  }]);
