import request from '@/utils/request'
import qs from 'qs'

export const getServerStats = (worker = 'worker-0') =>
  request({
    url: '/api/server_stats/' + worker,
    method: 'get'
  })

export const getServerSetting = () =>
  request({
    url: '/api/server_setting/worker-0',
    method: 'get'
  })

export const getWorkerInfo = (workerId: number) =>
  request({
    url: '/api/get_worker_info/worker-' + workerId,
    method: 'get'
  })

export const getWorkerInfo2 = (worker: string) =>
  request({
    url: '/api/get_worker_info/' + worker,
    method: 'get'
  })

export const getThreadInfo = (threadId: number) =>
  request({
    url: '/api/get_thread_info/reactor-' + threadId,
    method: 'get'
  })

export const getTaskWorkerInfo = (workerId: number) =>
  request({
    url: '/api/get_worker_info/task_worker-' + workerId,
    method: 'get'
  })

export const getCoroutineList = (worker: any) =>
  request({
    url: `/api/get_coroutine_list/${worker}`,
    method: 'get'
  })

export const getCoroutineBackTrace = (worker: string | (string | null)[], cid: number) =>
  request({
    url: `/api/coroutine_bt/${worker}`,
    method: 'get',
    params: { cid: cid }
  })

export const getTimerList = (worker: string | (string | null)[]) =>
  request({
    url: `/api/get_timer_list/${worker}`,
    method: 'get'
  })

export const getObjects = (worker: any) =>
  request({
    url: `/api/get_objects/${worker}`,
    method: 'get'
  })

export const getObjectByHandle = (object_id: number, object_hash: string, worker = 'master') =>
  request({
    url: `/api/get_object_by_handle/${worker}`,
    method: 'get',
    params: { object_id, object_hash }
  })

export const getAllSockets = (worker: string | (string | null)[]) =>
  request({
    url: `/api/get_all_sockets/${worker}`,
    method: 'get'
  })

export const getConnections = (worker: any) =>
  request({
    url: `/api/get_connections/${worker}`,
    method: 'get'
  })

export const closeConnection = (session_id: number, is_reset: number, worker: string | (string | null)[] = 'master') =>
  request({
    url: `/api/close_session/${worker}`,
    method: 'post',
    data: qs.stringify({ session_id, force: is_reset })
  })

export const getSocketInfo = (fd: string, worker: string) =>
  request({
    url: `/api/get_socket_info/${worker}`,
    method: 'get',
    params: { fd }
  })

export const getAllUnixSockets = (type: string, worker: string) =>
  request({
    url: `/api/get_all_unix_sockets/${worker}`,
    method: 'get',
    params: { type: type }
  })

export const getAllPorts = () =>
  request({
    url: '/api/get_all_ports',
    method: 'get'
  })

export const getClientInfo = (worker: string, session_id: string) =>
  request({
    url: `/api/get_client_info/${worker}`,
    method: 'get',
    params: { session_id: session_id }
  })

export const getConnectionInfo = (worker: string, session_id: number) =>
  request({
    url: `/api/get_connection_info/${worker}`,
    method: 'get',
    params: { session_id: session_id }
  })

export const getMemoryInfo = (worker: string) =>
  request({
    url: `/api/get_memory_info/${worker}`,
    method: 'get'
  })

export const getServerCpuUsage = () =>
  request({
    url: '/api/get_server_cpu_usage/master',
    method: 'get'
  })

export const getServerMemoryUsage = () =>
  request({
    url: '/api/get_server_memory_usage/master',
    method: 'get'
  })

export const serverReload = () =>
  request({
    url: '/api/server_reload/master',
    method: 'post'
  })

export const serverShutDown = () =>
  request({
    url: '/api/server_shutdown/master',
    method: 'post'
  })

export const getServerList = () =>
  request({
    url: 'https://business.swoole.com/adminServer/list',
    // url: 'http://swoole-cloud.test/adminServer/list',
    method: 'get'
  })

export const serverCreate = (data: any) =>
  request({
    url: 'https://business.swoole.com/adminServer/create',
    // url: 'http://swoole-cloud.test/adminServer/create',
    method: 'post',
    data: qs.stringify(data)
  })

export const serverDel = (id: number) =>
  request({
    url: 'https://business.swoole.com/adminServer/delete',
    // url: 'http://swoole-cloud.test/adminServer/delete',
    method: 'post',
    data: qs.stringify({ id: id })
  })

export const getServerGroupList = () =>
  request({
    url: 'https://business.swoole.com/adminServer/groupList',
    // url: 'http://swoole-cloud.test/adminServer/groupList',
    method: 'get'
  })

export const createGroup = (data: any) =>
  request({
    url: 'https://business.swoole.com/adminServer/createGroup',
    // url: 'http://swoole-cloud.test/adminServer/createGroup',
    method: 'post',
    data: qs.stringify(data)
  })

export const updateGroup = (data: any) =>
  request({
    url: 'https://business.swoole.com/adminServer/updateGroup',
    // url: 'http://swoole-cloud.test/adminServer/updateGroup',
    method: 'post',
    data: qs.stringify(data)
  })

export const detailGroup = (data: any) =>
  request({
    url: 'https://business.swoole.com/adminServer/detailGroup',
    // url: 'http://swoole-cloud.test/adminServer/detailGroup',
    method: 'get',
    params: data
  })

export const delGroup = (data: any) =>
  request({
    url: 'https://business.swoole.com/adminServer/delGroup',
    // url: 'http://swoole-cloud.test/adminServer/delGroup',
    method: 'post',
    data: qs.stringify(data)
  })

export const findUserByPhone = (data: any) =>
  request({
    url: 'https://business.swoole.com/adminServer/findUser',
    // url: 'http://swoole-cloud.test/adminServer/findUser',
    method: 'post',
    data: qs.stringify(data)
  })
