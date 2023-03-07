import * as flsFunctions from "./modules/functions.js";
import smoothscroll from 'smoothscroll-polyfill';

const chooseTokenButtons = document.querySelectorAll('.choose-token-button');
const chooseTokenInput = document.querySelector('.find-bridge-form__choose-token-input');    
const networksListInputs = document.querySelectorAll('.networks-list-input');
const menuButton = document.querySelector('.header__menu-button');    
const closeMenuButton = document.querySelector('.mobile-menu__close-btn');
const supportedLogosCnt = document.querySelectorAll('.rankings__table-item-logos');    
const filtersBtn = document.querySelector('.overview__filter-button');
const filtersCloseBtn = document.querySelector('.filters-mobile-panel__back-btn');
const selectDateInput = document.querySelector('.select-date');
const popupBackBtn = document.querySelector('.popup-bottom__back-btn');
const popupBottomBg = document.querySelector('.popup-bottom__bg');
const selectButtons = document.querySelectorAll('.select__button');    
const advancedSettingsButton = document.getElementById('advancedSettingsBtn');    
const searchButton = document.querySelector('.search-button');
const popupCloseButtons = document.querySelectorAll('.popup__close');
const popups = document.querySelectorAll('.popup');
const estimatedTokenBtn = document.querySelector('.estimated-token-button');
const walletButton = document.querySelector('.wallet-info-button');
const faqItemHeaders = document.querySelectorAll('.faq__item-header');
const deleteSwapBtn = document.querySelector('.history__remove');
const innerPopupCloseButtons = document.querySelectorAll('.inner-popup-close');
const switchNetworkBtn = document.querySelector('.wallet-actions-popup__switch-network');
const tokensList = document.querySelector('.choose-token-popup__tokens-list');
const chooseTokenPopup = document.querySelector('#chooseTokenPopup');
const root = document.documentElement;
const moreBtn = document.querySelector('#moreTokensBtn');
const connectWalletBtn = document.querySelector('.connect-wallet-btn');
const swapBtn = document.querySelector('.transfers-form__submit');

flsFunctions.isWebp();
smoothscroll.polyfill();

function closeBottomPopup(evt) {
  evt.target.closest('.popup-bottom').classList.remove('active');        
}

function popupCloseHandler(evt) {
  if (evt.target.classList.contains('popup')) {
      evt.target.classList.remove('active');    
  }

  if (evt.target.classList.contains('popup__close')) {
      evt.target.closest('.popup').classList.remove('active');
  }
  
  document.body.classList.remove('fixed');
}

function filtersMobileHandler() {
  const filtersPanel = document.querySelector('.filters-mobile-panel');
  filtersPanel?.classList.toggle('active');
  document.body.classList.toggle('fixed');
}

function chooseTokenBtnHandler(event) {        
  const popup = document.querySelector('#chooseTokenPopup');
  event.preventDefault();
  popup?.classList.add('active');
  document.body.classList.add('fixed');
}

function collapseChooseTokenInput(event) {                
  const popup = event.target.closest('.input-cnt').querySelector('.form-network-list-popup');
  event.target.classList.remove('active');
  event.target.value = '';
  // chooseTokenBtn?.classList.add('active');
  popup.classList.remove('active');
}

function showNetworksPopup(event) {
  const popup = event.target.closest('.input-cnt').querySelector('.form-network-list-popup');
  
  popup.classList.add('active');
  !event.target.value && popup.classList.remove('active');
}

function collapseNetworksPopup(event) {
  const popup = event.target.closest('.input-cnt').querySelector('.form-network-list-popup');
  popup.classList.remove('active');
    event.target.value = '';
}

function collapseButtonHandler(evt) {
  const advancedSettings = document.querySelector('.transfers-form__advanced-settings');
  evt.preventDefault();
  evt.target.classList.toggle('active');
  advancedSettings?.classList.toggle('active');
}

function headerSearchHandler() {
  const searchPopup = document.querySelector('#searchPopup');
  searchPopup?.classList.add('active');
  document.body.classList.add('fixed');
}

// function openSupportedLogosPopup(event) {
//     event.target.querySelector('.tooltip-popup').classList.add('active');
// }    

if (selectButtons) {
  selectButtons.forEach(el => {
    el.addEventListener('click', () => {
        el.parentElement?.classList.toggle('active');
    })
  })        
}

