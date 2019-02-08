/**
 * External dependencies
 */
import { RuleTester } from 'eslint';

/**
 * Internal dependencies
 */
import rule from '../dependency-group';

const ruleTester = new RuleTester( {
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 6,
	},
} );

ruleTester.run( 'dependency-group', rule, {
	valid: [
		{
			code: `
/**
 * External dependencies
 */
import { get } from 'lodash';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import edit from './edit';`,
		},
	],
	invalid: [
		{
			code: `
import { get } from 'lodash';
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import edit from './edit';`,
			errors: [
				{ message: 'Expected preceding "External dependencies" comment block' },
				{ message: 'Expected preceding "WordPress dependencies" comment block' },
				{ message: 'Expected preceding "Internal dependencies" comment block' },
			],
			output: `
/**
 * External dependencies
 */
import { get } from 'lodash';
import classnames from 'classnames';
/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
/**
 * Internal dependencies
 */
import edit from './edit';`,
		},
	],
} );
