export default class Validator {
	static validateUsername(username) {
	  return /^[a-z][-\w]+[a-z]$/i.test(username) && !/\d{4,}/.test(username);
	}
  }

  //Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
//Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.//

//support-1_netology