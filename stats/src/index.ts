import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Create an instance of MatchReader and satisfie the 'DataReader'interface
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winAnalysisForHtml('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
