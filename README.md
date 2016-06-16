# vcode-nodejs-testdebug
Testing Typescript debug in remote mode

### Settings

In launch.json setup remote IP address and remoteRoot param:

        {
            "name": "Attach REMOTE",
            "type": "node",
            "request": "attach",
            "port": 5858,
            "address": "192.168.1.22",   // <<-- Setup custom IP
            "restart": false,
            "sourceMaps": true,
            "outDir": "${workspaceRoot}",
            "localRoot": "${workspaceRoot}",
            "remoteRoot": "/var/apps/nodejs/vcode-nodejs-testdebug" // <<-- Setup custom path
        },
