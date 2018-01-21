import React from 'react'
import './GoogleAnalytics.css';

function GoogleAnalytics({
  title
}) {
  return (
    
    <div>
      <h1>{ title }</h1>
      <div className='report-card'>
        <h3 className='text-muted'>Session Count Comparison by Week</h3>
        <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRhCnArB4jO01TalnpJhJOOjRKfJMPuS7rFt43OvLhq52te4oodCDJkogj1YEZElXr0VAOM02yN7Xql/pubchart?oid=1193944707&amp;format=interactive"></iframe>
      </div>

      <div className='report-card'>
        <h3 className='text-muted'>Sessions by device</h3>
        <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRhCnArB4jO01TalnpJhJOOjRKfJMPuS7rFt43OvLhq52te4oodCDJkogj1YEZElXr0VAOM02yN7Xql/pubchart?oid=958295075&amp;format=interactive"></iframe>
      </div>
      <div className='report-card'>
        <h3 className='text-muted'>Session Count by Country</h3>
        <iframe width="502.5" height="310.7125" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRhCnArB4jO01TalnpJhJOOjRKfJMPuS7rFt43OvLhq52te4oodCDJkogj1YEZElXr0VAOM02yN7Xql/pubchart?oid=875549682&amp;format=interactive"></iframe>
        <iframe width="600" height="184.5" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRhCnArB4jO01TalnpJhJOOjRKfJMPuS7rFt43OvLhq52te4oodCDJkogj1YEZElXr0VAOM02yN7Xql/pubchart?oid=1032904969&amp;format=interactive"></iframe>
      </div>

    </div>
  )
}

export default GoogleAnalytics