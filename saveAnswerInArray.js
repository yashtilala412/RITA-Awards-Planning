var arrofAnswer = await localStorage.getItem("arrOfAnswer");
arrofAnswer = JSON.parse(arrofAnswer);
var answer = variables.answe;
var k = parseInt(localStorage.getItem("k"));
arrofAnswer[k-1]=answer;
await actions.setLocalStorage('arrOfAnswer',JSON.stringify(arrofAnswer));