define(['../../scripts/model', '../../scripts/common'], function(model, common) {

  // model
  describe('Data model', function() {
    it('should exist', function() {
      expect(model.getData()).not.toEqual(undefined);
    });

    it('should be a json object', function() {
      expect(model.getData()).toEqual(jasmine.any(Object));
    });
  });

  // common
  describe('Common', function() {
    it('should return the formated number', function() {
      expect(common.numberFormat(10000000)).toBe("10.000.000");
    });
  });

});
