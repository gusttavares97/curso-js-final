import initScrollSuave from './modules/scroll-suave.js';
import TabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import FetchAnimais from './modules/fetch-animais.js';
import FetchBitcoin from './modules/fetch-bitcoin.js';
import initAccordion from './modules/accordion.js';
import scrollAnima from './modules/scroll-anima.js';

const TabNav = new TabNav('[data-tab="menu"] li','[data-tab="content"] section');
TabNav.init();

const scollAnima =new ScrollAnima('[data-anime="scroll"]', )
scollAnima.init()


initScrollSuave();
initAccordion();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();

FetchAnimais('../../animaisapi.json', '.numeros-grid');

FetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

