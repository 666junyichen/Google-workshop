/**
 * Custom function that creates a welcome message
 * 
 * @param {string} name The name to greet
 * @return {string} The greeting message
 * @customfunction
 */
function HELLO_WORKSHOP(name) {
  if (!name) {
    name = "Guest";
  }
  return "Hello, " + name + "! Welcome to the Google Workshop!";
}

/**
 * Simple function to demonstrate Apps Script
 * This function can be run from the script editor
 */
function testFunction() {
  var message = HELLO_WORKSHOP("Participant");
  Logger.log(message);
  
  // You can also show an alert in the spreadsheet
  SpreadsheetApp.getActiveSpreadsheet().toast(message, "Workshop Message");
}

/**
 * Creates a custom menu when the spreadsheet opens
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Workshop Tools')
      .addItem('Say Hello', 'testFunction')
      .addToUi();
}
