import { module, test } from 'qunit';
import { setupTest } from 'ember-app/tests/helpers';

module('Unit | Service | cookie-value', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:cookie-value');
    assert.ok(service);
  });
});
