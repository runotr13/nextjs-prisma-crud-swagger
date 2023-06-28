interface PageHeadProps {
  title: string;
  description: string;
  keywords: string;
}

const PageHead: React.FC<PageHeadProps> = ({description, title, keywords}) => {
  return (
    <div>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="path/to/your/image.jpg" />
        <meta property="og:url" content="http://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="http://yourwebsite.com" />
    </div>
  )
}

export default PageHead;