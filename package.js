Package.describe({
  name: "jaredthirsk:timesync",
  summary: "NTP-style time synchronization between server and client",
  version: "0.3.4_4",
  git: "https://github.com/jaredthirsk/meteor-timesync.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.2.0.1");

  api.use([
    'check',
    'tracker',
    'http'
  ], 'client');

  api.use('webapp', 'server');

  // Our files
  api.addFiles('timesync-server.js', 'server');
  api.addFiles('timesync-client.js', 'client');

  api.export('TimeSync', 'client');
  api.export('SyncInternals', 'client', {testOnly: true} );
});

Package.onTest(function (api) {
  api.use([
    'tinytest',
    'test-helpers'
  ]);

  api.use(["tracker", "underscore"], 'client');

  api.use("jaredthirsk:timesync");

  api.addFiles('tests/client.js', 'client');
});
