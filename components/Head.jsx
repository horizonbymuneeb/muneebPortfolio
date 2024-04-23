import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Data Scientist and AI Engineer with a passion for software development. I have experience in building AI models, data analysis, and software development."
      />
      <meta
        name="keywords"
        content="muneeb anjum, muneeb, anjum, python developer portfolio, ,muneeb web developer, muneeb developer, machine learning, muneeb anjum portfolio, horizonportfolio"
      />
      <meta property="og:title" content="Muneeb Anjum's Portfolio" />
      <meta
        property="og:description"
        content="Data Scientist and AI Engineer with a passion for software development."
      />
      <meta property="og:image" content="https://imgur.com/AvyJx3v.png" />
      <meta property="og:url" content="#" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Muneeb Anjum',
};
