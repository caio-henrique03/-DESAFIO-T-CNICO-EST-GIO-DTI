//Cenário 1
//verificar criação de conta bem sucedida.
describe('Criar conta', () => {
  it('Cenário 1: verificar criação de conta bem sucedida', () => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
    cy.get("input[id='email_create'").type("dtiadigital@Gmail.com")
    cy.get("button#SubmitCreate").click()
    cy.get('#id_gender1').check("1")
    cy.get("input#customer_firstname").type("Caio")
    cy.get("input#customer_lastname").type("Martins")
    cy.get("input#passwd").type("3421dti")
    cy.get('select#days').select('4'); 
    cy.get('select#months').select('4'); 
    cy.get('select#years').select('2004'); 
    cy.get("button#submitAccount").click(); 

    })    
})

//Cenário 2
//possibilidade de salvar endereço em uma conta previamente criada
describe('endereçamento', () => {
  it('Cenário 2: verificar a possibilidade de salvar endereço de uma conta previamente criada', () => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
    cy.get("input#email").type("dtiadigital@gmail.com")
    cy.get("input#passwd").type("3421dti")
    cy.get("button#SubmitLogin").click()
    cy.get('.myaccount-link-list > :nth-child(1)').click();
    cy.get("input#company").type("DTI digital")
    cy.get("input#address1").type("R.Levindo Lopes")
    cy.get("input#address2").type("Savassi")
    cy.get("input#city").type("Belo Horizonte")
    cy.get('select#id_state').select('Alabama');
    cy.get("#postcode").type("36925") 
    cy.get("input#phone").type("453351")
    cy.get("input#phone_mobile").type("453351")
    cy.get("#other").type("dtidigital3421")
    cy.get("input#alias").type("dtidigital3421")
    cy.get("button#submitAddress").click(); 
   
  })
})

//Cenário 3
//Recuperação de Senha
describe('Recuperar senha', () => {
  it('Cenário 3: Verificar a opção de recuperação de senha', () => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=password')
    cy.get("input#email").type("dtiadigital@gmail.com")
    cy.get('.btn.btn-default.button.button-medium[type="submit"]').click();
  
  })
})
