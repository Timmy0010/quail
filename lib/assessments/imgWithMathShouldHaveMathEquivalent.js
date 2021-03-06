quail.imgWithMathShouldHaveMathEquivalent = function (quail, test, Case) {
  test.get('$scope').find('img:not(img:has(math), img:has(tagName))').each(function () {
    var _case = Case({
      element: this
    });
    test.add(_case);
    if (!$(this).parent().find('math').length) {
      _case.set({
        status: 'failed'
      });
    }
  });
};
