// This file provides a direct way to load the transaction data
// Add this script tag right after the chart.js script in financial-dashboard.html

// Direct transaction data (first part of your data.csv)
const directTransactionData = `Trade Date,Settlement Date,Type,Institution/Asset,Account Number,Account Type,Account Name,Groups,Description,Account Currency,Currency Amount,Fee,Symbol,Quantity,Category,ID
2025-03-08,2025-03-09,Withdrawal,RBC Online Banking,094535115639,chequing,RBC Advantage Banking,,Interac purchase,CAD,-14.94,,,,,67cda2fa960e582a14861560
2025-03-07,2025-03-09,Withdrawal,RBC Online Banking,094535115639,chequing,RBC Advantage Banking,,e-Transfer sent 97 mayor payments T6VXW9,CAD,-1000,,,,,67cda2fa960e582a1486155a
2025-03-07,2025-03-09,Withdrawal,RBC Online Banking,094535115639,chequing,RBC Advantage Banking,,e-Transfer sent cisco W6KZ5X,CAD,-27.13,,,,,67cda2fa960e582a14861554
2025-03-07,2025-03-09,Withdrawal,RBC Online Banking,094535115639,chequing,RBC Advantage Banking,,Loan payment,CAD,-1045.8,,,,,67cda2fa960e582a1486154e
2025-03-07,2025-03-09,Unknown,CIBC,9545,credit,Visa Cad,,PAYMENT THANK YOU/PAIEMEN T MERCI,CAD,85.09,,,,,67cdb0c0ad248706e2ce4e1b
2025-03-07,2025-03-09,Unknown,CIBC,6831,credit,Visa Cad,,PAYMENT THANK YOU/PAIEMEN T MERCI,CAD,23.56,,,,,67cdb0b4ad248706e2ce40be
2025-03-07,2025-03-09,Unknown,CIBC,1690,chequing,CIBC Smart Account,,E-TRANSFER 011196490534 MATEUS SAAR,CAD,1000,,,,,67cdb0b2ad248706e2ce3edd
2025-03-07,2025-03-09,Unknown,CIBC,1690,chequing,CIBC Smart Account,,E-TRANSFER 011251719837 TIAN LIU,CAD,660,,,,,67cdb0b2ad248706e2ce3ed7
2025-03-07,2025-03-09,Unknown,CIBC,1690,chequing,CIBC Smart Account,,INTERNET TRANSFER 000000237753,CAD,-85.09,,,,,67cdb0b2ad248706e2ce3ed1
2025-03-07,2025-03-09,Unknown,CIBC,1690,chequing,CIBC Smart Account,,INTERNET TRANSFER 000000237820,CAD,-23.56,,,,,67cdb0b2ad248706e2ce3ecb
2025-03-06,2025-03-09,Deposit,RBC Online Banking,094535115639,chequing,RBC Advantage Banking,,Misc Payment MATEUS SAAR,CAD,3000.79,,,,,67cda2fa960e582a14861548
2025-03-06,2025-03-09,Withdrawal,RBC Online Banking,094535115639,chequing,RBC Advantage Banking,,e-Transfer sent ben didham RM9267,CAD,-2000,,,,,67cda2fa960e582a14861542
2025-03-06,2025-03-09,Withdrawal,CIBC,1690,chequing,CIBC Smart Account,,PREAUTHORIZED DEBIT NEWFOUNDLAND POWER INC.,CAD,-127.55,,,,,67cdb0b2ad248706e2ce3ec5
2025-03-06,2025-03-09,Withdrawal,CIBC,1690,chequing,CIBC Smart Account,,PREAUTHORIZED DEBIT NEWFOUNDLAND POWER INC.,CAD,-620.59,,,,,67cdb0b2ad248706e2ce3ebf
2025-03-06,2025-03-09,Withdrawal,RBC Online Banking,5415********0507,credit,RBC Cash Back Mastercard,,Spotify P34AC1FC36,CAD,-14.59,,,,,67cda304960e582a148617ba
2025-03-04,2025-03-09,Unknown,CIBC,9545,credit,Visa Cad,,PAYMENT THANK YOU/PAIEMEN T MERCI,CAD,100.7,,,,,67cdb0c0ad248706e2ce4e15
2025-03-04,2025-03-09,Unknown,CIBC,9545,credit,Visa Cad,,PURCHASE INTEREST,CAD,-75.09,,,,,67cdb0c0ad248706e2ce4e0f
2025-03-03,2025-03-09,Deposit,RBC Online Banking,094535115639,chequing,RBC Advantage Banking,,Misc Payment MATEUS SAAR,CAD,3000.79,,,,,67cda2fa960e582a1486153c
2025-03-03,2025-03-09,Withdrawal,RBC Online Banking,094535115639,chequing,RBC Advantage Banking,,e-Transfer sent ben didham BVRVFK,CAD,-2000,,,,,67cda2fa960e582a14861536
2025-03-03,2025-03-09,Withdrawal,RBC Online Banking,094535115639,chequing,RBC Advantage Banking,,e-Transfer sent chloe MTDUY6,CAD,-637.5,,,,,67cda2fa960e582a14861530`;

// Function to use direct data instead of fetch
function useDirectData() {
  // Check if parseCSVData function exists
  if (typeof parseCSVData === 'function') {
    console.log('Loading data directly from data.js...');
    parseCSVData(directTransactionData);
    return true;
  }
  return false;
}

// Try to auto-load the direct data
setTimeout(() => {
  if (!useDirectData()) {
    console.log('Unable to directly load data - waiting for dashboard initialization');
  }
}, 1000);
