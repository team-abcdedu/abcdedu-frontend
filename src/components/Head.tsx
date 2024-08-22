import { Helmet } from 'react-helmet-async';

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function Head({
  title = 'ABCDEdu',
  description = 'Data science education services for middle and high school students',
  image = '', // TODO: 이미지 세팅
}: HeadProps) {
  return (
    <Helmet>
      {/* HTML meta tag list */}
      <title>{title}</title>
      <meta name='title' content={title}></meta>
      <meta name='description' content={description} />

      {/* Kakaotalk, Facebook meta tag list */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta
        property='og:image'
        content={image}
        // og:image 테스트에 사용된 이미지
        // content='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fc48aa73694122edae77e6fe97fafbfbe.cdn.bubble.io%2Ff1723539200740x460801830507616450%2F%25EB%25A1%259C%25EA%25B3%25A0%2520%25EC%258B%25AC%25EB%25B3%25BC.png?w=&h=&auto=compress&dpr=1&fit=max'
      />

      {/* Twitter meta tag list */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
}
