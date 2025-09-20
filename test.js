// const set = new Set();

// set.add(1);
// set.add(2);
// set.add(3);
// set.add(1);

// console.log([...set]);

// set.delete(1);
// console.log(set.size);

// const string1 = 'apple'; // check the occurence of alphabet in string 

// const occurence = (str) => {
//     console.log(str);
//     console.log(str.split(''));
//     let obj = {};
//     str.split('').forEach((item) => {
//         let occur = obj.hasOwnProperty(item);
//         if (!occur) {
//             obj[item] = 1
//         } else {
//             obj[item]++
//         }
//     })
//     return obj;
// }

// const val = occurence(string1)
// console.log(val);




// const string = 'safi altamash khan';
// count = 0;
// for (const str of string) {   
//     if (str === 'a') {        
//         count++
//     }
// }
// console.log('count' ,count);


// const occurence = (str)=>{
//     const obj = {};
//     str.split('').forEach(element => {
//         let occur = obj.hasOwnProperty(element);
//         if (!occur) {
//             obj[element] = 1
//         }else{
//             obj[element]++
//         }
//     });
//     return obj;
// };

// const value = occurence(string);
// console.log(value);


// const promoCodeObj = [
//     { quantity: 5, denomination: 120 },
//     { quantity: 10, denomination: 130 },
//     { quantity: 2, denomination: 140 },
//     { quantity: 20, denomination: 150 }
// ];

// const employees = [1, 2, 3, 4, 5];

// employees.forEach(employee => {
//     console.log('Employee:', employee);
//     promoCodeObj.forEach(item => {
//         if (item.quantity > 0) { 
//             const obj = {
//             emp: employee,
//             quantity: 1,
//             denomination: item.denomination
//         };
//         console.log(obj);
//         item.quantity--;
//     }       
//     });
// });


// const promoCodeObj = [
//     { quantity: 2, denomination: 120 },
//     // { quantity: 10, denomination: 130 },
//     { quantity: 2, denomination: 140 }
//   ];

//   const employee = [1, 2, 3, 4, 5];

//   employee.forEach(employeeId => {
//     promoCodeObj.forEach(code => {
//       // Check if there are any codes remaining for this denomination
//       if (code.quantity > 0) {
//         const obj = {
//           emp: employeeId,
//           quantity: 1,
//           denomination: code.denomination
//         };
//         console.log(obj);
//         code.quantity--; // Decrement the remaining quantity for this code
//       }
//     });
//   });



// const promoCodeObj = [
//     { quantity: 1, denomination: 120 },
//     { quantity: 1, denomination: 150 },
//     { quantity: 1, denomination: 130 },
//     { quantity: 1, denomination: 140 }
// ];

// const employee = [1, 2, 3, 4, 5];

// let codeIndex = 0;

// promoCodeObj.forEach(code => {
//     const { quantity, denomination } = code;
//     for (let i = 0; i < quantity; i++) {
//         const employeeId = employee[codeIndex % employee.length];
//         console.log(employeeId);
//         const obj = {
//             emp: employeeId,
//             quantity: 1,
//             denomination: denomination
//         };
//         console.log(obj);
//         codeIndex++;
//     }
// });

// function f(x) {
//     x = "x-" + x;
//     console.log(x);
//     return function(y) {
//       y = "y-" + y;
//       console.log(y);
//       return function(z) {
//         console.log("z-" + y);
//         return "z-" + y;
//       }
//     }
//   }

//   let g = f("a")("b")("c");
//   console.log(g);


// let arr = [1,2,3,4,5,6,7,8];

// for( let i = 0 ; i <= arr.length ; i++ ){
//   console.log('..i' , i);
// };



// const newobj = {
//   "totalCoupons": 3280,
//   "issuedCoupons": 3196,
//   "redeemedCoupons": 20,
//   "distributedCoupons": 25,
//   "cancelledCoupons": 39
// }



