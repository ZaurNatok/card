let client = JSON.parse(localStorage.getItem('client'));

const name = document.querySelector('.name');
const surname = document.querySelector('.surname');
const middlename = document.querySelector('.middlename');
const gender = document.querySelector('.gender');
const citizenship = document.querySelector('.citizenship');
const dateBirth = document.querySelector('.date-of-birth');
const placeBirth = document.querySelector('.place-of-birth');

const docType = document.querySelector('.doc-type');
const docNumber = document.querySelector('.doc-number');
const docIssued = document.querySelector('.doc-issued');
const docDateIssued = document.querySelector('.doc-date-issued');
const docDateExpired = document.querySelector('.doc-date-expired');

const address = document.querySelector('.address');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');

const paymentSystem = document.querySelector('.payment-system');
const currency = document.querySelector('.currency');

const pdlPosition = document.querySelector('.pdl_position');
const pdlName = document.querySelector('.pdl_name');
const pdlLastName = document.querySelector('.pdl_surname');
const pdlMiddleName = document.querySelector('.pdl_middlename');

name.textContent = client.first_name;
surname.textContent = client.last_name;
middlename.textContent = client.middle_name;
gender.textContent = client.gender;
citizenship.textContent = client.citizenship;
dateBirth.textContent = client.dateBirth;
placeBirth.textContent = client.placeBirth;

docType.textContent = client.docType;
docNumber.textContent = client.docNumber;
docIssued.textContent = client.docIssued;
docDateIssued.textContent = client.docDateIssued;
docDateExpired.textContent = client.docDateExpired;

address.textContent = client.address;
email.textContent = client.email;
phone.textContent = client.phone;

paymentSystem.textContent = client.paymentSystem;
currency.textContent = client.currency;

pdlPosition.textContent = client.fpepPosition;
pdlName.textContent = client.fpepLastName;
pdlLastName.textContent = client.fpepFirstName;
pdlMiddleName.textContent = client.fpepMiddleName;