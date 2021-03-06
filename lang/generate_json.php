<?php

$lang['es'] = array(
	"name"			=> "Kolcarguesas",
	"slogan"		=> "Desarrollado por CristianHG",

	"kolcarham"		=> "Kolcar hamburguesa",
	"kolcargues"	=> "Kolcarguesa",
	"sampham"		=> "SA:MP hamburguesa",
	"dolargues"		=> "Dolarguesas",

	"burger_title"	=> "Hamburguesas",
	"helper_title"	=> "Ayudantes",
	"tasks_title"	=> "Trabajos",

	"human_r"		=> "Recursos Humanos",
	"hire_cook"		=> "Contratar a un chef",
	"do_market"		=> "Hacer mercadeo",
	"sync_better"	=> "Mejorar sincronización",

	"codesamp"		=> "Programar SA:MP",
	"rapespookie"	=> "TESTINGTESTING",
	"dopaja"		=> "TESTINGTESTING",

	"sell"			=> "Vender hamburguesas",
	"no_resources"	=> "No tienes los recursos necesarios",
	"reward"		=> "Recompensa",
	"cost"			=> "Cost",

	"codesamp_text"	=> "#include \"main.h\"%
						#include \"md5.h\"%%
						#include <Windows.h>%%
						#define SERVER_PORT 7777%%
						RakPeerInterface *rakServer = NULL;%
						Scripts *serverScripts = NULL;%%
						int main ()%
						{%
						rakServer = RakNetworkFactory::GetRakPeerInterface();%%
						    rakServer->SetMaximumIncomingConnections(MAX_CONNS);%
						    rakServer->setAttr(\"GOODSYNC\", false); // recordatorio: cambiar después de SA-MP 0.4%%
						    rakServer->Startup(MAX_CONNS, 30, &SocketDescriptor(SERVER_PORT,0), 1);%%
						    return 0;%
						}",
	"spookie_text"	=> "TESTING%%TESTING",
	"dopaja_text"	=> "TESTING%%TESTING",

	"codesampdesc"	=> "Desincronizemonos juntos",
	"spookiedesc"	=> "A veces Diana no es suficiente",
	"dopajadesc"	=> "Oh si Diana justo en la grasa",
	"kolcarhamdesc"	=> "¡Incluye una hosted tab!",
	"kolcguesdesc"	=> "Come una de estas y pelea menos con Y_Less",
	"samphamdesc"	=> "Come-mete un-una de est-a-esta-s!",
	"humandesc"		=> "Contrata empleados",
	"cookfastdesc"	=> "Cocina más rapido",
	"marketingdesc"	=> "Vende más caro",
	"syncdesc"		=> "lol ni en 10,000 años",

	"mouse"			=> "Coloca tu puntero encima de los objetos para saber más sobre ellos",
	"seconds"		=> "segundos",
	"value"			=> "Valor"
);

$lang['en'] = array(
	"name"			=> "Kolcarburger",
	"slogan"		=> "Developed by CristianHG",

	"kolcarham"		=> "Kolcar Burger",
	"kolcargues"	=> "UnsyncBurger",
	"sampham"		=> "SA:MP Burger",
	"dolargues"		=> "Dolargers",

	"burger_title"	=> "Burgers",
	"helper_title"	=> "Helpers",
	"tasks_title"	=> "Jobs",

	"human_r"		=> "Human Resources",
	"hire_cook"		=> "Hire a chef",
	"do_market"		=> "Do marketing",
	"sync_better"	=> "Improve synchronization",

	"codesamp"		=> "Develop SA:MP",
	"rapespookie"	=> "TESTINGTESTING",
	"dopaja"		=> "TESTINGTESTING",

	"sell"			=> "Sell burgers",
	"no_resources"	=> "You don't have the necessary resources",
	"reward"		=> "Reward",
	"cost"			=> "Cost",

	"codesamp_text"	=> "#include \"main.h\"%
						#include \"md5.h\"%%
						#include <Windows.h>%%
						#define SERVER_PORT 7777%%
						RakPeerInterface *rakServer = NULL;%
						Scripts *serverScripts = NULL;%%
						int main ()%
						{%
						rakServer = RakNetworkFactory::GetRakPeerInterface();%%
						    rakServer->SetMaximumIncomingConnections(MAX_CONNS);%
						    rakServer->setAttr(\"GOODSYNC\", false); // reminder: change after SA:MP 0.4%%
						    rakServer->Startup(MAX_CONNS, 30, &SocketDescriptor(SERVER_PORT,0), 1);%%
						    return 0;%
						}",
	"spookie_text"	=> "TESTING%%TESTING",
	"dopaja_text"	=> "TESTING%%TESTING",

	"codesampdesc"	=> "Let's unsynchronize together",
	"spookiedesc"	=> "Sometimes Diana is not enough",
	"dopajadesc"	=> "Oh yes Diana, right there in my fourth chin",
	"kolcarhamdesc"	=> "Includes a hosted tab!",
	"kolcguesdesc"	=> "Eat one of these and we promise you'll fight less with Y_Less",
	"samphamdesc"	=> "Ea-a-eat O-on-e-one of the-he-se",
	"humandesc"		=> "Hire employees",
	"cookfastdesc"	=> "Cook quicker",
	"marketingdesc"	=> "Get more profit",
	"syncdesc"		=> "lmao not in a million years",

	"mouse"			=> "Hover your mouse over an object to know more about it",
	"seconds"		=> "seconds",
	"value"			=> "Value"
);

echo "<pre>";

$lang_f['es'] = array();

foreach ( $lang['es'] as $key => $i )
{
	$lang_f['es'][$key] = trim(preg_replace('/\s+/', ' ', $i));
}

foreach ( $lang['en'] as $key => $i )
{
	$lang_f['en'][$key] = trim(preg_replace('/\s+/', ' ', $i));
}

var_dump(file_put_contents('lang.json', json_encode($lang_f)));