// Object.keys(newobj).forEach(key => {
//   console.log(key, newobj[key]);
//   console.log('object keys');
// });
// -----output---
// {totalCoupons 3280
//   issuedCoupons 3196
//   redeemedCoupons 20
//   distributedCoupons 25
//   cancelledCoupons 39
// }




// Object.values(newobj).forEach(value => {
//   console.log(value);  
// });

//3280 3196 20 25 39


// Object.entries(newobj).forEach(([key, value]) => {
//   console.log(key, value); 
// });

// output-------
// totalCoupons 3280
// issuedCoupons 3196
// redeemedCoupons 20
// distributedCoupons 25
// cancelledCoupons 39

// const entriesArray = Object.entries(newobj).map(([key, value]) => {
//   return `${key}: ${value}`;
// });

// console.log(entriesArray);

// [
//   'totalCoupons: 3280',
//   'issuedCoupons: 3196',
//   'redeemedCoupons: 20',
//   'distributedCoupons: 25',
//   'cancelledCoupons: 39'
// ]



// const data = [   
//   { value: dataCoupon.redeemedCoupons, label: 'Redeemed Coupons' },
//   { value: dataCoupon.distributedCoupons, label: 'Distributed Coupons' },
//   { value: dataCoupon.cancelledCoupons, label: 'Cancelled Coupons' }
// ];

// const entriesArray = Object.entries(newobj).map(([key, value]) => {    
//        if (key !== 'totalCoupons' && key !== 'issuedCoupons') {
//         return  { value : value , label : key }
//       }    
//   });

// console.log(entriesArray);


// const entriesArray = Object.entries(newobj).reduce((acc, [key, value]) => {
//   if (key !== 'totalCoupons' && key !== 'issuedCoupons') {
//     acc.push({ value: value, label: key });
//   }
//   return acc;
// }, []);

// console.log(entriesArray);



// const newobj = {
//   "totalCoupons": 3280,
//   "issuedCoupons": 3196,
//   "redeemedCoupons": 20,
//   "distributedCoupons": 25,
//   "cancelledCoupons": 39
// }


// const entriesArray = Object.entries(newobj).reduce((acc, [key, value]) => {
//   if (key !== 'totalCoupons' && key !== 'issuedCoupons') {
//     acc.push({ value: value, label: key });
//   }
//   return acc;
// }, []);
// console.log(entriesArray);

// str = "2023_July"

// const strArr = [
//   "2023_July",
//   "2023_August",
//   "2023_August",
//   "2023_August",
//   "2023_August",
//   "2023_August",
//   "2023_September",
//   "2023_September",
//   "2023_September",
//   "2023_September",
//   "2023_September",
//   "2023_October",
//   "2023_October",
//   "2023_October",
//   "2023_October",
//   "2023_October",
//   "2023_November",
//   "2023_November",
//   "2023_November",
//   "2023_December",
//   "2023_December",
//   "2023_December",
//   "2023_December",
//   "2023_December",
//   "2023_January",
//   "2023_January",
//   "2023_January",
//   "2023_January",
//   "2023_January",
//   "2023_February",
//   "2023_February",
//   "2023_February",
//   "2023_February",
//   "2023_February"
// ]

// // val = str.split('_').join(' ');

// // val = strArr.forEach((item)=>{
// //  val =  item.split('_').join(' ');
// //  console.log(val);
// // })

// // const joinedStrings = strArr.map((item) => item.split('_').join(' '));
// // console.log(joinedStrings); // Output: ["hello world", "welcome back"]

// const cat = [
//   {
//     "categoryId": 9,
//     "categoryName": "Health And Fitness",
//     "imageLink": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/170789244118526232_Heart with Pulse.png"
//   },
//   {
//     "categoryId": 21,
//     "categoryName": "Bakers",
//     "imageLink": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/170789236302031348_Birthday Cake.png"
//   },
//   {
//     "categoryId": 3,
//     "categoryName": "Restaurant",
//     "imageLink": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/170789163659933516_Bar Counter.png"
//   },
//   {
//     "categoryId": 2,
//     "categoryName": "Accessories ",
//     "imageLink": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/170789213331993130_Flat Tire.png"
//   }
// ]

