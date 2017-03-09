QUnit.test("Errors thrown for getAreaCode", function (assert) {
    assert.throws(function () {
        getAreaCode("415)555-5555");
    }, "Missing '('. An error should have been thrown.");
    assert.throws(function () {
        getAreaCode("(415555-5555");
    }, "Missing ')'. An error should have been thrown.");
    assert.throws(function () {
        getAreaCode("4155555555");
    }, "Missing parentheases around area code. An error should have been thrown.");
});
QUnit.test("Errors thrown for getCOCode", function (assert) {
    assert.throws(function () {
        getCOCode("(415)444-5555");
    }, "Too many digits. An error should have been thrown.");
    assert.throws(function () {
        getCOCode("(415) 444-5555");
    }, "Incorrect formatting. An error should have been thrown.");
    assert.throws(function () {
        getCOCode("(415)4445555");
    }, "Missing dash. An error should have been thrown.");
});
QUnit.test("Errors thrown for getLineCode", function (assert) {
    assert.throws(function () {
        getLineCode("(415)333-2222");
    }, "Incorrect formatting. An error should have been thrown.");
    assert.throws(function () {
        getLineCode("(415)333-222");
    }, "Incorrect formatting. An error should have been thrown.");
    assert.throws(function () {
        getLineCode("(415)3332222");
    }, "Missing dash. An error should have been thrown.");
});
