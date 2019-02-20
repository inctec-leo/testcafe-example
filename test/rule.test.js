import { ClientFunction, t, Selector, RequestLogger, Role } from 'testcafe';
const nock = require('nock')
const { PerformanceObserver, performance } = require('perf_hooks');

export const authUserRole = Role('http://localhost:8080/login', async t => {

    await t.typeText('#login-email', 'email');
    await t.typeText('#login-password', 'password');
});


fixture(`Main Page`)
    .page('http://localhost:8080/')


test('When logged in the user sees the list of stories', async t => {

    var t0 = performance.now();
    console.log('Creating story mock request')
    nock('http://localhost:8080')
        .get('/story/stories')
        .reply(200, "test");
    var t1 = performance.now();
    console.log("Call to nock took " + (t1 - t0) + " milliseconds.")

    console.log('Creating role');
    await t.useRole(authUserRole);
    var t2 = performance.now();
    console.log("Call to create role took " + (t2 - t1) + " milliseconds.")

    console.log('looking for list selector')
});
