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

tasks['codesamp']['text'] = '#include "main.h"%\
#include "md5.h"%%\
#include <Windows.h>%%\
#define SERVER_PORT 7777%%\
RakPeerInterface *rakServer = NULL;%\
Scripts *serverScripts = NULL;%%\
int main ()%\
{%\
rakServer = RakNetworkFactory::GetRakPeerInterface();%%\
    rakServer->SetMaximumIncomingConnections(MAX_CONNS);%\
    rakServer->setAttr("GOODSYNC", false);%%\
    rakServer->Startup(MAX_CONNS, 30, &SocketDescriptor(SERVER_PORT,0), 1);%%\
    return 0;%\
}';

tasks['rapespookie']['text'] = '\
Kalcor: Spookie, quiero meterte una hamburguesa por el culo%%\
Spookie: ...%%\
Spookie: Vete a la mierda Kalcor%%\
Kalcor: No%%\
Kalcor: /bring DianaLaHamburguesa%%\
Diana la hamburguesa ataca a Spookie%%\
Spookie: VETE A LA MIERDA KALCOR NO JODA%%\
Kalcor: Es muy tarde%%\
Kalcor le mete una hamburguesa por el culo a Spookie%%\
Spookie ha ganado +1 (una) hamburguesa anal%%\
';

tasks['dopaja']['text'] = 'Kalcor está mirando el menú de Burger King%% Kalcor: Oh dios mio, mira la textura de la carne de la Stacker 5.0... mmmm..%% Kalcor baja su cierre y empieza a masturbarse%% Kalcor: ¡OH SÍ JODER! ¡MIRA COMO ESTÁ LA LECHUGA Y SUS CONDIMENTOS!%% Kalcor acaba en el menú y en la cara de la cajera.';