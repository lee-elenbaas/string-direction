/*
  Tests are written in Jasmine. 
  To run tests
    npm install
    npm test
*/

var ltrText = 'Hello, world!',
    rtlText = 'سلام دنیا',
    bidiText = 'Hello in Farsi is سلام';

describe('stringDirection', function(){
  if(typeof require === 'function') {
    var stringDirection = require('./index');
  }

  describe('#getDirection', function(){

    describe('when passing non-string variables', function(){

      it('should throw error with number', function(){
        expect(function(){
          stringDirection.getDirection(1)
        }).toThrow( new Error('TypeError getDirection expects strings') );
      });

      it('should throw error with boolean', function(){
        expect(function(){
          stringDirection.getDirection(false);
        }).toThrow( new Error('TypeError getDirection expects strings') );
      });

      it('should throw error with objects', function(){
        expect(function(){
          stringDirection.getDirection({});
        }).toThrow( new Error('TypeError getDirection expects strings') );
      });

      it('should throw error with function', function(){
        expect(function(){
          stringDirection.getDirection(function(){});
        }).toThrow( new Error('TypeError getDirection expects strings') );
      });

      it('should throw error with regex', function(){
        expect(function(){
          stringDirection.getDirection(/some/);
        }).toThrow( new Error('TypeError getDirection expects strings') );
      });

      it('should throw error with no argument', function(){
        expect(function(){
          stringDirection.getDirection();
        }).toThrow( new Error('TypeError missing argument') );
      });

    });

    describe('when passing string variables', function(){

      it('should return ltr with ltr variable', function(){
        expect(stringDirection.getDirection(ltrText)).toBe('ltr');
      });

      it('should return rtl with rtl variable', function(){
        expect(stringDirection.getDirection(rtlText)).toBe('rtl');
      });

      it('should return bidi with bidi variable', function(){
        expect(stringDirection.getDirection(bidiText)).toBe('bidi');
      });
    });

  });

  describe('#patch', function(){
    stringDirection.patch();

    describe('when calling on string variables', function(){

      it('should return ltr with ltr variables', function(){
        expect(ltrText.getDirection()).toBe('ltr');
      });

      it('should return rtl with rtl variables', function(){
        expect(ltrText.getDirection()).toBe('rtl');
      });

      it('should return bidi with bidi variables', function(){
        expect(bidiText.getDirection()).toBe('bidi');
      });

    });

  });

});