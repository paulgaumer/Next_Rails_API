import Link from 'next/link';

const FeaturedCard = ({ episode }) => {
  const ep = episode;
  console.log(ep);
  return (
    <>
      <div className="mx-auto my-20 max-w-7xl">
        <Link href={`/episodes/${ep.guid}`} className="">
          {/* <div className="items-center mt-8 bg-orange-100 border-0 border-solid rounded lg:flex"> */}
          <div
            className="items-center mt-8 rounded-t lg:flex"
            style={{
              borderTop: '1px solid #e2e8f0',
              borderLeft: '1px solid #e2e8f0',
              borderRight: '1px solid #e2e8f0',
            }}
          >
            <div className="lg:w-1/3">
              <img
                src={ep.podcastCover.url}
                className="object-cover object-center h-56 rounded-tl rounded-bl md:h-84"
                alt=""
              />
              {/* <Img
              fluid={art.mainImage.asset.fluid}
              alt={`portrait of ${art.interviewee}`}
              className="object-cover h-56 rounded-tl rounded-bl md:h-84"
              imgStyle={{ objectPosition: 'center' }}
            /> */}
            </div>
            <div className="py-4 pl-8 pr-4 lg:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl font-titles">
                {ep.title}
              </h3>
              <p className="text-xl text-gray-700 font-titles">
                {/* <span className="text-orange-500">-</span> with {ep.interviewee} */}
              </p>
              <div className="pt-6 break-words">{ep.description}</div>
              <Link
                href={`/episodes/${ep.guid}`}
                className="text-sm font-semibold text-orange-500 hover:text-orange-400"
              >
                Read the full interview...
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default FeaturedCard;
