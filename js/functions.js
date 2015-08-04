/**
 *
 *  Kolcarguesas 
 *  Beta v0.0.1
 *  
 *  @author Cristian Herrera <cherreragiraldo@gmail.com>
 *  @copyright Public domain
 *  @link http://www.studiowolfree.com/
 *
 *  You can download the code from here if you'd like, but, there IS a GitHub repository :)
 * 
 */

function str_split(text, cut_on) 
{
	if ( cut_on == null ) 
		cut_on = 1;

	var letters = [];

	var curr_pos = 0;
	var len = text.length;

	while ( curr_pos < len ) 
	{
		letters.push(text.slice(curr_pos, curr_pos + 1));

		curr_pos += cut_on;
	}

	return letters;
}

function doTask(after, wrap2, font_size, obj, task)
{
	if ( wrap2 == null )
		wrap2 = null;

	if ( font_size == null )
		font_size = '15px';

	var obj_progress = obj.children('.progress');

	var progressTimer = new Array();
	var progressNum = new Array();

	progressNum[task] = new Array();

	progressNum[task]['total'] = (Date.now() + (tasks[task][4] * taskDelay[task])) - Date.now();
	progressNum[task]['start'] = Date.now();

	stats['kolcarham']  -= tasks[task][0];
	stats['kolcargues'] -= tasks[task][1];
	stats['sampham']	-= tasks[task][2];

	var curr_task = task;

	progressTimer[task] = setInterval(function()
	{
		var elapsed = Date.now() - progressNum[curr_task]['start'];

		var percent = Math.round((elapsed/progressNum[curr_task]['total']) * 100);

		obj_progress.css({ width : percent + "%" });
	}, 1);

	setTimeout(function()
	{
		openOverlayAppend(function(box)
		{ 
			box.typeWriter(tasks[task]['text'], 10, 
				{ 
					wrap : wrap2, 
					style : 'font-size: ' + font_size, 
					text : "Go"
				});
		});

		obj_progress.css({ width : '0%' });

		clearTimeout(progressTimer[task]);

		taskDelay[task] += 1;

		after(curr_task);
	}, tasks[task][4] * taskDelay[task]);
}

function hasResources(kolcarham, kolcargues, sampham, dolargues)
{
	if ( stats['kolcarham'] < kolcarham || stats['kolcargues'] < kolcargues || stats['sampham'] < sampham || stats['dolargues'] < dolargues )
		return false;
	else
		return true;
}

function hasResourcesTask(task)
{
	return hasResources(tasks[task][0], tasks[task][1], tasks[task][2], 0);
}

function hasResourcesHelper(helper)
{
	return hasResources(0, 0, 0, boosts[helper][3]);
}

function updateTimes()
{
	$("a").each(function(e, i)
	{
		if ( $(this).data('type') == 0 )
		{
			var id  = $(this).attr('id');
			var time = (objects[id][0] - timeb);
			
			if ( time < 1 )
				time = 1;
			else
				time = time;
			
			var string = (objects[id][1] + amountb) + "/" + (time / 1000) + " sec";
			$(this).children('.content').children('span').text(string);
		}
	});
}

function doBoost(boostid, obj)
{
	stats['dolargues'] -= boosts[boostid][3];

	timeb += boosts[boostid][0] * 1000;
	amountb += boosts[boostid][1];
	sellb += boosts[boostid][2];

	obj.animate({ backgroundColor : '#A9D0F5'});

	updateTimes();
}

function objectInfo(index, type, rewardText)
{
	if ( index == null )
	{
		$(".header").children("h1").html(desc['gamename']);
		$(".header").children("p").html(desc['slogan']);
	}
	else
	{
		if ( rewardText == null )
		{
				$(".header").children("h1").html(desc[index][0]);
				$(".header").children("p").html(desc[index][1] + ' &bull; ' + desc['reward'] + ': \
					<span style="font-weight: bold; color: green;">§' + tasks[index][3] + '</span> | ' + desc['cost'] + ': \
					<span style="font-weight: bold; color: brown;">' + tasks[index][0] + ' KHG</span>, \
					<span style="font-weight: bold; color: black;">' + tasks[index][1] + ' KGS</span>, \
					<span style="font-weight: bold; color: orange;">' + tasks[index][2] + ' SHG</span> & \
					<b>' + (tasks[index][4] * taskDelay[index]) / 1000 + ' ' + desc['sec']);
		}
		else
		{
				$(".header").children("h1").html(desc[index][0]);
				$(".header").children("p").html(desc[index][1] + ' &bull; ' + rewardText);
		}		
	}
}

