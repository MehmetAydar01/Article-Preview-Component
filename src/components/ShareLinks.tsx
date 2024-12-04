import facebookIcon from '@/assets/images/icon-facebook.svg';
import twitterIcon from '@/assets/images/icon-twitter.svg';
import pinterestIcon from '@/assets/images/icon-pinterest.svg';

type ShareLinksProps = {
  showShareLinks: boolean;
};

function ShareLinks({ showShareLinks }: ShareLinksProps) {
  if (!showShareLinks) {
    return null;
  }

  return (
    <div className='hidden md:block absolute -top-20 -right-[6.3rem] z-10 max-w-60'>
      <div className='flex h-full md:h-auto items-center justify-center px-10 py-4 gap-x-5 bg-veryDarkGrayishBlue rounded-xl'>
        <span className='tracking-widest uppercase text-grayishBlue'>
          Share
        </span>
        <img src={facebookIcon} alt='icon facebook' />
        <img src={twitterIcon} alt='icon twitter' />
        <img src={pinterestIcon} alt='icon pinterest' />
      </div>
      <div className='absolute -bottom-3 flex justify-center w-full'>
        {/* Triangle Shape */}
        <div className='w-3 h-3 border-s-[12px] border-s-transparent border-t-[12px] border-veryDarkGrayishBlue border-e-[12px] border-e-transparent border-b-0'></div>
      </div>
    </div>
  );
}

export default ShareLinks;
