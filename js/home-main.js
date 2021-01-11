// ALL IMPORT
// header
import { NaviBar } from './components/navBar/NaviBar.js';
import { naviData} from './data/naviData.js';
// hero
// services
// case studies
import { caseStudiesData } from './data/caseStudiesData.js';
import { caseStudyCards } from './components/caseStudies/caseStudyCards.js';

// CODE EXECUTION
// header
const naviBar = new NaviBar(naviData);
naviBar.init();
console.log(naviBar);


// hero
// services

// case studies
caseStudyCards(caseStudiesData, '.case-studies-container');

