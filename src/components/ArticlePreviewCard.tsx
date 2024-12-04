import { useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import drawers from '@/assets/images/drawers.jpg';
import avatarMichelle from '@/assets/images/avatar-michelle.jpg';
import ShareLinks from '@/components/ShareLinks';
import SmallScreenLinks from '@/components/SmallScreenLinks';
import shareIcon from '@/assets/images/icon-share.svg';
import { Forward } from 'lucide-react';

function ArticlePreviewCard() {
  const [showShareLinks, setShowShareLinks] = useState(false);

  return (
    <Card className='w-[82vw] max-w-[61rem] flex flex-col md:flex-row shadow-xl border-none'>
      <CardHeader className='space-y-0 p-0 block w-full'>
        {/* image */}
        <img
          src={drawers}
          alt='drawers'
          className='h-56 md:h-full object-cover object-top md:object-left w-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl'
        />
      </CardHeader>
      {/* Content */}
      <CardContent className='relative p-6 md:p-10'>
        <CardTitle className='mb-4 md:mb-6 tracking-normal text-base md:text-3xl font-medium text-veryDarkGrayishBlue'>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </CardTitle>
        <p className='mb-8 md:mb-6 text-sm md:text-lg text-desaturatedDarkBlue'>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <CardFooter className='relative p-0'>
          <img
            src={avatarMichelle}
            alt='avatar michelle'
            className='rounded-full w-12 h-12 me-5'
          />
          <div>
            <h3 className='text-veryDarkGrayishBlue text-sm font-medium'>
              Michelle Appleton
            </h3>
            <p>
              <span className='text-sm text-grayishBlue'>03 Dec 2024</span>
            </p>
          </div>
          {/* Share Button */}
          <Button
            size='default'
            className={`ml-auto w-9 p-0 rounded-full ${
              showShareLinks
                ? 'hover:bg-veryDarkGrayishBlue bg-veryDarkGrayishBlue'
                : 'hover:bg-lightGrayishBlue bg-lightGrayishBlue'
            }`}
            onClick={() => setShowShareLinks(!showShareLinks)}
          >
            {showShareLinks ? (
              <Forward className='text-white' />
            ) : (
              <img src={shareIcon} alt='share icon' />
            )}
          </Button>
          {/* SHARE Component */}
          <ShareLinks showShareLinks={showShareLinks} />
        </CardFooter>

        {/* SHARE Component For Small Screens */}
        <SmallScreenLinks
          showShareLinks={showShareLinks}
          setShowShareLinks={setShowShareLinks}
        />
      </CardContent>
    </Card>
  );
}

export default ArticlePreviewCard;
