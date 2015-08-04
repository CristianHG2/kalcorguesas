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

$.get('lang/lang.json', function(json) 
{
	$(document).ready(function()
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
	            openOverlayAppend(function(box)
	            {
	            	box.append("<center style=\"margin-top: 18%;\">Please choose your language:<br><br><Br><br><a href=\"?lang=en\" class=\"button_select\" style=\"margin-right: 13%; position: static;\">English</a><a href=\"?lang=es\" style=\"position: static\" class=\"button_select\">Spanish</a></center>");
	            });
	        break;
	    }

		desc['noresource'] = new Array('<span style="color: red">' + json[arrayname]['no_resources'] + '</span>', 'Error');
		desc['codesamp'] = new Array(json[arrayname]['codesamp'], json[arrayname]['codesampdesc']);
		desc['rapespookie'] = new Array(json[arrayname]['rapespookie'], json[arrayname]['spookiedesc']);
		desc['dopaja'] = new Array(json[arrayname]['dopaja'], json[arrayname]['dopajadesc']);
		desc['kolcarham'] = new Array(json[arrayname]['kolcarham'], json[arrayname]['kolcarhamdesc']);
		desc['kolcargues'] = new Array(json[arrayname]['kolcargues'], json[arrayname]['kolcguesdesc']);
		desc['sampham'] = new Array(json[arrayname]['sampham'], json[arrayname]['samphamdesc']);
		desc['human_resources'] = new Array(json[arrayname]['human_r'], json[arrayname]['humandesc']);
		desc['faster_cooking'] = new Array(json[arrayname]['hire_cook'], json[arrayname]['cookfastdesc']);
		desc['do_marketing'] = new Array(json[arrayname]['do_market'], json[arrayname]['marketingdesc']);
		desc['sync'] = new Array(json[arrayname]['sync_better'], json[arrayname]['syncdesc']);
		desc['reward'] = json[arrayname]['reward'];
		desc['cost'] = json[arrayname]['cost'];
		desc['sec'] = json[arrayname]['seconds'];
		desc['value'] = json[arrayname]['value'];
		desc['gamename'] = json[arrayname]['name'];
		desc['slogan'] = json[arrayname]['slogan'];

		var noresource_text = desc['noresource'][0];

		$(".overlay").hide();
		$(".box").hide();

		updateTimes();

		setInterval(updateEconomy, 200);

		$("a").on('click', function(e)
		{
			if ( $(this).attr('href') == "#" )
				e.preventDefault();

			switch ( $(this).data('type') )
			{
				case 0:
					// Burgers
					
					if ( $.inArray($(this).attr('id'), inProgress) == -1 )
					{
						$(this).makeBurger(function(burgerid)
						{
							var id = $.inArray(burgerid, inProgress);
							inProgress.splice(id, 1);
						});

						inProgress.push($(this).attr('id'));
					}
				break;
				case 1:
					// Tasks
						if ( $(this).hasResource() == true )
						{
							$(this).startTask(function(task)
							{
								completed.push(task);

								stats['dolargues'] += tasks[task][3];

								$(this).data('clicked', true);
							}, $(this).data('wrap'));
						}
						else
							objectInfo('noresource', noresource_text);
				break;
				case 2:
					if ( $(this).data('clicked') !== true )
					{
						if ( $(this).hasResource() == true )
						{
							$(this).doBoost();
							$(this).data('clicked', true);
						}
						else
							objectInfo('noresource', noresource_text);
					}
				break;
			}
		});

		$("a").on('mouseover', function()
		{
			if ( $(this).data('type') !== null )
			{
				switch ( $(this).data('type') )
				{
					case 0:
						var text = $(this).children('.content').text();
						var split = text.trim().split("\n");

						if ( (objects[$(this).attr('id')][1] + amountb) > 1 )
							var final_text = split[0] + 's';
						else
							var final_text = split[0];
							
						var seconds = (objects[$(this).attr('id')][0] - timeb) / 1000;
						
						if ( seconds < 1 )
							seconds = 1;
						else
							seconds = seconds;

						if ( seconds >= 2 )
							var sec_text = seconds + ' ' + desc['sec'] + 's';
						else
							var sec_text = seconds + ' ' + desc['sec'];

						$(this).putObjectInfo(desc['value'] + ':  <span style="font-weight: bold; color: green;">&sect;' + objects[$(this).attr('id')][2] * sellb + '</span> | ' + desc['reward'] + ': <span id="' + $(this).attr('id') + 'text">' + (objects[$(this).attr('id')][1] + amountb) + ' ' + final_text + '</span> | ' + desc['cost'] + ': <b>' + sec_text + '</b>');
					break;
					case 1:
						$(this).putObjectInfo();
					break;
					case 2:
						$(this).putObjectInfo(desc['reward'] + ': <b>Timeboost x' + boosts[$(this).attr('id')][0] + '</b>, <b>Amountboost x' + boosts[$(this).attr('id')][1] + '</b>, <span style="font-weight: bold; color: green;">Sellboost: x' + boosts[$(this).attr('id')][2] + '</span> | ' + desc['cost'] + ': <span style="font-weight: bold; color: green;">&sect;' + boosts[$(this).attr('id')][3]);
					break;
				}
			}
		});

		$("a").on('mouseleave', function()
		{
			objectInfo();
		});

		$(".button_sell").on('click', function()
		{
			sellBurger($(this).data('sell'));
		});
	});
});