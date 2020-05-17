$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Userstory.feature");
formatter.feature({
  "name": "Selenium automation using gradle and cucumber",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "run the below steps",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@man"
    }
  ]
});
formatter.step({
  "name": "step one",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "step two",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "step three",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});