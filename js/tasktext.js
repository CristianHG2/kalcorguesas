/**
 *
 *	Kolcarguesas 
 *	Beta v0.0.1
 *	
 *	@author Cristian Herrera <cherreragiraldo@gmail.com>
 *	@copyright Public domain
 *	@link http://www.studiowolfree.com/
 *
 *  You can download the code from here if you'd like, but, there IS a GitHub repository :)
 * 
 */

tasks['codesamp']['text'] = '';

tasks['rapespookie']['text'] = '';

tasks['dopaja']['text'] = '';

$.get('lang/lang.json', function(json) 
{
	switch ( getURLParam('lang') )
	{
		case 'en':
			var arrayname = 'en';
		break;
		case 'es':
			var arrayname = 'es';
		break;
		default:
			var arrayname = 'es';
		break;
	}

	tasks['codesamp']['text'] = json[arrayname]['codesamp_text'];
	tasks['rapespookie']['text'] = json[arrayname]['spookie_text'];
	tasks['dopaja']['text'] = json[arrayname]['dopaja_text'];
});