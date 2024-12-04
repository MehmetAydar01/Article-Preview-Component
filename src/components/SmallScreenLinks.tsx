import facebookIcon from '@/assets/images/icon-facebook.svg';
import twitterIcon from '@/assets/images/icon-twitter.svg';
import pinterestIcon from '@/assets/images/icon-pinterest.svg';
import { Button } from '@/components/ui/button';
import shareIcon from '@/assets/images/icon-share.svg';
import { Forward } from 'lucide-react';

type SmallScreenLinksProps = {
  showShareLinks: boolean;
  setShowShareLinks: React.Dispatch<React.SetStateAction<boolean>>;
};

function SmallScreenLinks({
  showShareLinks,
  setShowShareLinks,
}: SmallScreenLinksProps) {
  if (!showShareLinks) {
    return null;
  }

  return (
    <div className='p-6 md:hidden absolute left-0 bottom-0 w-full z-20 rounded-b-xl bg-veryDarkGrayishBlue'>
      <div className='flex items-center gap-x-3 h-12'>
        <span className='tracking-widest uppercase text-grayishBlue'>
          Share
        </span>
        <img src={facebookIcon} alt='icon facebook' />
        <img src={twitterIcon} alt='icon twitter' />
        <img src={pinterestIcon} alt='icon pinterest' />
        {/* Share Button */}
        <Button
          size='default'
          className={`ml-auto w-9 p-0 rounded-full ${
            showShareLinks && 'hover:bg-grayishBlue bg-desaturatedDarkBlue'
          }`}
          onClick={() => setShowShareLinks(!showShareLinks)}
        >
          {showShareLinks ? (
            <Forward className='text-white' />
          ) : (
            <img src={shareIcon} alt='share icon' />
          )}
        </Button>
      </div>
    </div>
  );
}

export default SmallScreenLinks;
