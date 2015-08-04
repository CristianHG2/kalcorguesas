<?php

header("Content-type: text/html;charset=UTF-8");

function applyLang($buffer)
{
	$lang2 = $_GET['lang'];

	$lang = json_decode(file_get_contents('lang/lang.json'), true);

	preg_match_all('/%(.*)%/U', $buffer, $matches);

	foreach ( $matches[1] as $i )
	{
		if ( isset($lang[$lang2][$i]) )
			$buffer = str_replace('%'.$i.'%', $lang[$lang2][$i], $buffer);
	}
	
	return $buffer;
}

ob_start('applyLang');

include('sources/index.html');

ob_end_flush();