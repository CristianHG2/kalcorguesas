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

 /**
  *
  * Array structures
  *
  * Objects:
  *
  * Main => [ [element] => [[time], [amount], [dolarvalue]] ]
  *
  * Boosts:
  *
  * Main => [ [element] => [[timeboost], [amountboost], [sellboost], [pdolar]] ]
  *
  *	Tasks:
  *
  * Main => [ [element] => [[p_kham], [p_kgues], [p_sham], [time], [dolar_reward]] ]
  * 
  */

// Objects table

var objects = new Array();

objects['kolcarham']    = new Array(3000, 1, 50);
objects['kolcargues'] 	= new Array(4000, 1, 80);
objects['sampham'] 		  = new Array(6000, 1, 100);

// Multiplicators (Boosts) table

var boosts = new Array();

boosts['human_resources'] = new Array(0, 1, 0, 3000);
boosts['faster_cooking'] = new Array(2, 1, 0, 8000);
boosts['do_marketing'] = new Array(0, 0, 2, 12000);
boosts['sync'] = new Array(10, 10, 10, 200000);

// Tasks table

var tasks = new Array();

tasks['codesamp'] = new Array(0, 0, 5, 5000, 10000);
tasks['rapespookie'] = new Array(10, 10, 20, 8000, 20000);
tasks['dopaja'] = new Array(15, 15, 18, 13000, 30000);

// Object descriptions

var desc = new Array();

// Variable holders

var text = new Array();

var timer_type;

var stats = new Array();

stats['kolcarham'] = 0;
stats['kolcargues'] = 0;
stats['sampham'] = 0;
stats['dolargues'] = 0;

var inProgress = new Array();

var timeb = 0;
var sellb = 1;
var amountb = 0;

var taskDelay = new Array();

taskDelay['codesamp'] = 1;
taskDelay['rapespookie'] = 1;
taskDelay['dopaja'] = 1;

// Job and boost indicator

var completed = new Array();