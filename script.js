const fpep = document.querySelector('.checkbox');
const fpepName = document.querySelector('.fpepName');
let theForm = document.forms.the_form;
let theFormName = theForm.first_name;
let theFormLastName = theForm.last_name;
let theFormMiddleName = theForm.middle_name;
let theFormGender = theForm.gender;
let theFormCitizenship = theForm.citizenship;
let theFormDateBirth = theForm.date_of_birth;
let theFormPlaceBirth = theForm.place_of_birth;

let theFormDocType = theForm.type_of_document;
let theFormDocNumber = theForm.passport_number;
let theFormDocIssued = theForm.issuing_authority;
let theFormDocDateIssued = theForm.date_of_issue;
let theFormDocDateExpired = theForm.date_of_expired;

let address = theForm.address;
let phone = theForm.telephone_number;
let email = theForm.email;
let deliveryAddress = theForm.card_delivery_address_in_russia;

let paymentSystem = theForm.card_type;
let currency = theForm.card_ccy;

let fpepPosition = theForm.fpep_position;
let fpepLastName = theForm.fpep_last_name;
let fpepFirstName = theForm.fpep_first_name;
let fpepMiddleName = theForm.fpep_middle_name;

let nextButton= document.querySelector('.button_next');
let downloadBtn = document.querySelector('.download');

let loader = document.querySelector('.loader');

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('checkbox')) {
        fpepName.classList.toggle('invisible');
    }
})



theForm.addEventListener('submit', function(e) {
    e.preventDefault()
    
    let date = dateFormat(new Date());
    let isFpep = fpep();


    let client = {
        date: date,
        first_name: theFormName.value,
        last_name: theFormLastName.value,
        middle_name: theFormMiddleName.value,
        citizenship: theFormCitizenship.value,
        gender: theFormGender.value,
        dateBirth: theFormDateBirth.value,
        placeBirth: theFormPlaceBirth.value,
        docType: theFormDocType.value,
        docNumber: theFormDocNumber.value,
        docIssued: theFormDocIssued.value,
        docDateIssued: theFormDocDateIssued.value,
        docDateExpired: theFormDocDateExpired.value,
        address: address.value,
        phone: phone.value,
        email: email.value,
        paymentSystem: paymentSystem.value,
        currency: currency.value,
        fpepPosition: fpepPosition.value,
        fpepLastName: fpepLastName.value,
        fpepFirstName: fpepFirstName.value,
        fpepMiddleName: fpepMiddleName.value,
        deliveryAddress: deliveryAddress.value,
        fpep: isFpep
        }
    
    localStorage.setItem('client', JSON.stringify(client))

addNewClient(client);


function fpep() {

    if (fpepName.classList.contains('invisible')) {
                    return "Нет";
                    } else { 
                        return "Да";
                          }
 }


function dateFormat(date) {
    var theDate = date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " +
    date.getHours() + ":" + date.getMinutes();

    return theDate;
}


  /*
    const getCSV = (object) => {
       
        let csv = Object.entries(Object.entries(object)[0][1]).map((e) => e[0]).join(",");
        for (const [k,v] of Object.entries(object)) {
          csv += "\r\n" + Object.values(v).join("") // \n is enough in linux to reduce the csv size
        }
        //Uncomment for file download
        let j = document.createElement("a")
        j.download = client.last_name+" "+client.first_name+".csv"
        j.href = URL.createObjectURL(new Blob([csv], {type : 'text/csv;charset=utf-8'}))
        j.click()
        return csv;
        
      }
      
      console.log(
        getCSV(client)
      )





const download = function (client) {
 
    // Creating a Blob for having a csv file format
    // and passing the data with type
    const blob = new Blob([client], { type: 'text/csv' });
 
    // Creating an object for downloading url
    const url = window.URL.createObjectURL(blob)
 
    // Creating an anchor(a) tag of HTML
    const a = document.createElement('a')
 
    // Passing the blob downloading url
    a.setAttribute('href', url)
 
    // Setting the anchor tag attribute for downloading
    // and passing the download file name
    a.setAttribute('download', 'download.csv');
 
    // Performing a download with click
    a.click()
}
 
const csvmaker = function (client) {
 
    // Empty array for storing the values
    csvRows = [];
 
    // Headers is basically a keys of an
    // object which is id, name, and
    // profession
    const headers = Object.keys(client);
 
    // As for making csv format, headers
    // must be separated by comma and
    // pushing it into array
    csvRows.push(headers.join(','));
 
    // Pushing Object values into array
    // with comma separation
    const values = Object.values(client).join(',');
    csvRows.push(values)
 
    // Returning the array joining with new line
    return csvRows.join('\n')
}
 
const get = async function () {
 
  
 
    const csvdata = csvmaker(client);
    download(csvdata);
}
 
get();

*/

  });


  