function routeLogosContainerHandler() {        
  const containers = document.querySelectorAll('.route-logos');

  if (!containers) {
      return;
  }

  containers.forEach(el => {
    const routeLogos = el.querySelectorAll('.route-logo');            
    
    routeLogos.forEach((el, i) => {                
        el.style.transform = `translateX(${i * 100}%)`; 
        el.style.left = `${i * -12}px`; 
    })

    el.style.width = routeLogos.length * 26 - (routeLogos.length - 1) * 12 + 'px'; 
  })                                                            
}        

function faqItemToggle(evt) {
  const faqItems = document.querySelectorAll('.faq__item');
  
  // faqItems.forEach(el => el.classList.remove('active'));
  evt.target.parentElement.classList.toggle('active');
}

filtersBtn?.addEventListener('click', filtersMobileHandler);
filtersCloseBtn?.addEventListener('click', filtersMobileHandler);

searchButton?.addEventListener('click', headerSearchHandler);

popupCloseButtons.forEach(el => {
  el.addEventListener('click', popupCloseHandler);
  document.body.classList.remove('fixed');
})

popups.forEach(el => {
  el.addEventListener('click', popupCloseHandler);    
  document.body.classList.remove('fixed');    
})

menuButton?.addEventListener('click', flsFunctions.mobileMenuHandler().open);
closeMenuButton?.addEventListener('click', flsFunctions.mobileMenuHandler().close);

chooseTokenButtons?.forEach(el => {
  el.addEventListener('click', chooseTokenBtnHandler);
})

selectDateInput?.addEventListener('click', () => {
  const dateInputPopup = document.querySelector('.date-picker-popup');
  dateInputPopup?.classList.add('active');
  document.body.classList.add('fixed');
})

document.addEventListener('keydown', (evt) => {
  popups.forEach(el => {
      if (evt.key === 'Escape') el.classList.remove('active');
      document.body.classList.remove('fixed');
  })        
})

popupBackBtn?.addEventListener('click', closeBottomPopup);
popupBottomBg?.addEventListener('click', closeBottomPopup);

estimatedTokenBtn?.addEventListener('click', (evt) => {
  const popup = document.querySelector('#routesPopup');        
  evt.preventDefault();
  popup?.classList.add('active');
  document.body.classList.add('fixed');        
})

advancedSettingsButton?.addEventListener('click', collapseButtonHandler);
routeLogosContainerHandler();

document.addEventListener('click', (evt) => {
  console.log(evt.target);
})  

walletButton?.addEventListener('click', () => {
  const popup = document.querySelector('#walletActionsPopup');
  popup?.classList.add('active');
  document.body.style.position = 'fixed';
})

faqItemHeaders.forEach(el => {
  el.addEventListener('click', (evt) => {
    faqItemToggle(evt)
  })
})

if (innerPopupCloseButtons) {
  innerPopupCloseButtons.forEach(el => {
    el.addEventListener('click', (evt) => {
      evt.target.closest('.inner-popup').classList.remove('active');
    })
  })
}

if (switchNetworkBtn) {
  switchNetworkBtn.addEventListener('click', (evt) => {
    const popup = evt.target.parentElement.querySelector('.switch-network-popup');
    popup.classList.add('active');
  })
}

if (deleteSwapBtn) {
  deleteSwapBtn.addEventListener('click', () => {
    const deleteHistoryPopup = document.querySelector('.delete-history-popup');
    deleteHistoryPopup.classList.add('active');
  })
}

root.style.setProperty('--tokens-list-height', chooseTokenPopup.offsetHeight - 164 + 'px');

if (moreBtn) {
  moreBtn.addEventListener('click', (evt) => {
    const popup = evt.target.closest('.popup').querySelector('.switch-network-popup');
    popup.style.height = '100vh';
    popup.classList.add('active');
  })
}

if (connectWalletBtn) {
  connectWalletBtn.addEventListener('click', () => {
    const popup = document.querySelector('.choose-wallet-popup');
    popup.classList.add('active');
  })
}

if (swapBtn) {
  swapBtn.addEventListener('click', (evt) => {
    const popup = document.querySelector('#agreementPopup');
    evt.preventDefault();
    popup.classList.add('active');
    document.body.classList.add('fixed');
  })
}