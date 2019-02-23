(function(env) {
  function browserVersion(matchFn) {
    var navigator = jasmine.getGlobal().navigator;
    var userAgent = navigator ? navigator.userAgent : null;
    if (!userAgent) { return void 0; }

    var match = matchFn(userAgent);

    return match ? parseFloat(match[1]) : void 0;
  }

  env.firefoxVersion = browserVersion(function(userAgent) {
    return /Firefox\/([0-9]{0,})/.exec(userAgent);
  });

})(jasmine.getEnv());