// const mer = [
//   {
//     "merchantId": 116,
//     "address": "حي, 6332 Nortern Ring Br Rd, Al Aqiq, Riyadh 13511, Saudi Arabia",
//     "contactPersonName": "Admin",
//     "createdDateTime": null,
//     "email": "testfmerchnat@yopmail.com",
//     "latitude": 10,
//     "longitude": 10,
//     "merchantName": "F Merchnat",
//     "phoneNumber": "966987897897997",
//     "pinCode": "13511",
//     "portalAccess": true,
//     "crNumber": "987987987",
//     "unifiedNumber": "89797978",
//     "vatNumber": "ADS97979797SDW",
//     "currencyCode": null,
//     "termsAndConditions": "Terms & Conditions",
//     "description": "Description",
//     "redeemptionComission": 12,
//     "countryId": 155,
//     "statusId": 2,
//     "redeemptionId": 3,
//     "brandName": "Fesal",
//     "imageURL": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/169494656780771592_download.jpeg",
//     "websiteURL": null,
//     "qrCode": null,
//     "repetitionCount": 21
//   },
//   {
//     "merchantId": 127,
//     "address": "7HP8PM7G+C4, Al Olaya, Riyadh 12251, Saudi Arabia",
//     "contactPersonName": "Admin",
//     "createdDateTime": null,
//     "email": "testredtag@yopmail.com",
//     "latitude": 10,
//     "longitude": 10,
//     "merchantName": "Redtag",
//     "phoneNumber": "966789988787878",
//     "pinCode": "12251",
//     "portalAccess": true,
//     "crNumber": "789465321",
//     "unifiedNumber": "546123789",
//     "vatNumber": "987654123645",
//     "currencyCode": null,
//     "termsAndConditions": "Terms & Conditions",
//     "description": "",
//     "redeemptionComission": 11,
//     "countryId": 155,
//     "statusId": 2,
//     "redeemptionId": 3,
//     "brandName": "Redtag",
//     "imageURL": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/169580354579651341_gift.jpg",
//     "websiteURL": "",
//     "qrCode": "",
//     "repetitionCount": 14
//   },
//   {
//     "merchantId": 164,
//     "address": "01, Nehru Nagar, Kewra Bagh, Jahangirabad, Bhopal, Madhya Pradesh 462001, India",
//     "contactPersonName": "Admin",
//     "createdDateTime": null,
//     "email": "octobermerchant@yopmail.com",
//     "latitude": 23.259933,
//     "longitude": 77.412615,
//     "merchantName": "October Merchant",
//     "phoneNumber": "919878979789",
//     "pinCode": "462001",
//     "portalAccess": true,
//     "crNumber": "123456789",
//     "unifiedNumber": "123456789",
//     "vatNumber": "GST1AS122AS1234",
//     "currencyCode": null,
//     "termsAndConditions": "Terms and Conditions ",
//     "description": "",
//     "redeemptionComission": 12,
//     "countryId": 82,
//     "statusId": 2,
//     "redeemptionId": 3,
//     "brandName": "Oct",
//     "imageURL": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/17033290126504617_WhatsApp Image 2023-12-23 at 16.21.01.jpeg",
//     "websiteURL": "oct.com",
//     "qrCode": "OctoberMerchant@yopmail.com",
//     "repetitionCount": 10
//   },
//   {
//     "merchantId": 145,
//     "address": "7HP8PM7G+C4, Al Olaya, Riyadh 12251, Saudi Arabia",
//     "contactPersonName": "Admin",
//     "createdDateTime": null,
//     "email": "testoctnmerchnat@yopmail.com",
//     "latitude": 24.713552,
//     "longitude": -46.675296,
//     "merchantName": "Oct N",
//     "phoneNumber": "966789788779887",
//     "pinCode": "12251",
//     "portalAccess": true,
//     "crNumber": "7898797897",
//     "unifiedNumber": "8797899787",
//     "vatNumber": "7878ASA78789789",
//     "currencyCode": null,
//     "termsAndConditions": "Terms & Conditions",
//     "description": "Description",
//     "redeemptionComission": 18,
//     "countryId": 155,
//     "statusId": 2,
//     "redeemptionId": 3,
//     "brandName": "OCT",
//     "imageURL": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/170477922590334596_download.jpeg",
//     "websiteURL": null,
//     "qrCode": "OCTNMERCHNAT",
//     "repetitionCount": 8
//   },
//   {
//     "merchantId": 160,
//     "address": "794X+4CP, G P O Marg, Chowki Talaiya, Talaiya, Bhopal, Madhya Pradesh 462001, India",
//     "contactPersonName": "Admin",
//     "createdDateTime": null,
//     "email": "adminmerchnatfesal@yopmail.com",
//     "latitude": 23.255391,
//     "longitude": 77.398677,
//     "merchantName": "Mercahnat Fesalz",
//     "phoneNumber": "966979797979798",
//     "pinCode": "462001",
//     "portalAccess": true,
//     "crNumber": "1234567",
//     "unifiedNumber": "12345678",
//     "vatNumber": "ASS87987979715",
//     "currencyCode": null,
//     "termsAndConditions": "Terms & Conditions",
//     "description": "",
//     "redeemptionComission": 12,
//     "countryId": 155,
//     "statusId": 2,
//     "redeemptionId": 3,
//     "brandName": "Admin.",
//     "imageURL": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/169787212956175369_gift.jpg",
//     "websiteURL": null,
//     "qrCode": "Adminmerchnatfesal@yopmail.com",
//     "repetitionCount": 5
//   }
// ]