function makeBurger(after, burgerid, obj)
{
	var obj_progress = obj.children('.progress');

	var progressTimerB = new Array();
	var progressNumB = new Array();

	progressNumB[burgerid] = new Array();

	var timeMake = objects[burgerid][0] - timeb;

	if ( timeMake < 1 )
		timeMake = 1;
	else
		timeMake = timeMake;

	progressNumB[burgerid]['total'] = (Date.now() + timeMake) - Date.now();
	progressNumB[burgerid]['start'] = Date.now();

	var curr_burger = burgerid;

	progressTimerB[burgerid] = setInterval(function()
	{
		var elapsed = Date.now() - progressNumB[curr_burger]['start'];

		var percent = Math.round((elapsed/progressNumB[curr_burger]['total']) * 100);

		obj_progress.css({ width : percent + "%" });
	}, 1);

	setTimeout(function()
	{
		obj_progress.css({ width : '0%'});

		stats[burgerid] += objects[burgerid][1] + amountb;

		after(burgerid);

		clearTimeout(progressTimerB[burgerid]);

	}, timeMake);
}

function updateEconomy()
{
	$("#kolcarham_amount").text(stats['kolcarham']);
	$("#kolcargues_amount").text(stats['kolcargues']);
	$("#sampham_amount").text(stats['sampham']);
	$("#dolargues_amount").text(stats['dolargues']);
}

function closeOverlay()
{
	$(".box").fadeOut(500, function()
	{
		$(".overlay").fadeOut(500);
		$(".box").empty();
	});
}

function doTypewriter(text, object, delay, options)
{
	if ( delay == null )
		delay = 10;
	
	if ( options == null )
		options = new Array();

	if ( options['style'] == null )
		options['style'] = '';
	else
		options['style'] = 'style="' + options['style'] + '"';

	if ( options['wrap'] == null )
		options['wrap'] = $("<div class=\"typewriter\"></div>")
	else
		options['wrap'] = $("<" + options['wrap'] + " " + options['style'] + "></" + options['wrap'] + ">");

	if ( options['text'] == null )
		options['text'] = "Continuar";

	var textSplit = str_split(text, 1);

	var index = 0;

	var append = object.append(options['wrap']);

	if ( options['wrap'] == "pre" )
		var newline = '\n';
	else
		var newline = '<br>';

	if ( timer_type !== null )
		clearTimeout(timer_type);
	else
		console.log('theres a timer set');

	timer_type = setInterval(function()
	{
		if ( index <= textSplit.length - 1 )
		{
			if ( textSplit[index] == "%" )
				object.children(options['wrap']).append(newline);
			else
				object.children(options['wrap']).append(textSplit[index]);
		}

		if ( index >= textSplit.length - 1 )
		{
			var button = $("<button class=\"close_overlay\" onclick=\"javascript:closeOverlay()\">" + options['text'] + "</a>");
			object.append(button);

			clearTimeout(timer_type);
		}

		index++;
	}, delay);
}

function openOverlayAppend(callback)
{
	$(".overlay").fadeIn(500, function()
	{
		$(".box").fadeIn(500, callback($(".box")));
	});
}

function openOverlay()
{
	$(".overlay").fadeIn(500, function()
	{
		$(".box").fadeIn(500);
	});	
}

function overlayAppend(object)
{
	$(".box").append(object);
}

function sellBurger(burgerid)
{
	if ( stats[burgerid] > 0 )
	{
		stats[burgerid] -= 1;

		stats['dolargues'] += objects[burgerid][2] * sellb;
	}
	else
		objectInfo('noresource', desc['noresource'][0]);
}

// jQuery function extension

jQuery.fn.typeWriter = function(text, delay, options) 
{
    var object = $(this[0]);
    doTypewriter(text, object, delay, options);
};

jQuery.fn.startTask = function(after, wrap2, font_size)
{
	var object = $(this[0]);

	var task2 = object.attr('id');

	doTask(after, wrap2, font_size, object, task2);
}

jQuery.fn.hasResource = function()
{
	var object = $(this[0]);

	var type = object.data('type');

	switch ( type )
	{
		case 1:
			return hasResourcesTask(object.attr('id'));
		break;
		case 2:
			return hasResourcesHelper(object.attr('id'));
		break;
	}
}

jQuery.fn.putObjectInfo = function(rewardText)
{
	var object = $(this[0]);

	objectInfo(object.attr('id'), object.data('type'), rewardText);
}

jQuery.fn.makeBurger = function(after)
{
	var object = $(this[0]);

	makeBurger(after, object.attr('id'), object);
}

jQuery.fn.doBoost = function(after)
{
	var object = $(this[0]);

	doBoost(object.attr('id'), object);
}
