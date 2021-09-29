export default {
  route: {
    'Swoole Dashboard': 'Swoole Dashboard',
    Extensions: 'Extensions',
    'Extension Detail': 'Extension Detail',
    'Included Files': 'Included Files',
    'Included Files Content': 'Included Files Content',
    ZendVM: 'ZendVM',
    'GC Status': 'GC Status',
    Classes: 'Classes',
    'Class Info': 'Class Info',
    Functions: 'Functions',
    'Function Content': 'Function Content',
    Resources: 'Resources',
    Constants: 'Constants',
    Interfaces: 'Interfaces',
    Objects: 'Objects',
    'Object Var Dump': 'Object VarDump',
    Swoole: 'Swoole',
    Processes: 'Processes',
    'Worker Detail': 'Worker Detail',
    Coroutines: 'Coroutines',
    Connections: 'Connections',
    Events: 'Events',
    Timers: 'Timers',
    Globals: 'Globals',

    dashboard: 'Dashboard',
    documentation: 'Documentation',
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    rolePermission: 'Role Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: 'Mixin',
    backToTop: 'Back To Top',
    draggableDialog: 'Draggable Dialog',
    draggableKanban: 'Draggable Kanban',
    draggableList: 'Draggable List',
    draggableSelect: 'Draggable Select',
    charts: 'Charts',
    barChart: 'Bar Chart',
    lineChart: 'Line Chart',
    mixedChart: 'Mixed Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    table: 'Table',
    dynamicTable: 'Dynamic Table',
    draggableTable: 'Draggable Table',
    inlineEditTable: 'Inline Edit Table',
    complexTable: 'Complex Table',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    mergeHeader: 'Merge Header',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboard: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link',
    profile: 'Profile'
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    theme: 'Theme',
    size: 'Global Size',
    profile: 'Profile'
  },
  login: {
    title: 'Login Form',
    logIn: 'Login',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    createRole: 'New Role',
    editPermission: 'Edit',
    roles: 'Your roles',
    switchRoles: 'Switch roles',
    tips: 'In some cases, using v-permission will have no effect. For example: Element-UI  el-tab or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.',
    changeLanguageTips: 'Switch Language Success'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Importance',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'Reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  example: {
    warning: 'Creating and editing pages cannot be cached by keep-alive because keep-alive\'s \'include\' currently does not support caching based on routes, so now it\'s cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or don\'t use keep-alive\'s \'include\' to cache all pages directly. See details'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name (default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name (default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading PDF.'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    showTagsView: 'Open Tags-View',
    showSidebarLogo: 'Sidebar Logo',
    fixedHeader: 'Fixed Header',
    sidebarTextTheme: 'Sidebar Text Theme'
  },
  includedfiles: {
    filename: 'Filename'
  },
  common: {
    search: 'Search',
    clear: 'Clear',
    sourceFile: 'Source File',
    actions: 'Actions',
    varDump: 'Var Dump',
    detail: 'Detail',
    close: 'Close',
    cancel: 'Cancel'
  },
  extensions: {
    classes: 'Classes',
    constants: 'Constants',
    iniEntries: 'IniEntries',
    dependencies: 'Dependencies',
    functions: 'Functions',
    info: 'Info',
    name: 'Extension Name'
  },
  classes: {
    placeholder: 'Class Name or Source File',
    name: 'Class Name',
    constants: 'Constants',
    constantName: 'Constant Name',
    constantValue: 'Constant Value',
    properties: 'Properties',
    staticProperties: 'Static Properties',
    propertiesModifiers: 'Modifiers',
    propertiesName: 'Property Name',
    propertiesValue: 'Property Value',
    methods: 'Methods',
    staticMethods: 'Static Methods',
    methodName: 'Method Name',
    parentClass: 'ParentClass',
    interface: 'Interface'
  },
  functions: {
    placeholder: 'FunctionName or Source File',
    type: 'Type',
    name: 'Function Name'
  },
  interfaces: {
    name: 'Interfaces Name'
  },
  constants: {
    name: 'Constants Name'
  },
  globals: {
    name: 'Globals Name'
  },
  objects: {
    placeholder: 'Class Name or Source File',
    objectID: 'Object ID',
    objectHASH: 'Object HASH',
    className: 'Class Name',
    memorySize: 'Memory Size'
  },
  processes: {
    reloadCount: 'Reload Count',
    timeOfLastReload: 'Time Of Last Reload',
    coroutines: 'Coroutines',
    events: 'Events',
    timers: 'Timers',
    objects: 'Objects',
    resources: 'Resources',
    memoryUsage: 'Memory Usage',
    memoryRealUsage: 'Memory Real Usage',
    dispatchCount: 'Dispatch Count',
    vmSize: 'VM-Size',
    vmRSS: 'VM-RSS',
    vcs: 'V-CS',
    nvcs: 'NV-CS',
    timerNum: 'Timer Num',
    coroutineNum: 'Coroutine Num'
  },
  coroutines: {
    placeholder: 'Called Function or Source File',
    elapsed: 'Elapsed',
    stackUsage: 'Stack Usage',
    calledFunction: 'Called Function',
    backTrace: 'Back Trace'
  },
  connections: {
    socketName: 'Socket Name',
    serverPort: 'Server Port',
    connectTime: 'Connect Time',
    lastReceivedTime: 'Last Received Time',
    lastSendTime: 'Last Send Time',
    recvQueuedBytes: 'Recv Queued Bytes',
    sendQueuedBytes: 'Send Queued Bytes',
    numberOfBytesReceived: 'Number Of Bytes Received',
    numberOfBytesSend: 'Number Of Bytes Send',
    closeSession: 'Close Session',
    closeWarning: 'Confirm whether to close the connection？',
    close: 'Close Session',
    closeSuccess: 'Session Closed'
  },
  events: {
    eventType: 'Events',
    socketType: 'Socket Type',
    fdType: 'Fd Type',
    port: 'Port',
    'Ip:Port': 'Ip:Port',
    sendBuffSize: 'Send Buffer Size',
    numberOfBytesReceived: 'Number Of Bytes Received',
    numberOfBytesSend: 'Number Of Bytes Send'
  },
  timers: {
    interval: 'Interval',
    execMsec: 'Exec Msec',
    execCount: 'Exec Count',
    round: 'Round'
  }
}