// // const combinedData = cat?.flatMap((category) => {
// //   return mer?.map((merchant) => ({
// //     merchantName: merchant?.merchantName,
// //     merchantId: merchant?.merchantId,
// //     categoryName: category?.categoryName,
// //     categoryId: category?.categoryId,
// //   }));
// // })

// // console.log(combinedData);


// const data = {
//   "merchants": [
//     {
//       "merchantId": 116,
//       "address": "حي, 6332 Nortern Ring Br Rd, Al Aqiq, Riyadh 13511, Saudi Arabia",
//       "contactPersonName": "Admin",
//       "createdDateTime": null,
//       "email": "testfmerchnat@yopmail.com",
//       "latitude": 10.000000,
//       "longitude": 10.000000,
//       "merchantName": "F Merchnat",
//       "phoneNumber": "966987897897997",
//       "pinCode": "13511",
//       "portalAccess": true,
//       "crNumber": "987987987",
//       "unifiedNumber": "89797978",
//       "vatNumber": "ADS97979797SDW",
//       "currencyCode": null,
//       "termsAndConditions": "Terms & Conditions",
//       "description": "Description",
//       "redeemptionComission": 12.0,
//       "countryId": 155,
//       "statusId": 2,
//       "redeemptionId": 3,
//       "brandName": "Fesal",
//       "imageURL": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/169494656780771592_download.jpeg",
//       "websiteURL": null,
//       "qrCode": null,
//       "repetitionCount": 21
//     },
//     {
//       "merchantId": 127,
//       "address": "7HP8PM7G+C4, Al Olaya, Riyadh 12251, Saudi Arabia",
//       "contactPersonName": "Admin",
//       "createdDateTime": null,
//       "email": "testredtag@yopmail.com",
//       "latitude": 10.000000,
//       "longitude": 10.000000,
//       "merchantName": "Redtag",
//       "phoneNumber": "966789988787878",
//       "pinCode": "12251",
//       "portalAccess": true,
//       "crNumber": "789465321",
//       "unifiedNumber": "546123789",
//       "vatNumber": "987654123645",
//       "currencyCode": null,
//       "termsAndConditions": "Terms & Conditions",
//       "description": "",
//       "redeemptionComission": 11.0,
//       "countryId": 155,
//       "statusId": 2,
//       "redeemptionId": 3,
//       "brandName": "Redtag",
//       "imageURL": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/169580354579651341_gift.jpg",
//       "websiteURL": "",
//       "qrCode": "",
//       "repetitionCount": 14
//     },
//     {
//       "merchantId": 164,
//       "address": "01, Nehru Nagar, Kewra Bagh, Jahangirabad, Bhopal, Madhya Pradesh 462001, India",
//       "contactPersonName": "Admin",
//       "createdDateTime": null,
//       "email": "octobermerchant@yopmail.com",
//       "latitude": 23.259933,
//       "longitude": 77.412615,
//       "merchantName": "October Merchant",
//       "phoneNumber": "919878979789",
//       "pinCode": "462001",
//       "portalAccess": true,
//       "crNumber": "123456789",
//       "unifiedNumber": "123456789",
//       "vatNumber": "GST1AS122AS1234",
//       "currencyCode": null,
//       "termsAndConditions": "Terms and Conditions ",
//       "description": "",
//       "redeemptionComission": 12.0,
//       "countryId": 82,
//       "statusId": 2,
//       "redeemptionId": 3,
//       "brandName": "Oct",
//       "imageURL": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/17033290126504617_WhatsApp Image 2023-12-23 at 16.21.01.jpeg",
//       "websiteURL": "oct.com",
//       "qrCode": "OctoberMerchant@yopmail.com",
//       "repetitionCount": 10
//     },
//     {
//       "merchantId": 145,
//       "address": "7HP8PM7G+C4, Al Olaya, Riyadh 12251, Saudi Arabia",
//       "contactPersonName": "Admin",
//       "createdDateTime": null,
//       "email": "testoctnmerchnat@yopmail.com",
//       "latitude": 24.713552,
//       "longitude": -46.675296,
//       "merchantName": "Oct N",
//       "phoneNumber": "966789788779887",
//       "pinCode": "12251",
//       "portalAccess": true,
//       "crNumber": "7898797897",
//       "unifiedNumber": "8797899787",
//       "vatNumber": "7878ASA78789789",
//       "currencyCode": null,
//       "termsAndConditions": "Terms & Conditions",
//       "description": "Description",
//       "redeemptionComission": 18.0,
//       "countryId": 155,
//       "statusId": 2,
//       "redeemptionId": 3,
//       "brandName": "OCT",
//       "imageURL": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/170477922590334596_download.jpeg",
//       "websiteURL": null,
//       "qrCode": "OCTNMERCHNAT",
//       "repetitionCount": 8
//     },
//     {
//       "merchantId": 160,
//       "address": "794X+4CP, G P O Marg, Chowki Talaiya, Talaiya, Bhopal, Madhya Pradesh 462001, India",
//       "contactPersonName": "Admin",
//       "createdDateTime": null,
//       "email": "adminmerchnatfesal@yopmail.com",
//       "latitude": 23.255391,
//       "longitude": 77.398677,
//       "merchantName": "Mercahnat Fesalz",
//       "phoneNumber": "966979797979798",
//       "pinCode": "462001",
//       "portalAccess": true,
//       "crNumber": "1234567",
//       "unifiedNumber": "12345678",
//       "vatNumber": "ASS87987979715",
//       "currencyCode": null,
//       "termsAndConditions": "Terms & Conditions",
//       "description": "",
//       "redeemptionComission": 12.0,
//       "countryId": 155,
//       "statusId": 2,
//       "redeemptionId": 3,
//       "brandName": "Admin.",
//       "imageURL": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/169787212956175369_gift.jpg",
//       "websiteURL": null,
//       "qrCode": "Adminmerchnatfesal@yopmail.com",
//       "repetitionCount": 5
//     }
//   ],
//   "categories": [
//     {
//       "categoryId": 9,
//       "categoryName": "Health And Fitness",
//       "imageLink": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/170789244118526232_Heart with Pulse.png"
//     },
//     {
//       "categoryId": 21,
//       "categoryName": "Bakers",
//       "imageLink": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/170789236302031348_Birthday Cake.png"
//     },
//     {
//       "categoryId": 2,
//       "categoryName": "Accessories ",
//       "imageLink": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/170789213331993130_Flat Tire.png"
//     },
//     {
//       "categoryId": 3,
//       "categoryName": "Restaurant",
//       "imageLink": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/170789163659933516_Bar Counter.png"
//     },
//     // {
//     //   "categoryId": 31,
//     //   "categoryName": "new Restaurant..",
//     //   "imageLink": "https://com-ezygem-zap-fileupload-qa.s3.me-south-1.amazonaws.com/170789163659933516_Bar Counter.png"
//     // }
//   ]
// }


