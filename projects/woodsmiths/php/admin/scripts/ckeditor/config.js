/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/*CKEDITOR.editorConfig = function( config ) {
	//Define changes to default configuration here. For example:
	 config.language = 'fr';
	 config.uiColor = '#AADC6E';
};*/


CKEDITOR.editorConfig = function( config )
{
	config.toolbar = 'MyToolbar';
 	config.tabSpaces = 10;
	config.extraPlugins = 'html5validation';
	config.toolbar_MyToolbar =
	[
		{ name: 'document', items : ['Source','NewPage','Preview','Templates'] },
		{ name: 'clipboard', items : [ 'Cut','Copy','Paste','-','Undo','Redo' ] },
		{ name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','Scayt' ] },
		{ name: 'insert', items : [ 'Image','HorizontalRule','Smiley','SpecialChar','PageBreak' ] },
		{ name: 'tools', items : [ 'Maximize' ] },
                '/',
		{ name: 'styles', items : [ 'Styles','Format','Font','FontSize','TextColor' ] },
		{ name: 'basicstyles', items : [ 'Bold','Italic','Strike','-','RemoveFormat' ] },
		{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent' ] },
		{ name: 'links', items : [ 'Link','Unlink','Anchor' ] }
	];
	config.filebrowserBrowseUrl = './browser/browser.php';
	config.filebrowserWindowHeight = '70%';
	config.filebrowserWindowWidth = '70%';
	config.allowedContent = true;
config.extraAllowedContent = '*{*}';
};