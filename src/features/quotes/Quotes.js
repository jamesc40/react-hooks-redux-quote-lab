import { useSelector } from 'react-redux'
import QuoteCard from "./QuoteCard";
import { upvoteQuote, downvoteQuote, removeQuote } from './quotesSlice'

function Quotes() {

  const quotes = useSelector(state => state.quotes)
  
  console.log(upvoteQuote)

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {quotes.length > 0 ? 
              quotes.map(quote => 
                <QuoteCard 
                  key={quote.id} 
                  quote={quote} 
                  upvoteQuote={upvoteQuote}
                  downvoteQuote={downvoteQuote}
                  removeQuote={removeQuote}
                />
              ) 
            : null} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
