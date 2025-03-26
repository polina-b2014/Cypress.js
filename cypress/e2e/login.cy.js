describe('Проверка формы логина и пароля', function () {

 //1
   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверить совпадение цвета кнопки "Восстановить пароль"

        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); // Нажать войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяем, что после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю.
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка наличия крестика (закрыть) и он виден пользователю.
    })
 //2
   it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверить совпадение цвета кнопки "Восстановить пароль"

        cy.get('#forgotEmailButton').click(); // Нажимаю кнопку "Восстановить пароль"

        cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввести почту для восстановления
        cy.get('#restoreEmailButton').click() //Нажали кнопку "Отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяем на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю.
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка наличия крестика (закрыть) и он виден пользователю.
    })
//3
   it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверить совпадение цвета кнопки "Восстановить пароль"

        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio9'); //Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажать войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяем, что после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю.
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка наличия крестика (закрыть) и он виден пользователю.
    })
//4
   it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверить совпадение цвета кнопки "Восстановить пароль"

        cy.get('#mail').type('german1@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажать войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяем, что после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю.
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка наличия крестика (закрыть) и он виден пользователю.
    })
//5
   it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверить совпадение цвета кнопки "Восстановить пароль"

        cy.get('#mail').type('germandolnikov.ru'); //Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); // Нажать войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяем, что после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю.
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка наличия крестика (закрыть) и он виден пользователю.
    })
//6
  it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверить совпадение цвета кнопки "Восстановить пароль"

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажать войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяем, что после авторизации отображается корректный текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю.
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка наличия крестика (закрыть) и он виден пользователю.
    })

})