import Footer from "../components/Footer";
import Header from "../components/Header";
import content from "../data/content";
import lessons from "../data/lessons";
import styles from '../styles/Lessons.module.css';

const Lessons = () => {
  return (
    <>
      <Header />
        <main className={ styles.container }>
          <article className={ styles.row }>
            <section className={ styles.col }>
              <h3>{content.lessons.title}</h3>
              {content.lessons.content.map((text, index) =>
                <p key={`text-${ index }`}>{ text }</p>
              )}
              <ul className={ styles.list }>
                { lessons.current.map((lesson, index) =>
                  <li key={`current-lesson-${ index }`}>{ lesson }</li>
                )}
              </ul>
            </section>
            <aside className={ styles.col }>
              <h3>{content.tryber.title}</h3>
              {content.tryber.content.map((text, index) =>
                <p key={`tryber-${ index }`}>{ text }</p>
              )}
            </aside>
          </article>
          <section className={ styles.row }>
            <div className={ styles.col }>
              <h3>{lessons.learned.title}</h3>
              <ul className={ styles.list }>
                { lessons.learned.content.map((lesson, index) => 
                  <li key={`lerarned-lesson-${ index }`}>{ lesson }</li>
                )}
              </ul>
            </div>
            <div className={ styles.col }>
              <h3>{lessons.toLearn.title}</h3>
              <ul className={ styles.list }>
                { lessons.toLearn.content.map((lesson, index) => 
                  <li key={`to-learn-lesson-${ index }`}>{ lesson }</li>
                )}
              </ul>
            </div>
          </section>
        </main>
      <Footer />
    </>
  );
}

export default Lessons;
