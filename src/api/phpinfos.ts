import request from '@/utils/request'

export const getVersionInfo = () =>
  request({
    url: '/api/get_version_info/master',
    method: 'get'
  })

export const getLoadedExtensions = (worker = 'master') =>
  request({
    url: `/api/get_loaded_extensions/${worker}`,
    method: 'get'
  })

export const getClasses = (worker = 'master') =>
  request({
    url: `/api/get_declared_classes/${worker}`,
    method: 'get'
  })

export const getGCStatus = (worker = 'master') =>
  request({
    url: `/api/gc_status/${worker}`,
    method: 'get'
  })

export const getIncludedFiles = (worker = 'master') =>
  request({
    url: `/api/get_included_files/${worker}`,
    method: 'get'
  })

export const getIncludedFilesContent = (filename = '', worker = 'master') =>
  request({
    url: `/api/get_included_file_contents/${worker}`,
    method: 'get',
    params: { filename }
  })

export const getDeclaredClasses = (worker = 'master') =>
  request({
    url: `/api/get_declared_classes/${worker}`,
    method: 'get'
  })

export const getClassesInfo = (class_name: string, worker = 'master') =>
  request({
    url: `/api/get_class_info/${worker}`,
    method: 'get',
    params: { class_name }
  })

export const getInterfaceInfo = (interface_name: string, worker = 'master') =>
  request({
    url: `/api/get_class_info/${worker}`,
    method: 'get',
    params: { interface_name }
  })

export const getDefinedFunctions = (worker = 'master') =>
  request({
    url: `/api/get_defined_functions/${worker}`,
    method: 'get'
  })

export const getDefinedFunctionsContent = (class_name = '', function_name = '', worker = 'master') =>
  request({
    url: `/api/get_function_info/${worker}`,
    method: 'get',
    params: { class_name, function_name }
  })

export const getResources = (worker = 'master') =>
  request({
    url: `/api/get_resources/${worker}`,
    method: 'get'
  })

export const getDefinedConstants = (worker = 'master') =>
  request({
    url: `/api/get_defined_constants/${worker}`,
    method: 'get'
  })

export const getDeclaredInterfaces = (worker = 'master') =>
  request({
    url: `/api/get_declared_interfaces/${worker}`,
    method: 'get'
  })

export const getExtensionDetail = (extension_name: any, worker = 'master') =>
  request({
    url: `/api/get_extension_info/${worker}`,
    method: 'get',
    params: { extension_name }
  })

export const getGlobals = (worker = 'master') =>
  request({
    url: `/api/get_globals/${worker}`,
    method: 'get'
  })

export const getStaticPropertyValue = (class_name: string, property_name: string, worker = 'master') =>
  request({
    url: `/api/get_static_property_value/${worker}`,
    method: 'get',
    params: { class_name, property_name }
  })

export const getComposer = (worker = 'master') =>
  request({
    url: `/api/get_composer_packages/${worker}`,
    method: 'get'
  })
