import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
const cn = cssClassName('HumaniqReport2018');
import A_H from 'A_H';
import A_P from 'A_P';
import A_Link from 'A_Link';
import O_Hero from 'O_Hero'
import ScriptLoader from 'react-load-script'
import A_Btn from 'A_Btn'

class HumaniqReport2018 extends Component {
  componentDidMount() {
    $('#book-container').html('<div id="report-book"></div>');
    $('#show-book').on('click', function(){return false;});
  }

  render() {
    return (
      <div className={cn('section-wrapper')}>

        <link rel="stylesheet" type="text/css" href="/wow_book/wow_book.css" />
        <ScriptLoader
          url="/wow_book/combine.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />

        <A_Container type='equal'>
          <O_Hero>
            <A_H type='hero'>Humaniq Annual Report (2016 - Q3 2018)</A_H>
            <p>It’s difficult to believe that it has already been a full year since Humaniq App was released. We are excited to show a full review of our achievements, starting from the token sale and ending with the App’s anniversary. Inspiring statements, detailed statistics and many interesting insights make this document worthwhile for anyone who cares about the Global Unbanked.</p>
            <A_P type='hero'>              
              Click the Image below to read the report, or click <a href="/humaniq_report_16-18.pdf" download>here to download</a>.
            </A_P>
            <img src="/img/report-2018/Humaniq_AR_edit_261018-1-2.jpg" style={{"max-width":"100%"}} id="show-book" type="material-r-link-window" />
          </O_Hero>

          <div style={{"float":"left"}}>            
            <a href="/humaniq_report_16-18.pdf" download>Download PDF</a>
          </div>
          <div className="clearfix"></div>
          <div id="book-container" className={cn('humaniqreport2018')}>
            
          </div>
        </A_Container>
      </div>
    )
  }

handleScriptLoad() {
  //console.log(window.PDFJS);
}

}

export default HumaniqReport2018;
