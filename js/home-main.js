// ALL IMPORT
// header
import { NaviBar } from './components/navBar/NaviBar.js';
import { naviData} from './data/naviData.js';
// hero
// services
// fun facts
import {FunFacts, funFacts} from './components/funFacts/FunFacts.js';
import {funFactsData} from './data/funFactsData.js';
// CODE EXECUTION
// header
const naviBar = new NaviBar(naviData);
naviBar.init();
console.log(naviBar);
// hero
// services
// fun facts
const funFacts = new FunFacts(funFactsData);
funFacts.init();