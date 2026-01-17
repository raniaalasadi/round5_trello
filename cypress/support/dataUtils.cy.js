import{APIKey,APIToken} from "../support/constants.cy"

///to create Board by API:
class dataUtils {

  createBoard = (boardName)=>{
    return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
  }

DeleteBoard = (Boardid)=> {

  return cy.request("DELETE",`https://api.trello.com/1/boards/${Boardid}?key=${APIKey}&token=${APIToken}`)
}}
export default dataUtils

///how to know the id for the board or any changing value?
///by the response that return from GET that we used to create that board (request)
