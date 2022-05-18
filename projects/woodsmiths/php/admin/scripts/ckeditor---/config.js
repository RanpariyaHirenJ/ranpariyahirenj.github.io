/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'hi';
	config.uiColor = '#3c8dbc';
 
	config.extraPlugins = 'codemirror,wenzgmap,youtube,googledocs';
	config.codemirror_theme = 'rubyblue';  // Go here for theme names: http://codemirror.net/demo/theme.html
	
	config.codemirror = {
	lineNumbers: true,
	highlightActiveLine: true,
	enableSearchTools: true,
	showSearchButton: false,
	showFormatButton: false,
	showCommentButton: false,
	showUncommentButton: false,
	showAutoCompleteButton: false,
	
	};
	
// Comment out or remove the 2 lines below if you want to enable the Advanced Content Filter	
config.allowedContent = true;
config.extraAllowedContent = '*{*}';	
};