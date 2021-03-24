import React from 'react';

export default function Card(){
  return (
    <section className="wrapper">
      <ul className="column__list">
      
       <li className="column__item">
          <div className="column__title--wrapper">
            <h2>Ready For Launch</h2>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <ul className="card__list">
            <li className="card__item">
              <h6 className="card__title">Improved API documentation</h6>
              <ol className="card__actions">
                <li className="card__actions--wrapper">
                  <i className="far fa-comment"></i><span className="card__actions--text">1</span></li>
                <ol className="card__avatars">
                <li className="card__avatars--item">
                  <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                </li>
                    <li className="card__avatars--item">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman standing near blue steel gate" className="avatar__image" />
                </li>
              </ol>
              </ol>
            </li>
        <li className="card__item">
              <span className="card__tag card__tag--high">High Priority</span>
              <h6 className="card__title">Slow log-in issue</h6>
          <ol className="card__actions">
                <li className="card__actions--wrapper">
                  <i className="far fa-comment"></i><span className="card__actions--text">1</span></li>
                  <ol className="card__avatars">
                <li className="card__avatars--item">
                  <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                </li>
                    <li className="card__avatars--item">
                  <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                </li>
              </ol>
              </ol>
            </li>
        <li className="card__item">
              <span className="card__tag card__tag--high">High Priority</span>
              <h6 className="card__title">HTML 5 Support</h6>
              <ol className="card__actions">
                <ol className="card__avatars">
                <li className="card__avatars--item">
                  <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                </li>
                    <li className="card__avatars--item">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman standing near blue steel gate" className="avatar__image" />
                </li>
              </ol>
              </ol>
            </li>
    <li className="card__item">
              <span className="card__tag card__tag--design">Design</span>
      <span className="card__tag card__tag--mobile">Mobile</span>
              <h6 className="card__title">iOS app redesign</h6>
              <ol className="card__actions">
                <li className="card__actions--wrapper">
                  <i className="far fa-comment"></i><span className="card__actions--text">1</span></li>
                <ol className="card__avatars">
                <li className="card__avatars--item">
                  <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                </li>
                    <li className="card__avatars--item">
                  <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                </li>
              </ol>
              </ol>
            </li>
          </ul>
          <div className="column__item--cta">
            <i className="fas fa-plus"></i>
            <h4>Add another card</h4>
          </div>
        </li>
      </ul>
    </section>
  )
}