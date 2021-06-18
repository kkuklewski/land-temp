import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import LatestPosts from "./LatestPosts";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const features = [
  {
    title: <>Za pomocą</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores cum laborum magnam quibusdam sequi?
      </>
    ),
  },
  {
    title: <>Dodatkowo</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa distinctio ex expedita, impedit laboriosam nemo non reprehenderit tempora tenetur? Culpa deleniti distinctio dolore est.
      </>
    ),
  },
  {
    title: <>Jak w Excelu ..</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur assumenda consequatur cum dicta dolores doloribus est eveniet fuga labore molestias mollitia neque nulla.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title}/>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head/>">
      {/*baner*/}
      <header className="banner">
        <div className="container">
          <h1 className="hero__title">Lorem ipsum dolor.,</h1>
          <p className="hero__subtitle">.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, sint!</p>

        </div>
      </header>
      <main>
        <LatestPosts/>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="flex row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
            </div>
          </section>
        )}
      </main>
      <aside>
        <Button color="danger">Danger!</Button>
      </aside>
      <footer>
      </footer>
    </Layout>

  );
}

export default Home;
