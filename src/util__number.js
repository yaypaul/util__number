/**
 * util__number
 * @fileoverview Sets up prototype Number Utility functions on JavaScripts Number object.
 * @version 2.2
 * @author <a href="http://yaypaul.com">YayPaul (Paul West)</a>
 * @copyright 2017 Paul West.
 * @license MIT
 */

/**
 * Add Commas
 * @desc Parses a number and adds commas in the correct places.
 * @return Formatted number as String.
 * @Since 1.0
 */
Number.prototype.addCommas = function(){
	
	'use strict';
	
	var number = this;
	var x;
	var n1;
	var n2;
	var regExp = /(\d+)(\d{3})/;
		
	number += '';
	x = number.split( '.' );
	n1 = x[ 0 ];
	n2 = x.length > 1 ? '.' + x[ 1 ] : '';
	
	while( regExp.test( n1 ) ){

		n1 = n1.replace( regExp, '$1' + ',' + '$2' );

	}
	
	return n1 + n2;
	
};

/**
 * Add Rounding
 * @desc Parses a number and rounds it in a manner similar to Facebook.
 * @return Formatted number as String.
 * @since 2.1
 */
Number.prototype.addRounding = function(){
	
	'use strict';
	
	var number = this;
	var n1 = '';
	var n2 = '';
	//Get the 1e value for calcs
	var e = ( function(){
		
		return '1e' + ( ( number < 1e3 ) ? 1 : 
			( ( number < 1e6 ) ? 3 : 
				( ( number < 1e9 ) ? 6 : 
					( ( number < 1e12 ) ? 9 : 
						( ( number < 1e15 ) ? 12 : 
							( ( number < 1e18 ) ? 15 : 18 ) ) ) ) ) );
		
	} )();
	//Get the suffix based on number length
	var suffix = ( function(){
		
		return ( ( number < 1e3 ) ? '' : 
			( ( number < 1e6 ) ? 'K' : 
				( ( number < 1e9 ) ? 'M' : 
					( ( number < 1e12 ) ? 'B' : 
						( ( number < 1e15 ) ? 'T' : 
							( ( number < 1e18 ) ? 'Q' : 'QN' ) ) ) ) ) );
		
	} )();
	
	if( number < 1e3 ){
		return number + suffix;
	}
	else{
		n1 = ( number / e ).toString().split( /\./ );
		n2 = ( n1[ 1 ] && n1[ 1 ] !== '' && n1[ 1 ] !== '0' ? 
				( n1[ 1 ].substr( 0, 1 ) !== '0' ? '.' + n1[ 1 ].substr( 0, 1 ) : '' ) : '' );
		return n1[ 0 ] + n2 + suffix;
	}
	
};