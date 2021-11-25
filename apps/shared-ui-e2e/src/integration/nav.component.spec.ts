describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navcomponent--primary'));
  it('should render the component', () => {
    cy.get('nx-jest-unit-test-fun-nav').should('exist');
  });
});