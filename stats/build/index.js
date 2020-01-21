"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// Create an instance of MatchReader and satisfie the 'DataReader'interface
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summary = Summary_1.Summary.winAnalysisForHtml('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
