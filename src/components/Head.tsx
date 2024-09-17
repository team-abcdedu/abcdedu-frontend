import { Helmet } from 'react-helmet-async';

interface HeadProps {
  title?: string;
  description?: string;
}

export default function Head({
  title = 'ABCDEdu',
  description = 'Data science education services for middle and high school students',
}: HeadProps) {
  return (
    <Helmet>
      {/* HTML meta tag list */}
      <title>{title}</title>
      <meta name='title' content={title}></meta>
      <meta name='description' content={description} />

      {/* <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} /> */}
    </Helmet>
  );
}
