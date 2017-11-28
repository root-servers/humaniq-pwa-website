import React from 'react'
import A_Code from 'A_Code'
import * as T from "prop-types"
import './styles.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('kb-article-section')

const Section = ({mix, sectionId, sectionData: {title: sectionTitle, content, sampleCode}}) => (
  <section
    id={sectionId}
    className={cn([mix])}
  >
    <h4 className={cn('title')}>{sectionTitle}</h4>
    <p
      className={cn('content')}
      dangerouslySetInnerHTML={{__html: content}}
    />
    <A_Code
      mix={cn('code-snippet')}
      codeString={sampleCode}
    />
  </section>
)

Section.propTypes = {
  mix: T.string, //BEM mixin from parent block
  sectionData: T.object.isRequired, //section data
};

export default Section