


var university = [];
var studentList = []; 
var result = 0;
var number = 0;

let dima = {login : 'st1', password : '1234', name : 'Дмитрий', surname : 'Иванов', count : 20};
let masha = {login : '22', password : '555', name : 'Мария', surname : 'Смирнова', count : 5};

var teachersList = [];
let history ={login : '333', password : '777', name : 'Александр', surname : 'Сергеевич'}
let english ={login : 'eng', password : '888', name : 'Максим', surname : 'Викторович'}

studentList.push(dima, masha);
teachersList.push(history, english);
university.push(studentList,teachersList);


function approve(login, password){
    var log = [];
    var pas = [];
    var result = 0;
    for(let i = 0; i < university.length; i++){
        for(let a = 0; a < university[i].length; a++){
            log.push(university[i][a].login);}
    }

    for(let i = 0; i < university.length; i++){
        for(let a = 0; a < university[i].length; a++){ 
            pas.push(university[i][a].password);}
    }


    if(!(log.includes(login) && pas.includes(password))){
        alert('Введены некорректные данные');
        result = 0;
    }else{
        let list = [];
        for(let i = 0; i < teachersList.length; i++){
            list.push(teachersList[i].login);
        }
        if(!(list.includes(login))){
            result = 2;
        }else{
            result = 3;
        }   
    }
    return result;
}


function findStudent(login){
    for(let i = 0; i < studentList.length; i++){
        if(studentList[i].login == login){
            number =i;
        }else{
            number = NaN;
        }
    }
    return number
}



function hello(login){
    number = findStudent(login);
    alert('Добрый день! ' + studentList[number].name)
    answer = Number(prompt('Если вы хотите посмотреть карточку студента нажимте 1'));
        if(answer == 1){
            alert('Имя: ' + studentList[number].name + '\n' + 'Фамилия: ' + studentList[number].surname + '\n' + 'Количество баллов: ' + studentList[number].count);
        }else{
            alert('До свидания!')
        }
}

function helloTeacher(login){
    for(let i = 0; i < teachersList.length; i++){
        if(teachersList[i].login == login){
            number = i;
        }
    }
    alert('Добрый день! ' + teachersList[number].name + ' ' + teachersList[number].surname);
    number = findStudent(Number(prompt('Введите логин студента')));
    if(isNaN(number)){
        alert('Введен некорректный логин')
    }else{
    alert('Имя: ' + studentList[number].name + '\n' + 'Фамилия: ' + studentList[number].surname + '\n' + 'Количество баллов: ' + studentList[number].count);
    changeInfo(String(prompt('Если вы хотите увеличить баллы нажмите +, уменьшить -')));
    }
}




function changeInfo(operation){
    let result = 'Введены неверные данные';
    if(operation != '+' && operation != '-'){alert('Введен некорректный мат. оператор'); return result};
    let num = Number(prompt('Введите количество баллов'));
    if(isNaN(num)){alert('Введена некорректная цифра'); return result};
    
    switch(operation){
        case '+':
            studentList[number].count += num;
            break
    
        case '-':
            studentList[number].count -= num;
            break
    }
    alert('Имя: ' + studentList[number].name + '\n' + 'Фамилия: ' + studentList[number].surname + '\n' + 'Количество баллов: ' + studentList[number].count);
    
}





function addStudent(){
    let login = String(prompt('Enter login'));
    let password = String(prompt('Enter password'));
    var student = {
        login : login,
        password : password
    };
    studentList.push(student);
    alert('Поздравляем, вы зарегистрированны!')
}










let answer = Number(prompt('Привет, если ты уже зарегистрирован в системе, введи 1, если нет - любой другой символ'));


if(answer == 1){
    let login = String(prompt('Введите ваш логин'));
    let password =  String(prompt('Введите ваш пароль'));
    result = approve(login, password);
    if(result == 2){
        hello(login)
    }else if(result == 3){
        helloTeacher(login)
    }
    
}else{
    addStudent()
    console.log(studentList)
}