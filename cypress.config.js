//const { defineConfig } = require("cypress");

//module.exports = defineConfig({
  //e2e: {
    //baseUrl:'http://front.serverest.dev',
    //chromeWebSecurity: false,
    //experimentalSessionAndOrigin: true,
    //setupNodeEvents(on, config) {
      // implement node event listeners here.
    //},
  //},
//});

//const { defineConfig } = require('cypress');

//module.exports = defineConfig({
 // e2e: {
   // baseUrl: 'https://front.serverest.dev/login', // URL do site serverest pata o
   // chromeWebSecurity: false, // Desativa verificação de segurança no Chrome
 // },
//});
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    chromeWebSecurity: false, 
    experimentalModifyObstructiveThirdPartyCode: true, // Tenta ignorar bloqueios de segurança
  }
});
