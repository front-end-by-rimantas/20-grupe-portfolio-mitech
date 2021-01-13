// ALL IMPORT
// header
import { NaviBar } from './components/navBar/NaviBar.js';
import { naviData} from './data/naviData.js';
// hero
// services
// our company
import {renderOurCompany} from './components/ourCompany/renderOurCompany.js';
import {ourCompanyData} from './data/ourCompanyData.js';

// fun facts
import {FunFacts} from './components/funFacts/FunFacts.js';
import {funFactsData} from './data/funFactsData.js';
// CODE EXECUTION
// header
const naviBar = new NaviBar(naviData);
naviBar.init();
console.log(naviBar);
// hero
// services
//our company
renderOurCompany('.right-company-column > .list', ourCompanyData);
// fun facts
const funFacts = new FunFacts(funFactsData);
funFacts.init();