// const { merchants, categories } = data;
// const seenMerchants = new Set(); // Set to store unique merchant IDs
// const seencatcategory = new Set(); // Set to store unique merchant IDs
// const arr = []
//  merchants?.forEach((merchant) => {
//   categories?.forEach((category) => {
//     if(!seenMerchants.has(merchant?.merchantId) && !seencatcategory.has(category?.categoryId)){
//       let obj = {
//         'category Name': category?.categoryName,
//         'category id': category?.categoryId,
//         'merchant name': merchant?.merchantName,
//         'merchant id': merchant?.merchantId
//       }
//       // console.log(obj);
//       seenMerchants.add(merchant?.merchantId);
//       seencatcategory.add(category?.categoryId);
      
//       arr.push(obj)
//     }
//   })
// });

// console.log(arr);

// const { merchants, categories } = data;
// const seenMerchants = new Set(); // Set to store unique merchant IDs
// const seenCategories = new Set(); // Set to store unique category IDs

// const combinedData = merchants?.reduce((acc, merchant) => {
//   categories?.forEach((category) => {
//     if (!seenMerchants.has(merchant?.merchantId) && !seenCategories.has(category?.categoryId)) {
//       acc.push({
//         'category Name': category?.categoryName ?  category?.categoryName : '' ,
//         'category id': category?.categoryId ? category?.categoryId : '',
//         'merchant name': merchant?.merchantName ? merchant?.merchantName :'' ,
//         'merchant id': merchant?.merchantId ? merchant?.merchantId :''
//       });
//       seenMerchants.add(merchant?.merchantId);
//       seenCategories.add(category?.categoryId);
//     }
//   });
//   return acc;
// }, []);

