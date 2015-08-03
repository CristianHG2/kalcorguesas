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

$(document).ready(function()
{
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
						objectInfo('noresource', 'No tienes los materiales necesarios');
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
						objectInfo('noresource', 'No tienes los materiales necesarios');
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

					if ( objects[$(this).attr('id')][0] >= 2000 )
						var sec_text = ((objects[$(this).attr('id')][0] / 1000) - timeb) + ' segundos';
					else
						var sec_text = ((objects[$(this).attr('id')][0] / 1000) - timeb) + ' segundo';

					$(this).putObjectInfo('Valor:  <span style="font-weight: bold; color: green;">&sect;' + objects[$(this).attr('id')][2] + '</span> | Recompensa: <span id="' + $(this).attr('id') + 'text">' + (objects[$(this).attr('id')][1] + amountb) + ' ' + final_text + '</span> | Costo: <b>' + sec_text + '</b>');
				break;
				case 1:
					$(this).putObjectInfo();
				break;
				case 2:
					$(this).putObjectInfo('Recompensa: <b>Timeboost x' + boosts[$(this).attr('id')][0] + '</b>, <b>Amountboost x' + boosts[$(this).attr('id')][1] + '</b>, <span style="font-weight: bold; color: green;">Sellboost: x' + boosts[$(this).attr('id')][2] + '</span> | Costo: <span style="font-weight: bold; color: green;">&sect;' + boosts[$(this).attr('id')][3]);
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