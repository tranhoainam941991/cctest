describe('Input form', () => {
    beforeEach(() => {
        cy.visit('/composite-product/fdb6b185-2844-429d-888b-f7aa9e714dab')
        cy.waitForReact();
    })

    it('accepts input', () => {
        cy.react('ProductSelect', {props:
                {product: {productId: "94daaf0b-ec73-4052-aba0-9b0c5d502417", quantity: 4, type: "PRODUCT"}}}
                ).children('input')
            .should('have.value', 4)

    })
})