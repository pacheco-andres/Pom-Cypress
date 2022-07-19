class Login{
    email(){
        return cy.get('input[type="email"]')
    }
    password(){
        return cy.get('input[type="password"]')
    }
    SignInButton(){
        return cy.get('.btn').contains('Sign in')
    }
    assertion(){
        return cy.get('.error-messages').should('have.text', 'email or password is invalid')
    }
    newPostButton(){
        return cy.contains('New Post')
    }
    NewPostTitle(){
        return cy.get('.form-control.form-control-lg')
    }
    NewPostDescription(){
        return cy.get("input[placeholder=\"What's this article about?\"]")
    }
    WriteYourArticle(){
        return cy.get(':nth-child(3) >.form-control')
    }
    NewPostTags(){
        return cy.get('.form-control').last()
    }
    NewPostButtonArticle(){
        return cy.contains('Publish Article')
    }
    NewPostAssertion(){
        return cy.get('.error-messages').should('have.text', 'title must be unique')
    }
    NewPostAssertionBlank(){
        return cy.get('.error-messages').should('have.text', "title can't be blank")
    }
    newPostButtonHome(){
        return cy.contains('Home')
    }
    CreteAnewImplementation(){
        return cy.contains('Create a new implementation')
    }
    WriteAcomentImplementation(){
        return cy.get('.form-control')
    }
    PostComentButton(){
        return cy.get('.btn.btn-sm.btn-primary')
    }
}

export default Login
