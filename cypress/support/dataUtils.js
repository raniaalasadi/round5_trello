import { APIKey, APIToken } from "../support/constants.cy"

class DataUtils {

  createBoard = (boardName) => {
    return cy.request("POST", `https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
  }

  deleteBoard = (boardID) => {
    return cy.request("DELETE", `https://api.trello.com/1/boards/${boardID}?key=${APIKey}&token=${APIToken}`)
  }

  createCard = (cardName, boardID) => {
    return cy.request("GET", `https://api.trello.com/1/boards/${boardID}/lists?&key=${APIKey}&token=${APIToken}`
      ).then((response) => {
        const listId = response.body[0].id
        return cy.request("POST", `https://api.trello.com/1/cards?name=${cardName}&idList=${listId}&key=${APIKey}&token=${APIToken}`)
      })
  }

}

export default  DataUtils


///how to know the id for the board or any changing value?
///by the response that return from GET that we used to create that board (request)
