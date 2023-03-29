const fpep = document.querySelector('.checkbox');
const fpepName = document.querySelector('.fpepName');

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('checkbox')) {
        fpepName.classList.toggle('invisible');
    } 
})
































let theForm = document.forms.the_form;

const checkPublicYes = document.getElementById('publicYes');
const checkPublicNo = document.getElementById('publicNo');

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

let paymentSystem = theForm.card_type;
let currency = theForm.card_ccy;

let fpepPosition = theForm.fpep_position;
let fpepLastName = theForm.fpep_last_name;
let fpepFirstName = theForm.fpep_first_name;
let fpepMiddleName = theForm.fpep_middle_name;

let submitButton= document.querySelector('.submit_button');

theForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let client = {
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
        fpepMiddleName: fpepMiddleName.value
    }
    
    localStorage.setItem('client', JSON.stringify(client))
    
    
    window.location.href='test.html';

  });

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
        })
    }
}
*/
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