// console.log(combinedData);


//   // filtering data for zaps portal
//   useEffect(() => {
//     if (USER_TYPE_ID === 1) {  // usertype ===1
//         const filterCouponDataList = allGiftcardList && allGiftcardList?.couponTemplate?.filter(
//             (item: any) => item?.couponTypeId === stepTwoFields?.giftcardType?.id);

//         if( stepOneField?.radionZapsValue ){ // zaps
//             if (stepTwoFields?.giftcardType?.name === "Promo Code") {  // promo
//                 filterCouponDataList= filterCouponDataList?.filter((item) => item?.generic);
//                  setFilteredData(filterCouponDataList);
//             }else{  //giftcard dormant 
//                 setFilteredData(filterCouponDataList);    
//             }
    
//         }else {  // client
//             setFilteredData(filterCouponDataList);    
            
//         }     

//     } else {  //// usertype !==1
//       const filterCouponDataList = allGiftcardList && allGiftcardList?.couponTemplate?.filter(
//         (item) => item?.couponTypeId === stepTwoFields?.giftcardType?.id);
//       setFilteredData(filterCouponDataList);
//     }
//     console.log('...useeffect for filter data');

//   }, [stepTwoFields?.giftcardType, allGiftcardList, coupanslist]);




//   if ( user){ //user type ===1

