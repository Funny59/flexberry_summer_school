'use strict';

define("books-demo/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});
define("books-demo/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('books-demo/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'books-demo/templates/application.hbs should pass TemplateLint.\n\nbooks-demo/templates/application.hbs\n  2:4  error  Incorrect indentation for `<a>` beginning at L2:C4. Expected `<a>` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:4  error  Incorrect indentation for `<button>` beginning at L6:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  9:4  error  Incorrect indentation for `<div>` beginning at L9:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<img>` beginning at L3:C8. Expected `<img>` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:8  error  Incorrect indentation for `<span>` beginning at L7:C8. Expected `<span>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:8  error  Incorrect indentation for `<ul>` beginning at L10:C8. Expected `<ul>` to be at an indentation of 6 but was found at 8.  block-indentation\n  30:8  error  Incorrect indentation for `<ul>` beginning at L30:C8. Expected `<ul>` to be at an indentation of 6 but was found at 8.  block-indentation\n  11:12  error  Incorrect indentation for `<li>` beginning at L11:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  14:12  error  Incorrect indentation for `<li>` beginning at L14:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  17:12  error  Incorrect indentation for `<li>` beginning at L17:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  20:12  error  Incorrect indentation for `<li>` beginning at L20:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  23:12  error  Incorrect indentation for `<li>` beginning at L23:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  26:12  error  Incorrect indentation for `<li>` beginning at L26:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  12:16  error  Incorrect indentation for `<a>` beginning at L12:C16. Expected `<a>` to be at an indentation of 14 but was found at 16.  block-indentation\n  15:16  error  Incorrect indentation for `<a>` beginning at L15:C16. Expected `<a>` to be at an indentation of 14 but was found at 16.  block-indentation\n  18:16  error  Incorrect indentation for `<a>` beginning at L18:C16. Expected `<a>` to be at an indentation of 14 but was found at 16.  block-indentation\n  21:16  error  Incorrect indentation for `<a>` beginning at L21:C16. Expected `<a>` to be at an indentation of 14 but was found at 16.  block-indentation\n  24:16  error  Incorrect indentation for `<a>` beginning at L24:C16. Expected `<a>` to be at an indentation of 14 but was found at 16.  block-indentation\n  27:16  error  Incorrect indentation for `<a>` beginning at L27:C16. Expected `<a>` to be at an indentation of 14 but was found at 16.  block-indentation\n  31:12  error  Incorrect indentation for `<li>` beginning at L31:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  32:16  error  Incorrect indentation for `<a>` beginning at L32:C16. Expected `<a>` to be at an indentation of 14 but was found at 16.  block-indentation\n  39:4  error  Incorrect indentation for `<div>` beginning at L39:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  40:8  error  Incorrect indentation for `<span>` beginning at L40:C8. Expected `<span>` to be at an indentation of 6 but was found at 8.  block-indentation\n');
  });
  QUnit.test('books-demo/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'books-demo/templates/index.hbs should pass TemplateLint.\n\nbooks-demo/templates/index.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<div>` beginning at L3:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  11:8  error  Incorrect indentation for `<div>` beginning at L11:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  19:8  error  Incorrect indentation for `<div>` beginning at L19:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:12  error  Incorrect indentation for `<h3>` beginning at L4:C12. Expected `<h3>` to be at an indentation of 10 but was found at 12.  block-indentation\n  5:12  error  Incorrect indentation for `<a>` beginning at L5:C12. Expected `<a>` to be at an indentation of 10 but was found at 12.  block-indentation\n  6:12  error  Incorrect indentation for `<svg>` beginning at L6:C12. Expected `<svg>` to be at an indentation of 14 but was found at 12.  block-indentation\n  7:16  error  Incorrect indentation for `<path>` beginning at L7:C16. Expected `<path>` to be at an indentation of 14 but was found at 16.  block-indentation\n  12:12  error  Incorrect indentation for `<h3>` beginning at L12:C12. Expected `<h3>` to be at an indentation of 10 but was found at 12.  block-indentation\n  13:12  error  Incorrect indentation for `<a>` beginning at L13:C12. Expected `<a>` to be at an indentation of 10 but was found at 12.  block-indentation\n  14:12  error  Incorrect indentation for `<svg>` beginning at L14:C12. Expected `<svg>` to be at an indentation of 14 but was found at 12.  block-indentation\n  15:16  error  Incorrect indentation for `<path>` beginning at L15:C16. Expected `<path>` to be at an indentation of 14 but was found at 16.  block-indentation\n  20:12  error  Incorrect indentation for `<h3>` beginning at L20:C12. Expected `<h3>` to be at an indentation of 10 but was found at 12.  block-indentation\n  21:12  error  Incorrect indentation for `<a>` beginning at L21:C12. Expected `<a>` to be at an indentation of 10 but was found at 12.  block-indentation\n  22:12  error  Incorrect indentation for `<svg>` beginning at L22:C12. Expected `<svg>` to be at an indentation of 14 but was found at 12.  block-indentation\n  23:16  error  Incorrect indentation for `<path>` beginning at L23:C16. Expected `<path>` to be at an indentation of 14 but was found at 16.  block-indentation\n  24:16  error  Incorrect indentation for `<path>` beginning at L24:C16. Expected `<path>` to be at an indentation of 14 but was found at 16.  block-indentation\n');
  });
});
define("books-demo/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
});
define("books-demo/tests/test-helper", ["books-demo/app", "books-demo/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("books-demo/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('books-demo/config/environment', [], function() {
  var prefix = 'books-demo';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('books-demo/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
