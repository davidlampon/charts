(function() {
  'use strict';

  // model
  describe('Data model', function() {
    it('should exist', function() {
      expect(getData()).not.toEqual(undefined);
    });

    it('should be a json object', function() {
      expect(getData()).toEqual(jasmine.any(Object));
    });
  });

  // view
  describe('View', function() {
    it('should return the main container', function() {
      expect(getBaseContainer()).not.toBe(undefined);
    });
    it('should return the template', function() {
      expect(getTemplate()).not.toBe(undefined);
    });
    it('should return the formated number', function() {
      expect(numberFormat(10000000)).toBe("10.000.000");
    });
  });

})();
