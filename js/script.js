import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import TabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import FetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAccordion from './modules/accordion.js';

const TabNav = new TabNav('[data-tab="menu"] li','[data-tab="content"] section');
TabNav.init();

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();

FetchAnimais('../../animaisapi.json', '.numeros-grid');
