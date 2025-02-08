export interface IQuoteForm {
  category: string;
  author: string;
  quote: string;
}

export interface IQuote extends IQuoteForm {
  id: string;
}

export interface IQuoteApi {
  [id: string]: IQuoteForm;

}