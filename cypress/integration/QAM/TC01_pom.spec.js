import Login from '../POM/login'

describe('login', function(){
    const login = new Login()

    it('Sign in', function(){
        cy.visit('/#/login?_k=rkz9yh')
        login.email().type('andres@michelada.io')
        login.password().type('test123')
        login.SignInButton().should('be.visible').click()
    })

    it('Unregistered user', function(){
        cy.visit('/#/login?_k=65vyc2')
        login.email().type('andrestest@michelada.io')
        login.password().type('test123')
        login.SignInButton().should('be.visible').click()
        login.assertion()
    })

    it('Genereting the new post', function(){
        cy.visit('/#/login?_k=65vyc2')
        login.email().type('andres@michelada.io')
        login.password().type('test123')
        login.SignInButton().should('be.visible').click()
        login.newPostButton().click()
        login.NewPostTitle().type('New post test')
        login.NewPostDescription().type('Test description')
        login.WriteYourArticle().type('Test with cypress')
        login.NewPostTags().type('test')
        login.NewPostButtonArticle().click()
        login.NewPostAssertion()
    })

    it('post blank',function(){
        cy.visit('/#/login?_k=65vyc2')
        login.email().type('andres@michelada.io')
        login.password().type('test123')
        login.SignInButton().should('be.visible').click()
        login.newPostButton().click()
        login.NewPostButtonArticle().click()
        login.NewPostAssertionBlank()
    })
    it.only('Post the create a new implemantation', function(){
        cy.visit('/#/login?_k=65vyc2')
        login.email().type('andres@michelada.io')
        login.password().type('test123')
        login.SignInButton().should('be.visible').click()
        login.newPostButtonHome().click()
        login.CreteAnewImplementation().click()
        login.WriteAcomentImplementation().type('Test cypress')
        login.PostComentButton().click()
    })
        
})