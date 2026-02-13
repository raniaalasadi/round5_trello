class HideTemplateFromListAssertions {

  checkTemplateCardISHiddenFromList(cardName, listName) {
    cy.findByTestID("list-wrapper")
      .filter(`:contains("${listName}")`)
      .first()
      .then(($list) => {
        // get the full text inside the list
        const listText = $list.text();
        // assert that cardName is not anywhere inside
        expect(listText).not.to.include(cardName);
      });
return this
}
}
export default HideTemplateFromListAssertions

