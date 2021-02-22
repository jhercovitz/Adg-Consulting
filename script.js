import {info} from './hide.js';


let ListHandler = new Object();
let CheckboxHandler = new Object();


CheckboxHandler.isChecked = function (checkboxObj) {
	return (checkboxObj.checked == true);
};


function checkEmail(email) {
	let pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	if (pattern.test(email)) {
		return true;
	} else {
		return false;
	}

}

function phonenumber(phone) {
	var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/;
	if (phoneno.test(phone)) {
		return true;
	}
	else {
		return false;
	}
}

function getFormValues(oForm) {
	let elements = oForm.elements;
	let data = [];
	let element_value = null;
	for (let i = 0; i < elements.length; i++) {
		let field_type = elements[i].type.toLowerCase();
		let element_name = elements[i].getAttribute("name");
		switch (field_type) {
			case "text":
			case "email":
			case "tel":
			case "textarea":
				element_value = elements[i].value;
				data.push({ key: element_name, value: element_value });
				break;
			case "checkbox":
				element_value = CheckboxHandler.isChecked(elements[i]);
				data.push({ key: element_name, value: element_value });
				break;
			default:
				break;
		}
	}
	return data;
}

function processFormData(oForm) {
	let data = getFormValues(oForm);
	let valid = true
	let email = data.filter((e) => e.key === 'email').map((v) => v.value)
	let nom = data.filter((n) => n.key === 'nom').map((v) => v.value)
	let tel = data.filter((n) => n.key === 'tel').map((v) => v.value)
	let prenom = data.filter((p) => p.key === 'prenom').map((v) => v.value)
	let commentaires = data.filter((p) => p.key === 'commentaires').map((v) => v.value).toString()
	let tab = []
	for (let i = 0; i < data.length; i++) {
		if (typeof data[i].value === "boolean") {
			if (data[i].value === true) {
				tab.push(data[i].key)
			}
		}
	}
	let subject = tab.toString().replace(/[,]+/g, ' - ')

	if (nom[0].length < 2 && nom[0] === '') {
		valid = false
		alert("Veuillez entrer un Nom ")
	}
	if (prenom[0].length < 2 && prenom[0] === '') {
		valid = false
		alert("Veuillez entrer un Prénom")
	}
	if (!phonenumber(tel)) {
		valid = false
		alert("Format tel invalid")
	}

	if (!checkEmail(email)) {
		valid = false
		alert("Format email invalide")
	}


	if (valid) {
		Email.send({
			Host: "smtp.infomaniak.com",
			Username: "ichem.ay@adgconsulting.ch",
			Password: "PqmnRFBBy-n7",
			To: 'ichem.ay@adgconsulting.ch',
			From: email[0],
			Subject: `Je souhaiterais avoir des informations concernant : ${subject}`,
			Body: commentaires
		}).then((res) => {

			if (res === "OK") {
				alert("Email envoyée 😀")
				data = []
			} else {
				alert("une erreur est survenu ! 😕")
			}

		}
		)
	}

}