//     if( zaps){ // zaps
//         if(promo){  // promo

//         }else{  //giftcard dormant 

//         }

//     }else {  // client

//     }
//   }
  
//   else{  //usertpr !==1

//   }


// let str = '96698765432'

// let findStr = '966';

// let val = str.replace(findStr, " ");
// console.log('val',val);

// let val1 = findStr.concat(val);
// console.log('val1',val1.replace(/ +/g, ""));


let str = '96698765432';
let findStr = '966';

// Replace the first occurrence of findStr with an empty string
let val = str.replace(findStr, "");
console.log('val',val);

// Concatenate findStr and val, then remove any spaces (if any)
let val1 = findStr + val;
console.log(val1);


let obj =[
    {
        "id": 2,
        "bankName": "QNB",
        "bankPhone": 96698765432,
        "bankEmail": "qnb@yopmail.com",
        "bankAddress": "Paradise colony",
        "schemaName": "qnb_schema",
        "isdCode": 966,
        "inProgressSla": 10,
        "confirmationSla": 10,
        "rescheduleCancellationSla": 10,
        "displayInProgressSla": 10,
        "displayConfirmationSla": 10,
        "createdDate": 0,
        "userClient": null
    },
    {
        "id": 3,
        "bankName": "sNB",
        "bankPhone": 96698765432,
        "bankEmail": "qnb@yopmail.com",
        "bankAddress": "Paradise colony",
        "schemaName": "qnb_schema",
        "isdCode": 966,
        "inProgressSla": 10,
        "confirmationSla": 10,
        "rescheduleCancellationSla": 10,
        "displayInProgressSla": 10,
        "displayConfirmationSla": 10,
        "createdDate": 0,
        "userClient": null
    }
]

let objArr = obj?.map((item)=>({ id: item.id , bankName:item.bankName}));
console.log(objArr);


let data = [
    {
        "category": {
            "id": 2,
            "name": "Airport Services",
            "createdDate": 1721286350700,
            "deletedAt": null
        },
        "serviceList": [
            {
                "name": "Airport laguage",
                "checked": true,
                "vendorName": 2,
                "quantity": "12",
                "id": 15
            },
            {
                "name": "Meet and greet on arrival as you enter the terminal",
                "checked": true,
                "vendorName": 2,
                "quantity": "13",
                "id": 16
            },
            {
                "name": "Meet and greet on arrival as you enter the terminal test-1",
                "checked": true,
                "vendorName": 2,
                "quantity": "12",
                "id": 17
            },
            {
                "name": "Airport laguage tests",
                "checked": false,
                "vendorName": 2,
                "quantity": "",
                "id": 18
            },
            
            
        ],
        "selectAll": false
    }
]


// const value = data?.map(item=>{   
//     item?.serviceList?.filter(item=> item?.checked)?.map(service => {
//         console.log('...service obj', service);
//             obj = {
//                 id:service?.id,
//                 quantity:service?.quantity
//             }    
//             console.log('...obj',obj);
//             return obj;    
//     })
// });

// console.log('value', value);


// const value = data.map(item => {
//     // Ensure serviceList exists before filtering
//     const filteredServices = item?.serviceList?.filter(item => item?.checked) || [];
  
//     // Map only the necessary properties (id and quantity)
//     return filteredServices.map(service => ({
//       id: service.id, // Use dot notation for direct access
//       quantity: service.quantity,
//     }));
//   });
  
//   console.log('value', value);

// const book = 'booking_manager'
// val = book?.split('_').join(' ')

// console.log('val', val?.[0].toUpperCase() + val.slice(1));

