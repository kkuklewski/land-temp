import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import LatestPosts from "./LatestPosts";

const features = [
  {
    title: <>Za pomocą</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        <code>Kamery</code> : HD, UHD, 4K / <code>PLus</code> : Aparaty foto, kompakty GoPro, Dron 249g, Dron kategorii A1/B1
      </>
    ),
  },
  {
    title: <>Dodatkowo</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Streaming online, <code>Spacer Wirtualny 360</code>, Mattepor | <code>Strony internetowe</code> : Wordpress, Sklepy internetowe, Elementor, <code>HTML/CSS/JS/React</code>, Przygotowanie materiału pod Social Media oraz Doradztwo Marketingowe
      </>
    ),
  },
  {
    title: <>Jak w Excelu ..</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Wszystko jawne, daj znać jaki projekt chodzi Ci pogłowie dostaniesz różne możliwości cenowe na wykonanie tego zadanie z szczegółowym rozpisaniem pozycji.
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
          <h1 className="hero__title">Załatwimy wszystko,</h1>
          <p className="hero__subtitle">.. od czołgu po paszport polsatu.</p>

        </div>
      </header>
      <main>
        <LatestPosts/>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <footer>
        <section className="videoPlayer">
          <h2 className="text-center">Showreel</h2>
          <iframe className="embed-responsive-item videoPlayer" src="https://player.vimeo.com/video/435890018"
                  allowFullScreen></iframe>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Kontakt
            </Link>
          </div>
        </section>
      </footer>
    </Layout>

  );
}

export default Home;
