// const svgArr2 = [
//     'DASHBOARD2',
//     'PRODUCTCATALOG2',
//     'REPORT2',
//     'CATEGORY2',
//     'SERVICEPACKAGEWHITE',
//     'USERMANAGEMENTWHITE',
//     'VENDORWHITE',
//     'SIGNOUTWHITE',
//     'SETTINGWHITE',
//     'AIRPORT2',
//     'USER2',
//     'DOC2',
//     'CITY2',
//     'SERVICELOC2',
//     'CARDBINWHITE',
//     'CONSUMERWHITE',
//     'EVENTWHITE',
//     'SERVICEPROVIDERWHITE',
//     'TEMPLATEWHITE',
//     'CARWHITE',
//     'CARTYPEWHITE',
//     'TERMINALWHITE'
// ]

// const svgArr = [
//     'DASHBOARD',
//     'PRODUCTCATALOG',
//     'REPORT',
//     'CATEGORY',
//     "SERVICEPACKAGE",
//     'USERMANAGEMENT',
//     'VENDOR',
//     'SIGNOUT',
//     'SETTING',
//     'AIRPORT1',
//     'USER1',
//     'DOC1',
//     'CITY',
//     'SERVICELOC',
//     'CARDBIN',
//     'CONSUMER',
//     'EVENT',
//     'SERVICEPROVIDER',
//     'TEMPLATE',
//     'CAR',
//     'CARTYPE',
//     'TERMINAL'
// ]




const fs = require('fs');

const originalNames = [
  'Dashboard.svg',
  'Product catalog.svg',
  'Report.svg',
  'CATEGORY.svg',
  'Service package.svg',
  'USER MANAGEMENT.svg',
  'VENDOR.svg',
  'SIGN OUT.svg',
  'SETTING.svg',
  'airport1.svg',
  'user1.svg',
  'doc1.svg',
  'city.svg',
  'serviceloc.svg',
  'cardbin.svg',
  'consumer.svg',
  'event.svg',
  'serviceprovider.svg',
  'template.svg',
  'car.svg',
  'cartype.svg',
  'terminal.svg'
];

const newNames = [
  'DASHBOARD',
  'PRODUCTCATALOG',
  'REPORT',
  'CATEGORY',
  "SERVICEPACKAGE",
  'USERMANAGEMENT',
  'VENDOR',
  'SIGNOUT',
  'SETTING',
  'AIRPORT1',
  'USER1',
  'DOC1',
  'CITY',
  'SERVICELOC',
  'CARDBIN',
  'CONSUMER',
  'EVENT',
  'SERVICEPROVIDER',
  'TEMPLATE',
  'CAR',
  'CARTYPE',
  'TERMINAL'
];

let allCommands = '';

for (let i = 0; i < originalNames.length; i++) {
  const oldName = originalNames[i];
  const newName = newNames[i] + '.svg';
  const command = `git mv "src/assets/${oldName}" "src/assets/${newName}"`;
  allCommands += command + '\n';
  console.log(command);
}

// Write all commands to a file
fs.writeFileSync('./src/sample.txt', allCommands, 'utf8');
console.log('✅ All git mv commands written to src/sample.txt');



const originalNames2 = [
  'Dashboard2.svg',
  'Product catalog2.svg',
  'Report2.svg',
  'CATEGORY2.svg',
  'Service packagewhite.svg',
  'USER MANAGEMENTWHITE.svg',
  'VENDORWHITE.svg',
  'SIGN OUTWHITE.svg',
  'SETTINGWHITE.svg',
  'airport2.svg',
  'user2.svg',
  'doc2.svg',
  'city2.svg',
  'serviceloc2.svg',
  'cardbinwhite.svg',
  'consumerWhite.svg',
  'eventWhite.svg',
  'serviceproviderWhite.svg',
  'templateWhite.svg',
  'carWhite.svg',
  'cartypeWhite.svg',
  'terminalWhite.svg'
];

const newNames2 = [
  'DASHBOARD2',
  'PRODUCTCATALOG2',
  'REPORT2',
  'CATEGORY2',
  'SERVICEPACKAGEWHITE',
  'USERMANAGEMENTWHITE',
  'VENDORWHITE',
  'SIGNOUTWHITE',
  'SETTINGWHITE',
  'AIRPORT2',
  'USER2',
  'DOC2',
  'CITY2',
  'SERVICELOC2',
  'CARDBINWHITE',
  'CONSUMERWHITE',
  'EVENTWHITE',
  'SERVICEPROVIDERWHITE',
  'TEMPLATEWHITE',
  'CARWHITE',
  'CARTYPEWHITE',
  'TERMINALWHITE'
];

let allCommands2 = '';

for (let i = 0; i < originalNames2.length; i++) {
  const oldName = originalNames2[i];
  const newName = newNames2[i] + '.svg';
  const command = `git mv "src/assets/${oldName}" "src/assets/${newName}"`;
  allCommands2 += command + '\n';
  console.log(command);
}

fs.writeFileSync('./src/sample2.txt', allCommands2, 'utf8');
console.log('✅ All git mv commands written to src/sample2.txt');