function addNewClient(client) {
    var retrievedClient = localStorage.getItem('client');
    let theClient = JSON.parse(retrievedClient);
    console.log(theClient);
    loader.classList.remove('invisible');
    let url = 'https://api.sheety.co/fab97654fa94675e6ddbd722da66e294/cards/clients';
    let body = {
        "client": {
            "date": theClient.date,
            "name": theClient.first_name,
            "lastName": theClient.last_name,
            "middleName": theClient.middle_name,
            "citizenship": theClient.citizenship,
            "gender": theClient.gender,
            "dateBirth": theClient.dateBirth,
            "placeBirth": theClient.placeBirth,
            "docType": theClient.docType,
            "docNumber": theClient.docNumber,
            "dateIssue": theClient.docDateIssued,
            "dateExpired": theClient.docDateExpired,
            "issuingAuthority": theClient.docIssued,
            "phone": theClient.phone,
            "email": theClient.email,
            "address": theClient.address,
            "cardType": theClient.paymentSystem,
            "currency": theClient.currency,
            "fpep": theClient.fpep,
            "fpepPosition": theClient.fpepPosition,
            "fpepLastName": theClient.fpepLastName,
            "fpepFirstName": theClient.fpepFirstName,
            "fpepMiddleName": theClient.fpepMiddleName,
            "deliveryAddress": theClient.deliveryAddress
        }
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(json => {
        
        loader.classList.add('invisible');
        console.log(json.client);
    })
    .catch((e) => {
        loader.classList.add('invisible');
        window.location.href='error.html';
        console.log(e.response);
    })
}















const checkPublicYes = document.getElementById('publicYes');
const checkPublicNo = document.getElementById('publicNo');







  /* 
  if (checkPublicNo.checked){
    fpepPosition.setAttribute('disabled', true);
    fpepLastName.setAttribute('disabled', true);
    fpepFirstName.setAttribute('disabled', true);
    fpepMiddleName.setAttribute('disabled', true);
    if(checkPublicYes.checked) {
        checkPublicYes.checked = false;
        checkPublicYes.addEventListener('click', function() {
            checkPublicNo.checked = false;
            window.location.href='test.html';
        })
    }
}

theForm.addEventListener('click', function(){
    if (checkPublicNo.checked){
        fpepPosition.setAttribute('disabled', true);
        fpepLastName.setAttribute('disabled', true);
        fpepFirstName.setAttribute('disabled', true);
        fpepMiddleName.setAttribute('disabled', true);
        if(checkPublicYes.checked) {
            checkPublicYes.checked = false;
            checkPublicYes.addEventListener('click', function() {
                checkPublicNo.checked = false;
            })
        }
    } else if(checkPublicYes.checked) {
        fpepPosition.removeAttribute('disabled');
        fpep_last_name.removeAttribute('disabled');
        fpep_first_name.removeAttribute('disabled');
        fpep_middle_name.removeAttribute('disabled');
        if(checkPublicNo.checked) {
            checkPublicNo.checked = false;
        }
    }
})

*/

