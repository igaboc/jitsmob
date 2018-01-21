import React, { Fragment } from 'react'
import Content2 from './Content2'
import ContentFilter from './ContentFilter'
import './ContentLibrary.css';

function ContentLibrary({
  screenName,
  contents,
  showFilter,
  filterToggleToApp,
  catFilterToApp,
  catFilter,
  bodyFilterToApp,
  bodyFilter,
  currentPage,
  contentPerPage,
  onHandleClick
}) {
  // Filter code start
    let videos = []
    let catFilteredArray = []
    let bodyFilteredArray = []
    // contents["contents"]
    if (catFilter.length < 1 && bodyFilter.length < 1) {
      videos = contents
    }
    else if (catFilter.length > 0 && bodyFilter.length < 1 ) {
      catFilter.map((filterWord) => {
        catFilteredArray= catFilteredArray.concat(contents.filter(content => {
          return content.category === filterWord
        }))
      })
      videos = catFilteredArray
    }
    else if (catFilter.length < 1 && bodyFilter.length > 0 ) {
      bodyFilter.map((filterWord) => {
        bodyFilteredArray= bodyFilteredArray.concat(contents.filter(content => {
          return content.bodyPart === filterWord
        }))
      })
      videos = bodyFilteredArray
    }
    else {
      // if both filters need to be run
      catFilter.map((filterWord) => {
        catFilteredArray= catFilteredArray.concat(contents.filter(content => {
          return content.category === filterWord
        }))
      })
      bodyFilter.map((filterWord) => {
        bodyFilteredArray= bodyFilteredArray.concat(contents.filter(content => {
          return content.bodyPart === filterWord
        }))
      })
      videos = catFilteredArray.filter((n) => bodyFilteredArray.includes(n))
    }
  // Filter Code End

  // Pagination Code Start

      // Logic for displaying content for pagination
      const indexOfLastcontent = currentPage * contentPerPage;
      const indexOfFirstcontent = indexOfLastcontent - contentPerPage;
      const currentVideos = videos.slice(indexOfFirstcontent, indexOfLastcontent);

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(videos.length / contentPerPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li className={`page-item ${currentPage === number ? 'active' : null}`} >
            <li
              className='page-link '
              key={number}
              id={number}
              onClick={ (event) => {
                onHandleClick(event)
              }}
            >
                {number}
            </li>
          </li>
        );
      });


  // Pagination Code End

  return (
    <div>
      <ContentFilter
        onCatFilterToggle={ (word) => {
          catFilterToApp(word)
        }}
        onBodyFilterToggle={ (word) => {
          bodyFilterToApp(word)
        }}
        catFilter={catFilter}
        bodyFilter={bodyFilter}
        filterToggle={ (event) => filterToggleToApp() }
        showFilter={showFilter}
      />
      <h2 className='heading'>EXERCISES</h2>
      <div className='video-container'>
      {console.log('current videos', currentVideos)}
      {
        currentVideos.map((content) => {
          return (
            <Fragment key={content._id}>
              <Content2
                {...content}
                title={content.title}
                category={content.category}
                bodyPart={content.bodyPart}
                youtubeURL={content.youtubeURL}
                description={content.description}
                id={content._id}
              />
            </Fragment>
          )
        })
      }
      </div>
        <ul className='pagination justify-content-end'>
          {renderPageNumbers}
        </ul>
    </div>
  )
}

export default ContentLibrary